// Based on /System/Library/Frameworks/Security.framework/Headers/Authorization.h
function Authorization_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._AUTHORIZATION_H)
        return;
    this._AUTHORIZATION_H = true;

    this.errAuthorizationSuccess = 0;
    this.errAuthorizationInvalidSet = -60001;
    this.errAuthorizationInvalidRef = -60002;
    this.errAuthorizationInvalidTag = -60003;
    this.errAuthorizationInvalidPointer = -60004;
    this.errAuthorizationDenied = -60005;
    this.errAuthorizationCanceled = -60006;
    this.errAuthorizationInteractionNotAllowed = -60007;
    this.errAuthorizationInternal = -60008;
    this.errAuthorizationExternalizeNotAllowed = -60009;
    this.errAuthorizationInternalizeNotAllowed = -60010;
    this.errAuthorizationInvalidFlags = -60011;
    this.errAuthorizationToolExecuteFailure = -60031;
    this.errAuthorizationToolEnvironmentError = -60032;
    this.errAuthorizationBadAddress = -60033;
    this.kAuthorizationFlagDefaults = 0;
    this.kAuthorizationFlagInteractionAllowed = 1;
    this.kAuthorizationFlagExtendRights = 2;
    this.kAuthorizationFlagPartialRights = 4;
    this.kAuthorizationFlagDestroyRights = 8;
    this.kAuthorizationFlagPreAuthorize = 16;
    this.kAuthorizationFlagNoData = 1048576;
    this.AuthorizationFlags = this.UInt32;
    this.kAuthorizationFlagCanNotPreAuthorize = 1;
    this.AuthorizationOpaqueRef = new ctypes.StructType("AuthorizationOpaqueRef");
    this.AuthorizationRef = this.AuthorizationOpaqueRef.ptr;
    this.AuthorizationString = ctypes.char.ptr;
    this.AuthorizationItem = new ctypes.StructType("AuthorizationItem", []);
    this.AuthorizationItemSet = new ctypes.StructType("AuthorizationItemSet", [{count: this.UInt32}, {items: this.AuthorizationItem.ptr}]);
    this.kAuthorizationExternalFormLength = 32;
    this.AuthorizationExternalForm = new ctypes.StructType("AuthorizationExternalForm", [{bytes: ctypes.char.array(32)}]);
    this.AuthorizationRights = this.AuthorizationItemSet;
    this.AuthorizationEnvironment = this.AuthorizationItemSet;
}

// Based on /System/Library/Frameworks/Security.framework/Headers/SecBase.h
function SecBase_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._SECBASE_H)
        return;
    this._SECBASE_H = true;

    this.OpaqueSecKeychainRef = new ctypes.StructType("OpaqueSecKeychainRef");
    this.SecKeychainRef = this.OpaqueSecKeychainRef.ptr;
    this.OpaqueSecKeychainItemRef = new ctypes.StructType("OpaqueSecKeychainItemRef");
    this.SecKeychainItemRef = this.OpaqueSecKeychainItemRef.ptr;
    this.OpaqueSecKeychainSearchRef = new ctypes.StructType("OpaqueSecKeychainSearchRef");
    this.SecKeychainSearchRef = this.OpaqueSecKeychainSearchRef.ptr;
    this.SecKeychainAttrType = this.OSType;
    this.SecKeychainAttribute = new ctypes.StructType("SecKeychainAttribute", [{tag: this.SecKeychainAttrType}, {length: this.UInt32}, {data: ctypes.void_t.ptr}]);
    this.SecKeychainAttributePtr = this.SecKeychainAttribute.ptr;
    this.SecKeychainAttributeList = new ctypes.StructType("SecKeychainAttributeList", [{count: this.UInt32}, {attr: this.SecKeychainAttribute.ptr}]);
    this.SecKeychainStatus = this.UInt32;
    this.OpaqueSecTrustedApplicationRef = new ctypes.StructType("OpaqueSecTrustedApplicationRef");
    this.SecTrustedApplicationRef = this.OpaqueSecTrustedApplicationRef.ptr;
    this.OpaqueSecPolicyRef = new ctypes.StructType("OpaqueSecPolicyRef");
    this.SecPolicyRef = this.OpaqueSecPolicyRef.ptr;
    this.OpaqueSecCertificateRef = new ctypes.StructType("OpaqueSecCertificateRef");
    this.SecCertificateRef = this.OpaqueSecCertificateRef.ptr;
    this.OpaqueSecAccessRef = new ctypes.StructType("OpaqueSecAccessRef");
    this.SecAccessRef = this.OpaqueSecAccessRef.ptr;
    this.OpaqueSecIdentityRef = new ctypes.StructType("OpaqueSecIdentityRef");
    this.SecIdentityRef = this.OpaqueSecIdentityRef.ptr;
    this.OpaqueSecKeyRef = new ctypes.StructType("OpaqueSecKeyRef");
    this.SecKeyRef = this.OpaqueSecKeyRef.ptr;
    this.OpaqueSecTrustRef = new ctypes.StructType("OpaqueSecTrustRef");
    this.SecACLRef = this.OpaqueSecTrustRef.ptr;
    this.OpaqueSecPasswordRef = new ctypes.StructType("OpaqueSecPasswordRef");
    this.SecPasswordRef = this.OpaqueSecPasswordRef.ptr;
    this.SecKeychainAttributeInfo = new ctypes.StructType("SecKeychainAttributeInfo", [{count: this.UInt32}, {tag: this.UInt32.ptr}, {format: this.UInt32.ptr}]);
    this.errSecSuccess = 0;
    this.errSecUnimplemented = -4;
    this.errSecParam = -50;
    this.errSecAllocate = -108;
    this.errSecNotAvailable = -25291;
    this.errSecReadOnly = -25292;
    this.errSecAuthFailed = -25293;
    this.errSecNoSuchKeychain = -25294;
    this.errSecInvalidKeychain = -25295;
    this.errSecDuplicateKeychain = -25296;
    this.errSecDuplicateCallback = -25297;
    this.errSecInvalidCallback = -25298;
    this.errSecDuplicateItem = -25299;
    this.errSecItemNotFound = -25300;
    this.errSecBufferTooSmall = -25301;
    this.errSecDataTooLarge = -25302;
    this.errSecNoSuchAttr = -25303;
    this.errSecInvalidItemRef = -25304;
    this.errSecInvalidSearchRef = -25305;
    this.errSecNoSuchClass = -25306;
    this.errSecNoDefaultKeychain = -25307;
    this.errSecInteractionNotAllowed = -25308;
    this.errSecReadOnlyAttr = -25309;
    this.errSecWrongSecVersion = -25310;
    this.errSecKeySizeNotAllowed = -25311;
    this.errSecNoStorageModule = -25312;
    this.errSecNoCertificateModule = -25313;
    this.errSecNoPolicyModule = -25314;
    this.errSecInteractionRequired = -25315;
    this.errSecDataNotAvailable = -25316;
    this.errSecDataNotModifiable = -25317;
    this.errSecCreateChainFailed = -25318;
    this.errSecInvalidPrefsDomain = -25319;
    this.errSecACLNotSimple = -25240;
    this.errSecPolicyNotFound = -25241;
    this.errSecInvalidTrustSetting = -25242;
    this.errSecNoAccessForItem = -25243;
    this.errSecInvalidOwnerEdit = -25244;
    this.errSecTrustNotAvailable = -25245;
    this.errSecUnsupportedFormat = -25256;
    this.errSecUnknownFormat = -25257;
    this.errSecKeyIsSensitive = -25258;
    this.errSecMultiplePrivKeys = -25259;
    this.errSecPassphraseRequired = -25260;
    this.errSecInvalidPasswordRef = -25261;
    this.errSecInvalidTrustSettings = -25262;
    this.errSecNoTrustSettings = -25263;
    this.errSecPkcs12VerifyFailure = -25264;
    this.errSecDecode = -26275;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["Security", "Authorization_h", "SecBase_h"];

function Security() {
    let libpath = "/System/Library/Frameworks/Security.framework/Security";
    let lib = ctypes.open(libpath);

    Authorization_h.call(this, lib);
    SecBase_h.call(this, lib);
}
