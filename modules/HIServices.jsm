// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/AXValue.h
function AXValue_h(lib) {

    if (this._AXVALUE_H)
        return;
    this._AXVALUE_H = true;

    this.kAXValueCGPointType = 1;
    this.kAXValueCGSizeType = 2;
    this.kAXValueCGRectType = 3;
    this.kAXValueCFRangeType = 4;
    this.kAXValueAXErrorType = 5;
    this.kAXValueIllegalType = 0;
    this.__AXValue = new ctypes.StructType("__AXValue");
    this.AXValueRef = this.__AXValue.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/Icons.h
function Icons_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._ICONS_H)
        return;
    this._ICONS_H = true;

    this.kAlignNone = 0;
    this.kAlignVerticalCenter = 1;
    this.kAlignTop = 2;
    this.kAlignBottom = 3;
    this.kAlignHorizontalCenter = 4;
    this.kAlignAbsoluteCenter = 5;
    this.kAlignCenterTop = 6;
    this.kAlignCenterBottom = 7;
    this.kAlignLeft = 8;
    this.kAlignCenterLeft = 9;
    this.kAlignTopLeft = 10;
    this.kAlignBottomLeft = 11;
    this.kAlignRight = 12;
    this.kAlignCenterRight = 13;
    this.kAlignTopRight = 14;
    this.kAlignBottomRight = 15;
    this.atNone = 0;
    this.atVerticalCenter = 1;
    this.atTop = 2;
    this.atBottom = 3;
    this.atHorizontalCenter = 4;
    this.atAbsoluteCenter = 5;
    this.atCenterTop = 6;
    this.atCenterBottom = 7;
    this.atLeft = 8;
    this.atCenterLeft = 9;
    this.atTopLeft = 10;
    this.atBottomLeft = 11;
    this.atRight = 12;
    this.atCenterRight = 13;
    this.atTopRight = 14;
    this.atBottomRight = 15;
    this.IconAlignmentType = this.SInt16;
    this.kTransformNone = 0;
    this.kTransformDisabled = 1;
    this.kTransformOffline = 2;
    this.kTransformOpen = 3;
    this.kTransformLabel1 = 256;
    this.kTransformLabel2 = 512;
    this.kTransformLabel3 = 768;
    this.kTransformLabel4 = 1024;
    this.kTransformLabel5 = 1280;
    this.kTransformLabel6 = 1536;
    this.kTransformLabel7 = 1792;
    this.kTransformSelected = 16384;
    this.kTransformSelectedDisabled = 16385;
    this.kTransformSelectedOffline = 16386;
    this.kTransformSelectedOpen = 16387;
    this.ttNone = 0;
    this.ttDisabled = 1;
    this.ttOffline = 2;
    this.ttOpen = 3;
    this.ttLabel1 = 256;
    this.ttLabel2 = 512;
    this.ttLabel3 = 768;
    this.ttLabel4 = 1024;
    this.ttLabel5 = 1280;
    this.ttLabel6 = 1536;
    this.ttLabel7 = 1792;
    this.ttSelected = 16384;
    this.ttSelectedDisabled = 16385;
    this.ttSelectedOffline = 16386;
    this.ttSelectedOpen = 16387;
    this.IconTransformType = this.SInt16;
    this.kSelectorLarge1Bit = 1;
    this.kSelectorLarge4Bit = 2;
    this.kSelectorLarge8Bit = 4;
    this.kSelectorLarge32Bit = 8;
    this.kSelectorLarge8BitMask = 16;
    this.kSelectorSmall1Bit = 256;
    this.kSelectorSmall4Bit = 512;
    this.kSelectorSmall8Bit = 1024;
    this.kSelectorSmall32Bit = 2048;
    this.kSelectorSmall8BitMask = 4096;
    this.kSelectorMini1Bit = 65536;
    this.kSelectorMini4Bit = 131072;
    this.kSelectorMini8Bit = 262144;
    this.kSelectorHuge1Bit = 16777216;
    this.kSelectorHuge4Bit = 33554432;
    this.kSelectorHuge8Bit = 67108864;
    this.kSelectorHuge32Bit = 134217728;
    this.kSelectorHuge8BitMask = 268435456;
    this.kSelectorAllLargeData = 255;
    this.kSelectorAllSmallData = 65280;
    this.kSelectorAllMiniData = 16711680;
    this.kSelectorAllHugeData = -16777216;
    this.kSelectorAll1BitData = 16843009;
    this.kSelectorAll4BitData = 33686018;
    this.kSelectorAll8BitData = 67372036;
    this.kSelectorAll32BitData = 134219784;
    this.kSelectorAllAvailableData = -1;
    this.IconSelectorValue = this.UInt32;
    this.svLarge1Bit = 1;
    this.svLarge4Bit = 2;
    this.svLarge8Bit = 4;
    this.svSmall1Bit = 256;
    this.svSmall4Bit = 512;
    this.svSmall8Bit = 1024;
    this.svMini1Bit = 65536;
    this.svMini4Bit = 131072;
    this.svMini8Bit = 262144;
    this.svAllLargeData = 255;
    this.svAllSmallData = 65280;
    this.svAllMiniData = 16711680;
    this.svAll1BitData = 16843009;
    this.svAll4BitData = 33686018;
    this.svAll8BitData = 67372036;
    this.svAllAvailableData = -1;
    this.IconActionProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.ResType, this.Handle.ptr, ctypes.void_t.ptr]).ptr;
    this.IconGetterProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Handle, [this.ResType, ctypes.void_t.ptr]).ptr;
    this.IconActionUPP = this.IconActionProcPtr;
    this.IconGetterUPP = this.IconGetterProcPtr;
    // Dropping inline function 'NewIconActionUPP'.
    // Dropping inline function 'NewIconGetterUPP'.
    // Dropping inline function 'DisposeIconActionUPP'.
    // Dropping inline function 'DisposeIconGetterUPP'.
    // Dropping inline function 'InvokeIconActionUPP'.
    // Dropping inline function 'InvokeIconGetterUPP'.
    this.IconGetter = this.IconGetterProcPtr;
    this.IconAction = this.IconActionProcPtr;
    this.CIcon = new ctypes.StructType("CIcon", [{iconPMap: this.PixMap}, {iconMask: this.BitMap}, {iconBMap: this.BitMap}, {iconData: this.Handle}, {iconMaskData: this.SInt16.array(1)}]);
    this.CIconPtr = this.CIcon.ptr;
    this.CIconHandle = this.CIconPtr.ptr;
    this.IconSuiteRef = this.Handle;
    this.IconCacheRef = this.Handle;
    this.PlotIconRefFlags = this.UInt32;
    this.kPlotIconRefNormalFlags = 0;
    this.kPlotIconRefNoImage = 2;
    this.kPlotIconRefNoMask = 4;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/HIShape.h
function HIShape_h(lib) {
    CGGeometry_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._HISHAPE_H)
        return;
    this._HISHAPE_H = true;

    this.__HIShape = new ctypes.StructType("__HIShape");
    this.HIShapeRef = this.__HIShape.ptr;
    this.HIMutableShapeRef = this.__HIShape.ptr;
    this.kHIShapeEnumerateInit = 1;
    this.kHIShapeEnumerateRect = 2;
    this.kHIShapeEnumerateTerminate = 3;
    this.kHIShapeParseFromTop = 0;
    this.kHIShapeParseFromBottom = 1;
    this.kHIShapeParseFromLeft = 0;
    this.kHIShapeParseFromRight = 2;
    this.kHIShapeParseFromTopLeft = 0;
    this.kHIShapeParseFromBottomRight = 3;
    this.HIShapeEnumerateProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.int, this.HIShapeRef, this.CGRect.ptr, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/InternetConfig.h
function InternetConfig_h(lib) {
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);
    Aliases_h.call(this, lib);

    if (this._INTERNETCONFIG_H)
        return;
    this._INTERNETCONFIG_H = true;

    this.icPrefNotFoundErr = -666;
    this.icPermErr = -667;
    this.icPrefDataErr = -668;
    this.icInternalErr = -669;
    this.icTruncatedErr = -670;
    this.icNoMoreWritersErr = -671;
    this.icNothingToOverrideErr = -672;
    this.icNoURLErr = -673;
    this.icConfigNotFoundErr = -674;
    this.icConfigInappropriateErr = -675;
    this.icProfileNotFoundErr = -676;
    this.icTooManyProfilesErr = -677;
    this.kICComponentInterfaceVersion0 = 0;
    this.kICComponentInterfaceVersion1 = 65536;
    this.kICComponentInterfaceVersion2 = 131072;
    this.kICComponentInterfaceVersion3 = 196608;
    this.kICComponentInterfaceVersion4 = 262144;
    this.kICComponentInterfaceVersion = 262144;
    this.OpaqueICInstance = new ctypes.StructType("OpaqueICInstance");
    this.ICInstance = this.OpaqueICInstance.ptr;
    this.ICDirSpec = new ctypes.StructType("ICDirSpec", [{vRefNum: ctypes.short}, {dirID: ctypes.long}]);
    this.ICDirSpecArray = this.ICDirSpec.array(4);
    this.ICDirSpecArrayPtr = this.ICDirSpecArray.ptr;
    this.ICAttr = this.UInt32;
    this.kICAttrLockedBit = 0;
    this.kICAttrVolatileBit = 1;
    this.kICAttrNoChange = -1;
    this.kICAttrLockedMask = 1;
    this.kICAttrVolatileMask = 2;
    this.ICPerm = this.UInt8;
    this.icNoPerm = 0;
    this.icReadOnlyPerm = 1;
    this.icReadWritePerm = 2;
    this.ICProfileID = this.SInt32;
    this.ICProfileIDPtr = this.ICProfileID.ptr;
    this.kICNilProfileID = 0;
    this.kICNoUserInteractionBit = 0;
    this.kICNoUserInteractionMask = 1;
    this.kICFileType = 1229144432;
    this.kICCreator = 1229144432;
    this.kInternetEventClass = 1196773964;
    this.kAEGetURL = 1196773964;
    this.kAEFetchURL = 1179996748;
    this.keyAEAttaching = 1098146664;
    this.kICEditPreferenceEventClass = 1229144432;
    this.kICEditPreferenceEvent = 1229144432;
    this.keyICEditPreferenceDestination = 1684370292;
    this.kICComponentVersion = 0;
    this.kICNumVersion = 1;
    this.ICFontRecord = new ctypes.StructType("ICFontRecord", [{size: this.SInt16}, {face: this.Style}, {pad: ctypes.char}, {font: this.Str255}]);
    this.ICFontRecordPtr = this.ICFontRecord.ptr;
    this.ICFontRecordHandle = this.ICFontRecordPtr.ptr;
    this.ICCharTable = new ctypes.StructType("ICCharTable", [{netToMac: ctypes.unsigned_char.array(256)}, {macToNet: ctypes.unsigned_char.array(256)}]);
    this.ICCharTablePtr = this.ICCharTable.ptr;
    this.ICCharTableHandle = this.ICCharTablePtr.ptr;
    this.ICAppSpec = new ctypes.StructType("ICAppSpec", [{fCreator: this.OSType}, {name: this.Str63}]);
    this.ICAppSpecPtr = this.ICAppSpec.ptr;
    this.ICAppSpecHandle = this.ICAppSpecPtr.ptr;
    this.ICAppSpecList = new ctypes.StructType("ICAppSpecList", [{numberOfItems: this.SInt16}, {appSpecs: this.ICAppSpec.array(1)}]);
    this.ICAppSpecListPtr = this.ICAppSpecList.ptr;
    this.ICAppSpecListHandle = this.ICAppSpecListPtr.ptr;
    this.ICFileSpec = new ctypes.StructType("ICFileSpec", [{volName: this.Str31}, {volCreationDate: this.SInt32}, {fss: this.FSSpec}, {alias: this.AliasRecord}]);
    this.ICFileSpecPtr = this.ICFileSpec.ptr;
    this.ICFileSpecHandle = this.ICFileSpecPtr.ptr;
    this.kICFileSpecHeaderSize = 106;
    this.ICMapEntryFlags = this.SInt32;
    this.ICFixedLength = this.SInt16;
    this.ICMapEntry = new ctypes.StructType("ICMapEntry", [{totalLength: this.SInt16}, {fixedLength: this.ICFixedLength}, {version: this.SInt16}, {fileType: this.OSType}, {fileCreator: this.OSType}, {postCreator: this.OSType}, {flags: this.ICMapEntryFlags}, {extension: this.Str255}, {creatorAppName: this.Str255}, {postAppName: this.Str255}, {MIMEType: this.Str255}, {entryName: this.Str255}]);
    this.ICMapEntryPtr = this.ICMapEntry.ptr;
    this.ICMapEntryHandle = this.ICMapEntryPtr.ptr;
    this.kICMapFixedLength = 22;
    this.kICMapBinaryBit = 0;
    this.kICMapResourceForkBit = 1;
    this.kICMapDataForkBit = 2;
    this.kICMapPostBit = 3;
    this.kICMapNotIncomingBit = 4;
    this.kICMapNotOutgoingBit = 5;
    this.kICMapBinaryMask = 1;
    this.kICMapResourceForkMask = 2;
    this.kICMapDataForkMask = 4;
    this.kICMapPostMask = 8;
    this.kICMapNotIncomingMask = 16;
    this.kICMapNotOutgoingMask = 32;
    this.ICServiceEntryFlags = this.SInt16;
    this.ICServiceEntry = new ctypes.StructType("ICServiceEntry", [{name: this.Str255}, {port: this.SInt16}, {flags: this.ICServiceEntryFlags}]);
    this.ICServiceEntryPtr = this.ICServiceEntry.ptr;
    this.ICServiceEntryHandle = this.ICServiceEntryPtr.ptr;
    this.kICServicesTCPBit = 0;
    this.kICServicesUDPBit = 1;
    this.kICServicesTCPMask = 1;
    this.kICServicesUDPMask = 2;
    this.ICServices = new ctypes.StructType("ICServices", [{count: this.SInt16}, {services: this.ICServiceEntry.array(1)}]);
    this.ICServicesPtr = this.ICServices.ptr;
    this.ICServicesHandle = this.ICServicesPtr.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/AXUIElement.h
function AXUIElement_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._AXUIELEMENT_H)
        return;
    this._AXUIELEMENT_H = true;

    this.__AXUIElement = new ctypes.StructType("__AXUIElement");
    this.AXUIElementRef = this.__AXUIElement.ptr;
    this.kAXCopyMultipleAttributeOptionStopOnError = 1;
    this.AXCopyMultipleAttributeOptions = this.UInt32;
    this.__AXObserver = new ctypes.StructType("__AXObserver");
    this.AXObserverRef = this.__AXObserver.ptr;
    this.AXObserverCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.AXObserverRef, this.AXUIElementRef, this.CFStringRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/Processes.h
function Processes_h(lib) {
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._PROCESSES_H)
        return;
    this._PROCESSES_H = true;

    this.kNoProcess = 0;
    this.kSystemProcess = 1;
    this.kCurrentProcess = 2;
    this.LaunchFlags = this.UInt16;
    this.launchContinue = 16384;
    this.launchNoFileFlags = 2048;
    this.launchUseMinimum = 1024;
    this.launchDontSwitch = 512;
    this.launchAllow24Bit = 256;
    this.launchInhibitDaemon = 128;
    this.AppParameters = new ctypes.StructType("AppParameters", []);
    this.AppParametersPtr = this.AppParameters.ptr;
    this.LaunchParamBlockRec = new ctypes.StructType("LaunchParamBlockRec", [{reserved1: this.UInt32}, {reserved2: this.UInt16}, {launchBlockID: this.UInt16}, {launchEPBLength: this.UInt32}, {launchFileFlags: this.UInt16}, {launchControlFlags: this.LaunchFlags}, {launchAppSpec: this.FSSpecPtr}, {launchProcessSN: this.ProcessSerialNumber}, {launchPreferredSize: this.UInt32}, {launchMinimumSize: this.UInt32}, {launchAvailableSize: this.UInt32}, {launchAppParameters: this.AppParametersPtr}]);
    this.LaunchPBPtr = this.LaunchParamBlockRec.ptr;
    this.extendedBlock = 19523;
    this.extendedBlockLen = 32;
    this.modeReserved = 16777216;
    this.modeControlPanel = 524288;
    this.modeLaunchDontSwitch = 262144;
    this.modeDeskAccessory = 131072;
    this.modeMultiLaunch = 65536;
    this.modeNeedSuspendResume = 16384;
    this.modeCanBackground = 4096;
    this.modeDoesActivateOnFGSwitch = 2048;
    this.modeOnlyBackground = 1024;
    this.modeGetFrontClicks = 512;
    this.modeGetAppDiedMsg = 256;
    this.mode32BitCompatible = 128;
    this.modeHighLevelEventAware = 64;
    this.modeLocalAndRemoteHLEvents = 32;
    this.modeStationeryAware = 16;
    this.modeUseTextEditServices = 8;
    this.modeDisplayManagerAware = 4;
    this.ProcessApplicationTransformState = this.UInt32;
    this.kProcessTransformToForegroundApplication = 1;
    this.ProcessInfoRec = new ctypes.StructType("ProcessInfoRec", [{processInfoLength: this.UInt32}, {processName: this.StringPtr}, {processNumber: this.ProcessSerialNumber}, {processType: this.UInt32}, {processSignature: this.OSType}, {processMode: this.UInt32}, {processLocation: this.Ptr}, {processSize: this.UInt32}, {processFreeMem: this.UInt32}, {processLauncher: this.ProcessSerialNumber}, {processLaunchDate: this.UInt32}, {processActiveTime: this.UInt32}, {processAppSpec: this.FSSpecPtr}]);
    this.ProcessInfoRecPtr = this.ProcessInfoRec.ptr;
    this.ProcessInfoExtendedRec = new ctypes.StructType("ProcessInfoExtendedRec", [{processInfoLength: this.UInt32}, {processName: this.StringPtr}, {processNumber: this.ProcessSerialNumber}, {processType: this.UInt32}, {processSignature: this.OSType}, {processMode: this.UInt32}, {processLocation: this.Ptr}, {processSize: this.UInt32}, {processFreeMem: this.UInt32}, {processLauncher: this.ProcessSerialNumber}, {processLaunchDate: this.UInt32}, {processActiveTime: this.UInt32}, {processAppSpec: this.FSSpecPtr}, {processTempMemTotal: this.UInt32}, {processPurgeableTempMemTotal: this.UInt32}]);
    this.ProcessInfoExtendedRecPtr = this.ProcessInfoExtendedRec.ptr;
    this.SizeResourceRec = new ctypes.StructType("SizeResourceRec", [{flags: this.UInt16}, {preferredHeapSize: this.UInt32}, {minimumHeapSize: this.UInt32}]);
    this.SizeResourceRecPtr = this.SizeResourceRec.ptr;
    this.SizeResourceRecHandle = this.SizeResourceRecPtr.ptr;
    this.kProcessDictionaryIncludeAllInformationMask = -1;
    this.kQuitBeforeNormalTimeMask = 1;
    this.kQuitAtNormalTimeMask = 2;
    this.kQuitBeforeFBAsQuitMask = 4;
    this.kQuitBeforeShellQuitsMask = 8;
    this.kQuitBeforeTerminatorAppQuitsMask = 16;
    this.kQuitNeverMask = 32;
    this.kQuitOptionsMask = 127;
    this.kQuitNotQuitDuringInstallMask = 256;
    this.kQuitNotQuitDuringLogoutMask = 512;
    this.kSetFrontProcessFrontWindowOnly = 1;
    this.kSetFrontProcessCausedByUser = 2;
    this.initDev = 0;
    this.hitDev = 1;
    this.closeDev = 2;
    this.nulDev = 3;
    this.updateDev = 4;
    this.activDev = 5;
    this.deactivDev = 6;
    this.keyEvtDev = 7;
    this.macDev = 8;
    this.undoDev = 9;
    this.cutDev = 10;
    this.copyDev = 11;
    this.pasteDev = 12;
    this.clearDev = 13;
    this.cursorDev = 14;
    this.cdevGenErr = -1;
    this.cdevMemErr = 0;
    this.cdevResErr = 1;
    this.cdevUnset = 3;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/Pasteboard.h
function Pasteboard_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._PASTEBOARD_H)
        return;
    this._PASTEBOARD_H = true;

    this.OpaquePasteboardRef = new ctypes.StructType("OpaquePasteboardRef");
    this.PasteboardRef = this.OpaquePasteboardRef.ptr;
    this.PasteboardItemID = ctypes.void_t.ptr;
    this.badPasteboardSyncErr = -25130;
    this.badPasteboardIndexErr = -25131;
    this.badPasteboardItemErr = -25132;
    this.badPasteboardFlavorErr = -25133;
    this.duplicatePasteboardFlavorErr = -25134;
    this.notPasteboardOwnerErr = -25135;
    this.noPasteboardPromiseKeeperErr = -25136;
    this.PasteboardSyncFlags = this.OptionBits;
    this.kPasteboardModified = 1;
    this.kPasteboardClientIsOwner = 2;
    this.PasteboardFlavorFlags = this.OptionBits;
    this.kPasteboardFlavorNoFlags = 0;
    this.kPasteboardFlavorSenderOnly = 1;
    this.kPasteboardFlavorSenderTranslated = 2;
    this.kPasteboardFlavorNotSaved = 4;
    this.kPasteboardFlavorRequestOnly = 8;
    this.kPasteboardFlavorSystemTranslated = 256;
    this.kPasteboardFlavorPromised = 512;
    this.PasteboardStandardLocation = this.OSType;
    this.kPasteboardStandardLocationTrash = 1953657704;
    this.kPasteboardStandardLocationUnknown = 1970170734;
    this.PasteboardPromiseKeeperProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.PasteboardRef, this.PasteboardItemID, this.CFStringRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/AXTextAttributedString.h
function AXTextAttributedString_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._AXTEXTATTRIBUTEDSTRING_H)
        return;
    this._AXTEXTATTRIBUTEDSTRING_H = true;

    this.kAXUnderlineStyleNone = 0;
    this.kAXUnderlineStyleSingle = 1;
    this.kAXUnderlineStyleThick = 2;
    this.kAXUnderlineStyleDouble = 9;
    this.AXUnderlineStyle = this.UInt32;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/UniversalAccess.h
function UniversalAccess_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._UNIVERSALACCESS_H)
        return;
    this._UNIVERSALACCESS_H = true;

    this.UAZoomChangeFocusType = this.UInt32;
    this.kUAZoomFocusTypeOther = 0;
    this.kUAZoomFocusTypeInsertionPoint = 1;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/TranslationServices.h
function TranslationServices_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._TRANSLATIONSERVICES_H)
        return;
    this._TRANSLATIONSERVICES_H = true;

    this.OpaqueTranslationRef = new ctypes.StructType("OpaqueTranslationRef");
    this.TranslationRef = this.OpaqueTranslationRef.ptr;
    this.badTranslationRefErr = -3031;
    this.TranslationFlags = this.OptionBits;
    this.kTranslationDataTranslation = 1;
    this.kTranslationFileTranslation = 2;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/AXError.h
function AXError_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._AXERROR_H)
        return;
    this._AXERROR_H = true;

    this.kAXErrorSuccess = 0;
    this.kAXErrorFailure = -25200;
    this.kAXErrorIllegalArgument = -25201;
    this.kAXErrorInvalidUIElement = -25202;
    this.kAXErrorInvalidUIElementObserver = -25203;
    this.kAXErrorCannotComplete = -25204;
    this.kAXErrorAttributeUnsupported = -25205;
    this.kAXErrorActionUnsupported = -25206;
    this.kAXErrorNotificationUnsupported = -25207;
    this.kAXErrorNotImplemented = -25208;
    this.kAXErrorNotificationAlreadyRegistered = -25209;
    this.kAXErrorNotificationNotRegistered = -25210;
    this.kAXErrorAPIDisabled = -25211;
    this.kAXErrorNoValue = -25212;
    this.kAXErrorParameterizedAttributeUnsupported = -25213;
    this.kAXErrorNotEnoughPrecision = -25214;
    this.AXError = this.SInt32;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/CoreGraphics.jsm");
Components.utils.import("resource://osxtypes/QD.jsm");

const EXPORTED_SYMBOLS = ["HIServices", "AXValue_h", "Icons_h", "HIShape_h", "InternetConfig_h", "AXUIElement_h", "Processes_h", "Pasteboard_h", "AXTextAttributedString_h", "UniversalAccess_h", "TranslationServices_h", "AXError_h"];

function HIServices() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/HIServices";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    AXValue_h.call(this, lib);
    Icons_h.call(this, lib);
    HIShape_h.call(this, lib);
    InternetConfig_h.call(this, lib);
    AXUIElement_h.call(this, lib);
    Processes_h.call(this, lib);
    Pasteboard_h.call(this, lib);
    AXTextAttributedString_h.call(this, lib);
    UniversalAccess_h.call(this, lib);
    TranslationServices_h.call(this, lib);
    AXError_h.call(this, lib);
}
