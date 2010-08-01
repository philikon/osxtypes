// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/DictionaryServices.framework/Headers/DictionaryServices.h
function DictionaryServices_h(lib) {
    CFBase_h.call(this, lib);

    if (this._DICTIONARYSERVICES_H)
        return;
    this._DICTIONARYSERVICES_H = true;

    this.__DCSDictionary = new ctypes.StructType("__DCSDictionary");
    this.DCSDictionaryRef = this.__DCSDictionary.ptr;
    this.DCSGetTermRangeInString = lib.declare("DCSGetTermRangeInString", ctypes.default_abi, this.CFRange, this.DCSDictionaryRef, this.CFStringRef, this.CFIndex);
    this.DCSCopyTextDefinition = lib.declare("DCSCopyTextDefinition", ctypes.default_abi, this.CFStringRef, this.DCSDictionaryRef, this.CFStringRef, this.CFRange);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");

const EXPORTED_SYMBOLS = ["DictionaryServices", "DictionaryServices_h"];

function DictionaryServices() {
    let libpath = "/System/Library/Frameworks/CoreServices.framework/Frameworks/DictionaryServices.framework/DictionaryServices";
    let library = ctypes.open(libpath);
    this.close = function() {
        library.close();
    };
    let lib = {
        declare: function() {
            try {
                return library.declare.apply(library, arguments);
            } catch (ex) {
                dump("Failed to declare " + arguments[0] + "\n");
                return null;
            }
        }
    };

    DictionaryServices_h.call(this, lib);
}
