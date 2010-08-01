// Based on /System/Library/Frameworks/IOKit.framework/Headers/IOKitLib.h
function IOKitLib_h(lib) {
    CFDictionary_h.call(this, lib);
    CFRunLoop_h.call(this, lib);
    IOTypes_h.call(this, lib);
    CFBase_h.call(this, lib);
    IOReturn_h.call(this, lib);

    if (this._IOKITLIB_H)
        return;
    this._IOKITLIB_H = true;

    this.IONotificationPort = new ctypes.StructType("IONotificationPort");
    this.IONotificationPortRef = this.IONotificationPort.ptr;
    this.IOServiceMatchingCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.io_iterator_t]).ptr;
    // Dropping declaration of 'IOServiceInterestCallback': 'uint32_t' defined out of scope
    // Dropping declaration of 'IOMasterPort': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IONotificationPortCreate': 'mach_port_t' defined out of scope
    this.IONotificationPortDestroy = lib.declare("IONotificationPortDestroy", ctypes.default_abi, ctypes.void_t, this.IONotificationPortRef);
    this.IONotificationPortGetRunLoopSource = lib.declare("IONotificationPortGetRunLoopSource", ctypes.default_abi, this.CFRunLoopSourceRef, this.IONotificationPortRef);
    // Dropping declaration of 'IONotificationPortGetMachPort': 'mach_port_t' defined out of scope
    // Dropping declaration of 'IODispatchCalloutFromMessage': 'mach_msg_header_t' defined out of scope
    // Dropping declaration of 'IOCreateReceivePort': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOObjectRelease': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOObjectRetain': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOObjectGetClass': 'kern_return_t' defined out of scope
    this.IOObjectCopyClass = lib.declare("IOObjectCopyClass", ctypes.default_abi, this.CFStringRef, this.io_object_t);
    this.IOObjectCopySuperclassForClass = lib.declare("IOObjectCopySuperclassForClass", ctypes.default_abi, this.CFStringRef, this.CFStringRef);
    this.IOObjectCopyBundleIdentifierForClass = lib.declare("IOObjectCopyBundleIdentifierForClass", ctypes.default_abi, this.CFStringRef, this.CFStringRef);
    // Dropping declaration of 'IOObjectConformsTo': 'boolean_t' defined out of scope
    // Dropping declaration of 'IOObjectIsEqualTo': 'boolean_t' defined out of scope
    // Dropping declaration of 'IOObjectGetKernelRetainCount': 'uint32_t' defined out of scope
    // Dropping declaration of 'IOObjectGetUserRetainCount': 'uint32_t' defined out of scope
    // Dropping declaration of 'IOObjectGetRetainCount': 'uint32_t' defined out of scope
    this.IOIteratorNext = lib.declare("IOIteratorNext", ctypes.default_abi, this.io_object_t, this.io_iterator_t);
    this.IOIteratorReset = lib.declare("IOIteratorReset", ctypes.default_abi, ctypes.void_t, this.io_iterator_t);
    // Dropping declaration of 'IOIteratorIsValid': 'boolean_t' defined out of scope
    // Dropping declaration of 'IOServiceGetMatchingService': 'mach_port_t' defined out of scope
    // Dropping declaration of 'IOServiceGetMatchingServices': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOServiceAddNotification': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOServiceAddMatchingNotification': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOServiceAddInterestNotification': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOServiceMatchPropertyTable': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOServiceGetBusyState': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOServiceWaitQuiet': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOKitGetBusyState': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOKitWaitQuiet': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOServiceOpen': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOServiceRequestProbe': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOServiceClose': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectAddRef': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectRelease': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectGetService': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectSetNotificationPort': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectMapMemory': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectMapMemory64': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectUnmapMemory': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectUnmapMemory64': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectSetCFProperties': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectSetCFProperty': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectCallMethod': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectCallAsyncMethod': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectCallStructMethod': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectCallAsyncStructMethod': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectCallScalarMethod': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectCallAsyncScalarMethod': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectTrap0': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectTrap1': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectTrap2': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectTrap3': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectTrap4': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectTrap5': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectTrap6': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectAddClient': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryGetRootEntry': 'mach_port_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryFromPath': 'mach_port_t' defined out of scope
    this.kIORegistryIterateRecursively = 1;
    this.kIORegistryIterateParents = 2;
    // Dropping declaration of 'IORegistryCreateIterator': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryCreateIterator': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryIteratorEnterEntry': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryIteratorExitEntry': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryGetName': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryGetNameInPlane': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryGetLocationInPlane': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryGetPath': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryGetRegistryEntryID': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryCreateCFProperties': 'kern_return_t' defined out of scope
    this.IORegistryEntryCreateCFProperty = lib.declare("IORegistryEntryCreateCFProperty", ctypes.default_abi, this.CFTypeRef, this.io_registry_entry_t, this.CFStringRef, this.CFAllocatorRef, this.IOOptionBits);
    this.IORegistryEntrySearchCFProperty = lib.declare("IORegistryEntrySearchCFProperty", ctypes.default_abi, this.CFTypeRef, this.io_registry_entry_t, ctypes.char.ptr, this.CFStringRef, this.CFAllocatorRef, this.IOOptionBits);
    // Dropping declaration of 'IORegistryEntryGetProperty': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntrySetCFProperties': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntrySetCFProperty': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryGetChildIterator': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryGetChildEntry': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryGetParentIterator': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryGetParentEntry': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryInPlane': 'boolean_t' defined out of scope
    this.IOServiceMatching = lib.declare("IOServiceMatching", ctypes.default_abi, this.CFMutableDictionaryRef, ctypes.char.ptr);
    this.IOServiceNameMatching = lib.declare("IOServiceNameMatching", ctypes.default_abi, this.CFMutableDictionaryRef, ctypes.char.ptr);
    // Dropping declaration of 'IOBSDNameMatching': 'mach_port_t' defined out of scope
    // Dropping declaration of 'IOOpenFirmwarePathMatching': 'mach_port_t' defined out of scope
    // Dropping declaration of 'IORegistryEntryIDMatching': 'uint64_t' defined out of scope
    // Dropping declaration of 'IOServiceOFPathToBSDName': 'kern_return_t' defined out of scope
    this.IOAsyncCallback0 = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.IOReturn]).ptr;
    this.IOAsyncCallback1 = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.IOReturn, ctypes.void_t.ptr]).ptr;
    this.IOAsyncCallback2 = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.IOReturn, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    // Dropping declaration of 'IOAsyncCallback': 'uint32_t' defined out of scope
    // Dropping declaration of 'OSGetNotificationFromMessage': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOCatalogueSendData': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOCatalogueTerminate': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOCatalogueGetData': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOCatalogueModuleLoaded': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOCatalogueReset': 'kern_return_t' defined out of scope
    this.IOObject = new ctypes.StructType("IOObject");
    // Dropping declaration of 'IORegistryDisposeEnumerator': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOMapMemory': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOCompatibiltyNumber': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectMethodScalarIScalarO': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectMethodScalarIStructureO': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectMethodScalarIStructureI': 'kern_return_t' defined out of scope
    // Dropping declaration of 'IOConnectMethodStructureIStructureO': 'kern_return_t' defined out of scope
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
    this.IOSpinLock = lib.declare("IOSpinLock", ctypes.default_abi, ctypes.void_t, this.IOSharedLock);
    this.IOSpinUnlock = lib.declare("IOSpinUnlock", ctypes.default_abi, ctypes.void_t, this.IOSharedLock);
    // Dropping declaration of 'IOTrySpinLock': 'boolean_t' defined out of scope
    this.ev_lock_data_t = this.IOSharedLockData;
    this.ev_lock_t = this.ev_lock_data_t.ptr;
    this.ev_lock = lib.declare("ev_lock", ctypes.default_abi, ctypes.void_t, this.ev_lock_t);
    this.ev_unlock = lib.declare("ev_unlock", ctypes.default_abi, ctypes.void_t, this.ev_lock_t);
    // Dropping declaration of 'ev_try_lock': 'boolean_t' defined out of scope
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["IOKit", "IOKitLib_h", "IOTypes_h", "OSMessageNotification_h", "IOReturn_h", "IOSharedLock_h"];

function IOKit() {
    let libpath = "/System/Library/Frameworks/IOKit.framework/IOKit";
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

    IOKitLib_h.call(this, lib);
    IOTypes_h.call(this, lib);
    OSMessageNotification_h.call(this, lib);
    IOReturn_h.call(this, lib);
    IOSharedLock_h.call(this, lib);
}
