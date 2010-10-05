# Generate js-ctypes declarations from OS X framework header files
# Copyright (c) 2010 Philipp von Weitershausen <philipp@weitershausen.de>
# Distributed under the MIT License (see LICENSE.txt)

import os
import io
import pygccxml
from ordereddict import OrderedDict
from jsctypesgen import JSCTypesError, JSCTypesGen, _declKey

def groupByFile(declarations):
    by_file = OrderedDict()
    for decl in declarations:
        if not decl.location:
            continue
        filedecls = by_file.setdefault(decl.location.file_name, [])
        filedecls.append(decl)
    return by_file

def groupByFramework(declarations):
    by_framework = {}
    for decl in declarations:
        if not decl.location:
            continue
        framework = frameworkFromFilename(decl.location.file_name)
        frameworkdecls = by_framework.setdefault(framework, [])
        frameworkdecls.append(decl)
    return by_framework

def frameworkFromFilename(filename):
    segments = filename.split(os.path.sep)

    # The types defined in this file are needed all over the place
    # which may likely cause circular imports. Let's make it its own
    # fake framework.
    if segments[-1] == "MacTypes.h":
        return "MacTypes"

    if segments[-2] == "Headers":
        return segments[-3][:-10]
    return "stdlib"


class OSXTypesGen(JSCTypesGen):

    def __init__(self):
        # This will be a new set for every file where we track
        # dependencies on other files (everytime we prefix() a name).
        self.dependencies = None
        # This acts as a global namespace where we find names
        self.lookup = {}

    def addToLookup(self, declaration):
        if not declaration.name:
            return
        if declaration.name in self.lookup:
            print "%s already defined, overwriting." % declaration.name
        self.lookup[declaration.name] = declaration

    def prefix(self, name):
        declaration = self.lookup.get(name)
        if not declaration or not declaration.location:
            raise JSCTypesError("Couldn't find prefix for '%s'." % name)

        # For now we don't allow references into the "stdlib".
        # We may lift this restriction in the future.
        framework = frameworkFromFilename(declaration.location.file_name)
        if framework == "stdlib":
            raise JSCTypesError("'%s' defined out of scope" % name)

        mangled = self.mangleFilename(declaration.location.file_name)
        self.dependencies.add((framework, mangled))

        # We assume that the relevant definitions have been loaded into
        # the 'this' object.
        return 'this.' + name


    #
    # Big picture stuff below
    #

    fileTemplate = '''\
// Based on %(filename)s
function %(header)s(lib) {
%(dependencies)s
    if (this._%(upper)s)
        return;
    this._%(upper)s = true;

%(declarations)s}\n\n'''

    frameworkTemplate = '''\
Components.utils.import("resource://gre/modules/ctypes.jsm");
%(imports)s
const EXPORTED_SYMBOLS = ["%(framework)s", %(headers)s];

function %(framework)s() {
    let libpath = "%(framework_path)s/%(framework)s";
    let library = ctypes.open(libpath);
    this.close = function() {
        library.close();
    };
    let lib = {
        declare: function() {
            try {
                return library.declare.apply(library, arguments);
            } catch (ex) {
                dump("Failed to declare " + arguments[0] + "\\n");
                return null;
            }
        }
    };

%(basecalls)s}
'''

    def writeFramework(self, framework, declarations):
        framework_deps = set()
        out = open("modules/" + framework + ".jsm", "w")

        # Group declarations by file.
        by_file = groupByFile(declarations)
        for filename, decls in by_file.iteritems():
            # Make sure we write declarations out in the same order they
            # were defined in the header file.
            decls = sorted(decls, key=_declKey)

            self.dependencies = set()
            tempout = io.BytesIO()
            for decl in decls:
                writer = self.writers.get(type(decl))
                if not writer:
                    print "Ignoring declaration %r" % decl
                    continue
                try:
                    getattr(self, writer)(decl, tempout)
                except JSCTypesError as error:
                    self.writeError(decl, error, tempout)
            mangled = self.mangleFilename(filename)
            deps = "".join("    %s.call(this, lib);\n" % header
                           for framework, header in self.dependencies
                           if not header == mangled)
            framework_deps.update(framework for framework, header in self.dependencies)
            out.write(self.fileTemplate % {'header': mangled,
                                           'upper': mangled.upper(),
                                           'dependencies': deps,
                                           'declarations': tempout.getvalue(),
                                           'filename': filename})

        somefile = iter(by_file).next()
        framework_path = os.path.sep.join(somefile.split(os.path.sep)[:-2])
        imports = "".join('Components.utils.import("resource://osxtypes/%s.jsm");\n'
                          % frmwrk for frmwrk in framework_deps
                          if not frmwrk == framework)
        basecalls = "".join('    %s.call(this, lib);\n'
                            % self.mangleFilename(filename) for filename in by_file)
        out.write(self.frameworkTemplate % {
            'framework_path': framework_path,
            'framework': framework,
            'headers': ", ".join('"%s"' % self.mangleFilename(filename)
                                 for filename in by_file),
            'imports': imports,
            'basecalls': basecalls})
        out.close()


filenames = [
    "/System/Library/Frameworks/CoreFoundation.framework/Headers/CoreFoundation.h",
    "/System/Library/Frameworks/CoreServices.framework/Headers/CoreServices.h",
    "/System/Library/Frameworks/Carbon.framework/Headers/Carbon.h",
    "/System/Library/Frameworks/ApplicationServices.framework/Headers/ApplicationServices.h",
    "/System/Library/Frameworks/AudioUnit.framework/Headers/AudioUnit.h",
    ]
gccxml_path = "/Users/philipp/gccxml/bin/gccxml"
cflags = "-F /System/Library/Frameworks "\
         "-F /System/Library/Frameworks/CoreServices.framework/Frameworks "\
         "-F /System/Library/Frameworks/Carbon.framework/Frameworks "\
         "-F /System/Library/Frameworks/ApplicationServices.framework/Frameworks"

def main():
    config = pygccxml.parser.config_t(gccxml_path=gccxml_path,
                                      cflags=cflags,
                                      compiler="/usr/bin/gcc-4.0")
    decls = pygccxml.parser.parse(filenames, config)
    global_ns = pygccxml.declarations.get_global_namespace(decls)

    gen = OSXTypesGen()
    by_framework = groupByFramework(global_ns.declarations)
    [gen.addToLookup(decl) for decl in global_ns.declarations]
    for framework, declarations in by_framework.iteritems():
        if framework == "stdlib":
            continue
        gen.writeFramework(framework, declarations)

if __name__ == "__main__":
    main()
