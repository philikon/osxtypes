# Generate js-ctypes declarations from C header files
# Philipp von Weitershausen <philipp@weitershausen.de>

import os
import io
import sys
import pygccxml

class JSCTypesError(Exception):
    pass

def _declKey(declaration):
    # HACK: Use declaration class name as secondary sort key so that
    # an opaque struct definition that's typedef'ed on the same line
    # comes first ('class_declaration_t' < 'typedef_t').
    if declaration.location is None:
        return (None, declaration.__class__.__name__)
    return (declaration.location.line, declaration.__class__.__name__)

class JSCTypesGen:

    #
    # Writers for the different kinds of declarations.
    #

    def writeTypedef(self, declaration, out):
        value = self.ctypesNameForType(declaration.type)
        if value == ("this." + declaration.name):
            print "Defining %s with itself." % declaration.name
            return
        out.write("    this.%s = %s;\n" % (declaration.name, value));

    def writeFunction(self, declaration, out):
        name = declaration.name
        if declaration.inline:
            raise JSCTypesError("Inline function");

        return_type = self.ctypesNameForType(declaration.return_type)
        args_types = ''
        if declaration.arguments:
            args_types = ', ' + ', '.join(self.ctypesNameForType(arg.type)
                                          for arg in declaration.arguments)
        out.write('    this.%s = lib.declare("%s", ctypes.default_abi, '
                  '%s%s);\n' % (name, name, return_type, args_types));

    def writeVariable(self, declaration, out):
        name = declaration.name
        value = declaration.value
        typ = self.ctypesNameForType(declaration.type)
        if value is None:
            if isinstance(declaration.type, pygccxml.declarations.const_t):
                out.write('    this.%s = lib.declare("%s", %s);\n'
                          % (name, name, typ))
                return
            raise JSCTypesError("Variable has no value")
        out.write('    this.%s = %s(%s);\n' % (name, typ, value))

    def writeEnum(self, declaration, out):
        for name, value in declaration.values:
            out.write('    this.%s = %s;\n' % (name, value));

    def writeStruct(self, declaration, out):
        #TODO need to deal with unions separately... how does ctypes handle them?
        if declaration.class_type not in ("struct", "union"):
            raise JSCTypesError("Unsupported class type")
        name = declaration.name
        try:
            members = ", ".join(
                "{%s: %s}" % (member.name, self.ctypesNameForType(member.type))
                for member in declaration.get_members()
                if isinstance(member, pygccxml.declarations.variable_t))
        except JSCTypesError:
            # We can still declare the struct (e.g. for pointers), just
            # won't be able to access members.
            members = ""

        out.write('    this.%s = new ctypes.StructType("%s", [%s]);\n'
                  % (name, name, members))

    def writeOpaqueStruct(self, declaration, out):
        name = declaration.name
        out.write('    this.%s = new ctypes.StructType("%s");\n' % (name, name))

    writers = {pygccxml.declarations.typedef_t:           "writeTypedef",
               pygccxml.declarations.free_function_t:     "writeFunction",
               pygccxml.declarations.variable_t:          "writeVariable",
               pygccxml.declarations.enumeration_t:       "writeEnum",
               pygccxml.declarations.class_t:             "writeStruct",
               pygccxml.declarations.class_declaration_t: "writeOpaqueStruct"}

    def writeError(self, declaration, error, out):
        print "Dropping declaration", declaration.name, ". ".join(error.args)
        out.write("    // Dropping declaration of '%s': %s\n"
                  % (declaration.name, ". ".join(error.args)));

    #
    # Resolving C types to ctypes names.
    #

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

    def ctypesNameForType(self, typ):
        name = self.builtin_types.get(type(typ))
        if name:
            return name

        if isinstance(typ, pygccxml.declarations.cpptypes.array_t):
             #TODO what if unsized?
             return "%s.array(%s)" % (self.ctypesNameForType(typ.base), typ.size)
        if isinstance(typ, pygccxml.declarations.declarated_t):
            return self.prefix(typ.declaration.name)
        if isinstance(typ, pygccxml.declarations.const_t):
            return self.ctypesNameForType(typ.base)
        if isinstance(typ, pygccxml.declarations.volatile_t):
            return self.ctypesNameForType(typ.base)
        if isinstance(typ, pygccxml.declarations.pointer_t):
            return "%s.ptr" % self.ctypesNameForType(typ.base)
        if isinstance(typ, pygccxml.declarations.free_function_type_t):
            return_type = self.ctypesNameForType(typ.return_type)
            args_types = [self.ctypesNameForType(arg_type)
                          for arg_type in typ.arguments_types]
            return ("new ctypes.FunctionType(ctypes.default_abi, %s, [%s])"
                    % (return_type, ", ".join(args_types)))

        raise JSCTypesError("Unknown type %s" % typ.__class__.__name__)

    def prefix(self, name):
        # Just assume that the relevant definitions have been loaded into
        # the 'this' object.
        return 'this.' + name

    def mangleFilename(self, filename):
        segments = filename.split(os.path.sep)
        return segments[-1].replace('.h', '_h')

    fileTemplate = '''\
// Based on %(filename)s
Components.utils.import("resource://gre/modules/ctypes.jsm");

function %(header)s(lib) {
    if (this._%(upper)s)
        return;
    this._%(upper)s = true;

%(declarations)s}\n\n'''

    def writeFile(self, filename, decls):
        mangled = self.mangleFilename(filename)
        out = open(mangled + ".jsm", "w")

        # Make sure we write declarations out in the same order they
        # were defined in the header file.
        decls = sorted(decls, key=_declKey)

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
        out.write(self.fileTemplate % {'header': mangled,
                                       'upper': mangled.upper(),
                                       'declarations': tempout.getvalue(),
                                       'filename': filename})
        out.close()

def main():
    gccxml_path = "/Users/philipp/gccxml/bin/gccxml"
    gcc_path = "/usr/bin/gcc-4.0"
    cflags = sys.argv[1:]
    filename = cflags.pop()
    config = pygccxml.parser.config_t(gccxml_path=gccxml_path,
                                      cflags=" ".join(cflags),
                                      compiler=gcc_path)
    decls = pygccxml.parser.parse([filename], config)
    global_ns = pygccxml.declarations.get_global_namespace(decls)
    JSCTypesGen().writeFile(filename, global_ns.declarations)

if __name__ == "__main__":
    main()
