// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/DictionaryServices.framework/Headers/DictionaryServices.h
function DictionaryServices_h(lib) {

    if (this._DICTIONARYSERVICES_H)
        return;
    this._DICTIONARYSERVICES_H = true;

    this.__DCSDictionary = new ctypes.StructType("__DCSDictionary");
    this.DCSDictionaryRef = this.__DCSDictionary.ptr;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");

const EXPORTED_SYMBOLS = ["DictionaryServices", "DictionaryServices_h"];

function DictionaryServices() {
    let libpath = "/System/Library/Frameworks/CoreServices.framework/Frameworks/DictionaryServices.framework/DictionaryServices";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    DictionaryServices_h.call(this, lib);
}
