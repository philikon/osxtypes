// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/SecurityHI.framework/Headers/KeychainHI.h
function KeychainHI_h(lib) {

    if (this._KEYCHAINHI_H)
        return;
    this._KEYCHAINHI_H = true;

}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/SecurityHI.framework/Headers/SecCertificateSupport.h
function SecCertificateSupport_h(lib) {

    if (this._SECCERTIFICATESUPPORT_H)
        return;
    this._SECCERTIFICATESUPPORT_H = true;

    this.typeSecIdentityRef = 1936286841;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/SecurityHI.framework/Headers/URLAccess.h
function URLAccess_h(lib) {
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
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");

const EXPORTED_SYMBOLS = ["SecurityHI", "KeychainHI_h", "SecCertificateSupport_h", "URLAccess_h"];

function SecurityHI() {
    let libpath = "/System/Library/Frameworks/SecurityHI.framework/SecurityHI";
    let lib = ctypes.open(libpath);

    KeychainHI_h.call(this, lib);
    SecCertificateSupport_h.call(this, lib);
    URLAccess_h.call(this, lib);
}
