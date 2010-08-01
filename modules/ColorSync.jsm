// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ColorSync.framework/Headers/ColorSyncDevice.h
function ColorSyncDevice_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFUUID_h.call(this, lib);

    if (this._COLORSYNCDEVICE_H)
        return;
    this._COLORSYNCDEVICE_H = true;

    // Dropping declaration of 'kColorSyncDeviceID': No value
    // Dropping declaration of 'kColorSyncDeviceClass': No value
    // Dropping declaration of 'kColorSyncCameraDeviceClass': No value
    // Dropping declaration of 'kColorSyncDisplayDeviceClass': No value
    // Dropping declaration of 'kColorSyncPrinterDeviceClass': No value
    // Dropping declaration of 'kColorSyncScannerDeviceClass': No value
    // Dropping declaration of 'kColorSyncDeviceProfileURL': No value
    // Dropping declaration of 'kColorSyncDeviceDescription': No value
    // Dropping declaration of 'kColorSyncDeviceDescriptions': No value
    // Dropping declaration of 'kColorSyncFactoryProfiles': No value
    // Dropping declaration of 'kColorSyncCustomProfiles': No value
    // Dropping declaration of 'kColorSyncDeviceModeDescription': No value
    // Dropping declaration of 'kColorSyncDeviceModeDescriptions': No value
    // Dropping declaration of 'kColorSyncDeviceDefaultProfileID': No value
    // Dropping declaration of 'kColorSyncDeviceHostScope': No value
    // Dropping declaration of 'kColorSyncDeviceUserScope': No value
    // Dropping declaration of 'kColorSyncProfileHostScope': No value
    // Dropping declaration of 'kColorSyncProfileUserScope': No value
    // Dropping declaration of 'kColorSyncDeviceProfileIsFactory': No value
    // Dropping declaration of 'kColorSyncDeviceProfileIsDefault': No value
    // Dropping declaration of 'kColorSyncDeviceProfileIsCurrent': No value
    // Dropping declaration of 'kColorSyncDeviceProfileID': No value
    // Dropping declaration of 'kColorSyncDeviceRegisteredNotification': No value
    // Dropping declaration of 'kColorSyncDeviceUnregisteredNotification': No value
    // Dropping declaration of 'kColorSyncDeviceProfilesNotification': No value
    // Dropping declaration of 'kColorSyncDisplayDeviceProfilesNotification': No value
    // Dropping declaration of 'ColorSyncRegisterDevice': Unknown type bool_t
    // Dropping declaration of 'ColorSyncUnregisterDevice': Unknown type bool_t
    // Dropping declaration of 'ColorSyncDeviceSetCustomProfiles': Unknown type bool_t
    this.ColorSyncDeviceCopyDeviceInfo = lib.declare("ColorSyncDeviceCopyDeviceInfo", ctypes.default_abi, this.CFDictionaryRef, this.CFStringRef, this.CFUUIDRef);
    // Dropping declaration of 'ColorSyncDeviceProfileIterateCallback': Unknown type bool_t
    this.ColorSyncIterateDeviceProfiles = lib.declare("ColorSyncIterateDeviceProfiles", ctypes.default_abi, ctypes.void_t, this.ColorSyncDeviceProfileIterateCallback, ctypes.void_t.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ColorSync.framework/Headers/ColorSyncDeprecated.h
function ColorSyncDeprecated_h(lib) {
    CFData_h.call(this, lib);
    Files_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._COLORSYNCDEPRECATED_H)
        return;
    this._COLORSYNCDEPRECATED_H = true;

    this.cmICCProfileVersion4 = 67108864;
    this.cmICCProfileVersion2 = 33554432;
    this.cmICCProfileVersion21 = 34603008;
    this.cmCS2ProfileVersion = 33554432;
    this.cmCS1ProfileVersion = 256;
    this.cmProfileMajorVersionMask = -16777216;
    this.cmCurrentProfileMajorVersion = 33554432;
    this.cmMagicNumber = 1633907568;
    this.cmICCReservedFlagsMask = 65535;
    this.cmEmbeddedMask = 1;
    this.cmEmbeddedUseMask = 2;
    this.cmBlackPointCompensationMask = 4;
    this.cmCMSReservedFlagsMask = -65536;
    this.cmQualityMask = 196608;
    this.cmInterpolationMask = 262144;
    this.cmGamutCheckingMask = 524288;
    this.cmEmbeddedProfile = 0;
    this.cmEmbeddedUse = 1;
    this.cmNormalMode = 0;
    this.cmDraftMode = 1;
    this.cmBestMode = 2;
    this.cmBlackPointCompensation = 1;
    this.cmReflectiveTransparentMask = 1;
    this.cmGlossyMatteMask = 2;
    this.cmReflective = 0;
    this.cmGlossy = 1;
    this.cmPerceptual = 0;
    this.cmRelativeColorimetric = 1;
    this.cmSaturation = 2;
    this.cmAbsoluteColorimetric = 3;
    this.cmAsciiData = 0;
    this.cmBinaryData = 1;
    this.cmPrtrDefaultScreens = 0;
    this.cmLinesPer = 1;
    this.cmNumHeaderElements = 10;
    this.cmAToB0Tag = 1093812784;
    this.cmAToB1Tag = 1093812785;
    this.cmAToB2Tag = 1093812786;
    this.cmBlueColorantTag = 1649957210;
    this.cmBlueTRCTag = 1649693251;
    this.cmBToA0Tag = 1110589744;
    this.cmBToA1Tag = 1110589745;
    this.cmBToA2Tag = 1110589746;
    this.cmCalibrationDateTimeTag = 1667329140;
    this.cmChromaticAdaptationTag = 1667785060;
    this.cmCharTargetTag = 1952543335;
    this.cmCopyrightTag = 1668313716;
    this.cmDeviceMfgDescTag = 1684893284;
    this.cmDeviceModelDescTag = 1684890724;
    this.cmGamutTag = 1734438260;
    this.cmGrayTRCTag = 1800688195;
    this.cmGreenColorantTag = 1733843290;
    this.cmGreenTRCTag = 1733579331;
    this.cmLuminanceTag = 1819635049;
    this.cmMeasurementTag = 1835360627;
    this.cmMediaBlackPointTag = 1651208308;
    this.cmMediaWhitePointTag = 2004119668;
    this.cmNamedColorTag = 1852010348;
    this.cmNamedColor2Tag = 1852009522;
    this.cmPreview0Tag = 1886545200;
    this.cmPreview1Tag = 1886545201;
    this.cmPreview2Tag = 1886545202;
    this.cmProfileDescriptionTag = 1684370275;
    this.cmProfileSequenceDescTag = 1886610801;
    this.cmPS2CRD0Tag = 1886610480;
    this.cmPS2CRD1Tag = 1886610481;
    this.cmPS2CRD2Tag = 1886610482;
    this.cmPS2CRD3Tag = 1886610483;
    this.cmPS2CSATag = 1886597747;
    this.cmPS2RenderingIntentTag = 1886597737;
    this.cmRedColorantTag = 1918392666;
    this.cmRedTRCTag = 1918128707;
    this.cmScreeningDescTag = 1935897188;
    this.cmScreeningTag = 1935897198;
    this.cmTechnologyTag = 1952801640;
    this.cmUcrBgTag = 1650877472;
    this.cmViewingConditionsDescTag = 1987405156;
    this.cmViewingConditionsTag = 1986618743;
    this.cmPS2CRDVMSizeTag = 1886615149;
    this.cmVideoCardGammaTag = 1986226036;
    this.cmMakeAndModelTag = 1835888484;
    this.cmProfileDescriptionMLTag = 1685283693;
    this.cmNativeDisplayInfoTag = 1852074350;
    this.cmSigCrdInfoType = 1668441193;
    this.cmSigCurveType = 1668641398;
    this.cmSigDataType = 1684108385;
    this.cmSigDateTimeType = 1685350765;
    this.cmSigLut16Type = 1835430962;
    this.cmSigLut8Type = 1835430961;
    this.cmSigMeasurementType = 1835360627;
    this.cmSigMultiFunctA2BType = 1832993312;
    this.cmSigMultiFunctB2AType = 1833058592;
    this.cmSigNamedColorType = 1852010348;
    this.cmSigNamedColor2Type = 1852009522;
    this.cmSigParametricCurveType = 1885434465;
    this.cmSigProfileDescriptionType = 1684370275;
    this.cmSigProfileSequenceDescType = 1886610801;
    this.cmSigScreeningType = 1935897198;
    this.cmSigS15Fixed16Type = 1936077618;
    this.cmSigSignatureType = 1936287520;
    this.cmSigTextType = 1952807028;
    this.cmSigU16Fixed16Type = 1969632050;
    this.cmSigU1Fixed15Type = 1969631542;
    this.cmSigUInt8Type = 1969827896;
    this.cmSigUInt16Type = 1969828150;
    this.cmSigUInt32Type = 1969828658;
    this.cmSigUInt64Type = 1969829428;
    this.cmSigUcrBgType = 1650877472;
    this.cmSigUnicodeTextType = 1970567284;
    this.cmSigViewingConditionsType = 1986618743;
    this.cmSigXYZType = 1482250784;
    this.cmSigPS2CRDVMSizeType = 1886615149;
    this.cmSigVideoCardGammaType = 1986226036;
    this.cmSigMakeAndModelType = 1835888484;
    this.cmSigNativeDisplayInfoType = 1852074350;
    this.cmSigMultiLocalizedUniCodeType = 1835824483;
    this.cmTechnologyDigitalCamera = 1684234605;
    this.cmTechnologyFilmScanner = 1718838126;
    this.cmTechnologyReflectiveScanner = 1920164718;
    this.cmTechnologyInkJetPrinter = 1768580468;
    this.cmTechnologyThermalWaxPrinter = 1953980792;
    this.cmTechnologyElectrophotographicPrinter = 1701865583;
    this.cmTechnologyElectrostaticPrinter = 1702065249;
    this.cmTechnologyDyeSublimationPrinter = 1685288290;
    this.cmTechnologyPhotographicPaperPrinter = 1919969391;
    this.cmTechnologyFilmWriter = 1718645358;
    this.cmTechnologyVideoMonitor = 1986618477;
    this.cmTechnologyVideoCamera = 1986618467;
    this.cmTechnologyProjectionTelevision = 1886024822;
    this.cmTechnologyCRTDisplay = 1129468960;
    this.cmTechnologyPMDisplay = 1347240992;
    this.cmTechnologyAMDisplay = 1095582752;
    this.cmTechnologyPhotoCD = 1263551300;
    this.cmTechnologyPhotoImageSetter = 1768777587;
    this.cmTechnologyGravure = 1735549302;
    this.cmTechnologyOffsetLithography = 1868981875;
    this.cmTechnologySilkscreen = 1936288875;
    this.cmTechnologyFlexography = 1718379896;
    this.cmFlare0 = 0;
    this.cmFlare100 = 1;
    this.cmGeometryUnknown = 0;
    this.cmGeometry045or450 = 1;
    this.cmGeometry0dord0 = 2;
    this.cmStdobsUnknown = 0;
    this.cmStdobs1931TwoDegrees = 1;
    this.cmStdobs1964TenDegrees = 2;
    this.cmIlluminantUnknown = 0;
    this.cmIlluminantD50 = 1;
    this.cmIlluminantD65 = 2;
    this.cmIlluminantD93 = 3;
    this.cmIlluminantF2 = 4;
    this.cmIlluminantD55 = 5;
    this.cmIlluminantA = 6;
    this.cmIlluminantEquiPower = 7;
    this.cmIlluminantF8 = 8;
    this.cmSpotFunctionUnknown = 0;
    this.cmSpotFunctionDefault = 1;
    this.cmSpotFunctionRound = 2;
    this.cmSpotFunctionDiamond = 3;
    this.cmSpotFunctionEllipse = 4;
    this.cmSpotFunctionLine = 5;
    this.cmSpotFunctionSquare = 6;
    this.cmSpotFunctionCross = 7;
    this.cmXYZData = 1482250784;
    this.cmLabData = 1281450528;
    this.cmLuvData = 1282766368;
    this.cmYCbCrData = 1497588338;
    this.cmYxyData = 1501067552;
    this.cmRGBData = 1380401696;
    this.cmSRGBData = 1934772034;
    this.cmGrayData = 1196573017;
    this.cmHSVData = 1213421088;
    this.cmHLSData = 1212961568;
    this.cmCMYKData = 1129142603;
    this.cmCMYData = 1129142560;
    this.cmMCH5Data = 1296255029;
    this.cmMCH6Data = 1296255030;
    this.cmMCH7Data = 1296255031;
    this.cmMCH8Data = 1296255032;
    this.cm3CLRData = 860048466;
    this.cm4CLRData = 876825682;
    this.cm5CLRData = 893602898;
    this.cm6CLRData = 910380114;
    this.cm7CLRData = 927157330;
    this.cm8CLRData = 943934546;
    this.cm9CLRData = 960711762;
    this.cm10CLRData = 1094929490;
    this.cm11CLRData = 1111706706;
    this.cm12CLRData = 1128483922;
    this.cm13CLRData = 1145261138;
    this.cm14CLRData = 1162038354;
    this.cm15CLRData = 1178815570;
    this.cmNamedData = 1312902469;
    this.cmInputClass = 1935896178;
    this.cmDisplayClass = 1835955314;
    this.cmOutputClass = 1886549106;
    this.cmLinkClass = 1818848875;
    this.cmAbstractClass = 1633842036;
    this.cmColorSpaceClass = 1936744803;
    this.cmNamedColorClass = 1852662636;
    this.cmMacintosh = 1095782476;
    this.cmMicrosoft = 1297303124;
    this.cmSolaris = 1398099543;
    this.cmSiliconGraphics = 1397180704;
    this.cmTaligent = 1413959252;
    this.cmParametricType0 = 0;
    this.cmParametricType1 = 1;
    this.cmParametricType2 = 2;
    this.cmParametricType3 = 3;
    this.cmParametricType4 = 4;
    this.cmCS1ChromTag = 1667789421;
    this.cmCS1TRCTag = 1953653536;
    this.cmCS1NameTag = 1851878757;
    this.cmCS1CustTag = 1668641652;
    this.CMDateTime = new ctypes.StructType("CMDateTime", [{year: this.UInt16}, {month: this.UInt16}, {dayOfTheMonth: this.UInt16}, {hours: this.UInt16}, {minutes: this.UInt16}, {seconds: this.UInt16}]);
    this.CMFixedXYColor = new ctypes.StructType("CMFixedXYColor", [{x: this.Fixed}, {y: this.Fixed}]);
    this.CMFixedXYZColor = new ctypes.StructType("CMFixedXYZColor", [{X: this.Fixed}, {Y: this.Fixed}, {Z: this.Fixed}]);
    this.CMXYZComponent = this.UInt16;
    this.CMXYZColor = new ctypes.StructType("CMXYZColor", [{X: this.CMXYZComponent}, {Y: this.CMXYZComponent}, {Z: this.CMXYZComponent}]);
    this.CMProfileMD5 = ctypes.unsigned_char.array(16);
    this.CMProfileMD5Ptr = this.CMProfileMD5.ptr;
    // Dropping inline function 'CMProfileMD5AreEqual'.
    this.CM2Header = new ctypes.StructType("CM2Header", [{size: this.UInt32}, {CMMType: this.OSType}, {profileVersion: this.UInt32}, {profileClass: this.OSType}, {dataColorSpace: this.OSType}, {profileConnectionSpace: this.OSType}, {dateTime: this.CMDateTime}, {CS2profileSignature: this.OSType}, {platform: this.OSType}, {flags: this.UInt32}, {deviceManufacturer: this.OSType}, {deviceModel: this.UInt32}, {deviceAttributes: this.UInt32.array(2)}, {renderingIntent: this.UInt32}, {white: this.CMFixedXYZColor}, {creator: this.OSType}, {reserved: ctypes.char.array(44)}]);
    this.CM4Header = new ctypes.StructType("CM4Header", [{size: this.UInt32}, {CMMType: this.OSType}, {profileVersion: this.UInt32}, {profileClass: this.OSType}, {dataColorSpace: this.OSType}, {profileConnectionSpace: this.OSType}, {dateTime: this.CMDateTime}, {CS2profileSignature: this.OSType}, {platform: this.OSType}, {flags: this.UInt32}, {deviceManufacturer: this.OSType}, {deviceModel: this.UInt32}, {deviceAttributes: this.UInt32.array(2)}, {renderingIntent: this.UInt32}, {white: this.CMFixedXYZColor}, {creator: this.OSType}, {digest: this.CMProfileMD5}, {reserved: ctypes.char.array(28)}]);
    this.CMTagRecord = new ctypes.StructType("CMTagRecord", [{tag: this.OSType}, {elementOffset: this.UInt32}, {elementSize: this.UInt32}]);
    this.CMTagElemTable = new ctypes.StructType("CMTagElemTable", [{count: this.UInt32}, {tagList: this.CMTagRecord.array(1)}]);
    this.CM2Profile = new ctypes.StructType("CM2Profile", [{header: this.CM2Header}, {tagTable: this.CMTagElemTable}, {elemData: ctypes.char.array(1)}]);
    this.CM2ProfileHandle = this.CM2Profile.ptr.ptr;
    this.CM2ProfilePtr = this.CM2Profile.ptr;
    this.CMAdaptationMatrixType = new ctypes.StructType("CMAdaptationMatrixType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {adaptationMatrix: this.Fixed.array(9)}]);
    this.CMCurveType = new ctypes.StructType("CMCurveType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {countValue: this.UInt32}, {data: this.UInt16.array(1)}]);
    this.CMDataType = new ctypes.StructType("CMDataType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {dataFlag: this.UInt32}, {data: ctypes.char.array(1)}]);
    this.CMDateTimeType = new ctypes.StructType("CMDateTimeType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {dateTime: this.CMDateTime}]);
    this.CMLut16Type = new ctypes.StructType("CMLut16Type", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {inputChannels: this.UInt8}, {outputChannels: this.UInt8}, {gridPoints: this.UInt8}, {reserved2: this.UInt8}, {matrix: this.Fixed.array(3).array(3)}, {inputTableEntries: this.UInt16}, {outputTableEntries: this.UInt16}, {inputTable: this.UInt16.array(1)}]);
    this.CMLut8Type = new ctypes.StructType("CMLut8Type", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {inputChannels: this.UInt8}, {outputChannels: this.UInt8}, {gridPoints: this.UInt8}, {reserved2: this.UInt8}, {matrix: this.Fixed.array(3).array(3)}, {inputTable: this.UInt8.array(1)}]);
    this.CMMultiFunctLutType = new ctypes.StructType("CMMultiFunctLutType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {inputChannels: this.UInt8}, {outputChannels: this.UInt8}, {reserved2: this.UInt16}, {offsetBcurves: this.UInt32}, {offsetMatrix: this.UInt32}, {offsetMcurves: this.UInt32}, {offsetCLUT: this.UInt32}, {offsetAcurves: this.UInt32}, {data: this.UInt8.array(1)}]);
    this.CMMultiFunctLutB2AType = this.CMMultiFunctLutType;
    this.CMMultiFunctLutA2BType = this.CMMultiFunctLutType;
    this.CMMultiFunctCLUTType = new ctypes.StructType("CMMultiFunctCLUTType", [{gridPoints: this.UInt8.array(16)}, {entrySize: this.UInt8}, {reserved: this.UInt8.array(3)}, {data: this.UInt8.array(2)}]);
    this.CMMeasurementType = new ctypes.StructType("CMMeasurementType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {standardObserver: this.UInt32}, {backingXYZ: this.CMFixedXYZColor}, {geometry: this.UInt32}, {flare: this.UInt32}, {illuminant: this.UInt32}]);
    this.CMNamedColorType = new ctypes.StructType("CMNamedColorType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {vendorFlag: this.UInt32}, {count: this.UInt32}, {prefixName: this.UInt8.array(1)}]);
    this.CMNamedColor2EntryType = new ctypes.StructType("CMNamedColor2EntryType", [{rootName: this.UInt8.array(32)}, {PCSColorCoords: this.UInt16.array(3)}, {DeviceColorCoords: this.UInt16.array(1)}]);
    this.CMNamedColor2Type = new ctypes.StructType("CMNamedColor2Type", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {vendorFlag: this.UInt32}, {count: this.UInt32}, {deviceChannelCount: this.UInt32}, {prefixName: this.UInt8.array(32)}, {suffixName: this.UInt8.array(32)}, {data: ctypes.char.array(1)}]);
    this.CMNativeDisplayInfo = new ctypes.StructType("CMNativeDisplayInfo", [{dataSize: this.UInt32}, {redPhosphor: this.CMFixedXYColor}, {greenPhosphor: this.CMFixedXYColor}, {bluePhosphor: this.CMFixedXYColor}, {whitePoint: this.CMFixedXYColor}, {redGammaValue: this.Fixed}, {greenGammaValue: this.Fixed}, {blueGammaValue: this.Fixed}, {gammaChannels: this.UInt16}, {gammaEntryCount: this.UInt16}, {gammaEntrySize: this.UInt16}, {gammaData: ctypes.char.array(1)}]);
    this.CMNativeDisplayInfoType = new ctypes.StructType("CMNativeDisplayInfoType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {nativeDisplayInfo: this.CMNativeDisplayInfo}]);
    this.CMParametricCurveType = new ctypes.StructType("CMParametricCurveType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {functionType: this.UInt16}, {reserved2: this.UInt16}, {value: this.Fixed.array(1)}]);
    this.CMTextDescriptionType = new ctypes.StructType("CMTextDescriptionType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {ASCIICount: this.UInt32}, {ASCIIName: this.UInt8.array(2)}]);
    this.CMTextType = new ctypes.StructType("CMTextType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {text: this.UInt8.array(1)}]);
    this.CMUnicodeTextType = new ctypes.StructType("CMUnicodeTextType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {text: this.UniChar.array(1)}]);
    this.CMScreeningChannelRec = new ctypes.StructType("CMScreeningChannelRec", [{frequency: this.Fixed}, {angle: this.Fixed}, {spotFunction: this.UInt32}]);
    this.CMScreeningType = new ctypes.StructType("CMScreeningType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {screeningFlag: this.UInt32}, {channelCount: this.UInt32}, {channelInfo: this.CMScreeningChannelRec.array(1)}]);
    this.CMSignatureType = new ctypes.StructType("CMSignatureType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {signature: this.OSType}]);
    this.CMS15Fixed16ArrayType = new ctypes.StructType("CMS15Fixed16ArrayType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {value: this.Fixed.array(1)}]);
    this.CMU16Fixed16ArrayType = new ctypes.StructType("CMU16Fixed16ArrayType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {value: this.UInt32.array(1)}]);
    this.CMUInt8ArrayType = new ctypes.StructType("CMUInt8ArrayType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {value: this.UInt8.array(1)}]);
    this.CMUInt16ArrayType = new ctypes.StructType("CMUInt16ArrayType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {value: this.UInt16.array(1)}]);
    this.CMUInt32ArrayType = new ctypes.StructType("CMUInt32ArrayType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {value: this.UInt32.array(1)}]);
    this.CMUInt64ArrayType = new ctypes.StructType("CMUInt64ArrayType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {value: this.UInt32.array(1)}]);
    this.CMViewingConditionsType = new ctypes.StructType("CMViewingConditionsType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {illuminant: this.CMFixedXYZColor}, {surround: this.CMFixedXYZColor}, {stdIlluminant: this.UInt32}]);
    this.CMXYZType = new ctypes.StructType("CMXYZType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {XYZ: this.CMFixedXYZColor.array(1)}]);
    this.CMProfileSequenceDescType = new ctypes.StructType("CMProfileSequenceDescType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {count: this.UInt32}, {data: ctypes.char.array(1)}]);
    this.CMUcrBgType = new ctypes.StructType("CMUcrBgType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {ucrCount: this.UInt32}, {ucrValues: this.UInt16.array(1)}]);
    this.CMIntentCRDVMSize = new ctypes.StructType("CMIntentCRDVMSize", [{renderingIntent: this.UInt32}, {VMSize: this.UInt32}]);
    this.CMPS2CRDVMSizeType = new ctypes.StructType("CMPS2CRDVMSizeType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {count: this.UInt32}, {intentCRD: this.CMIntentCRDVMSize.array(1)}]);
    this.cmVideoCardGammaTableType = 0;
    this.cmVideoCardGammaFormulaType = 1;
    this.CMVideoCardGammaTable = new ctypes.StructType("CMVideoCardGammaTable", [{channels: this.UInt16}, {entryCount: this.UInt16}, {entrySize: this.UInt16}, {data: ctypes.char.array(1)}]);
    this.CMVideoCardGammaFormula = new ctypes.StructType("CMVideoCardGammaFormula", [{redGamma: this.Fixed}, {redMin: this.Fixed}, {redMax: this.Fixed}, {greenGamma: this.Fixed}, {greenMin: this.Fixed}, {greenMax: this.Fixed}, {blueGamma: this.Fixed}, {blueMin: this.Fixed}, {blueMax: this.Fixed}]);
    this.CMVideoCardGamma = new ctypes.StructType("CMVideoCardGamma", []);
    this.CMVideoCardGammaType = new ctypes.StructType("CMVideoCardGammaType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {gamma: this.CMVideoCardGamma}]);
    this.CMMakeAndModel = new ctypes.StructType("CMMakeAndModel", [{manufacturer: this.OSType}, {model: this.UInt32}, {serialNumber: this.UInt32}, {manufactureDate: this.UInt32}, {reserved1: this.UInt32}, {reserved2: this.UInt32}, {reserved3: this.UInt32}, {reserved4: this.UInt32}]);
    this.CMMakeAndModelType = new ctypes.StructType("CMMakeAndModelType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {makeAndModel: this.CMMakeAndModel}]);
    this.CMMultiLocalizedUniCodeEntryRec = new ctypes.StructType("CMMultiLocalizedUniCodeEntryRec", [{languageCode: ctypes.char.array(2)}, {regionCode: ctypes.char.array(2)}, {textLength: this.UInt32}, {textOffset: this.UInt32}]);
    this.CMMultiLocalizedUniCodeType = new ctypes.StructType("CMMultiLocalizedUniCodeType", [{typeDescriptor: this.OSType}, {reserved: this.UInt32}, {entryCount: this.UInt32}, {entrySize: this.UInt32}]);
    this.cmGrayResponse = 0;
    this.cmRedResponse = 1;
    this.cmGreenResponse = 2;
    this.cmBlueResponse = 3;
    this.cmCyanResponse = 4;
    this.cmMagentaResponse = 5;
    this.cmYellowResponse = 6;
    this.cmUcrResponse = 7;
    this.cmBgResponse = 8;
    this.cmOnePlusLastResponse = 9;
    this.cmMonitorDevice = 1835955314;
    this.cmScannerDevice = 1935896178;
    this.cmPrinterDevice = 1886549106;
    this.CMIString = new ctypes.StructType("CMIString", [{theScript: this.ScriptCode}, {theString: this.Str63}]);
    this.cmPerceptualMatch = 0;
    this.cmColorimetricMatch = 1;
    this.cmSaturationMatch = 2;
    this.cmNativeMatchingPreferred = 1;
    this.cmTurnOffCache = 2;
    this.CMMatchOption = this.UInt32;
    this.CMMatchFlag = this.UInt32;
    this.CMHeader = new ctypes.StructType("CMHeader", [{size: this.UInt32}, {CMMType: this.OSType}, {applProfileVersion: this.UInt32}, {dataType: this.OSType}, {deviceType: this.OSType}, {deviceManufacturer: this.OSType}, {deviceModel: this.UInt32}, {deviceAttributes: this.UInt32.array(2)}, {profileNameOffset: this.UInt32}, {customDataOffset: this.UInt32}, {flags: this.CMMatchFlag}, {options: this.CMMatchOption}, {white: this.CMXYZColor}, {black: this.CMXYZColor}]);
    this.CMProfileChromaticities = new ctypes.StructType("CMProfileChromaticities", [{red: this.CMXYZColor}, {green: this.CMXYZColor}, {blue: this.CMXYZColor}, {cyan: this.CMXYZColor}, {magenta: this.CMXYZColor}, {yellow: this.CMXYZColor}]);
    this.CMProfileResponse = new ctypes.StructType("CMProfileResponse", [{counts: this.UInt16.array(9)}, {data: this.UInt16.array(1)}]);
    this.CMProfile = new ctypes.StructType("CMProfile", [{header: this.CMHeader}, {profile: this.CMProfileChromaticities}, {response: this.CMProfileResponse}, {profileName: this.CMIString}, {customData: ctypes.char.array(1)}]);
    this.CMProfileHandle = this.CMProfile.ptr.ptr;
    this.CMProfilePtr = this.CMProfile.ptr;
    this.CMError = this.OSStatus;
    this.OpaqueCMProfileRef = new ctypes.StructType("OpaqueCMProfileRef");
    this.CMProfileRef = this.OpaqueCMProfileRef.ptr;
    this.OpaqueCMProfileSearchRef = new ctypes.StructType("OpaqueCMProfileSearchRef");
    this.CMProfileSearchRef = this.OpaqueCMProfileSearchRef.ptr;
    this.OpaqueCMMatchRef = new ctypes.StructType("OpaqueCMMatchRef");
    this.CMMatchRef = this.OpaqueCMMatchRef.ptr;
    this.OpaqueCMWorldRef = new ctypes.StructType("OpaqueCMWorldRef");
    this.CMWorldRef = this.OpaqueCMWorldRef.ptr;
    this.CMDisplayIDType = this.UInt32;
    this.CMChromaticAdaptation = this.UInt32;
    this.cmUseDefaultChromaticAdaptation = 0;
    this.cmLinearChromaticAdaptation = 1;
    this.cmVonKriesChromaticAdaptation = 2;
    this.cmBradfordChromaticAdaptation = 3;
    this.CMFlattenProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.SInt32, ctypes.long.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CMFlattenUPP = this.CMFlattenProcPtr;
    // Dropping inline function 'NewCMFlattenUPP'.
    // Dropping inline function 'InvokeCMFlattenUPP'.
    // Dropping inline function 'DisposeCMFlattenUPP'.
    this.CMBitmapCallBackProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.SInt32, ctypes.void_t.ptr]).ptr;
    this.CMBitmapCallBackUPP = this.CMBitmapCallBackProcPtr;
    // Dropping inline function 'NewCMBitmapCallBackUPP'.
    // Dropping inline function 'InvokeCMBitmapCallBackUPP'.
    // Dropping inline function 'DisposeCMBitmapCallBackUPP'.
    this.CMConcatCallBackProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.SInt32, ctypes.void_t.ptr]).ptr;
    this.CMConcatCallBackUPP = this.CMConcatCallBackProcPtr;
    // Dropping inline function 'NewCMConcatCallBackUPP'.
    // Dropping inline function 'InvokeCMConcatCallBackUPP'.
    // Dropping inline function 'DisposeCMConcatCallBackUPP'.
    this.CMProfileFilterProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.CMProfileRef, ctypes.void_t.ptr]).ptr;
    this.CMProfileFilterUPP = this.CMProfileFilterProcPtr;
    // Dropping inline function 'NewCMProfileFilterUPP'.
    // Dropping inline function 'InvokeCMProfileFilterUPP'.
    // Dropping inline function 'DisposeCMProfileFilterUPP'.
    this.CMProfileAccessProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.SInt32, this.SInt32, this.SInt32.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CMProfileAccessUPP = this.CMProfileAccessProcPtr;
    // Dropping inline function 'NewCMProfileAccessUPP'.
    // Dropping inline function 'InvokeCMProfileAccessUPP'.
    // Dropping inline function 'DisposeCMProfileAccessUPP'.
    this.kDefaultCMMSignature = 1634758764;
    this.cmBeginProfile = 220;
    this.cmEndProfile = 221;
    this.cmEnableMatching = 222;
    this.cmDisableMatching = 223;
    this.cmComment = 224;
    this.cmBeginProfileSel = 0;
    this.cmContinueProfileSel = 1;
    this.cmEndProfileSel = 2;
    this.cmProfileIdentifierSel = 3;
    this.cmMatchCMMType = 1;
    this.cmMatchApplProfileVersion = 2;
    this.cmMatchDataType = 4;
    this.cmMatchDeviceType = 8;
    this.cmMatchDeviceManufacturer = 16;
    this.cmMatchDeviceModel = 32;
    this.cmMatchDeviceAttributes = 64;
    this.cmMatchFlags = 128;
    this.cmMatchOptions = 256;
    this.cmMatchWhite = 512;
    this.cmMatchBlack = 1024;
    this.cmMatchAnyProfile = 0;
    this.cmMatchProfileCMMType = 1;
    this.cmMatchProfileClass = 2;
    this.cmMatchDataColorSpace = 4;
    this.cmMatchProfileConnectionSpace = 8;
    this.cmMatchManufacturer = 16;
    this.cmMatchModel = 32;
    this.cmMatchAttributes = 64;
    this.cmMatchProfileFlags = 128;
    this.cmPS7bit = 1;
    this.cmPS8bit = 2;
    this.cmEmbedWholeProfile = 0;
    this.cmEmbedProfileIdentifier = 1;
    this.cmOpenReadSpool = 1;
    this.cmOpenWriteSpool = 2;
    this.cmReadSpool = 3;
    this.cmWriteSpool = 4;
    this.cmCloseSpool = 5;
    this.cmOpenReadAccess = 1;
    this.cmOpenWriteAccess = 2;
    this.cmReadAccess = 3;
    this.cmWriteAccess = 4;
    this.cmCloseAccess = 5;
    this.cmCreateNewAccess = 6;
    this.cmAbortWriteAccess = 7;
    this.cmBeginAccess = 8;
    this.cmEndAccess = 9;
    this.cmInputUse = 1768845428;
    this.cmOutputUse = 1869968496;
    this.cmDisplayUse = 1685089401;
    this.cmProofUse = 1886549350;
    this.CMAppleProfileHeader = new ctypes.StructType("CMAppleProfileHeader", [{cm1: this.CMHeader}, {cm2: this.CM2Header}, {cm4: this.CM4Header}]);
    this.CMConcatProfileSet = new ctypes.StructType("CMConcatProfileSet", [{keyIndex: this.UInt16}, {count: this.UInt16}, {profileSet: this.CMProfileRef.array(1)}]);
    this.NCMConcatProfileSpec = new ctypes.StructType("NCMConcatProfileSpec", [{renderingIntent: this.UInt32}, {transformTag: this.UInt32}, {profile: this.CMProfileRef}]);
    this.NCMConcatProfileSet = new ctypes.StructType("NCMConcatProfileSet", [{cmm: this.OSType}, {flags: this.UInt32}, {flagsMask: this.UInt32}, {profileCount: this.UInt32}, {profileSpecs: this.NCMConcatProfileSpec.array(1)}]);
    this.kNoTransform = 0;
    this.kUseAtoB = 1;
    this.kUseBtoA = 2;
    this.kUseBtoB = 3;
    this.kDeviceToPCS = 1;
    this.kPCSToDevice = 2;
    this.kPCSToPCS = 3;
    this.kUseProfileIntent = -1;
    this.CMRGBColor = new ctypes.StructType("CMRGBColor", [{red: this.UInt16}, {green: this.UInt16}, {blue: this.UInt16}]);
    this.CMCMYKColor = new ctypes.StructType("CMCMYKColor", [{cyan: this.UInt16}, {magenta: this.UInt16}, {yellow: this.UInt16}, {black: this.UInt16}]);
    this.CMCMYColor = new ctypes.StructType("CMCMYColor", [{cyan: this.UInt16}, {magenta: this.UInt16}, {yellow: this.UInt16}]);
    this.CMHLSColor = new ctypes.StructType("CMHLSColor", [{hue: this.UInt16}, {lightness: this.UInt16}, {saturation: this.UInt16}]);
    this.CMHSVColor = new ctypes.StructType("CMHSVColor", [{hue: this.UInt16}, {saturation: this.UInt16}, {value: this.UInt16}]);
    this.CMLabColor = new ctypes.StructType("CMLabColor", [{L: this.UInt16}, {a: this.UInt16}, {b: this.UInt16}]);
    this.CMLuvColor = new ctypes.StructType("CMLuvColor", [{L: this.UInt16}, {u: this.UInt16}, {v: this.UInt16}]);
    this.CMYxyColor = new ctypes.StructType("CMYxyColor", [{capY: this.UInt16}, {x: this.UInt16}, {y: this.UInt16}]);
    this.CMGrayColor = new ctypes.StructType("CMGrayColor", [{gray: this.UInt16}]);
    this.CMMultichannel5Color = new ctypes.StructType("CMMultichannel5Color", [{components: this.UInt8.array(5)}]);
    this.CMMultichannel6Color = new ctypes.StructType("CMMultichannel6Color", [{components: this.UInt8.array(6)}]);
    this.CMMultichannel7Color = new ctypes.StructType("CMMultichannel7Color", [{components: this.UInt8.array(7)}]);
    this.CMMultichannel8Color = new ctypes.StructType("CMMultichannel8Color", [{components: this.UInt8.array(8)}]);
    this.CMNamedColor = new ctypes.StructType("CMNamedColor", [{namedColorIndex: this.UInt32}]);
    this.CMColor = new ctypes.StructType("CMColor", [{rgb: this.CMRGBColor}, {hsv: this.CMHSVColor}, {hls: this.CMHLSColor}, {XYZ: this.CMXYZColor}, {Lab: this.CMLabColor}, {Luv: this.CMLuvColor}, {Yxy: this.CMYxyColor}, {cmyk: this.CMCMYKColor}, {cmy: this.CMCMYColor}, {gray: this.CMGrayColor}, {mc5: this.CMMultichannel5Color}, {mc6: this.CMMultichannel6Color}, {mc7: this.CMMultichannel7Color}, {mc8: this.CMMultichannel8Color}, {namedColor: this.CMNamedColor}]);
    this.CMProfileSearchRecord = new ctypes.StructType("CMProfileSearchRecord", [{header: this.CMHeader}, {fieldMask: this.UInt32}, {reserved: this.UInt32.array(2)}]);
    this.CMProfileSearchRecordPtr = this.CMProfileSearchRecord.ptr;
    this.CMProfileSearchRecordHandle = this.CMProfileSearchRecord.ptr.ptr;
    this.CMSearchRecord = new ctypes.StructType("CMSearchRecord", [{CMMType: this.OSType}, {profileClass: this.OSType}, {dataColorSpace: this.OSType}, {profileConnectionSpace: this.OSType}, {deviceManufacturer: this.UInt32}, {deviceModel: this.UInt32}, {deviceAttributes: this.UInt32.array(2)}, {profileFlags: this.UInt32}, {searchMask: this.UInt32}, {filter: this.CMProfileFilterUPP}]);
    this.CMMInfo = new ctypes.StructType("CMMInfo", []);
    this.CMMInfoRecord = new ctypes.StructType("CMMInfoRecord", [{CMMType: this.OSType}, {CMMVersion: ctypes.long}]);
    this.CMCWInfoRecord = new ctypes.StructType("CMCWInfoRecord", [{cmmCount: this.UInt32}, {cmmInfo: this.CMMInfoRecord.array(2)}]);
    this.CMProfileIdentifier = new ctypes.StructType("CMProfileIdentifier", [{profileHeader: this.CM2Header}, {calibrationDate: this.CMDateTime}, {ASCIIProfileDescriptionLen: this.UInt32}, {ASCIIProfileDescription: ctypes.char.array(1)}]);
    this.CMProfileIdentifierPtr = this.CMProfileIdentifier.ptr;
    this.cmColorSpaceSpaceMask = 63;
    this.cmColorSpacePremulAlphaMask = 64;
    this.cmColorSpaceAlphaMask = 128;
    this.cmColorSpaceSpaceAndAlphaMask = 255;
    this.cmColorSpacePackingMask = 65280;
    this.cmColorSpaceEncodingMask = 983040;
    this.cmColorSpaceReservedMask = -1048576;
    this.cmNoColorPacking = 0;
    this.cmWord5ColorPacking = 1280;
    this.cmWord565ColorPacking = 1536;
    this.cmLong8ColorPacking = 2048;
    this.cmLong10ColorPacking = 2560;
    this.cmAlphaFirstPacking = 4096;
    this.cmOneBitDirectPacking = 2816;
    this.cmAlphaLastPacking = 0;
    this.cm8_8ColorPacking = 10240;
    this.cm16_8ColorPacking = 8192;
    this.cm24_8ColorPacking = 8448;
    this.cm32_8ColorPacking = 2048;
    this.cm40_8ColorPacking = 8704;
    this.cm48_8ColorPacking = 8960;
    this.cm56_8ColorPacking = 9216;
    this.cm64_8ColorPacking = 9472;
    this.cm32_16ColorPacking = 9728;
    this.cm48_16ColorPacking = 10496;
    this.cm64_16ColorPacking = 10752;
    this.cm32_32ColorPacking = 9984;
    this.cmLittleEndianPacking = 16384;
    this.cmReverseChannelPacking = 32768;
    this.cmSRGB16ChannelEncoding = 65536;
    this.cmNoSpace = 0;
    this.cmRGBSpace = 1;
    this.cmCMYKSpace = 2;
    this.cmHSVSpace = 3;
    this.cmHLSSpace = 4;
    this.cmYXYSpace = 5;
    this.cmXYZSpace = 6;
    this.cmLUVSpace = 7;
    this.cmLABSpace = 8;
    this.cmReservedSpace1 = 9;
    this.cmGraySpace = 10;
    this.cmReservedSpace2 = 11;
    this.cmGamutResultSpace = 12;
    this.cmNamedIndexedSpace = 16;
    this.cmMCFiveSpace = 17;
    this.cmMCSixSpace = 18;
    this.cmMCSevenSpace = 19;
    this.cmMCEightSpace = 20;
    this.cmAlphaPmulSpace = 64;
    this.cmAlphaSpace = 128;
    this.cmRGBASpace = 129;
    this.cmGrayASpace = 138;
    this.cmRGBAPmulSpace = 193;
    this.cmGrayAPmulSpace = 202;
    this.cmGray8Space = 10250;
    this.cmGray16Space = 10;
    this.cmGray16LSpace = 16394;
    this.cmGrayA16Space = 8330;
    this.cmGrayA32Space = 138;
    this.cmGrayA32LSpace = 16522;
    this.cmGrayA16PmulSpace = 8394;
    this.cmGrayA32PmulSpace = 202;
    this.cmGrayA32LPmulSpace = 16586;
    this.cmRGB16Space = 1281;
    this.cmRGB16LSpace = 17665;
    this.cmRGB565Space = 1537;
    this.cmRGB565LSpace = 17921;
    this.cmRGB24Space = 8449;
    this.cmRGB32Space = 2049;
    this.cmRGB48Space = 10497;
    this.cmRGB48LSpace = 26881;
    this.cmARGB32Space = 6273;
    this.cmARGB64Space = 14977;
    this.cmARGB64LSpace = 31361;
    this.cmRGBA32Space = 2177;
    this.cmRGBA64Space = 10881;
    this.cmRGBA64LSpace = 27265;
    this.cmARGB32PmulSpace = 6337;
    this.cmARGB64PmulSpace = 15041;
    this.cmARGB64LPmulSpace = 31425;
    this.cmRGBA32PmulSpace = 2241;
    this.cmRGBA64PmulSpace = 10945;
    this.cmRGBA64LPmulSpace = 27329;
    this.cmCMYK32Space = 2050;
    this.cmCMYK64Space = 10754;
    this.cmCMYK64LSpace = 27138;
    this.cmHSV32Space = 2563;
    this.cmHLS32Space = 2564;
    this.cmYXY32Space = 2565;
    this.cmXYZ24Space = 8454;
    this.cmXYZ32Space = 2566;
    this.cmXYZ48Space = 10502;
    this.cmXYZ48LSpace = 26886;
    this.cmLUV32Space = 2567;
    this.cmLAB24Space = 8456;
    this.cmLAB32Space = 2568;
    this.cmLAB48Space = 10504;
    this.cmLAB48LSpace = 26888;
    this.cmGamutResult1Space = 2828;
    this.cmNamedIndexed32Space = 10000;
    this.cmNamedIndexed32LSpace = 26384;
    this.cmMCFive8Space = 8721;
    this.cmMCSix8Space = 8978;
    this.cmMCSeven8Space = 9235;
    this.cmMCEight8Space = 9492;
    this.CMBitmapColorSpace = this.UInt32;
    this.CMBitmap = new ctypes.StructType("CMBitmap", []);
    this.CS_MAX_PATH = 256;
    this.cmNoProfileBase = 0;
    this.cmFileBasedProfile = 1;
    this.cmHandleBasedProfile = 2;
    this.cmPtrBasedProfile = 3;
    this.cmProcedureBasedProfile = 4;
    this.cmPathBasedProfile = 5;
    this.cmBufferBasedProfile = 6;
    this.CMFileLocation = new ctypes.StructType("CMFileLocation", [{spec: this.FSSpec}]);
    this.CMHandleLocation = new ctypes.StructType("CMHandleLocation", [{h: this.Handle}]);
    this.CMPtrLocation = new ctypes.StructType("CMPtrLocation", [{p: this.Ptr}]);
    this.CMProcedureLocation = new ctypes.StructType("CMProcedureLocation", [{proc: this.CMProfileAccessUPP}, {refCon: ctypes.void_t.ptr}]);
    this.CMPathLocation = new ctypes.StructType("CMPathLocation", [{path: ctypes.char.array(256)}]);
    this.CMBufferLocation = new ctypes.StructType("CMBufferLocation", [{buffer: ctypes.void_t.ptr}, {size: this.UInt32}]);
    this.CMProfLoc = new ctypes.StructType("CMProfLoc", [{fileLoc: this.CMFileLocation}, {handleLoc: this.CMHandleLocation}, {ptrLoc: this.CMPtrLocation}, {procLoc: this.CMProcedureLocation}, {pathLoc: this.CMPathLocation}, {bufferLoc: this.CMBufferLocation}]);
    this.CMProfileLocation = new ctypes.StructType("CMProfileLocation", [{locType: ctypes.short}, {u: this.CMProfLoc}]);
    this.cmOriginalProfileLocationSize = 72;
    this.cmCurrentProfileLocationSize = 258;
    this.cmProfileIterateDataVersion1 = 65536;
    this.cmProfileIterateDataVersion2 = 131072;
    this.cmProfileIterateDataVersion3 = 196608;
    this.cmProfileIterateDataVersion4 = 262144;
    this.CMProfileIterateData = new ctypes.StructType("CMProfileIterateData", [{dataVersion: this.UInt32}, {header: this.CM2Header}, {code: this.ScriptCode}, {name: this.Str255}, {location: this.CMProfileLocation}, {uniCodeNameCount: this.UniCharCount}, {uniCodeName: ctypes.unsigned_short.ptr}, {asciiName: ctypes.unsigned_char.ptr}, {makeAndModel: this.CMMakeAndModel.ptr}, {digest: this.CMProfileMD5.ptr}]);
    this.CMProfileIterateProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.CMProfileIterateData.ptr, ctypes.void_t.ptr]).ptr;
    this.CMProfileIterateUPP = this.CMProfileIterateProcPtr;
    // Dropping inline function 'NewCMProfileIterateUPP'.
    // Dropping inline function 'InvokeCMProfileIterateUPP'.
    // Dropping inline function 'DisposeCMProfileIterateUPP'.
    this.CMMIterateProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.CMMInfo.ptr, ctypes.void_t.ptr]).ptr;
    this.CMMIterateUPP = this.CMMIterateProcPtr;
    // Dropping inline function 'NewCMMIterateUPP'.
    // Dropping inline function 'InvokeCMMIterateUPP'.
    // Dropping inline function 'DisposeCMMIterateUPP'.
    this.CMLabToLabProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.float.ptr, ctypes.float.ptr, ctypes.float.ptr, ctypes.void_t.ptr]).ptr;
    this.CMNewProfile = lib.declare("CMNewProfile", ctypes.default_abi, this.CMError, this.CMProfileRef.ptr, this.CMProfileLocation.ptr);
    this.CWNewLinkProfile = lib.declare("CWNewLinkProfile", ctypes.default_abi, this.CMError, this.CMProfileRef.ptr, this.CMProfileLocation.ptr, this.CMConcatProfileSet.ptr);
    this.NCWNewLinkProfile = lib.declare("NCWNewLinkProfile", ctypes.default_abi, this.CMError, this.CMProfileRef.ptr, this.CMProfileLocation.ptr, this.NCMConcatProfileSet.ptr, this.CMConcatCallBackUPP, ctypes.void_t.ptr);
    this.CMMakeProfile = lib.declare("CMMakeProfile", ctypes.default_abi, this.CMError, this.CMProfileRef, this.CFDictionaryRef);
    this.CMOpenProfile = lib.declare("CMOpenProfile", ctypes.default_abi, this.CMError, this.CMProfileRef.ptr, this.CMProfileLocation.ptr);
    this.CMCloseProfile = lib.declare("CMCloseProfile", ctypes.default_abi, this.CMError, this.CMProfileRef);
    this.CMUpdateProfile = lib.declare("CMUpdateProfile", ctypes.default_abi, this.CMError, this.CMProfileRef);
    this.CMCopyProfile = lib.declare("CMCopyProfile", ctypes.default_abi, this.CMError, this.CMProfileRef.ptr, this.CMProfileLocation.ptr, this.CMProfileRef);
    this.CMValidateProfile = lib.declare("CMValidateProfile", ctypes.default_abi, this.CMError, this.CMProfileRef, this.Boolean.ptr, this.Boolean.ptr);
    this.CMGetProfileLocation = lib.declare("CMGetProfileLocation", ctypes.default_abi, this.CMError, this.CMProfileRef, this.CMProfileLocation.ptr);
    this.NCMGetProfileLocation = lib.declare("NCMGetProfileLocation", ctypes.default_abi, this.CMError, this.CMProfileRef, this.CMProfileLocation.ptr, this.UInt32.ptr);
    this.CMProfileCopyICCData = lib.declare("CMProfileCopyICCData", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CMProfileRef);
    this.CMFlattenProfile = lib.declare("CMFlattenProfile", ctypes.default_abi, this.CMError, this.CMProfileRef, this.UInt32, this.CMFlattenUPP, ctypes.void_t.ptr, this.Boolean.ptr);
    this.NCMUnflattenProfile = lib.declare("NCMUnflattenProfile", ctypes.default_abi, this.CMError, this.CMProfileLocation.ptr, this.CMFlattenUPP, ctypes.void_t.ptr, this.Boolean.ptr);
    this.CMGetProfileHeader = lib.declare("CMGetProfileHeader", ctypes.default_abi, this.CMError, this.CMProfileRef, this.CMAppleProfileHeader.ptr);
    this.CMSetProfileHeader = lib.declare("CMSetProfileHeader", ctypes.default_abi, this.CMError, this.CMProfileRef, this.CMAppleProfileHeader.ptr);
    this.CMCloneProfileRef = lib.declare("CMCloneProfileRef", ctypes.default_abi, this.CMError, this.CMProfileRef);
    this.CMGetProfileRefCount = lib.declare("CMGetProfileRefCount", ctypes.default_abi, this.CMError, this.CMProfileRef, ctypes.long.ptr);
    this.CMProfileModified = lib.declare("CMProfileModified", ctypes.default_abi, this.CMError, this.CMProfileRef, this.Boolean.ptr);
    this.CMGetProfileMD5 = lib.declare("CMGetProfileMD5", ctypes.default_abi, this.CMError, this.CMProfileRef, ctypes.unsigned_char.ptr);
    this.CMCountProfileElements = lib.declare("CMCountProfileElements", ctypes.default_abi, this.CMError, this.CMProfileRef, this.UInt32.ptr);
    this.CMProfileElementExists = lib.declare("CMProfileElementExists", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.Boolean.ptr);
    this.CMGetProfileElement = lib.declare("CMGetProfileElement", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.UInt32.ptr, ctypes.void_t.ptr);
    this.CMSetProfileElement = lib.declare("CMSetProfileElement", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.UInt32, ctypes.void_t.ptr);
    this.CMSetProfileElementSize = lib.declare("CMSetProfileElementSize", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.UInt32);
    this.CMSetProfileElementReference = lib.declare("CMSetProfileElementReference", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.OSType);
    this.CMGetPartialProfileElement = lib.declare("CMGetPartialProfileElement", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.UInt32, this.UInt32.ptr, ctypes.void_t.ptr);
    this.CMSetPartialProfileElement = lib.declare("CMSetPartialProfileElement", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.UInt32, this.UInt32, ctypes.void_t.ptr);
    this.CMGetIndProfileElementInfo = lib.declare("CMGetIndProfileElementInfo", ctypes.default_abi, this.CMError, this.CMProfileRef, this.UInt32, this.OSType.ptr, this.UInt32.ptr, this.Boolean.ptr);
    this.CMGetIndProfileElement = lib.declare("CMGetIndProfileElement", ctypes.default_abi, this.CMError, this.CMProfileRef, this.UInt32, this.UInt32.ptr, ctypes.void_t.ptr);
    this.CMRemoveProfileElement = lib.declare("CMRemoveProfileElement", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType);
    this.CMGetScriptProfileDescription = lib.declare("CMGetScriptProfileDescription", ctypes.default_abi, this.CMError, this.CMProfileRef, ctypes.unsigned_char.ptr, this.ScriptCode.ptr);
    this.CMGetProfileDescriptions = lib.declare("CMGetProfileDescriptions", ctypes.default_abi, this.CMError, this.CMProfileRef, ctypes.char.ptr, this.UInt32.ptr, ctypes.unsigned_char.ptr, this.ScriptCode.ptr, ctypes.unsigned_short.ptr, this.UniCharCount.ptr);
    this.CMSetProfileDescriptions = lib.declare("CMSetProfileDescriptions", ctypes.default_abi, this.CMError, this.CMProfileRef, ctypes.char.ptr, this.UInt32, this.ConstStr255Param, this.ScriptCode, this.UniChar.ptr, this.UniCharCount);
    this.CMCopyProfileLocalizedStringDictionary = lib.declare("CMCopyProfileLocalizedStringDictionary", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.CFDictionaryRef.ptr);
    this.CMSetProfileLocalizedStringDictionary = lib.declare("CMSetProfileLocalizedStringDictionary", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.CFDictionaryRef);
    this.CMCopyProfileLocalizedString = lib.declare("CMCopyProfileLocalizedString", ctypes.default_abi, this.CMError, this.CMProfileRef, this.OSType, this.CFStringRef, this.CFStringRef.ptr, this.CFStringRef.ptr);
    this.CMCopyProfileDescriptionString = lib.declare("CMCopyProfileDescriptionString", ctypes.default_abi, this.CMError, this.CMProfileRef, this.CFStringRef.ptr);
    this.CMGetNamedColorInfo = lib.declare("CMGetNamedColorInfo", ctypes.default_abi, this.CMError, this.CMProfileRef, this.UInt32.ptr, this.OSType.ptr, this.OSType.ptr, this.UInt32.ptr, this.StringPtr, this.StringPtr);
    this.CMGetNamedColorValue = lib.declare("CMGetNamedColorValue", ctypes.default_abi, this.CMError, this.CMProfileRef, this.StringPtr, this.CMColor.ptr, this.CMColor.ptr);
    this.CMGetIndNamedColorValue = lib.declare("CMGetIndNamedColorValue", ctypes.default_abi, this.CMError, this.CMProfileRef, this.UInt32, this.CMColor.ptr, this.CMColor.ptr);
    this.CMGetNamedColorIndex = lib.declare("CMGetNamedColorIndex", ctypes.default_abi, this.CMError, this.CMProfileRef, this.StringPtr, this.UInt32.ptr);
    this.CMGetNamedColorName = lib.declare("CMGetNamedColorName", ctypes.default_abi, this.CMError, this.CMProfileRef, this.UInt32, this.StringPtr);
    this.NCWNewColorWorld = lib.declare("NCWNewColorWorld", ctypes.default_abi, this.CMError, this.CMWorldRef.ptr, this.CMProfileRef, this.CMProfileRef);
    this.CWConcatColorWorld = lib.declare("CWConcatColorWorld", ctypes.default_abi, this.CMError, this.CMWorldRef.ptr, this.CMConcatProfileSet.ptr);
    this.NCWConcatColorWorld = lib.declare("NCWConcatColorWorld", ctypes.default_abi, this.CMError, this.CMWorldRef.ptr, this.NCMConcatProfileSet.ptr, this.CMConcatCallBackUPP, ctypes.void_t.ptr);
    this.CMGetCWInfo = lib.declare("CMGetCWInfo", ctypes.default_abi, this.CMError, this.CMWorldRef, this.CMCWInfoRecord.ptr);
    this.CWDisposeColorWorld = lib.declare("CWDisposeColorWorld", ctypes.default_abi, ctypes.void_t, this.CMWorldRef);
    // Dropping declaration of 'CWMatchColors': 'size_t' defined out of scope
    // Dropping declaration of 'CWCheckColors': 'size_t' defined out of scope
    this.CWMatchBitmap = lib.declare("CWMatchBitmap", ctypes.default_abi, this.CMError, this.CMWorldRef, this.CMBitmap.ptr, this.CMBitmapCallBackUPP, ctypes.void_t.ptr, this.CMBitmap.ptr);
    this.CWCheckBitmap = lib.declare("CWCheckBitmap", ctypes.default_abi, this.CMError, this.CMWorldRef, this.CMBitmap.ptr, this.CMBitmapCallBackUPP, ctypes.void_t.ptr, this.CMBitmap.ptr);
    this.CWGetCMMSignature = lib.declare("CWGetCMMSignature", ctypes.default_abi, this.UInt32, this.CMWorldRef);
    this.cmTextureRGBtoRGBX8 = 0;
    this.cmTextureRGBtoRGBX16 = 1;
    this.cmTextureRGBtoRGBXFloat32 = 2;
    this.CWFillLookupTexture = lib.declare("CWFillLookupTexture", ctypes.default_abi, this.CMError, this.CMWorldRef, this.UInt32, this.UInt32, this.UInt32, ctypes.void_t.ptr);
    this.CMGetSystemProfile = lib.declare("CMGetSystemProfile", ctypes.default_abi, this.CMError, this.CMProfileRef.ptr);
    this.CMSetSystemProfile = lib.declare("CMSetSystemProfile", ctypes.default_abi, this.CMError, this.FSSpec.ptr);
    this.NCMSetSystemProfile = lib.declare("NCMSetSystemProfile", ctypes.default_abi, this.CMError, this.CMProfileLocation.ptr);
    this.CMGetDefaultProfileBySpace = lib.declare("CMGetDefaultProfileBySpace", ctypes.default_abi, this.CMError, this.OSType, this.CMProfileRef.ptr);
    this.CMSetDefaultProfileBySpace = lib.declare("CMSetDefaultProfileBySpace", ctypes.default_abi, this.CMError, this.OSType, this.CMProfileRef);
    this.CMGetDefaultProfileByUse = lib.declare("CMGetDefaultProfileByUse", ctypes.default_abi, this.CMError, this.OSType, this.CMProfileRef.ptr);
    this.CMSetDefaultProfileByUse = lib.declare("CMSetDefaultProfileByUse", ctypes.default_abi, this.CMError, this.OSType, this.CMProfileRef);
    this.CMGetProfileByAVID = lib.declare("CMGetProfileByAVID", ctypes.default_abi, this.CMError, this.CMDisplayIDType, this.CMProfileRef.ptr);
    this.CMSetProfileByAVID = lib.declare("CMSetProfileByAVID", ctypes.default_abi, this.CMError, this.CMDisplayIDType, this.CMProfileRef);
    this.CMGetGammaByAVID = lib.declare("CMGetGammaByAVID", ctypes.default_abi, this.CMError, this.CMDisplayIDType, this.CMVideoCardGamma.ptr, this.UInt32.ptr);
    this.CMSetGammaByAVID = lib.declare("CMSetGammaByAVID", ctypes.default_abi, this.CMError, this.CMDisplayIDType, this.CMVideoCardGamma.ptr);
    this.CMIterateColorSyncFolder = lib.declare("CMIterateColorSyncFolder", ctypes.default_abi, this.CMError, this.CMProfileIterateUPP, this.UInt32.ptr, this.UInt32.ptr, ctypes.void_t.ptr);
    this.CMGetColorSyncFolderSpec = lib.declare("CMGetColorSyncFolderSpec", ctypes.default_abi, this.CMError, ctypes.short, this.Boolean, ctypes.short.ptr, ctypes.long.ptr);
    this.CMNewProfileSearch = lib.declare("CMNewProfileSearch", ctypes.default_abi, this.CMError, this.CMSearchRecord.ptr, ctypes.void_t.ptr, this.UInt32.ptr, this.CMProfileSearchRef.ptr);
    this.CMUpdateProfileSearch = lib.declare("CMUpdateProfileSearch", ctypes.default_abi, this.CMError, this.CMProfileSearchRef, ctypes.void_t.ptr, this.UInt32.ptr);
    this.CMDisposeProfileSearch = lib.declare("CMDisposeProfileSearch", ctypes.default_abi, ctypes.void_t, this.CMProfileSearchRef);
    this.CMSearchGetIndProfile = lib.declare("CMSearchGetIndProfile", ctypes.default_abi, this.CMError, this.CMProfileSearchRef, this.UInt32, this.CMProfileRef.ptr);
    this.CMSearchGetIndProfileFileSpec = lib.declare("CMSearchGetIndProfileFileSpec", ctypes.default_abi, this.CMError, this.CMProfileSearchRef, this.UInt32, this.FSSpec.ptr);
    this.CMCreateProfileIdentifier = lib.declare("CMCreateProfileIdentifier", ctypes.default_abi, this.CMError, this.CMProfileRef, this.CMProfileIdentifierPtr, this.UInt32.ptr);
    this.CMProfileIdentifierFolderSearch = lib.declare("CMProfileIdentifierFolderSearch", ctypes.default_abi, this.CMError, this.CMProfileIdentifierPtr, this.UInt32.ptr, this.CMProfileSearchRef.ptr);
    this.CMProfileIdentifierListSearch = lib.declare("CMProfileIdentifierListSearch", ctypes.default_abi, this.CMError, this.CMProfileIdentifierPtr, this.CMProfileRef.ptr, this.UInt32, this.UInt32.ptr, this.CMProfileRef.ptr);
    this.CMGetPreferredCMM = lib.declare("CMGetPreferredCMM", ctypes.default_abi, this.CMError, this.OSType.ptr, this.Boolean.ptr);
    this.CMSetPreferredCMM = lib.declare("CMSetPreferredCMM", ctypes.default_abi, this.CMError, this.OSType);
    this.CMIterateCMMInfo = lib.declare("CMIterateCMMInfo", ctypes.default_abi, this.CMError, this.CMMIterateUPP, this.UInt32.ptr, ctypes.void_t.ptr);
    this.CMGetColorSyncVersion = lib.declare("CMGetColorSyncVersion", ctypes.default_abi, this.CMError, this.UInt32.ptr);
    this.CMLaunchControlPanel = lib.declare("CMLaunchControlPanel", ctypes.default_abi, this.CMError, this.UInt32);
    // Dropping declaration of 'CMConvertXYZToLab': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertLabToXYZ': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertXYZToLuv': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertLuvToXYZ': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertXYZToYxy': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertYxyToXYZ': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertRGBToHLS': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertHLSToRGB': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertRGBToHSV': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertHSVToRGB': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertRGBToGray': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertXYZToFixedXYZ': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertFixedXYZToXYZ': 'size_t' defined out of scope
    // Dropping declaration of 'CMConvertXYZToXYZ': 'size_t' defined out of scope
    this.CMGetPS2ColorSpace = lib.declare("CMGetPS2ColorSpace", ctypes.default_abi, this.CMError, this.CMProfileRef, this.UInt32, this.CMFlattenUPP, ctypes.void_t.ptr, this.Boolean.ptr);
    this.CMGetPS2ColorRenderingIntent = lib.declare("CMGetPS2ColorRenderingIntent", ctypes.default_abi, this.CMError, this.CMProfileRef, this.UInt32, this.CMFlattenUPP, ctypes.void_t.ptr, this.Boolean.ptr);
    this.CMGetPS2ColorRendering = lib.declare("CMGetPS2ColorRendering", ctypes.default_abi, this.CMError, this.CMProfileRef, this.CMProfileRef, this.UInt32, this.CMFlattenUPP, ctypes.void_t.ptr, this.Boolean.ptr);
    this.CMGetPS2ColorRenderingVMSize = lib.declare("CMGetPS2ColorRenderingVMSize", ctypes.default_abi, this.CMError, this.CMProfileRef, this.CMProfileRef, this.UInt32.ptr, this.Boolean.ptr);
    this.kCMFloatBitmapFlagsNone = 0;
    this.kCMFloatBitmapFlagsAlpha = 1;
    this.kCMFloatBitmapFlagsAlphaPremul = 2;
    this.kCMFloatBitmapFlagsRangeClipped = 4;
    this.CMFloatBitmap = new ctypes.StructType("CMFloatBitmap", []);
    this.kCMIlluminantD50 = lib.declare("kCMIlluminantD50", ctypes.float.array(3));
    this.kCMIlluminantD65 = lib.declare("kCMIlluminantD65", ctypes.float.array(3));
    // Dropping declaration of 'CMFloatBitmapMakeChunky': 'size_t' defined out of scope
    this.CMConvertXYZFloatBitmap = lib.declare("CMConvertXYZFloatBitmap", ctypes.default_abi, this.CMError, this.CMFloatBitmap.ptr, ctypes.float.ptr, this.CMFloatBitmap.ptr, ctypes.float.ptr, this.CMChromaticAdaptation);
    this.CMConvertRGBFloatBitmap = lib.declare("CMConvertRGBFloatBitmap", ctypes.default_abi, this.CMError, this.CMFloatBitmap.ptr, this.CMFloatBitmap.ptr);
    this.CMMatchFloatBitmap = lib.declare("CMMatchFloatBitmap", ctypes.default_abi, this.CMError, this.CMWorldRef, this.CMFloatBitmap.ptr, this.CMFloatBitmap.ptr);
    this.CWColorWorldSetProperty = lib.declare("CWColorWorldSetProperty", ctypes.default_abi, ctypes.void_t, this.CMWorldRef, this.CFStringRef, this.CFTypeRef);
    this.CWColorWorldGetProperty = lib.declare("CWColorWorldGetProperty", ctypes.default_abi, ctypes.void_t.ptr, this.CMWorldRef, this.CFStringRef);
    this.CMM_ConcatColorWorld = lib.declare("CMM_ConcatColorWorld", ctypes.default_abi, this.CMError, this.CMWorldRef, this.NCMConcatProfileSet.ptr, this.CMConcatCallBackUPP, ctypes.void_t.ptr);
    this.CMM_MatchColors = lib.declare("CMM_MatchColors", ctypes.default_abi, this.CMError, this.CMWorldRef, this.CMColor.ptr, this.UInt32);
    this.CMM_CheckColors = lib.declare("CMM_CheckColors", ctypes.default_abi, this.CMError, this.CMWorldRef, this.CMColor.ptr, this.UInt32, this.UInt8.ptr);
    this.CMM_ValidateProfile = lib.declare("CMM_ValidateProfile", ctypes.default_abi, this.CMError, this.CMProfileRef, this.Boolean.ptr);
    this.CMM_MatchBitmap = lib.declare("CMM_MatchBitmap", ctypes.default_abi, this.CMError, this.CMWorldRef, this.CMBitmap.ptr, this.CMBitmapCallBackUPP, ctypes.void_t.ptr, this.CMBitmap.ptr);
    this.CMM_CheckBitmap = lib.declare("CMM_CheckBitmap", ctypes.default_abi, this.CMError, this.CMWorldRef, this.CMBitmap.ptr, this.CMBitmapCallBackUPP, ctypes.void_t.ptr, this.CMBitmap.ptr);
    this.CMM_MatchFloatBitmap = lib.declare("CMM_MatchFloatBitmap", ctypes.default_abi, this.CMError, this.CMWorldRef, this.CMFloatBitmap.ptr, this.CMFloatBitmap.ptr);
    this.CMM_CreateLinkProfile = lib.declare("CMM_CreateLinkProfile", ctypes.default_abi, this.CMError, this.CMProfileRef, this.NCMConcatProfileSet.ptr, this.CMConcatCallBackUPP, ctypes.void_t.ptr);
    this.CMM_GetProperty = lib.declare("CMM_GetProperty", ctypes.default_abi, this.CFTypeRef, this.CMWorldRef, this.CFStringRef);
    this.cmspInvalidImageFile = -4220;
    this.cmspInvalidImageSpace = -4221;
    this.cmspInvalidProfileEmbed = -4222;
    this.cmspInvalidProfileSource = -4223;
    this.cmspInvalidProfileDest = -4224;
    this.cmspInvalidProfileProof = -4225;
    this.cmspInvalidProfileLink = -4226;
    this.cmspFavorEmbeddedMask = 1;
    this.CMValidImage = lib.declare("CMValidImage", ctypes.default_abi, this.CMError, this.FSSpec.ptr);
    this.CMGetImageSpace = lib.declare("CMGetImageSpace", ctypes.default_abi, this.CMError, this.FSSpec.ptr, this.OSType.ptr);
    this.CMEmbedImage = lib.declare("CMEmbedImage", ctypes.default_abi, this.CMError, this.FSSpec.ptr, this.FSSpec.ptr, this.Boolean, this.CMProfileRef);
    this.CMUnembedImage = lib.declare("CMUnembedImage", ctypes.default_abi, this.CMError, this.FSSpec.ptr, this.FSSpec.ptr, this.Boolean);
    this.CMMatchImage = lib.declare("CMMatchImage", ctypes.default_abi, this.CMError, this.FSSpec.ptr, this.FSSpec.ptr, this.Boolean, this.UInt32, this.CMProfileRef, this.UInt32, this.CMProfileRef);
    this.CMProofImage = lib.declare("CMProofImage", ctypes.default_abi, this.CMError, this.FSSpec.ptr, this.FSSpec.ptr, this.Boolean, this.UInt32, this.CMProfileRef, this.UInt32, this.CMProfileRef, this.CMProfileRef);
    this.CMLinkImage = lib.declare("CMLinkImage", ctypes.default_abi, this.CMError, this.FSSpec.ptr, this.FSSpec.ptr, this.Boolean, this.UInt32, this.CMProfileRef, this.UInt32);
    this.CMCountImageProfiles = lib.declare("CMCountImageProfiles", ctypes.default_abi, this.CMError, this.FSSpec.ptr, this.UInt32.ptr);
    this.CMGetIndImageProfile = lib.declare("CMGetIndImageProfile", ctypes.default_abi, this.CMError, this.FSSpec.ptr, this.UInt32, this.CMProfileRef.ptr);
    this.CMSetIndImageProfile = lib.declare("CMSetIndImageProfile", ctypes.default_abi, this.CMError, this.FSSpec.ptr, this.FSSpec.ptr, this.Boolean, this.UInt32, this.CMProfileRef);
    this.cmDeviceInfoVersion1 = 65536;
    this.cmDeviceProfileInfoVersion1 = 65536;
    this.cmDeviceProfileInfoVersion2 = 131072;
    this.cmCurrentDeviceInfoVersion = 65536;
    this.cmCurrentProfileInfoVersion = 65536;
    this.cmDefaultDeviceID = 0;
    this.cmDefaultProfileID = 0;
    this.cmDeviceStateDefault = 0;
    this.cmDeviceStateOffline = 1;
    this.cmDeviceStateBusy = 2;
    this.cmDeviceStateForceNotify = -2147483648;
    this.cmDeviceStateDeviceRsvdBits = 16711680;
    this.cmDeviceStateAppleRsvdBits = -16711681;
    this.cmIterateFactoryDeviceProfiles = 1;
    this.cmIterateCustomDeviceProfiles = 2;
    this.cmIterateCurrentDeviceProfiles = 3;
    this.cmIterateAllDeviceProfiles = 4;
    this.cmIterateDeviceProfilesMask = 15;
    this.cmDeviceDBNotFoundErr = -4227;
    this.cmDeviceAlreadyRegistered = -4228;
    this.cmDeviceNotRegistered = -4229;
    this.cmDeviceProfilesNotFound = -4230;
    this.cmInternalCFErr = -4231;
    this.cmPrefsSynchError = -4232;
    this.CMDeviceState = this.UInt32;
    this.CMDeviceID = this.UInt32;
    this.CMDeviceProfileID = this.UInt32;
    this.cmScannerDeviceClass = 1935896178;
    this.cmCameraDeviceClass = 1668117089;
    this.cmDisplayDeviceClass = 1835955314;
    this.cmPrinterDeviceClass = 1886549106;
    this.cmProofDeviceClass = 1886549350;
    this.CMDeviceClass = this.OSType;
    this.CMDeviceScope = new ctypes.StructType("CMDeviceScope", [{deviceUser: this.CFStringRef}, {deviceHost: this.CFStringRef}]);
    this.CMDeviceProfileScope = this.CMDeviceScope;
    this.CMDeviceInfo = new ctypes.StructType("CMDeviceInfo", [{dataVersion: this.UInt32}, {deviceClass: this.CMDeviceClass}, {deviceID: this.CMDeviceID}, {deviceScope: this.CMDeviceScope}, {deviceState: this.CMDeviceState}, {defaultProfileID: this.CMDeviceProfileID}, {deviceName: this.CFDictionaryRef.ptr}, {profileCount: this.UInt32}, {reserved: this.UInt32}]);
    this.CMDeviceInfoPtr = this.CMDeviceInfo.ptr;
    this.CMDeviceProfileInfo = new ctypes.StructType("CMDeviceProfileInfo", [{dataVersion: this.UInt32}, {profileID: this.CMDeviceProfileID}, {profileLoc: this.CMProfileLocation}, {profileName: this.CFDictionaryRef}, {reserved: this.UInt32}]);
    this.NCMDeviceProfileInfo = new ctypes.StructType("NCMDeviceProfileInfo", [{dataVersion: this.UInt32}, {profileID: this.CMDeviceProfileID}, {profileLoc: this.CMProfileLocation}, {profileName: this.CFDictionaryRef}, {profileScope: this.CMDeviceProfileScope}, {reserved: this.UInt32}]);
    this.CMDeviceProfileArray = new ctypes.StructType("CMDeviceProfileArray", [{profileCount: this.UInt32}, {profiles: this.CMDeviceProfileInfo.array(1)}]);
    this.CMDeviceProfileArrayPtr = this.CMDeviceProfileArray.ptr;
    this.CMIterateDeviceInfoProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.CMDeviceInfo.ptr, ctypes.void_t.ptr]).ptr;
    this.CMIterateDeviceProfileProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.CMDeviceInfo.ptr, this.NCMDeviceProfileInfo.ptr, ctypes.void_t.ptr]).ptr;
    this.CMRegisterColorDevice = lib.declare("CMRegisterColorDevice", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CFDictionaryRef, this.CMDeviceScope.ptr);
    this.CMUnregisterColorDevice = lib.declare("CMUnregisterColorDevice", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID);
    this.CMSetDefaultDevice = lib.declare("CMSetDefaultDevice", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID);
    this.CMGetDefaultDevice = lib.declare("CMGetDefaultDevice", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID.ptr);
    this.CMSetDeviceFactoryProfiles = lib.declare("CMSetDeviceFactoryProfiles", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceProfileID, this.CMDeviceProfileArray.ptr);
    this.CMGetDeviceFactoryProfiles = lib.declare("CMGetDeviceFactoryProfiles", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceProfileID.ptr, this.UInt32.ptr, this.CMDeviceProfileArray.ptr);
    this.CMSetDeviceProfiles = lib.declare("CMSetDeviceProfiles", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceProfileScope.ptr, this.CMDeviceProfileArray.ptr);
    this.CMGetDeviceProfiles = lib.declare("CMGetDeviceProfiles", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.UInt32.ptr, this.CMDeviceProfileArray.ptr);
    this.CMSetDeviceDefaultProfileID = lib.declare("CMSetDeviceDefaultProfileID", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceProfileID);
    this.CMGetDeviceDefaultProfileID = lib.declare("CMGetDeviceDefaultProfileID", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceProfileID.ptr);
    this.CMSetDeviceProfile = lib.declare("CMSetDeviceProfile", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceProfileScope.ptr, this.CMDeviceProfileID, this.CMProfileLocation.ptr);
    this.CMGetDeviceProfile = lib.declare("CMGetDeviceProfile", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceProfileID, this.CMProfileLocation.ptr);
    this.CMSetDeviceState = lib.declare("CMSetDeviceState", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceState);
    this.CMGetDeviceState = lib.declare("CMGetDeviceState", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceState.ptr);
    this.CMGetDeviceInfo = lib.declare("CMGetDeviceInfo", ctypes.default_abi, this.CMError, this.CMDeviceClass, this.CMDeviceID, this.CMDeviceInfo.ptr);
    this.CMIterateColorDevices = lib.declare("CMIterateColorDevices", ctypes.default_abi, this.CMError, this.CMIterateDeviceInfoProcPtr, this.UInt32.ptr, this.UInt32.ptr, ctypes.void_t.ptr);
    this.CMIterateDeviceProfiles = lib.declare("CMIterateDeviceProfiles", ctypes.default_abi, this.CMError, this.CMIterateDeviceProfileProcPtr, this.UInt32.ptr, this.UInt32.ptr, this.UInt32, ctypes.void_t.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ColorSync.framework/Headers/ColorSyncProfile.h
function ColorSyncProfile_h(lib) {
    CFData_h.call(this, lib);
    CFUUID_h.call(this, lib);
    CFError_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._COLORSYNCPROFILE_H)
        return;
    this._COLORSYNCPROFILE_H = true;

    this.ColorSyncProfile = new ctypes.StructType("ColorSyncProfile");
    this.ColorSyncProfileRef = this.ColorSyncProfile.ptr;
    this.ColorSyncMutableProfileRef = this.ColorSyncProfile.ptr;
    // Dropping declaration of 'kColorSyncGenericGrayProfile': No value
    // Dropping declaration of 'kColorSyncGenericGrayGamma22Profile': No value
    // Dropping declaration of 'kColorSyncGenericRGBProfile': No value
    // Dropping declaration of 'kColorSyncGenericCMYKProfile': No value
    // Dropping declaration of 'kColorSyncSRGBProfile': No value
    // Dropping declaration of 'kColorSyncAdobeRGB1998Profile': No value
    // Dropping declaration of 'kColorSyncGenericLabProfile': No value
    // Dropping declaration of 'kColorSyncGenericXYZProfile': No value
    // Dropping declaration of 'kColorSyncProfileHeader': No value
    // Dropping declaration of 'kColorSyncProfileClass': No value
    // Dropping declaration of 'kColorSyncProfileColorSpace': No value
    // Dropping declaration of 'kColorSyncProfilePCS': No value
    // Dropping declaration of 'kColorSyncProfileURL': No value
    // Dropping declaration of 'kColorSyncProfileDescription': No value
    // Dropping declaration of 'kColorSyncProfileMD5Digest': No value
    this.ColorSyncProfileGetTypeID = lib.declare("ColorSyncProfileGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.ColorSyncProfileCreate = lib.declare("ColorSyncProfileCreate", ctypes.default_abi, this.ColorSyncProfileRef, this.CFDataRef, this.CFErrorRef.ptr);
    this.ColorSyncProfileCreateWithURL = lib.declare("ColorSyncProfileCreateWithURL", ctypes.default_abi, this.ColorSyncProfileRef, this.CFURLRef, this.CFErrorRef.ptr);
    this.ColorSyncProfileCreateWithName = lib.declare("ColorSyncProfileCreateWithName", ctypes.default_abi, this.ColorSyncProfileRef, this.CFStringRef);
    // Dropping declaration of 'ColorSyncProfileCreateWithDisplayID': 'uint32_t' defined out of scope
    this.ColorSyncProfileCreateDeviceProfile = lib.declare("ColorSyncProfileCreateDeviceProfile", ctypes.default_abi, this.ColorSyncProfileRef, this.CFStringRef, this.CFUUIDRef, this.CFTypeRef);
    this.ColorSyncProfileCreateMutable = lib.declare("ColorSyncProfileCreateMutable", ctypes.default_abi, this.ColorSyncMutableProfileRef);
    this.ColorSyncProfileCreateMutableCopy = lib.declare("ColorSyncProfileCreateMutableCopy", ctypes.default_abi, this.ColorSyncMutableProfileRef, this.ColorSyncProfileRef);
    this.ColorSyncProfileCreateLink = lib.declare("ColorSyncProfileCreateLink", ctypes.default_abi, this.ColorSyncProfileRef, this.CFArrayRef, this.CFDictionaryRef);
    // Dropping declaration of 'ColorSyncProfileVerify': Unknown type bool_t
    // Dropping declaration of 'ColorSyncProfileEstimateGammaWithDisplayID': 'int32_t' defined out of scope
    this.ColorSyncProfileEstimateGamma = lib.declare("ColorSyncProfileEstimateGamma", ctypes.default_abi, ctypes.float, this.ColorSyncProfileRef, this.CFErrorRef.ptr);
    this.ColorSyncMD5 = new ctypes.StructType("ColorSyncMD5", []);
    this.ColorSyncProfileGetMD5 = lib.declare("ColorSyncProfileGetMD5", ctypes.default_abi, this.ColorSyncMD5, this.ColorSyncProfileRef);
    this.ColorSyncProfileCopyData = lib.declare("ColorSyncProfileCopyData", ctypes.default_abi, this.CFDataRef, this.ColorSyncProfileRef, this.CFErrorRef.ptr);
    this.ColorSyncProfileGetURL = lib.declare("ColorSyncProfileGetURL", ctypes.default_abi, this.CFURLRef, this.ColorSyncProfileRef, this.CFErrorRef.ptr);
    this.ColorSyncProfileCopyHeader = lib.declare("ColorSyncProfileCopyHeader", ctypes.default_abi, this.CFDataRef, this.ColorSyncProfileRef);
    this.ColorSyncProfileSetHeader = lib.declare("ColorSyncProfileSetHeader", ctypes.default_abi, ctypes.void_t, this.ColorSyncMutableProfileRef, this.CFDataRef);
    this.ColorSyncProfileCopyDescriptionString = lib.declare("ColorSyncProfileCopyDescriptionString", ctypes.default_abi, this.CFStringRef, this.ColorSyncProfileRef);
    this.ColorSyncProfileCopyTagSignatures = lib.declare("ColorSyncProfileCopyTagSignatures", ctypes.default_abi, this.CFArrayRef, this.ColorSyncProfileRef);
    // Dropping declaration of 'ColorSyncProfileContainsTag': Unknown type bool_t
    this.ColorSyncProfileCopyTag = lib.declare("ColorSyncProfileCopyTag", ctypes.default_abi, this.CFDataRef, this.ColorSyncProfileRef, this.CFStringRef);
    this.ColorSyncProfileSetTag = lib.declare("ColorSyncProfileSetTag", ctypes.default_abi, ctypes.void_t, this.ColorSyncMutableProfileRef, this.CFStringRef, this.CFDataRef);
    this.ColorSyncProfileRemoveTag = lib.declare("ColorSyncProfileRemoveTag", ctypes.default_abi, ctypes.void_t, this.ColorSyncMutableProfileRef, this.CFStringRef);
    // Dropping declaration of 'ColorSyncProfileIterateCallback': Unknown type bool_t
    // Dropping declaration of 'ColorSyncIterateInstalledProfiles': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ColorSync.framework/Headers/ColorSyncTransform.h
function ColorSyncTransform_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._COLORSYNCTRANSFORM_H)
        return;
    this._COLORSYNCTRANSFORM_H = true;

    this.ColorSyncTransform = new ctypes.StructType("ColorSyncTransform");
    this.ColorSyncTransformRef = this.ColorSyncTransform.ptr;
    this.ColorSyncTransformGetTypeID = lib.declare("ColorSyncTransformGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.ColorSyncTransformCreate = lib.declare("ColorSyncTransformCreate", ctypes.default_abi, this.ColorSyncTransformRef, this.CFArrayRef, this.CFDictionaryRef);
    this.ColorSyncTransformCopyProperty = lib.declare("ColorSyncTransformCopyProperty", ctypes.default_abi, this.CFTypeRef, this.ColorSyncTransformRef, this.CFTypeRef, this.CFDictionaryRef);
    this.ColorSyncTransformSetProperty = lib.declare("ColorSyncTransformSetProperty", ctypes.default_abi, ctypes.void_t, this.ColorSyncTransformRef, this.CFTypeRef, this.CFTypeRef);
    this.kColorSync1BitGamut = 1;
    this.kColorSync8BitInteger = 2;
    this.kColorSync16BitInteger = 3;
    this.kColorSync16BitFloat = 4;
    this.kColorSync32BitInteger = 5;
    this.kColorSync32BitNamedColorIndex = 6;
    this.kColorSync32BitFloat = 7;
    this.kColorSyncAlphaNone = 0;
    this.kColorSyncAlphaPremultipliedLast = 1;
    this.kColorSyncAlphaPremultipliedFirst = 2;
    this.kColorSyncAlphaLast = 3;
    this.kColorSyncAlphaFirst = 4;
    this.kColorSyncAlphaNoneSkipLast = 5;
    this.kColorSyncAlphaNoneSkipFirst = 6;
    this.kColorSyncAlphaInfoMask = 31;
    this.kColorSyncByteOrderMask = 28672;
    this.kColorSyncByteOrderDefault = 0;
    this.kColorSyncByteOrder16Little = 4096;
    this.kColorSyncByteOrder32Little = 8192;
    this.kColorSyncByteOrder16Big = 12288;
    this.kColorSyncByteOrder32Big = 16384;
    // Dropping declaration of 'ColorSyncDataLayout': 'uint32_t' defined out of scope
    // Dropping declaration of 'ColorSyncTransformConvert': Unknown type bool_t
    // Dropping declaration of 'kColorSyncProfile': No value
    // Dropping declaration of 'kColorSyncRenderingIntent': No value
    // Dropping declaration of 'kColorSyncRenderingIntentPerceptual': No value
    // Dropping declaration of 'kColorSyncRenderingIntentRelative': No value
    // Dropping declaration of 'kColorSyncRenderingIntentSaturation': No value
    // Dropping declaration of 'kColorSyncRenderingIntentAbsolute': No value
    // Dropping declaration of 'kColorSyncRenderingIntentUseProfileHeader': No value
    // Dropping declaration of 'kColorSyncTransformTag': No value
    // Dropping declaration of 'kColorSyncTransformDeviceToPCS': No value
    // Dropping declaration of 'kColorSyncTransformPCSToPCS': No value
    // Dropping declaration of 'kColorSyncTransformPCSToDevice': No value
    // Dropping declaration of 'kColorSyncTransformDeviceToDevice': No value
    // Dropping declaration of 'kColorSyncTransformGamutCheck': No value
    // Dropping declaration of 'kColorSyncBlackPointCompensation': No value
    // Dropping declaration of 'kColorSyncPreferredCMM': No value
    // Dropping declaration of 'kColorSyncConvertQuality': No value
    // Dropping declaration of 'kColorSyncBestQuality': No value
    // Dropping declaration of 'kColorSyncNormalQuality': No value
    // Dropping declaration of 'kColorSyncDraftQuality': No value
    // Dropping declaration of 'kColorSyncConvertThreadCount': No value
    // Dropping declaration of 'kColorSyncTranformInfo': No value
    // Dropping declaration of 'kColorSyncTransformCreator': No value
    // Dropping declaration of 'kColorSyncTransformSrcSpace': No value
    // Dropping declaration of 'kColorSyncTransformDstSpace': No value
    // Dropping declaration of 'kColorSyncTransformFullConversionData': No value
    // Dropping declaration of 'kColorSyncTransformSimplifiedConversionData': No value
    // Dropping declaration of 'kColorSyncTransformParametricConversionData': No value
    // Dropping declaration of 'kColorSyncConversionMatrix': No value
    // Dropping declaration of 'kColorSyncConversionParamCurve0': No value
    // Dropping declaration of 'kColorSyncConversionParamCurve1': No value
    // Dropping declaration of 'kColorSyncConversionParamCurve2': No value
    // Dropping declaration of 'kColorSyncConversionParamCurve3': No value
    // Dropping declaration of 'kColorSyncConversionParamCurve4': No value
    // Dropping declaration of 'kColorSyncConversion1DLut': No value
    // Dropping declaration of 'kColorSyncConversionGridPoints': No value
    // Dropping declaration of 'kColorSyncConversionChannelID': No value
    // Dropping declaration of 'kColorSyncConversion3DLut': No value
    // Dropping declaration of 'kColorSyncConversionInpChan': No value
    // Dropping declaration of 'kColorSyncConversionOutChan': No value
    // Dropping declaration of 'kColorSyncConversionBPC': No value
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ColorSync.framework/Headers/ColorSyncCMM.h
function ColorSyncCMM_h(lib) {
    ColorSyncTransform_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFBundle_h.call(this, lib);

    if (this._COLORSYNCCMM_H)
        return;
    this._COLORSYNCCMM_H = true;

    this.ColorSyncCMM = new ctypes.StructType("ColorSyncCMM");
    this.ColorSyncCMMRef = this.ColorSyncCMM.ptr;
    this.ColorSyncCMMGetTypeID = lib.declare("ColorSyncCMMGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.ColorSyncCMMCreate = lib.declare("ColorSyncCMMCreate", ctypes.default_abi, this.ColorSyncCMMRef, this.CFBundleRef);
    this.ColorSyncCMMGetBundle = lib.declare("ColorSyncCMMGetBundle", ctypes.default_abi, this.CFBundleRef, this.ColorSyncCMMRef);
    this.ColorSyncCMMCopyLocalizedName = lib.declare("ColorSyncCMMCopyLocalizedName", ctypes.default_abi, this.CFStringRef, this.ColorSyncCMMRef);
    this.ColorSyncCMMCopyCMMIdentifier = lib.declare("ColorSyncCMMCopyCMMIdentifier", ctypes.default_abi, this.CFStringRef, this.ColorSyncCMMRef);
    // Dropping declaration of 'ColorSyncCMMIterateCallback': Unknown type bool_t
    this.ColorSyncIterateInstalledCMMs = lib.declare("ColorSyncIterateInstalledCMMs", ctypes.default_abi, ctypes.void_t, this.ColorSyncCMMIterateCallback, ctypes.void_t.ptr);
    // Dropping declaration of 'CMMInitializeLinkProfileProc': Unknown type bool_t
    // Dropping declaration of 'CMMInitializeTransformProc': Unknown type bool_t
    // Dropping declaration of 'CMMApplyTransformProc': Unknown type bool_t
    this.CMMCreateTransformPropertyProc = new ctypes.FunctionType(ctypes.default_abi, this.CFTypeRef, [this.ColorSyncTransformRef, this.CFTypeRef, this.CFDictionaryRef]).ptr;
    // Dropping declaration of 'kCMMInitializeLinkProfileProcName': No value
    // Dropping declaration of 'kCMMInitializeTransformProcName': No value
    // Dropping declaration of 'kCMMApplyTransformProcName': No value
    // Dropping declaration of 'kCMMCreateTransformPropertyProcName': No value
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["ColorSync", "ColorSyncDevice_h", "ColorSyncDeprecated_h", "ColorSyncProfile_h", "ColorSyncTransform_h", "ColorSyncCMM_h"];

function ColorSync() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/ColorSync.framework/ColorSync";
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

    ColorSyncDevice_h.call(this, lib);
    ColorSyncDeprecated_h.call(this, lib);
    ColorSyncProfile_h.call(this, lib);
    ColorSyncTransform_h.call(this, lib);
    ColorSyncCMM_h.call(this, lib);
}
