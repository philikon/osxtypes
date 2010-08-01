// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/Headers/CGImageProperties.h
function CGImageProperties_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CGIMAGEPROPERTIES_H)
        return;
    this._CGIMAGEPROPERTIES_H = true;

    this.kCGImagePropertyTIFFDictionary = lib.declare("kCGImagePropertyTIFFDictionary", this.CFStringRef);
    this.kCGImagePropertyGIFDictionary = lib.declare("kCGImagePropertyGIFDictionary", this.CFStringRef);
    this.kCGImagePropertyJFIFDictionary = lib.declare("kCGImagePropertyJFIFDictionary", this.CFStringRef);
    this.kCGImagePropertyExifDictionary = lib.declare("kCGImagePropertyExifDictionary", this.CFStringRef);
    this.kCGImagePropertyPNGDictionary = lib.declare("kCGImagePropertyPNGDictionary", this.CFStringRef);
    this.kCGImagePropertyIPTCDictionary = lib.declare("kCGImagePropertyIPTCDictionary", this.CFStringRef);
    this.kCGImagePropertyGPSDictionary = lib.declare("kCGImagePropertyGPSDictionary", this.CFStringRef);
    this.kCGImagePropertyRawDictionary = lib.declare("kCGImagePropertyRawDictionary", this.CFStringRef);
    this.kCGImagePropertyCIFFDictionary = lib.declare("kCGImagePropertyCIFFDictionary", this.CFStringRef);
    this.kCGImagePropertyMakerCanonDictionary = lib.declare("kCGImagePropertyMakerCanonDictionary", this.CFStringRef);
    this.kCGImagePropertyMakerNikonDictionary = lib.declare("kCGImagePropertyMakerNikonDictionary", this.CFStringRef);
    this.kCGImagePropertyMakerMinoltaDictionary = lib.declare("kCGImagePropertyMakerMinoltaDictionary", this.CFStringRef);
    this.kCGImagePropertyMakerFujiDictionary = lib.declare("kCGImagePropertyMakerFujiDictionary", this.CFStringRef);
    this.kCGImagePropertyMakerOlympusDictionary = lib.declare("kCGImagePropertyMakerOlympusDictionary", this.CFStringRef);
    this.kCGImagePropertyMakerPentaxDictionary = lib.declare("kCGImagePropertyMakerPentaxDictionary", this.CFStringRef);
    this.kCGImageProperty8BIMDictionary = lib.declare("kCGImageProperty8BIMDictionary", this.CFStringRef);
    this.kCGImagePropertyDNGDictionary = lib.declare("kCGImagePropertyDNGDictionary", this.CFStringRef);
    this.kCGImagePropertyExifAuxDictionary = lib.declare("kCGImagePropertyExifAuxDictionary", this.CFStringRef);
    this.kCGImagePropertyFileSize = lib.declare("kCGImagePropertyFileSize", this.CFStringRef);
    this.kCGImagePropertyPixelHeight = lib.declare("kCGImagePropertyPixelHeight", this.CFStringRef);
    this.kCGImagePropertyPixelWidth = lib.declare("kCGImagePropertyPixelWidth", this.CFStringRef);
    this.kCGImagePropertyDPIHeight = lib.declare("kCGImagePropertyDPIHeight", this.CFStringRef);
    this.kCGImagePropertyDPIWidth = lib.declare("kCGImagePropertyDPIWidth", this.CFStringRef);
    this.kCGImagePropertyDepth = lib.declare("kCGImagePropertyDepth", this.CFStringRef);
    this.kCGImagePropertyOrientation = lib.declare("kCGImagePropertyOrientation", this.CFStringRef);
    this.kCGImagePropertyIsFloat = lib.declare("kCGImagePropertyIsFloat", this.CFStringRef);
    this.kCGImagePropertyIsIndexed = lib.declare("kCGImagePropertyIsIndexed", this.CFStringRef);
    this.kCGImagePropertyHasAlpha = lib.declare("kCGImagePropertyHasAlpha", this.CFStringRef);
    this.kCGImagePropertyColorModel = lib.declare("kCGImagePropertyColorModel", this.CFStringRef);
    this.kCGImagePropertyProfileName = lib.declare("kCGImagePropertyProfileName", this.CFStringRef);
    this.kCGImagePropertyColorModelRGB = lib.declare("kCGImagePropertyColorModelRGB", this.CFStringRef);
    this.kCGImagePropertyColorModelGray = lib.declare("kCGImagePropertyColorModelGray", this.CFStringRef);
    this.kCGImagePropertyColorModelCMYK = lib.declare("kCGImagePropertyColorModelCMYK", this.CFStringRef);
    this.kCGImagePropertyColorModelLab = lib.declare("kCGImagePropertyColorModelLab", this.CFStringRef);
    this.kCGImagePropertyTIFFCompression = lib.declare("kCGImagePropertyTIFFCompression", this.CFStringRef);
    this.kCGImagePropertyTIFFPhotometricInterpretation = lib.declare("kCGImagePropertyTIFFPhotometricInterpretation", this.CFStringRef);
    this.kCGImagePropertyTIFFDocumentName = lib.declare("kCGImagePropertyTIFFDocumentName", this.CFStringRef);
    this.kCGImagePropertyTIFFImageDescription = lib.declare("kCGImagePropertyTIFFImageDescription", this.CFStringRef);
    this.kCGImagePropertyTIFFMake = lib.declare("kCGImagePropertyTIFFMake", this.CFStringRef);
    this.kCGImagePropertyTIFFModel = lib.declare("kCGImagePropertyTIFFModel", this.CFStringRef);
    this.kCGImagePropertyTIFFOrientation = lib.declare("kCGImagePropertyTIFFOrientation", this.CFStringRef);
    this.kCGImagePropertyTIFFXResolution = lib.declare("kCGImagePropertyTIFFXResolution", this.CFStringRef);
    this.kCGImagePropertyTIFFYResolution = lib.declare("kCGImagePropertyTIFFYResolution", this.CFStringRef);
    this.kCGImagePropertyTIFFResolutionUnit = lib.declare("kCGImagePropertyTIFFResolutionUnit", this.CFStringRef);
    this.kCGImagePropertyTIFFSoftware = lib.declare("kCGImagePropertyTIFFSoftware", this.CFStringRef);
    this.kCGImagePropertyTIFFTransferFunction = lib.declare("kCGImagePropertyTIFFTransferFunction", this.CFStringRef);
    this.kCGImagePropertyTIFFDateTime = lib.declare("kCGImagePropertyTIFFDateTime", this.CFStringRef);
    this.kCGImagePropertyTIFFArtist = lib.declare("kCGImagePropertyTIFFArtist", this.CFStringRef);
    this.kCGImagePropertyTIFFHostComputer = lib.declare("kCGImagePropertyTIFFHostComputer", this.CFStringRef);
    this.kCGImagePropertyTIFFCopyright = lib.declare("kCGImagePropertyTIFFCopyright", this.CFStringRef);
    this.kCGImagePropertyTIFFWhitePoint = lib.declare("kCGImagePropertyTIFFWhitePoint", this.CFStringRef);
    this.kCGImagePropertyTIFFPrimaryChromaticities = lib.declare("kCGImagePropertyTIFFPrimaryChromaticities", this.CFStringRef);
    this.kCGImagePropertyJFIFVersion = lib.declare("kCGImagePropertyJFIFVersion", this.CFStringRef);
    this.kCGImagePropertyJFIFXDensity = lib.declare("kCGImagePropertyJFIFXDensity", this.CFStringRef);
    this.kCGImagePropertyJFIFYDensity = lib.declare("kCGImagePropertyJFIFYDensity", this.CFStringRef);
    this.kCGImagePropertyJFIFDensityUnit = lib.declare("kCGImagePropertyJFIFDensityUnit", this.CFStringRef);
    this.kCGImagePropertyJFIFIsProgressive = lib.declare("kCGImagePropertyJFIFIsProgressive", this.CFStringRef);
    this.kCGImagePropertyExifExposureTime = lib.declare("kCGImagePropertyExifExposureTime", this.CFStringRef);
    this.kCGImagePropertyExifFNumber = lib.declare("kCGImagePropertyExifFNumber", this.CFStringRef);
    this.kCGImagePropertyExifExposureProgram = lib.declare("kCGImagePropertyExifExposureProgram", this.CFStringRef);
    this.kCGImagePropertyExifSpectralSensitivity = lib.declare("kCGImagePropertyExifSpectralSensitivity", this.CFStringRef);
    this.kCGImagePropertyExifISOSpeedRatings = lib.declare("kCGImagePropertyExifISOSpeedRatings", this.CFStringRef);
    this.kCGImagePropertyExifOECF = lib.declare("kCGImagePropertyExifOECF", this.CFStringRef);
    this.kCGImagePropertyExifVersion = lib.declare("kCGImagePropertyExifVersion", this.CFStringRef);
    this.kCGImagePropertyExifDateTimeOriginal = lib.declare("kCGImagePropertyExifDateTimeOriginal", this.CFStringRef);
    this.kCGImagePropertyExifDateTimeDigitized = lib.declare("kCGImagePropertyExifDateTimeDigitized", this.CFStringRef);
    this.kCGImagePropertyExifComponentsConfiguration = lib.declare("kCGImagePropertyExifComponentsConfiguration", this.CFStringRef);
    this.kCGImagePropertyExifCompressedBitsPerPixel = lib.declare("kCGImagePropertyExifCompressedBitsPerPixel", this.CFStringRef);
    this.kCGImagePropertyExifShutterSpeedValue = lib.declare("kCGImagePropertyExifShutterSpeedValue", this.CFStringRef);
    this.kCGImagePropertyExifApertureValue = lib.declare("kCGImagePropertyExifApertureValue", this.CFStringRef);
    this.kCGImagePropertyExifBrightnessValue = lib.declare("kCGImagePropertyExifBrightnessValue", this.CFStringRef);
    this.kCGImagePropertyExifExposureBiasValue = lib.declare("kCGImagePropertyExifExposureBiasValue", this.CFStringRef);
    this.kCGImagePropertyExifMaxApertureValue = lib.declare("kCGImagePropertyExifMaxApertureValue", this.CFStringRef);
    this.kCGImagePropertyExifSubjectDistance = lib.declare("kCGImagePropertyExifSubjectDistance", this.CFStringRef);
    this.kCGImagePropertyExifMeteringMode = lib.declare("kCGImagePropertyExifMeteringMode", this.CFStringRef);
    this.kCGImagePropertyExifLightSource = lib.declare("kCGImagePropertyExifLightSource", this.CFStringRef);
    this.kCGImagePropertyExifFlash = lib.declare("kCGImagePropertyExifFlash", this.CFStringRef);
    this.kCGImagePropertyExifFocalLength = lib.declare("kCGImagePropertyExifFocalLength", this.CFStringRef);
    this.kCGImagePropertyExifSubjectArea = lib.declare("kCGImagePropertyExifSubjectArea", this.CFStringRef);
    this.kCGImagePropertyExifMakerNote = lib.declare("kCGImagePropertyExifMakerNote", this.CFStringRef);
    this.kCGImagePropertyExifUserComment = lib.declare("kCGImagePropertyExifUserComment", this.CFStringRef);
    this.kCGImagePropertyExifSubsecTime = lib.declare("kCGImagePropertyExifSubsecTime", this.CFStringRef);
    this.kCGImagePropertyExifSubsecTimeOrginal = lib.declare("kCGImagePropertyExifSubsecTimeOrginal", this.CFStringRef);
    this.kCGImagePropertyExifSubsecTimeDigitized = lib.declare("kCGImagePropertyExifSubsecTimeDigitized", this.CFStringRef);
    this.kCGImagePropertyExifFlashPixVersion = lib.declare("kCGImagePropertyExifFlashPixVersion", this.CFStringRef);
    this.kCGImagePropertyExifColorSpace = lib.declare("kCGImagePropertyExifColorSpace", this.CFStringRef);
    this.kCGImagePropertyExifPixelXDimension = lib.declare("kCGImagePropertyExifPixelXDimension", this.CFStringRef);
    this.kCGImagePropertyExifPixelYDimension = lib.declare("kCGImagePropertyExifPixelYDimension", this.CFStringRef);
    this.kCGImagePropertyExifRelatedSoundFile = lib.declare("kCGImagePropertyExifRelatedSoundFile", this.CFStringRef);
    this.kCGImagePropertyExifFlashEnergy = lib.declare("kCGImagePropertyExifFlashEnergy", this.CFStringRef);
    this.kCGImagePropertyExifSpatialFrequencyResponse = lib.declare("kCGImagePropertyExifSpatialFrequencyResponse", this.CFStringRef);
    this.kCGImagePropertyExifFocalPlaneXResolution = lib.declare("kCGImagePropertyExifFocalPlaneXResolution", this.CFStringRef);
    this.kCGImagePropertyExifFocalPlaneYResolution = lib.declare("kCGImagePropertyExifFocalPlaneYResolution", this.CFStringRef);
    this.kCGImagePropertyExifFocalPlaneResolutionUnit = lib.declare("kCGImagePropertyExifFocalPlaneResolutionUnit", this.CFStringRef);
    this.kCGImagePropertyExifSubjectLocation = lib.declare("kCGImagePropertyExifSubjectLocation", this.CFStringRef);
    this.kCGImagePropertyExifExposureIndex = lib.declare("kCGImagePropertyExifExposureIndex", this.CFStringRef);
    this.kCGImagePropertyExifSensingMethod = lib.declare("kCGImagePropertyExifSensingMethod", this.CFStringRef);
    this.kCGImagePropertyExifFileSource = lib.declare("kCGImagePropertyExifFileSource", this.CFStringRef);
    this.kCGImagePropertyExifSceneType = lib.declare("kCGImagePropertyExifSceneType", this.CFStringRef);
    this.kCGImagePropertyExifCFAPattern = lib.declare("kCGImagePropertyExifCFAPattern", this.CFStringRef);
    this.kCGImagePropertyExifCustomRendered = lib.declare("kCGImagePropertyExifCustomRendered", this.CFStringRef);
    this.kCGImagePropertyExifExposureMode = lib.declare("kCGImagePropertyExifExposureMode", this.CFStringRef);
    this.kCGImagePropertyExifWhiteBalance = lib.declare("kCGImagePropertyExifWhiteBalance", this.CFStringRef);
    this.kCGImagePropertyExifDigitalZoomRatio = lib.declare("kCGImagePropertyExifDigitalZoomRatio", this.CFStringRef);
    this.kCGImagePropertyExifFocalLenIn35mmFilm = lib.declare("kCGImagePropertyExifFocalLenIn35mmFilm", this.CFStringRef);
    this.kCGImagePropertyExifSceneCaptureType = lib.declare("kCGImagePropertyExifSceneCaptureType", this.CFStringRef);
    this.kCGImagePropertyExifGainControl = lib.declare("kCGImagePropertyExifGainControl", this.CFStringRef);
    this.kCGImagePropertyExifContrast = lib.declare("kCGImagePropertyExifContrast", this.CFStringRef);
    this.kCGImagePropertyExifSaturation = lib.declare("kCGImagePropertyExifSaturation", this.CFStringRef);
    this.kCGImagePropertyExifSharpness = lib.declare("kCGImagePropertyExifSharpness", this.CFStringRef);
    this.kCGImagePropertyExifDeviceSettingDescription = lib.declare("kCGImagePropertyExifDeviceSettingDescription", this.CFStringRef);
    this.kCGImagePropertyExifSubjectDistRange = lib.declare("kCGImagePropertyExifSubjectDistRange", this.CFStringRef);
    this.kCGImagePropertyExifImageUniqueID = lib.declare("kCGImagePropertyExifImageUniqueID", this.CFStringRef);
    this.kCGImagePropertyExifGamma = lib.declare("kCGImagePropertyExifGamma", this.CFStringRef);
    this.kCGImagePropertyExifAuxLensInfo = lib.declare("kCGImagePropertyExifAuxLensInfo", this.CFStringRef);
    this.kCGImagePropertyExifAuxLensModel = lib.declare("kCGImagePropertyExifAuxLensModel", this.CFStringRef);
    this.kCGImagePropertyExifAuxSerialNumber = lib.declare("kCGImagePropertyExifAuxSerialNumber", this.CFStringRef);
    this.kCGImagePropertyExifAuxLensID = lib.declare("kCGImagePropertyExifAuxLensID", this.CFStringRef);
    this.kCGImagePropertyExifAuxLensSerialNumber = lib.declare("kCGImagePropertyExifAuxLensSerialNumber", this.CFStringRef);
    this.kCGImagePropertyExifAuxImageNumber = lib.declare("kCGImagePropertyExifAuxImageNumber", this.CFStringRef);
    this.kCGImagePropertyExifAuxFlashCompensation = lib.declare("kCGImagePropertyExifAuxFlashCompensation", this.CFStringRef);
    this.kCGImagePropertyExifAuxOwnerName = lib.declare("kCGImagePropertyExifAuxOwnerName", this.CFStringRef);
    this.kCGImagePropertyExifAuxFirmware = lib.declare("kCGImagePropertyExifAuxFirmware", this.CFStringRef);
    this.kCGImagePropertyGIFLoopCount = lib.declare("kCGImagePropertyGIFLoopCount", this.CFStringRef);
    this.kCGImagePropertyGIFDelayTime = lib.declare("kCGImagePropertyGIFDelayTime", this.CFStringRef);
    this.kCGImagePropertyGIFImageColorMap = lib.declare("kCGImagePropertyGIFImageColorMap", this.CFStringRef);
    this.kCGImagePropertyGIFHasGlobalColorMap = lib.declare("kCGImagePropertyGIFHasGlobalColorMap", this.CFStringRef);
    this.kCGImagePropertyPNGGamma = lib.declare("kCGImagePropertyPNGGamma", this.CFStringRef);
    this.kCGImagePropertyPNGInterlaceType = lib.declare("kCGImagePropertyPNGInterlaceType", this.CFStringRef);
    this.kCGImagePropertyPNGXPixelsPerMeter = lib.declare("kCGImagePropertyPNGXPixelsPerMeter", this.CFStringRef);
    this.kCGImagePropertyPNGYPixelsPerMeter = lib.declare("kCGImagePropertyPNGYPixelsPerMeter", this.CFStringRef);
    this.kCGImagePropertyPNGsRGBIntent = lib.declare("kCGImagePropertyPNGsRGBIntent", this.CFStringRef);
    this.kCGImagePropertyPNGChromaticities = lib.declare("kCGImagePropertyPNGChromaticities", this.CFStringRef);
    this.kCGImagePropertyGPSVersion = lib.declare("kCGImagePropertyGPSVersion", this.CFStringRef);
    this.kCGImagePropertyGPSLatitudeRef = lib.declare("kCGImagePropertyGPSLatitudeRef", this.CFStringRef);
    this.kCGImagePropertyGPSLatitude = lib.declare("kCGImagePropertyGPSLatitude", this.CFStringRef);
    this.kCGImagePropertyGPSLongitudeRef = lib.declare("kCGImagePropertyGPSLongitudeRef", this.CFStringRef);
    this.kCGImagePropertyGPSLongitude = lib.declare("kCGImagePropertyGPSLongitude", this.CFStringRef);
    this.kCGImagePropertyGPSAltitudeRef = lib.declare("kCGImagePropertyGPSAltitudeRef", this.CFStringRef);
    this.kCGImagePropertyGPSAltitude = lib.declare("kCGImagePropertyGPSAltitude", this.CFStringRef);
    this.kCGImagePropertyGPSTimeStamp = lib.declare("kCGImagePropertyGPSTimeStamp", this.CFStringRef);
    this.kCGImagePropertyGPSSatellites = lib.declare("kCGImagePropertyGPSSatellites", this.CFStringRef);
    this.kCGImagePropertyGPSStatus = lib.declare("kCGImagePropertyGPSStatus", this.CFStringRef);
    this.kCGImagePropertyGPSMeasureMode = lib.declare("kCGImagePropertyGPSMeasureMode", this.CFStringRef);
    this.kCGImagePropertyGPSDOP = lib.declare("kCGImagePropertyGPSDOP", this.CFStringRef);
    this.kCGImagePropertyGPSSpeedRef = lib.declare("kCGImagePropertyGPSSpeedRef", this.CFStringRef);
    this.kCGImagePropertyGPSSpeed = lib.declare("kCGImagePropertyGPSSpeed", this.CFStringRef);
    this.kCGImagePropertyGPSTrackRef = lib.declare("kCGImagePropertyGPSTrackRef", this.CFStringRef);
    this.kCGImagePropertyGPSTrack = lib.declare("kCGImagePropertyGPSTrack", this.CFStringRef);
    this.kCGImagePropertyGPSImgDirectionRef = lib.declare("kCGImagePropertyGPSImgDirectionRef", this.CFStringRef);
    this.kCGImagePropertyGPSImgDirection = lib.declare("kCGImagePropertyGPSImgDirection", this.CFStringRef);
    this.kCGImagePropertyGPSMapDatum = lib.declare("kCGImagePropertyGPSMapDatum", this.CFStringRef);
    this.kCGImagePropertyGPSDestLatitudeRef = lib.declare("kCGImagePropertyGPSDestLatitudeRef", this.CFStringRef);
    this.kCGImagePropertyGPSDestLatitude = lib.declare("kCGImagePropertyGPSDestLatitude", this.CFStringRef);
    this.kCGImagePropertyGPSDestLongitudeRef = lib.declare("kCGImagePropertyGPSDestLongitudeRef", this.CFStringRef);
    this.kCGImagePropertyGPSDestLongitude = lib.declare("kCGImagePropertyGPSDestLongitude", this.CFStringRef);
    this.kCGImagePropertyGPSDestBearingRef = lib.declare("kCGImagePropertyGPSDestBearingRef", this.CFStringRef);
    this.kCGImagePropertyGPSDestBearing = lib.declare("kCGImagePropertyGPSDestBearing", this.CFStringRef);
    this.kCGImagePropertyGPSDestDistanceRef = lib.declare("kCGImagePropertyGPSDestDistanceRef", this.CFStringRef);
    this.kCGImagePropertyGPSDestDistance = lib.declare("kCGImagePropertyGPSDestDistance", this.CFStringRef);
    this.kCGImagePropertyGPSProcessingMethod = lib.declare("kCGImagePropertyGPSProcessingMethod", this.CFStringRef);
    this.kCGImagePropertyGPSAreaInformation = lib.declare("kCGImagePropertyGPSAreaInformation", this.CFStringRef);
    this.kCGImagePropertyGPSDateStamp = lib.declare("kCGImagePropertyGPSDateStamp", this.CFStringRef);
    this.kCGImagePropertyGPSDifferental = lib.declare("kCGImagePropertyGPSDifferental", this.CFStringRef);
    this.kCGImagePropertyIPTCObjectTypeReference = lib.declare("kCGImagePropertyIPTCObjectTypeReference", this.CFStringRef);
    this.kCGImagePropertyIPTCObjectAttributeReference = lib.declare("kCGImagePropertyIPTCObjectAttributeReference", this.CFStringRef);
    this.kCGImagePropertyIPTCObjectName = lib.declare("kCGImagePropertyIPTCObjectName", this.CFStringRef);
    this.kCGImagePropertyIPTCEditStatus = lib.declare("kCGImagePropertyIPTCEditStatus", this.CFStringRef);
    this.kCGImagePropertyIPTCEditorialUpdate = lib.declare("kCGImagePropertyIPTCEditorialUpdate", this.CFStringRef);
    this.kCGImagePropertyIPTCUrgency = lib.declare("kCGImagePropertyIPTCUrgency", this.CFStringRef);
    this.kCGImagePropertyIPTCSubjectReference = lib.declare("kCGImagePropertyIPTCSubjectReference", this.CFStringRef);
    this.kCGImagePropertyIPTCCategory = lib.declare("kCGImagePropertyIPTCCategory", this.CFStringRef);
    this.kCGImagePropertyIPTCSupplementalCategory = lib.declare("kCGImagePropertyIPTCSupplementalCategory", this.CFStringRef);
    this.kCGImagePropertyIPTCFixtureIdentifier = lib.declare("kCGImagePropertyIPTCFixtureIdentifier", this.CFStringRef);
    this.kCGImagePropertyIPTCKeywords = lib.declare("kCGImagePropertyIPTCKeywords", this.CFStringRef);
    this.kCGImagePropertyIPTCContentLocationCode = lib.declare("kCGImagePropertyIPTCContentLocationCode", this.CFStringRef);
    this.kCGImagePropertyIPTCContentLocationName = lib.declare("kCGImagePropertyIPTCContentLocationName", this.CFStringRef);
    this.kCGImagePropertyIPTCReleaseDate = lib.declare("kCGImagePropertyIPTCReleaseDate", this.CFStringRef);
    this.kCGImagePropertyIPTCReleaseTime = lib.declare("kCGImagePropertyIPTCReleaseTime", this.CFStringRef);
    this.kCGImagePropertyIPTCExpirationDate = lib.declare("kCGImagePropertyIPTCExpirationDate", this.CFStringRef);
    this.kCGImagePropertyIPTCExpirationTime = lib.declare("kCGImagePropertyIPTCExpirationTime", this.CFStringRef);
    this.kCGImagePropertyIPTCSpecialInstructions = lib.declare("kCGImagePropertyIPTCSpecialInstructions", this.CFStringRef);
    this.kCGImagePropertyIPTCActionAdvised = lib.declare("kCGImagePropertyIPTCActionAdvised", this.CFStringRef);
    this.kCGImagePropertyIPTCReferenceService = lib.declare("kCGImagePropertyIPTCReferenceService", this.CFStringRef);
    this.kCGImagePropertyIPTCReferenceDate = lib.declare("kCGImagePropertyIPTCReferenceDate", this.CFStringRef);
    this.kCGImagePropertyIPTCReferenceNumber = lib.declare("kCGImagePropertyIPTCReferenceNumber", this.CFStringRef);
    this.kCGImagePropertyIPTCDateCreated = lib.declare("kCGImagePropertyIPTCDateCreated", this.CFStringRef);
    this.kCGImagePropertyIPTCTimeCreated = lib.declare("kCGImagePropertyIPTCTimeCreated", this.CFStringRef);
    this.kCGImagePropertyIPTCDigitalCreationDate = lib.declare("kCGImagePropertyIPTCDigitalCreationDate", this.CFStringRef);
    this.kCGImagePropertyIPTCDigitalCreationTime = lib.declare("kCGImagePropertyIPTCDigitalCreationTime", this.CFStringRef);
    this.kCGImagePropertyIPTCOriginatingProgram = lib.declare("kCGImagePropertyIPTCOriginatingProgram", this.CFStringRef);
    this.kCGImagePropertyIPTCProgramVersion = lib.declare("kCGImagePropertyIPTCProgramVersion", this.CFStringRef);
    this.kCGImagePropertyIPTCObjectCycle = lib.declare("kCGImagePropertyIPTCObjectCycle", this.CFStringRef);
    this.kCGImagePropertyIPTCByline = lib.declare("kCGImagePropertyIPTCByline", this.CFStringRef);
    this.kCGImagePropertyIPTCBylineTitle = lib.declare("kCGImagePropertyIPTCBylineTitle", this.CFStringRef);
    this.kCGImagePropertyIPTCCity = lib.declare("kCGImagePropertyIPTCCity", this.CFStringRef);
    this.kCGImagePropertyIPTCSubLocation = lib.declare("kCGImagePropertyIPTCSubLocation", this.CFStringRef);
    this.kCGImagePropertyIPTCProvinceState = lib.declare("kCGImagePropertyIPTCProvinceState", this.CFStringRef);
    this.kCGImagePropertyIPTCCountryPrimaryLocationCode = lib.declare("kCGImagePropertyIPTCCountryPrimaryLocationCode", this.CFStringRef);
    this.kCGImagePropertyIPTCCountryPrimaryLocationName = lib.declare("kCGImagePropertyIPTCCountryPrimaryLocationName", this.CFStringRef);
    this.kCGImagePropertyIPTCOriginalTransmissionReference = lib.declare("kCGImagePropertyIPTCOriginalTransmissionReference", this.CFStringRef);
    this.kCGImagePropertyIPTCHeadline = lib.declare("kCGImagePropertyIPTCHeadline", this.CFStringRef);
    this.kCGImagePropertyIPTCCredit = lib.declare("kCGImagePropertyIPTCCredit", this.CFStringRef);
    this.kCGImagePropertyIPTCSource = lib.declare("kCGImagePropertyIPTCSource", this.CFStringRef);
    this.kCGImagePropertyIPTCCopyrightNotice = lib.declare("kCGImagePropertyIPTCCopyrightNotice", this.CFStringRef);
    this.kCGImagePropertyIPTCContact = lib.declare("kCGImagePropertyIPTCContact", this.CFStringRef);
    this.kCGImagePropertyIPTCCaptionAbstract = lib.declare("kCGImagePropertyIPTCCaptionAbstract", this.CFStringRef);
    this.kCGImagePropertyIPTCWriterEditor = lib.declare("kCGImagePropertyIPTCWriterEditor", this.CFStringRef);
    this.kCGImagePropertyIPTCImageType = lib.declare("kCGImagePropertyIPTCImageType", this.CFStringRef);
    this.kCGImagePropertyIPTCImageOrientation = lib.declare("kCGImagePropertyIPTCImageOrientation", this.CFStringRef);
    this.kCGImagePropertyIPTCLanguageIdentifier = lib.declare("kCGImagePropertyIPTCLanguageIdentifier", this.CFStringRef);
    this.kCGImagePropertyIPTCStarRating = lib.declare("kCGImagePropertyIPTCStarRating", this.CFStringRef);
    this.kCGImagePropertyIPTCCreatorContactInfo = lib.declare("kCGImagePropertyIPTCCreatorContactInfo", this.CFStringRef);
    this.kCGImagePropertyIPTCRightsUsageTerms = lib.declare("kCGImagePropertyIPTCRightsUsageTerms", this.CFStringRef);
    this.kCGImagePropertyIPTCScene = lib.declare("kCGImagePropertyIPTCScene", this.CFStringRef);
    this.kCGImagePropertyIPTCContactInfoCity = lib.declare("kCGImagePropertyIPTCContactInfoCity", this.CFStringRef);
    this.kCGImagePropertyIPTCContactInfoCountry = lib.declare("kCGImagePropertyIPTCContactInfoCountry", this.CFStringRef);
    this.kCGImagePropertyIPTCContactInfoAddress = lib.declare("kCGImagePropertyIPTCContactInfoAddress", this.CFStringRef);
    this.kCGImagePropertyIPTCContactInfoPostalCode = lib.declare("kCGImagePropertyIPTCContactInfoPostalCode", this.CFStringRef);
    this.kCGImagePropertyIPTCContactInfoStateProvince = lib.declare("kCGImagePropertyIPTCContactInfoStateProvince", this.CFStringRef);
    this.kCGImagePropertyIPTCContactInfoEmails = lib.declare("kCGImagePropertyIPTCContactInfoEmails", this.CFStringRef);
    this.kCGImagePropertyIPTCContactInfoPhones = lib.declare("kCGImagePropertyIPTCContactInfoPhones", this.CFStringRef);
    this.kCGImagePropertyIPTCContactInfoWebURLs = lib.declare("kCGImagePropertyIPTCContactInfoWebURLs", this.CFStringRef);
    this.kCGImageProperty8BIMLayerNames = lib.declare("kCGImageProperty8BIMLayerNames", this.CFStringRef);
    this.kCGImagePropertyDNGVersion = lib.declare("kCGImagePropertyDNGVersion", this.CFStringRef);
    this.kCGImagePropertyDNGBackwardVersion = lib.declare("kCGImagePropertyDNGBackwardVersion", this.CFStringRef);
    this.kCGImagePropertyDNGUniqueCameraModel = lib.declare("kCGImagePropertyDNGUniqueCameraModel", this.CFStringRef);
    this.kCGImagePropertyDNGLocalizedCameraModel = lib.declare("kCGImagePropertyDNGLocalizedCameraModel", this.CFStringRef);
    this.kCGImagePropertyDNGCameraSerialNumber = lib.declare("kCGImagePropertyDNGCameraSerialNumber", this.CFStringRef);
    this.kCGImagePropertyDNGLensInfo = lib.declare("kCGImagePropertyDNGLensInfo", this.CFStringRef);
    this.kCGImagePropertyCIFFDescription = lib.declare("kCGImagePropertyCIFFDescription", this.CFStringRef);
    this.kCGImagePropertyCIFFFirmware = lib.declare("kCGImagePropertyCIFFFirmware", this.CFStringRef);
    this.kCGImagePropertyCIFFOwnerName = lib.declare("kCGImagePropertyCIFFOwnerName", this.CFStringRef);
    this.kCGImagePropertyCIFFImageName = lib.declare("kCGImagePropertyCIFFImageName", this.CFStringRef);
    this.kCGImagePropertyCIFFImageFileName = lib.declare("kCGImagePropertyCIFFImageFileName", this.CFStringRef);
    this.kCGImagePropertyCIFFReleaseMethod = lib.declare("kCGImagePropertyCIFFReleaseMethod", this.CFStringRef);
    this.kCGImagePropertyCIFFReleaseTiming = lib.declare("kCGImagePropertyCIFFReleaseTiming", this.CFStringRef);
    this.kCGImagePropertyCIFFRecordID = lib.declare("kCGImagePropertyCIFFRecordID", this.CFStringRef);
    this.kCGImagePropertyCIFFSelfTimingTime = lib.declare("kCGImagePropertyCIFFSelfTimingTime", this.CFStringRef);
    this.kCGImagePropertyCIFFCameraSerialNumber = lib.declare("kCGImagePropertyCIFFCameraSerialNumber", this.CFStringRef);
    this.kCGImagePropertyCIFFImageSerialNumber = lib.declare("kCGImagePropertyCIFFImageSerialNumber", this.CFStringRef);
    this.kCGImagePropertyCIFFContinuousDrive = lib.declare("kCGImagePropertyCIFFContinuousDrive", this.CFStringRef);
    this.kCGImagePropertyCIFFFocusMode = lib.declare("kCGImagePropertyCIFFFocusMode", this.CFStringRef);
    this.kCGImagePropertyCIFFMeteringMode = lib.declare("kCGImagePropertyCIFFMeteringMode", this.CFStringRef);
    this.kCGImagePropertyCIFFShootingMode = lib.declare("kCGImagePropertyCIFFShootingMode", this.CFStringRef);
    this.kCGImagePropertyCIFFLensModel = lib.declare("kCGImagePropertyCIFFLensModel", this.CFStringRef);
    this.kCGImagePropertyCIFFLensMaxMM = lib.declare("kCGImagePropertyCIFFLensMaxMM", this.CFStringRef);
    this.kCGImagePropertyCIFFLensMinMM = lib.declare("kCGImagePropertyCIFFLensMinMM", this.CFStringRef);
    this.kCGImagePropertyCIFFWhiteBalanceIndex = lib.declare("kCGImagePropertyCIFFWhiteBalanceIndex", this.CFStringRef);
    this.kCGImagePropertyCIFFFlashExposureComp = lib.declare("kCGImagePropertyCIFFFlashExposureComp", this.CFStringRef);
    this.kCGImagePropertyCIFFMeasuredEV = lib.declare("kCGImagePropertyCIFFMeasuredEV", this.CFStringRef);
    this.kCGImagePropertyMakerNikonISOSetting = lib.declare("kCGImagePropertyMakerNikonISOSetting", this.CFStringRef);
    this.kCGImagePropertyMakerNikonColorMode = lib.declare("kCGImagePropertyMakerNikonColorMode", this.CFStringRef);
    this.kCGImagePropertyMakerNikonQuality = lib.declare("kCGImagePropertyMakerNikonQuality", this.CFStringRef);
    this.kCGImagePropertyMakerNikonWhiteBalanceMode = lib.declare("kCGImagePropertyMakerNikonWhiteBalanceMode", this.CFStringRef);
    this.kCGImagePropertyMakerNikonSharpenMode = lib.declare("kCGImagePropertyMakerNikonSharpenMode", this.CFStringRef);
    this.kCGImagePropertyMakerNikonFocusMode = lib.declare("kCGImagePropertyMakerNikonFocusMode", this.CFStringRef);
    this.kCGImagePropertyMakerNikonFlashSetting = lib.declare("kCGImagePropertyMakerNikonFlashSetting", this.CFStringRef);
    this.kCGImagePropertyMakerNikonISOSelection = lib.declare("kCGImagePropertyMakerNikonISOSelection", this.CFStringRef);
    this.kCGImagePropertyMakerNikonFlashExposureComp = lib.declare("kCGImagePropertyMakerNikonFlashExposureComp", this.CFStringRef);
    this.kCGImagePropertyMakerNikonImageAdjustment = lib.declare("kCGImagePropertyMakerNikonImageAdjustment", this.CFStringRef);
    this.kCGImagePropertyMakerNikonLensAdapter = lib.declare("kCGImagePropertyMakerNikonLensAdapter", this.CFStringRef);
    this.kCGImagePropertyMakerNikonLensType = lib.declare("kCGImagePropertyMakerNikonLensType", this.CFStringRef);
    this.kCGImagePropertyMakerNikonLensInfo = lib.declare("kCGImagePropertyMakerNikonLensInfo", this.CFStringRef);
    this.kCGImagePropertyMakerNikonFocusDistance = lib.declare("kCGImagePropertyMakerNikonFocusDistance", this.CFStringRef);
    this.kCGImagePropertyMakerNikonDigitalZoom = lib.declare("kCGImagePropertyMakerNikonDigitalZoom", this.CFStringRef);
    this.kCGImagePropertyMakerNikonShootingMode = lib.declare("kCGImagePropertyMakerNikonShootingMode", this.CFStringRef);
    this.kCGImagePropertyMakerNikonCameraSerialNumber = lib.declare("kCGImagePropertyMakerNikonCameraSerialNumber", this.CFStringRef);
    this.kCGImagePropertyMakerNikonShutterCount = lib.declare("kCGImagePropertyMakerNikonShutterCount", this.CFStringRef);
    this.kCGImagePropertyMakerCanonOwnerName = lib.declare("kCGImagePropertyMakerCanonOwnerName", this.CFStringRef);
    this.kCGImagePropertyMakerCanonCameraSerialNumber = lib.declare("kCGImagePropertyMakerCanonCameraSerialNumber", this.CFStringRef);
    this.kCGImagePropertyMakerCanonImageSerialNumber = lib.declare("kCGImagePropertyMakerCanonImageSerialNumber", this.CFStringRef);
    this.kCGImagePropertyMakerCanonFlashExposureComp = lib.declare("kCGImagePropertyMakerCanonFlashExposureComp", this.CFStringRef);
    this.kCGImagePropertyMakerCanonContinuousDrive = lib.declare("kCGImagePropertyMakerCanonContinuousDrive", this.CFStringRef);
    this.kCGImagePropertyMakerCanonLensModel = lib.declare("kCGImagePropertyMakerCanonLensModel", this.CFStringRef);
    this.kCGImagePropertyMakerCanonFirmware = lib.declare("kCGImagePropertyMakerCanonFirmware", this.CFStringRef);
    this.kCGImagePropertyMakerCanonAspectRatioInfo = lib.declare("kCGImagePropertyMakerCanonAspectRatioInfo", this.CFStringRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/Headers/CGImageDestination.h
function CGImageDestination_h(lib) {
    CFData_h.call(this, lib);
    CGImageSource_h.call(this, lib);
    CGImage_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CGDataConsumer_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CGIMAGEDESTINATION_H)
        return;
    this._CGIMAGEDESTINATION_H = true;

    this.CGImageDestination = new ctypes.StructType("CGImageDestination");
    this.CGImageDestinationRef = this.CGImageDestination.ptr;
    this.kCGImageDestinationLossyCompressionQuality = lib.declare("kCGImageDestinationLossyCompressionQuality", this.CFStringRef);
    this.kCGImageDestinationBackgroundColor = lib.declare("kCGImageDestinationBackgroundColor", this.CFStringRef);
    this.CGImageDestinationGetTypeID = lib.declare("CGImageDestinationGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGImageDestinationCopyTypeIdentifiers = lib.declare("CGImageDestinationCopyTypeIdentifiers", ctypes.default_abi, this.CFArrayRef);
    // Dropping declaration of 'CGImageDestinationCreateWithDataConsumer': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageDestinationCreateWithData': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageDestinationCreateWithURL': 'size_t' defined out of scope
    this.CGImageDestinationSetProperties = lib.declare("CGImageDestinationSetProperties", ctypes.default_abi, ctypes.void_t, this.CGImageDestinationRef, this.CFDictionaryRef);
    this.CGImageDestinationAddImage = lib.declare("CGImageDestinationAddImage", ctypes.default_abi, ctypes.void_t, this.CGImageDestinationRef, this.CGImageRef, this.CFDictionaryRef);
    // Dropping declaration of 'CGImageDestinationAddImageFromSource': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageDestinationFinalize': Unknown type bool_t
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/Headers/CGImageSource.h
function CGImageSource_h(lib) {
    CGDataProvider_h.call(this, lib);
    CFData_h.call(this, lib);
    CFURL_h.call(this, lib);
    CGImage_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CGIMAGESOURCE_H)
        return;
    this._CGIMAGESOURCE_H = true;

    this.CGImageSource = new ctypes.StructType("CGImageSource");
    this.CGImageSourceRef = this.CGImageSource.ptr;
    this.kCGImageStatusUnexpectedEOF = -5;
    this.kCGImageStatusInvalidData = -4;
    this.kCGImageStatusUnknownType = -3;
    this.kCGImageStatusReadingHeader = -2;
    this.kCGImageStatusIncomplete = -1;
    this.kCGImageStatusComplete = 0;
    this.kCGImageSourceTypeIdentifierHint = lib.declare("kCGImageSourceTypeIdentifierHint", this.CFStringRef);
    this.kCGImageSourceShouldCache = lib.declare("kCGImageSourceShouldCache", this.CFStringRef);
    this.kCGImageSourceShouldAllowFloat = lib.declare("kCGImageSourceShouldAllowFloat", this.CFStringRef);
    this.kCGImageSourceCreateThumbnailFromImageIfAbsent = lib.declare("kCGImageSourceCreateThumbnailFromImageIfAbsent", this.CFStringRef);
    this.kCGImageSourceCreateThumbnailFromImageAlways = lib.declare("kCGImageSourceCreateThumbnailFromImageAlways", this.CFStringRef);
    this.kCGImageSourceThumbnailMaxPixelSize = lib.declare("kCGImageSourceThumbnailMaxPixelSize", this.CFStringRef);
    this.kCGImageSourceCreateThumbnailWithTransform = lib.declare("kCGImageSourceCreateThumbnailWithTransform", this.CFStringRef);
    this.CGImageSourceGetTypeID = lib.declare("CGImageSourceGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGImageSourceCopyTypeIdentifiers = lib.declare("CGImageSourceCopyTypeIdentifiers", ctypes.default_abi, this.CFArrayRef);
    this.CGImageSourceCreateWithDataProvider = lib.declare("CGImageSourceCreateWithDataProvider", ctypes.default_abi, this.CGImageSourceRef, this.CGDataProviderRef, this.CFDictionaryRef);
    this.CGImageSourceCreateWithData = lib.declare("CGImageSourceCreateWithData", ctypes.default_abi, this.CGImageSourceRef, this.CFDataRef, this.CFDictionaryRef);
    this.CGImageSourceCreateWithURL = lib.declare("CGImageSourceCreateWithURL", ctypes.default_abi, this.CGImageSourceRef, this.CFURLRef, this.CFDictionaryRef);
    this.CGImageSourceGetType = lib.declare("CGImageSourceGetType", ctypes.default_abi, this.CFStringRef, this.CGImageSourceRef);
    // Dropping declaration of 'CGImageSourceGetCount': 'size_t' defined out of scope
    this.CGImageSourceCopyProperties = lib.declare("CGImageSourceCopyProperties", ctypes.default_abi, this.CFDictionaryRef, this.CGImageSourceRef, this.CFDictionaryRef);
    // Dropping declaration of 'CGImageSourceCopyPropertiesAtIndex': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageSourceCreateImageAtIndex': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageSourceCreateThumbnailAtIndex': 'size_t' defined out of scope
    this.CGImageSourceCreateIncremental = lib.declare("CGImageSourceCreateIncremental", ctypes.default_abi, this.CGImageSourceRef, this.CFDictionaryRef);
    // Dropping declaration of 'CGImageSourceUpdateData': Unknown type bool_t
    // Dropping declaration of 'CGImageSourceUpdateDataProvider': Unknown type bool_t
    this.CGImageSourceGetStatus = lib.declare("CGImageSourceGetStatus", ctypes.default_abi, this.CGImageSourceStatus, this.CGImageSourceRef);
    // Dropping declaration of 'CGImageSourceGetStatusAtIndex': 'size_t' defined out of scope
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/CoreGraphics.jsm");

const EXPORTED_SYMBOLS = ["ImageIO", "CGImageProperties_h", "CGImageDestination_h", "CGImageSource_h"];

function ImageIO() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/ImageIO";
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

    CGImageProperties_h.call(this, lib);
    CGImageDestination_h.call(this, lib);
    CGImageSource_h.call(this, lib);
}
