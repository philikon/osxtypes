// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/SecurityHI.framework/Headers/KeychainHI.h
function KeychainHI_h(lib) {
    KeychainCore_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._KEYCHAINHI_H)
        return;
    this._KEYCHAINHI_H = true;

    this.KCAddAppleSharePassword = lib.declare("KCAddAppleSharePassword", ctypes.default_abi, this.OSStatus, this.AFPServerSignature.ptr, this.StringPtr, this.StringPtr, this.StringPtr, this.StringPtr, this.UInt32, ctypes.void_t.ptr, this.KCItemRef.ptr);
    this.KCAddInternetPassword = lib.declare("KCAddInternetPassword", ctypes.default_abi, this.OSStatus, this.StringPtr, this.StringPtr, this.StringPtr, this.UInt16, this.OSType, this.OSType, this.UInt32, ctypes.void_t.ptr, this.KCItemRef.ptr);
    this.KCAddInternetPasswordWithPath = lib.declare("KCAddInternetPasswordWithPath", ctypes.default_abi, this.OSStatus, this.StringPtr, this.StringPtr, this.StringPtr, this.StringPtr, this.UInt16, this.OSType, this.OSType, this.UInt32, ctypes.void_t.ptr, this.KCItemRef.ptr);
    this.KCAddGenericPassword = lib.declare("KCAddGenericPassword", ctypes.default_abi, this.OSStatus, this.StringPtr, this.StringPtr, this.UInt32, ctypes.void_t.ptr, this.KCItemRef.ptr);
    this.KCAddItem = lib.declare("KCAddItem", ctypes.default_abi, this.OSStatus, this.KCItemRef);
    this.KCUnlock = lib.declare("KCUnlock", ctypes.default_abi, this.OSStatus, this.KCRef, this.StringPtr);
    this.KCCreateKeychain = lib.declare("KCCreateKeychain", ctypes.default_abi, this.OSStatus, this.StringPtr, this.KCRef.ptr);
    this.KCChangeSettings = lib.declare("KCChangeSettings", ctypes.default_abi, this.OSStatus, this.KCRef);
    this.kcunlock = lib.declare("kcunlock", ctypes.default_abi, this.OSStatus, this.KCRef, ctypes.char.ptr);
    this.kccreatekeychain = lib.declare("kccreatekeychain", ctypes.default_abi, this.OSStatus, ctypes.char.ptr, this.KCRef.ptr);
    this.kcaddapplesharepassword = lib.declare("kcaddapplesharepassword", ctypes.default_abi, this.OSStatus, this.AFPServerSignature.ptr, ctypes.char.ptr, ctypes.char.ptr, ctypes.char.ptr, ctypes.char.ptr, this.UInt32, ctypes.void_t.ptr, this.KCItemRef.ptr);
    this.kcaddinternetpassword = lib.declare("kcaddinternetpassword", ctypes.default_abi, this.OSStatus, ctypes.char.ptr, ctypes.char.ptr, ctypes.char.ptr, this.UInt16, this.OSType, this.OSType, this.UInt32, ctypes.void_t.ptr, this.KCItemRef.ptr);
    this.kcaddinternetpasswordwithpath = lib.declare("kcaddinternetpasswordwithpath", ctypes.default_abi, this.OSStatus, ctypes.char.ptr, ctypes.char.ptr, ctypes.char.ptr, ctypes.char.ptr, this.UInt16, this.OSType, this.OSType, this.UInt32, ctypes.void_t.ptr, this.KCItemRef.ptr);
    this.kcaddgenericpassword = lib.declare("kcaddgenericpassword", ctypes.default_abi, this.OSStatus, ctypes.char.ptr, ctypes.char.ptr, this.UInt32, ctypes.void_t.ptr, this.KCItemRef.ptr);
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/SecurityHI.framework/Headers/SecCertificateSupport.h
function SecCertificateSupport_h(lib) {
    SecBase_h.call(this, lib);
    CarbonEventsCore_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    SecTrust_h.call(this, lib);
    cssmtype_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._SECCERTIFICATESUPPORT_H)
        return;
    this._SECCERTIFICATESUPPORT_H = true;

    this.typeSecIdentityRef = 1936286841;
    this.SecChooseIdentity = lib.declare("SecChooseIdentity", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.CFArrayRef, this.SecIdentityRef.ptr);
    this.SecChooseIdentityAsSheet = lib.declare("SecChooseIdentityAsSheet", ctypes.default_abi, this.OSStatus, this.WindowRef, this.EventTargetRef, this.CFStringRef, this.CFArrayRef);
    this.SecDisplayCertificate = lib.declare("SecDisplayCertificate", ctypes.default_abi, this.OSStatus, this.SecCertificateRef, this.CFArrayRef);
    this.SecDisplayCertificateGroup = lib.declare("SecDisplayCertificateGroup", ctypes.default_abi, this.OSStatus, this.CSSM_CERTGROUP.ptr, this.CFArrayRef);
    this.SecEditTrust = lib.declare("SecEditTrust", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.SecTrustRef);
    this.SecEditTrustAsSheet = lib.declare("SecEditTrustAsSheet", ctypes.default_abi, this.OSStatus, this.WindowRef, this.EventTargetRef, this.CFStringRef, this.SecTrustRef);
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/SecurityHI.framework/Headers/URLAccess.h
function URLAccess_h(lib) {
    Files_h.call(this, lib);
    Events_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._URLACCESS_H)
        return;
    this._URLACCESS_H = true;

    this.OpaqueURLReference = new ctypes.StructType("OpaqueURLReference");
    this.URLReference = this.OpaqueURLReference.ptr;
    this.URLOpenFlags = this.UInt32;
    this.kURLReplaceExistingFlag = 1;
    this.kURLBinHexFileFlag = 2;
    this.kURLExpandFileFlag = 4;
    this.kURLDisplayProgressFlag = 8;
    this.kURLDisplayAuthFlag = 16;
    this.kURLUploadFlag = 32;
    this.kURLIsDirectoryHintFlag = 64;
    this.kURLDoNotTryAnonymousFlag = 128;
    this.kURLDirectoryListingFlag = 256;
    this.kURLExpandAndVerifyFlag = 512;
    this.kURLNoAutoRedirectFlag = 1024;
    this.kURLDebinhexOnlyFlag = 2048;
    this.kURLDoNotDeleteOnErrorFlag = 4096;
    this.kURLResumeDownloadFlag = 8192;
    this.kURLReservedFlag = -2147483648;
    this.URLState = this.UInt32;
    this.kURLNullState = 0;
    this.kURLInitiatingState = 1;
    this.kURLLookingUpHostState = 2;
    this.kURLConnectingState = 3;
    this.kURLResourceFoundState = 4;
    this.kURLDownloadingState = 5;
    this.kURLDataAvailableState = 21;
    this.kURLTransactionCompleteState = 6;
    this.kURLErrorOccurredState = 7;
    this.kURLAbortingState = 8;
    this.kURLCompletedState = 9;
    this.kURLUploadingState = 10;
    this.URLEvent = this.UInt32;
    this.kURLInitiatedEvent = 1;
    this.kURLResourceFoundEvent = 4;
    this.kURLDownloadingEvent = 5;
    this.kURLAbortInitiatedEvent = 8;
    this.kURLCompletedEvent = 9;
    this.kURLErrorOccurredEvent = 7;
    this.kURLDataAvailableEvent = 21;
    this.kURLTransactionCompleteEvent = 6;
    this.kURLUploadingEvent = 10;
    this.kURLSystemEvent = 29;
    this.kURLPercentEvent = 30;
    this.kURLPeriodicEvent = 31;
    this.kURLPropertyChangedEvent = 32;
    this.URLEventMask = ctypes.unsigned_long;
    this.kURLInitiatedEventMask = 1;
    this.kURLResourceFoundEventMask = 8;
    this.kURLDownloadingMask = 16;
    this.kURLUploadingMask = 512;
    this.kURLAbortInitiatedMask = 128;
    this.kURLCompletedEventMask = 256;
    this.kURLErrorOccurredEventMask = 64;
    this.kURLDataAvailableEventMask = 1048576;
    this.kURLTransactionCompleteEventMask = 32;
    this.kURLSystemEventMask = 268435456;
    this.kURLPercentEventMask = 536870912;
    this.kURLPeriodicEventMask = 1073741824;
    this.kURLPropertyChangedEventMask = -2147483648;
    this.kURLAllBufferEventsMask = 1048608;
    this.kURLAllNonBufferEventsMask = -536869935;
    this.kURLAllEventsMask = -1;
    this.URLCallbackInfo = new ctypes.StructType("URLCallbackInfo", [{version: this.UInt32}, {urlRef: this.URLReference}, {property: ctypes.char.ptr}, {currentSize: this.UInt32}, {systemEvent: this.EventRecord.ptr}]);
    this.kUserNameAndPasswordFlag = 1;
    this.URLGetURLAccessVersion = lib.declare("URLGetURLAccessVersion", ctypes.default_abi, this.OSStatus, this.UInt32.ptr);
    // Dropping inline function 'URLAccessAvailable'.
    this.URLNotifyProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.void_t.ptr, this.URLEvent, this.URLCallbackInfo.ptr]).ptr;
    this.URLSystemEventProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.void_t.ptr, this.EventRecord.ptr]).ptr;
    this.URLNotifyUPP = this.URLNotifyProcPtr;
    this.URLSystemEventUPP = this.URLSystemEventProcPtr;
    // Dropping inline function 'NewURLNotifyUPP'.
    // Dropping inline function 'NewURLSystemEventUPP'.
    // Dropping inline function 'DisposeURLNotifyUPP'.
    // Dropping inline function 'DisposeURLSystemEventUPP'.
    // Dropping inline function 'InvokeURLNotifyUPP'.
    // Dropping inline function 'InvokeURLSystemEventUPP'.
    this.URLSimpleDownload = lib.declare("URLSimpleDownload", ctypes.default_abi, this.OSStatus, ctypes.char.ptr, this.FSSpec.ptr, this.Handle, this.URLOpenFlags, this.URLSystemEventUPP, ctypes.void_t.ptr);
    this.URLDownload = lib.declare("URLDownload", ctypes.default_abi, this.OSStatus, this.URLReference, this.FSSpec.ptr, this.Handle, this.URLOpenFlags, this.URLSystemEventUPP, ctypes.void_t.ptr);
    this.URLSimpleUpload = lib.declare("URLSimpleUpload", ctypes.default_abi, this.OSStatus, ctypes.char.ptr, this.FSSpec.ptr, this.URLOpenFlags, this.URLSystemEventUPP, ctypes.void_t.ptr);
    this.URLUpload = lib.declare("URLUpload", ctypes.default_abi, this.OSStatus, this.URLReference, this.FSSpec.ptr, this.URLOpenFlags, this.URLSystemEventUPP, ctypes.void_t.ptr);
    this.URLNewReference = lib.declare("URLNewReference", ctypes.default_abi, this.OSStatus, ctypes.char.ptr, this.URLReference.ptr);
    this.URLDisposeReference = lib.declare("URLDisposeReference", ctypes.default_abi, this.OSStatus, this.URLReference);
    this.URLOpen = lib.declare("URLOpen", ctypes.default_abi, this.OSStatus, this.URLReference, this.FSSpec.ptr, this.URLOpenFlags, this.URLNotifyUPP, this.URLEventMask, ctypes.void_t.ptr);
    this.URLAbort = lib.declare("URLAbort", ctypes.default_abi, this.OSStatus, this.URLReference);
    this.URLGetDataAvailable = lib.declare("URLGetDataAvailable", ctypes.default_abi, this.OSStatus, this.URLReference, this.Size.ptr);
    this.URLGetBuffer = lib.declare("URLGetBuffer", ctypes.default_abi, this.OSStatus, this.URLReference, ctypes.void_t.ptr.ptr, this.Size.ptr);
    this.URLReleaseBuffer = lib.declare("URLReleaseBuffer", ctypes.default_abi, this.OSStatus, this.URLReference, ctypes.void_t.ptr);
    this.URLGetProperty = lib.declare("URLGetProperty", ctypes.default_abi, this.OSStatus, this.URLReference, ctypes.char.ptr, ctypes.void_t.ptr, this.Size);
    this.URLGetPropertySize = lib.declare("URLGetPropertySize", ctypes.default_abi, this.OSStatus, this.URLReference, ctypes.char.ptr, this.Size.ptr);
    this.URLSetProperty = lib.declare("URLSetProperty", ctypes.default_abi, this.OSStatus, this.URLReference, ctypes.char.ptr, ctypes.void_t.ptr, this.Size);
    this.URLGetCurrentState = lib.declare("URLGetCurrentState", ctypes.default_abi, this.OSStatus, this.URLReference, this.URLState.ptr);
    this.URLGetError = lib.declare("URLGetError", ctypes.default_abi, this.OSStatus, this.URLReference, this.OSStatus.ptr);
    this.URLIdle = lib.declare("URLIdle", ctypes.default_abi, this.OSStatus);
    this.URLGetFileInfo = lib.declare("URLGetFileInfo", ctypes.default_abi, this.OSStatus, this.StringPtr, this.OSType.ptr, this.OSType.ptr);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/OSServices.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/QD.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");
Components.utils.import("resource://osxtypes/Security.jsm");

const EXPORTED_SYMBOLS = ["SecurityHI", "KeychainHI_h", "SecCertificateSupport_h", "URLAccess_h"];

function SecurityHI() {
    let libpath = "/System/Library/Frameworks/Carbon.framework/Frameworks/SecurityHI.framework/SecurityHI";
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

    KeychainHI_h.call(this, lib);
    SecCertificateSupport_h.call(this, lib);
    URLAccess_h.call(this, lib);
}
