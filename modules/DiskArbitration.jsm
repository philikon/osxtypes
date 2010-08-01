// Based on /System/Library/Frameworks/DiskArbitration.framework/Headers/DADisk.h
function DADisk_h(lib) {
    DASession_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFDictionary_h.call(this, lib);

    if (this._DADISK_H)
        return;
    this._DADISK_H = true;

    this.__DADisk = new ctypes.StructType("__DADisk");
    this.DADiskRef = this.__DADisk.ptr;
    this.DADiskGetTypeID = lib.declare("DADiskGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.DADiskCreateFromBSDName = lib.declare("DADiskCreateFromBSDName", ctypes.default_abi, this.DADiskRef, this.CFAllocatorRef, this.DASessionRef, ctypes.char.ptr);
    // Disabled due to dependency on IOKit/IOTypes.h
    //this.DADiskCreateFromIOMedia = lib.declare("DADiskCreateFromIOMedia", ctypes.default_abi, this.DADiskRef, this.CFAllocatorRef, this.DASessionRef, this.io_service_t);
    this.DADiskGetBSDName = lib.declare("DADiskGetBSDName", ctypes.default_abi, ctypes.char.ptr, this.DADiskRef);
    this.DADiskCopyIOMedia = lib.declare("DADiskCopyIOMedia", ctypes.default_abi, this.io_service_t, this.DADiskRef);
    this.DADiskCopyDescription = lib.declare("DADiskCopyDescription", ctypes.default_abi, this.CFDictionaryRef, this.DADiskRef);
    this.DADiskCopyWholeDisk = lib.declare("DADiskCopyWholeDisk", ctypes.default_abi, this.DADiskRef, this.DADiskRef);
}

// Based on /System/Library/Frameworks/DiskArbitration.framework/Headers/DASession.h
function DASession_h(lib) {
    CFBase_h.call(this, lib);
    CFRunLoop_h.call(this, lib);

    if (this._DASESSION_H)
        return;
    this._DASESSION_H = true;

    this.__DASession = new ctypes.StructType("__DASession");
    this.DASessionRef = this.__DASession.ptr;
    this.DASessionGetTypeID = lib.declare("DASessionGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.DASessionCreate = lib.declare("DASessionCreate", ctypes.default_abi, this.DASessionRef, this.CFAllocatorRef);
    this.DASessionScheduleWithRunLoop = lib.declare("DASessionScheduleWithRunLoop", ctypes.default_abi, ctypes.void_t, this.DASessionRef, this.CFRunLoopRef, this.CFStringRef);
    this.DASessionUnscheduleFromRunLoop = lib.declare("DASessionUnscheduleFromRunLoop", ctypes.default_abi, ctypes.void_t, this.DASessionRef, this.CFRunLoopRef, this.CFStringRef);
    this.DAApprovalSessionRef = this.__DASession.ptr;
    this.DAApprovalSessionGetTypeID = lib.declare("DAApprovalSessionGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.DAApprovalSessionCreate = lib.declare("DAApprovalSessionCreate", ctypes.default_abi, this.DAApprovalSessionRef, this.CFAllocatorRef);
    this.DAApprovalSessionScheduleWithRunLoop = lib.declare("DAApprovalSessionScheduleWithRunLoop", ctypes.default_abi, ctypes.void_t, this.DAApprovalSessionRef, this.CFRunLoopRef, this.CFStringRef);
    this.DAApprovalSessionUnscheduleFromRunLoop = lib.declare("DAApprovalSessionUnscheduleFromRunLoop", ctypes.default_abi, ctypes.void_t, this.DAApprovalSessionRef, this.CFRunLoopRef, this.CFStringRef);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");

const EXPORTED_SYMBOLS = ["DiskArbitration", "DADisk_h", "DASession_h"];

function DiskArbitration() {
    let libpath = "/System/Library/Frameworks/DiskArbitration.framework/DiskArbitration";
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

    DADisk_h.call(this, lib);
    DASession_h.call(this, lib);
}
