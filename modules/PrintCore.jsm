// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/PrintCore.framework/Headers/PMCore.h
function PMCore_h(lib) {

    if (this._PMCORE_H)
        return;
    this._PMCORE_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/PrintCore.framework/Headers/PMDefinitions.h
function PMDefinitions_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._PMDEFINITIONS_H)
        return;
    this._PMDEFINITIONS_H = true;

    this.PMObject = ctypes.void_t.ptr;
    this.OpaquePMPrintSettings = new ctypes.StructType("OpaquePMPrintSettings");
    this.PMPrintSettings = this.OpaquePMPrintSettings.ptr;
    this.OpaquePMPageFormat = new ctypes.StructType("OpaquePMPageFormat");
    this.PMPageFormat = this.OpaquePMPageFormat.ptr;
    this.OpaquePMPrintSession = new ctypes.StructType("OpaquePMPrintSession");
    this.PMPrintSession = this.OpaquePMPrintSession.ptr;
    this.OpaquePMPrinter = new ctypes.StructType("OpaquePMPrinter");
    this.PMPrinter = this.OpaquePMPrinter.ptr;
    this.OpaquePMServer = new ctypes.StructType("OpaquePMServer");
    this.PMServer = this.OpaquePMServer.ptr;
    this.OpaquePMPreset = new ctypes.StructType("OpaquePMPreset");
    this.PMPreset = this.OpaquePMPreset.ptr;
    this.OpaquePMPaper = new ctypes.StructType("OpaquePMPaper");
    this.PMPaper = this.OpaquePMPaper.ptr;
    this.kPMCancel = 128;
    this.PMDestinationType = this.UInt16;
    this.kPMDestinationInvalid = 0;
    this.kPMDestinationPrinter = 1;
    this.kPMDestinationFile = 2;
    this.kPMDestinationFax = 3;
    this.kPMDestinationPreview = 4;
    this.kPMDestinationProcessPDF = 5;
    this.PMOrientation = this.UInt16;
    this.kPMPortrait = 1;
    this.kPMLandscape = 2;
    this.kPMReversePortrait = 3;
    this.kPMReverseLandscape = 4;
    this.PMPrinterState = this.UInt16;
    this.kPMPrinterIdle = 3;
    this.kPMPrinterProcessing = 4;
    this.kPMPrinterStopped = 5;
    this.PMColorSpaceModel = this.UInt32;
    this.kPMUnknownColorSpaceModel = 0;
    this.kPMGrayColorSpaceModel = 1;
    this.kPMRGBColorSpaceModel = 2;
    this.kPMCMYKColorSpaceModel = 3;
    this.kPMDevNColorSpaceModel = 4;
    this.PMQualityMode = this.UInt32;
    this.kPMQualityLowest = 0;
    this.kPMQualityInkSaver = 1;
    this.kPMQualityDraft = 4;
    this.kPMQualityNormal = 8;
    this.kPMQualityPhoto = 11;
    this.kPMQualityBest = 13;
    this.kPMQualityHighest = 15;
    this.PMPaperType = this.UInt32;
    this.kPMPaperTypeUnknown = 0;
    this.kPMPaperTypePlain = 1;
    this.kPMPaperTypeCoated = 2;
    this.kPMPaperTypePremium = 3;
    this.kPMPaperTypeGlossy = 4;
    this.kPMPaperTypeTransparency = 5;
    this.kPMPaperTypeTShirt = 6;
    this.PMScalingAlignment = this.UInt16;
    this.kPMScalingPinTopLeft = 1;
    this.kPMScalingPinTopRight = 2;
    this.kPMScalingPinBottomLeft = 3;
    this.kPMScalingPinBottomRight = 4;
    this.kPMScalingCenterOnPaper = 5;
    this.kPMScalingCenterOnImgArea = 6;
    this.PMDuplexMode = this.UInt32;
    this.kPMDuplexNone = 1;
    this.kPMDuplexNoTumble = 2;
    this.kPMDuplexTumble = 3;
    this.kPMSimplexTumble = 4;
    this.PMLayoutDirection = this.UInt16;
    this.kPMLayoutLeftRightTopBottom = 1;
    this.kPMLayoutLeftRightBottomTop = 2;
    this.kPMLayoutRightLeftTopBottom = 3;
    this.kPMLayoutRightLeftBottomTop = 4;
    this.kPMLayoutTopBottomLeftRight = 5;
    this.kPMLayoutTopBottomRightLeft = 6;
    this.kPMLayoutBottomTopLeftRight = 7;
    this.kPMLayoutBottomTopRightLeft = 8;
    this.PMBorderType = this.UInt16;
    this.kPMBorderSingleHairline = 1;
    this.kPMBorderDoubleHairline = 2;
    this.kPMBorderSingleThickline = 3;
    this.kPMBorderDoubleThickline = 4;
    this.PMPrintDialogOptionFlags = this.OptionBits;
    this.kPMHideInlineItems = 0;
    this.kPMShowDefaultInlineItems = 32768;
    this.kPMShowInlineCopies = 1;
    this.kPMShowInlinePageRange = 2;
    this.kPMShowInlinePageRangeWithSelection = 64;
    this.kPMShowInlinePaperSize = 4;
    this.kPMShowInlineOrientation = 8;
    this.kPMShowInlineScale = 128;
    this.kPMShowPageAttributesPDE = 256;
    this.PMPPDDomain = this.UInt16;
    this.kAllPPDDomains = 1;
    this.kSystemPPDDomain = 2;
    this.kLocalPPDDomain = 3;
    this.kNetworkPPDDomain = 4;
    this.kUserPPDDomain = 5;
    this.kCUPSPPDDomain = 6;
    this.kPMNoError = 0;
    this.kPMGeneralError = -30870;
    this.kPMOutOfScope = -30871;
    this.kPMInvalidParameter = -50;
    this.kPMNoDefaultPrinter = -30872;
    this.kPMNotImplemented = -30873;
    this.kPMNoSuchEntry = -30874;
    this.kPMInvalidPrintSettings = -30875;
    this.kPMInvalidPageFormat = -30876;
    this.kPMValueOutOfRange = -30877;
    this.kPMLockIgnored = -30878;
    this.kPMInvalidPrintSession = -30879;
    this.kPMInvalidPrinter = -30880;
    this.kPMObjectInUse = -30881;
    this.kPMInvalidPreset = -30899;
    this.kPMPrintAllPages = -1;
    this.kPMUnlocked = 0;
    this.PMRect = new ctypes.StructType("PMRect", [{top: ctypes.double}, {left: ctypes.double}, {bottom: ctypes.double}, {right: ctypes.double}]);
    this.PMResolution = new ctypes.StructType("PMResolution", [{hRes: ctypes.double}, {vRes: ctypes.double}]);
    this.PMLanguageInfo = new ctypes.StructType("PMLanguageInfo", [{level: this.Str32}, {version: this.Str32}, {release: this.Str32}]);
    this.PMPaperMargins = this.PMRect;
    this.kPMDataFormatXMLDefault = 0;
    this.kPMDataFormatXMLMinimal = 1;
    this.kPMDataFormatXMLCompressed = 2;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/PrintCore.framework/Headers/PMCoreDeprecated.h
function PMCoreDeprecated_h(lib) {

    if (this._PMCOREDEPRECATED_H)
        return;
    this._PMCOREDEPRECATED_H = true;

    this.PMIdleProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, []).ptr;
    this.PMIdleUPP = this.PMIdleProcPtr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/PrintCore.framework/Headers/PMDefinitionsDeprecated.h
function PMDefinitionsDeprecated_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._PMDEFINITIONSDEPRECATED_H)
        return;
    this._PMDEFINITIONSDEPRECATED_H = true;

    this.OpaquePMPrintContext = new ctypes.StructType("OpaquePMPrintContext");
    this.PMPrintContext = this.OpaquePMPrintContext.ptr;
    this.OpaquePMDialog = new ctypes.StructType("OpaquePMDialog");
    this.PMDialog = this.OpaquePMDialog.ptr;
    this.kSizeOfTPrint = 120;
    this.kPMLocked = 1;
    this.PMColorMode = this.UInt16;
    this.kPMBlackAndWhite = 1;
    this.kPMGray = 2;
    this.kPMColor = 3;
    this.kPMColorModeDuotone = 4;
    this.kPMColorModeSpecialColor = 5;
    this.PMColorSyncIntent = this.UInt32;
    this.kPMColorIntentUndefined = 0;
    this.kPMColorIntentAutomatic = 1;
    this.kPMColorIntentPhoto = 2;
    this.kPMColorIntentBusiness = 4;
    this.kPMColorIntentRelColor = 8;
    this.kPMColorIntentAbsColor = 16;
    this.kPMColorIntentUnused = 65504;
    this.PMDuplexBinding = this.UInt16;
    this.kPMDuplexBindingLeftRight = 1;
    this.kPMDuplexBindingTopDown = 2;
    this.PMTag = this.UInt32;
    this.kPMCurrentValue = 1668641394;
    this.kPMDefaultValue = 1684434036;
    this.kPMMinimumValue = 1835626102;
    this.kPMMaximumValue = 1835104374;
    this.kPMSourceProfile = 1936876400;
    this.kPMMinRange = 1835954791;
    this.kPMMaxRange = 1836610151;
    this.kPMMinSquareResolution = 1835626099;
    this.kPMMaxSquareResolution = 1835104371;
    this.kPMDefaultResolution = 1684436082;
    this.kPSPageInjectAllPages = -1;
    this.kPSInjectionMaxDictSize = 5;
    this.PSInjectionPlacement = this.UInt16;
    this.kPSInjectionBeforeSubsection = 1;
    this.kPSInjectionAfterSubsection = 2;
    this.kPSInjectionReplaceSubsection = 3;
    this.PSInjectionSection = this.SInt32;
    this.kInjectionSectJob = 1;
    this.kInjectionSectCoverPage = 2;
    this.PSInjectionSubsection = this.SInt32;
    this.kInjectionSubPSAdobe = 1;
    this.kInjectionSubPSAdobeEPS = 2;
    this.kInjectionSubBoundingBox = 3;
    this.kInjectionSubEndComments = 4;
    this.kInjectionSubOrientation = 5;
    this.kInjectionSubPages = 6;
    this.kInjectionSubPageOrder = 7;
    this.kInjectionSubBeginProlog = 8;
    this.kInjectionSubEndProlog = 9;
    this.kInjectionSubBeginSetup = 10;
    this.kInjectionSubEndSetup = 11;
    this.kInjectionSubBeginDefaults = 12;
    this.kInjectionSubEndDefaults = 13;
    this.kInjectionSubDocFonts = 14;
    this.kInjectionSubDocNeededFonts = 15;
    this.kInjectionSubDocSuppliedFonts = 16;
    this.kInjectionSubDocNeededRes = 17;
    this.kInjectionSubDocSuppliedRes = 18;
    this.kInjectionSubDocCustomColors = 19;
    this.kInjectionSubDocProcessColors = 20;
    this.kInjectionSubPlateColor = 21;
    this.kInjectionSubPageTrailer = 22;
    this.kInjectionSubTrailer = 23;
    this.kInjectionSubEOF = 24;
    this.kInjectionSubBeginFont = 25;
    this.kInjectionSubEndFont = 26;
    this.kInjectionSubBeginResource = 27;
    this.kInjectionSubEndResource = 28;
    this.kInjectionSubPage = 29;
    this.kInjectionSubBeginPageSetup = 30;
    this.kInjectionSubEndPageSetup = 31;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/PrintCore.framework/Headers/PMPrintSettingsKeys.h
function PMPrintSettingsKeys_h(lib) {

    if (this._PMPRINTSETTINGSKEYS_H)
        return;
    this._PMPRINTSETTINGSKEYS_H = true;

    this.kPMCoverPageNone = 1;
    this.kPMCoverPageBefore = 2;
    this.kPMCoverPageAfter = 3;
    this.kPMPageToPaperMappingNone = 1;
    this.kPMPageToPaperMappingScaleToFit = 2;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/PrintCore.framework/Headers/PMErrors.h
function PMErrors_h(lib) {

    if (this._PMERRORS_H)
        return;
    this._PMERRORS_H = true;

    this.kPMAllocationFailure = -108;
    this.kPMInternalError = -30870;
    this.kPMInvalidIndex = -30882;
    this.kPMStringConversionFailure = -30883;
    this.kPMXMLParseError = -30884;
    this.kPMInvalidJobTemplate = -30885;
    this.kPMInvalidPrinterInfo = -30886;
    this.kPMInvalidConnection = -30887;
    this.kPMInvalidKey = -30888;
    this.kPMInvalidValue = -30889;
    this.kPMInvalidAllocator = -30890;
    this.kPMInvalidTicket = -30891;
    this.kPMInvalidItem = -30892;
    this.kPMInvalidType = -30893;
    this.kPMInvalidReply = -30894;
    this.kPMInvalidFileType = -30895;
    this.kPMInvalidObject = -30896;
    this.kPMInvalidPaper = -30897;
    this.kPMInvalidCalibrationTarget = -30898;
    this.kPMNoDefaultItem = -9500;
    this.kPMNoDefaultSettings = -9501;
    this.kPMInvalidPDEContext = -9530;
    this.kPMDontSwitchPDEError = -9531;
    this.kPMUnableToFindProcess = -9532;
    this.kPMFeatureNotInstalled = -9533;
    this.kPMInvalidPBMRef = -9540;
    this.kPMNoSelectedPrinters = -9541;
    this.kPMInvalidLookupSpec = -9542;
    this.kPMSyncRequestFailed = -9543;
    this.kPMEditRequestFailed = -9544;
    this.kPMPrBrowserNoUI = -9545;
    this.kPMTicketTypeNotFound = -9580;
    this.kPMUpdateTicketFailed = -9581;
    this.kPMValidateTicketFailed = -9582;
    this.kPMSubTicketNotFound = -9583;
    this.kPMInvalidSubTicket = -9584;
    this.kPMDeleteSubTicketFailed = -9585;
    this.kPMItemIsLocked = -9586;
    this.kPMTicketIsLocked = -9587;
    this.kPMTemplateIsLocked = -9588;
    this.kPMKeyNotFound = -9589;
    this.kPMKeyNotUnique = -9590;
    this.kPMUnknownDataType = -9591;
    this.kPMCreateMessageFailed = -9620;
    this.kPMServerCommunicationFailed = -9621;
    this.kPMKeyOrValueNotFound = -9623;
    this.kPMMessagingError = -9624;
    this.kPMServerNotFound = -9630;
    this.kPMServerAlreadyRunning = -9631;
    this.kPMServerSuspended = -9632;
    this.kPMServerAttributeRestricted = -9633;
    this.kPMFileOrDirOperationFailed = -9634;
    this.kPMUserOrGroupNotFound = -9635;
    this.kPMPermissionError = -9636;
    this.kPMUnknownMessage = -9637;
    this.kPMQueueNotFound = -9638;
    this.kPMQueueAlreadyExists = -9639;
    this.kPMQueueJobFailed = -9640;
    this.kPMJobNotFound = -9641;
    this.kPMJobBusy = -9642;
    this.kPMJobCanceled = -9643;
    this.kPMDocumentNotFound = -9644;
    this.kPMPMSymbolNotFound = -9660;
    this.kPMIOMSymbolNotFound = -9661;
    this.kPMCVMSymbolNotFound = -9662;
    this.kPMInvalidPMContext = -9663;
    this.kPMInvalidIOMContext = -9664;
    this.kPMInvalidCVMContext = -9665;
    this.kPMInvalidJobID = -9666;
    this.kPMNoPrinterJobID = -9667;
    this.kPMJobStreamOpenFailed = -9668;
    this.kPMJobStreamReadFailed = -9669;
    this.kPMJobStreamEndError = -9670;
    this.kPMJobManagerAborted = -9671;
    this.kPMJobGetTicketBadFormatError = -9672;
    this.kPMJobGetTicketReadError = -9673;
    this.kPMPluginNotFound = -9701;
    this.kPMPluginRegisterationFailed = -9702;
    this.kPMFontNotFound = -9703;
    this.kPMFontNameTooLong = -9704;
    this.kPMGeneralCGError = -9705;
    this.kPMInvalidState = -9706;
    this.kPMUnexpectedImagingError = -9707;
    this.kPMInvalidPrinterAddress = -9780;
    this.kPMOpenFailed = -9781;
    this.kPMReadFailed = -9782;
    this.kPMWriteFailed = -9783;
    this.kPMStatusFailed = -9784;
    this.kPMCloseFailed = -9785;
    this.kPMUnsupportedConnection = -9786;
    this.kPMIOAttrNotAvailable = -9787;
    this.kPMReadGotZeroData = -9788;
    this.kPMLastErrorCodeToMakeMaintenanceOfThisListEasier = -9799;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["PrintCore", "PMCore_h", "PMDefinitions_h", "PMCoreDeprecated_h", "PMDefinitionsDeprecated_h", "PMPrintSettingsKeys_h", "PMErrors_h"];

function PrintCore() {
    let libpath = "/System/Library/Frameworks/PrintCore.framework/PrintCore";
    let lib = ctypes.open(libpath);

    PMCore_h.call(this, lib);
    PMDefinitions_h.call(this, lib);
    PMCoreDeprecated_h.call(this, lib);
    PMDefinitionsDeprecated_h.call(this, lib);
    PMPrintSettingsKeys_h.call(this, lib);
    PMErrors_h.call(this, lib);
}
