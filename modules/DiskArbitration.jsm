// Based on /System/Library/Frameworks/DiskArbitration.framework/Headers/DADisk.h
function DADisk_h(lib) {

    if (this._DADISK_H)
        return;
    this._DADISK_H = true;

    this.__DADisk = new ctypes.StructType("__DADisk");
    this.DADiskRef = this.__DADisk.ptr;
}

// Based on /System/Library/Frameworks/DiskArbitration.framework/Headers/DASession.h
function DASession_h(lib) {

    if (this._DASESSION_H)
        return;
    this._DASESSION_H = true;

    this.__DASession = new ctypes.StructType("__DASession");
    this.DASessionRef = this.__DASession.ptr;
    this.DAApprovalSessionRef = this.__DASession.ptr;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");

const EXPORTED_SYMBOLS = ["DiskArbitration", "DADisk_h", "DASession_h"];

function DiskArbitration() {
    let libpath = "/System/Library/Frameworks/DiskArbitration.framework/DiskArbitration";
    let lib = ctypes.open(libpath);

    DADisk_h.call(this, lib);
    DASession_h.call(this, lib);
}
