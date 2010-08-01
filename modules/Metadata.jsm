// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/Metadata.framework/Headers/MDItem.h
function MDItem_h(lib) {

    if (this._MDITEM_H)
        return;
    this._MDITEM_H = true;

    this.__MDItem = new ctypes.StructType("__MDItem");
    this.MDItemRef = this.__MDItem.ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/Metadata.framework/Headers/MDQuery.h
function MDQuery_h(lib) {
    CFBase_h.call(this, lib);
    MDItem_h.call(this, lib);

    if (this._MDQUERY_H)
        return;
    this._MDQUERY_H = true;

    this.__MDQuery = new ctypes.StructType("__MDQuery");
    this.MDQueryRef = this.__MDQuery.ptr;
    this.kMDQuerySynchronous = 1;
    this.kMDQueryWantsUpdates = 4;
    this.MDQueryBatchingParams = new ctypes.StructType("MDQueryBatchingParams", []);
    this.MDQueryCreateResultFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.MDQueryRef, this.MDItemRef, ctypes.void_t.ptr]).ptr;
    this.MDQueryCreateValueFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.MDQueryRef, this.CFStringRef, this.CFTypeRef, ctypes.void_t.ptr]).ptr;
    this.MDQuerySortComparatorFunction = new ctypes.FunctionType(ctypes.default_abi, this.CFComparisonResult, [this.CFTypeRef.ptr, this.CFTypeRef.ptr, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/Metadata.framework/Headers/MDSchema.h
function MDSchema_h(lib) {

    if (this._MDSCHEMA_H)
        return;
    this._MDSCHEMA_H = true;

}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");

const EXPORTED_SYMBOLS = ["Metadata", "MDItem_h", "MDQuery_h", "MDSchema_h"];

function Metadata() {
    let libpath = "/System/Library/Frameworks/Metadata.framework/Metadata";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    MDItem_h.call(this, lib);
    MDQuery_h.call(this, lib);
    MDSchema_h.call(this, lib);
}
