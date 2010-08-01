// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/ImageCapture.framework/Headers/ICAApplication.h
function ICAApplication_h(lib) {
    CFData_h.call(this, lib);
    Files_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._ICAAPPLICATION_H)
        return;
    this._ICAAPPLICATION_H = true;

    this.ICAError = this.OSErr;
    this.kICAPBVersion = 65536;
    this.kICACommunicationErr = -9900;
    this.kICADeviceNotFoundErr = -9901;
    this.kICADeviceNotOpenErr = -9902;
    this.kICAFileCorruptedErr = -9903;
    this.kICAIOPendingErr = -9904;
    this.kICAInvalidObjectErr = -9905;
    this.kICAInvalidPropertyErr = -9906;
    this.kICAIndexOutOfRangeErr = -9907;
    this.kICAPropertyTypeNotFoundErr = -9908;
    this.kICACannotYieldDevice = -9909;
    this.kICADataTypeNotFoundErr = -9910;
    this.kICADeviceMemoryAllocationErr = -9911;
    this.kICADeviceInternalErr = -9912;
    this.kICADeviceInvalidParamErr = -9913;
    this.kICADeviceAlreadyOpenErr = -9914;
    this.kICADeviceLocationIDNotFoundErr = -9915;
    this.kICADeviceGUIDNotFoundErr = -9916;
    this.kICADeviceIOServicePathNotFoundErr = -9917;
    this.kICADeviceUnsupportedErr = -9918;
    this.kICAFrameworkInternalErr = -9919;
    this.kICAExtensionInternalErr = -9920;
    this.kICAInvalidSessionErr = -9921;
    this.kICADevice = 1768121462;
    this.kICADeviceCamera = 1668117089;
    this.kICADeviceScanner = 1935892846;
    this.kICADeviceMFP = 1835429920;
    this.kICADevicePhone = 1885892462;
    this.kICADevicePDA = 1885626656;
    this.kICADeviceOther = 1685025896;
    this.kICAList = 1868720748;
    this.kICADirectory = 1684632165;
    this.kICAFile = 1718185061;
    this.kICAFileImage = 1768776039;
    this.kICAFileMovie = 1836019574;
    this.kICAFileAudio = 1635083375;
    this.kICAFileFirmware = 1718186605;
    this.kICAFileOther = 1869899877;
    this.kICAProperty = 1886547824;
    this.kICAPropertyImageWidth = 808529968;
    this.kICAPropertyImageHeight = 808529969;
    this.kICAPropertyImageBitDepth = 808529970;
    this.kICAPropertyImageDPI = 808530241;
    this.kICAPropertyImageExposureTime = 942815553;
    this.kICAPropertyImageFNumber = 942815556;
    this.kICAPropertyImageDateOriginal = 959459379;
    this.kICAPropertyImageDateDigitized = 959459380;
    this.kICAPropertyImageShutterSpeed = 959590449;
    this.kICAPropertyImageAperture = 959590450;
    this.kICAPropertyImageFlash = 959590457;
    this.kICAPropertyColorSpace = 1093677105;
    this.kICAPropertyImageFilename = 1768319340;
    this.kICAPropertyImageSize = 1769171322;
    this.kICAPropertyImageData = 1768186228;
    this.kICAPropertyImageThumbnail = 1953002861;
    this.kICAPropertyColorSyncProfile = 1886547814;
    this.kICATypeUInt8 = 1969827896;
    this.kICATypeUInt16 = 1969828150;
    this.kICATypeUInt32 = 1969828658;
    this.kICATypeUInt64 = 1969829428;
    this.kICATypeSInt16 = 1936273718;
    this.kICATypeSInt32 = 1936274226;
    this.kICATypeSInt64 = 1936274996;
    this.kICATypeFloat = 1718382433;
    this.kICATypeFixed = 1936289383;
    this.kICATypeBoolean = 1651470188;
    this.kICATypeString = 1413830740;
    this.kICATypeData = 1684108385;
    this.kICATypeThumbnail = 1953002861;
    this.kICAFlagReadWriteAccess = 1;
    this.kICAFlagReadAccess = 2;
    this.kICAButtonScan = 1935892846;
    this.kICAButtonCopy = 1668247673;
    this.kICAButtonEMail = 1835100524;
    this.kICAButtonWeb = 2003132960;
    this.kICACameraPassThruSend = 0;
    this.kICACameraPassThruReceive = 1;
    this.kICACameraPassThruNotUsed = 2;
    this.ICAPTPPassThroughPB = new ctypes.StructType("ICAPTPPassThroughPB", [{commandCode: this.UInt32}, {resultCode: this.UInt32}, {numOfInputParams: this.UInt32}, {numOfOutputParams: this.UInt32}, {params: this.UInt32.array(4)}, {dataUsageMode: this.UInt32}, {flags: this.UInt32}, {dataSize: this.UInt32}, {data: this.UInt8.array(1)}]);
    this.ICAPTPEventDataset = new ctypes.StructType("ICAPTPEventDataset", [{dataLength: this.UInt32}, {containerType: this.UInt16}, {eventCode: this.UInt16}, {transactionID: this.UInt32}, {params: this.UInt32.array(3)}]);
    this.ICAHeader = new ctypes.StructType("ICAHeader", [{err: this.ICAError}, {refcon: ctypes.unsigned_long}]);
    this.ICACompletion = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ICAHeader.ptr]).ptr;
    this.ICAImportFilterProc = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.CFDictionaryRef, ctypes.unsigned_long]).ptr;
    this.ICANotificationProc = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFStringRef, this.CFDictionaryRef]).ptr;
    this.ICAObject = this.UInt32;
    this.ICAProperty = this.UInt32;
    this.ICAConnectionID = this.UInt32;
    this.ICASessionID = this.UInt32;
    this.ICAScannerSessionID = this.ICASessionID;
    this.ICAEventDataCookie = this.UInt32;
    this.ICAObjectInfo = new ctypes.StructType("ICAObjectInfo", [{objectType: this.OSType}, {objectSubtype: this.OSType}]);
    this.kICAAllowMultipleImages = 1;
    this.kICADownloadAndReturnPathArray = 2;
    this.ICAImportImagePB = new ctypes.StructType("ICAImportImagePB", [{header: this.ICAHeader}, {deviceObject: this.ICAObject}, {flags: this.UInt32}, {supportedFileTypes: this.CFArrayRef}, {filterProc: this.ICAImportFilterProc}, {importedImages: this.CFArrayRef.ptr}]);
    this.ICAImportImage = lib.declare("ICAImportImage", ctypes.default_abi, this.ICAError, this.ICAImportImagePB.ptr, this.ICACompletion);
    this.ICAShowDeviceBrowser = lib.declare("ICAShowDeviceBrowser", ctypes.default_abi, this.ICAError, this.CFDictionaryRef);
    this.ICANotification = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFStringRef, this.CFDictionaryRef]).ptr;
    this.ICARegisterForEventNotificationPB = new ctypes.StructType("ICARegisterForEventNotificationPB", [{header: this.ICAHeader}, {objectOfInterest: this.ICAObject}, {eventsOfInterest: this.CFArrayRef}, {notificationProc: this.ICANotification}, {options: this.CFDictionaryRef}]);
    this.ICARegisterForEventNotification = lib.declare("ICARegisterForEventNotification", ctypes.default_abi, this.ICAError, this.ICARegisterForEventNotificationPB.ptr, this.ICACompletion);
    this.ICASendNotificationPB = new ctypes.StructType("ICASendNotificationPB", [{header: this.ICAHeader}, {notificationDictionary: this.CFMutableDictionaryRef}, {replyCode: this.UInt32}]);
    this.ICASendNotification = lib.declare("ICASendNotification", ctypes.default_abi, this.ICAError, this.ICASendNotificationPB.ptr);
    this.ICASendNotificationAndWaitForReply = lib.declare("ICASendNotificationAndWaitForReply", ctypes.default_abi, this.ICAError, this.ICASendNotificationPB.ptr);
    this.ICAGetDeviceListPB = new ctypes.StructType("ICAGetDeviceListPB", [{header: this.ICAHeader}, {object: this.ICAObject}]);
    this.ICAGetDeviceList = lib.declare("ICAGetDeviceList", ctypes.default_abi, this.ICAError, this.ICAGetDeviceListPB.ptr, this.ICACompletion);
    this.ICACopyObjectPropertyDictionaryPB = new ctypes.StructType("ICACopyObjectPropertyDictionaryPB", [{header: this.ICAHeader}, {object: this.ICAObject}, {theDict: this.CFDictionaryRef.ptr}]);
    this.ICACopyObjectPropertyDictionary = lib.declare("ICACopyObjectPropertyDictionary", ctypes.default_abi, this.ICAError, this.ICACopyObjectPropertyDictionaryPB.ptr, this.ICACompletion);
    this.kICAThumbnailFormatJPEG = 1785750887;
    this.kICAThumbnailFormatTIFF = 1953064550;
    this.kICAThumbnailFormatPNG = 1886283552;
    this.ICACopyObjectThumbnailPB = new ctypes.StructType("ICACopyObjectThumbnailPB", [{header: this.ICAHeader}, {object: this.ICAObject}, {thumbnailFormat: this.OSType}, {thumbnailData: this.CFDataRef.ptr}]);
    this.ICACopyObjectThumbnail = lib.declare("ICACopyObjectThumbnail", ctypes.default_abi, this.ICAError, this.ICACopyObjectThumbnailPB.ptr, this.ICACompletion);
    this.ICACopyObjectDataPB = new ctypes.StructType("ICACopyObjectDataPB", []);
    this.ICACopyObjectData = lib.declare("ICACopyObjectData", ctypes.default_abi, this.ICAError, this.ICACopyObjectDataPB.ptr, this.ICACompletion);
    this.ICAMessage = new ctypes.StructType("ICAMessage", [{messageType: this.OSType}, {startByte: this.UInt32}, {dataPtr: ctypes.void_t.ptr}, {dataSize: this.UInt32}, {dataType: this.OSType}]);
    this.kICAMessageConnect = 1869636974;
    this.kICAMessageDisconnect = 1668050803;
    this.kICAMessageReset = 1919251301;
    this.kICAMessageCheckDevice = 1667787620;
    this.kICAMessageCameraReadClock = 1919118443;
    this.kICAMessageGetLastButtonPressed = 1651797567;
    this.kICAMessageGetEventData = 1835492708;
    this.kICAMessageDeviceYield = 2036950380;
    this.kICAMessageCameraPassThrough = 1885434739;
    this.kICAMessageScannerOverviewSelectionChanged = 1634887009;
    this.ICAObjectSendMessagePB = new ctypes.StructType("ICAObjectSendMessagePB", [{header: this.ICAHeader}, {object: this.ICAObject}, {message: this.ICAMessage}, {result: this.UInt32}]);
    this.ICAObjectSendMessage = lib.declare("ICAObjectSendMessage", ctypes.default_abi, this.ICAError, this.ICAObjectSendMessagePB.ptr, this.ICACompletion);
    this.kDeleteAfterDownload = 1;
    this.kCreateCustomIcon = 2;
    this.kAddMetaDataToFinderComment = 4;
    this.kAdjustCreationDate = 8;
    this.kSetFileTypeAndCreator = 16;
    this.kRotateImage = 64;
    this.kDontEmbedColorSyncProfile = 128;
    this.ICADownloadFilePB = new ctypes.StructType("ICADownloadFilePB", [{header: this.ICAHeader}, {object: this.ICAObject}, {dirFSRef: this.FSRef.ptr}, {flags: this.UInt32}, {fileType: this.OSType}, {fileCreator: this.OSType}, {rotationAngle: this.Fixed}, {fileFSRef: this.FSRef.ptr}]);
    this.ICADownloadFile = lib.declare("ICADownloadFile", ctypes.default_abi, this.ICAError, this.ICADownloadFilePB.ptr, this.ICACompletion);
    this.kICAUploadFileAsIs = 0;
    this.kICAUploadFileScaleToFit = 1;
    this.ICAUploadFilePB = new ctypes.StructType("ICAUploadFilePB", [{header: this.ICAHeader}, {parentObject: this.ICAObject}, {fileFSRef: this.FSRef.ptr}, {flags: this.UInt32}]);
    this.ICAUploadFile = lib.declare("ICAUploadFile", ctypes.default_abi, this.ICAError, this.ICAUploadFilePB.ptr, this.ICACompletion);
    this.ICALoadDeviceModulePB = new ctypes.StructType("ICALoadDeviceModulePB", [{header: this.ICAHeader}, {paramDictionary: this.CFDictionaryRef}]);
    this.ICALoadDeviceModule = lib.declare("ICALoadDeviceModule", ctypes.default_abi, this.ICAError, this.ICALoadDeviceModulePB.ptr, this.ICACompletion);
    this.ICAUnloadDeviceModulePB = new ctypes.StructType("ICAUnloadDeviceModulePB", [{header: this.ICAHeader}, {deviceObject: this.ICAObject}]);
    this.ICAUnloadDeviceModule = lib.declare("ICAUnloadDeviceModule", ctypes.default_abi, this.ICAError, this.ICAUnloadDeviceModulePB.ptr, this.ICACompletion);
    this.ICAOpenSessionPB = new ctypes.StructType("ICAOpenSessionPB", [{header: this.ICAHeader}, {deviceObject: this.ICAObject}, {sessionID: this.ICASessionID}]);
    this.ICAOpenSession = lib.declare("ICAOpenSession", ctypes.default_abi, this.ICAError, this.ICAOpenSessionPB.ptr, this.ICACompletion);
    this.ICACloseSessionPB = new ctypes.StructType("ICACloseSessionPB", [{header: this.ICAHeader}, {sessionID: this.ICASessionID}]);
    this.ICACloseSession = lib.declare("ICACloseSession", ctypes.default_abi, this.ICAError, this.ICACloseSessionPB.ptr, this.ICACompletion);
    this.ICAScannerOpenSessionPB = new ctypes.StructType("ICAScannerOpenSessionPB", [{header: this.ICAHeader}, {object: this.ICAObject}, {sessionID: this.ICAScannerSessionID}]);
    this.ICAScannerOpenSession = lib.declare("ICAScannerOpenSession", ctypes.default_abi, this.ICAError, this.ICAScannerOpenSessionPB.ptr, this.ICACompletion);
    this.ICAScannerCloseSessionPB = new ctypes.StructType("ICAScannerCloseSessionPB", [{header: this.ICAHeader}, {sessionID: this.ICAScannerSessionID}]);
    this.ICAScannerCloseSession = lib.declare("ICAScannerCloseSession", ctypes.default_abi, this.ICAError, this.ICAScannerCloseSessionPB.ptr, this.ICACompletion);
    this.ICAScannerInitializePB = new ctypes.StructType("ICAScannerInitializePB", [{header: this.ICAHeader}, {sessionID: this.ICAScannerSessionID}]);
    this.ICAScannerInitialize = lib.declare("ICAScannerInitialize", ctypes.default_abi, this.ICAError, this.ICAScannerInitializePB.ptr, this.ICACompletion);
    this.ICAScannerGetParametersPB = new ctypes.StructType("ICAScannerGetParametersPB", [{header: this.ICAHeader}, {sessionID: this.ICAScannerSessionID}, {theDict: this.CFMutableDictionaryRef}]);
    this.ICAScannerGetParameters = lib.declare("ICAScannerGetParameters", ctypes.default_abi, this.ICAError, this.ICAScannerGetParametersPB.ptr, this.ICACompletion);
    this.ICAScannerSetParametersPB = new ctypes.StructType("ICAScannerSetParametersPB", [{header: this.ICAHeader}, {sessionID: this.ICAScannerSessionID}, {theDict: this.CFMutableDictionaryRef}]);
    this.ICAScannerSetParameters = lib.declare("ICAScannerSetParameters", ctypes.default_abi, this.ICAError, this.ICAScannerSetParametersPB.ptr, this.ICACompletion);
    this.ICAScannerStatusPB = new ctypes.StructType("ICAScannerStatusPB", [{header: this.ICAHeader}, {sessionID: this.ICAScannerSessionID}, {status: this.UInt32}]);
    this.ICAScannerStatus = lib.declare("ICAScannerStatus", ctypes.default_abi, this.ICAError, this.ICAScannerStatusPB.ptr, this.ICACompletion);
    this.ICAScannerStartPB = new ctypes.StructType("ICAScannerStartPB", [{header: this.ICAHeader}, {sessionID: this.ICAScannerSessionID}]);
    this.ICAScannerStart = lib.declare("ICAScannerStart", ctypes.default_abi, this.ICAError, this.ICAScannerStartPB.ptr, this.ICACompletion);
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/ImageCapture.framework/Headers/ICADevice.h
function ICADevice_h(lib) {
    ICAApplication_h.call(this, lib);

    if (this._ICADEVICE_H)
        return;
    this._ICADEVICE_H = true;

    this.ICDHeader = new ctypes.StructType("ICDHeader", [{err: this.ICAError}, {refcon: ctypes.unsigned_long}]);
    this.ICDCompletion = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ICDHeader.ptr]).ptr;
    this.ICD_NewObjectPB = new ctypes.StructType("ICD_NewObjectPB", [{header: this.ICDHeader}, {parentObject: this.ICAObject}, {objectInfo: this.ICAObjectInfo}, {object: this.ICAObject}]);
    this.ICDNewObject = lib.declare("ICDNewObject", ctypes.default_abi, this.ICAError, this.ICD_NewObjectPB.ptr, this.ICDCompletion);
    this.ICD_DisposeObjectPB = new ctypes.StructType("ICD_DisposeObjectPB", [{header: this.ICDHeader}, {object: this.ICAObject}]);
    this.ICDDisposeObject = lib.declare("ICDDisposeObject", ctypes.default_abi, this.ICAError, this.ICD_DisposeObjectPB.ptr, this.ICDCompletion);
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/ImageCapture.framework/Headers/ICACamera.h
function ICACamera_h(lib) {

    if (this._ICACAMERA_H)
        return;
    this._ICACAMERA_H = true;

    this.kICAPropertyCameraStorageType = 1937010546;
    this.kICAPropertyCameraFilesystemType = 1718843763;
    this.kICAPropertyCameraAccessCapability = 1633902960;
    this.kICAPropertyCameraMaxCapacity = 1835104355;
    this.kICAPropertyCameraFreeSpaceInBytes = 1718773107;
    this.kICAPropertyCameraFreeSpaceInImages = 1718773097;
    this.kICAPropertyCameraStorageDescription = 1937010532;
    this.kICAPropertyCameraVolumeLabel = 1987013740;
    this.kICAStorageUndefined = 0;
    this.kICAStorageFixedROM = 1;
    this.kICAStorageRemovableROM = 2;
    this.kICAStorageFixedRAM = 3;
    this.kICAStorageRemovableRAM = 4;
    this.kICAFileystemUndefined = 0;
    this.kICAFileystemGenericFlat = 1;
    this.kICAFileystemGenericHierarchical = 2;
    this.kICAFileystemDCF = 3;
    this.kICAAccessReadWrite = 0;
    this.kICAAccessReadOnly = 1;
    this.kICAAccessReadOnlyWithObjectDeletion = 2;
    this.kICAPropertyCameraBatteryLevel = 892350513;
    this.kICAPropertyCameraFunctionalMode = 892350514;
    this.kICAPropertyCameraImageSize = 892350515;
    this.kICAPropertyCameraCompressionSetting = 892350516;
    this.kICAPropertyCameraWhiteBalance = 892350517;
    this.kICAPropertyCameraRGBGain = 892350518;
    this.kICAPropertyCameraFNumber = 892350519;
    this.kICAPropertyCameraFocalLength = 892350520;
    this.kICAPropertyCameraFocusDistance = 892350521;
    this.kICAPropertyCameraFocusMode = 892350529;
    this.kICAPropertyCameraExposureMeteringMode = 892350530;
    this.kICAPropertyCameraFlashMode = 892350531;
    this.kICAPropertyCameraExposureTime = 892350532;
    this.kICAPropertyCameraExposureProgramMode = 892350533;
    this.kICAPropertyCameraExposureIndex = 892350534;
    this.kICAPropertyCameraExposureBiasCompensation = 892350768;
    this.kICAPropertyCameraDateTime = 892350769;
    this.kICAPropertyCameraCaptureDelay = 892350770;
    this.kICAPropertyCameraStillCaptureMode = 892350771;
    this.kICAPropertyCameraContrast = 892350772;
    this.kICAPropertyCameraSharpness = 892350773;
    this.kICAPropertyCameraDigitalZoom = 892350774;
    this.kICAPropertyCameraEffectMode = 892350775;
    this.kICAPropertyCameraBurstNumber = 892350776;
    this.kICAPropertyCameraBurstInterval = 892350777;
    this.kICAPropertyCameraTimelapseNumber = 892350785;
    this.kICAPropertyCameraTimelapseInterval = 892350786;
    this.kICAPropertyCameraFocusMeteringMode = 892350787;
    this.kICAPropertyCameraUploadURL = 892350788;
    this.kICAPropertyCameraArtist = 892350789;
    this.kICAPropertyCameraCopyrightInfo = 892350790;
    this.kICAPropertyCameraIcon = 1768124270;
    this.kICAPropertyCameraSupportedMessages = 1836279667;
    this.kICAMessageCameraCaptureNewImage = 1667460713;
    this.kICAMessageCameraDeleteOne = 1684368433;
    this.kICAMessageCameraDeleteAll = 1684368481;
    this.kICAMessageCameraSyncClock = 1935895659;
    this.kICAMessageCameraUploadData = 1819238756;
    this.kICACapabilityCanCameraCaptureNewImage = 1667460713;
    this.kICACapabilityCanCameraDeleteOne = 1684368433;
    this.kICACapabilityCanCameraDeleteAll = 1684368481;
    this.kICACapabilityCanCameraSyncClock = 1935895659;
    this.kICACapabilityCanCameraUploadData = 1819238756;
    this.kICACapabilityMayStoreNewImagesInTempStore = 1952804208;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["ImageCapture", "ICAApplication_h", "ICADevice_h", "ICACamera_h"];

function ImageCapture() {
    let libpath = "/System/Library/Frameworks/Carbon.framework/Frameworks/ImageCapture.framework/ImageCapture";
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

    ICAApplication_h.call(this, lib);
    ICADevice_h.call(this, lib);
    ICACamera_h.call(this, lib);
}
