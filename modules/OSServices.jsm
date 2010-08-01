// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/NSLCore.h
function NSLCore_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._NSLCORE_H)
        return;
    this._NSLCORE_H = true;

    this.kNSLMinSystemVersion = 2304;
    this.kNSLMinOTVersion = 304;
    this.kNSLDefaultListSize = 256;
    this.kNSLURLDelimiter = 44;
    this.kNSLNoContext = 0;
    this.NSLError = new ctypes.StructType("NSLError", [{theErr: this.OSStatus}, {theContext: this.UInt32}]);
    this.NSLErrorPtr = this.NSLError.ptr;
    this.kNSLDuplicateSearchInProgress = 100;
    this.kNSLUserCanceled = -128;
    this.kNSLInvalidEnumeratorRef = 0;
    this.NSLSearchState = this.UInt16;
    this.kNSLSearchStateBufferFull = 1;
    this.kNSLSearchStateOnGoing = 2;
    this.kNSLSearchStateComplete = 3;
    this.kNSLSearchStateStalled = 4;
    this.kNSLWaitingForContinue = 5;
    this.NSLEventCode = this.UInt32;
    this.kNSLServicesLookupDataEvent = 6;
    this.kNSLNeighborhoodLookupDataEvent = 7;
    this.kNSLNewDataEvent = 8;
    this.kNSLContinueLookupEvent = 9;
    this.NSLClientRef = this.UInt32;
    this.NSLRequestRef = this.UInt32;
    this.NSLOneBasedIndex = this.UInt32;
    this.NSLPath = ctypes.char.ptr;
    this.NSLServiceType = ctypes.char.ptr;
    this.NSLServicesList = this.Handle;
    this.NSLNeighborhood = ctypes.unsigned_char.ptr;
    this.NSLClientAsyncInfo = new ctypes.StructType("NSLClientAsyncInfo", [{clientContextPtr: ctypes.void_t.ptr}, {mgrContextPtr: ctypes.void_t.ptr}, {resultBuffer: ctypes.char.ptr}, {bufferLen: ctypes.long}, {maxBufferSize: ctypes.long}, {startTime: this.UInt32}, {intStartTime: this.UInt32}, {maxSearchTime: this.UInt32}, {alertInterval: this.UInt32}, {totalItems: this.UInt32}, {alertThreshold: this.UInt32}, {searchState: this.NSLSearchState}, {searchResult: this.NSLError}, {searchDataType: this.NSLEventCode}]);
    this.NSLClientAsyncInfoPtr = this.NSLClientAsyncInfo.ptr;
    this.NSLPluginAsyncInfo = new ctypes.StructType("NSLPluginAsyncInfo", [{mgrContextPtr: ctypes.void_t.ptr}, {pluginContextPtr: ctypes.void_t.ptr}, {pluginPtr: ctypes.void_t.ptr}, {resultBuffer: ctypes.char.ptr}, {bufferLen: ctypes.long}, {maxBufferSize: ctypes.long}, {maxSearchTime: this.UInt32}, {reserved1: this.UInt32}, {reserved2: this.UInt32}, {reserved3: this.UInt32}, {clientRef: this.NSLClientRef}, {requestRef: this.NSLRequestRef}, {searchState: this.NSLSearchState}, {searchResult: this.OSStatus}]);
    this.NSLPluginAsyncInfoPtr = this.NSLPluginAsyncInfo.ptr;
    this.NSLMgrNotifyProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.NSLPluginAsyncInfo.ptr]).ptr;
    this.NSLClientNotifyProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.NSLClientAsyncInfo.ptr]).ptr;
    this.NSLMgrNotifyUPP = this.NSLMgrNotifyProcPtr;
    this.NSLClientNotifyUPP = this.NSLClientNotifyProcPtr;
    // Dropping inline function 'NewNSLMgrNotifyUPP'.
    // Dropping inline function 'NewNSLClientNotifyUPP'.
    // Dropping inline function 'DisposeNSLMgrNotifyUPP'.
    // Dropping inline function 'DisposeNSLClientNotifyUPP'.
    // Dropping inline function 'InvokeNSLMgrNotifyUPP'.
    // Dropping inline function 'InvokeNSLClientNotifyUPP'.
    this.NSLTypedData = new ctypes.StructType("NSLTypedData", [{dataType: ctypes.unsigned_long}, {lengthOfData: ctypes.unsigned_long}]);
    this.NSLTypedDataPtr = this.NSLTypedData.ptr;
    this.NSLServicesListHeader = new ctypes.StructType("NSLServicesListHeader", [{numServices: ctypes.unsigned_long}, {logicalLen: ctypes.unsigned_long}]);
    this.NSLServicesListHeaderPtr = this.NSLServicesListHeader.ptr;
    this.NSLPluginData = new ctypes.StructType("NSLPluginData", [{reserved1: ctypes.long}, {reserved2: ctypes.long}, {reserved3: ctypes.long}, {supportsRegistration: this.Boolean}, {isPurgeable: this.Boolean}, {totalLen: this.UInt16}, {dataTypeOffset: this.UInt16}, {serviceListOffset: this.UInt16}, {protocolListOffset: this.UInt16}, {commentStringOffset: this.UInt16}]);
    this.NSLPluginDataPtr = this.NSLPluginData.ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/WSMethodInvocation.h
function WSMethodInvocation_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFXMLNode_h.call(this, lib);

    if (this._WSMETHODINVOCATION_H)
        return;
    this._WSMETHODINVOCATION_H = true;

    this.OpaqueWSMethodInvocationRef = new ctypes.StructType("OpaqueWSMethodInvocationRef");
    this.WSMethodInvocationRef = this.OpaqueWSMethodInvocationRef.ptr;
    this.WSMethodInvocationCallBackProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.WSMethodInvocationRef, ctypes.void_t.ptr, this.CFDictionaryRef]).ptr;
    this.WSMethodInvocationSerializationProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [this.WSMethodInvocationRef, this.CFTypeRef, ctypes.void_t.ptr]).ptr;
    this.WSMethodInvocationDeserializationProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.CFTypeRef, [this.WSMethodInvocationRef, this.CFXMLTreeRef, this.CFXMLTreeRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/WSProtocolHandler.h
function WSProtocolHandler_h(lib) {
    CFXMLNode_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._WSPROTOCOLHANDLER_H)
        return;
    this._WSPROTOCOLHANDLER_H = true;

    this.OpaqueWSProtocolHandlerRef = new ctypes.StructType("OpaqueWSProtocolHandlerRef");
    this.WSProtocolHandlerRef = this.OpaqueWSProtocolHandlerRef.ptr;
    this.WSProtocolHandlerSerializationProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [this.WSProtocolHandlerRef, this.CFTypeRef, ctypes.void_t.ptr]).ptr;
    this.WSProtocolHandlerDeserializationProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.CFTypeRef, [this.WSProtocolHandlerRef, this.CFXMLTreeRef, this.CFXMLTreeRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/Power.h
function Power_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._POWER_H)
        return;
    this._POWER_H = true;

    this.kSleepRequest = 1;
    this.kSleepDemand = 2;
    this.kSleepWakeUp = 3;
    this.kSleepRevoke = 4;
    this.kSleepUnlock = 4;
    this.kSleepDeny = 5;
    this.kSleepNow = 6;
    this.kDozeDemand = 7;
    this.kDozeWakeUp = 8;
    this.kDozeRequest = 9;
    this.kEnterStandby = 10;
    this.kEnterRun = 11;
    this.kSuspendRequest = 12;
    this.kSuspendDemand = 13;
    this.kSuspendRevoke = 14;
    this.kSuspendWakeUp = 15;
    this.kGetPowerLevel = 16;
    this.kSetPowerLevel = 17;
    this.kDeviceInitiatedWake = 18;
    this.kWakeToDoze = 19;
    this.kDozeToFullWakeUp = 20;
    this.kGetPowerInfo = 21;
    this.kGetWakeOnNetInfo = 22;
    this.kSuspendWakeToDoze = 23;
    this.kEnterIdle = 24;
    this.kStillIdle = 25;
    this.kExitIdle = 26;
    this.noCalls = 1;
    this.noRequest = 2;
    this.slpQType = 16;
    this.sleepQType = 16;
    this.OverallAct = 0;
    this.UsrActivity = 1;
    this.NetActivity = 2;
    this.HDActivity = 3;
    this.IdleActivity = 4;
    this.SleepQRecPtr = this.SleepQRec.ptr;
    this.SleepQProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.long, [ctypes.long, this.SleepQRecPtr]).ptr;
    this.SleepQUPP = this.SleepQProcPtr;
    // Dropping inline function 'NewSleepQUPP'.
    // Dropping inline function 'DisposeSleepQUPP'.
    // Dropping inline function 'InvokeSleepQUPP'.
    this.SleepQRec = new ctypes.StructType("SleepQRec", [{sleepQLink: this.SleepQRecPtr}, {sleepQType: ctypes.short}, {sleepQProc: this.SleepQUPP}, {sleepQFlags: ctypes.short}]);
    this.kMediaModeOn = 0;
    this.kMediaModeStandBy = 1;
    this.kMediaModeSuspend = 2;
    this.kMediaModeOff = 3;
    this.kMediaPowerCSCode = 70;
    this.kHDQueuePostBit = 0;
    this.kHDQueuePostMask = 1;
    this.ActivityInfo = new ctypes.StructType("ActivityInfo", [{ActivityType: ctypes.short}, {ActivityTime: ctypes.unsigned_long}]);
    this.BatteryInfo = new ctypes.StructType("BatteryInfo", [{flags: this.UInt8}, {warningLevel: this.UInt8}, {reserved: this.UInt8}, {batteryLevel: this.UInt8}]);
    this.ModemByte = this.SInt8;
    this.BatteryByte = this.SInt8;
    this.SoundMixerByte = this.SInt8;
    this.PMResultCode = ctypes.long;
    this.sleepRequest = 1;
    this.sleepDemand = 2;
    this.sleepWakeUp = 3;
    this.sleepRevoke = 4;
    this.sleepUnlock = 4;
    this.sleepDeny = 5;
    this.sleepNow = 6;
    this.dozeDemand = 7;
    this.dozeWakeUp = 8;
    this.dozeRequest = 9;
    this.enterStandby = 10;
    this.enterRun = 11;
    this.suspendRequestMsg = 12;
    this.suspendDemandMsg = 13;
    this.suspendRevokeMsg = 14;
    this.suspendWakeUpMsg = 15;
    this.getPowerLevel = 16;
    this.setPowerLevel = 17;
    this.PowerLevel = this.UInt32;
    this.kPMDevicePowerLevel_On = 0;
    this.kPMDevicePowerLevel_D1 = 1;
    this.kPMDevicePowerLevel_D2 = 2;
    this.kPMDevicePowerLevel_Off = 3;
    this.RegEntryID = ctypes.unsigned_long;
    this.PowerHandlerProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.UInt32, ctypes.void_t.ptr, this.UInt32, this.RegEntryID.ptr]).ptr;
    this.PowerHandlerUPP = this.PowerHandlerProcPtr;
    this.modemOnBit = 0;
    this.ringWakeUpBit = 2;
    this.modemInstalledBit = 3;
    this.ringDetectBit = 4;
    this.modemOnHookBit = 5;
    this.modemOnMask = 1;
    this.ringWakeUpMask = 4;
    this.modemInstalledMask = 8;
    this.ringDetectMask = 16;
    this.modemOnHookMask = 32;
    this.chargerConnBit = 0;
    this.hiChargeBit = 1;
    this.chargeOverFlowBit = 2;
    this.batteryDeadBit = 3;
    this.batteryLowBit = 4;
    this.connChangedBit = 5;
    this.chargerConnMask = 1;
    this.hiChargeMask = 2;
    this.chargeOverFlowMask = 4;
    this.batteryDeadMask = 8;
    this.batteryLowMask = 16;
    this.connChangedMask = 32;
    this.MediaBaySndEnBit = 0;
    this.PCISndEnBit = 1;
    this.ZVSndEnBit = 2;
    this.PCCardSndEnBit = 3;
    this.MediaBaySndEnMask = 1;
    this.PCISndEnMask = 2;
    this.ZVSndEnMask = 4;
    this.PCCardSndEnMask = 8;
    this.kAEMacPowerMgtEvt = 1886218100;
    this.kAEMacToWake = 2002873189;
    this.kAEMacLowPowerSaveData = 1886221156;
    this.kAEMacEmergencySleep = 1701671788;
    this.kAEMacEmergencyShutdown = 1701671780;
    this.kDeviceDidNotWakeMachine = 0;
    this.kDeviceRequestsFullWake = 1;
    this.kDeviceRequestsWakeToDoze = 2;
    this.hasWakeupTimer = 0;
    this.hasSharedModemPort = 1;
    this.hasProcessorCycling = 2;
    this.mustProcessorCycle = 3;
    this.hasReducedSpeed = 4;
    this.dynamicSpeedChange = 5;
    this.hasSCSIDiskMode = 6;
    this.canGetBatteryTime = 7;
    this.canWakeupOnRing = 8;
    this.hasDimmingSupport = 9;
    this.hasStartupTimer = 10;
    this.hasChargeNotification = 11;
    this.hasDimSuspendSupport = 12;
    this.hasWakeOnNetActivity = 13;
    this.hasWakeOnLid = 14;
    this.canPowerOffPCIBus = 15;
    this.hasDeepSleep = 16;
    this.hasSleep = 17;
    this.supportsServerModeAPIs = 18;
    this.supportsUPSIntegration = 19;
    this.hasAggressiveIdling = 20;
    this.supportsIdleQueue = 21;
    this.hasInternalModem = 0;
    this.intModemRingDetect = 1;
    this.intModemOffHook = 2;
    this.intModemRingWakeEnb = 3;
    this.extModemSelected = 4;
    this.modemSetBit = 15;
    this.batteryInstalled = 7;
    this.batteryCharging = 6;
    this.chargerConnected = 5;
    this.upsConnected = 4;
    this.upsIsPowerSource = 3;
    this.HDPwrQType = 18500;
    this.PMgrStateQType = 20557;
    this.pmSleepTimeoutChanged = 0;
    this.pmSleepEnableChanged = 1;
    this.pmHardDiskTimeoutChanged = 2;
    this.pmHardDiskSpindownChanged = 3;
    this.pmDimmingTimeoutChanged = 4;
    this.pmDimmingEnableChanged = 5;
    this.pmDiskModeAddressChanged = 6;
    this.pmProcessorCyclingChanged = 7;
    this.pmProcessorSpeedChanged = 8;
    this.pmWakeupTimerChanged = 9;
    this.pmStartupTimerChanged = 10;
    this.pmHardDiskPowerRemovedbyUser = 11;
    this.pmChargeStatusChanged = 12;
    this.pmPowerLevelChanged = 13;
    this.pmWakeOnNetActivityChanged = 14;
    this.pmSleepTimeoutChangedMask = 1;
    this.pmSleepEnableChangedMask = 2;
    this.pmHardDiskTimeoutChangedMask = 4;
    this.pmHardDiskSpindownChangedMask = 8;
    this.pmDimmingTimeoutChangedMask = 16;
    this.pmDimmingEnableChangedMask = 32;
    this.pmDiskModeAddressChangedMask = 64;
    this.pmProcessorCyclingChangedMask = 128;
    this.pmProcessorSpeedChangedMask = 256;
    this.pmWakeupTimerChangedMask = 512;
    this.pmStartupTimerChangedMask = 1024;
    this.pmHardDiskPowerRemovedbyUserMask = 2048;
    this.pmChargeStatusChangedMask = 4096;
    this.pmPowerLevelChangedMask = 8192;
    this.pmWakeOnNetActivityChangedMask = 16384;
    this.kUseDefaultMinimumWakeTime = 0;
    this.kPowerSummaryVersion = 1;
    this.kDevicePowerInfoVersion = 1;
    this.kPCIPowerOffAllowed = 1;
    this.kDevicePCIPowerOffAllowed = 1;
    this.kDeviceSupportsPMIS = 2;
    this.kDeviceCanAssertPMEDuringSleep = 4;
    this.kDeviceUsesCommonLogicPower = 8;
    this.kDeviceDriverPresent = 16;
    this.kDeviceDriverSupportsPowerMgt = 32;
    this.DevicePowerInfo = new ctypes.StructType("DevicePowerInfo", [{version: this.UInt32}, {regID: this.RegEntryID}, {flags: this.OptionBits}, {minimumWakeTime: this.UInt32}, {sleepPowerNeeded: this.UInt32}]);
    this.PowerSummary = new ctypes.StructType("PowerSummary", [{version: this.UInt32}, {flags: this.OptionBits}, {sleepPowerAvailable: this.UInt32}, {sleepPowerNeeded: this.UInt32}, {minimumWakeTime: this.UInt32}, {deviceCount: this.ItemCount}, {devices: this.DevicePowerInfo.array(1)}]);
    this.HDSpindownProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.HDQueueElement.ptr]).ptr;
    this.PMgrStateChangeProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.PMgrQueueElement.ptr, ctypes.long]).ptr;
    this.HDSpindownUPP = this.HDSpindownProcPtr;
    this.PMgrStateChangeUPP = this.PMgrStateChangeProcPtr;
    this.HDQueueElement = new ctypes.StructType("HDQueueElement", [{hdQLink: this.HDQueueElement.ptr}, {hdQType: ctypes.short}, {hdFlags: ctypes.short}, {hdProc: this.HDSpindownUPP}, {hdUser: ctypes.long}]);
    this.PMgrQueueElement = new ctypes.StructType("PMgrQueueElement", [{pmQLink: this.PMgrQueueElement.ptr}, {pmQType: ctypes.short}, {pmFlags: ctypes.short}, {pmNotifyBits: ctypes.long}, {pmProc: this.PMgrStateChangeUPP}, {pmUser: ctypes.long}]);
    this.BatteryTimeRec = new ctypes.StructType("BatteryTimeRec", [{expectedBatteryTime: ctypes.unsigned_long}, {minimumBatteryTime: ctypes.unsigned_long}, {maximumBatteryTime: ctypes.unsigned_long}, {timeUntilCharged: ctypes.unsigned_long}]);
    this.WakeupTime = new ctypes.StructType("WakeupTime", [{wakeTime: ctypes.unsigned_long}, {wakeEnabled: this.Boolean}, {filler: this.SInt8}]);
    this.StartupTime = new ctypes.StructType("StartupTime", [{startTime: ctypes.unsigned_long}, {startEnabled: this.Boolean}, {filler: this.SInt8}]);
    // Dropping inline function 'NewHDSpindownUPP'.
    // Dropping inline function 'NewPMgrStateChangeUPP'.
    // Dropping inline function 'DisposeHDSpindownUPP'.
    // Dropping inline function 'DisposePMgrStateChangeUPP'.
    // Dropping inline function 'InvokeHDSpindownUPP'.
    // Dropping inline function 'InvokePMgrStateChangeUPP'.
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/IconStorage.h
function IconStorage_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._ICONSTORAGE_H)
        return;
    this._ICONSTORAGE_H = true;

    this.kIconServices16PixelDataARGB = 1768108084;
    this.kIconServices32PixelDataARGB = 1768108085;
    this.kIconServices48PixelDataARGB = 1768108086;
    this.kIconServices128PixelDataARGB = 1768108087;
    this.kIconServices256PixelDataARGB = 1768108088;
    this.kIconServices512PixelDataARGB = 1768108089;
    this.kThumbnail32BitData = 1769222962;
    this.kThumbnail8BitMask = 1949855083;
    this.kHuge1BitMask = 1768122403;
    this.kHuge4BitData = 1768122420;
    this.kHuge8BitData = 1768122424;
    this.kHuge32BitData = 1768436530;
    this.kHuge8BitMask = 1748528491;
    this.kLarge1BitMask = 1229147683;
    this.kLarge4BitData = 1768123444;
    this.kLarge8BitData = 1768123448;
    this.kLarge32BitData = 1768698674;
    this.kLarge8BitMask = 1815637355;
    this.kSmall1BitMask = 1768125219;
    this.kSmall4BitData = 1768125236;
    this.kSmall8BitData = 1768125240;
    this.kSmall32BitData = 1769157426;
    this.kSmall8BitMask = 1933077867;
    this.kMini1BitMask = 1768123683;
    this.kMini4BitData = 1768123700;
    this.kMini8BitData = 1768123704;
    this.large1BitMask = 1229147683;
    this.large4BitData = 1768123444;
    this.large8BitData = 1768123448;
    this.small1BitMask = 1768125219;
    this.small4BitData = 1768125236;
    this.small8BitData = 1768125240;
    this.mini1BitMask = 1768123683;
    this.mini4BitData = 1768123700;
    this.mini8BitData = 1768123704;
    this.kIconFamilyType = 1768124019;
    this.IconFamilyElement = new ctypes.StructType("IconFamilyElement", [{elementType: this.OSType}, {elementSize: this.SInt32}, {elementData: ctypes.unsigned_char.array(1)}]);
    this.IconFamilyResource = new ctypes.StructType("IconFamilyResource", [{resourceType: this.OSType}, {resourceSize: this.SInt32}, {elements: this.IconFamilyElement.array(1)}]);
    this.IconFamilyPtr = this.IconFamilyResource.ptr;
    this.IconFamilyHandle = this.IconFamilyPtr.ptr;
    this.kTileIconVariant = 1953066085;
    this.kRolloverIconVariant = 1870030194;
    this.kDropIconVariant = 1685221232;
    this.kOpenIconVariant = 1869636974;
    this.kOpenDropIconVariant = 1868853872;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/SCSI.h
function SCSI_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._SCSI_H)
        return;
    this._SCSI_H = true;

    this.scInc = 1;
    this.scNoInc = 2;
    this.scAdd = 3;
    this.scMove = 4;
    this.scLoop = 5;
    this.scNop = 6;
    this.scStop = 7;
    this.scComp = 8;
    this.SCSIInstr = new ctypes.StructType("SCSIInstr", [{scOpcode: ctypes.unsigned_short}, {scParam1: ctypes.long}, {scParam2: ctypes.long}]);
    this.scsiVERSION = 43;
    this.SCSICallbackProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.SCSICallbackUPP = this.SCSICallbackProcPtr;
    // Dropping inline function 'NewSCSICallbackUPP'.
    // Dropping inline function 'DisposeSCSICallbackUPP'.
    // Dropping inline function 'InvokeSCSICallbackUPP'.
    this.SCSINop = 0;
    this.SCSIExecIO = 1;
    this.SCSIBusInquiry = 3;
    this.SCSIReleaseQ = 4;
    this.SCSIAbortCommand = 16;
    this.SCSIResetBus = 17;
    this.SCSIResetDevice = 18;
    this.SCSITerminateIO = 19;
    this.vendorUnique = 192;
    this.handshakeDataLength = 8;
    this.maxCDBLength = 16;
    this.vendorIDLength = 16;
    this.DeviceIdent = new ctypes.StructType("DeviceIdent", [{diReserved: this.UInt8}, {bus: this.UInt8}, {targetID: this.UInt8}, {LUN: this.UInt8}]);
    this.kBusTypeSCSI = 0;
    this.kBusTypeATA = 1;
    this.kBusTypePCMCIA = 2;
    this.kBusTypeMediaBay = 3;
    this.DeviceIdentATA = new ctypes.StructType("DeviceIdentATA", [{diReserved: this.UInt8}, {busNum: this.UInt8}, {devNum: this.UInt8}, {diReserved2: this.UInt8}]);
    this.CDB = new ctypes.StructType("CDB", [{cdbPtr: this.BytePtr}, {cdbBytes: this.UInt8.array(16)}]);
    this.CDBPtr = this.CDB.ptr;
    this.SGRecord = new ctypes.StructType("SGRecord", [{SGAddr: this.Ptr}, {SGCount: this.UInt32}]);
    this.SCSIHdr = new ctypes.StructType("SCSIHdr", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.BytePtr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}]);
    this.SCSI_PB = new ctypes.StructType("SCSI_PB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.BytePtr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}]);
    this.SCSI_IO = new ctypes.StructType("SCSI_IO", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.BytePtr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}, {scsiResultFlags: this.UInt16}, {scsiReserved3pt5: this.UInt16}, {scsiDataPtr: this.BytePtr}, {scsiDataLength: this.UInt32}, {scsiSensePtr: this.BytePtr}, {scsiSenseLength: this.UInt8}, {scsiCDBLength: this.UInt8}, {scsiSGListCount: this.UInt16}, {scsiReserved4: this.UInt32}, {scsiSCSIstatus: this.UInt8}, {scsiSenseResidual: this.SInt8}, {scsiReserved5: this.UInt16}, {scsiDataResidual: ctypes.long}, {scsiCDB: this.CDB}, {scsiTimeout: ctypes.long}, {scsiReserved5pt5: this.BytePtr}, {scsiReserved5pt6: this.UInt16}, {scsiIOFlags: this.UInt16}, {scsiTagAction: this.UInt8}, {scsiReserved6: this.UInt8}, {scsiReserved7: this.UInt16}, {scsiSelectTimeout: this.UInt16}, {scsiDataType: this.UInt8}, {scsiTransferType: this.UInt8}, {scsiReserved8: this.UInt32}, {scsiReserved9: this.UInt32}, {scsiHandshake: this.UInt16.array(8)}, {scsiReserved10: this.UInt32}, {scsiReserved11: this.UInt32}, {scsiCommandLink: this.SCSI_IO.ptr}, {scsiSIMpublics: this.UInt8.array(8)}, {scsiAppleReserved6: this.UInt8.array(8)}, {scsiCurrentPhase: this.UInt16}, {scsiSelector: ctypes.short}, {scsiOldCallResult: this.OSErr}, {scsiSCSImessage: this.UInt8}, {XPTprivateFlags: this.UInt8}, {XPTextras: this.UInt8.array(12)}]);
    this.SCSIExecIOPB = this.SCSI_IO;
    this.SCSIBusInquiryPB = new ctypes.StructType("SCSIBusInquiryPB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.BytePtr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}, {scsiEngineCount: this.UInt16}, {scsiMaxTransferType: this.UInt16}, {scsiDataTypes: this.UInt32}, {scsiIOpbSize: this.UInt16}, {scsiMaxIOpbSize: this.UInt16}, {scsiFeatureFlags: this.UInt32}, {scsiVersionNumber: this.UInt8}, {scsiHBAInquiry: this.UInt8}, {scsiTargetModeFlags: this.UInt8}, {scsiScanFlags: this.UInt8}, {scsiSIMPrivatesPtr: this.UInt32}, {scsiSIMPrivatesSize: this.UInt32}, {scsiAsyncFlags: this.UInt32}, {scsiHiBusID: this.UInt8}, {scsiInitiatorID: this.UInt8}, {scsiBIReserved0: this.UInt16}, {scsiBIReserved1: this.UInt32}, {scsiFlagsSupported: this.UInt32}, {scsiIOFlagsSupported: this.UInt16}, {scsiWeirdStuff: this.UInt16}, {scsiMaxTarget: this.UInt16}, {scsiMaxLUN: this.UInt16}, {scsiSIMVendor: ctypes.char.array(16)}, {scsiHBAVendor: ctypes.char.array(16)}, {scsiControllerFamily: ctypes.char.array(16)}, {scsiControllerType: ctypes.char.array(16)}, {scsiXPTversion: ctypes.char.array(4)}, {scsiSIMversion: ctypes.char.array(4)}, {scsiHBAversion: ctypes.char.array(4)}, {scsiHBAslotType: this.UInt8}, {scsiHBAslotNumber: this.UInt8}, {scsiSIMsRsrcID: this.UInt16}, {scsiBIReserved3: this.UInt16}, {scsiAdditionalLength: this.UInt16}]);
    this.SCSIAbortCommandPB = new ctypes.StructType("SCSIAbortCommandPB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.BytePtr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}, {scsiIOptr: this.SCSI_IO.ptr}]);
    this.SCSITerminateIOPB = new ctypes.StructType("SCSITerminateIOPB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.BytePtr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}, {scsiIOptr: this.SCSI_IO.ptr}]);
    this.SCSIResetBusPB = new ctypes.StructType("SCSIResetBusPB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.BytePtr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}]);
    this.SCSIResetDevicePB = new ctypes.StructType("SCSIResetDevicePB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.BytePtr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}]);
    this.SCSIReleaseQPB = new ctypes.StructType("SCSIReleaseQPB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.BytePtr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}]);
    this.SCSIGetVirtualIDInfoPB = new ctypes.StructType("SCSIGetVirtualIDInfoPB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.Ptr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}, {scsiOldCallID: this.UInt16}, {scsiExists: this.Boolean}, {filler: this.SInt8}]);
    this.SCSIDriverPB = new ctypes.StructType("SCSIDriverPB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.Ptr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}, {scsiDriver: ctypes.short}, {scsiDriverFlags: this.UInt16}, {scsiNextDevice: this.DeviceIdent}]);
    this.SCSILoadDriverPB = new ctypes.StructType("SCSILoadDriverPB", [{qLink: this.SCSIHdr.ptr}, {scsiReserved1: ctypes.short}, {scsiPBLength: this.UInt16}, {scsiFunctionCode: this.UInt8}, {scsiReserved2: this.UInt8}, {scsiResult: this.OSErr}, {scsiDevice: this.DeviceIdent}, {scsiCompletion: this.SCSICallbackUPP}, {scsiFlags: this.UInt32}, {scsiDriverStorage: this.Ptr}, {scsiXPTprivate: this.Ptr}, {scsiReserved3: ctypes.long}, {scsiLoadedRefNum: ctypes.short}, {scsiDiskLoadFailed: this.Boolean}, {filler: this.SInt8}]);
    this.scsiTransferBlind = 0;
    this.scsiTransferPolled = 1;
    this.scsiErrorBase = -7936;
    this.scsiRequestInProgress = 1;
    this.scsiRequestAborted = -7934;
    this.scsiUnableToAbort = -7933;
    this.scsiNonZeroStatus = -7932;
    this.scsiUnused05 = -7931;
    this.scsiUnused06 = -7930;
    this.scsiUnused07 = -7929;
    this.scsiUnused08 = -7928;
    this.scsiUnableToTerminate = -7927;
    this.scsiSelectTimeout = -7926;
    this.scsiCommandTimeout = -7925;
    this.scsiIdentifyMessageRejected = -7924;
    this.scsiMessageRejectReceived = -7923;
    this.scsiSCSIBusReset = -7922;
    this.scsiParityError = -7921;
    this.scsiAutosenseFailed = -7920;
    this.scsiUnused11 = -7919;
    this.scsiDataRunError = -7918;
    this.scsiUnexpectedBusFree = -7917;
    this.scsiSequenceFailed = -7916;
    this.scsiWrongDirection = -7915;
    this.scsiUnused16 = -7914;
    this.scsiBDRsent = -7913;
    this.scsiTerminated = -7912;
    this.scsiNoNexus = -7911;
    this.scsiCDBReceived = -7910;
    this.scsiTooManyBuses = -7888;
    this.scsiBusy = -7887;
    this.scsiProvideFail = -7886;
    this.scsiDeviceNotThere = -7885;
    this.scsiNoHBA = -7884;
    this.scsiDeviceConflict = -7883;
    this.scsiNoSuchXref = -7882;
    this.scsiQLinkInvalid = -7881;
    this.scsiPBLengthError = -7872;
    this.scsiFunctionNotAvailable = -7871;
    this.scsiRequestInvalid = -7870;
    this.scsiBusInvalid = -7869;
    this.scsiTIDInvalid = -7868;
    this.scsiLUNInvalid = -7867;
    this.scsiIDInvalid = -7866;
    this.scsiDataTypeInvalid = -7865;
    this.scsiTransferTypeInvalid = -7864;
    this.scsiCDBLengthInvalid = -7863;
    this.scsiUnused74 = -7862;
    this.scsiUnused75 = -7861;
    this.scsiBadDataLength = -7860;
    this.scsiPartialPrepared = -7859;
    this.scsiInvalidMsgType = -7858;
    this.scsiUnused79 = -7857;
    this.scsiBadConnID = -7856;
    this.scsiUnused81 = -7855;
    this.scsiIOInProgress = -7854;
    this.scsiTargetReserved = -7853;
    this.scsiUnused84 = -7852;
    this.scsiUnused85 = -7851;
    this.scsiBadConnType = -7850;
    this.scsiCannotLoadPlugin = -7849;
    this.scsiFamilyInternalError = -7849;
    this.scsiPluginInternalError = -7848;
    this.scsiVendorSpecificErrorBase = -7808;
    this.scsiVendorSpecificErrorCount = 16;
    this.scsiExecutionErrors = -7936;
    this.scsiNotExecutedErrors = -7888;
    this.scsiParameterErrors = -7872;
    this.scsiSIMQFrozen = 1;
    this.scsiAutosenseValid = 2;
    this.scsiBusNotFree = 4;
    this.kbSCSIDisableAutosense = 29;
    this.kbSCSIFlagReservedA = 28;
    this.kbSCSIFlagReserved0 = 27;
    this.kbSCSICDBLinked = 26;
    this.kbSCSIQEnable = 25;
    this.kbSCSICDBIsPointer = 24;
    this.kbSCSIFlagReserved1 = 23;
    this.kbSCSIInitiateSyncData = 22;
    this.kbSCSIDisableSyncData = 21;
    this.kbSCSISIMQHead = 20;
    this.kbSCSISIMQFreeze = 19;
    this.kbSCSISIMQNoFreeze = 18;
    this.kbSCSIDoDisconnect = 17;
    this.kbSCSIDontDisconnect = 16;
    this.kbSCSIDataReadyForDMA = 15;
    this.kbSCSIFlagReserved3 = 14;
    this.kbSCSIDataPhysical = 13;
    this.kbSCSISensePhysical = 12;
    this.kbSCSIFlagReserved5 = 11;
    this.kbSCSIFlagReserved6 = 10;
    this.kbSCSIFlagReserved7 = 9;
    this.kbSCSIFlagReserved8 = 8;
    this.kbSCSIDataBufferValid = 7;
    this.kbSCSIStatusBufferValid = 6;
    this.kbSCSIMessageBufferValid = 5;
    this.kbSCSIFlagReserved9 = 4;
    this.scsiDirectionMask = -1073741824;
    this.scsiDirectionNone = -1073741824;
    this.scsiDirectionReserved = 0;
    this.scsiDirectionOut = -2147483648;
    this.scsiDirectionIn = 1073741824;
    this.scsiDisableAutosense = 536870912;
    this.scsiFlagReservedA = 268435456;
    this.scsiFlagReserved0 = 134217728;
    this.scsiCDBLinked = 67108864;
    this.scsiQEnable = 33554432;
    this.scsiCDBIsPointer = 16777216;
    this.scsiFlagReserved1 = 8388608;
    this.scsiInitiateSyncData = 4194304;
    this.scsiDisableSyncData = 2097152;
    this.scsiSIMQHead = 1048576;
    this.scsiSIMQFreeze = 524288;
    this.scsiSIMQNoFreeze = 262144;
    this.scsiDoDisconnect = 131072;
    this.scsiDontDisconnect = 65536;
    this.scsiDataReadyForDMA = 32768;
    this.scsiFlagReserved3 = 16384;
    this.scsiDataPhysical = 8192;
    this.scsiSensePhysical = 4096;
    this.scsiFlagReserved5 = 2048;
    this.scsiFlagReserved6 = 1024;
    this.scsiFlagReserved7 = 512;
    this.scsiFlagReserved8 = 256;
    this.scsiNoParityCheck = 2;
    this.scsiDisableSelectWAtn = 4;
    this.scsiSavePtrOnDisconnect = 8;
    this.scsiNoBucketIn = 16;
    this.scsiNoBucketOut = 32;
    this.scsiDisableWide = 64;
    this.scsiInitiateWide = 128;
    this.scsiRenegotiateSense = 256;
    this.scsiDisableDiscipline = 512;
    this.scsiIOFlagReserved0080 = 128;
    this.scsiIOFlagReserved8000 = 32768;
    this.scsiBusMDP = 128;
    this.scsiBusWide32 = 64;
    this.scsiBusWide16 = 32;
    this.scsiBusSDTR = 16;
    this.scsiBusLinkedCDB = 8;
    this.scsiBusTagQ = 2;
    this.scsiBusSoftReset = 1;
    this.scsiDataBuffer = 0;
    this.scsiDataTIB = 1;
    this.scsiDataSG = 2;
    this.scsiDataIOTable = 3;
    this.scsiBusDataTIB = 2;
    this.scsiBusDataBuffer = 1;
    this.scsiBusDataSG = 4;
    this.scsiBusDataIOTable = 8;
    this.scsiBusDataReserved = -2147483648;
    this.scsiBusScansDevices = 128;
    this.scsiBusScansOnInit = 64;
    this.scsiBusLoadsROMDrivers = 32;
    this.scsiBusLVD = 1024;
    this.scsiBusUltra3SCSI = 512;
    this.scsiBusUltra2SCSI = 256;
    this.scsiBusInternalExternalMask = 192;
    this.scsiBusInternalExternalUnknown = 0;
    this.scsiBusInternalExternal = 192;
    this.scsiBusInternal = 128;
    this.scsiBusExternal = 64;
    this.scsiBusCacheCoherentDMA = 32;
    this.scsiBusOldCallCapable = 16;
    this.scsiBusUltraSCSI = 8;
    this.scsiBusDifferential = 4;
    this.scsiBusFastSCSI = 2;
    this.scsiBusDMAavailable = 1;
    this.scsiOddDisconnectUnsafeRead1 = 1;
    this.scsiOddDisconnectUnsafeWrite1 = 2;
    this.scsiBusErrorsUnsafe = 4;
    this.scsiRequiresHandshake = 8;
    this.scsiTargetDrivenSDTRSafe = 16;
    this.scsiOddCountForPhysicalUnsafe = 32;
    this.scsiAbortCmdFixed = 64;
    this.scsiMeshACKTimingFixed = 128;
    this.scsiMotherboardBus = 0;
    this.scsiNuBus = 1;
    this.scsiPDSBus = 3;
    this.scsiPCIBus = 4;
    this.scsiPCMCIABus = 5;
    this.scsiFireWireBridgeBus = 6;
    this.scsiUSBBus = 7;
    this.scsiDeviceSensitive = 1;
    this.scsiDeviceNoOldCallAccess = 2;
    this.scsiStatGood = 0;
    this.scsiStatCheckCondition = 2;
    this.scsiStatConditionMet = 4;
    this.scsiStatBusy = 8;
    this.scsiStatIntermediate = 16;
    this.scsiStatIntermedMet = 20;
    this.scsiStatResvConflict = 24;
    this.scsiStatTerminated = 34;
    this.scsiStatQFull = 40;
    this.kCmdCompleteMsg = 0;
    this.kExtendedMsg = 1;
    this.kSaveDataPointerMsg = 2;
    this.kRestorePointersMsg = 3;
    this.kDisconnectMsg = 4;
    this.kInitiatorDetectedErrorMsg = 5;
    this.kAbortMsg = 6;
    this.kMsgRejectMsg = 7;
    this.kNoOperationMsg = 8;
    this.kMsgParityErrorMsg = 9;
    this.kLinkedCmdCompleteMsg = 10;
    this.kLinkedCmdCompleteWithFlagMsg = 11;
    this.kBusDeviceResetMsg = 12;
    this.kAbortTagMsg = 13;
    this.kClearQueueMsg = 14;
    this.kInitiateRecoveryMsg = 15;
    this.kReleaseRecoveryMsg = 16;
    this.kTerminateIOProcessMsg = 17;
    this.kSimpleQueueTag = 32;
    this.kHeadOfQueueTagMsg = 33;
    this.kOrderedQueueTagMsg = 34;
    this.kIgnoreWideResidueMsg = 35;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/CSIdentityQuery.h
function CSIdentityQuery_h(lib) {
    CSIdentity_h.call(this, lib);
    CFError_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CSIDENTITYQUERY_H)
        return;
    this._CSIDENTITYQUERY_H = true;

    this.kCSIdentityQueryGenerateUpdateEvents = 1;
    this.kCSIdentityQueryIncludeHiddenIdentities = 2;
    this.CSIdentityQueryFlags = this.CFOptionFlags;
    this.kCSIdentityQueryStringEquals = 1;
    this.kCSIdentityQueryStringBeginsWith = 2;
    this.CSIdentityQueryStringComparisonMethod = this.CFIndex;
    this.kCSIdentityQueryEventSearchPhaseFinished = 1;
    this.kCSIdentityQueryEventResultsAdded = 2;
    this.kCSIdentityQueryEventResultsChanged = 3;
    this.kCSIdentityQueryEventResultsRemoved = 4;
    this.kCSIdentityQueryEventErrorOccurred = 5;
    this.CSIdentityQueryEvent = this.CFIndex;
    this.CSIdentityQueryReceiveEventCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CSIdentityQueryRef, this.CSIdentityQueryEvent, this.CFArrayRef, this.CFErrorRef, ctypes.void_t.ptr]).ptr;
    this.CSIdentityQueryClientContext = new ctypes.StructType("CSIdentityQueryClientContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retainInfo: this.CFAllocatorRetainCallBack}, {releaseInfo: this.CFAllocatorReleaseCallBack}, {copyInfoDescription: this.CFAllocatorCopyDescriptionCallBack}, {receiveEvent: this.CSIdentityQueryReceiveEventCallback}]);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/KeychainCore.h
function KeychainCore_h(lib) {
    SecBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._KEYCHAINCORE_H)
        return;
    this._KEYCHAINCORE_H = true;

    this.KCRef = this.SecKeychainRef;
    this.KCItemRef = this.SecKeychainItemRef;
    this.KCSearchRef = this.SecKeychainSearchRef;
    this.KCAttribute = this.SecKeychainAttribute;
    this.KCAttributeList = this.SecKeychainAttributeList;
    this.KCAttrType = this.SecKeychainAttrType;
    this.KCStatus = this.SecKeychainStatus;
    this.KCEvent = this.UInt16;
    this.kIdleKCEvent = 0;
    this.kLockKCEvent = 1;
    this.kUnlockKCEvent = 2;
    this.kAddKCEvent = 3;
    this.kDeleteKCEvent = 4;
    this.kUpdateKCEvent = 5;
    this.kPasswordChangedKCEvent = 6;
    this.kSystemKCEvent = 8;
    this.kDefaultChangedKCEvent = 9;
    this.kDataAccessKCEvent = 10;
    this.kKeychainListChangedKCEvent = 11;
    this.KCEventMask = this.UInt16;
    this.kIdleKCEventMask = 1;
    this.kLockKCEventMask = 2;
    this.kUnlockKCEventMask = 4;
    this.kAddKCEventMask = 8;
    this.kDeleteKCEventMask = 16;
    this.kUpdateKCEventMask = 32;
    this.kPasswordChangedKCEventMask = 64;
    this.kSystemEventKCEventMask = 256;
    this.kDefaultChangedKCEventMask = 512;
    this.kDataAccessKCEventMask = 1024;
    this.kEveryKCEventMask = 65535;
    this.AFPServerSignature = this.UInt8.array(16);
    this.KCPublicKeyHash = this.UInt8.array(20);
    this.KCCallbackInfo = new ctypes.StructType("KCCallbackInfo", [{version: this.UInt32}, {item: this.KCItemRef}, {processID: this.SInt32.array(2)}, {event: this.SInt32.array(4)}, {keychain: this.KCRef}]);
    this.kUnlockStateKCStatus = 1;
    this.kRdPermKCStatus = 2;
    this.kWrPermKCStatus = 4;
    this.kCertificateKCItemClass = 1667592820;
    this.kAppleSharePasswordKCItemClass = 1634953328;
    this.kInternetPasswordKCItemClass = 1768842612;
    this.kGenericPasswordKCItemClass = 1734700656;
    this.KCItemClass = this.FourCharCode;
    this.kClassKCItemAttr = 1668047219;
    this.kCreationDateKCItemAttr = 1667522932;
    this.kModDateKCItemAttr = 1835295092;
    this.kDescriptionKCItemAttr = 1684370275;
    this.kCommentKCItemAttr = 1768123764;
    this.kCreatorKCItemAttr = 1668445298;
    this.kTypeKCItemAttr = 1954115685;
    this.kScriptCodeKCItemAttr = 1935897200;
    this.kLabelKCItemAttr = 1818321516;
    this.kInvisibleKCItemAttr = 1768846953;
    this.kNegativeKCItemAttr = 1852139361;
    this.kCustomIconKCItemAttr = 1668641641;
    this.kAccountKCItemAttr = 1633903476;
    this.kServiceKCItemAttr = 1937138533;
    this.kGenericKCItemAttr = 1734700641;
    this.kSecurityDomainKCItemAttr = 1935961454;
    this.kServerKCItemAttr = 1936881266;
    this.kAuthTypeKCItemAttr = 1635023216;
    this.kPortKCItemAttr = 1886351988;
    this.kPathKCItemAttr = 1885434984;
    this.kVolumeKCItemAttr = 1986817381;
    this.kAddressKCItemAttr = 1633969266;
    this.kSignatureKCItemAttr = 1936943463;
    this.kProtocolKCItemAttr = 1886675820;
    this.kSubjectKCItemAttr = 1937072746;
    this.kCommonNameKCItemAttr = 1668161568;
    this.kIssuerKCItemAttr = 1769173877;
    this.kSerialNumberKCItemAttr = 1936614002;
    this.kEMailKCItemAttr = 1835100524;
    this.kPublicKeyHashKCItemAttr = 1752198009;
    this.kIssuerURLKCItemAttr = 1769304684;
    this.kEncryptKCItemAttr = 1701733234;
    this.kDecryptKCItemAttr = 1684366194;
    this.kSignKCItemAttr = 1936287598;
    this.kVerifyKCItemAttr = 1986359913;
    this.kWrapKCItemAttr = 2003984752;
    this.kUnwrapKCItemAttr = 1970173810;
    this.kStartDateKCItemAttr = 1935958388;
    this.kEndDateKCItemAttr = 1701077364;
    this.KCItemAttr = this.FourCharCode;
    this.kKCAuthTypeNTLM = 1853123693;
    this.kKCAuthTypeMSN = 1836281441;
    this.kKCAuthTypeDPA = 1685086561;
    this.kKCAuthTypeRPA = 1919967585;
    this.kKCAuthTypeHTTPDigest = 1752462436;
    this.kKCAuthTypeDefault = 1684434036;
    this.KCAuthType = this.FourCharCode;
    this.kKCProtocolTypeFTP = 1718906912;
    this.kKCProtocolTypeFTPAccount = 1718906977;
    this.kKCProtocolTypeHTTP = 1752462448;
    this.kKCProtocolTypeIRC = 1769104160;
    this.kKCProtocolTypeNNTP = 1852732528;
    this.kKCProtocolTypePOP3 = 1886351411;
    this.kKCProtocolTypeSMTP = 1936553072;
    this.kKCProtocolTypeSOCKS = 1936685088;
    this.kKCProtocolTypeIMAP = 1768776048;
    this.kKCProtocolTypeLDAP = 1818517872;
    this.kKCProtocolTypeAppleTalk = 1635019883;
    this.kKCProtocolTypeAFP = 1634103328;
    this.kKCProtocolTypeTelnet = 1952803950;
    this.KCProtocolType = this.FourCharCode;
    this.KCCertAddOptions = this.UInt32;
    this.kSecOptionReserved = 255;
    this.kCertUsageShift = 8;
    this.kCertUsageSigningAdd = 256;
    this.kCertUsageSigningAskAndAdd = 512;
    this.kCertUsageVerifyAdd = 1024;
    this.kCertUsageVerifyAskAndAdd = 2048;
    this.kCertUsageEncryptAdd = 4096;
    this.kCertUsageEncryptAskAndAdd = 8192;
    this.kCertUsageDecryptAdd = 16384;
    this.kCertUsageDecryptAskAndAdd = 32768;
    this.kCertUsageKeyExchAdd = 65536;
    this.kCertUsageKeyExchAskAndAdd = 131072;
    this.kCertUsageRootAdd = 262144;
    this.kCertUsageRootAskAndAdd = 524288;
    this.kCertUsageSSLAdd = 1048576;
    this.kCertUsageSSLAskAndAdd = 2097152;
    this.kCertUsageAllAdd = 2147483392;
    this.KCVerifyStopOn = this.UInt16;
    this.kPolicyKCStopOn = 0;
    this.kNoneKCStopOn = 1;
    this.kFirstPassKCStopOn = 2;
    this.kFirstFailKCStopOn = 3;
    this.KCCertSearchOptions = this.UInt32;
    this.kCertSearchShift = 0;
    this.kCertSearchSigningIgnored = 0;
    this.kCertSearchSigningAllowed = 1;
    this.kCertSearchSigningDisallowed = 2;
    this.kCertSearchSigningMask = 3;
    this.kCertSearchVerifyIgnored = 0;
    this.kCertSearchVerifyAllowed = 4;
    this.kCertSearchVerifyDisallowed = 8;
    this.kCertSearchVerifyMask = 12;
    this.kCertSearchEncryptIgnored = 0;
    this.kCertSearchEncryptAllowed = 16;
    this.kCertSearchEncryptDisallowed = 32;
    this.kCertSearchEncryptMask = 48;
    this.kCertSearchDecryptIgnored = 0;
    this.kCertSearchDecryptAllowed = 64;
    this.kCertSearchDecryptDisallowed = 128;
    this.kCertSearchDecryptMask = 192;
    this.kCertSearchWrapIgnored = 0;
    this.kCertSearchWrapAllowed = 256;
    this.kCertSearchWrapDisallowed = 512;
    this.kCertSearchWrapMask = 768;
    this.kCertSearchUnwrapIgnored = 0;
    this.kCertSearchUnwrapAllowed = 1024;
    this.kCertSearchUnwrapDisallowed = 2048;
    this.kCertSearchUnwrapMask = 3072;
    this.kCertSearchPrivKeyRequired = 4096;
    this.kCertSearchAny = 0;
    this.kAnyPort = 0;
    this.kAnyProtocol = 0;
    this.kAnyAuthType = 0;
    // Dropping inline function 'KeychainManagerAvailable'.
    this.KCCallbackProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.KCEvent, this.KCCallbackInfo.ptr, ctypes.void_t.ptr]).ptr;
    this.KCCallbackUPP = this.KCCallbackProcPtr;
    // Dropping inline function 'NewKCCallbackUPP'.
    // Dropping inline function 'DisposeKCCallbackUPP'.
    // Dropping inline function 'InvokeKCCallbackUPP'.
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/SystemSound.h
function SystemSound_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._SYSTEMSOUND_H)
        return;
    this._SYSTEMSOUND_H = true;

    this.kSystemSoundNoError = 0;
    this.kSystemSoundUnspecifiedError = -1500;
    this.kSystemSoundClientTimedOutError = -1501;
    this.SystemSoundActionID = this.UInt32;
    this.SystemSoundCompletionProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.SystemSoundActionID, ctypes.void_t.ptr]).ptr;
    this.SystemSoundCompletionUPP = this.SystemSoundCompletionProcPtr;
    // Dropping inline function 'NewSystemSoundCompletionUPP'.
    // Dropping inline function 'DisposeSystemSoundCompletionUPP'.
    // Dropping inline function 'InvokeSystemSoundCompletionUPP'.
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/CSIdentity.h
function CSIdentity_h(lib) {
    CFBase_h.call(this, lib);
    CFError_h.call(this, lib);

    if (this._CSIDENTITY_H)
        return;
    this._CSIDENTITY_H = true;

    this.kCSIdentityUnknownAuthorityErr = -1;
    this.kCSIdentityAuthorityNotAccessibleErr = -2;
    this.kCSIdentityPermissionErr = -3;
    this.kCSIdentityDeletedErr = -4;
    this.kCSIdentityInvalidFullNameErr = -5;
    this.kCSIdentityDuplicateFullNameErr = -6;
    this.kCSIdentityInvalidPosixNameErr = -7;
    this.kCSIdentityDuplicatePosixNameErr = -8;
    this.__CSIdentity = new ctypes.StructType("__CSIdentity");
    this.CSIdentityRef = this.__CSIdentity.ptr;
    this.__CSIdentityQuery = new ctypes.StructType("__CSIdentityQuery");
    this.CSIdentityQueryRef = this.__CSIdentityQuery.ptr;
    this.kCSIdentityClassUser = 1;
    this.kCSIdentityClassGroup = 2;
    this.CSIdentityClass = this.CFIndex;
    this.kCSIdentityFlagNone = 0;
    this.kCSIdentityFlagHidden = 1;
    this.CSIdentityFlags = this.CFOptionFlags;
    this.kCSIdentityCommitCompleted = 1;
    this.CSIdentityStatusUpdatedCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CSIdentityRef, this.CFIndex, this.CFErrorRef, ctypes.void_t.ptr]).ptr;
    this.CSIdentityClientContext = new ctypes.StructType("CSIdentityClientContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: this.CFAllocatorRetainCallBack}, {release: this.CFAllocatorReleaseCallBack}, {copyDescription: this.CFAllocatorCopyDescriptionCallBack}, {statusUpdated: this.CSIdentityStatusUpdatedCallback}]);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/WSTypes.h
function WSTypes_h(lib) {
    CFBase_h.call(this, lib);

    if (this._WSTYPES_H)
        return;
    this._WSTYPES_H = true;

    this.errWSInternalError = -65793;
    this.errWSTransportError = -65794;
    this.errWSParseError = -65795;
    this.errWSTimeoutError = -65796;
    this.eWSUnknownType = 0;
    this.eWSNullType = 1;
    this.eWSBooleanType = 2;
    this.eWSIntegerType = 3;
    this.eWSDoubleType = 4;
    this.eWSStringType = 5;
    this.eWSDateType = 6;
    this.eWSDataType = 7;
    this.eWSArrayType = 8;
    this.eWSDictionaryType = 9;
    this.WSClientContextRetainCallBackProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr;
    this.WSClientContextReleaseCallBackProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.WSClientContextCopyDescriptionCallBackProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr;
    this.WSClientContext = new ctypes.StructType("WSClientContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: this.WSClientContextRetainCallBackProcPtr}, {release: this.WSClientContextReleaseCallBackProcPtr}, {copyDescription: this.WSClientContextCopyDescriptionCallBackProcPtr}]);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/Headers/CSIdentityAuthority.h
function CSIdentityAuthority_h(lib) {

    if (this._CSIDENTITYAUTHORITY_H)
        return;
    this._CSIDENTITYAUTHORITY_H = true;

    this.__CSIdentityAuthority = new ctypes.StructType("__CSIdentityAuthority");
    this.CSIdentityAuthorityRef = this.__CSIdentityAuthority.ptr;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/Security.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");

const EXPORTED_SYMBOLS = ["OSServices", "NSLCore_h", "WSMethodInvocation_h", "WSProtocolHandler_h", "Power_h", "IconStorage_h", "SCSI_h", "CSIdentityQuery_h", "KeychainCore_h", "SystemSound_h", "CSIdentity_h", "WSTypes_h", "CSIdentityAuthority_h"];

function OSServices() {
    let libpath = "/System/Library/Frameworks/CoreServices.framework/Frameworks/OSServices.framework/OSServices";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    NSLCore_h.call(this, lib);
    WSMethodInvocation_h.call(this, lib);
    WSProtocolHandler_h.call(this, lib);
    Power_h.call(this, lib);
    IconStorage_h.call(this, lib);
    SCSI_h.call(this, lib);
    CSIdentityQuery_h.call(this, lib);
    KeychainCore_h.call(this, lib);
    SystemSound_h.call(this, lib);
    CSIdentity_h.call(this, lib);
    WSTypes_h.call(this, lib);
    CSIdentityAuthority_h.call(this, lib);
}
