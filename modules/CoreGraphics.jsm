// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDirectPalette.h
function CGDirectPalette_h(lib) {

    if (this._CGDIRECTPALETTE_H)
        return;
    this._CGDIRECTPALETTE_H = true;

    this.CGPaletteBlendFraction = ctypes.float;
    this.CGDeviceColor = new ctypes.StructType("CGDeviceColor", [{red: ctypes.float}, {green: ctypes.float}, {blue: ctypes.float}]);
    this.CGDeviceByteColor = new ctypes.StructType("CGDeviceByteColor", []);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGShading.h
function CGShading_h(lib) {

    if (this._CGSHADING_H)
        return;
    this._CGSHADING_H = true;

    this.CGShading = new ctypes.StructType("CGShading");
    this.CGShadingRef = this.CGShading.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGContext.h
function CGContext_h(lib) {

    if (this._CGCONTEXT_H)
        return;
    this._CGCONTEXT_H = true;

    this.CGContext = new ctypes.StructType("CGContext");
    this.CGContextRef = this.CGContext.ptr;
    this.kCGLineJoinMiter = 0;
    this.kCGLineJoinRound = 1;
    this.kCGLineJoinBevel = 2;
    this.kCGLineCapButt = 0;
    this.kCGLineCapRound = 1;
    this.kCGLineCapSquare = 2;
    this.kCGPathFill = 0;
    this.kCGPathEOFill = 1;
    this.kCGPathStroke = 2;
    this.kCGPathFillStroke = 3;
    this.kCGPathEOFillStroke = 4;
    this.kCGTextFill = 0;
    this.kCGTextStroke = 1;
    this.kCGTextFillStroke = 2;
    this.kCGTextInvisible = 3;
    this.kCGTextFillClip = 4;
    this.kCGTextStrokeClip = 5;
    this.kCGTextFillStrokeClip = 6;
    this.kCGTextClip = 7;
    this.kCGEncodingFontSpecific = 0;
    this.kCGEncodingMacRoman = 1;
    this.kCGInterpolationDefault = 0;
    this.kCGInterpolationNone = 1;
    this.kCGInterpolationLow = 2;
    this.kCGInterpolationMedium = 4;
    this.kCGInterpolationHigh = 3;
    this.kCGBlendModeNormal = 0;
    this.kCGBlendModeMultiply = 1;
    this.kCGBlendModeScreen = 2;
    this.kCGBlendModeOverlay = 3;
    this.kCGBlendModeDarken = 4;
    this.kCGBlendModeLighten = 5;
    this.kCGBlendModeColorDodge = 6;
    this.kCGBlendModeColorBurn = 7;
    this.kCGBlendModeSoftLight = 8;
    this.kCGBlendModeHardLight = 9;
    this.kCGBlendModeDifference = 10;
    this.kCGBlendModeExclusion = 11;
    this.kCGBlendModeHue = 12;
    this.kCGBlendModeSaturation = 13;
    this.kCGBlendModeColor = 14;
    this.kCGBlendModeLuminosity = 15;
    this.kCGBlendModeClear = 16;
    this.kCGBlendModeCopy = 17;
    this.kCGBlendModeSourceIn = 18;
    this.kCGBlendModeSourceOut = 19;
    this.kCGBlendModeSourceAtop = 20;
    this.kCGBlendModeDestinationOver = 21;
    this.kCGBlendModeDestinationIn = 22;
    this.kCGBlendModeDestinationOut = 23;
    this.kCGBlendModeDestinationAtop = 24;
    this.kCGBlendModeXOR = 25;
    this.kCGBlendModePlusDarker = 26;
    this.kCGBlendModePlusLighter = 27;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGFont.h
function CGFont_h(lib) {

    if (this._CGFONT_H)
        return;
    this._CGFONT_H = true;

    this.CGFont = new ctypes.StructType("CGFont");
    this.CGFontRef = this.CGFont.ptr;
    this.CGFontIndex = ctypes.unsigned_short;
    this.CGGlyph = this.CGFontIndex;
    this.kCGFontPostScriptFormatType1 = 1;
    this.kCGFontPostScriptFormatType3 = 3;
    this.kCGFontPostScriptFormatType42 = 42;
    this.kCGFontIndexMax = 65534;
    this.kCGFontIndexInvalid = 65535;
    this.kCGGlyphMax = 65534;
    this.CGGlyphMin = 0;
    this.CGGlyphMax = 65534;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPath.h
function CGPath_h(lib) {
    CGGeometry_h.call(this, lib);

    if (this._CGPATH_H)
        return;
    this._CGPATH_H = true;

    this.CGPath = new ctypes.StructType("CGPath");
    this.CGMutablePathRef = this.CGPath.ptr;
    this.CGPathRef = this.CGPath.ptr;
    this.kCGPathElementMoveToPoint = 0;
    this.kCGPathElementAddLineToPoint = 1;
    this.kCGPathElementAddQuadCurveToPoint = 2;
    this.kCGPathElementAddCurveToPoint = 3;
    this.kCGPathElementCloseSubpath = 4;
    this.CGPathElement = new ctypes.StructType("CGPathElement", [{type: this.CGPathElementType}, {points: this.CGPoint.ptr}]);
    this.CGPathApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CGPathElement.ptr]).ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGEvent.h
function CGEvent_h(lib) {

    if (this._CGEVENT_H)
        return;
    this._CGEVENT_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGRemoteOperation.h
function CGRemoteOperation_h(lib) {
    CGError_h.call(this, lib);

    if (this._CGREMOTEOPERATION_H)
        return;
    this._CGREMOTEOPERATION_H = true;

    this.CGEventErr = this.CGError;
    // Dropping declaration of 'CGButtonCount': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGWheelCount': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGCharCode': 'uint16_t' defined out of scope
    // Dropping declaration of 'CGKeyCode': 'uint16_t' defined out of scope
    // Dropping declaration of 'CGScreenRefreshCallback': 'uint32_t' defined out of scope
    this.kCGScreenUpdateOperationRefresh = 0;
    this.kCGScreenUpdateOperationMove = 1;
    this.kCGScreenUpdateOperationReducedDirtyRectangleCount = -2147483648;
    // Dropping declaration of 'CGScreenUpdateOperation': 'uint32_t' defined out of scope
    this.CGScreenUpdateMoveDelta = new ctypes.StructType("CGScreenUpdateMoveDelta", []);
    // Dropping declaration of 'CGScreenUpdateMoveCallback': 'size_t' defined out of scope
    this.kCGEventFilterMaskPermitLocalMouseEvents = 1;
    this.kCGEventFilterMaskPermitLocalKeyboardEvents = 2;
    this.kCGEventFilterMaskPermitSystemDefinedEvents = 4;
    // Dropping declaration of 'CGEventFilterMask': 'uint32_t' defined out of scope
    this.kCGEventSuppressionStateSuppressionInterval = 0;
    this.kCGEventSuppressionStateRemoteMouseDrag = 1;
    this.kCGNumberOfEventSuppressionStates = 2;
    // Dropping declaration of 'CGEventSuppressionState': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGRectCount': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGColor.h
function CGColor_h(lib) {

    if (this._CGCOLOR_H)
        return;
    this._CGCOLOR_H = true;

    this.CGColor = new ctypes.StructType("CGColor");
    this.CGColorRef = this.CGColor.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFOperatorTable.h
function CGPDFOperatorTable_h(lib) {
    CGPDFScanner_h.call(this, lib);

    if (this._CGPDFOPERATORTABLE_H)
        return;
    this._CGPDFOPERATORTABLE_H = true;

    this.CGPDFOperatorTable = new ctypes.StructType("CGPDFOperatorTable");
    this.CGPDFOperatorTableRef = this.CGPDFOperatorTable.ptr;
    this.CGPDFOperatorCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CGPDFScannerRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGGeometry.h
function CGGeometry_h(lib) {
    CGBase_h.call(this, lib);

    if (this._CGGEOMETRY_H)
        return;
    this._CGGEOMETRY_H = true;

    this.CGPoint = new ctypes.StructType("CGPoint", [{x: this.CGFloat}, {y: this.CGFloat}]);
    this.CGSize = new ctypes.StructType("CGSize", [{width: this.CGFloat}, {height: this.CGFloat}]);
    this.CGRect = new ctypes.StructType("CGRect", [{origin: this.CGPoint}, {size: this.CGSize}]);
    this.CGRectMinXEdge = 0;
    this.CGRectMinYEdge = 1;
    this.CGRectMaxXEdge = 2;
    this.CGRectMaxYEdge = 3;
    // Dropping inline function 'CGPointMake'.
    // Dropping inline function 'CGSizeMake'.
    // Dropping inline function 'CGRectMake'.
    // Dropping inline function '__CGPointEqualToPoint'.
    // Dropping inline function '__CGSizeEqualToSize'.
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFContentStream.h
function CGPDFContentStream_h(lib) {

    if (this._CGPDFCONTENTSTREAM_H)
        return;
    this._CGPDFCONTENTSTREAM_H = true;

    this.CGPDFContentStream = new ctypes.StructType("CGPDFContentStream");
    this.CGPDFContentStreamRef = this.CGPDFContentStream.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFContext.h
function CGPDFContext_h(lib) {

    if (this._CGPDFCONTEXT_H)
        return;
    this._CGPDFCONTEXT_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGWindow.h
function CGWindow_h(lib) {

    if (this._CGWINDOW_H)
        return;
    this._CGWINDOW_H = true;

    // Dropping declaration of 'CGWindowID': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGWindowListOption': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGWindowImageOption': 'uint32_t' defined out of scope
    this.kCGWindowSharingNone = 0;
    this.kCGWindowSharingReadOnly = 1;
    this.kCGWindowSharingReadWrite = 2;
    // Dropping declaration of 'CGWindowSharingType': 'uint32_t' defined out of scope
    this.kCGBackingStoreRetained = 0;
    this.kCGBackingStoreNonretained = 1;
    this.kCGBackingStoreBuffered = 2;
    // Dropping declaration of 'CGWindowBackingType': 'uint32_t' defined out of scope
    this.kCGWindowListOptionAll = 0;
    this.kCGWindowListOptionOnScreenOnly = 1;
    this.kCGWindowListOptionOnScreenAboveWindow = 2;
    this.kCGWindowListOptionOnScreenBelowWindow = 4;
    this.kCGWindowListOptionIncludingWindow = 8;
    this.kCGWindowListExcludeDesktopElements = 16;
    this.kCGWindowImageDefault = 0;
    this.kCGWindowImageBoundsIgnoreFraming = 1;
    this.kCGWindowImageShouldBeOpaque = 2;
    this.kCGWindowImageOnlyShadows = 4;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGColorSpace.h
function CGColorSpace_h(lib) {

    if (this._CGCOLORSPACE_H)
        return;
    this._CGCOLORSPACE_H = true;

    this.CGColorSpace = new ctypes.StructType("CGColorSpace");
    this.CGColorSpaceRef = this.CGColorSpace.ptr;
    this.kCGRenderingIntentDefault = 0;
    this.kCGRenderingIntentAbsoluteColorimetric = 1;
    this.kCGRenderingIntentRelativeColorimetric = 2;
    this.kCGRenderingIntentPerceptual = 3;
    this.kCGRenderingIntentSaturation = 4;
    this.kCGColorSpaceModelUnknown = -1;
    this.kCGColorSpaceModelMonochrome = 0;
    this.kCGColorSpaceModelRGB = 1;
    this.kCGColorSpaceModelCMYK = 2;
    this.kCGColorSpaceModelLab = 3;
    this.kCGColorSpaceModelDeviceN = 4;
    this.kCGColorSpaceModelIndexed = 5;
    this.kCGColorSpaceModelPattern = 6;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGFunction.h
function CGFunction_h(lib) {
    CGBase_h.call(this, lib);

    if (this._CGFUNCTION_H)
        return;
    this._CGFUNCTION_H = true;

    this.CGFunction = new ctypes.StructType("CGFunction");
    this.CGFunctionRef = this.CGFunction.ptr;
    this.CGFunctionEvaluateCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CGFloat.ptr, this.CGFloat.ptr]).ptr;
    this.CGFunctionReleaseInfoCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CGFunctionCallbacks = new ctypes.StructType("CGFunctionCallbacks", [{version: ctypes.unsigned_int}, {evaluate: this.CGFunctionEvaluateCallback}, {releaseInfo: this.CGFunctionReleaseInfoCallback}]);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFArray.h
function CGPDFArray_h(lib) {

    if (this._CGPDFARRAY_H)
        return;
    this._CGPDFARRAY_H = true;

    this.CGPDFArray = new ctypes.StructType("CGPDFArray");
    this.CGPDFArrayRef = this.CGPDFArray.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGBitmapContext.h
function CGBitmapContext_h(lib) {

    if (this._CGBITMAPCONTEXT_H)
        return;
    this._CGBITMAPCONTEXT_H = true;

    this.CGBitmapContextReleaseDataCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDirectDisplay.h
function CGDirectDisplay_h(lib) {
    CGError_h.call(this, lib);

    if (this._CGDIRECTDISPLAY_H)
        return;
    this._CGDIRECTDISPLAY_H = true;

    // Dropping declaration of 'CGDirectDisplayID': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGOpenGLDisplayMask': 'uint32_t' defined out of scope
    this.CGRefreshRate = ctypes.double;
    this._CGDirectPaletteRef = new ctypes.StructType("_CGDirectPaletteRef");
    this.CGDirectPaletteRef = this._CGDirectPaletteRef.ptr;
    this.CGDisplayMode = new ctypes.StructType("CGDisplayMode");
    this.CGDisplayModeRef = this.CGDisplayMode.ptr;
    this.CGGammaValue = ctypes.float;
    this.kCGCaptureNoOptions = 0;
    this.kCGCaptureNoFill = 1;
    // Dropping declaration of 'CGCaptureOptions': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGDisplayCount': 'uint32_t' defined out of scope
    this.CGDisplayErr = this.CGError;
    // Dropping declaration of 'CGBeamPosition': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGByteValue': 'uint8_t' defined out of scope
    // Dropping declaration of 'CGDisplayCoord': 'int32_t' defined out of scope
    // Dropping declaration of 'CGMouseDelta': 'int32_t' defined out of scope
    // Dropping declaration of 'CGTableCount': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDisplayConfiguration.h
function CGDisplayConfiguration_h(lib) {
    CGDirectDisplay_h.call(this, lib);

    if (this._CGDISPLAYCONFIGURATION_H)
        return;
    this._CGDISPLAYCONFIGURATION_H = true;

    this._CGDisplayConfigRef = new ctypes.StructType("_CGDisplayConfigRef");
    this.CGDisplayConfigRef = this._CGDisplayConfigRef.ptr;
    this.kCGConfigureForAppOnly = 0;
    this.kCGConfigureForSession = 1;
    this.kCGConfigurePermanently = 2;
    // Dropping declaration of 'CGConfigureOption': 'uint32_t' defined out of scope
    this.kCGDisplayBeginConfigurationFlag = 1;
    this.kCGDisplayMovedFlag = 2;
    this.kCGDisplaySetMainFlag = 4;
    this.kCGDisplaySetModeFlag = 8;
    this.kCGDisplayAddFlag = 16;
    this.kCGDisplayRemoveFlag = 32;
    this.kCGDisplayEnabledFlag = 256;
    this.kCGDisplayDisabledFlag = 512;
    this.kCGDisplayMirrorFlag = 1024;
    this.kCGDisplayUnMirrorFlag = 2048;
    this.kCGDisplayDesktopShapeChangedFlag = 4096;
    // Dropping declaration of 'CGDisplayChangeSummaryFlags': 'uint32_t' defined out of scope
    this.CGDisplayReconfigurationCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CGDirectDisplayID, this.CGDisplayChangeSummaryFlags, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGImage.h
function CGImage_h(lib) {

    if (this._CGIMAGE_H)
        return;
    this._CGIMAGE_H = true;

    this.CGImage = new ctypes.StructType("CGImage");
    this.CGImageRef = this.CGImage.ptr;
    this.kCGImageAlphaNone = 0;
    this.kCGImageAlphaPremultipliedLast = 1;
    this.kCGImageAlphaPremultipliedFirst = 2;
    this.kCGImageAlphaLast = 3;
    this.kCGImageAlphaFirst = 4;
    this.kCGImageAlphaNoneSkipLast = 5;
    this.kCGImageAlphaNoneSkipFirst = 6;
    this.kCGImageAlphaOnly = 7;
    this.kCGBitmapAlphaInfoMask = 31;
    this.kCGBitmapFloatComponents = 256;
    this.kCGBitmapByteOrderMask = 28672;
    this.kCGBitmapByteOrderDefault = 0;
    this.kCGBitmapByteOrder16Little = 4096;
    this.kCGBitmapByteOrder32Little = 8192;
    this.kCGBitmapByteOrder16Big = 12288;
    this.kCGBitmapByteOrder32Big = 16384;
    // Dropping declaration of 'CGBitmapInfo': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFObject.h
function CGPDFObject_h(lib) {
    CGBase_h.call(this, lib);

    if (this._CGPDFOBJECT_H)
        return;
    this._CGPDFOBJECT_H = true;

    this.CGPDFBoolean = ctypes.unsigned_char;
    this.CGPDFInteger = ctypes.long;
    this.CGPDFReal = this.CGFloat;
    this.CGPDFObject = new ctypes.StructType("CGPDFObject");
    this.CGPDFObjectRef = this.CGPDFObject.ptr;
    this.kCGPDFObjectTypeNull = 1;
    this.kCGPDFObjectTypeBoolean = 2;
    this.kCGPDFObjectTypeInteger = 3;
    this.kCGPDFObjectTypeReal = 4;
    this.kCGPDFObjectTypeName = 5;
    this.kCGPDFObjectTypeString = 6;
    this.kCGPDFObjectTypeArray = 7;
    this.kCGPDFObjectTypeDictionary = 8;
    this.kCGPDFObjectTypeStream = 9;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDataProvider.h
function CGDataProvider_h(lib) {

    if (this._CGDATAPROVIDER_H)
        return;
    this._CGDATAPROVIDER_H = true;

    this.CGDataProvider = new ctypes.StructType("CGDataProvider");
    this.CGDataProviderRef = this.CGDataProvider.ptr;
    // Dropping declaration of 'CGDataProviderGetBytesCallback': 'size_t' defined out of scope
    // Dropping declaration of 'CGDataProviderSkipForwardCallback': 'off_t' defined out of scope
    this.CGDataProviderRewindCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CGDataProviderReleaseInfoCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CGDataProviderSequentialCallbacks = new ctypes.StructType("CGDataProviderSequentialCallbacks", [{version: ctypes.unsigned_int}, {getBytes: this.CGDataProviderGetBytesCallback}, {skipForward: this.CGDataProviderSkipForwardCallback}, {rewind: this.CGDataProviderRewindCallback}, {releaseInfo: this.CGDataProviderReleaseInfoCallback}]);
    this.CGDataProviderGetBytePointerCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr;
    this.CGDataProviderReleaseBytePointerCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    // Dropping declaration of 'CGDataProviderGetBytesAtPositionCallback': 'size_t' defined out of scope
    this.CGDataProviderDirectCallbacks = new ctypes.StructType("CGDataProviderDirectCallbacks", [{version: ctypes.unsigned_int}, {getBytePointer: this.CGDataProviderGetBytePointerCallback}, {releaseBytePointer: this.CGDataProviderReleaseBytePointerCallback}, {getBytesAtPosition: this.CGDataProviderGetBytesAtPositionCallback}, {releaseInfo: this.CGDataProviderReleaseInfoCallback}]);
    // Dropping declaration of 'CGDataProviderReleaseDataCallback': 'size_t' defined out of scope
    // Dropping declaration of 'CGDataProviderSkipBytesCallback': 'size_t' defined out of scope
    this.CGDataProviderCallbacks = new ctypes.StructType("CGDataProviderCallbacks", [{getBytes: this.CGDataProviderGetBytesCallback}, {skipBytes: this.CGDataProviderSkipBytesCallback}, {rewind: this.CGDataProviderRewindCallback}, {releaseProvider: this.CGDataProviderReleaseInfoCallback}]);
    // Dropping declaration of 'CGDataProviderGetBytesAtOffsetCallback': 'size_t' defined out of scope
    this.CGDataProviderDirectAccessCallbacks = new ctypes.StructType("CGDataProviderDirectAccessCallbacks", [{getBytePointer: this.CGDataProviderGetBytePointerCallback}, {releaseBytePointer: this.CGDataProviderReleaseBytePointerCallback}, {getBytes: this.CGDataProviderGetBytesAtOffsetCallback}, {releaseProvider: this.CGDataProviderReleaseInfoCallback}]);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFDocument.h
function CGPDFDocument_h(lib) {

    if (this._CGPDFDOCUMENT_H)
        return;
    this._CGPDFDOCUMENT_H = true;

    this.CGPDFDocument = new ctypes.StructType("CGPDFDocument");
    this.CGPDFDocumentRef = this.CGPDFDocument.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGAffineTransform.h
function CGAffineTransform_h(lib) {
    CGBase_h.call(this, lib);

    if (this._CGAFFINETRANSFORM_H)
        return;
    this._CGAFFINETRANSFORM_H = true;

    this.CGAffineTransform = new ctypes.StructType("CGAffineTransform", [{a: this.CGFloat}, {b: this.CGFloat}, {c: this.CGFloat}, {d: this.CGFloat}, {tx: this.CGFloat}, {ty: this.CGFloat}]);
    // Dropping inline function '__CGAffineTransformMake'.
    // Dropping inline function '__CGPointApplyAffineTransform'.
    // Dropping inline function '__CGSizeApplyAffineTransform'.
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFDictionary.h
function CGPDFDictionary_h(lib) {
    CGPDFObject_h.call(this, lib);

    if (this._CGPDFDICTIONARY_H)
        return;
    this._CGPDFDICTIONARY_H = true;

    this.CGPDFDictionary = new ctypes.StructType("CGPDFDictionary");
    this.CGPDFDictionaryRef = this.CGPDFDictionary.ptr;
    this.CGPDFDictionaryApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.char.ptr, this.CGPDFObjectRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGEventTypes.h
function CGEventTypes_h(lib) {

    if (this._CGEVENTTYPES_H)
        return;
    this._CGEVENTTYPES_H = true;

    this.__CGEvent = new ctypes.StructType("__CGEvent");
    this.CGEventRef = this.__CGEvent.ptr;
    this.kCGMouseButtonLeft = 0;
    this.kCGMouseButtonRight = 1;
    this.kCGMouseButtonCenter = 2;
    // Dropping declaration of 'CGMouseButton': 'uint32_t' defined out of scope
    this.kCGScrollEventUnitPixel = 0;
    this.kCGScrollEventUnitLine = 1;
    // Dropping declaration of 'CGScrollEventUnit': 'uint32_t' defined out of scope
    this.kCGEventFlagMaskAlphaShift = 65536;
    this.kCGEventFlagMaskShift = 131072;
    this.kCGEventFlagMaskControl = 262144;
    this.kCGEventFlagMaskAlternate = 524288;
    this.kCGEventFlagMaskCommand = 1048576;
    this.kCGEventFlagMaskHelp = 4194304;
    this.kCGEventFlagMaskSecondaryFn = 8388608;
    this.kCGEventFlagMaskNumericPad = 2097152;
    this.kCGEventFlagMaskNonCoalesced = 256;
    // Dropping declaration of 'CGEventFlags': 'uint64_t' defined out of scope
    this.kCGEventNull = 0;
    this.kCGEventLeftMouseDown = 1;
    this.kCGEventLeftMouseUp = 2;
    this.kCGEventRightMouseDown = 3;
    this.kCGEventRightMouseUp = 4;
    this.kCGEventMouseMoved = 5;
    this.kCGEventLeftMouseDragged = 6;
    this.kCGEventRightMouseDragged = 7;
    this.kCGEventKeyDown = 10;
    this.kCGEventKeyUp = 11;
    this.kCGEventFlagsChanged = 12;
    this.kCGEventScrollWheel = 22;
    this.kCGEventTabletPointer = 23;
    this.kCGEventTabletProximity = 24;
    this.kCGEventOtherMouseDown = 25;
    this.kCGEventOtherMouseUp = 26;
    this.kCGEventOtherMouseDragged = 27;
    this.kCGEventTapDisabledByTimeout = -2;
    this.kCGEventTapDisabledByUserInput = -1;
    // Dropping declaration of 'CGEventType': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGEventTimestamp': 'uint64_t' defined out of scope
    this.kCGMouseEventNumber = 0;
    this.kCGMouseEventClickState = 1;
    this.kCGMouseEventPressure = 2;
    this.kCGMouseEventButtonNumber = 3;
    this.kCGMouseEventDeltaX = 4;
    this.kCGMouseEventDeltaY = 5;
    this.kCGMouseEventInstantMouser = 6;
    this.kCGMouseEventSubtype = 7;
    this.kCGKeyboardEventAutorepeat = 8;
    this.kCGKeyboardEventKeycode = 9;
    this.kCGKeyboardEventKeyboardType = 10;
    this.kCGScrollWheelEventDeltaAxis1 = 11;
    this.kCGScrollWheelEventDeltaAxis2 = 12;
    this.kCGScrollWheelEventDeltaAxis3 = 13;
    this.kCGScrollWheelEventFixedPtDeltaAxis1 = 93;
    this.kCGScrollWheelEventFixedPtDeltaAxis2 = 94;
    this.kCGScrollWheelEventFixedPtDeltaAxis3 = 95;
    this.kCGScrollWheelEventPointDeltaAxis1 = 96;
    this.kCGScrollWheelEventPointDeltaAxis2 = 97;
    this.kCGScrollWheelEventPointDeltaAxis3 = 98;
    this.kCGScrollWheelEventInstantMouser = 14;
    this.kCGTabletEventPointX = 15;
    this.kCGTabletEventPointY = 16;
    this.kCGTabletEventPointZ = 17;
    this.kCGTabletEventPointButtons = 18;
    this.kCGTabletEventPointPressure = 19;
    this.kCGTabletEventTiltX = 20;
    this.kCGTabletEventTiltY = 21;
    this.kCGTabletEventRotation = 22;
    this.kCGTabletEventTangentialPressure = 23;
    this.kCGTabletEventDeviceID = 24;
    this.kCGTabletEventVendor1 = 25;
    this.kCGTabletEventVendor2 = 26;
    this.kCGTabletEventVendor3 = 27;
    this.kCGTabletProximityEventVendorID = 28;
    this.kCGTabletProximityEventTabletID = 29;
    this.kCGTabletProximityEventPointerID = 30;
    this.kCGTabletProximityEventDeviceID = 31;
    this.kCGTabletProximityEventSystemTabletID = 32;
    this.kCGTabletProximityEventVendorPointerType = 33;
    this.kCGTabletProximityEventVendorPointerSerialNumber = 34;
    this.kCGTabletProximityEventVendorUniqueID = 35;
    this.kCGTabletProximityEventCapabilityMask = 36;
    this.kCGTabletProximityEventPointerType = 37;
    this.kCGTabletProximityEventEnterProximity = 38;
    this.kCGEventTargetProcessSerialNumber = 39;
    this.kCGEventTargetUnixProcessID = 40;
    this.kCGEventSourceUnixProcessID = 41;
    this.kCGEventSourceUserData = 42;
    this.kCGEventSourceUserID = 43;
    this.kCGEventSourceGroupID = 44;
    this.kCGEventSourceStateID = 45;
    this.kCGScrollWheelEventIsContinuous = 88;
    // Dropping declaration of 'CGEventField': 'uint32_t' defined out of scope
    this.kCGEventMouseSubtypeDefault = 0;
    this.kCGEventMouseSubtypeTabletPoint = 1;
    this.kCGEventMouseSubtypeTabletProximity = 2;
    // Dropping declaration of 'CGEventMouseSubtype': 'uint32_t' defined out of scope
    this.kCGHIDEventTap = 0;
    this.kCGSessionEventTap = 1;
    this.kCGAnnotatedSessionEventTap = 2;
    // Dropping declaration of 'CGEventTapLocation': 'uint32_t' defined out of scope
    this.kCGHeadInsertEventTap = 0;
    this.kCGTailAppendEventTap = 1;
    // Dropping declaration of 'CGEventTapPlacement': 'uint32_t' defined out of scope
    this.kCGEventTapOptionDefault = 0;
    this.kCGEventTapOptionListenOnly = 1;
    // Dropping declaration of 'CGEventTapOptions': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGEventMask': 'uint64_t' defined out of scope
    this.__CGEventTapProxy = new ctypes.StructType("__CGEventTapProxy");
    this.CGEventTapProxy = this.__CGEventTapProxy.ptr;
    this.CGEventTapCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CGEventRef, [this.CGEventTapProxy, this.CGEventType, this.CGEventRef, ctypes.void_t.ptr]).ptr;
    this.__CGEventTapInformation = new ctypes.StructType("__CGEventTapInformation", []);
    this.CGEventTapInformation = this.__CGEventTapInformation;
    this.__CGEventSource = new ctypes.StructType("__CGEventSource");
    this.CGEventSourceRef = this.__CGEventSource.ptr;
    this.kCGEventSourceStatePrivate = -1;
    this.kCGEventSourceStateCombinedSessionState = 0;
    this.kCGEventSourceStateHIDSystemState = 1;
    // Dropping declaration of 'CGEventSourceStateID': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGEventSourceKeyboardType': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPSConverter.h
function CGPSConverter_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CGPSCONVERTER_H)
        return;
    this._CGPSCONVERTER_H = true;

    this.CGPSConverter = new ctypes.StructType("CGPSConverter");
    this.CGPSConverterRef = this.CGPSConverter.ptr;
    this.CGPSConverterBeginDocumentCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    // Dropping declaration of 'CGPSConverterEndDocumentCallback': Unknown type bool_t
    // Dropping declaration of 'CGPSConverterBeginPageCallback': 'size_t' defined out of scope
    // Dropping declaration of 'CGPSConverterEndPageCallback': 'size_t' defined out of scope
    this.CGPSConverterProgressCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CGPSConverterMessageCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CFStringRef]).ptr;
    this.CGPSConverterReleaseInfoCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CGPSConverterCallbacks = new ctypes.StructType("CGPSConverterCallbacks", [{version: ctypes.unsigned_int}, {beginDocument: this.CGPSConverterBeginDocumentCallback}, {endDocument: this.CGPSConverterEndDocumentCallback}, {beginPage: this.CGPSConverterBeginPageCallback}, {endPage: this.CGPSConverterEndPageCallback}, {noteProgress: this.CGPSConverterProgressCallback}, {noteMessage: this.CGPSConverterMessageCallback}, {releaseInfo: this.CGPSConverterReleaseInfoCallback}]);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGGradient.h
function CGGradient_h(lib) {

    if (this._CGGRADIENT_H)
        return;
    this._CGGRADIENT_H = true;

    this.CGGradient = new ctypes.StructType("CGGradient");
    this.CGGradientRef = this.CGGradient.ptr;
    this.kCGGradientDrawsBeforeStartLocation = 1;
    this.kCGGradientDrawsAfterEndLocation = 2;
    // Dropping declaration of 'CGGradientDrawingOptions': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGGLContext.h
function CGGLContext_h(lib) {

    if (this._CGGLCONTEXT_H)
        return;
    this._CGGLCONTEXT_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFStream.h
function CGPDFStream_h(lib) {

    if (this._CGPDFSTREAM_H)
        return;
    this._CGPDFSTREAM_H = true;

    this.CGPDFStream = new ctypes.StructType("CGPDFStream");
    this.CGPDFStreamRef = this.CGPDFStream.ptr;
    this.CGPDFDataFormatRaw = 0;
    this.CGPDFDataFormatJPEGEncoded = 1;
    this.CGPDFDataFormatJPEG2000 = 2;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPattern.h
function CGPattern_h(lib) {
    CGContext_h.call(this, lib);

    if (this._CGPATTERN_H)
        return;
    this._CGPATTERN_H = true;

    this.CGPattern = new ctypes.StructType("CGPattern");
    this.CGPatternRef = this.CGPattern.ptr;
    this.kCGPatternTilingNoDistortion = 0;
    this.kCGPatternTilingConstantSpacingMinimalDistortion = 1;
    this.kCGPatternTilingConstantSpacing = 2;
    this.CGPatternDrawPatternCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CGContextRef]).ptr;
    this.CGPatternReleaseInfoCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CGPatternCallbacks = new ctypes.StructType("CGPatternCallbacks", [{version: ctypes.unsigned_int}, {drawPattern: this.CGPatternDrawPatternCallback}, {releaseInfo: this.CGPatternReleaseInfoCallback}]);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFPage.h
function CGPDFPage_h(lib) {

    if (this._CGPDFPAGE_H)
        return;
    this._CGPDFPAGE_H = true;

    this.CGPDFPage = new ctypes.StructType("CGPDFPage");
    this.CGPDFPageRef = this.CGPDFPage.ptr;
    this.kCGPDFMediaBox = 0;
    this.kCGPDFCropBox = 1;
    this.kCGPDFBleedBox = 2;
    this.kCGPDFTrimBox = 3;
    this.kCGPDFArtBox = 4;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDisplayFade.h
function CGDisplayFade_h(lib) {

    if (this._CGDISPLAYFADE_H)
        return;
    this._CGDISPLAYFADE_H = true;

    // Dropping declaration of 'CGDisplayFadeReservationToken': 'uint32_t' defined out of scope
    this.CGDisplayBlendFraction = ctypes.float;
    this.CGDisplayFadeInterval = ctypes.float;
    this.CGDisplayReservationInterval = ctypes.float;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDataConsumer.h
function CGDataConsumer_h(lib) {

    if (this._CGDATACONSUMER_H)
        return;
    this._CGDATACONSUMER_H = true;

    this.CGDataConsumer = new ctypes.StructType("CGDataConsumer");
    this.CGDataConsumerRef = this.CGDataConsumer.ptr;
    // Dropping declaration of 'CGDataConsumerPutBytesCallback': 'size_t' defined out of scope
    this.CGDataConsumerReleaseInfoCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CGDataConsumerCallbacks = new ctypes.StructType("CGDataConsumerCallbacks", [{putBytes: this.CGDataConsumerPutBytesCallback}, {releaseConsumer: this.CGDataConsumerReleaseInfoCallback}]);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGLayer.h
function CGLayer_h(lib) {

    if (this._CGLAYER_H)
        return;
    this._CGLAYER_H = true;

    this.CGLayer = new ctypes.StructType("CGLayer");
    this.CGLayerRef = this.CGLayer.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGEventSource.h
function CGEventSource_h(lib) {

    if (this._CGEVENTSOURCE_H)
        return;
    this._CGEVENTSOURCE_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFScanner.h
function CGPDFScanner_h(lib) {

    if (this._CGPDFSCANNER_H)
        return;
    this._CGPDFSCANNER_H = true;

    this.CGPDFScanner = new ctypes.StructType("CGPDFScanner");
    this.CGPDFScannerRef = this.CGPDFScanner.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFString.h
function CGPDFString_h(lib) {

    if (this._CGPDFSTRING_H)
        return;
    this._CGPDFSTRING_H = true;

    this.CGPDFString = new ctypes.StructType("CGPDFString");
    this.CGPDFStringRef = this.CGPDFString.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGBase.h
function CGBase_h(lib) {

    if (this._CGBASE_H)
        return;
    this._CGBASE_H = true;

    this.CGFloat = ctypes.float;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGError.h
function CGError_h(lib) {

    if (this._CGERROR_H)
        return;
    this._CGERROR_H = true;

    this.kCGErrorSuccess = 0;
    this.kCGErrorFailure = 1000;
    this.kCGErrorIllegalArgument = 1001;
    this.kCGErrorInvalidConnection = 1002;
    this.kCGErrorInvalidContext = 1003;
    this.kCGErrorCannotComplete = 1004;
    this.kCGErrorNotImplemented = 1006;
    this.kCGErrorRangeCheck = 1007;
    this.kCGErrorTypeCheck = 1008;
    this.kCGErrorInvalidOperation = 1010;
    this.kCGErrorNoneAvailable = 1011;
    this.kCGErrorNameTooLong = 1005;
    this.kCGErrorNoCurrentPoint = 1009;
    this.kCGErrorApplicationRequiresNewerSystem = 1015;
    this.kCGErrorApplicationNotPermittedToExecute = 1016;
    this.kCGErrorApplicationIncorrectExecutableFormatFound = 1023;
    this.kCGErrorApplicationIsLaunching = 1024;
    this.kCGErrorApplicationAlreadyRunning = 1025;
    this.kCGErrorApplicationCanOnlyBeRunInOneSessionAtATime = 1026;
    this.kCGErrorClassicApplicationsMustBeLaunchedByClassic = 1027;
    this.kCGErrorForkFailed = 1028;
    this.kCGErrorRetryRegistration = 1029;
    this.kCGErrorFirst = 1000;
    this.kCGErrorLast = 1029;
    // Dropping declaration of 'CGError': 'int32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGSession.h
function CGSession_h(lib) {

    if (this._CGSESSION_H)
        return;
    this._CGSESSION_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGWindowLevel.h
function CGWindowLevel_h(lib) {

    if (this._CGWINDOWLEVEL_H)
        return;
    this._CGWINDOWLEVEL_H = true;

    // Dropping declaration of 'CGWindowLevel': 'int32_t' defined out of scope
    // Dropping declaration of 'CGWindowLevelKey': 'int32_t' defined out of scope
    this.kCGBaseWindowLevelKey = 0;
    this.kCGMinimumWindowLevelKey = 1;
    this.kCGDesktopWindowLevelKey = 2;
    this.kCGBackstopMenuLevelKey = 3;
    this.kCGNormalWindowLevelKey = 4;
    this.kCGFloatingWindowLevelKey = 5;
    this.kCGTornOffMenuWindowLevelKey = 6;
    this.kCGDockWindowLevelKey = 7;
    this.kCGMainMenuWindowLevelKey = 8;
    this.kCGStatusWindowLevelKey = 9;
    this.kCGModalPanelWindowLevelKey = 10;
    this.kCGPopUpMenuWindowLevelKey = 11;
    this.kCGDraggingWindowLevelKey = 12;
    this.kCGScreenSaverWindowLevelKey = 13;
    this.kCGMaximumWindowLevelKey = 14;
    this.kCGOverlayWindowLevelKey = 15;
    this.kCGHelpWindowLevelKey = 16;
    this.kCGUtilityWindowLevelKey = 17;
    this.kCGDesktopIconWindowLevelKey = 18;
    this.kCGCursorWindowLevelKey = 19;
    this.kCGAssistiveTechHighWindowLevelKey = 20;
    this.kCGNumberOfWindowLevelKeys = 21;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");

const EXPORTED_SYMBOLS = ["CoreGraphics", "CGDirectPalette_h", "CGShading_h", "CGContext_h", "CGFont_h", "CGPath_h", "CGEvent_h", "CGRemoteOperation_h", "CGColor_h", "CGPDFOperatorTable_h", "CGGeometry_h", "CGPDFContentStream_h", "CGPDFContext_h", "CGWindow_h", "CGColorSpace_h", "CGFunction_h", "CGPDFArray_h", "CGBitmapContext_h", "CGDirectDisplay_h", "CGDisplayConfiguration_h", "CGImage_h", "CGPDFObject_h", "CGDataProvider_h", "CGPDFDocument_h", "CGAffineTransform_h", "CGPDFDictionary_h", "CGEventTypes_h", "CGPSConverter_h", "CGGradient_h", "CGGLContext_h", "CGPDFStream_h", "CGPattern_h", "CGPDFPage_h", "CGDisplayFade_h", "CGDataConsumer_h", "CGLayer_h", "CGEventSource_h", "CGPDFScanner_h", "CGPDFString_h", "CGBase_h", "CGError_h", "CGSession_h", "CGWindowLevel_h"];

function CoreGraphics() {
    let libpath = "/System/Library/Frameworks/CoreGraphics.framework/CoreGraphics";
    let lib = ctypes.open(libpath);

    CGDirectPalette_h.call(this, lib);
    CGShading_h.call(this, lib);
    CGContext_h.call(this, lib);
    CGFont_h.call(this, lib);
    CGPath_h.call(this, lib);
    CGEvent_h.call(this, lib);
    CGRemoteOperation_h.call(this, lib);
    CGColor_h.call(this, lib);
    CGPDFOperatorTable_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGPDFContentStream_h.call(this, lib);
    CGPDFContext_h.call(this, lib);
    CGWindow_h.call(this, lib);
    CGColorSpace_h.call(this, lib);
    CGFunction_h.call(this, lib);
    CGPDFArray_h.call(this, lib);
    CGBitmapContext_h.call(this, lib);
    CGDirectDisplay_h.call(this, lib);
    CGDisplayConfiguration_h.call(this, lib);
    CGImage_h.call(this, lib);
    CGPDFObject_h.call(this, lib);
    CGDataProvider_h.call(this, lib);
    CGPDFDocument_h.call(this, lib);
    CGAffineTransform_h.call(this, lib);
    CGPDFDictionary_h.call(this, lib);
    CGEventTypes_h.call(this, lib);
    CGPSConverter_h.call(this, lib);
    CGGradient_h.call(this, lib);
    CGGLContext_h.call(this, lib);
    CGPDFStream_h.call(this, lib);
    CGPattern_h.call(this, lib);
    CGPDFPage_h.call(this, lib);
    CGDisplayFade_h.call(this, lib);
    CGDataConsumer_h.call(this, lib);
    CGLayer_h.call(this, lib);
    CGEventSource_h.call(this, lib);
    CGPDFScanner_h.call(this, lib);
    CGPDFString_h.call(this, lib);
    CGBase_h.call(this, lib);
    CGError_h.call(this, lib);
    CGSession_h.call(this, lib);
    CGWindowLevel_h.call(this, lib);
}
