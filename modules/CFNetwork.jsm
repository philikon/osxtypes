// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFFTPStream.h
function CFFTPStream_h(lib) {

    if (this._CFFTPSTREAM_H)
        return;
    this._CFFTPSTREAM_H = true;

}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFHTTPAuthentication.h
function CFHTTPAuthentication_h(lib) {

    if (this._CFHTTPAUTHENTICATION_H)
        return;
    this._CFHTTPAUTHENTICATION_H = true;

    this._CFHTTPAuthentication = new ctypes.StructType("_CFHTTPAuthentication");
    this.CFHTTPAuthenticationRef = this._CFHTTPAuthentication.ptr;
    this.kCFStreamErrorHTTPAuthenticationTypeUnsupported = -1000;
    this.kCFStreamErrorHTTPAuthenticationBadUserName = -1001;
    this.kCFStreamErrorHTTPAuthenticationBadPassword = -1002;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFNetServices.h
function CFNetServices_h(lib) {
    CFData_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFStream_h.call(this, lib);

    if (this._CFNETSERVICES_H)
        return;
    this._CFNETSERVICES_H = true;

    this.__CFNetService = new ctypes.StructType("__CFNetService");
    this.CFNetServiceRef = this.__CFNetService.ptr;
    this.__CFNetServiceMonitor = new ctypes.StructType("__CFNetServiceMonitor");
    this.CFNetServiceMonitorRef = this.__CFNetServiceMonitor.ptr;
    this.__CFNetServiceBrowser = new ctypes.StructType("__CFNetServiceBrowser");
    this.CFNetServiceBrowserRef = this.__CFNetServiceBrowser.ptr;
    this.kCFNetServicesErrorUnknown = -72000;
    this.kCFNetServicesErrorCollision = -72001;
    this.kCFNetServicesErrorNotFound = -72002;
    this.kCFNetServicesErrorInProgress = -72003;
    this.kCFNetServicesErrorBadArgument = -72004;
    this.kCFNetServicesErrorCancel = -72005;
    this.kCFNetServicesErrorInvalid = -72006;
    this.kCFNetServicesErrorTimeout = -72007;
    this.kCFNetServiceMonitorTXT = 1;
    this.kCFNetServiceFlagNoAutoRename = 1;
    this.kCFNetServiceFlagMoreComing = 1;
    this.kCFNetServiceFlagIsDomain = 2;
    this.kCFNetServiceFlagIsDefault = 4;
    this.kCFNetServiceFlagIsRegistrationDomain = 4;
    this.kCFNetServiceFlagRemove = 8;
    this.CFNetServiceClientContext = new ctypes.StructType("CFNetServiceClientContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: this.CFAllocatorRetainCallBack}, {release: this.CFAllocatorReleaseCallBack}, {copyDescription: this.CFAllocatorCopyDescriptionCallBack}]);
    this.CFNetServiceClientCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFNetServiceRef, this.CFStreamError.ptr, ctypes.void_t.ptr]).ptr;
    this.CFNetServiceMonitorClientCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFNetServiceMonitorRef, this.CFNetServiceRef, this.CFNetServiceMonitorType, this.CFDataRef, this.CFStreamError.ptr, ctypes.void_t.ptr]).ptr;
    this.CFNetServiceBrowserClientCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFNetServiceBrowserRef, this.CFOptionFlags, this.CFTypeRef, this.CFStreamError.ptr, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFProxySupport.h
function CFProxySupport_h(lib) {
    CFError_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CFPROXYSUPPORT_H)
        return;
    this._CFPROXYSUPPORT_H = true;

    this.CFProxyAutoConfigurationResultCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CFArrayRef, this.CFErrorRef]).ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFNetDiagnostics.h
function CFNetDiagnostics_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFNETDIAGNOSTICS_H)
        return;
    this._CFNETDIAGNOSTICS_H = true;

    this.__CFNetDiagnostic = new ctypes.StructType("__CFNetDiagnostic");
    this.CFNetDiagnosticRef = this.__CFNetDiagnostic.ptr;
    this.kCFNetDiagnosticNoErr = 0;
    this.kCFNetDiagnosticErr = -66560;
    this.kCFNetDiagnosticConnectionUp = -66559;
    this.kCFNetDiagnosticConnectionIndeterminate = -66558;
    this.kCFNetDiagnosticConnectionDown = -66557;
    this.CFNetDiagnosticStatus = this.CFIndex;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFSocketStream.h
function CFSocketStream_h(lib) {

    if (this._CFSOCKETSTREAM_H)
        return;
    this._CFSOCKETSTREAM_H = true;

    // Dropping inline function 'CFSocketStreamSOCKSGetErrorSubdomain'.
    // Dropping inline function 'CFSocketStreamSOCKSGetError'.
    this.kCFStreamErrorSOCKSSubDomainNone = 0;
    this.kCFStreamErrorSOCKSSubDomainVersionCode = 1;
    this.kCFStreamErrorSOCKS4SubDomainResponse = 2;
    this.kCFStreamErrorSOCKS5SubDomainUserPass = 3;
    this.kCFStreamErrorSOCKS5SubDomainMethod = 4;
    this.kCFStreamErrorSOCKS5SubDomainResponse = 5;
    this.kCFStreamErrorSOCKS5BadResponseAddr = 1;
    this.kCFStreamErrorSOCKS5BadState = 2;
    this.kCFStreamErrorSOCKSUnknownClientVersion = 3;
    this.kCFStreamErrorSOCKS4RequestFailed = 91;
    this.kCFStreamErrorSOCKS4IdentdFailed = 92;
    this.kCFStreamErrorSOCKS4IdConflict = 93;
    this.kSOCKS5NoAcceptableMethod = 255;
    this.kCFStreamSocketSecurityNone = 0;
    this.kCFStreamSocketSecuritySSLv2 = 1;
    this.kCFStreamSocketSecuritySSLv3 = 2;
    this.kCFStreamSocketSecuritySSLv23 = 3;
    this.kCFStreamSocketSecurityTLSv1 = 4;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFHTTPMessage.h
function CFHTTPMessage_h(lib) {

    if (this._CFHTTPMESSAGE_H)
        return;
    this._CFHTTPMESSAGE_H = true;

    this.__CFHTTPMessage = new ctypes.StructType("__CFHTTPMessage");
    this.CFHTTPMessageRef = this.__CFHTTPMessage.ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFHTTPStream.h
function CFHTTPStream_h(lib) {

    if (this._CFHTTPSTREAM_H)
        return;
    this._CFHTTPSTREAM_H = true;

    this.kCFStreamErrorHTTPParseFailure = -1;
    this.kCFStreamErrorHTTPRedirectionLoop = -2;
    this.kCFStreamErrorHTTPBadURL = -3;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFNetworkErrors.h
function CFNetworkErrors_h(lib) {

    if (this._CFNETWORKERRORS_H)
        return;
    this._CFNETWORKERRORS_H = true;

    this.kCFHostErrorHostNotFound = 1;
    this.kCFHostErrorUnknown = 2;
    this.kCFSOCKSErrorUnknownClientVersion = 100;
    this.kCFSOCKSErrorUnsupportedServerVersion = 101;
    this.kCFSOCKS4ErrorRequestFailed = 110;
    this.kCFSOCKS4ErrorIdentdFailed = 111;
    this.kCFSOCKS4ErrorIdConflict = 112;
    this.kCFSOCKS4ErrorUnknownStatusCode = 113;
    this.kCFSOCKS5ErrorBadState = 120;
    this.kCFSOCKS5ErrorBadResponseAddr = 121;
    this.kCFSOCKS5ErrorBadCredentials = 122;
    this.kCFSOCKS5ErrorUnsupportedNegotiationMethod = 123;
    this.kCFSOCKS5ErrorNoAcceptableMethod = 124;
    this.kCFFTPErrorUnexpectedStatusCode = 200;
    this.kCFErrorHTTPAuthenticationTypeUnsupported = 300;
    this.kCFErrorHTTPBadCredentials = 301;
    this.kCFErrorHTTPConnectionLost = 302;
    this.kCFErrorHTTPParseFailure = 303;
    this.kCFErrorHTTPRedirectionLoopDetected = 304;
    this.kCFErrorHTTPBadURL = 305;
    this.kCFErrorHTTPProxyConnectionFailure = 306;
    this.kCFErrorHTTPBadProxyCredentials = 307;
    this.kCFErrorPACFileError = 308;
    this.kCFErrorPACFileAuth = 309;
    this.kCFErrorHTTPSProxyConnectionFailure = 310;
    this.kCFURLErrorUnknown = -998;
    this.kCFURLErrorCancelled = -999;
    this.kCFURLErrorBadURL = -1000;
    this.kCFURLErrorTimedOut = -1001;
    this.kCFURLErrorUnsupportedURL = -1002;
    this.kCFURLErrorCannotFindHost = -1003;
    this.kCFURLErrorCannotConnectToHost = -1004;
    this.kCFURLErrorNetworkConnectionLost = -1005;
    this.kCFURLErrorDNSLookupFailed = -1006;
    this.kCFURLErrorHTTPTooManyRedirects = -1007;
    this.kCFURLErrorResourceUnavailable = -1008;
    this.kCFURLErrorNotConnectedToInternet = -1009;
    this.kCFURLErrorRedirectToNonExistentLocation = -1010;
    this.kCFURLErrorBadServerResponse = -1011;
    this.kCFURLErrorUserCancelledAuthentication = -1012;
    this.kCFURLErrorUserAuthenticationRequired = -1013;
    this.kCFURLErrorZeroByteResource = -1014;
    this.kCFURLErrorCannotDecodeRawData = -1015;
    this.kCFURLErrorCannotDecodeContentData = -1016;
    this.kCFURLErrorCannotParseResponse = -1017;
    this.kCFURLErrorInternationalRoamingOff = -1018;
    this.kCFURLErrorCallIsActive = -1019;
    this.kCFURLErrorDataNotAllowed = -1020;
    this.kCFURLErrorRequestBodyStreamExhausted = -1021;
    this.kCFURLErrorFileDoesNotExist = -1100;
    this.kCFURLErrorFileIsDirectory = -1101;
    this.kCFURLErrorNoPermissionsToReadFile = -1102;
    this.kCFURLErrorDataLengthExceedsMaximum = -1103;
    this.kCFURLErrorSecureConnectionFailed = -1200;
    this.kCFURLErrorServerCertificateHasBadDate = -1201;
    this.kCFURLErrorServerCertificateUntrusted = -1202;
    this.kCFURLErrorServerCertificateHasUnknownRoot = -1203;
    this.kCFURLErrorServerCertificateNotYetValid = -1204;
    this.kCFURLErrorClientCertificateRejected = -1205;
    this.kCFURLErrorClientCertificateRequired = -1206;
    this.kCFURLErrorCannotLoadFromNetwork = -2000;
    this.kCFURLErrorCannotCreateFile = -3000;
    this.kCFURLErrorCannotOpenFile = -3001;
    this.kCFURLErrorCannotCloseFile = -3002;
    this.kCFURLErrorCannotWriteToFile = -3003;
    this.kCFURLErrorCannotRemoveFile = -3004;
    this.kCFURLErrorCannotMoveFile = -3005;
    this.kCFURLErrorDownloadDecodingFailedMidStream = -3006;
    this.kCFURLErrorDownloadDecodingFailedToComplete = -3007;
    this.kCFHTTPCookieCannotParseCookieFile = -4000;
    this.kCFNetServiceErrorUnknown = -72000;
    this.kCFNetServiceErrorCollision = -72001;
    this.kCFNetServiceErrorNotFound = -72002;
    this.kCFNetServiceErrorInProgress = -72003;
    this.kCFNetServiceErrorBadArgument = -72004;
    this.kCFNetServiceErrorCancel = -72005;
    this.kCFNetServiceErrorInvalid = -72006;
    this.kCFNetServiceErrorTimeout = -72007;
    this.kCFNetServiceErrorDNSServiceFailure = -73000;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFHost.h
function CFHost_h(lib) {
    CFBase_h.call(this, lib);
    CFStream_h.call(this, lib);

    if (this._CFHOST_H)
        return;
    this._CFHOST_H = true;

    this.__CFHost = new ctypes.StructType("__CFHost");
    this.CFHostRef = this.__CFHost.ptr;
    this.kCFHostAddresses = 0;
    this.kCFHostNames = 1;
    this.kCFHostReachability = 2;
    this.CFHostClientContext = new ctypes.StructType("CFHostClientContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: this.CFAllocatorRetainCallBack}, {release: this.CFAllocatorReleaseCallBack}, {copyDescription: this.CFAllocatorCopyDescriptionCallBack}]);
    this.CFHostClientCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFHostRef, this.CFHostInfoType, this.CFStreamError.ptr, ctypes.void_t.ptr]).ptr;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");

const EXPORTED_SYMBOLS = ["CFNetwork", "CFFTPStream_h", "CFHTTPAuthentication_h", "CFNetServices_h", "CFProxySupport_h", "CFNetDiagnostics_h", "CFSocketStream_h", "CFHTTPMessage_h", "CFHTTPStream_h", "CFNetworkErrors_h", "CFHost_h"];

function CFNetwork() {
    let libpath = "/System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/CFNetwork";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    CFFTPStream_h.call(this, lib);
    CFHTTPAuthentication_h.call(this, lib);
    CFNetServices_h.call(this, lib);
    CFProxySupport_h.call(this, lib);
    CFNetDiagnostics_h.call(this, lib);
    CFSocketStream_h.call(this, lib);
    CFHTTPMessage_h.call(this, lib);
    CFHTTPStream_h.call(this, lib);
    CFNetworkErrors_h.call(this, lib);
    CFHost_h.call(this, lib);
}
