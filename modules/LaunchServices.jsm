// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Headers/UTType.h
function UTType_h(lib) {

    if (this._UTTYPE_H)
        return;
    this._UTTYPE_H = true;

}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Headers/LSSharedFileList.h
function LSSharedFileList_h(lib) {

    if (this._LSSHAREDFILELIST_H)
        return;
    this._LSSHAREDFILELIST_H = true;

    this.OpaqueLSSharedFileListRef = new ctypes.StructType("OpaqueLSSharedFileListRef");
    this.LSSharedFileListRef = this.OpaqueLSSharedFileListRef.ptr;
    this.OpaqueLSSharedFileListItemRef = new ctypes.StructType("OpaqueLSSharedFileListItemRef");
    this.LSSharedFileListItemRef = this.OpaqueLSSharedFileListItemRef.ptr;
    this.kLSSharedFileListNoUserInteraction = 1;
    this.kLSSharedFileListDoNotMountVolumes = 2;
    this.LSSharedFileListChangedProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.LSSharedFileListRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Headers/LSInfo.h
function LSInfo_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._LSINFO_H)
        return;
    this._LSINFO_H = true;

    this.kLSAppInTrashErr = -10660;
    this.kLSExecutableIncorrectFormat = -10661;
    this.kLSAttributeNotFoundErr = -10662;
    this.kLSAttributeNotSettableErr = -10663;
    this.kLSIncompatibleApplicationVersionErr = -10664;
    this.kLSNoRosettaEnvironmentErr = -10665;
    this.kLSUnknownErr = -10810;
    this.kLSNotAnApplicationErr = -10811;
    this.kLSNotInitializedErr = -10812;
    this.kLSDataUnavailableErr = -10813;
    this.kLSApplicationNotFoundErr = -10814;
    this.kLSUnknownTypeErr = -10815;
    this.kLSDataTooOldErr = -10816;
    this.kLSDataErr = -10817;
    this.kLSLaunchInProgressErr = -10818;
    this.kLSNotRegisteredErr = -10819;
    this.kLSAppDoesNotClaimTypeErr = -10820;
    this.kLSAppDoesNotSupportSchemeWarning = -10821;
    this.kLSServerCommunicationErr = -10822;
    this.kLSCannotSetInfoErr = -10823;
    this.kLSNoRegistrationInfoErr = -10824;
    this.kLSIncompatibleSystemVersionErr = -10825;
    this.kLSNoLaunchPermissionErr = -10826;
    this.kLSNoExecutableErr = -10827;
    this.kLSNoClassicEnvironmentErr = -10828;
    this.kLSMultipleSessionsNotSupportedErr = -10829;
    this.LSInitializeFlags = this.OptionBits;
    this.kLSInitializeDefaults = 1;
    this.kLSMinCatInfoBitmap = 6154;
    this.LSRequestedInfo = this.OptionBits;
    this.kLSRequestExtension = 1;
    this.kLSRequestTypeCreator = 2;
    this.kLSRequestBasicFlagsOnly = 4;
    this.kLSRequestAppTypeFlags = 8;
    this.kLSRequestAllFlags = 16;
    this.kLSRequestIconAndKind = 32;
    this.kLSRequestExtensionFlagsOnly = 64;
    this.kLSRequestAllInfo = -1;
    this.LSItemInfoFlags = this.OptionBits;
    this.kLSItemInfoIsPlainFile = 1;
    this.kLSItemInfoIsPackage = 2;
    this.kLSItemInfoIsApplication = 4;
    this.kLSItemInfoIsContainer = 8;
    this.kLSItemInfoIsAliasFile = 16;
    this.kLSItemInfoIsSymlink = 32;
    this.kLSItemInfoIsInvisible = 64;
    this.kLSItemInfoIsNativeApp = 128;
    this.kLSItemInfoIsClassicApp = 256;
    this.kLSItemInfoAppPrefersNative = 512;
    this.kLSItemInfoAppPrefersClassic = 1024;
    this.kLSItemInfoAppIsScriptable = 2048;
    this.kLSItemInfoIsVolume = 4096;
    this.kLSItemInfoExtensionIsHidden = 1048576;
    this.LSRolesMask = this.OptionBits;
    this.kLSRolesNone = 1;
    this.kLSRolesViewer = 2;
    this.kLSRolesEditor = 4;
    this.kLSRolesShell = 8;
    this.kLSRolesAll = -1;
    this.LSKindID = this.UInt32;
    this.kLSUnknownKindID = 0;
    this.kLSUnknownType = 0;
    this.kLSUnknownCreator = 0;
    this.LSItemInfoRecord = new ctypes.StructType("LSItemInfoRecord", [{flags: this.LSItemInfoFlags}, {filetype: this.OSType}, {creator: this.OSType}, {extension: this.CFStringRef}, {iconFileName: this.CFStringRef}, {kindID: this.LSKindID}]);
    this.LSAcceptanceFlags = this.OptionBits;
    this.kLSAcceptDefault = 1;
    this.kLSAcceptAllowLoginUI = 2;
    this.LSHandlerOptions = this.OptionBits;
    this.kLSHandlerOptionsDefault = 0;
    this.kLSHandlerOptionsIgnoreCreator = 1;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Headers/UTCoreTypes.h
function UTCoreTypes_h(lib) {

    if (this._UTCORETYPES_H)
        return;
    this._UTCORETYPES_H = true;

}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Headers/IconsCore.h
function IconsCore_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._ICONSCORE_H)
        return;
    this._ICONSCORE_H = true;

    this.kGenericDocumentIconResource = -4000;
    this.kGenericStationeryIconResource = -3985;
    this.kGenericEditionFileIconResource = -3989;
    this.kGenericApplicationIconResource = -3996;
    this.kGenericDeskAccessoryIconResource = -3991;
    this.kGenericFolderIconResource = -3999;
    this.kPrivateFolderIconResource = -3994;
    this.kFloppyIconResource = -3998;
    this.kTrashIconResource = -3993;
    this.kGenericRAMDiskIconResource = -3988;
    this.kGenericCDROMIconResource = -3987;
    this.kDesktopIconResource = -3992;
    this.kOpenFolderIconResource = -3997;
    this.kGenericHardDiskIconResource = -3995;
    this.kGenericFileServerIconResource = -3972;
    this.kGenericSuitcaseIconResource = -3970;
    this.kGenericMoverObjectIconResource = -3969;
    this.kGenericPreferencesIconResource = -3971;
    this.kGenericQueryDocumentIconResource = -16506;
    this.kGenericExtensionIconResource = -16415;
    this.kSystemFolderIconResource = -3983;
    this.kHelpIconResource = -20271;
    this.kAppleMenuFolderIconResource = -3982;
    this.genericDocumentIconResource = -4000;
    this.genericStationeryIconResource = -3985;
    this.genericEditionFileIconResource = -3989;
    this.genericApplicationIconResource = -3996;
    this.genericDeskAccessoryIconResource = -3991;
    this.genericFolderIconResource = -3999;
    this.privateFolderIconResource = -3994;
    this.floppyIconResource = -3998;
    this.trashIconResource = -3993;
    this.genericRAMDiskIconResource = -3988;
    this.genericCDROMIconResource = -3987;
    this.desktopIconResource = -3992;
    this.openFolderIconResource = -3997;
    this.genericHardDiskIconResource = -3995;
    this.genericFileServerIconResource = -3972;
    this.genericSuitcaseIconResource = -3970;
    this.genericMoverObjectIconResource = -3969;
    this.genericPreferencesIconResource = -3971;
    this.genericQueryDocumentIconResource = -16506;
    this.genericExtensionIconResource = -16415;
    this.systemFolderIconResource = -3983;
    this.appleMenuFolderIconResource = -3982;
    this.kStartupFolderIconResource = -3981;
    this.kOwnedFolderIconResource = -3980;
    this.kDropFolderIconResource = -3979;
    this.kSharedFolderIconResource = -3978;
    this.kMountedFolderIconResource = -3977;
    this.kControlPanelFolderIconResource = -3976;
    this.kPrintMonitorFolderIconResource = -3975;
    this.kPreferencesFolderIconResource = -3974;
    this.kExtensionsFolderIconResource = -3973;
    this.kFontsFolderIconResource = -3968;
    this.kFullTrashIconResource = -3984;
    this.startupFolderIconResource = -3981;
    this.ownedFolderIconResource = -3980;
    this.dropFolderIconResource = -3979;
    this.sharedFolderIconResource = -3978;
    this.mountedFolderIconResource = -3977;
    this.controlPanelFolderIconResource = -3976;
    this.printMonitorFolderIconResource = -3975;
    this.preferencesFolderIconResource = -3974;
    this.extensionsFolderIconResource = -3973;
    this.fontsFolderIconResource = -3968;
    this.fullTrashIconResource = -3984;
    this.OpaqueIconRef = new ctypes.StructType("OpaqueIconRef");
    this.IconRef = this.OpaqueIconRef.ptr;
    this.kSystemIconsCreator = 1835098995;
    this.kClipboardIcon = 1129072976;
    this.kClippingUnknownTypeIcon = 1668051061;
    this.kClippingPictureTypeIcon = 1668051056;
    this.kClippingTextTypeIcon = 1668051060;
    this.kClippingSoundTypeIcon = 1668051059;
    this.kDesktopIcon = 1684370283;
    this.kFinderIcon = 1179534418;
    this.kComputerIcon = 1919905652;
    this.kFontSuitcaseIcon = 1179011404;
    this.kFullTrashIcon = 1718907496;
    this.kGenericApplicationIcon = 1095782476;
    this.kGenericCDROMIcon = 1667523698;
    this.kGenericControlPanelIcon = 1095782467;
    this.kGenericControlStripModuleIcon = 1935959414;
    this.kGenericComponentIcon = 1953001063;
    this.kGenericDeskAccessoryIcon = 1095782468;
    this.kGenericDocumentIcon = 1685021557;
    this.kGenericEditionFileIcon = 1701082214;
    this.kGenericExtensionIcon = 1229867348;
    this.kGenericFileServerIcon = 1936881266;
    this.kGenericFontIcon = 1717987692;
    this.kGenericFontScalerIcon = 1935895666;
    this.kGenericFloppyIcon = 1718382713;
    this.kGenericHardDiskIcon = 1751413611;
    this.kGenericIDiskIcon = 1768190827;
    this.kGenericRemovableMediaIcon = 1919774582;
    this.kGenericMoverObjectIcon = 1836021362;
    this.kGenericPCCardIcon = 1885564259;
    this.kGenericPreferencesIcon = 1886545254;
    this.kGenericQueryDocumentIcon = 1902473849;
    this.kGenericRAMDiskIcon = 1918987620;
    this.kGenericSharedLibaryIcon = 1936223330;
    this.kGenericStationeryIcon = 1935961955;
    this.kGenericSuitcaseIcon = 1937074548;
    this.kGenericURLIcon = 1735750252;
    this.kGenericWORMIcon = 2003792493;
    this.kInternationalResourcesIcon = 1768319340;
    this.kKeyboardLayoutIcon = 1801873772;
    this.kSoundFileIcon = 1936091500;
    this.kSystemSuitcaseIcon = 2054388083;
    this.kTrashIcon = 1953657704;
    this.kTrueTypeFontIcon = 1952868716;
    this.kTrueTypeFlatFontIcon = 1936092788;
    this.kTrueTypeMultiFlatFontIcon = 1953784678;
    this.kUserIDiskIcon = 1969517419;
    this.kUnknownFSObjectIcon = 1970169459;
    this.kInternationResourcesIcon = 1768319340;
    this.kInternetLocationHTTPIcon = 1768712308;
    this.kInternetLocationFTPIcon = 1768711796;
    this.kInternetLocationAppleShareIcon = 1768710502;
    this.kInternetLocationAppleTalkZoneIcon = 1768710516;
    this.kInternetLocationFileIcon = 1768711785;
    this.kInternetLocationMailIcon = 1768713569;
    this.kInternetLocationNewsIcon = 1768713847;
    this.kInternetLocationNSLNeighborhoodIcon = 1768713843;
    this.kInternetLocationGenericIcon = 1768712037;
    this.kGenericFolderIcon = 1718379634;
    this.kDropFolderIcon = 1684172664;
    this.kMountedFolderIcon = 1835955300;
    this.kOpenFolderIcon = 1868983396;
    this.kOwnedFolderIcon = 1870098020;
    this.kPrivateFolderIcon = 1886549606;
    this.kSharedFolderIcon = 1936221804;
    this.kSharingPrivsNotApplicableIcon = 1936223841;
    this.kSharingPrivsReadOnlyIcon = 1936224879;
    this.kSharingPrivsReadWriteIcon = 1936224887;
    this.kSharingPrivsUnknownIcon = 1936225643;
    this.kSharingPrivsWritableIcon = 2003986804;
    this.kUserFolderIcon = 1969646692;
    this.kWorkgroupFolderIcon = 2003201124;
    this.kGuestUserIcon = 1735750514;
    this.kUserIcon = 1970496882;
    this.kOwnerIcon = 1937077106;
    this.kGroupIcon = 1735554416;
    this.kAppearanceFolderIcon = 1634758770;
    this.kAppleExtrasFolderIcon = 1634040004;
    this.kAppleMenuFolderIcon = 1634561653;
    this.kApplicationsFolderIcon = 1634758771;
    this.kApplicationSupportFolderIcon = 1634956656;
    this.kAssistantsFolderIcon = 1634956484;
    this.kColorSyncFolderIcon = 1886547814;
    this.kContextualMenuItemsFolderIcon = 1668116085;
    this.kControlPanelDisabledFolderIcon = 1668575812;
    this.kControlPanelFolderIcon = 1668575852;
    this.kControlStripModulesFolderIcon = 1935963844;
    this.kDocumentsFolderIcon = 1685021555;
    this.kExtensionsDisabledFolderIcon = 1702392900;
    this.kExtensionsFolderIcon = 1702392942;
    this.kFavoritesFolderIcon = 1717663347;
    this.kFontsFolderIcon = 1718578804;
    this.kHelpFolderIcon = -999789456;
    this.kInternetFolderIcon = 1768846532;
    this.kInternetPlugInFolderIcon = -999398028;
    this.kInternetSearchSitesFolderIcon = 1769173862;
    this.kLocalesFolderIcon = -999526557;
    this.kMacOSReadMeFolderIcon = 1836020420;
    this.kPublicFolderIcon = 1886741094;
    this.kPreferencesFolderIcon = 1886545604;
    this.kPrinterDescriptionFolderIcon = 1886413926;
    this.kPrinterDriverFolderIcon = -999263644;
    this.kPrintMonitorFolderIcon = 1886547572;
    this.kRecentApplicationsFolderIcon = 1918988400;
    this.kRecentDocumentsFolderIcon = 1919184739;
    this.kRecentServersFolderIcon = 1920168566;
    this.kScriptingAdditionsFolderIcon = -999070862;
    this.kSharedLibrariesFolderIcon = -999528094;
    this.kScriptsFolderIcon = 1935897284;
    this.kShutdownItemsDisabledFolderIcon = 1936221252;
    this.kShutdownItemsFolderIcon = 1936221286;
    this.kSpeakableItemsFolder = 1936747369;
    this.kStartupItemsDisabledFolderIcon = 1937011268;
    this.kStartupItemsFolderIcon = 1937011316;
    this.kSystemExtensionDisabledFolderIcon = 1835098948;
    this.kSystemFolderIcon = 1835098995;
    this.kTextEncodingsFolderIcon = -999004808;
    this.kUsersFolderIcon = 1970500292;
    this.kUtilitiesFolderIcon = 1970563524;
    this.kVoicesFolderIcon = 1719037795;
    this.kAppleScriptBadgeIcon = 1935897200;
    this.kLockedBadgeIcon = 1818387559;
    this.kMountedBadgeIcon = 1835164775;
    this.kSharedBadgeIcon = 1935828071;
    this.kAliasBadgeIcon = 1633838183;
    this.kAlertCautionBadgeIcon = 1667392615;
    this.kAlertNoteIcon = 1852798053;
    this.kAlertCautionIcon = 1667331444;
    this.kAlertStopIcon = 1937010544;
    this.kAppleTalkIcon = 1635019883;
    this.kAppleTalkZoneIcon = 1635023470;
    this.kAFPServerIcon = 1634103411;
    this.kFTPServerIcon = 1718906995;
    this.kHTTPServerIcon = 1752461427;
    this.kGenericNetworkIcon = 1735288180;
    this.kIPFileServerIcon = 1769173622;
    this.kToolbarCustomizeIcon = 1952675187;
    this.kToolbarDeleteIcon = 1952736620;
    this.kToolbarFavoritesIcon = 1952866678;
    this.kToolbarHomeIcon = 1953001325;
    this.kToolbarAdvancedIcon = 1952604534;
    this.kToolbarInfoIcon = 1952606574;
    this.kToolbarLabelsIcon = 1952607330;
    this.kToolbarApplicationsFolderIcon = 1950445683;
    this.kToolbarDocumentsFolderIcon = 1950642019;
    this.kToolbarMovieFolderIcon = 1951231862;
    this.kToolbarMusicFolderIcon = 1951233395;
    this.kToolbarPicturesFolderIcon = 1951426915;
    this.kToolbarPublicFolderIcon = 1951429986;
    this.kToolbarDesktopFolderIcon = 1950643051;
    this.kToolbarDownloadsFolderIcon = 1950644078;
    this.kToolbarLibraryFolderIcon = 1951164770;
    this.kToolbarUtilitiesFolderIcon = 1951757420;
    this.kToolbarSitesFolderIcon = 1951626355;
    this.kAppleLogoIcon = 1667330156;
    this.kAppleMenuIcon = 1935765612;
    this.kBackwardArrowIcon = 1650553455;
    this.kFavoriteItemsIcon = 1717663346;
    this.kForwardArrowIcon = 1717662319;
    this.kGridIcon = 1735551332;
    this.kHelpIcon = 1751477360;
    this.kKeepArrangedIcon = 1634889319;
    this.kLockedIcon = 1819239275;
    this.kNoFilesIcon = 1852205420;
    this.kNoFolderIcon = 1852206180;
    this.kNoWriteIcon = 1853321844;
    this.kProtectedApplicationFolderIcon = 1885433968;
    this.kProtectedSystemFolderIcon = 1886615923;
    this.kRecentItemsIcon = 1919118964;
    this.kShortcutIcon = 1936224884;
    this.kSortAscendingIcon = 1634954852;
    this.kSortDescendingIcon = 1685286500;
    this.kUnlockedIcon = 1970037611;
    this.kConnectToIcon = 1668178804;
    this.kGenericWindowIcon = 1735879022;
    this.kQuestionMarkIcon = 1903519091;
    this.kDeleteAliasIcon = 1684106345;
    this.kEjectMediaIcon = 1701471587;
    this.kBurningIcon = 1651864174;
    this.kRightContainerArrowIcon = 1919115634;
    this.IconServicesUsageFlags = this.UInt32;
    this.kIconServicesNormalUsageFlag = 0;
    this.kIconServicesNoBadgeFlag = 1;
    this.kIconServicesUpdateIfNeededFlag = 2;
    this.kIconServicesCatalogInfoMask = 531550;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Headers/LSOpen.h
function LSOpen_h(lib) {
    Files_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    AEDataModel_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._LSOPEN_H)
        return;
    this._LSOPEN_H = true;

    this.LSLaunchFlags = this.OptionBits;
    this.kLSLaunchDefaults = 1;
    this.kLSLaunchAndPrint = 2;
    this.kLSLaunchReserved2 = 4;
    this.kLSLaunchReserved3 = 8;
    this.kLSLaunchReserved4 = 16;
    this.kLSLaunchReserved5 = 32;
    this.kLSLaunchAndDisplayErrors = 64;
    this.kLSLaunchInhibitBGOnly = 128;
    this.kLSLaunchDontAddToRecents = 256;
    this.kLSLaunchDontSwitch = 512;
    this.kLSLaunchNoParams = 2048;
    this.kLSLaunchAsync = 65536;
    this.kLSLaunchStartClassic = 131072;
    this.kLSLaunchInClassic = 262144;
    this.kLSLaunchNewInstance = 524288;
    this.kLSLaunchAndHide = 1048576;
    this.kLSLaunchAndHideOthers = 2097152;
    this.kLSLaunchHasUntrustedContents = 4194304;
    this.LSLaunchFSRefSpec = new ctypes.StructType("LSLaunchFSRefSpec", [{appRef: this.FSRef.ptr}, {numDocs: this.ItemCount}, {itemRefs: this.FSRef.ptr}, {passThruParams: this.AEDesc.ptr}, {launchFlags: this.LSLaunchFlags}, {asyncRefCon: ctypes.void_t.ptr}]);
    this.LSLaunchURLSpec = new ctypes.StructType("LSLaunchURLSpec", [{appURL: this.CFURLRef}, {itemURLs: this.CFArrayRef}, {passThruParams: this.AEDesc.ptr}, {launchFlags: this.LSLaunchFlags}, {asyncRefCon: ctypes.void_t.ptr}]);
    this.LSApplicationParameters = new ctypes.StructType("LSApplicationParameters", [{version: this.CFIndex}, {flags: this.LSLaunchFlags}, {application: this.FSRef.ptr}, {asyncLaunchRefCon: ctypes.void_t.ptr}, {environment: this.CFDictionaryRef}, {argv: this.CFArrayRef}, {initialEvent: this.AppleEvent.ptr}]);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Headers/LSQuarantine.h
function LSQuarantine_h(lib) {

    if (this._LSQUARANTINE_H)
        return;
    this._LSQUARANTINE_H = true;

}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/AE.jsm");

const EXPORTED_SYMBOLS = ["LaunchServices", "UTType_h", "LSSharedFileList_h", "LSInfo_h", "UTCoreTypes_h", "IconsCore_h", "LSOpen_h", "LSQuarantine_h"];

function LaunchServices() {
    let libpath = "/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/LaunchServices";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    UTType_h.call(this, lib);
    LSSharedFileList_h.call(this, lib);
    LSInfo_h.call(this, lib);
    UTCoreTypes_h.call(this, lib);
    IconsCore_h.call(this, lib);
    LSOpen_h.call(this, lib);
    LSQuarantine_h.call(this, lib);
}
