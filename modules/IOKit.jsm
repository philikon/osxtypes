// Based on /System/Library/Frameworks/IOKit.framework/Headers/IOKitLib.h
function IOKitLib_h(lib) {
    IOTypes_h.call(this, lib);
    IOReturn_h.call(this, lib);

    if (this._IOKITLIB_H)
        return;
    this._IOKITLIB_H = true;

    this.IONotificationPort = new ctypes.StructType("IONotificationPort");
    this.IONotificationPortRef = this.IONotificationPort.ptr;
    this.IOServiceMatchingCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.io_iterator_t]).ptr;
    // Dropping declaration of 'IOServiceInterestCallback': 'uint32_t' defined out of scope
    this.kIORegistryIterateRecursively = 1;
    this.kIORegistryIterateParents = 2;
    this.IOAsyncCallback0 = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.IOReturn]).ptr;
    this.IOAsyncCallback1 = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.IOReturn, ctypes.void_t.ptr]).ptr;
    this.IOAsyncCallback2 = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.IOReturn, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    // Dropping declaration of 'IOAsyncCallback': 'uint32_t' defined out of scope
    this.IOObject = new ctypes.StructType("IOObject");
}

// Based on /System/Library/Frameworks/IOKit.framework/Headers/IOTypes.h
function IOTypes_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._IOTYPES_H)
        return;
    this._IOTYPES_H = true;

    this.IOOptionBits = this.UInt32;
    this.IOFixed = this.SInt32;
    this.IOVersion = this.UInt32;
    this.IOItemCount = this.UInt32;
    this.IOCacheMode = this.UInt32;
    this.IOByteCount32 = this.UInt32;
    this.IOByteCount64 = this.UInt64;
    this.IOPhysicalAddress32 = this.UInt32;
    this.IOPhysicalAddress64 = this.UInt64;
    this.IOPhysicalLength32 = this.UInt32;
    this.IOPhysicalLength64 = this.UInt64;
    // Dropping declaration of 'IOVirtualAddress': 'vm_address_t' defined out of scope
    this.IOByteCount = this.IOByteCount32;
    this.IOLogicalAddress = this.IOVirtualAddress;
    this.IOPhysicalAddress = this.IOPhysicalAddress32;
    this.IOPhysicalLength = this.IOPhysicalLength32;
    this.IOPhysicalRange = new ctypes.StructType("IOPhysicalRange", [{address: this.IOPhysicalAddress}, {length: this.IOByteCount}]);
    this.IOVirtualRange = new ctypes.StructType("IOVirtualRange", [{address: this.IOVirtualAddress}, {length: this.IOByteCount}]);
    this.IOAddressRange = new ctypes.StructType("IOAddressRange", []);
    this.IONamedValue = new ctypes.StructType("IONamedValue", [{value: ctypes.int}, {name: ctypes.char.ptr}]);
    this.IOAlignment = ctypes.unsigned_int;
    // Dropping declaration of 'io_object_t': 'mach_port_t' defined out of scope
    this.io_connect_t = this.io_object_t;
    this.io_enumerator_t = this.io_object_t;
    this.io_iterator_t = this.io_object_t;
    this.io_registry_entry_t = this.io_object_t;
    this.io_service_t = this.io_object_t;
    this.kIODefaultMemoryType = 0;
    this.kIODefaultCache = 0;
    this.kIOInhibitCache = 1;
    this.kIOWriteThruCache = 2;
    this.kIOCopybackCache = 3;
    this.kIOWriteCombineCache = 4;
    this.kIOMapAnywhere = 1;
    this.kIOMapCacheMask = 1792;
    this.kIOMapCacheShift = 8;
    this.kIOMapDefaultCache = 0;
    this.kIOMapInhibitCache = 256;
    this.kIOMapWriteThruCache = 512;
    this.kIOMapCopybackCache = 768;
    this.kIOMapWriteCombineCache = 1024;
    this.kIOMapUserOptionsMask = 4095;
    this.kIOMapReadOnly = 4096;
    this.kIOMapStatic = 16777216;
    this.kIOMapReference = 33554432;
    this.kIOMapUnique = 67108864;
    this.kNanosecondScale = 1;
    this.kMicrosecondScale = 1000;
    this.kMillisecondScale = 1000000;
    this.kSecondScale = 1000000000;
    this.kTickScale = 10000000;
    this.IODeviceNumber = ctypes.unsigned_int;
}

// Based on /System/Library/Frameworks/IOKit.framework/Headers/OSMessageNotification.h
function OSMessageNotification_h(lib) {
    IOReturn_h.call(this, lib);

    if (this._OSMESSAGENOTIFICATION_H)
        return;
    this._OSMESSAGENOTIFICATION_H = true;

    this.kFirstIOKitNotificationType = 100;
    this.kIOServicePublishNotificationType = 100;
    this.kIOServiceMatchedNotificationType = 101;
    this.kIOServiceTerminatedNotificationType = 102;
    this.kIOAsyncCompletionNotificationType = 150;
    this.kIOServiceMessageNotificationType = 160;
    this.kLastIOKitNotificationType = 199;
    this.kOSNotificationMessageID = 53;
    this.kOSAsyncCompleteMessageID = 57;
    this.kMaxAsyncArgs = 16;
    this.kIOAsyncReservedIndex = 0;
    this.kIOAsyncReservedCount = 1;
    this.kIOAsyncCalloutFuncIndex = 1;
    this.kIOAsyncCalloutRefconIndex = 2;
    this.kIOAsyncCalloutCount = 3;
    this.kIOMatchingCalloutFuncIndex = 1;
    this.kIOMatchingCalloutRefconIndex = 2;
    this.kIOMatchingCalloutCount = 3;
    this.kIOInterestCalloutFuncIndex = 1;
    this.kIOInterestCalloutRefconIndex = 2;
    this.kIOInterestCalloutServiceIndex = 3;
    this.kIOInterestCalloutCount = 4;
    this.kOSAsyncRef64Count = 8;
    this.kOSAsyncRef64Size = 32;
    // Dropping declaration of 'OSAsyncReference64': 'io_user_reference_t' defined out of scope
    this.OSNotificationHeader64 = new ctypes.StructType("OSNotificationHeader64", []);
    this.IOServiceInterestContent64 = new ctypes.StructType("IOServiceInterestContent64", []);
    this.kOSAsyncRefCount = 8;
    this.kOSAsyncRefSize = 32;
    // Dropping declaration of 'OSAsyncReference': 'natural_t' defined out of scope
    this.OSNotificationHeader = new ctypes.StructType("OSNotificationHeader", []);
    this.IOServiceInterestContent = new ctypes.StructType("IOServiceInterestContent", []);
    this.IOAsyncCompletionContent = new ctypes.StructType("IOAsyncCompletionContent", [{result: this.IOReturn}, {args: ctypes.void_t.ptr.array(0)}]);
}

// Based on /System/Library/Frameworks/IOKit.framework/Headers/IOReturn.h
function IOReturn_h(lib) {

    if (this._IORETURN_H)
        return;
    this._IORETURN_H = true;

    // Dropping declaration of 'IOReturn': 'kern_return_t' defined out of scope
}

// Based on /System/Library/Frameworks/IOKit.framework/Headers/IOSharedLock.h
function IOSharedLock_h(lib) {

    if (this._IOSHAREDLOCK_H)
        return;
    this._IOSHAREDLOCK_H = true;

    this.IOSharedLockData = ctypes.int;
    this.IOSharedLock = this.IOSharedLockData.ptr;
    this.ev_lock_data_t = this.IOSharedLockData;
    this.ev_lock_t = this.ev_lock_data_t.ptr;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["IOKit", "IOKitLib_h", "IOTypes_h", "OSMessageNotification_h", "IOReturn_h", "IOSharedLock_h"];

function IOKit() {
    let libpath = "/System/Library/Frameworks/IOKit.framework/IOKit";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    IOKitLib_h.call(this, lib);
    IOTypes_h.call(this, lib);
    OSMessageNotification_h.call(this, lib);
    IOReturn_h.call(this, lib);
    IOSharedLock_h.call(this, lib);
}
