// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFFTPStream.h
function CFFTPStream_h(lib) {
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFStream_h.call(this, lib);

    if (this._CFFTPSTREAM_H)
        return;
    this._CFFTPSTREAM_H = true;

    this.CFReadStreamCreateWithFTPURL = lib.declare("CFReadStreamCreateWithFTPURL", ctypes.default_abi, this.CFReadStreamRef, this.CFAllocatorRef, this.CFURLRef);
    this.CFFTPCreateParsedResourceListing = lib.declare("CFFTPCreateParsedResourceListing", ctypes.default_abi, this.CFIndex, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex, this.CFDictionaryRef.ptr);
    this.CFWriteStreamCreateWithFTPURL = lib.declare("CFWriteStreamCreateWithFTPURL", ctypes.default_abi, this.CFWriteStreamRef, this.CFAllocatorRef, this.CFURLRef);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFHTTPAuthentication.h
function CFHTTPAuthentication_h(lib) {
    CFDictionary_h.call(this, lib);
    CFStream_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFHTTPMessage_h.call(this, lib);

    if (this._CFHTTPAUTHENTICATION_H)
        return;
    this._CFHTTPAUTHENTICATION_H = true;

    this._CFHTTPAuthentication = new ctypes.StructType("_CFHTTPAuthentication");
    this.CFHTTPAuthenticationRef = this._CFHTTPAuthentication.ptr;
    this.kCFStreamErrorHTTPAuthenticationTypeUnsupported = -1000;
    this.kCFStreamErrorHTTPAuthenticationBadUserName = -1001;
    this.kCFStreamErrorHTTPAuthenticationBadPassword = -1002;
    this.CFHTTPAuthenticationGetTypeID = lib.declare("CFHTTPAuthenticationGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFHTTPAuthenticationCreateFromResponse = lib.declare("CFHTTPAuthenticationCreateFromResponse", ctypes.default_abi, this.CFHTTPAuthenticationRef, this.CFAllocatorRef, this.CFHTTPMessageRef);
    this.CFHTTPAuthenticationIsValid = lib.declare("CFHTTPAuthenticationIsValid", ctypes.default_abi, this.Boolean, this.CFHTTPAuthenticationRef, this.CFStreamError.ptr);
    this.CFHTTPAuthenticationAppliesToRequest = lib.declare("CFHTTPAuthenticationAppliesToRequest", ctypes.default_abi, this.Boolean, this.CFHTTPAuthenticationRef, this.CFHTTPMessageRef);
    this.CFHTTPAuthenticationRequiresOrderedRequests = lib.declare("CFHTTPAuthenticationRequiresOrderedRequests", ctypes.default_abi, this.Boolean, this.CFHTTPAuthenticationRef);
    this.CFHTTPMessageApplyCredentials = lib.declare("CFHTTPMessageApplyCredentials", ctypes.default_abi, this.Boolean, this.CFHTTPMessageRef, this.CFHTTPAuthenticationRef, this.CFStringRef, this.CFStringRef, this.CFStreamError.ptr);
    this.CFHTTPMessageApplyCredentialDictionary = lib.declare("CFHTTPMessageApplyCredentialDictionary", ctypes.default_abi, this.Boolean, this.CFHTTPMessageRef, this.CFHTTPAuthenticationRef, this.CFDictionaryRef, this.CFStreamError.ptr);
    this.CFHTTPAuthenticationCopyRealm = lib.declare("CFHTTPAuthenticationCopyRealm", ctypes.default_abi, this.CFStringRef, this.CFHTTPAuthenticationRef);
    this.CFHTTPAuthenticationCopyDomains = lib.declare("CFHTTPAuthenticationCopyDomains", ctypes.default_abi, this.CFArrayRef, this.CFHTTPAuthenticationRef);
    this.CFHTTPAuthenticationCopyMethod = lib.declare("CFHTTPAuthenticationCopyMethod", ctypes.default_abi, this.CFStringRef, this.CFHTTPAuthenticationRef);
    this.CFHTTPAuthenticationRequiresUserNameAndPassword = lib.declare("CFHTTPAuthenticationRequiresUserNameAndPassword", ctypes.default_abi, this.Boolean, this.CFHTTPAuthenticationRef);
    this.CFHTTPAuthenticationRequiresAccountDomain = lib.declare("CFHTTPAuthenticationRequiresAccountDomain", ctypes.default_abi, this.Boolean, this.CFHTTPAuthenticationRef);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFNetServices.h
function CFNetServices_h(lib) {
    CFData_h.call(this, lib);
    CFDate_h.call(this, lib);
    CFRunLoop_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFStream_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

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
    this.CFNetServiceGetTypeID = lib.declare("CFNetServiceGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFNetServiceMonitorGetTypeID = lib.declare("CFNetServiceMonitorGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFNetServiceBrowserGetTypeID = lib.declare("CFNetServiceBrowserGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFNetServiceCreate = lib.declare("CFNetServiceCreate", ctypes.default_abi, this.CFNetServiceRef, this.CFAllocatorRef, this.CFStringRef, this.CFStringRef, this.CFStringRef, this.SInt32);
    this.CFNetServiceCreateCopy = lib.declare("CFNetServiceCreateCopy", ctypes.default_abi, this.CFNetServiceRef, this.CFAllocatorRef, this.CFNetServiceRef);
    this.CFNetServiceGetDomain = lib.declare("CFNetServiceGetDomain", ctypes.default_abi, this.CFStringRef, this.CFNetServiceRef);
    this.CFNetServiceGetType = lib.declare("CFNetServiceGetType", ctypes.default_abi, this.CFStringRef, this.CFNetServiceRef);
    this.CFNetServiceGetName = lib.declare("CFNetServiceGetName", ctypes.default_abi, this.CFStringRef, this.CFNetServiceRef);
    this.CFNetServiceRegisterWithOptions = lib.declare("CFNetServiceRegisterWithOptions", ctypes.default_abi, this.Boolean, this.CFNetServiceRef, this.CFOptionFlags, this.CFStreamError.ptr);
    this.CFNetServiceResolveWithTimeout = lib.declare("CFNetServiceResolveWithTimeout", ctypes.default_abi, this.Boolean, this.CFNetServiceRef, this.CFTimeInterval, this.CFStreamError.ptr);
    this.CFNetServiceCancel = lib.declare("CFNetServiceCancel", ctypes.default_abi, ctypes.void_t, this.CFNetServiceRef);
    this.CFNetServiceGetTargetHost = lib.declare("CFNetServiceGetTargetHost", ctypes.default_abi, this.CFStringRef, this.CFNetServiceRef);
    this.CFNetServiceGetPortNumber = lib.declare("CFNetServiceGetPortNumber", ctypes.default_abi, this.SInt32, this.CFNetServiceRef);
    this.CFNetServiceGetAddressing = lib.declare("CFNetServiceGetAddressing", ctypes.default_abi, this.CFArrayRef, this.CFNetServiceRef);
    this.CFNetServiceGetTXTData = lib.declare("CFNetServiceGetTXTData", ctypes.default_abi, this.CFDataRef, this.CFNetServiceRef);
    this.CFNetServiceSetTXTData = lib.declare("CFNetServiceSetTXTData", ctypes.default_abi, this.Boolean, this.CFNetServiceRef, this.CFDataRef);
    this.CFNetServiceCreateDictionaryWithTXTData = lib.declare("CFNetServiceCreateDictionaryWithTXTData", ctypes.default_abi, this.CFDictionaryRef, this.CFAllocatorRef, this.CFDataRef);
    this.CFNetServiceCreateTXTDataWithDictionary = lib.declare("CFNetServiceCreateTXTDataWithDictionary", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFDictionaryRef);
    this.CFNetServiceSetClient = lib.declare("CFNetServiceSetClient", ctypes.default_abi, this.Boolean, this.CFNetServiceRef, this.CFNetServiceClientCallBack, this.CFNetServiceClientContext.ptr);
    this.CFNetServiceScheduleWithRunLoop = lib.declare("CFNetServiceScheduleWithRunLoop", ctypes.default_abi, ctypes.void_t, this.CFNetServiceRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFNetServiceUnscheduleFromRunLoop = lib.declare("CFNetServiceUnscheduleFromRunLoop", ctypes.default_abi, ctypes.void_t, this.CFNetServiceRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFNetServiceMonitorCreate = lib.declare("CFNetServiceMonitorCreate", ctypes.default_abi, this.CFNetServiceMonitorRef, this.CFAllocatorRef, this.CFNetServiceRef, this.CFNetServiceMonitorClientCallBack, this.CFNetServiceClientContext.ptr);
    this.CFNetServiceMonitorInvalidate = lib.declare("CFNetServiceMonitorInvalidate", ctypes.default_abi, ctypes.void_t, this.CFNetServiceMonitorRef);
    this.CFNetServiceMonitorStart = lib.declare("CFNetServiceMonitorStart", ctypes.default_abi, this.Boolean, this.CFNetServiceMonitorRef, this.CFNetServiceMonitorType, this.CFStreamError.ptr);
    this.CFNetServiceMonitorStop = lib.declare("CFNetServiceMonitorStop", ctypes.default_abi, ctypes.void_t, this.CFNetServiceMonitorRef, this.CFStreamError.ptr);
    this.CFNetServiceMonitorScheduleWithRunLoop = lib.declare("CFNetServiceMonitorScheduleWithRunLoop", ctypes.default_abi, ctypes.void_t, this.CFNetServiceMonitorRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFNetServiceMonitorUnscheduleFromRunLoop = lib.declare("CFNetServiceMonitorUnscheduleFromRunLoop", ctypes.default_abi, ctypes.void_t, this.CFNetServiceMonitorRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFNetServiceBrowserCreate = lib.declare("CFNetServiceBrowserCreate", ctypes.default_abi, this.CFNetServiceBrowserRef, this.CFAllocatorRef, this.CFNetServiceBrowserClientCallBack, this.CFNetServiceClientContext.ptr);
    this.CFNetServiceBrowserInvalidate = lib.declare("CFNetServiceBrowserInvalidate", ctypes.default_abi, ctypes.void_t, this.CFNetServiceBrowserRef);
    this.CFNetServiceBrowserSearchForDomains = lib.declare("CFNetServiceBrowserSearchForDomains", ctypes.default_abi, this.Boolean, this.CFNetServiceBrowserRef, this.Boolean, this.CFStreamError.ptr);
    this.CFNetServiceBrowserSearchForServices = lib.declare("CFNetServiceBrowserSearchForServices", ctypes.default_abi, this.Boolean, this.CFNetServiceBrowserRef, this.CFStringRef, this.CFStringRef, this.CFStreamError.ptr);
    this.CFNetServiceBrowserStopSearch = lib.declare("CFNetServiceBrowserStopSearch", ctypes.default_abi, ctypes.void_t, this.CFNetServiceBrowserRef, this.CFStreamError.ptr);
    this.CFNetServiceBrowserScheduleWithRunLoop = lib.declare("CFNetServiceBrowserScheduleWithRunLoop", ctypes.default_abi, ctypes.void_t, this.CFNetServiceBrowserRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFNetServiceBrowserUnscheduleFromRunLoop = lib.declare("CFNetServiceBrowserUnscheduleFromRunLoop", ctypes.default_abi, ctypes.void_t, this.CFNetServiceBrowserRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFNetServiceRegister = lib.declare("CFNetServiceRegister", ctypes.default_abi, this.Boolean, this.CFNetServiceRef, this.CFStreamError.ptr);
    this.CFNetServiceResolve = lib.declare("CFNetServiceResolve", ctypes.default_abi, this.Boolean, this.CFNetServiceRef, this.CFStreamError.ptr);
    this.CFNetServiceGetProtocolSpecificInformation = lib.declare("CFNetServiceGetProtocolSpecificInformation", ctypes.default_abi, this.CFStringRef, this.CFNetServiceRef);
    this.CFNetServiceSetProtocolSpecificInformation = lib.declare("CFNetServiceSetProtocolSpecificInformation", ctypes.default_abi, ctypes.void_t, this.CFNetServiceRef, this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFProxySupport.h
function CFProxySupport_h(lib) {
    CFRunLoop_h.call(this, lib);
    CFError_h.call(this, lib);
    CFStream_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CFPROXYSUPPORT_H)
        return;
    this._CFPROXYSUPPORT_H = true;

    this.CFNetworkCopySystemProxySettings = lib.declare("CFNetworkCopySystemProxySettings", ctypes.default_abi, this.CFDictionaryRef);
    this.CFNetworkCopyProxiesForURL = lib.declare("CFNetworkCopyProxiesForURL", ctypes.default_abi, this.CFArrayRef, this.CFURLRef, this.CFDictionaryRef);
    this.CFProxyAutoConfigurationResultCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CFArrayRef, this.CFErrorRef]).ptr;
    this.CFNetworkCopyProxiesForAutoConfigurationScript = lib.declare("CFNetworkCopyProxiesForAutoConfigurationScript", ctypes.default_abi, this.CFArrayRef, this.CFStringRef, this.CFURLRef, this.CFErrorRef.ptr);
    this.CFNetworkExecuteProxyAutoConfigurationScript = lib.declare("CFNetworkExecuteProxyAutoConfigurationScript", ctypes.default_abi, this.CFRunLoopSourceRef, this.CFStringRef, this.CFURLRef, this.CFProxyAutoConfigurationResultCallback, this.CFStreamClientContext.ptr);
    this.CFNetworkExecuteProxyAutoConfigurationURL = lib.declare("CFNetworkExecuteProxyAutoConfigurationURL", ctypes.default_abi, this.CFRunLoopSourceRef, this.CFURLRef, this.CFURLRef, this.CFProxyAutoConfigurationResultCallback, this.CFStreamClientContext.ptr);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFNetDiagnostics.h
function CFNetDiagnostics_h(lib) {
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFStream_h.call(this, lib);

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
    this.CFNetDiagnosticCreateWithStreams = lib.declare("CFNetDiagnosticCreateWithStreams", ctypes.default_abi, this.CFNetDiagnosticRef, this.CFAllocatorRef, this.CFReadStreamRef, this.CFWriteStreamRef);
    this.CFNetDiagnosticCreateWithURL = lib.declare("CFNetDiagnosticCreateWithURL", ctypes.default_abi, this.CFNetDiagnosticRef, this.CFAllocatorRef, this.CFURLRef);
    this.CFNetDiagnosticSetName = lib.declare("CFNetDiagnosticSetName", ctypes.default_abi, ctypes.void_t, this.CFNetDiagnosticRef, this.CFStringRef);
    this.CFNetDiagnosticDiagnoseProblemInteractively = lib.declare("CFNetDiagnosticDiagnoseProblemInteractively", ctypes.default_abi, this.CFNetDiagnosticStatus, this.CFNetDiagnosticRef);
    this.CFNetDiagnosticCopyNetworkStatusPassively = lib.declare("CFNetDiagnosticCopyNetworkStatusPassively", ctypes.default_abi, this.CFNetDiagnosticStatus, this.CFNetDiagnosticRef, this.CFStringRef.ptr);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFSocketStream.h
function CFSocketStream_h(lib) {
    CFNetServices_h.call(this, lib);
    CFHost_h.call(this, lib);
    CFStream_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

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
    this.CFStreamCreatePairWithSocketToCFHost = lib.declare("CFStreamCreatePairWithSocketToCFHost", ctypes.default_abi, ctypes.void_t, this.CFAllocatorRef, this.CFHostRef, this.SInt32, this.CFReadStreamRef.ptr, this.CFWriteStreamRef.ptr);
    this.CFStreamCreatePairWithSocketToNetService = lib.declare("CFStreamCreatePairWithSocketToNetService", ctypes.default_abi, ctypes.void_t, this.CFAllocatorRef, this.CFNetServiceRef, this.CFReadStreamRef.ptr, this.CFWriteStreamRef.ptr);
    this.kCFStreamSocketSecurityNone = 0;
    this.kCFStreamSocketSecuritySSLv2 = 1;
    this.kCFStreamSocketSecuritySSLv3 = 2;
    this.kCFStreamSocketSecuritySSLv23 = 3;
    this.kCFStreamSocketSecurityTLSv1 = 4;
    this.CFSocketStreamPairSetSecurityProtocol = lib.declare("CFSocketStreamPairSetSecurityProtocol", ctypes.default_abi, this.Boolean, this.CFReadStreamRef, this.CFWriteStreamRef, this.CFStreamSocketSecurityProtocol);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFHTTPMessage.h
function CFHTTPMessage_h(lib) {
    CFData_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFHTTPMESSAGE_H)
        return;
    this._CFHTTPMESSAGE_H = true;

    this.__CFHTTPMessage = new ctypes.StructType("__CFHTTPMessage");
    this.CFHTTPMessageRef = this.__CFHTTPMessage.ptr;
    this.CFHTTPMessageGetTypeID = lib.declare("CFHTTPMessageGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFHTTPMessageCreateRequest = lib.declare("CFHTTPMessageCreateRequest", ctypes.default_abi, this.CFHTTPMessageRef, this.CFAllocatorRef, this.CFStringRef, this.CFURLRef, this.CFStringRef);
    this.CFHTTPMessageCreateResponse = lib.declare("CFHTTPMessageCreateResponse", ctypes.default_abi, this.CFHTTPMessageRef, this.CFAllocatorRef, this.CFIndex, this.CFStringRef, this.CFStringRef);
    this.CFHTTPMessageCreateEmpty = lib.declare("CFHTTPMessageCreateEmpty", ctypes.default_abi, this.CFHTTPMessageRef, this.CFAllocatorRef, this.Boolean);
    this.CFHTTPMessageCreateCopy = lib.declare("CFHTTPMessageCreateCopy", ctypes.default_abi, this.CFHTTPMessageRef, this.CFAllocatorRef, this.CFHTTPMessageRef);
    this.CFHTTPMessageIsRequest = lib.declare("CFHTTPMessageIsRequest", ctypes.default_abi, this.Boolean, this.CFHTTPMessageRef);
    this.CFHTTPMessageCopyVersion = lib.declare("CFHTTPMessageCopyVersion", ctypes.default_abi, this.CFStringRef, this.CFHTTPMessageRef);
    this.CFHTTPMessageCopyBody = lib.declare("CFHTTPMessageCopyBody", ctypes.default_abi, this.CFDataRef, this.CFHTTPMessageRef);
    this.CFHTTPMessageSetBody = lib.declare("CFHTTPMessageSetBody", ctypes.default_abi, ctypes.void_t, this.CFHTTPMessageRef, this.CFDataRef);
    this.CFHTTPMessageCopyHeaderFieldValue = lib.declare("CFHTTPMessageCopyHeaderFieldValue", ctypes.default_abi, this.CFStringRef, this.CFHTTPMessageRef, this.CFStringRef);
    this.CFHTTPMessageCopyAllHeaderFields = lib.declare("CFHTTPMessageCopyAllHeaderFields", ctypes.default_abi, this.CFDictionaryRef, this.CFHTTPMessageRef);
    this.CFHTTPMessageSetHeaderFieldValue = lib.declare("CFHTTPMessageSetHeaderFieldValue", ctypes.default_abi, ctypes.void_t, this.CFHTTPMessageRef, this.CFStringRef, this.CFStringRef);
    this.CFHTTPMessageAppendBytes = lib.declare("CFHTTPMessageAppendBytes", ctypes.default_abi, this.Boolean, this.CFHTTPMessageRef, this.UInt8.ptr, this.CFIndex);
    this.CFHTTPMessageIsHeaderComplete = lib.declare("CFHTTPMessageIsHeaderComplete", ctypes.default_abi, this.Boolean, this.CFHTTPMessageRef);
    this.CFHTTPMessageCopySerializedMessage = lib.declare("CFHTTPMessageCopySerializedMessage", ctypes.default_abi, this.CFDataRef, this.CFHTTPMessageRef);
    this.CFHTTPMessageCopyRequestURL = lib.declare("CFHTTPMessageCopyRequestURL", ctypes.default_abi, this.CFURLRef, this.CFHTTPMessageRef);
    this.CFHTTPMessageCopyRequestMethod = lib.declare("CFHTTPMessageCopyRequestMethod", ctypes.default_abi, this.CFStringRef, this.CFHTTPMessageRef);
    this.CFHTTPMessageAddAuthentication = lib.declare("CFHTTPMessageAddAuthentication", ctypes.default_abi, this.Boolean, this.CFHTTPMessageRef, this.CFHTTPMessageRef, this.CFStringRef, this.CFStringRef, this.CFStringRef, this.Boolean);
    this.CFHTTPMessageGetResponseStatusCode = lib.declare("CFHTTPMessageGetResponseStatusCode", ctypes.default_abi, this.CFIndex, this.CFHTTPMessageRef);
    this.CFHTTPMessageCopyResponseStatusLine = lib.declare("CFHTTPMessageCopyResponseStatusLine", ctypes.default_abi, this.CFStringRef, this.CFHTTPMessageRef);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/Headers/CFHTTPStream.h
function CFHTTPStream_h(lib) {
    CFHTTPMessage_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFStream_h.call(this, lib);

    if (this._CFHTTPSTREAM_H)
        return;
    this._CFHTTPSTREAM_H = true;

    this.kCFStreamErrorHTTPParseFailure = -1;
    this.kCFStreamErrorHTTPRedirectionLoop = -2;
    this.kCFStreamErrorHTTPBadURL = -3;
    this.CFReadStreamCreateForHTTPRequest = lib.declare("CFReadStreamCreateForHTTPRequest", ctypes.default_abi, this.CFReadStreamRef, this.CFAllocatorRef, this.CFHTTPMessageRef);
    this.CFReadStreamCreateForStreamedHTTPRequest = lib.declare("CFReadStreamCreateForStreamedHTTPRequest", ctypes.default_abi, this.CFReadStreamRef, this.CFAllocatorRef, this.CFHTTPMessageRef, this.CFReadStreamRef);
    this.CFHTTPReadStreamSetRedirectsAutomatically = lib.declare("CFHTTPReadStreamSetRedirectsAutomatically", ctypes.default_abi, ctypes.void_t, this.CFReadStreamRef, this.Boolean);
    this.CFHTTPReadStreamSetProxy = lib.declare("CFHTTPReadStreamSetProxy", ctypes.default_abi, ctypes.void_t, this.CFReadStreamRef, this.CFStringRef, this.CFIndex);
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
    CFData_h.call(this, lib);
    CFRunLoop_h.call(this, lib);
    CFStream_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

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
    this.CFHostGetTypeID = lib.declare("CFHostGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFHostCreateWithName = lib.declare("CFHostCreateWithName", ctypes.default_abi, this.CFHostRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFHostCreateWithAddress = lib.declare("CFHostCreateWithAddress", ctypes.default_abi, this.CFHostRef, this.CFAllocatorRef, this.CFDataRef);
    this.CFHostCreateCopy = lib.declare("CFHostCreateCopy", ctypes.default_abi, this.CFHostRef, this.CFAllocatorRef, this.CFHostRef);
    this.CFHostStartInfoResolution = lib.declare("CFHostStartInfoResolution", ctypes.default_abi, this.Boolean, this.CFHostRef, this.CFHostInfoType, this.CFStreamError.ptr);
    this.CFHostGetAddressing = lib.declare("CFHostGetAddressing", ctypes.default_abi, this.CFArrayRef, this.CFHostRef, this.Boolean.ptr);
    this.CFHostGetNames = lib.declare("CFHostGetNames", ctypes.default_abi, this.CFArrayRef, this.CFHostRef, this.Boolean.ptr);
    this.CFHostGetReachability = lib.declare("CFHostGetReachability", ctypes.default_abi, this.CFDataRef, this.CFHostRef, this.Boolean.ptr);
    this.CFHostCancelInfoResolution = lib.declare("CFHostCancelInfoResolution", ctypes.default_abi, ctypes.void_t, this.CFHostRef, this.CFHostInfoType);
    this.CFHostSetClient = lib.declare("CFHostSetClient", ctypes.default_abi, this.Boolean, this.CFHostRef, this.CFHostClientCallBack, this.CFHostClientContext.ptr);
    this.CFHostScheduleWithRunLoop = lib.declare("CFHostScheduleWithRunLoop", ctypes.default_abi, ctypes.void_t, this.CFHostRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFHostUnscheduleFromRunLoop = lib.declare("CFHostUnscheduleFromRunLoop", ctypes.default_abi, ctypes.void_t, this.CFHostRef, this.CFRunLoopRef, this.CFStringRef);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["CFNetwork", "CFFTPStream_h", "CFHTTPAuthentication_h", "CFNetServices_h", "CFProxySupport_h", "CFNetDiagnostics_h", "CFSocketStream_h", "CFHTTPMessage_h", "CFHTTPStream_h", "CFNetworkErrors_h", "CFHost_h"];

function CFNetwork() {
    let libpath = "/System/Library/Frameworks/CoreServices.framework/Frameworks/CFNetwork.framework/CFNetwork";
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
