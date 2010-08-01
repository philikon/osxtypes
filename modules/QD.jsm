// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/ATSUnicodeGlyphs.h
function ATSUnicodeGlyphs_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._ATSUNICODEGLYPHS_H)
        return;
    this._ATSUNICODEGLYPHS_H = true;

    this.ATSQuadraticNewPathProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.void_t.ptr]).ptr;
    this.ATSQuadraticNewPathUPP = this.ATSQuadraticNewPathProcPtr;
    // Dropping inline function 'NewATSQuadraticNewPathUPP'.
    // Dropping inline function 'DisposeATSQuadraticNewPathUPP'.
    // Dropping inline function 'InvokeATSQuadraticNewPathUPP'.
    this.ATSQuadraticLineProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.Float32Point.ptr, this.Float32Point.ptr, ctypes.void_t.ptr]).ptr;
    this.ATSQuadraticLineUPP = this.ATSQuadraticLineProcPtr;
    // Dropping inline function 'NewATSQuadraticLineUPP'.
    // Dropping inline function 'DisposeATSQuadraticLineUPP'.
    // Dropping inline function 'InvokeATSQuadraticLineUPP'.
    this.ATSQuadraticCurveProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.Float32Point.ptr, this.Float32Point.ptr, this.Float32Point.ptr, ctypes.void_t.ptr]).ptr;
    this.ATSQuadraticCurveUPP = this.ATSQuadraticCurveProcPtr;
    // Dropping inline function 'NewATSQuadraticCurveUPP'.
    // Dropping inline function 'DisposeATSQuadraticCurveUPP'.
    // Dropping inline function 'InvokeATSQuadraticCurveUPP'.
    this.ATSQuadraticClosePathProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.void_t.ptr]).ptr;
    this.ATSQuadraticClosePathUPP = this.ATSQuadraticClosePathProcPtr;
    // Dropping inline function 'NewATSQuadraticClosePathUPP'.
    // Dropping inline function 'DisposeATSQuadraticClosePathUPP'.
    // Dropping inline function 'InvokeATSQuadraticClosePathUPP'.
    this.ATSCubicMoveToProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.Float32Point.ptr, ctypes.void_t.ptr]).ptr;
    this.ATSCubicMoveToUPP = this.ATSCubicMoveToProcPtr;
    // Dropping inline function 'NewATSCubicMoveToUPP'.
    // Dropping inline function 'DisposeATSCubicMoveToUPP'.
    // Dropping inline function 'InvokeATSCubicMoveToUPP'.
    this.ATSCubicLineToProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.Float32Point.ptr, ctypes.void_t.ptr]).ptr;
    this.ATSCubicLineToUPP = this.ATSCubicLineToProcPtr;
    // Dropping inline function 'NewATSCubicLineToUPP'.
    // Dropping inline function 'DisposeATSCubicLineToUPP'.
    // Dropping inline function 'InvokeATSCubicLineToUPP'.
    this.ATSCubicCurveToProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.Float32Point.ptr, this.Float32Point.ptr, this.Float32Point.ptr, ctypes.void_t.ptr]).ptr;
    this.ATSCubicCurveToUPP = this.ATSCubicCurveToProcPtr;
    // Dropping inline function 'NewATSCubicCurveToUPP'.
    // Dropping inline function 'DisposeATSCubicCurveToUPP'.
    // Dropping inline function 'InvokeATSCubicCurveToUPP'.
    this.ATSCubicClosePathProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.void_t.ptr]).ptr;
    this.ATSCubicClosePathUPP = this.ATSCubicClosePathProcPtr;
    // Dropping inline function 'NewATSCubicClosePathUPP'.
    // Dropping inline function 'DisposeATSCubicClosePathUPP'.
    // Dropping inline function 'InvokeATSCubicClosePathUPP'.
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/QuickdrawAPI.h
function QuickdrawAPI_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._QUICKDRAWAPI_H)
        return;
    this._QUICKDRAWAPI_H = true;

    this.kQDRegionToRectsMsgInit = 1;
    this.kQDRegionToRectsMsgParse = 2;
    this.kQDRegionToRectsMsgTerminate = 3;
    this.kQDParseRegionFromTop = 1;
    this.kQDParseRegionFromBottom = 2;
    this.kQDParseRegionFromLeft = 4;
    this.kQDParseRegionFromRight = 8;
    this.kQDParseRegionFromTopLeft = 5;
    this.kQDParseRegionFromBottomRight = 10;
    this.QDRegionParseDirection = this.SInt32;
    this.RegionToRectsProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.UInt16, this.RgnHandle, this.Rect.ptr, ctypes.void_t.ptr]).ptr;
    this.RegionToRectsUPP = this.RegionToRectsProcPtr;
    // Dropping inline function 'NewRegionToRectsUPP'.
    // Dropping inline function 'DisposeRegionToRectsUPP'.
    // Dropping inline function 'InvokeRegionToRectsUPP'.
    this.colorXorXFer = 52;
    this.noiseXFer = 53;
    this.customXFer = 54;
    this.kXFer1PixelAtATime = 1;
    this.kXFerConvertPixelToRGB32 = 2;
    this.CustomXFerRec = new ctypes.StructType("CustomXFerRec", [{version: this.UInt32}, {srcPixels: ctypes.void_t.ptr}, {destPixels: ctypes.void_t.ptr}, {resultPixels: ctypes.void_t.ptr}, {refCon: this.UInt32}, {pixelSize: this.UInt32}, {pixelCount: this.UInt32}, {firstPixelHV: this.Point}, {destBounds: this.Rect}]);
    this.CustomXFerRecPtr = this.CustomXFerRec.ptr;
    this.CustomXFerProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CustomXFerRecPtr]).ptr;
    this.kCursorComponentsVersion = 65537;
    this.kCursorComponentType = 1668641395;
    this.cursorDoesAnimate = 1;
    this.cursorDoesHardware = 2;
    this.cursorDoesUnreadableScreenBits = 4;
    this.kRenderCursorInHardware = 1;
    this.kRenderCursorInSoftware = 2;
    this.CursorInfo = new ctypes.StructType("CursorInfo", [{version: ctypes.long}, {capabilities: ctypes.long}, {animateDuration: ctypes.long}, {bounds: this.Rect}, {hotspot: this.Point}, {reserved: ctypes.long}]);
    this.kCursorComponentInit = 1;
    this.kCursorComponentGetInfo = 2;
    this.kCursorComponentSetOutputMode = 3;
    this.kCursorComponentSetData = 4;
    this.kCursorComponentReconfigure = 5;
    this.kCursorComponentDraw = 6;
    this.kCursorComponentErase = 7;
    this.kCursorComponentMove = 8;
    this.kCursorComponentAnimate = 9;
    this.kCursorComponentLastReserved = 80;
    this.OpaqueQDRegionBitsRef = new ctypes.StructType("OpaqueQDRegionBitsRef");
    this.QDRegionBitsRef = this.OpaqueQDRegionBitsRef.ptr;
    this.kQDXArrowCursor = 0;
    this.kQDXIBeamCursor = 1;
    this.kQDXIBeamXORCursor = 2;
    this.kQDXAliasCursor = 3;
    this.kQDXCopyCursor = 4;
    this.kQDXMoveCursor = 5;
    this.kQDXNumberOfSystemCursors = 6;
    this.QDXSystemCursorID = this.UInt32;
    this.kQDUseDefaultTextRendering = 0;
    this.kQDUseTrueTypeScalerGlyphs = 1;
    this.kQDUseCGTextRendering = 2;
    this.kQDUseCGTextMetrics = 4;
    this.kQDSupportedFlags = 7;
    this.kQDDontChangeFlags = -1;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/Displays.h
function Displays_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    Video_h.call(this, lib);
    AEDataModel_h.call(this, lib);
    Components_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._DISPLAYS_H)
        return;
    this._DISPLAYS_H = true;

    this.DMProcessInfoPtr = ctypes.void_t.ptr;
    this.DMModalFilterUPP = ctypes.void_t.ptr;
    this.kAESystemConfigNotice = 1668179559;
    this.kAEDisplayNotice = 1685287020;
    this.kAEDisplaySummary = 1685288301;
    this.keyDMConfigVersion = 1684890486;
    this.keyDMConfigFlags = 1684890470;
    this.keyDMConfigReserved = 1684890482;
    this.keyDisplayID = 1684892004;
    this.keyDisplayComponent = 1684890723;
    this.keyDisplayDevice = 1684890724;
    this.keyDisplayFlags = 1684890726;
    this.keyDisplayMode = 1684890733;
    this.keyDisplayModeReserved = 1684893042;
    this.keyDisplayReserved = 1684890738;
    this.keyDisplayMirroredId = 1684893033;
    this.keyDeviceFlags = 1684300902;
    this.keyDeviceDepthMode = 1684300909;
    this.keyDeviceRect = 1684300914;
    this.keyPixMapRect = 1685087346;
    this.keyPixMapHResolution = 1685088370;
    this.keyPixMapVResolution = 1685091954;
    this.keyPixMapPixelType = 1685090420;
    this.keyPixMapPixelSize = 1685090419;
    this.keyPixMapCmpCount = 1685087075;
    this.keyPixMapCmpSize = 1685087091;
    this.keyPixMapAlignment = 1685090401;
    this.keyPixMapResReserved = 1685090930;
    this.keyPixMapReserved = 1685090418;
    this.keyPixMapColorTableSeed = 1685087092;
    this.keySummaryMenubar = 1685286242;
    this.keySummaryChanges = 1685283688;
    this.keyDisplayOldConfig = 1685023844;
    this.keyDisplayNewConfig = 1684956535;
    this.dmOnlyActiveDisplays = 1;
    this.dmAllDisplays = 0;
    this.kDependentNotifyClassShowCursor = 1936221042;
    this.kDependentNotifyClassDriverOverride = 1852076662;
    this.kDependentNotifyClassDisplayMgrOverride = 1684891506;
    this.kDependentNotifyClassProfileChanged = 1886547814;
    this.kNoSwitchConfirmBit = 0;
    this.kDepthNotAvailableBit = 1;
    this.kShowModeBit = 3;
    this.kModeNotResizeBit = 4;
    this.kNeverShowModeBit = 5;
    this.kBeginEndConfigureBit = 0;
    this.kMovedDisplayBit = 1;
    this.kSetMainDisplayBit = 2;
    this.kSetDisplayModeBit = 3;
    this.kAddDisplayBit = 4;
    this.kRemoveDisplayBit = 5;
    this.kNewDisplayBit = 6;
    this.kDisposeDisplayBit = 7;
    this.kEnabledDisplayBit = 8;
    this.kDisabledDisplayBit = 9;
    this.kMirrorDisplayBit = 10;
    this.kUnMirrorDisplayBit = 11;
    this.kDMNotifyRequestConnectionProbe = 0;
    this.kDMNotifyInstalled = 1;
    this.kDMNotifyEvent = 2;
    this.kDMNotifyRemoved = 3;
    this.kDMNotifyPrep = 4;
    this.kDMNotifyExtendEvent = 5;
    this.kDMNotifyDependents = 6;
    this.kDMNotifySuspendConfigure = 7;
    this.kDMNotifyResumeConfigure = 8;
    this.kDMNotifyRequestDisplayProbe = 9;
    this.kDMNotifyDisplayWillSleep = 10;
    this.kDMNotifyDisplayDidWake = 11;
    this.kExtendedNotificationProc = 65536;
    this.kFullNotify = 0;
    this.kFullDependencyNotify = 1;
    this.kDummyDeviceID = 255;
    this.kInvalidDisplayID = 0;
    this.kFirstDisplayID = 256;
    this.kAllowDuplicatesBit = 0;
    this.kSuppressNumberBit = 0;
    this.kSuppressNumberMask = 1;
    this.kForceNumberBit = 1;
    this.kForceNumberMask = 2;
    this.kSuppressNameBit = 2;
    this.kSuppressNameMask = 4;
    this.kDMSupressNumbersMask = 1;
    this.kDMForceNumbersMask = 2;
    this.kDMSupressNameMask = 4;
    this.kNoFidelity = 0;
    this.kMinimumFidelity = 1;
    this.kDefaultFidelity = 500;
    this.kDefaultManufacturerFidelity = 1000;
    this.kAnyPanelType = 0;
    this.kAnyEngineType = 0;
    this.kAnyDeviceType = 0;
    this.kAnyPortType = 0;
    this.kPLIncludeOfflineDevicesBit = 0;
    this.kForceConfirmBit = 0;
    this.kForceConfirmMask = 1;
    this.kDisplayModeListNotPreferredBit = 0;
    this.kDisplayModeListNotPreferredMask = 1;
    this.kComponentListNotPreferredBit = 0;
    this.kComponentListNotPreferredMask = 1;
    this.kDisplayTimingInfoVersionZero = 1;
    this.kDisplayTimingInfoReservedCountVersionZero = 16;
    this.kDisplayModeEntryVersionZero = 0;
    this.kDisplayModeEntryVersionOne = 1;
    this.kMakeAndModelReservedCount = 4;
    this.kDisplayGestaltDisplayCommunicationAttr = 1668246893;
    this.kDisplayGestaltForbidI2CMask = 1;
    this.kDisplayGestaltUseI2CPowerMask = 2;
    this.kDisplayGestaltCalibratorAttr = 1667329129;
    this.kDisplayGestaltBrightnessAffectsGammaMask = 1;
    this.kDisplayGestaltViewAngleAffectsGammaMask = 2;
    this.DMFidelityType = this.UInt32;
    this.DMListType = ctypes.void_t.ptr;
    this.DMListIndexType = this.UInt32;
    this.AVPowerStateRec = this.VDPowerStateRec;
    this.AVPowerStatePtr = this.VDPowerStateRec.ptr;
    this.DMDisplayTimingInfoRec = new ctypes.StructType("DMDisplayTimingInfoRec", [{timingInfoVersion: this.UInt32}, {timingInfoAttributes: this.UInt32}, {timingInfoRelativeQuality: this.SInt32}, {timingInfoRelativeDefault: this.SInt32}, {timingInfoReserved: this.UInt32.array(16)}]);
    this.DMDisplayTimingInfoPtr = this.DMDisplayTimingInfoRec.ptr;
    this.DMComponentListEntryRec = new ctypes.StructType("DMComponentListEntryRec", [{itemID: this.DisplayIDType}, {itemComponent: this.Component}, {itemDescription: this.ComponentDescription}, {itemClass: this.ResType}, {itemFidelity: this.DMFidelityType}, {itemSubClass: this.ResType}, {itemSort: this.Point}, {itemFlags: this.UInt32}, {itemReserved: this.ResType}, {itemFuture1: this.UInt32}, {itemFuture2: this.UInt32}, {itemFuture3: this.UInt32}, {itemFuture4: this.UInt32}]);
    this.DMComponentListEntryPtr = this.DMComponentListEntryRec.ptr;
    this.AVLocationRec = new ctypes.StructType("AVLocationRec", [{locationConstant: this.UInt32}]);
    this.AVLocationPtr = this.AVLocationRec.ptr;
    this.DMDepthInfoRec = new ctypes.StructType("DMDepthInfoRec", [{depthSwitchInfo: this.VDSwitchInfoPtr}, {depthVPBlock: this.VPBlockPtr}, {depthFlags: this.UInt32}, {depthReserved1: this.UInt32}, {depthReserved2: this.UInt32}]);
    this.DMDepthInfoPtr = this.DMDepthInfoRec.ptr;
    this.DMDepthInfoBlockRec = new ctypes.StructType("DMDepthInfoBlockRec", [{depthBlockCount: this.UInt32}, {depthVPBlock: this.DMDepthInfoPtr}, {depthBlockFlags: this.UInt32}, {depthBlockReserved1: this.UInt32}, {depthBlockReserved2: this.UInt32}]);
    this.DMDepthInfoBlockPtr = this.DMDepthInfoBlockRec.ptr;
    this.DMDisplayModeListEntryRec = new ctypes.StructType("DMDisplayModeListEntryRec", [{displayModeFlags: this.UInt32}, {displayModeSwitchInfo: this.VDSwitchInfoPtr}, {displayModeResolutionInfo: this.VDResolutionInfoPtr}, {displayModeTimingInfo: this.VDTimingInfoPtr}, {displayModeDepthBlockInfo: this.DMDepthInfoBlockPtr}, {displayModeVersion: this.UInt32}, {displayModeName: this.StringPtr}, {displayModeDisplayInfo: this.DMDisplayTimingInfoPtr}]);
    this.DMDisplayModeListEntryPtr = this.DMDisplayModeListEntryRec.ptr;
    this.DependentNotifyRec = new ctypes.StructType("DependentNotifyRec", [{notifyType: this.ResType}, {notifyClass: this.ResType}, {notifyPortID: this.DisplayIDType}, {notifyComponent: this.ComponentInstance}, {notifyVersion: this.UInt32}, {notifyFlags: this.UInt32}, {notifyReserved: this.UInt32}, {notifyFuture: this.UInt32}]);
    this.DependentNotifyPtr = this.DependentNotifyRec.ptr;
    this.DMMakeAndModelRec = new ctypes.StructType("DMMakeAndModelRec", [{manufacturer: this.ResType}, {model: this.UInt32}, {serialNumber: this.UInt32}, {manufactureDate: this.UInt32}, {makeReserved: this.UInt32.array(4)}]);
    this.DMMakeAndModelPtr = this.DMMakeAndModelRec.ptr;
    this.kIncludeOnlineActiveDisplaysMask = 1;
    this.kIncludeOnlineDisabledDisplaysMask = 2;
    this.kIncludeOfflineDisplaysMask = 4;
    this.kIncludeOfflineDummyDisplaysMask = 8;
    this.kIncludeHardwareMirroredDisplaysMask = 16;
    this.kDMModeListIncludeAllModesMask = 1;
    this.kDMModeListIncludeOfflineModesMask = 2;
    this.kDMModeListExcludeDriverModesMask = 4;
    this.kDMModeListExcludeDisplayModesMask = 8;
    this.kDMModeListExcludeCustomModesMask = 16;
    this.kDMModeListPreferStretchedModesMask = 32;
    this.kDMModeListPreferSafeModesMask = 64;
    this.DisplayListEntryRec = new ctypes.StructType("DisplayListEntryRec", [{displayListEntryGDevice: this.GDHandle}, {displayListEntryDisplayID: this.DisplayIDType}, {displayListEntryIncludeFlags: this.UInt32}, {displayListEntryReserved1: this.UInt32}, {displayListEntryReserved2: this.UInt32}, {displayListEntryReserved3: this.UInt32}, {displayListEntryReserved4: this.UInt32}, {displayListEntryReserved5: this.UInt32}]);
    this.DisplayListEntryPtr = this.DisplayListEntryRec.ptr;
    this.DMProfileListEntryRec = new ctypes.StructType("DMProfileListEntryRec", [{profileRef: ctypes.void_t.ptr}, {profileReserved1: this.Ptr}, {profileReserved2: this.Ptr}, {profileReserved3: this.Ptr}]);
    this.DMProfileListEntryPtr = this.DMProfileListEntryRec.ptr;
    this.DMNotificationProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.AppleEvent.ptr]).ptr;
    this.DMExtendedNotificationProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.short, ctypes.void_t.ptr]).ptr;
    this.DMComponentListIteratorProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.DMListIndexType, this.DMComponentListEntryPtr]).ptr;
    this.DMDisplayModeListIteratorProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.DMListIndexType, this.DMDisplayModeListEntryPtr]).ptr;
    this.DMProfileListIteratorProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.DMListIndexType, this.DMProfileListEntryPtr]).ptr;
    this.DMDisplayListIteratorProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.DMListIndexType, this.DisplayListEntryPtr]).ptr;
    this.DMNotificationUPP = this.DMNotificationProcPtr;
    this.DMExtendedNotificationUPP = this.DMExtendedNotificationProcPtr;
    this.DMComponentListIteratorUPP = this.DMComponentListIteratorProcPtr;
    this.DMDisplayModeListIteratorUPP = this.DMDisplayModeListIteratorProcPtr;
    this.DMProfileListIteratorUPP = this.DMProfileListIteratorProcPtr;
    this.DMDisplayListIteratorUPP = this.DMDisplayListIteratorProcPtr;
    // Dropping inline function 'NewDMNotificationUPP'.
    // Dropping inline function 'NewDMExtendedNotificationUPP'.
    // Dropping inline function 'NewDMComponentListIteratorUPP'.
    // Dropping inline function 'NewDMDisplayModeListIteratorUPP'.
    // Dropping inline function 'NewDMProfileListIteratorUPP'.
    // Dropping inline function 'NewDMDisplayListIteratorUPP'.
    // Dropping inline function 'DisposeDMNotificationUPP'.
    // Dropping inline function 'DisposeDMExtendedNotificationUPP'.
    // Dropping inline function 'DisposeDMComponentListIteratorUPP'.
    // Dropping inline function 'DisposeDMDisplayModeListIteratorUPP'.
    // Dropping inline function 'DisposeDMProfileListIteratorUPP'.
    // Dropping inline function 'DisposeDMDisplayListIteratorUPP'.
    // Dropping inline function 'InvokeDMNotificationUPP'.
    // Dropping inline function 'InvokeDMExtendedNotificationUPP'.
    // Dropping inline function 'InvokeDMComponentListIteratorUPP'.
    // Dropping inline function 'InvokeDMDisplayModeListIteratorUPP'.
    // Dropping inline function 'InvokeDMProfileListIteratorUPP'.
    // Dropping inline function 'InvokeDMDisplayListIteratorUPP'.
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/QuickdrawTypes.h
function QuickdrawTypes_h(lib) {
    QuickdrawText_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._QUICKDRAWTYPES_H)
        return;
    this._QUICKDRAWTYPES_H = true;

    this.invalColReq = -1;
    this.srcCopy = 0;
    this.srcOr = 1;
    this.srcXor = 2;
    this.srcBic = 3;
    this.notSrcCopy = 4;
    this.notSrcOr = 5;
    this.notSrcXor = 6;
    this.notSrcBic = 7;
    this.patCopy = 8;
    this.patOr = 9;
    this.patXor = 10;
    this.patBic = 11;
    this.notPatCopy = 12;
    this.notPatOr = 13;
    this.notPatXor = 14;
    this.notPatBic = 15;
    this.grayishTextOr = 49;
    this.hilitetransfermode = 50;
    this.hilite = 50;
    this.blend = 32;
    this.addPin = 33;
    this.addOver = 34;
    this.subPin = 35;
    this.addMax = 37;
    this.adMax = 37;
    this.subOver = 38;
    this.adMin = 39;
    this.ditherCopy = 64;
    this.transparent = 36;
    this.italicBit = 1;
    this.ulineBit = 2;
    this.outlineBit = 3;
    this.shadowBit = 4;
    this.condenseBit = 5;
    this.extendBit = 6;
    this.normalBit = 0;
    this.inverseBit = 1;
    this.redBit = 4;
    this.greenBit = 3;
    this.blueBit = 2;
    this.cyanBit = 8;
    this.magentaBit = 7;
    this.yellowBit = 6;
    this.blackBit = 5;
    this.blackColor = 33;
    this.whiteColor = 30;
    this.redColor = 205;
    this.greenColor = 341;
    this.blueColor = 409;
    this.cyanColor = 273;
    this.magentaColor = 137;
    this.yellowColor = 69;
    this.picLParen = 0;
    this.picRParen = 1;
    this.clutType = 0;
    this.fixedType = 1;
    this.directType = 2;
    this.gdDevType = 0;
    this.interlacedDevice = 2;
    this.hwMirroredDevice = 4;
    this.roundedDevice = 5;
    this.hasAuxMenuBar = 6;
    this.burstDevice = 7;
    this.ext32Device = 8;
    this.ramInit = 10;
    this.mainScreen = 11;
    this.allInit = 12;
    this.screenDevice = 13;
    this.noDriver = 14;
    this.screenActive = 15;
    this.hiliteBit = 7;
    this.pHiliteBit = 0;
    this.defQDColors = 127;
    this.RGBDirect = 16;
    this.baseAddr32 = 4;
    this.sysPatListID = 0;
    this.iBeamCursor = 1;
    this.crossCursor = 2;
    this.plusCursor = 3;
    this.watchCursor = 4;
    this.kQDGrafVerbFrame = 0;
    this.kQDGrafVerbPaint = 1;
    this.kQDGrafVerbErase = 2;
    this.kQDGrafVerbInvert = 3;
    this.kQDGrafVerbFill = 4;
    this.GrafVerb = this.SInt8;
    this.chunky = 0;
    this.chunkyPlanar = 1;
    this.planar = 2;
    this.PixelType = this.SInt8;
    this.Bits16 = ctypes.short.array(16);
    this.Pattern = new ctypes.StructType("Pattern", [{pat: this.UInt8.array(8)}]);
    this.ConstPatternParam = this.Pattern.ptr;
    this.PatPtr = this.Pattern.ptr;
    this.PatHandle = this.PatPtr.ptr;
    this.QDByte = this.SignedByte;
    this.QDPtr = ctypes.signed_char.ptr;
    this.QDHandle = this.QDPtr.ptr;
    this.QDErr = ctypes.short;
    this.singleDevicesBit = 0;
    this.dontMatchSeedsBit = 1;
    this.allDevicesBit = 2;
    this.singleDevices = 1;
    this.dontMatchSeeds = 2;
    this.allDevices = 4;
    this.DeviceLoopFlags = ctypes.unsigned_long;
    this.PrinterStatusOpcode = this.SInt32;
    this.kPrinterFontStatus = 0;
    this.kPrinterScalingStatus = 1;
    this.PrinterFontStatus = new ctypes.StructType("PrinterFontStatus", [{oResult: this.SInt32}, {iFondID: this.SInt16}, {iStyle: this.Style}]);
    this.PrinterScalingStatus = new ctypes.StructType("PrinterScalingStatus", [{oScalingFactors: this.Point}]);
    this.BitMap = new ctypes.StructType("BitMap", [{baseAddr: this.Ptr}, {rowBytes: ctypes.short}, {bounds: this.Rect}]);
    this.BitMapPtr = this.BitMap.ptr;
    this.BitMapHandle = this.BitMapPtr.ptr;
    this.Cursor = new ctypes.StructType("Cursor", [{data: this.Bits16}, {mask: this.Bits16}, {hotSpot: this.Point}]);
    this.CursPtr = this.Cursor.ptr;
    this.CursHandle = this.CursPtr.ptr;
    this.PenState = new ctypes.StructType("PenState", [{pnLoc: this.Point}, {pnSize: this.Point}, {pnMode: ctypes.short}, {pnPat: this.Pattern}]);
    this.OpaqueRgnHandle = new ctypes.StructType("OpaqueRgnHandle");
    this.RgnHandle = this.OpaqueRgnHandle.ptr;
    this.Picture = new ctypes.StructType("Picture", [{picSize: ctypes.short}, {picFrame: this.Rect}]);
    this.PicPtr = this.Picture.ptr;
    this.PicHandle = this.PicPtr.ptr;
    this.MacPolygon = new ctypes.StructType("MacPolygon", [{polySize: ctypes.short}, {polyBBox: this.Rect}, {polyPoints: this.Point.array(1)}]);
    this.Polygon = this.MacPolygon;
    this.PolyPtr = this.MacPolygon.ptr;
    this.PolyHandle = this.PolyPtr.ptr;
    this.QDTextProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.short, ctypes.void_t.ptr, this.Point, this.Point]).ptr;
    this.QDLineProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Point]).ptr;
    this.QDRectProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.GrafVerb, this.Rect.ptr]).ptr;
    this.QDRRectProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.GrafVerb, this.Rect.ptr, ctypes.short, ctypes.short]).ptr;
    this.QDOvalProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.GrafVerb, this.Rect.ptr]).ptr;
    this.QDArcProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.GrafVerb, this.Rect.ptr, ctypes.short, ctypes.short]).ptr;
    this.QDPolyProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.GrafVerb, this.PolyHandle]).ptr;
    this.QDRgnProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.GrafVerb, this.RgnHandle]).ptr;
    this.QDBitsProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.BitMap.ptr, this.Rect.ptr, this.Rect.ptr, ctypes.short, this.RgnHandle]).ptr;
    this.QDCommentProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.short, ctypes.short, this.Handle]).ptr;
    this.QDTxMeasProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.short, [ctypes.short, ctypes.void_t.ptr, this.Point.ptr, this.Point.ptr, this.FontInfo.ptr]).ptr;
    this.QDGetPicProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.short]).ptr;
    this.QDPutPicProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.short]).ptr;
    this.QDOpcodeProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Rect.ptr, this.Rect.ptr, this.UInt16, this.SInt16]).ptr;
    this.QDStdGlyphsProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.void_t.ptr, this.ByteCount]).ptr;
    this.QDJShieldCursorProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.short, ctypes.short, ctypes.short, ctypes.short]).ptr;
    this.QDTextUPP = this.QDTextProcPtr;
    this.QDLineUPP = this.QDLineProcPtr;
    this.QDRectUPP = this.QDRectProcPtr;
    this.QDRRectUPP = this.QDRRectProcPtr;
    this.QDOvalUPP = this.QDOvalProcPtr;
    this.QDArcUPP = this.QDArcProcPtr;
    this.QDPolyUPP = this.QDPolyProcPtr;
    this.QDRgnUPP = this.QDRgnProcPtr;
    this.QDBitsUPP = this.QDBitsProcPtr;
    this.QDCommentUPP = this.QDCommentProcPtr;
    this.QDTxMeasUPP = this.QDTxMeasProcPtr;
    this.QDGetPicUPP = this.QDGetPicProcPtr;
    this.QDPutPicUPP = this.QDPutPicProcPtr;
    this.QDOpcodeUPP = this.QDOpcodeProcPtr;
    this.QDStdGlyphsUPP = this.QDStdGlyphsProcPtr;
    this.QDJShieldCursorUPP = this.QDJShieldCursorProcPtr;
    this.QDProcs = new ctypes.StructType("QDProcs", [{textProc: this.QDTextUPP}, {lineProc: this.QDLineUPP}, {rectProc: this.QDRectUPP}, {rRectProc: this.QDRRectUPP}, {ovalProc: this.QDOvalUPP}, {arcProc: this.QDArcUPP}, {polyProc: this.QDPolyUPP}, {rgnProc: this.QDRgnUPP}, {bitsProc: this.QDBitsUPP}, {commentProc: this.QDCommentUPP}, {txMeasProc: this.QDTxMeasUPP}, {getPicProc: this.QDGetPicUPP}, {putPicProc: this.QDPutPicUPP}]);
    this.QDProcsPtr = this.QDProcs.ptr;
    // Dropping inline function 'NewQDTextUPP'.
    // Dropping inline function 'NewQDLineUPP'.
    // Dropping inline function 'NewQDRectUPP'.
    // Dropping inline function 'NewQDRRectUPP'.
    // Dropping inline function 'NewQDOvalUPP'.
    // Dropping inline function 'NewQDArcUPP'.
    // Dropping inline function 'NewQDPolyUPP'.
    // Dropping inline function 'NewQDRgnUPP'.
    // Dropping inline function 'NewQDBitsUPP'.
    // Dropping inline function 'NewQDCommentUPP'.
    // Dropping inline function 'NewQDTxMeasUPP'.
    // Dropping inline function 'NewQDGetPicUPP'.
    // Dropping inline function 'NewQDPutPicUPP'.
    // Dropping inline function 'NewQDOpcodeUPP'.
    // Dropping inline function 'NewQDStdGlyphsUPP'.
    // Dropping inline function 'NewQDJShieldCursorUPP'.
    // Dropping inline function 'DisposeQDTextUPP'.
    // Dropping inline function 'DisposeQDLineUPP'.
    // Dropping inline function 'DisposeQDRectUPP'.
    // Dropping inline function 'DisposeQDRRectUPP'.
    // Dropping inline function 'DisposeQDOvalUPP'.
    // Dropping inline function 'DisposeQDArcUPP'.
    // Dropping inline function 'DisposeQDPolyUPP'.
    // Dropping inline function 'DisposeQDRgnUPP'.
    // Dropping inline function 'DisposeQDBitsUPP'.
    // Dropping inline function 'DisposeQDCommentUPP'.
    // Dropping inline function 'DisposeQDTxMeasUPP'.
    // Dropping inline function 'DisposeQDGetPicUPP'.
    // Dropping inline function 'DisposeQDPutPicUPP'.
    // Dropping inline function 'DisposeQDOpcodeUPP'.
    // Dropping inline function 'DisposeQDStdGlyphsUPP'.
    // Dropping inline function 'DisposeQDJShieldCursorUPP'.
    // Dropping inline function 'InvokeQDTextUPP'.
    // Dropping inline function 'InvokeQDLineUPP'.
    // Dropping inline function 'InvokeQDRectUPP'.
    // Dropping inline function 'InvokeQDRRectUPP'.
    // Dropping inline function 'InvokeQDOvalUPP'.
    // Dropping inline function 'InvokeQDArcUPP'.
    // Dropping inline function 'InvokeQDPolyUPP'.
    // Dropping inline function 'InvokeQDRgnUPP'.
    // Dropping inline function 'InvokeQDBitsUPP'.
    // Dropping inline function 'InvokeQDCommentUPP'.
    // Dropping inline function 'InvokeQDTxMeasUPP'.
    // Dropping inline function 'InvokeQDGetPicUPP'.
    // Dropping inline function 'InvokeQDPutPicUPP'.
    // Dropping inline function 'InvokeQDOpcodeUPP'.
    // Dropping inline function 'InvokeQDStdGlyphsUPP'.
    // Dropping inline function 'InvokeQDJShieldCursorUPP'.
    this.OpaqueWindowPtr = new ctypes.StructType("OpaqueWindowPtr");
    this.WindowPtr = this.OpaqueWindowPtr.ptr;
    this.OpaqueDialogPtr = new ctypes.StructType("OpaqueDialogPtr");
    this.DialogPtr = this.OpaqueDialogPtr.ptr;
    this.OpaqueGrafPtr = new ctypes.StructType("OpaqueGrafPtr");
    this.GrafPtr = this.OpaqueGrafPtr.ptr;
    this.WindowRef = this.WindowPtr;
    this.DragConstraint = this.UInt16;
    this.kNoConstraint = 0;
    this.kVerticalConstraint = 1;
    this.kHorizontalConstraint = 2;
    this.DragGrayRgnProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, []).ptr;
    this.RGBColor = new ctypes.StructType("RGBColor", [{red: ctypes.unsigned_short}, {green: ctypes.unsigned_short}, {blue: ctypes.unsigned_short}]);
    this.RGBColorPtr = this.RGBColor.ptr;
    this.RGBColorHdl = this.RGBColorPtr.ptr;
    this.ColorSearchProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.RGBColor.ptr, ctypes.long.ptr]).ptr;
    this.ColorComplementProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.RGBColor.ptr]).ptr;
    this.DragGrayRgnUPP = this.DragGrayRgnProcPtr;
    this.ColorSearchUPP = this.ColorSearchProcPtr;
    this.ColorComplementUPP = this.ColorComplementProcPtr;
    // Dropping inline function 'NewDragGrayRgnUPP'.
    // Dropping inline function 'NewColorSearchUPP'.
    // Dropping inline function 'NewColorComplementUPP'.
    // Dropping inline function 'DisposeDragGrayRgnUPP'.
    // Dropping inline function 'DisposeColorSearchUPP'.
    // Dropping inline function 'DisposeColorComplementUPP'.
    // Dropping inline function 'InvokeDragGrayRgnUPP'.
    // Dropping inline function 'InvokeColorSearchUPP'.
    // Dropping inline function 'InvokeColorComplementUPP'.
    this.ColorSpec = new ctypes.StructType("ColorSpec", [{value: ctypes.short}, {rgb: this.RGBColor}]);
    this.ColorSpecPtr = this.ColorSpec.ptr;
    this.CSpecArray = this.ColorSpec.array(1);
    this.ColorTable = new ctypes.StructType("ColorTable", [{ctSeed: this.SInt32}, {ctFlags: ctypes.short}, {ctSize: ctypes.short}, {ctTable: this.CSpecArray}]);
    this.CTabPtr = this.ColorTable.ptr;
    this.CTabHandle = this.CTabPtr.ptr;
    this.xColorSpec = new ctypes.StructType("xColorSpec", [{value: ctypes.short}, {rgb: this.RGBColor}, {xalpha: ctypes.short}]);
    this.xColorSpecPtr = this.xColorSpec.ptr;
    this.xCSpecArray = this.xColorSpec.array(1);
    this.MatchRec = new ctypes.StructType("MatchRec", [{red: ctypes.unsigned_short}, {green: ctypes.unsigned_short}, {blue: ctypes.unsigned_short}, {matchData: ctypes.long}]);
    this.k1MonochromePixelFormat = 1;
    this.k2IndexedPixelFormat = 2;
    this.k4IndexedPixelFormat = 4;
    this.k8IndexedPixelFormat = 8;
    this.k16BE555PixelFormat = 16;
    this.k24RGBPixelFormat = 24;
    this.k32ARGBPixelFormat = 32;
    this.k1IndexedGrayPixelFormat = 33;
    this.k2IndexedGrayPixelFormat = 34;
    this.k4IndexedGrayPixelFormat = 36;
    this.k8IndexedGrayPixelFormat = 40;
    this.k16LE555PixelFormat = 1278555445;
    this.k16LE5551PixelFormat = 892679473;
    this.k16BE565PixelFormat = 1110783541;
    this.k16LE565PixelFormat = 1278555701;
    this.k24BGRPixelFormat = 842285639;
    this.k32BGRAPixelFormat = 1111970369;
    this.k32ABGRPixelFormat = 1094862674;
    this.k32RGBAPixelFormat = 1380401729;
    this.kYUVSPixelFormat = 2037741171;
    this.kYUVUPixelFormat = 2037741173;
    this.kYVU9PixelFormat = 1498830137;
    this.kYUV411PixelFormat = 1496592689;
    this.kYVYU422PixelFormat = 1498831189;
    this.kUYVY422PixelFormat = 1431918169;
    this.kYUV211PixelFormat = 1496461617;
    this.k2vuyPixelFormat = 846624121;
    this.PixMap = new ctypes.StructType("PixMap", [{baseAddr: this.Ptr}, {rowBytes: ctypes.short}, {bounds: this.Rect}, {pmVersion: ctypes.short}, {packType: ctypes.short}, {packSize: this.SInt32}, {hRes: this.Fixed}, {vRes: this.Fixed}, {pixelType: ctypes.short}, {pixelSize: ctypes.short}, {cmpCount: ctypes.short}, {cmpSize: ctypes.short}, {pixelFormat: this.OSType}, {pmTable: this.CTabHandle}, {pmExt: ctypes.void_t.ptr}]);
    this.PixMapPtr = this.PixMap.ptr;
    this.PixMapHandle = this.PixMapPtr.ptr;
    this.PixPat = new ctypes.StructType("PixPat", [{patType: ctypes.short}, {patMap: this.PixMapHandle}, {patData: this.Handle}, {patXData: this.Handle}, {patXValid: ctypes.short}, {patXMap: this.Handle}, {pat1Data: this.Pattern}]);
    this.PixPatPtr = this.PixPat.ptr;
    this.PixPatHandle = this.PixPatPtr.ptr;
    this.CCrsr = new ctypes.StructType("CCrsr", [{crsrType: ctypes.short}, {crsrMap: this.PixMapHandle}, {crsrData: this.Handle}, {crsrXData: this.Handle}, {crsrXValid: ctypes.short}, {crsrXHandle: this.Handle}, {crsr1Data: this.Bits16}, {crsrMask: this.Bits16}, {crsrHotSpot: this.Point}, {crsrXTable: this.SInt32}, {crsrID: this.SInt32}]);
    this.CCrsrPtr = this.CCrsr.ptr;
    this.CCrsrHandle = this.CCrsrPtr.ptr;
    this.GammaTbl = new ctypes.StructType("GammaTbl", [{gVersion: ctypes.short}, {gType: ctypes.short}, {gFormulaSize: ctypes.short}, {gChanCnt: ctypes.short}, {gDataCnt: ctypes.short}, {gDataWidth: ctypes.short}, {gFormulaData: ctypes.short.array(1)}]);
    this.GammaTblPtr = this.GammaTbl.ptr;
    this.GammaTblHandle = this.GammaTblPtr.ptr;
    this.ITab = new ctypes.StructType("ITab", [{iTabSeed: this.SInt32}, {iTabRes: ctypes.short}, {iTTable: this.Byte.array(1)}]);
    this.ITabPtr = this.ITab.ptr;
    this.ITabHandle = this.ITabPtr.ptr;
    this.SProcRec = new ctypes.StructType("SProcRec", [{nxtSrch: this.Handle}, {srchProc: this.ColorSearchUPP}]);
    this.SProcPtr = this.SProcRec.ptr;
    this.SProcHndl = this.SProcPtr.ptr;
    this.CProcRec = new ctypes.StructType("CProcRec", [{nxtComp: this.Handle}, {compProc: this.ColorComplementUPP}]);
    this.CProcPtr = this.CProcRec.ptr;
    this.CProcHndl = this.CProcPtr.ptr;
    this.GDPtr = this.GDevice.ptr;
    this.GDHandle = this.GDPtr.ptr;
    this.GDevice = new ctypes.StructType("GDevice", [{gdRefNum: ctypes.short}, {gdID: ctypes.short}, {gdType: ctypes.short}, {gdITable: this.ITabHandle}, {gdResPref: ctypes.short}, {gdSearchProc: this.SProcHndl}, {gdCompProc: this.CProcHndl}, {gdFlags: ctypes.short}, {gdPMap: this.PixMapHandle}, {gdRefCon: this.SInt32}, {gdNextGD: this.GDHandle}, {gdRect: this.Rect}, {gdMode: this.SInt32}, {gdCCBytes: ctypes.short}, {gdCCDepth: ctypes.short}, {gdCCXData: this.Handle}, {gdCCXMask: this.Handle}, {gdExt: this.Handle}]);
    this.GrafVars = new ctypes.StructType("GrafVars", [{rgbOpColor: this.RGBColor}, {rgbHiliteColor: this.RGBColor}, {pmFgColor: this.Handle}, {pmFgIndex: ctypes.short}, {pmBkColor: this.Handle}, {pmBkIndex: ctypes.short}, {pmFlags: ctypes.short}]);
    this.GVarPtr = this.GrafVars.ptr;
    this.GVarHandle = this.GVarPtr.ptr;
    this.CGrafPtr = this.GrafPtr;
    this.QDPrinterStatusProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.PrinterStatusOpcode, this.CGrafPtr, ctypes.void_t.ptr]).ptr;
    this.QDPrinterStatusUPP = this.QDPrinterStatusProcPtr;
    this.CQDProcs = new ctypes.StructType("CQDProcs", [{textProc: this.QDTextUPP}, {lineProc: this.QDLineUPP}, {rectProc: this.QDRectUPP}, {rRectProc: this.QDRRectUPP}, {ovalProc: this.QDOvalUPP}, {arcProc: this.QDArcUPP}, {polyProc: this.QDPolyUPP}, {rgnProc: this.QDRgnUPP}, {bitsProc: this.QDBitsUPP}, {commentProc: this.QDCommentUPP}, {txMeasProc: this.QDTxMeasUPP}, {getPicProc: this.QDGetPicUPP}, {putPicProc: this.QDPutPicUPP}, {opcodeProc: this.QDOpcodeUPP}, {newProc1: this.UniversalProcPtr}, {glyphsProc: this.QDStdGlyphsUPP}, {printerStatusProc: this.QDPrinterStatusUPP}, {newProc4: this.UniversalProcPtr}, {newProc5: this.UniversalProcPtr}, {newProc6: this.UniversalProcPtr}]);
    this.CQDProcsPtr = this.CQDProcs.ptr;
    this.CWindowPtr = this.WindowPtr;
    this.ReqListRec = new ctypes.StructType("ReqListRec", [{reqLSize: ctypes.short}, {reqLData: ctypes.short.array(1)}]);
    this.OpenCPicParams = new ctypes.StructType("OpenCPicParams", [{srcRect: this.Rect}, {hRes: this.Fixed}, {vRes: this.Fixed}, {version: ctypes.short}, {reserved1: ctypes.short}, {reserved2: this.SInt32}]);
    this.DeviceLoopDrawingProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.short, ctypes.short, this.GDHandle, this.SRefCon]).ptr;
    this.DeviceLoopDrawingUPP = this.DeviceLoopDrawingProcPtr;
    // Dropping inline function 'NewDeviceLoopDrawingUPP'.
    // Dropping inline function 'DisposeDeviceLoopDrawingUPP'.
    // Dropping inline function 'InvokeDeviceLoopDrawingUPP'.
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/ATSUnicodeObjects.h
function ATSUnicodeObjects_h(lib) {

    if (this._ATSUNICODEOBJECTS_H)
        return;
    this._ATSUNICODEOBJECTS_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/ATSUnicodeDrawing.h
function ATSUnicodeDrawing_h(lib) {

    if (this._ATSUNICODEDRAWING_H)
        return;
    this._ATSUNICODEDRAWING_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/Video.h
function Video_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._VIDEO_H)
        return;
    this._VIDEO_H = true;

    this.mBaseOffset = 1;
    this.mRowBytes = 2;
    this.mBounds = 3;
    this.mVersion = 4;
    this.mHRes = 5;
    this.mVRes = 6;
    this.mPixelType = 7;
    this.mPixelSize = 8;
    this.mCmpCount = 9;
    this.mCmpSize = 10;
    this.mPlaneBytes = 11;
    this.mVertRefRate = 14;
    this.mVidParams = 1;
    this.mTable = 2;
    this.mPageCnt = 3;
    this.mDevType = 4;
    this.oneBitMode = 128;
    this.twoBitMode = 129;
    this.fourBitMode = 130;
    this.eightBitMode = 131;
    this.sixteenBitMode = 132;
    this.thirtyTwoBitMode = 133;
    this.firstVidMode = 128;
    this.secondVidMode = 129;
    this.thirdVidMode = 130;
    this.fourthVidMode = 131;
    this.fifthVidMode = 132;
    this.sixthVidMode = 133;
    this.spGammaDir = 64;
    this.spVidNamesDir = 65;
    this.kDeclROMtables = 1684366188;
    this.kDetailedTimingFormat = 1634886241;
    this.kDDCBlockSize = 128;
    this.kDDCBlockTypeEDID = 0;
    this.kDDCForceReadBit = 0;
    this.kDDCForceReadMask = 1;
    this.timingInvalid = 0;
    this.timingInvalid_SM_T24 = 8;
    this.timingApple_FixedRateLCD = 42;
    this.timingApple_512x384_60hz = 130;
    this.timingApple_560x384_60hz = 135;
    this.timingApple_640x480_67hz = 140;
    this.timingApple_640x400_67hz = 145;
    this.timingVESA_640x480_60hz = 150;
    this.timingVESA_640x480_72hz = 152;
    this.timingVESA_640x480_75hz = 154;
    this.timingVESA_640x480_85hz = 158;
    this.timingGTF_640x480_120hz = 159;
    this.timingApple_640x870_75hz = 160;
    this.timingApple_640x818_75hz = 165;
    this.timingApple_832x624_75hz = 170;
    this.timingVESA_800x600_56hz = 180;
    this.timingVESA_800x600_60hz = 182;
    this.timingVESA_800x600_72hz = 184;
    this.timingVESA_800x600_75hz = 186;
    this.timingVESA_800x600_85hz = 188;
    this.timingVESA_1024x768_60hz = 190;
    this.timingVESA_1024x768_70hz = 200;
    this.timingVESA_1024x768_75hz = 204;
    this.timingVESA_1024x768_85hz = 208;
    this.timingApple_1024x768_75hz = 210;
    this.timingApple_1152x870_75hz = 220;
    this.timingAppleNTSC_ST = 230;
    this.timingAppleNTSC_FF = 232;
    this.timingAppleNTSC_STconv = 234;
    this.timingAppleNTSC_FFconv = 236;
    this.timingApplePAL_ST = 238;
    this.timingApplePAL_FF = 240;
    this.timingApplePAL_STconv = 242;
    this.timingApplePAL_FFconv = 244;
    this.timingVESA_1280x960_75hz = 250;
    this.timingVESA_1280x960_60hz = 252;
    this.timingVESA_1280x960_85hz = 254;
    this.timingVESA_1280x1024_60hz = 260;
    this.timingVESA_1280x1024_75hz = 262;
    this.timingVESA_1280x1024_85hz = 268;
    this.timingVESA_1600x1200_60hz = 280;
    this.timingVESA_1600x1200_65hz = 282;
    this.timingVESA_1600x1200_70hz = 284;
    this.timingVESA_1600x1200_75hz = 286;
    this.timingVESA_1600x1200_80hz = 288;
    this.timingVESA_1600x1200_85hz = 289;
    this.timingVESA_1792x1344_60hz = 296;
    this.timingVESA_1792x1344_75hz = 298;
    this.timingVESA_1856x1392_60hz = 300;
    this.timingVESA_1856x1392_75hz = 302;
    this.timingVESA_1920x1440_60hz = 304;
    this.timingVESA_1920x1440_75hz = 306;
    this.timingSMPTE240M_60hz = 400;
    this.timingFilmRate_48hz = 410;
    this.timingSony_1600x1024_76hz = 500;
    this.timingSony_1920x1080_60hz = 510;
    this.timingSony_1920x1080_72hz = 520;
    this.timingSony_1920x1200_76hz = 540;
    this.timingApple_0x0_0hz_Offline = 550;
    this.timingApple12 = 130;
    this.timingApple12x = 135;
    this.timingApple13 = 140;
    this.timingApple13x = 145;
    this.timingAppleVGA = 150;
    this.timingApple15 = 160;
    this.timingApple15x = 165;
    this.timingApple16 = 170;
    this.timingAppleSVGA = 180;
    this.timingApple1Ka = 190;
    this.timingApple1Kb = 200;
    this.timingApple19 = 210;
    this.timingApple21 = 220;
    this.timingSony_1900x1200_74hz = 530;
    this.timingSony_1900x1200_76hz = 540;
    this.kAllModesValid = 0;
    this.kAllModesSafe = 1;
    this.kReportsTagging = 2;
    this.kHasDirectConnection = 3;
    this.kIsMonoDev = 4;
    this.kUncertainConnection = 5;
    this.kTaggingInfoNonStandard = 6;
    this.kReportsDDCConnection = 7;
    this.kHasDDCConnection = 8;
    this.kConnectionInactive = 9;
    this.kDependentConnection = 10;
    this.kBuiltInConnection = 11;
    this.kOverrideConnection = 12;
    this.kFastCheckForDDC = 13;
    this.kReportsHotPlugging = 14;
    this.kUnknownConnect = 1;
    this.kPanelConnect = 2;
    this.kPanelTFTConnect = 2;
    this.kFixedModeCRTConnect = 3;
    this.kMultiModeCRT1Connect = 4;
    this.kMultiModeCRT2Connect = 5;
    this.kMultiModeCRT3Connect = 6;
    this.kMultiModeCRT4Connect = 7;
    this.kModelessConnect = 8;
    this.kFullPageConnect = 9;
    this.kVGAConnect = 10;
    this.kNTSCConnect = 11;
    this.kPALConnect = 12;
    this.kHRConnect = 13;
    this.kPanelFSTNConnect = 14;
    this.kMonoTwoPageConnect = 15;
    this.kColorTwoPageConnect = 16;
    this.kColor16Connect = 17;
    this.kColor19Connect = 18;
    this.kGenericCRT = 19;
    this.kGenericLCD = 20;
    this.kDDCConnect = 21;
    this.kNoConnect = 22;
    this.kModeValid = 0;
    this.kModeSafe = 1;
    this.kModeDefault = 2;
    this.kModeShowNow = 3;
    this.kModeNotResize = 4;
    this.kModeRequiresPan = 5;
    this.kModeInterlaced = 6;
    this.kModeShowNever = 7;
    this.kModeSimulscan = 8;
    this.kModeNotPreset = 9;
    this.kModeBuiltIn = 10;
    this.kModeStretched = 11;
    this.kDepthDependent = 0;
    this.kResolutionHasMultipleDepthSizes = 0;
    this.kAVPowerOff = 0;
    this.kAVPowerStandby = 1;
    this.kAVPowerSuspend = 2;
    this.kAVPowerOn = 3;
    this.kHardwareSleep = 128;
    this.kHardwareWake = 129;
    this.kHardwareWakeFromSuspend = 130;
    this.kHardwareWakeToDoze = 131;
    this.kHardwareWakeToDozeFromSuspend = 132;
    this.kPowerStateNeedsRefresh = 0;
    this.kPowerStateSleepAwareBit = 1;
    this.kPowerStateSleepForbiddenBit = 2;
    this.kPowerStateSleepCanPowerOffBit = 3;
    this.kPowerStateSleepNoDPMSBit = 4;
    this.kPowerStateSleepWaketoDozeBit = 5;
    this.kPowerStateNeedsRefreshMask = 1;
    this.kPowerStateSleepAwareMask = 2;
    this.kPowerStateSleepForbiddenMask = 4;
    this.kPowerStateSleepCanPowerOffMask = 8;
    this.kPowerStateSleepNoDPMSMask = 16;
    this.kPowerStateSleepWaketoDozeMask = 32;
    this.cscReset = 0;
    this.cscKillIO = 1;
    this.cscSetMode = 2;
    this.cscSetEntries = 3;
    this.cscSetGamma = 4;
    this.cscGrayPage = 5;
    this.cscGrayScreen = 5;
    this.cscSetGray = 6;
    this.cscSetInterrupt = 7;
    this.cscDirectSetEntries = 8;
    this.cscSetDefaultMode = 9;
    this.cscSwitchMode = 10;
    this.cscSetSync = 11;
    this.cscSavePreferredConfiguration = 16;
    this.cscSetHardwareCursor = 22;
    this.cscDrawHardwareCursor = 23;
    this.cscSetConvolution = 24;
    this.cscSetPowerState = 25;
    this.cscPrivateControlCall = 26;
    this.cscSetMultiConnect = 28;
    this.cscSetClutBehavior = 29;
    this.cscSetDetailedTiming = 31;
    this.cscDoCommunication = 33;
    this.cscProbeConnection = 34;
    this.cscUnusedCall = 127;
    this.cscGetMode = 2;
    this.cscGetEntries = 3;
    this.cscGetPageCnt = 4;
    this.cscGetPages = 4;
    this.cscGetPageBase = 5;
    this.cscGetBaseAddr = 5;
    this.cscGetGray = 6;
    this.cscGetInterrupt = 7;
    this.cscGetGamma = 8;
    this.cscGetDefaultMode = 9;
    this.cscGetCurMode = 10;
    this.cscGetSync = 11;
    this.cscGetConnection = 12;
    this.cscGetModeTiming = 13;
    this.cscGetModeBaseAddress = 14;
    this.cscGetScanProc = 15;
    this.cscGetPreferredConfiguration = 16;
    this.cscGetNextResolution = 17;
    this.cscGetVideoParameters = 18;
    this.cscGetGammaInfoList = 20;
    this.cscRetrieveGammaTable = 21;
    this.cscSupportsHardwareCursor = 22;
    this.cscGetHardwareCursorDrawState = 23;
    this.cscGetConvolution = 24;
    this.cscGetPowerState = 25;
    this.cscPrivateStatusCall = 26;
    this.cscGetDDCBlock = 27;
    this.cscGetMultiConnect = 28;
    this.cscGetClutBehavior = 29;
    this.cscGetTimingRanges = 30;
    this.cscGetDetailedTiming = 31;
    this.cscGetCommunicationInfo = 32;
    this.kDisableHorizontalSyncBit = 0;
    this.kDisableVerticalSyncBit = 1;
    this.kDisableCompositeSyncBit = 2;
    this.kEnableSyncOnBlue = 3;
    this.kEnableSyncOnGreen = 4;
    this.kEnableSyncOnRed = 5;
    this.kNoSeparateSyncControlBit = 6;
    this.kTriStateSyncBit = 7;
    this.kHorizontalSyncMask = 1;
    this.kVerticalSyncMask = 2;
    this.kCompositeSyncMask = 4;
    this.kDPMSSyncMask = 7;
    this.kTriStateSyncMask = 128;
    this.kSyncOnBlueMask = 8;
    this.kSyncOnGreenMask = 16;
    this.kSyncOnRedMask = 32;
    this.kSyncOnMask = 56;
    this.kDPMSSyncOn = 0;
    this.kDPMSSyncStandby = 1;
    this.kDPMSSyncSuspend = 2;
    this.kDPMSSyncOff = 7;
    this.kConvolved = 0;
    this.kLiveVideoPassThru = 1;
    this.kConvolvedMask = 1;
    this.kLiveVideoPassThruMask = 2;
    this.VPBlock = new ctypes.StructType("VPBlock", [{vpBaseOffset: ctypes.long}, {vpRowBytes: ctypes.short}, {vpBounds: this.Rect}, {vpVersion: ctypes.short}, {vpPackType: ctypes.short}, {vpPackSize: ctypes.long}, {vpHRes: ctypes.long}, {vpVRes: ctypes.long}, {vpPixelType: ctypes.short}, {vpPixelSize: ctypes.short}, {vpCmpCount: ctypes.short}, {vpCmpSize: ctypes.short}, {vpPlaneBytes: ctypes.long}]);
    this.VPBlockPtr = this.VPBlock.ptr;
    this.VDEntryRecord = new ctypes.StructType("VDEntryRecord", [{csTable: this.Ptr}]);
    this.VDEntRecPtr = this.VDEntryRecord.ptr;
    this.VDGrayRecord = new ctypes.StructType("VDGrayRecord", [{csMode: this.Boolean}, {filler: this.SInt8}]);
    this.VDGrayPtr = this.VDGrayRecord.ptr;
    this.VDFlagRecord = new ctypes.StructType("VDFlagRecord", [{csMode: this.SInt8}, {filler: this.SInt8}]);
    this.VDFlagRecPtr = this.VDFlagRecord.ptr;
    this.VDSetEntryRecord = new ctypes.StructType("VDSetEntryRecord", [{csTable: this.ColorSpec.ptr}, {csStart: ctypes.short}, {csCount: ctypes.short}]);
    this.VDSetEntryPtr = this.VDSetEntryRecord.ptr;
    this.VDGammaRecord = new ctypes.StructType("VDGammaRecord", [{csGTable: this.Ptr}]);
    this.VDGamRecPtr = this.VDGammaRecord.ptr;
    this.VDBaseAddressInfoRec = new ctypes.StructType("VDBaseAddressInfoRec", [{csDevData: ctypes.long}, {csDevBase: ctypes.long}, {csModeReserved: ctypes.short}, {csModeBase: ctypes.long}]);
    this.VDBaseAddressInfoPtr = this.VDBaseAddressInfoRec.ptr;
    this.VDSwitchInfoRec = new ctypes.StructType("VDSwitchInfoRec", [{csMode: ctypes.unsigned_short}, {csData: ctypes.unsigned_long}, {csPage: ctypes.unsigned_short}, {csBaseAddr: this.Ptr}, {csReserved: ctypes.unsigned_long}]);
    this.VDSwitchInfoPtr = this.VDSwitchInfoRec.ptr;
    this.VDTimingInfoRec = new ctypes.StructType("VDTimingInfoRec", [{csTimingMode: ctypes.unsigned_long}, {csTimingReserved: ctypes.unsigned_long}, {csTimingFormat: ctypes.unsigned_long}, {csTimingData: ctypes.unsigned_long}, {csTimingFlags: ctypes.unsigned_long}]);
    this.VDTimingInfoPtr = this.VDTimingInfoRec.ptr;
    this.VDDisplayConnectInfoRec = new ctypes.StructType("VDDisplayConnectInfoRec", [{csDisplayType: ctypes.unsigned_short}, {csConnectTaggedType: ctypes.unsigned_char}, {csConnectTaggedData: ctypes.unsigned_char}, {csConnectFlags: ctypes.unsigned_long}, {csDisplayComponent: ctypes.unsigned_long}, {csConnectReserved: ctypes.unsigned_long}]);
    this.VDDisplayConnectInfoPtr = this.VDDisplayConnectInfoRec.ptr;
    this.VDMultiConnectInfoRec = new ctypes.StructType("VDMultiConnectInfoRec", [{csDisplayCountOrNumber: ctypes.unsigned_long}, {csConnectInfo: this.VDDisplayConnectInfoRec}]);
    this.VDMultiConnectInfoPtr = this.VDMultiConnectInfoRec.ptr;
    this.RawSenseCode = ctypes.unsigned_char;
    this.kRSCZero = 0;
    this.kRSCOne = 1;
    this.kRSCTwo = 2;
    this.kRSCThree = 3;
    this.kRSCFour = 4;
    this.kRSCFive = 5;
    this.kRSCSix = 6;
    this.kRSCSeven = 7;
    this.ExtendedSenseCode = ctypes.unsigned_char;
    this.kESCZero21Inch = 0;
    this.kESCOnePortraitMono = 20;
    this.kESCTwo12Inch = 33;
    this.kESCThree21InchRadius = 49;
    this.kESCThree21InchMonoRadius = 52;
    this.kESCThree21InchMono = 53;
    this.kESCFourNTSC = 10;
    this.kESCFivePortrait = 30;
    this.kESCSixMSB1 = 3;
    this.kESCSixMSB2 = 11;
    this.kESCSixMSB3 = 35;
    this.kESCSixStandard = 43;
    this.kESCSevenPAL = 0;
    this.kESCSevenNTSC = 20;
    this.kESCSevenVGA = 23;
    this.kESCSeven16Inch = 45;
    this.kESCSevenPALAlternate = 48;
    this.kESCSeven19Inch = 58;
    this.kESCSevenDDC = 62;
    this.kESCSevenNoDisplay = 63;
    this.DepthMode = ctypes.unsigned_short;
    this.kDepthMode1 = 128;
    this.kDepthMode2 = 129;
    this.kDepthMode3 = 130;
    this.kDepthMode4 = 131;
    this.kDepthMode5 = 132;
    this.kDepthMode6 = 133;
    this.kFirstDepthMode = 128;
    this.kSecondDepthMode = 129;
    this.kThirdDepthMode = 130;
    this.kFourthDepthMode = 131;
    this.kFifthDepthMode = 132;
    this.kSixthDepthMode = 133;
    this.VDPageInfo = new ctypes.StructType("VDPageInfo", [{csMode: ctypes.short}, {csData: ctypes.long}, {csPage: ctypes.short}, {csBaseAddr: this.Ptr}]);
    this.VDPgInfoPtr = this.VDPageInfo.ptr;
    this.VDSizeInfo = new ctypes.StructType("VDSizeInfo", [{csHSize: ctypes.short}, {csHPos: ctypes.short}, {csVSize: ctypes.short}, {csVPos: ctypes.short}]);
    this.VDSzInfoPtr = this.VDSizeInfo.ptr;
    this.VDSettings = new ctypes.StructType("VDSettings", [{csParamCnt: ctypes.short}, {csBrightMax: ctypes.short}, {csBrightDef: ctypes.short}, {csBrightVal: ctypes.short}, {csCntrstMax: ctypes.short}, {csCntrstDef: ctypes.short}, {csCntrstVal: ctypes.short}, {csTintMax: ctypes.short}, {csTintDef: ctypes.short}, {csTintVal: ctypes.short}, {csHueMax: ctypes.short}, {csHueDef: ctypes.short}, {csHueVal: ctypes.short}, {csHorizDef: ctypes.short}, {csHorizVal: ctypes.short}, {csHorizMax: ctypes.short}, {csVertDef: ctypes.short}, {csVertVal: ctypes.short}, {csVertMax: ctypes.short}]);
    this.VDSettingsPtr = this.VDSettings.ptr;
    this.VDDefMode = new ctypes.StructType("VDDefMode", [{csID: this.UInt8}, {filler: this.SInt8}]);
    this.VDDefModePtr = this.VDDefMode.ptr;
    this.VDSyncInfoRec = new ctypes.StructType("VDSyncInfoRec", [{csMode: this.UInt8}, {csFlags: this.UInt8}]);
    this.VDSyncInfoPtr = this.VDSyncInfoRec.ptr;
    this.AVIDType = this.UInt32;
    this.DisplayIDType = this.AVIDType;
    this.DisplayModeID = this.UInt32;
    this.VideoDeviceType = this.UInt32;
    this.GammaTableID = this.UInt32;
    this.kDisplayModeIDCurrent = 0;
    this.kDisplayModeIDInvalid = -1;
    this.kDisplayModeIDFindFirstResolution = -2;
    this.kDisplayModeIDNoMoreResolutions = -3;
    this.kDisplayModeIDFindFirstProgrammable = -4;
    this.kDisplayModeIDBootProgrammable = -5;
    this.kDisplayModeIDReservedBase = -2147483648;
    this.kGammaTableIDFindFirst = -2;
    this.kGammaTableIDNoMoreTables = -3;
    this.kGammaTableIDSpecific = 0;
    this.kGetConnectionCount = -1;
    this.kActivateConnection = 0;
    this.kDeactivateConnection = 512;
    this.kVideoDefaultBus = 0;
    this.kVideoBusTypeInvalid = 0;
    this.kVideoBusTypeI2C = 1;
    this.kVideoNoTransactionType = 0;
    this.kVideoSimpleI2CType = 1;
    this.kVideoDDCciReplyType = 2;
    this.kVideoReplyMicroSecDelayMask = 1;
    this.VDResolutionInfoRec = new ctypes.StructType("VDResolutionInfoRec", [{csPreviousDisplayModeID: this.DisplayModeID}, {csDisplayModeID: this.DisplayModeID}, {csHorizontalPixels: ctypes.unsigned_long}, {csVerticalLines: ctypes.unsigned_long}, {csRefreshRate: this.Fixed}, {csMaxDepthMode: this.DepthMode}, {csResolutionFlags: ctypes.unsigned_long}, {csReserved: ctypes.unsigned_long}]);
    this.VDResolutionInfoPtr = this.VDResolutionInfoRec.ptr;
    this.VDVideoParametersInfoRec = new ctypes.StructType("VDVideoParametersInfoRec", [{csDisplayModeID: this.DisplayModeID}, {csDepthMode: this.DepthMode}, {csVPBlockPtr: this.VPBlockPtr}, {csPageCount: ctypes.unsigned_long}, {csDeviceType: this.VideoDeviceType}, {csDepthFlags: this.UInt32}]);
    this.VDVideoParametersInfoPtr = this.VDVideoParametersInfoRec.ptr;
    this.VDGammaInfoRec = new ctypes.StructType("VDGammaInfoRec", [{csLastGammaID: this.GammaTableID}, {csNextGammaID: this.GammaTableID}, {csGammaPtr: this.Ptr}, {csReserved: ctypes.unsigned_long}]);
    this.VDGammaInfoPtr = this.VDGammaInfoRec.ptr;
    this.VDGetGammaListRec = new ctypes.StructType("VDGetGammaListRec", [{csPreviousGammaTableID: this.GammaTableID}, {csGammaTableID: this.GammaTableID}, {csGammaTableSize: ctypes.unsigned_long}, {csGammaTableName: ctypes.char.ptr}]);
    this.VDGetGammaListPtr = this.VDGetGammaListRec.ptr;
    this.VDRetrieveGammaRec = new ctypes.StructType("VDRetrieveGammaRec", [{csGammaTableID: this.GammaTableID}, {csGammaTablePtr: this.GammaTbl.ptr}]);
    this.VDRetrieveGammaPtr = this.VDRetrieveGammaRec.ptr;
    this.VDSetHardwareCursorRec = new ctypes.StructType("VDSetHardwareCursorRec", [{csCursorRef: ctypes.void_t.ptr}, {csReserved1: this.UInt32}, {csReserved2: this.UInt32}]);
    this.VDSetHardwareCursorPtr = this.VDSetHardwareCursorRec.ptr;
    this.VDDrawHardwareCursorRec = new ctypes.StructType("VDDrawHardwareCursorRec", [{csCursorX: this.SInt32}, {csCursorY: this.SInt32}, {csCursorVisible: this.UInt32}, {csReserved1: this.UInt32}, {csReserved2: this.UInt32}]);
    this.VDDrawHardwareCursorPtr = this.VDDrawHardwareCursorRec.ptr;
    this.VDSupportsHardwareCursorRec = new ctypes.StructType("VDSupportsHardwareCursorRec", [{csSupportsHardwareCursor: this.UInt32}, {csReserved1: this.UInt32}, {csReserved2: this.UInt32}]);
    this.VDSupportsHardwareCursorPtr = this.VDSupportsHardwareCursorRec.ptr;
    this.VDHardwareCursorDrawStateRec = new ctypes.StructType("VDHardwareCursorDrawStateRec", [{csCursorX: this.SInt32}, {csCursorY: this.SInt32}, {csCursorVisible: this.UInt32}, {csCursorSet: this.UInt32}, {csReserved1: this.UInt32}, {csReserved2: this.UInt32}]);
    this.VDHardwareCursorDrawStatePtr = this.VDHardwareCursorDrawStateRec.ptr;
    this.VDConvolutionInfoRec = new ctypes.StructType("VDConvolutionInfoRec", [{csDisplayModeID: this.DisplayModeID}, {csDepthMode: this.DepthMode}, {csPage: ctypes.unsigned_long}, {csFlags: this.UInt32}, {csReserved: this.UInt32}]);
    this.VDConvolutionInfoPtr = this.VDConvolutionInfoRec.ptr;
    this.VDPowerStateRec = new ctypes.StructType("VDPowerStateRec", [{powerState: ctypes.unsigned_long}, {powerFlags: ctypes.unsigned_long}, {powerReserved1: ctypes.unsigned_long}, {powerReserved2: ctypes.unsigned_long}]);
    this.VDPowerStatePtr = this.VDPowerStateRec.ptr;
    this.VDPrivateSelectorDataRec = new ctypes.StructType("VDPrivateSelectorDataRec", [{privateParameters: this.LogicalAddress}, {privateParametersSize: this.ByteCount}, {privateResults: this.LogicalAddress}, {privateResultsSize: this.ByteCount}]);
    this.VDPrivateSelectorRec = new ctypes.StructType("VDPrivateSelectorRec", [{reserved: this.UInt32}, {data: this.VDPrivateSelectorDataRec.array(1)}]);
    this.VDDDCBlockRec = new ctypes.StructType("VDDDCBlockRec", [{ddcBlockNumber: this.UInt32}, {ddcBlockType: this.ResType}, {ddcFlags: this.UInt32}, {ddcReserved: this.UInt32}, {ddcBlockData: this.Byte.array(128)}]);
    this.VDDDCBlockPtr = this.VDDDCBlockRec.ptr;
    this.kSyncInterlaceMask = 128;
    this.kSyncAnalogCompositeMask = 0;
    this.kSyncAnalogCompositeSerrateMask = 4;
    this.kSyncAnalogCompositeRGBSyncMask = 2;
    this.kSyncAnalogBipolarMask = 8;
    this.kSyncAnalogBipolarSerrateMask = 4;
    this.kSyncAnalogBipolarSRGBSyncMask = 2;
    this.kSyncDigitalCompositeMask = 16;
    this.kSyncDigitalCompositeSerrateMask = 4;
    this.kSyncDigitalCompositeMatchHSyncMask = 4;
    this.kSyncDigitalSeperateMask = 24;
    this.kSyncDigitalVSyncPositiveMask = 4;
    this.kSyncDigitalHSyncPositiveMask = 2;
    this.VDDisplayTimingRangeRec = new ctypes.StructType("VDDisplayTimingRangeRec", [{csRangeSize: this.UInt32}, {csRangeType: this.UInt32}, {csRangeVersion: this.UInt32}, {csRangeReserved: this.UInt32}, {csRangeBlockIndex: this.UInt32}, {csRangeGroup: this.UInt32}, {csRangeBlockCount: this.UInt32}, {csRangeFlags: this.UInt32}, {csMinPixelClock: this.UInt64}, {csMaxPixelClock: this.UInt64}, {csMaxPixelError: this.UInt32}, {csTimingRangeSyncFlags: this.UInt32}, {csTimingRangeSignalLevels: this.UInt32}, {csReserved0: this.UInt32}, {csMinFrameRate: this.UInt32}, {csMaxFrameRate: this.UInt32}, {csMinLineRate: this.UInt32}, {csMaxLineRate: this.UInt32}, {csMaxHorizontalTotal: this.UInt32}, {csMaxVerticalTotal: this.UInt32}, {csMaxTotalReserved1: this.UInt32}, {csMaxTotalReserved2: this.UInt32}, {csCharSizeHorizontalActive: this.UInt8}, {csCharSizeHorizontalBlanking: this.UInt8}, {csCharSizeHorizontalSyncOffset: this.UInt8}, {csCharSizeHorizontalSyncPulse: this.UInt8}, {csCharSizeVerticalActive: this.UInt8}, {csCharSizeVerticalBlanking: this.UInt8}, {csCharSizeVerticalSyncOffset: this.UInt8}, {csCharSizeVerticalSyncPulse: this.UInt8}, {csCharSizeHorizontalBorderLeft: this.UInt8}, {csCharSizeHorizontalBorderRight: this.UInt8}, {csCharSizeVerticalBorderTop: this.UInt8}, {csCharSizeVerticalBorderBottom: this.UInt8}, {csCharSizeHorizontalTotal: this.UInt8}, {csCharSizeVerticalTotal: this.UInt8}, {csCharSizeReserved1: this.UInt16}, {csMinHorizontalActiveClocks: this.UInt32}, {csMaxHorizontalActiveClocks: this.UInt32}, {csMinHorizontalBlankingClocks: this.UInt32}, {csMaxHorizontalBlankingClocks: this.UInt32}, {csMinHorizontalSyncOffsetClocks: this.UInt32}, {csMaxHorizontalSyncOffsetClocks: this.UInt32}, {csMinHorizontalPulseWidthClocks: this.UInt32}, {csMaxHorizontalPulseWidthClocks: this.UInt32}, {csMinVerticalActiveClocks: this.UInt32}, {csMaxVerticalActiveClocks: this.UInt32}, {csMinVerticalBlankingClocks: this.UInt32}, {csMaxVerticalBlankingClocks: this.UInt32}, {csMinVerticalSyncOffsetClocks: this.UInt32}, {csMaxVerticalSyncOffsetClocks: this.UInt32}, {csMinVerticalPulseWidthClocks: this.UInt32}, {csMaxVerticalPulseWidthClocks: this.UInt32}, {csMinHorizontalBorderLeft: this.UInt32}, {csMaxHorizontalBorderLeft: this.UInt32}, {csMinHorizontalBorderRight: this.UInt32}, {csMaxHorizontalBorderRight: this.UInt32}, {csMinVerticalBorderTop: this.UInt32}, {csMaxVerticalBorderTop: this.UInt32}, {csMinVerticalBorderBottom: this.UInt32}, {csMaxVerticalBorderBottom: this.UInt32}, {csReserved1: this.UInt32}, {csReserved2: this.UInt32}, {csReserved3: this.UInt32}, {csReserved4: this.UInt32}, {csReserved5: this.UInt32}, {csReserved6: this.UInt32}, {csReserved7: this.UInt32}, {csReserved8: this.UInt32}]);
    this.VDDisplayTimingRangePtr = this.VDDisplayTimingRangeRec.ptr;
    this.kDMSModeReady = 0;
    this.kDMSModeNotReady = 1;
    this.kDMSModeFree = 2;
    this.kTimingChangeRestrictedErr = -10930;
    this.kVideoI2CReplyPendingErr = -10931;
    this.kVideoI2CTransactionErr = -10932;
    this.kVideoI2CBusyErr = -10933;
    this.kVideoI2CTransactionTypeErr = -10934;
    this.kVideoBufferSizeErr = -10935;
    this.kRangeSupportsSignal_0700_0300_Bit = 0;
    this.kRangeSupportsSignal_0714_0286_Bit = 1;
    this.kRangeSupportsSignal_1000_0400_Bit = 2;
    this.kRangeSupportsSignal_0700_0000_Bit = 3;
    this.kRangeSupportsSignal_0700_0300_Mask = 1;
    this.kRangeSupportsSignal_0714_0286_Mask = 2;
    this.kRangeSupportsSignal_1000_0400_Mask = 4;
    this.kRangeSupportsSignal_0700_0000_Mask = 8;
    this.kDigitalSignalBit = 0;
    this.kAnalogSetupExpectedBit = 1;
    this.kDigitalSignalMask = 1;
    this.kAnalogSetupExpectedMask = 2;
    this.kAnalogSignalLevel_0700_0300 = 0;
    this.kAnalogSignalLevel_0714_0286 = 1;
    this.kAnalogSignalLevel_1000_0400 = 2;
    this.kAnalogSignalLevel_0700_0000 = 3;
    this.kRangeSupportsSeperateSyncsBit = 0;
    this.kRangeSupportsSyncOnGreenBit = 1;
    this.kRangeSupportsCompositeSyncBit = 2;
    this.kRangeSupportsVSyncSerrationBit = 3;
    this.kRangeSupportsSeperateSyncsMask = 1;
    this.kRangeSupportsSyncOnGreenMask = 2;
    this.kRangeSupportsCompositeSyncMask = 4;
    this.kRangeSupportsVSyncSerrationMask = 8;
    this.kSyncPositivePolarityBit = 0;
    this.kSyncPositivePolarityMask = 1;
    this.VDDetailedTimingRec = new ctypes.StructType("VDDetailedTimingRec", [{csTimingSize: this.UInt32}, {csTimingType: this.UInt32}, {csTimingVersion: this.UInt32}, {csTimingReserved: this.UInt32}, {csDisplayModeID: this.DisplayModeID}, {csDisplayModeSeed: this.UInt32}, {csDisplayModeState: this.UInt32}, {csDisplayModeAlias: this.UInt32}, {csSignalConfig: this.UInt32}, {csSignalLevels: this.UInt32}, {csPixelClock: this.UInt64}, {csMinPixelClock: this.UInt64}, {csMaxPixelClock: this.UInt64}, {csHorizontalActive: this.UInt32}, {csHorizontalBlanking: this.UInt32}, {csHorizontalSyncOffset: this.UInt32}, {csHorizontalSyncPulseWidth: this.UInt32}, {csVerticalActive: this.UInt32}, {csVerticalBlanking: this.UInt32}, {csVerticalSyncOffset: this.UInt32}, {csVerticalSyncPulseWidth: this.UInt32}, {csHorizontalBorderLeft: this.UInt32}, {csHorizontalBorderRight: this.UInt32}, {csVerticalBorderTop: this.UInt32}, {csVerticalBorderBottom: this.UInt32}, {csHorizontalSyncConfig: this.UInt32}, {csHorizontalSyncLevel: this.UInt32}, {csVerticalSyncConfig: this.UInt32}, {csVerticalSyncLevel: this.UInt32}, {csReserved1: this.UInt32}, {csReserved2: this.UInt32}, {csReserved3: this.UInt32}, {csReserved4: this.UInt32}, {csReserved5: this.UInt32}, {csReserved6: this.UInt32}, {csReserved7: this.UInt32}, {csReserved8: this.UInt32}]);
    this.VDDetailedTimingPtr = this.VDDetailedTimingRec.ptr;
    this.VDClutBehavior = this.UInt32;
    this.VDClutBehaviorPtr = this.VDClutBehavior.ptr;
    this.kSetClutAtSetEntries = 0;
    this.kSetClutAtVBL = 1;
    this.VDCommunicationRec = new ctypes.StructType("VDCommunicationRec", [{csBusID: this.SInt32}, {csCommFlags: this.UInt32}, {csMinReplyDelay: this.UInt32}, {csReserved2: this.UInt32}, {csSendAddress: this.UInt32}, {csSendType: this.UInt32}, {csSendBuffer: this.LogicalAddress}, {csSendSize: this.ByteCount}, {csReplyAddress: this.UInt32}, {csReplyType: this.UInt32}, {csReplyBuffer: this.LogicalAddress}, {csReplySize: this.ByteCount}, {csReserved3: this.UInt32}, {csReserved4: this.UInt32}, {csReserved5: this.UInt32}, {csReserved6: this.UInt32}]);
    this.VDCommunicationPtr = this.VDCommunicationRec.ptr;
    this.VDCommunicationInfoRec = new ctypes.StructType("VDCommunicationInfoRec", [{csBusID: this.SInt32}, {csBusType: this.UInt32}, {csMinBus: this.SInt32}, {csMaxBus: this.SInt32}, {csSupportedTypes: this.UInt32}, {csSupportedCommFlags: this.UInt32}, {csReserved2: this.UInt32}, {csReserved3: this.UInt32}, {csReserved4: this.UInt32}, {csReserved5: this.UInt32}, {csReserved6: this.UInt32}, {csReserved7: this.UInt32}]);
    this.VDCommunicationInfoPtr = this.VDCommunicationInfoRec.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/QDOffscreen.h
function QDOffscreen_h(lib) {
    QuickdrawTypes_h.call(this, lib);

    if (this._QDOFFSCREEN_H)
        return;
    this._QDOFFSCREEN_H = true;

    this.pixPurgeBit = 0;
    this.noNewDeviceBit = 1;
    this.useTempMemBit = 2;
    this.keepLocalBit = 3;
    this.useDistantHdwrMemBit = 4;
    this.useLocalHdwrMemBit = 5;
    this.pixelsPurgeableBit = 6;
    this.pixelsLockedBit = 7;
    this.nativeEndianPixMapBit = 8;
    this.mapPixBit = 16;
    this.newDepthBit = 17;
    this.alignPixBit = 18;
    this.newRowBytesBit = 19;
    this.reallocPixBit = 20;
    this.clipPixBit = 28;
    this.stretchPixBit = 29;
    this.ditherPixBit = 30;
    this.gwFlagErrBit = 31;
    this.pixPurge = 1;
    this.noNewDevice = 2;
    this.useTempMem = 4;
    this.keepLocal = 8;
    this.useDistantHdwrMem = 16;
    this.useLocalHdwrMem = 32;
    this.pixelsPurgeable = 64;
    this.pixelsLocked = 128;
    this.kNativeEndianPixMap = 256;
    this.kAllocDirectDrawSurface = 16384;
    this.mapPix = 65536;
    this.newDepth = 131072;
    this.alignPix = 262144;
    this.newRowBytes = 524288;
    this.reallocPix = 1048576;
    this.clipPix = 268435456;
    this.stretchPix = 536870912;
    this.ditherPix = 1073741824;
    this.gwFlagErr = -2147483648;
    this.GWorldFlags = ctypes.unsigned_long;
    this.GWorldPtr = this.CGrafPtr;
    this.deviceIsIndirect = 1;
    this.deviceNeedsLock = 2;
    this.deviceIsStatic = 4;
    this.deviceIsExternalBuffer = 8;
    this.deviceIsDDSurface = 16;
    this.deviceIsDCISurface = 32;
    this.deviceIsGDISurface = 64;
    this.deviceIsAScreen = 128;
    this.deviceIsOverlaySurface = 256;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/Fonts.h
function Fonts_h(lib) {
    ATSTypes_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._FONTS_H)
        return;
    this._FONTS_H = true;

    this.systemFont = 0;
    this.applFont = 1;
    this.kFMDefaultOptions = 0;
    this.kFMDefaultActivationContext = 0;
    this.kFMGlobalActivationContext = 1;
    this.kFMLocalActivationContext = 0;
    this.kFMDefaultIterationScope = 0;
    this.kFMGlobalIterationScope = 1;
    this.kFMLocalIterationScope = 0;
    this.kPlatformDefaultGuiFontID = 1;
    this.commandMark = 17;
    this.checkMark = 18;
    this.diamondMark = 19;
    this.appleMark = 20;
    this.propFont = 36864;
    this.prpFntH = 36865;
    this.prpFntW = 36866;
    this.prpFntHW = 36867;
    this.fixedFont = 45056;
    this.fxdFntH = 45057;
    this.fxdFntW = 45058;
    this.fxdFntHW = 45059;
    this.fontWid = 44208;
    this.FMInput = new ctypes.StructType("FMInput", [{family: ctypes.short}, {size: ctypes.short}, {face: this.Style}, {needBits: this.Boolean}, {device: ctypes.short}, {numer: this.Point}, {denom: this.Point}]);
    this.FMOutput = new ctypes.StructType("FMOutput", [{errNum: ctypes.short}, {fontHandle: this.Handle}, {boldPixels: this.UInt8}, {italicPixels: this.UInt8}, {ulOffset: this.UInt8}, {ulShadow: this.UInt8}, {ulThick: this.UInt8}, {shadowPixels: this.UInt8}, {extra: this.SInt8}, {ascent: this.UInt8}, {descent: this.UInt8}, {widMax: this.UInt8}, {leading: this.SInt8}, {curStyle: this.SInt8}, {numer: this.Point}, {denom: this.Point}]);
    this.FMOutputPtr = this.FMOutput.ptr;
    this.FMOutPtr = this.FMOutputPtr;
    this.FMetricRec = new ctypes.StructType("FMetricRec", [{ascent: this.Fixed}, {descent: this.Fixed}, {leading: this.Fixed}, {widMax: this.Fixed}, {wTabHandle: this.Handle}]);
    this.FMetricRecPtr = this.FMetricRec.ptr;
    this.FMetricRecHandle = this.FMetricRecPtr.ptr;
    this.FontFamilyID = this.FMFontFamily;
    this.FontPointSize = this.FMFontSize;
    this.kFMUseGlobalScopeOption = 1;
    this.kFontIDNewYork = 2;
    this.kFontIDGeneva = 3;
    this.kFontIDMonaco = 4;
    this.kFontIDVenice = 5;
    this.kFontIDLondon = 6;
    this.kFontIDAthens = 7;
    this.kFontIDSanFrancisco = 8;
    this.kFontIDToronto = 9;
    this.kFontIDCairo = 11;
    this.kFontIDLosAngeles = 12;
    this.kFontIDTimes = 20;
    this.kFontIDHelvetica = 21;
    this.kFontIDCourier = 22;
    this.kFontIDSymbol = 23;
    this.kFontIDMobile = 24;
    this.WidEntry = new ctypes.StructType("WidEntry", [{widStyle: this.SInt16}]);
    this.WidTable = new ctypes.StructType("WidTable", [{numWidths: this.SInt16}]);
    this.AsscEntry = new ctypes.StructType("AsscEntry", [{fontSize: this.SInt16}, {fontStyle: this.SInt16}, {fontID: this.SInt16}]);
    this.FontAssoc = new ctypes.StructType("FontAssoc", [{numAssoc: this.SInt16}]);
    this.StyleTable = new ctypes.StructType("StyleTable", [{fontClass: this.SInt16}, {offset: this.SInt32}, {reserved: this.SInt32}, {indexes: ctypes.char.array(48)}]);
    this.NameTable = new ctypes.StructType("NameTable", [{stringCount: this.SInt16}, {baseFontName: this.Str255}]);
    this.KernPair = new ctypes.StructType("KernPair", [{kernFirst: ctypes.char}, {kernSecond: ctypes.char}, {kernWidth: this.SInt16}]);
    this.KernEntry = new ctypes.StructType("KernEntry", [{kernStyle: this.SInt16}, {kernLength: this.SInt16}]);
    this.KernTable = new ctypes.StructType("KernTable", [{numKerns: this.SInt16}]);
    this.WidthTable = new ctypes.StructType("WidthTable", [{tabData: this.Fixed.array(256)}, {tabFont: this.Handle}, {sExtra: ctypes.long}, {style: ctypes.long}, {fID: ctypes.short}, {fSize: ctypes.short}, {face: ctypes.short}, {device: ctypes.short}, {inNumer: this.Point}, {inDenom: this.Point}, {aFID: ctypes.short}, {fHand: this.Handle}, {usedFam: this.Boolean}, {aFace: this.UInt8}, {vOutput: ctypes.short}, {hOutput: ctypes.short}, {vFactor: ctypes.short}, {hFactor: ctypes.short}, {aSize: ctypes.short}, {tabSize: ctypes.short}]);
    this.WidthTablePtr = this.WidthTable.ptr;
    this.WidthTableHdl = this.WidthTablePtr.ptr;
    this.FamRec = new ctypes.StructType("FamRec", [{ffFlags: this.SInt16}, {ffFamID: this.SInt16}, {ffFirstChar: this.SInt16}, {ffLastChar: this.SInt16}, {ffAscent: this.SInt16}, {ffDescent: this.SInt16}, {ffLeading: this.SInt16}, {ffWidMax: this.SInt16}, {ffWTabOff: this.SInt32}, {ffKernOff: this.SInt32}, {ffStylOff: this.SInt32}, {ffProperty: this.SInt16.array(9)}, {ffIntl: this.SInt16.array(2)}, {ffVersion: this.SInt16}]);
    this.FontRec = new ctypes.StructType("FontRec", [{fontType: this.SInt16}, {firstChar: this.SInt16}, {lastChar: this.SInt16}, {widMax: this.SInt16}, {kernMax: this.SInt16}, {nDescent: this.SInt16}, {fRectWidth: this.SInt16}, {fRectHeight: this.SInt16}, {owTLoc: this.UInt16}, {ascent: this.SInt16}, {descent: this.SInt16}, {leading: this.SInt16}, {rowWords: this.SInt16}]);
    this.FontRecPtr = this.FontRec.ptr;
    this.FontRecHdl = this.FontRecPtr.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/Palettes.h
function Palettes_h(lib) {
    QuickdrawTypes_h.call(this, lib);

    if (this._PALETTES_H)
        return;
    this._PALETTES_H = true;

    this.pmCourteous = 0;
    this.pmDithered = 1;
    this.pmTolerant = 2;
    this.pmAnimated = 4;
    this.pmExplicit = 8;
    this.pmWhite = 16;
    this.pmBlack = 32;
    this.pmInhibitG2 = 256;
    this.pmInhibitC2 = 512;
    this.pmInhibitG4 = 1024;
    this.pmInhibitC4 = 2048;
    this.pmInhibitG8 = 4096;
    this.pmInhibitC8 = 8192;
    this.pmNoUpdates = 32768;
    this.pmBkUpdates = 40960;
    this.pmFgUpdates = 49152;
    this.pmAllUpdates = 57344;
    this.ColorInfo = new ctypes.StructType("ColorInfo", [{ciRGB: this.RGBColor}, {ciUsage: ctypes.short}, {ciTolerance: ctypes.short}, {ciDataFields: ctypes.short.array(3)}]);
    this.ColorInfoPtr = this.ColorInfo.ptr;
    this.ColorInfoHandle = this.ColorInfoPtr.ptr;
    this.Palette = new ctypes.StructType("Palette", [{pmEntries: ctypes.short}, {pmDataFields: ctypes.short.array(7)}, {pmInfo: this.ColorInfo.array(1)}]);
    this.PalettePtr = this.Palette.ptr;
    this.PaletteHandle = this.PalettePtr.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/QuickdrawText.h
function QuickdrawText_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._QUICKDRAWTEXT_H)
        return;
    this._QUICKDRAWTEXT_H = true;

    this.leftCaret = 0;
    this.rightCaret = -1;
    this.kHilite = 1;
    this.smLeftCaret = 0;
    this.smRightCaret = -1;
    this.smHilite = 1;
    this.onlyStyleRun = 0;
    this.leftStyleRun = 1;
    this.rightStyleRun = 2;
    this.middleStyleRun = 3;
    this.smOnlyStyleRun = 0;
    this.smLeftStyleRun = 1;
    this.smRightStyleRun = 2;
    this.smMiddleStyleRun = 3;
    this.JustStyleCode = ctypes.short;
    this.TruncCode = ctypes.short;
    this.truncEnd = 0;
    this.truncMiddle = 16384;
    this.smTruncEnd = 0;
    this.smTruncMiddle = 16384;
    this.notTruncated = 0;
    this.truncated = 1;
    this.truncErr = -1;
    this.smNotTruncated = 0;
    this.smTruncated = 1;
    this.smTruncErr = -1;
    this.StyledLineBreakCode = this.SInt8;
    this.smBreakWord = 0;
    this.smBreakChar = 1;
    this.smBreakOverflow = 2;
    this.tfAntiAlias = 1;
    this.tfUnicode = 2;
    this.FontInfo = new ctypes.StructType("FontInfo", [{ascent: ctypes.short}, {descent: ctypes.short}, {widMax: ctypes.short}, {leading: ctypes.short}]);
    this.FormatOrder = ctypes.short.array(1);
    this.FormatOrderPtr = this.FormatOrder.ptr;
    this.StyleRunDirectionProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.short, ctypes.void_t.ptr]).ptr;
    this.StyleRunDirectionUPP = this.StyleRunDirectionProcPtr;
    // Dropping inline function 'NewStyleRunDirectionUPP'.
    // Dropping inline function 'DisposeStyleRunDirectionUPP'.
    // Dropping inline function 'InvokeStyleRunDirectionUPP'.
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/ATSUnicodeTypes.h
function ATSUnicodeTypes_h(lib) {
    ATSTypes_h.call(this, lib);
    TextCommon_h.call(this, lib);
    MacTypes_h.call(this, lib);
    ATSLayoutTypes_h.call(this, lib);

    if (this._ATSUNICODETYPES_H)
        return;
    this._ATSUNICODETYPES_H = true;

    this.OpaqueATSUTextLayout = new ctypes.StructType("OpaqueATSUTextLayout");
    this.ATSUTextLayout = this.OpaqueATSUTextLayout.ptr;
    this.OpaqueATSUStyle = new ctypes.StructType("OpaqueATSUStyle");
    this.ATSUStyle = this.OpaqueATSUStyle.ptr;
    this.OpaqueATSUFontFallbacks = new ctypes.StructType("OpaqueATSUFontFallbacks");
    this.ATSUFontFallbacks = this.OpaqueATSUFontFallbacks.ptr;
    this.ATSUTextMeasurement = this.Fixed;
    this.ATSUFontID = this.FMFont;
    this.ATSUFontFeatureType = this.UInt16;
    this.ATSUFontFeatureSelector = this.UInt16;
    this.ATSUFontVariationAxis = this.FourCharCode;
    this.ATSUFontVariationValue = this.Fixed;
    this.ATSUAttributeTag = this.UInt32;
    this.kATSULineWidthTag = 1;
    this.kATSULineRotationTag = 2;
    this.kATSULineDirectionTag = 3;
    this.kATSULineJustificationFactorTag = 4;
    this.kATSULineFlushFactorTag = 5;
    this.kATSULineBaselineValuesTag = 6;
    this.kATSULineLayoutOptionsTag = 7;
    this.kATSULineAscentTag = 8;
    this.kATSULineDescentTag = 9;
    this.kATSULineLangRegionTag = 10;
    this.kATSULineTextLocatorTag = 11;
    this.kATSULineTruncationTag = 12;
    this.kATSULineFontFallbacksTag = 13;
    this.kATSULineDecimalTabCharacterTag = 14;
    this.kATSULayoutOperationOverrideTag = 15;
    this.kATSULineHighlightCGColorTag = 17;
    this.kATSUMaxLineTag = 18;
    this.kATSULineLanguageTag = 10;
    this.kATSUCGContextTag = 32767;
    this.kATSUQDBoldfaceTag = 256;
    this.kATSUQDItalicTag = 257;
    this.kATSUQDUnderlineTag = 258;
    this.kATSUQDCondensedTag = 259;
    this.kATSUQDExtendedTag = 260;
    this.kATSUFontTag = 261;
    this.kATSUSizeTag = 262;
    this.kATSUColorTag = 263;
    this.kATSULangRegionTag = 264;
    this.kATSUVerticalCharacterTag = 265;
    this.kATSUImposeWidthTag = 266;
    this.kATSUBeforeWithStreamShiftTag = 267;
    this.kATSUAfterWithStreamShiftTag = 268;
    this.kATSUCrossStreamShiftTag = 269;
    this.kATSUTrackingTag = 270;
    this.kATSUHangingInhibitFactorTag = 271;
    this.kATSUKerningInhibitFactorTag = 272;
    this.kATSUDecompositionFactorTag = 273;
    this.kATSUBaselineClassTag = 274;
    this.kATSUPriorityJustOverrideTag = 275;
    this.kATSUNoLigatureSplitTag = 276;
    this.kATSUNoCaretAngleTag = 277;
    this.kATSUSuppressCrossKerningTag = 278;
    this.kATSUNoOpticalAlignmentTag = 279;
    this.kATSUForceHangingTag = 280;
    this.kATSUNoSpecialJustificationTag = 281;
    this.kATSUStyleTextLocatorTag = 282;
    this.kATSUStyleRenderingOptionsTag = 283;
    this.kATSUAscentTag = 284;
    this.kATSUDescentTag = 285;
    this.kATSULeadingTag = 286;
    this.kATSUGlyphSelectorTag = 287;
    this.kATSURGBAlphaColorTag = 288;
    this.kATSUFontMatrixTag = 289;
    this.kATSUStyleUnderlineCountOptionTag = 290;
    this.kATSUStyleUnderlineColorOptionTag = 291;
    this.kATSUStyleStrikeThroughTag = 292;
    this.kATSUStyleStrikeThroughCountOptionTag = 293;
    this.kATSUStyleStrikeThroughColorOptionTag = 294;
    this.kATSUStyleDropShadowTag = 295;
    this.kATSUStyleDropShadowBlurOptionTag = 296;
    this.kATSUStyleDropShadowOffsetOptionTag = 297;
    this.kATSUStyleDropShadowColorOptionTag = 298;
    this.kATSUMaxStyleTag = 299;
    this.kATSULanguageTag = 264;
    this.kATSUMaxATSUITagValue = 65535;
    this.ATSUAttributeValuePtr = ctypes.void_t.ptr;
    this.ConstATSUAttributeValuePtr = ctypes.void_t.ptr;
    this.ATSUAttributeInfo = new ctypes.StructType("ATSUAttributeInfo", [{fTag: this.ATSUAttributeTag}, {fValueSize: this.ByteCount}]);
    this.ATSUCaret = new ctypes.StructType("ATSUCaret", [{fX: this.Fixed}, {fY: this.Fixed}, {fDeltaX: this.Fixed}, {fDeltaY: this.Fixed}]);
    this.ATSUCursorMovementType = this.UInt16;
    this.kATSUByCharacter = 0;
    this.kATSUByTypographicCluster = 1;
    this.kATSUByWord = 2;
    this.kATSUByCharacterCluster = 3;
    this.kATSUByCluster = 1;
    this.ATSULineTruncation = this.UInt32;
    this.kATSUTruncateNone = 0;
    this.kATSUTruncateStart = 1;
    this.kATSUTruncateEnd = 2;
    this.kATSUTruncateMiddle = 3;
    this.kATSUTruncateSpecificationMask = 7;
    this.kATSUTruncFeatNoSquishing = 8;
    this.ATSUStyleLineCountType = this.UInt16;
    this.kATSUStyleSingleLineCount = 1;
    this.kATSUStyleDoubleLineCount = 2;
    this.ATSUVerticalCharacterType = this.UInt16;
    this.kATSUStronglyHorizontal = 0;
    this.kATSUStronglyVertical = 1;
    this.ATSUStyleComparison = this.UInt16;
    this.kATSUStyleUnequal = 0;
    this.kATSUStyleContains = 1;
    this.kATSUStyleEquals = 2;
    this.kATSUStyleContainedBy = 3;
    this.ATSUFontFallbackMethod = this.UInt16;
    this.kATSUDefaultFontFallbacks = 0;
    this.kATSULastResortOnlyFallback = 1;
    this.kATSUSequentialFallbacksPreferred = 2;
    this.kATSUSequentialFallbacksExclusive = 3;
    this.ATSUTabType = this.UInt16;
    this.kATSULeftTab = 0;
    this.kATSUCenterTab = 1;
    this.kATSURightTab = 2;
    this.kATSUDecimalTab = 3;
    this.kATSUNumberTabTypes = 4;
    this.ATSUTab = new ctypes.StructType("ATSUTab", [{tabPosition: this.ATSUTextMeasurement}, {tabType: this.ATSUTabType}]);
    this.ATSURGBAlphaColor = new ctypes.StructType("ATSURGBAlphaColor", [{red: ctypes.float}, {green: ctypes.float}, {blue: ctypes.float}, {alpha: ctypes.float}]);
    this.GlyphCollection = this.UInt16;
    this.kGlyphCollectionGID = 0;
    this.kGlyphCollectionAdobeCNS1 = 1;
    this.kGlyphCollectionAdobeGB1 = 2;
    this.kGlyphCollectionAdobeJapan1 = 3;
    this.kGlyphCollectionAdobeJapan2 = 4;
    this.kGlyphCollectionAdobeKorea1 = 5;
    this.kGlyphCollectionUnspecified = 255;
    this.ATSUGlyphSelector = new ctypes.StructType("ATSUGlyphSelector", [{collection: this.GlyphCollection}, {glyphID: this.GlyphID}]);
    this.ATSUGlyphInfo = new ctypes.StructType("ATSUGlyphInfo", [{glyphID: this.GlyphID}, {reserved: this.UInt16}, {layoutFlags: this.UInt32}, {charIndex: this.UniCharArrayOffset}, {style: this.ATSUStyle}, {deltaY: this.Float32}, {idealX: this.Float32}, {screenX: this.SInt16}, {caretX: this.SInt16}]);
    this.ATSUGlyphInfoArray = new ctypes.StructType("ATSUGlyphInfoArray", [{layout: this.ATSUTextLayout}, {numGlyphs: this.ItemCount}, {glyphs: this.ATSUGlyphInfo.array(1)}]);
    this.ATSUHighlightMethod = this.UInt32;
    this.kInvertHighlighting = 0;
    this.kRedrawHighlighting = 1;
    this.ATSUBackgroundDataType = this.UInt32;
    this.kATSUBackgroundColor = 0;
    this.kATSUBackgroundCallback = 1;
    this.ATSUBackgroundColor = this.ATSURGBAlphaColor;
    this.RedrawBackgroundProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.ATSUTextLayout, this.UniCharArrayOffset, this.UniCharCount, this.ATSTrapezoid.ptr, this.ItemCount]).ptr;
    this.RedrawBackgroundUPP = this.RedrawBackgroundProcPtr;
    // Dropping inline function 'NewRedrawBackgroundUPP'.
    // Dropping inline function 'DisposeRedrawBackgroundUPP'.
    // Dropping inline function 'InvokeRedrawBackgroundUPP'.
    this.ATSUBackgroundData = new ctypes.StructType("ATSUBackgroundData", [{backgroundColor: this.ATSUBackgroundColor}, {backgroundUPP: this.RedrawBackgroundUPP}]);
    this.ATSUUnhighlightData = new ctypes.StructType("ATSUUnhighlightData", [{dataType: this.ATSUBackgroundDataType}, {unhighlightData: this.ATSUBackgroundData}]);
    this.kATSULeftToRightBaseDirection = 0;
    this.kATSURightToLeftBaseDirection = 1;
    this.kATSUInvalidFontID = 0;
    this.kATSUUseLineControlWidth = 2147483647;
    this.kATSUNoSelector = 65535;
    this.kATSUFromTextBeginning = -1;
    this.kATSUToTextEnd = -1;
    this.kATSUFromPreviousLayout = -2;
    this.kATSUFromFollowingLayout = -3;
    this.kATSUUseGrafPortPenLoc = -1;
    this.kATSUClearAll = -1;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/ATSUnicodeFonts.h
function ATSUnicodeFonts_h(lib) {

    if (this._ATSUNICODEFONTS_H)
        return;
    this._ATSUNICODEFONTS_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/PictUtils.h
function PictUtils_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    MacTypes_h.call(this, lib);
    Palettes_h.call(this, lib);

    if (this._PICTUTILS_H)
        return;
    this._PICTUTILS_H = true;

    this.returnColorTable = 1;
    this.returnPalette = 2;
    this.recordComments = 4;
    this.recordFontInfo = 8;
    this.suppressBlackAndWhite = 16;
    this.systemMethod = 0;
    this.popularMethod = 1;
    this.medianMethod = 2;
    this.ColorBankIsCustom = -1;
    this.ColorBankIsExactAnd555 = 0;
    this.ColorBankIs555 = 1;
    this.PictInfoID = ctypes.long;
    this.CommentSpec = new ctypes.StructType("CommentSpec", [{count: ctypes.short}, {ID: ctypes.short}]);
    this.CommentSpecPtr = this.CommentSpec.ptr;
    this.CommentSpecHandle = this.CommentSpecPtr.ptr;
    this.FontSpec = new ctypes.StructType("FontSpec", [{pictFontID: ctypes.short}, {sysFontID: ctypes.short}, {size: ctypes.long.array(4)}, {style: ctypes.short}, {nameOffset: ctypes.long}]);
    this.FontSpecPtr = this.FontSpec.ptr;
    this.FontSpecHandle = this.FontSpecPtr.ptr;
    this.PictInfo = new ctypes.StructType("PictInfo", [{version: ctypes.short}, {uniqueColors: ctypes.long}, {thePalette: this.PaletteHandle}, {theColorTable: this.CTabHandle}, {hRes: this.Fixed}, {vRes: this.Fixed}, {depth: ctypes.short}, {sourceRect: this.Rect}, {textCount: ctypes.long}, {lineCount: ctypes.long}, {rectCount: ctypes.long}, {rRectCount: ctypes.long}, {ovalCount: ctypes.long}, {arcCount: ctypes.long}, {polyCount: ctypes.long}, {regionCount: ctypes.long}, {bitMapCount: ctypes.long}, {pixMapCount: ctypes.long}, {commentCount: ctypes.long}, {uniqueComments: ctypes.long}, {commentHandle: this.CommentSpecHandle}, {uniqueFonts: ctypes.long}, {fontHandle: this.FontSpecHandle}, {fontNamesHandle: this.Handle}, {reserved1: ctypes.long}, {reserved2: ctypes.long}]);
    this.PictInfoPtr = this.PictInfo.ptr;
    this.PictInfoHandle = this.PictInfoPtr.ptr;
    this.InitPickMethodProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.SInt16, this.UInt32.ptr, this.SInt16.ptr]).ptr;
    this.RecordColorsProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.UInt32, this.RGBColor.ptr, this.SInt32, this.SInt32.ptr]).ptr;
    this.CalcColorTableProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.UInt32, this.SInt16, ctypes.void_t.ptr, this.ColorSpec.ptr]).ptr;
    this.DisposeColorPickMethodProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.UInt32]).ptr;
    this.InitPickMethodUPP = this.InitPickMethodProcPtr;
    this.RecordColorsUPP = this.RecordColorsProcPtr;
    this.CalcColorTableUPP = this.CalcColorTableProcPtr;
    this.DisposeColorPickMethodUPP = this.DisposeColorPickMethodProcPtr;
    // Dropping inline function 'NewInitPickMethodUPP'.
    // Dropping inline function 'NewRecordColorsUPP'.
    // Dropping inline function 'NewCalcColorTableUPP'.
    // Dropping inline function 'NewDisposeColorPickMethodUPP'.
    // Dropping inline function 'DisposeInitPickMethodUPP'.
    // Dropping inline function 'DisposeRecordColorsUPP'.
    // Dropping inline function 'DisposeCalcColorTableUPP'.
    // Dropping inline function 'DisposeDisposeColorPickMethodUPP'.
    // Dropping inline function 'InvokeInitPickMethodUPP'.
    // Dropping inline function 'InvokeRecordColorsUPP'.
    // Dropping inline function 'InvokeCalcColorTableUPP'.
    // Dropping inline function 'InvokeDisposeColorPickMethodUPP'.
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/FontSync.h
function FontSync_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._FONTSYNC_H)
        return;
    this._FONTSYNC_H = true;

    this.FNSMatchOptions = this.UInt32;
    this.kFNSMatchNames = 1;
    this.kFNSMatchTechnology = 2;
    this.kFNSMatchGlyphs = 4;
    this.kFNSMatchEncodings = 8;
    this.kFNSMatchQDMetrics = 16;
    this.kFNSMatchATSUMetrics = 32;
    this.kFNSMatchKerning = 64;
    this.kFNSMatchWSLayout = 128;
    this.kFNSMatchAATLayout = 256;
    this.kFNSMatchPrintEncoding = 512;
    this.kFNSMissingDataNoMatch = -2147483648;
    this.kFNSMatchAll = -1;
    this.kFNSMatchDefaults = 0;
    this.FNSObjectVersion = this.UInt32;
    this.kFNSVersionDontCare = 0;
    this.kFNSCurSysInfoVersion = 1;
    this.FNSFeatureFlags = this.UInt32;
    this.FNSSysInfo = new ctypes.StructType("FNSSysInfo", [{iSysInfoVersion: this.FNSObjectVersion}, {oFeatures: this.FNSFeatureFlags}, {oCurRefVersion: this.FNSObjectVersion}, {oMinRefVersion: this.FNSObjectVersion}, {oCurProfileVersion: this.FNSObjectVersion}, {oMinProfileVersion: this.FNSObjectVersion}, {oFontSyncVersion: this.UInt16}]);
    this.OpaqueFNSFontReference = new ctypes.StructType("OpaqueFNSFontReference");
    this.FNSFontReference = this.OpaqueFNSFontReference.ptr;
    this.kFNSCreatorDefault = 0;
    this.kFNSProfileFileType = 1718514544;
    this.OpaqueFNSFontProfile = new ctypes.StructType("OpaqueFNSFontProfile");
    this.FNSFontProfile = this.OpaqueFNSFontProfile.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/ATSUnicodeDirectAccess.h
function ATSUnicodeDirectAccess_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._ATSUNICODEDIRECTACCESS_H)
        return;
    this._ATSUNICODEDIRECTACCESS_H = true;

    this.ATSUDirectDataSelector = this.UInt32;
    this.kATSUDirectDataAdvanceDeltaFixedArray = 0;
    this.kATSUDirectDataBaselineDeltaFixedArray = 1;
    this.kATSUDirectDataDeviceDeltaSInt16Array = 2;
    this.kATSUDirectDataStyleIndexUInt16Array = 3;
    this.kATSUDirectDataStyleSettingATSUStyleSettingRefArray = 4;
    this.kATSUDirectDataLayoutRecordATSLayoutRecordVersion1 = 100;
    this.kATSUDirectDataLayoutRecordATSLayoutRecordCurrent = 100;
    this.LLCStyleInfo = new ctypes.StructType("LLCStyleInfo");
    this.ATSUStyleSettingRef = this.LLCStyleInfo.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/QDPictToCGContext.h
function QDPictToCGContext_h(lib) {

    if (this._QDPICTTOCGCONTEXT_H)
        return;
    this._QDPICTTOCGCONTEXT_H = true;

    this.QDPict = new ctypes.StructType("QDPict");
    this.QDPictRef = this.QDPict.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/QD.framework/Headers/ATSUnicodeFlattening.h
function ATSUnicodeFlattening_h(lib) {
    ATSUnicodeTypes_h.call(this, lib);
    SFNTTypes_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._ATSUNICODEFLATTENING_H)
        return;
    this._ATSUNICODEFLATTENING_H = true;

    this.ATSUFlattenedDataStreamFormat = this.UInt32;
    this.kATSUDataStreamUnicodeStyledText = 1970500716;
    this.ATSUFlattenStyleRunOptions = this.UInt32;
    this.kATSUFlattenOptionNoOptionsMask = 0;
    this.ATSUUnFlattenStyleRunOptions = this.UInt32;
    this.kATSUUnFlattenOptionNoOptionsMask = 0;
    this.ATSUStyleRunInfo = new ctypes.StructType("ATSUStyleRunInfo", [{runLength: this.UInt32}, {styleObjectIndex: this.UInt32}]);
    this.kATSFlatDataUstlVersion0 = 0;
    this.kATSFlatDataUstlVersion1 = 1;
    this.kATSFlatDataUstlVersion2 = 2;
    this.kATSFlatDataUstlCurrentVersion = 2;
    this.ATSFlatDataMainHeaderBlock = new ctypes.StructType("ATSFlatDataMainHeaderBlock", [{version: this.UInt32}, {sizeOfDataBlock: this.UInt32}, {offsetToTextLayouts: this.UInt32}, {offsetToStyleRuns: this.UInt32}, {offsetToStyleList: this.UInt32}]);
    this.ATSFlatDataTextLayoutDataHeader = new ctypes.StructType("ATSFlatDataTextLayoutDataHeader", [{sizeOfLayoutData: this.UInt32}, {textLayoutLength: this.UInt32}, {offsetToLayoutControls: this.UInt32}, {offsetToLineInfo: this.UInt32}]);
    this.ATSFlatDataTextLayoutHeader = new ctypes.StructType("ATSFlatDataTextLayoutHeader", [{numFlattenedTextLayouts: this.UInt32}, {flattenedTextLayouts: this.ATSFlatDataTextLayoutDataHeader.array(1)}]);
    this.ATSFlatDataLayoutControlsDataHeader = new ctypes.StructType("ATSFlatDataLayoutControlsDataHeader", [{numberOfLayoutControls: this.UInt32}, {controlArray: this.ATSUAttributeInfo.array(1)}]);
    this.ATSFlatDataLineInfoData = new ctypes.StructType("ATSFlatDataLineInfoData", [{lineLength: this.UInt32}, {numberOfLineControls: this.UInt32}]);
    this.ATSFlatDataLineInfoHeader = new ctypes.StructType("ATSFlatDataLineInfoHeader", [{numberOfLines: this.UInt32}, {lineInfoArray: this.ATSFlatDataLineInfoData.array(1)}]);
    this.ATSFlatDataStyleRunDataHeader = new ctypes.StructType("ATSFlatDataStyleRunDataHeader", [{numberOfStyleRuns: this.UInt32}, {styleRunArray: this.ATSUStyleRunInfo.array(1)}]);
    this.ATSFlatDataStyleListStyleDataHeader = new ctypes.StructType("ATSFlatDataStyleListStyleDataHeader", [{sizeOfStyleInfo: this.UInt32}, {numberOfSetAttributes: this.UInt32}, {numberOfSetFeatures: this.UInt32}, {numberOfSetVariations: this.UInt32}]);
    this.ATSFlatDataStyleListHeader = new ctypes.StructType("ATSFlatDataStyleListHeader", [{numberOfStyles: this.UInt32}, {styleDataArray: this.ATSFlatDataStyleListStyleDataHeader.array(1)}]);
    this.ATSFlatDataStyleListFeatureData = new ctypes.StructType("ATSFlatDataStyleListFeatureData", [{theFeatureType: this.ATSUFontFeatureType}, {theFeatureSelector: this.ATSUFontFeatureSelector}]);
    this.ATSFlatDataStyleListVariationData = new ctypes.StructType("ATSFlatDataStyleListVariationData", [{theVariationAxis: this.ATSUFontVariationAxis}, {theVariationValue: this.ATSUFontVariationValue}]);
    this.ATSFlatDataFontSpeciferType = this.UInt32;
    this.kATSFlattenedFontSpecifierRawNameData = 1851878756;
    this.ATSFlatDataFontNameDataHeader = new ctypes.StructType("ATSFlatDataFontNameDataHeader", [{nameSpecifierType: this.ATSFlatDataFontSpeciferType}, {nameSpecifierSize: this.UInt32}]);
    this.ATSFlatDataFontSpecRawNameData = new ctypes.StructType("ATSFlatDataFontSpecRawNameData", [{fontNameType: this.FontNameCode}, {fontNamePlatform: this.FontPlatformCode}, {fontNameScript: this.FontScriptCode}, {fontNameLanguage: this.FontLanguageCode}, {fontNameLength: this.UInt32}]);
    this.ATSFlatDataFontSpecRawNameDataHeader = new ctypes.StructType("ATSFlatDataFontSpecRawNameDataHeader", [{numberOfFlattenedNames: this.UInt32}, {nameDataArray: this.ATSFlatDataFontSpecRawNameData.array(1)}]);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/AE.jsm");
Components.utils.import("resource://osxtypes/ATS.jsm");

const EXPORTED_SYMBOLS = ["QD", "ATSUnicodeGlyphs_h", "QuickdrawAPI_h", "Displays_h", "QuickdrawTypes_h", "ATSUnicodeObjects_h", "ATSUnicodeDrawing_h", "Video_h", "QDOffscreen_h", "Fonts_h", "Palettes_h", "QuickdrawText_h", "ATSUnicodeTypes_h", "ATSUnicodeFonts_h", "PictUtils_h", "FontSync_h", "ATSUnicodeDirectAccess_h", "QDPictToCGContext_h", "ATSUnicodeFlattening_h"];

function QD() {
    let libpath = "/System/Library/Frameworks/QD.framework/QD";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    ATSUnicodeGlyphs_h.call(this, lib);
    QuickdrawAPI_h.call(this, lib);
    Displays_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    ATSUnicodeObjects_h.call(this, lib);
    ATSUnicodeDrawing_h.call(this, lib);
    Video_h.call(this, lib);
    QDOffscreen_h.call(this, lib);
    Fonts_h.call(this, lib);
    Palettes_h.call(this, lib);
    QuickdrawText_h.call(this, lib);
    ATSUnicodeTypes_h.call(this, lib);
    ATSUnicodeFonts_h.call(this, lib);
    PictUtils_h.call(this, lib);
    FontSync_h.call(this, lib);
    ATSUnicodeDirectAccess_h.call(this, lib);
    QDPictToCGContext_h.call(this, lib);
    ATSUnicodeFlattening_h.call(this, lib);
}
