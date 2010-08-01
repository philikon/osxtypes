# Generate js-ctypes declarations from OS X header files
# Philipp von Weitershausen <philipp@weitershausen.de>

import os
import pygccxml
import operator
from ordereddict import OrderedDict

class CTypesError(Exception):
    pass

def groupByFile(declarations):
    by_file = OrderedDict()
    for decl in declarations:
        if not decl.location:
            continue
        filedecls = by_file.setdefault(decl.location.file_name, [])
        filedecls.append(decl)
    return by_file

def groupByFramework(declarations):
    by_framework = OrderedDict()
    for decl in declarations:
        if not decl.location:
            continue
        framework = frameworkFromFilename(decl.location.file_name)
        frameworkdecls = by_framework.setdefault(framework, [])
        frameworkdecls.append(decl)
    return by_framework

def frameworkFromFilename(filename):
    segments = filename.split(os.path.sep)
    if segments[-2] == "Headers":
        return segments[-3][:-10]
    return "stdlib"

lookup = {}
def addToLookup(declaration):
    if not declaration.name:
        return
    if declaration.name in lookup:
        print "%s already defined, overwriting." % declaration.name
    lookup[declaration.name] = declaration

current_framework = None
def prefix(name):
    declaration = lookup.get(name)
    if not declaration or not declaration.location:
        raise CTypesError("Couldn't find prefix for '%s'." % name)
    framework = frameworkFromFilename(declaration.location.file_name)
    if framework == current_framework:
        return "this." + name
    # For now we don't allow references into the "stdlib".
    # We may lift this restriction in the future.
    if framework == "stdlib":
        raise CTypesError("'%s' defined out of scope" % name)
    return framework + "." + name

def writeTypedef(declaration, out):
    value = ctypesNameForType(declaration.type)
    if value == ("this." + declaration.name):
        print "Defining %s with itself." % declaration.name
        return
    out.write("    this.%s = %s;\n" % (declaration.name, value));

def writeFunction(declaration, out):
    name = declaration.name
    return_type = ctypesNameForType(declaration.return_type)
    args_types = ''
    if declaration.arguments:
        args_types = ', ' + ', '.join(ctypesNameForType(arg.type)
                                      for arg in declaration.arguments)
    out.write('    this.%s = this.lib.declare("%s", ctypes.default_abi, '
              '%s%s);\n' % (name, name, return_type, args_types));

def writeVariable(declaration, out):
    value = declaration.value
    if value is None:
        return
    name = declaration.name
    typ = ctypesNameForType(declaration.type)
    out.write('    this.%s = %s(%s);\n' % (name, typ, value))

def writeEnum(declaration, out):
    for name, value in declaration.values:
        out.write('    this.%s = %s;\n' % (name, value));

def writeStruct(declaration, out):
    if declaration.class_type != "struct":
        return
    name = declaration.name
    try:
        members = ", ".join(
            "{%s: %s}" % (member.name, ctypesNameForType(member.type))
            for member in declaration.get_members()
            if isinstance(member, pygccxml.declarations.variable_t))
    except CTypesError:
        # We can still declare the struct (e.g. for pointers), just
        # won't be able to access members.
        members = ""

    out.write('    this.%s = new ctypes.StructType("%s", [%s]);\n'
              % (name, name, members))

def writeOpaqueStruct(declaration, out):
    name = declaration.name
    out.write('    this.%s = new ctypes.StructType("%s");\n' % (name, name))

writers = {pygccxml.declarations.typedef_t:           writeTypedef,
           pygccxml.declarations.free_function_t:     writeFunction,
           pygccxml.declarations.variable_t:          writeVariable,
           pygccxml.declarations.enumeration_t:       writeEnum,
           pygccxml.declarations.class_t:             writeStruct,
           pygccxml.declarations.class_declaration_t: writeOpaqueStruct}


builtin_types = {
    pygccxml.declarations.ellipsis_t:           '"..."',
    pygccxml.declarations.short_int_t:          "ctypes.short",
    pygccxml.declarations.short_unsigned_int_t: "ctypes.unsigned_short",
    pygccxml.declarations.int_t:                "ctypes.int",
    pygccxml.declarations.unsigned_int_t:       "ctypes.unsigned_int",
    pygccxml.declarations.long_int_t:           "ctypes.long",
    pygccxml.declarations.long_unsigned_int_t:  "ctypes.unsigned_long",
    pygccxml.declarations.long_long_int_t:      "ctypes.long_long",
    pygccxml.declarations.long_long_unsigned_int_t: "ctypes.unsigned_long_long",
    pygccxml.declarations.char_t:               "ctypes.char",
    pygccxml.declarations.signed_char_t:        "ctypes.signed_char",
    pygccxml.declarations.unsigned_char_t:      "ctypes.unsigned_char",
    pygccxml.declarations.float_t:              "ctypes.float",
    pygccxml.declarations.double_t:             "ctypes.double",
    pygccxml.declarations.void_t:               "ctypes.void_t",
#    pygccxml.declarations.cpptypes.complex_float_t:       "FIXME",
#    pygccxml.declarations.cpptypes.complex_double_t:      "FIXME",
#    pygccxml.declarations.cpptypes.complex_long_double_t: "FIXME",
#    pygccxml.declarations.cpptypes.wchar_t:     "FIXME",
#    pygccxml.declarations.long_double_t:        "FIXME",
#    pygccxml.declarations.unknown_t:            "UNKNOWN",
    }
def ctypesNameForType(typ):
    name = builtin_types.get(type(typ))
    if name:
        return name

    if isinstance(typ, pygccxml.declarations.cpptypes.array_t):
         #TODO what if unsized?
         return "%s[%s]" % (ctypesNameForType(typ.base), typ.size)
    if isinstance(typ, pygccxml.declarations.declarated_t):
        return prefix(typ.declaration.name)
    if isinstance(typ, pygccxml.declarations.const_t):
        return ctypesNameForType(typ.base)
    if isinstance(typ, pygccxml.declarations.volatile_t):
        return ctypesNameForType(typ.base)
    if isinstance(typ, pygccxml.declarations.pointer_t):
        return "%s.ptr" % ctypesNameForType(typ.base)
    if isinstance(typ, pygccxml.declarations.free_function_type_t):
        return_type = ctypesNameForType(typ.return_type)
        args_types = [ctypesNameForType(arg_type)
                      for arg_type in typ.arguments_types]
        return ("new ctypes.FunctionType(ctypes.default_abi, %s, [%s])"
                % (return_type, ", ".join(args_types)))

    raise CTypesError("Unknown type %s" % typ.__class__.__name__)

def writeError(declaration, error, out):
    print "Dropping declaration", declaration.name, ". ".join(error.args)
    out.write("    // Dropping declaration of '%s': %s\n"
              % (declaration.name, ". ".join(error.args)));

def writeFramework(framework, declarations, out):
    global current_framework
    current_framework = framework

    out.write('''\
Components.utils.import("resource://gre/modules/ctypes.jsm");
const EXPORTED_SYMBOLS = ["%(framework)s"];

function %(framework)sFramework() {
    this.libpath = "/System/Library/Frameworks/%(framework)s.framework/%(framework)s";
    this.lib = ctypes.open(this.libpath);
''' % {'framework': framework});

    # Group declarations by file.
    by_file = groupByFile(declarations)
    for filename, decls in by_file.iteritems():
        # Make sure we write declarations out in the same order they
        # were defined in the header file.
        decls = sorted(decls, key=operator.attrgetter('location.line'))

        out.write("\n    // File: %s\n" % filename)
        for decl in decls:
            writer = writers.get(type(decl))
            if not writer:
                print "Ignoring declaration %r" % decl
                continue
            try:
                writer(decl, out)
            except CTypesError as error:
                writeError(decl, error, out)
    out.write('''\
}
const %(framework)s = new %(framework)sFramework();
''' % {'framework': framework})


filename = "/System/Library/Frameworks/CoreServices.framework/Headers/CoreServices.h"
gccxml_path = "/Users/philipp/gccxml/bin/gccxml"
cflags = "-F /System/Library/Frameworks "\
         "-F /System/Library/Frameworks/CoreServices.framework/Frameworks"

def main():
    config = pygccxml.parser.config_t(gccxml_path=gccxml_path,
                                      cflags=cflags,
                                      compiler="/usr/bin/gcc-4.0")
    decls = pygccxml.parser.parse([filename], config)
    global_ns = pygccxml.declarations.get_global_namespace(decls)

    by_framework = groupByFramework(global_ns.declarations)
    [addToLookup(decl) for decl in global_ns.declarations]
    for framework, declarations in by_framework.iteritems():
        outfile = framework + ".jsm"
        out = open(outfile, "w")
        writeFramework(framework, declarations, out)
        out.close()

if __name__ == "__main__":
    main()
