// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDirectPalette.h
function CGDirectPalette_h(lib) {
    CGDirectDisplay_h.call(this, lib);

    if (this._CGDIRECTPALETTE_H)
        return;
    this._CGDIRECTPALETTE_H = true;

    this.CGPaletteBlendFraction = ctypes.float;
    this.CGDeviceColor = new ctypes.StructType("CGDeviceColor", [{red: ctypes.float}, {green: ctypes.float}, {blue: ctypes.float}]);
    this.CGDeviceByteColor = new ctypes.StructType("CGDeviceByteColor", []);
    this.CGPaletteCreateDefaultColorPalette = lib.declare("CGPaletteCreateDefaultColorPalette", ctypes.default_abi, this.CGDirectPaletteRef);
    this.CGPaletteCreateWithDisplay = lib.declare("CGPaletteCreateWithDisplay", ctypes.default_abi, this.CGDirectPaletteRef, this.CGDirectDisplayID);
    // Dropping declaration of 'CGPaletteCreateWithCapacity': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGPaletteCreateWithSamples': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGPaletteCreateWithByteSamples': 'uint32_t' defined out of scope
    this.CGPaletteRelease = lib.declare("CGPaletteRelease", ctypes.default_abi, ctypes.void_t, this.CGDirectPaletteRef);
    // Dropping declaration of 'CGPaletteGetColorAtIndex': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGPaletteGetIndexForColor': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGPaletteGetNumberOfSamples': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGPaletteSetColorAtIndex': 'uint32_t' defined out of scope
    this.CGPaletteCreateCopy = lib.declare("CGPaletteCreateCopy", ctypes.default_abi, this.CGDirectPaletteRef, this.CGDirectPaletteRef);
    // Dropping declaration of 'CGPaletteIsEqualToPalette': Unknown type bool_t
    this.CGPaletteCreateFromPaletteBlendedWithColor = lib.declare("CGPaletteCreateFromPaletteBlendedWithColor", ctypes.default_abi, this.CGDirectPaletteRef, this.CGDirectPaletteRef, this.CGPaletteBlendFraction, this.CGDeviceColor);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGShading.h
function CGShading_h(lib) {
    CGFunction_h.call(this, lib);
    CGColorSpace_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._CGSHADING_H)
        return;
    this._CGSHADING_H = true;

    this.CGShading = new ctypes.StructType("CGShading");
    this.CGShadingRef = this.CGShading.ptr;
    this.CGShadingGetTypeID = lib.declare("CGShadingGetTypeID", ctypes.default_abi, this.CFTypeID);
    // Dropping declaration of 'CGShadingCreateAxial': Unknown type bool_t
    // Dropping declaration of 'CGShadingCreateRadial': Unknown type bool_t
    this.CGShadingRetain = lib.declare("CGShadingRetain", ctypes.default_abi, this.CGShadingRef, this.CGShadingRef);
    this.CGShadingRelease = lib.declare("CGShadingRelease", ctypes.default_abi, ctypes.void_t, this.CGShadingRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGContext.h
function CGContext_h(lib) {
    CGColor_h.call(this, lib);
    CGColorSpace_h.call(this, lib);
    CGPDFDocument_h.call(this, lib);
    CGGradient_h.call(this, lib);
    CGPath_h.call(this, lib);
    CGAffineTransform_h.call(this, lib);
    CGPDFPage_h.call(this, lib);
    CGImage_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CGFont_h.call(this, lib);
    CGShading_h.call(this, lib);
    CGBase_h.call(this, lib);
    CGPattern_h.call(this, lib);
    CFBase_h.call(this, lib);

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
    this.CGContextGetTypeID = lib.declare("CGContextGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGContextSaveGState = lib.declare("CGContextSaveGState", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextRestoreGState = lib.declare("CGContextRestoreGState", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextScaleCTM = lib.declare("CGContextScaleCTM", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat);
    this.CGContextTranslateCTM = lib.declare("CGContextTranslateCTM", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat);
    this.CGContextRotateCTM = lib.declare("CGContextRotateCTM", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat);
    this.CGContextConcatCTM = lib.declare("CGContextConcatCTM", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGAffineTransform);
    this.CGContextGetCTM = lib.declare("CGContextGetCTM", ctypes.default_abi, this.CGAffineTransform, this.CGContextRef);
    this.CGContextSetLineWidth = lib.declare("CGContextSetLineWidth", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat);
    this.CGContextSetLineCap = lib.declare("CGContextSetLineCap", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGLineCap);
    this.CGContextSetLineJoin = lib.declare("CGContextSetLineJoin", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGLineJoin);
    this.CGContextSetMiterLimit = lib.declare("CGContextSetMiterLimit", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat);
    // Dropping declaration of 'CGContextSetLineDash': 'size_t' defined out of scope
    this.CGContextSetFlatness = lib.declare("CGContextSetFlatness", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat);
    this.CGContextSetAlpha = lib.declare("CGContextSetAlpha", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat);
    this.CGContextSetBlendMode = lib.declare("CGContextSetBlendMode", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGBlendMode);
    this.CGContextBeginPath = lib.declare("CGContextBeginPath", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextMoveToPoint = lib.declare("CGContextMoveToPoint", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat);
    this.CGContextAddLineToPoint = lib.declare("CGContextAddLineToPoint", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat);
    this.CGContextAddCurveToPoint = lib.declare("CGContextAddCurveToPoint", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGContextAddQuadCurveToPoint = lib.declare("CGContextAddQuadCurveToPoint", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGContextClosePath = lib.declare("CGContextClosePath", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextAddRect = lib.declare("CGContextAddRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect);
    // Dropping declaration of 'CGContextAddRects': 'size_t' defined out of scope
    // Dropping declaration of 'CGContextAddLines': 'size_t' defined out of scope
    this.CGContextAddEllipseInRect = lib.declare("CGContextAddEllipseInRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect);
    this.CGContextAddArc = lib.declare("CGContextAddArc", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, ctypes.int);
    this.CGContextAddArcToPoint = lib.declare("CGContextAddArcToPoint", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGContextAddPath = lib.declare("CGContextAddPath", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGPathRef);
    this.CGContextReplacePathWithStrokedPath = lib.declare("CGContextReplacePathWithStrokedPath", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    // Dropping declaration of 'CGContextIsPathEmpty': Unknown type bool_t
    this.CGContextGetPathCurrentPoint = lib.declare("CGContextGetPathCurrentPoint", ctypes.default_abi, this.CGPoint, this.CGContextRef);
    this.CGContextGetPathBoundingBox = lib.declare("CGContextGetPathBoundingBox", ctypes.default_abi, this.CGRect, this.CGContextRef);
    this.CGContextCopyPath = lib.declare("CGContextCopyPath", ctypes.default_abi, this.CGPathRef, this.CGContextRef);
    // Dropping declaration of 'CGContextPathContainsPoint': Unknown type bool_t
    this.CGContextDrawPath = lib.declare("CGContextDrawPath", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGPathDrawingMode);
    this.CGContextFillPath = lib.declare("CGContextFillPath", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextEOFillPath = lib.declare("CGContextEOFillPath", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextStrokePath = lib.declare("CGContextStrokePath", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextFillRect = lib.declare("CGContextFillRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect);
    // Dropping declaration of 'CGContextFillRects': 'size_t' defined out of scope
    this.CGContextStrokeRect = lib.declare("CGContextStrokeRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect);
    this.CGContextStrokeRectWithWidth = lib.declare("CGContextStrokeRectWithWidth", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect, this.CGFloat);
    this.CGContextClearRect = lib.declare("CGContextClearRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect);
    this.CGContextFillEllipseInRect = lib.declare("CGContextFillEllipseInRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect);
    this.CGContextStrokeEllipseInRect = lib.declare("CGContextStrokeEllipseInRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect);
    // Dropping declaration of 'CGContextStrokeLineSegments': 'size_t' defined out of scope
    this.CGContextClip = lib.declare("CGContextClip", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextEOClip = lib.declare("CGContextEOClip", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextClipToMask = lib.declare("CGContextClipToMask", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect, this.CGImageRef);
    this.CGContextGetClipBoundingBox = lib.declare("CGContextGetClipBoundingBox", ctypes.default_abi, this.CGRect, this.CGContextRef);
    this.CGContextClipToRect = lib.declare("CGContextClipToRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect);
    // Dropping declaration of 'CGContextClipToRects': 'size_t' defined out of scope
    this.CGContextSetFillColorWithColor = lib.declare("CGContextSetFillColorWithColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGColorRef);
    this.CGContextSetStrokeColorWithColor = lib.declare("CGContextSetStrokeColorWithColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGColorRef);
    this.CGContextSetFillColorSpace = lib.declare("CGContextSetFillColorSpace", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGColorSpaceRef);
    this.CGContextSetStrokeColorSpace = lib.declare("CGContextSetStrokeColorSpace", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGColorSpaceRef);
    this.CGContextSetFillColor = lib.declare("CGContextSetFillColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat.ptr);
    this.CGContextSetStrokeColor = lib.declare("CGContextSetStrokeColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat.ptr);
    this.CGContextSetFillPattern = lib.declare("CGContextSetFillPattern", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGPatternRef, this.CGFloat.ptr);
    this.CGContextSetStrokePattern = lib.declare("CGContextSetStrokePattern", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGPatternRef, this.CGFloat.ptr);
    this.CGContextSetPatternPhase = lib.declare("CGContextSetPatternPhase", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGSize);
    this.CGContextSetGrayFillColor = lib.declare("CGContextSetGrayFillColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat);
    this.CGContextSetGrayStrokeColor = lib.declare("CGContextSetGrayStrokeColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat);
    this.CGContextSetRGBFillColor = lib.declare("CGContextSetRGBFillColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGContextSetRGBStrokeColor = lib.declare("CGContextSetRGBStrokeColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGContextSetCMYKFillColor = lib.declare("CGContextSetCMYKFillColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGContextSetCMYKStrokeColor = lib.declare("CGContextSetCMYKStrokeColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGContextSetRenderingIntent = lib.declare("CGContextSetRenderingIntent", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGColorRenderingIntent);
    this.CGContextDrawImage = lib.declare("CGContextDrawImage", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect, this.CGImageRef);
    this.CGContextDrawTiledImage = lib.declare("CGContextDrawTiledImage", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect, this.CGImageRef);
    this.CGContextGetInterpolationQuality = lib.declare("CGContextGetInterpolationQuality", ctypes.default_abi, this.CGInterpolationQuality, this.CGContextRef);
    this.CGContextSetInterpolationQuality = lib.declare("CGContextSetInterpolationQuality", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGInterpolationQuality);
    this.CGContextSetShadowWithColor = lib.declare("CGContextSetShadowWithColor", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGSize, this.CGFloat, this.CGColorRef);
    this.CGContextSetShadow = lib.declare("CGContextSetShadow", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGSize, this.CGFloat);
    this.CGContextDrawLinearGradient = lib.declare("CGContextDrawLinearGradient", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGGradientRef, this.CGPoint, this.CGPoint, this.CGGradientDrawingOptions);
    this.CGContextDrawRadialGradient = lib.declare("CGContextDrawRadialGradient", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGGradientRef, this.CGPoint, this.CGFloat, this.CGPoint, this.CGFloat, this.CGGradientDrawingOptions);
    this.CGContextDrawShading = lib.declare("CGContextDrawShading", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGShadingRef);
    this.CGContextSetCharacterSpacing = lib.declare("CGContextSetCharacterSpacing", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat);
    this.CGContextSetTextPosition = lib.declare("CGContextSetTextPosition", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat, this.CGFloat);
    this.CGContextGetTextPosition = lib.declare("CGContextGetTextPosition", ctypes.default_abi, this.CGPoint, this.CGContextRef);
    this.CGContextSetTextMatrix = lib.declare("CGContextSetTextMatrix", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGAffineTransform);
    this.CGContextGetTextMatrix = lib.declare("CGContextGetTextMatrix", ctypes.default_abi, this.CGAffineTransform, this.CGContextRef);
    this.CGContextSetTextDrawingMode = lib.declare("CGContextSetTextDrawingMode", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGTextDrawingMode);
    this.CGContextSetFont = lib.declare("CGContextSetFont", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFontRef);
    this.CGContextSetFontSize = lib.declare("CGContextSetFontSize", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGFloat);
    this.CGContextSelectFont = lib.declare("CGContextSelectFont", ctypes.default_abi, ctypes.void_t, this.CGContextRef, ctypes.char.ptr, this.CGFloat, this.CGTextEncoding);
    // Dropping declaration of 'CGContextShowGlyphsAtPositions': 'size_t' defined out of scope
    // Dropping declaration of 'CGContextShowText': 'size_t' defined out of scope
    // Dropping declaration of 'CGContextShowTextAtPoint': 'size_t' defined out of scope
    // Dropping declaration of 'CGContextShowGlyphs': 'size_t' defined out of scope
    // Dropping declaration of 'CGContextShowGlyphsAtPoint': 'size_t' defined out of scope
    // Dropping declaration of 'CGContextShowGlyphsWithAdvances': 'size_t' defined out of scope
    this.CGContextDrawPDFPage = lib.declare("CGContextDrawPDFPage", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGPDFPageRef);
    this.CGContextDrawPDFDocument = lib.declare("CGContextDrawPDFDocument", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect, this.CGPDFDocumentRef, ctypes.int);
    this.CGContextBeginPage = lib.declare("CGContextBeginPage", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect.ptr);
    this.CGContextEndPage = lib.declare("CGContextEndPage", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextRetain = lib.declare("CGContextRetain", ctypes.default_abi, this.CGContextRef, this.CGContextRef);
    this.CGContextRelease = lib.declare("CGContextRelease", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextFlush = lib.declare("CGContextFlush", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextSynchronize = lib.declare("CGContextSynchronize", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    // Dropping declaration of 'CGContextSetShouldAntialias': Unknown type bool_t
    // Dropping declaration of 'CGContextSetAllowsAntialiasing': Unknown type bool_t
    // Dropping declaration of 'CGContextSetShouldSmoothFonts': Unknown type bool_t
    // Dropping declaration of 'CGContextSetAllowsFontSmoothing': Unknown type bool_t
    // Dropping declaration of 'CGContextSetShouldSubpixelPositionFonts': Unknown type bool_t
    // Dropping declaration of 'CGContextSetAllowsFontSubpixelPositioning': Unknown type bool_t
    // Dropping declaration of 'CGContextSetShouldSubpixelQuantizeFonts': Unknown type bool_t
    // Dropping declaration of 'CGContextSetAllowsFontSubpixelQuantization': Unknown type bool_t
    this.CGContextBeginTransparencyLayer = lib.declare("CGContextBeginTransparencyLayer", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CFDictionaryRef);
    this.CGContextBeginTransparencyLayerWithRect = lib.declare("CGContextBeginTransparencyLayerWithRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect, this.CFDictionaryRef);
    this.CGContextEndTransparencyLayer = lib.declare("CGContextEndTransparencyLayer", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGContextGetUserSpaceToDeviceSpaceTransform = lib.declare("CGContextGetUserSpaceToDeviceSpaceTransform", ctypes.default_abi, this.CGAffineTransform, this.CGContextRef);
    this.CGContextConvertPointToDeviceSpace = lib.declare("CGContextConvertPointToDeviceSpace", ctypes.default_abi, this.CGPoint, this.CGContextRef, this.CGPoint);
    this.CGContextConvertPointToUserSpace = lib.declare("CGContextConvertPointToUserSpace", ctypes.default_abi, this.CGPoint, this.CGContextRef, this.CGPoint);
    this.CGContextConvertSizeToDeviceSpace = lib.declare("CGContextConvertSizeToDeviceSpace", ctypes.default_abi, this.CGSize, this.CGContextRef, this.CGSize);
    this.CGContextConvertSizeToUserSpace = lib.declare("CGContextConvertSizeToUserSpace", ctypes.default_abi, this.CGSize, this.CGContextRef, this.CGSize);
    this.CGContextConvertRectToDeviceSpace = lib.declare("CGContextConvertRectToDeviceSpace", ctypes.default_abi, this.CGRect, this.CGContextRef, this.CGRect);
    this.CGContextConvertRectToUserSpace = lib.declare("CGContextConvertRectToUserSpace", ctypes.default_abi, this.CGRect, this.CGContextRef, this.CGRect);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGFont.h
function CGFont_h(lib) {
    CGDataProvider_h.call(this, lib);
    CFData_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

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
    this.CGFontGetTypeID = lib.declare("CGFontGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGFontCreateWithPlatformFont = lib.declare("CGFontCreateWithPlatformFont", ctypes.default_abi, this.CGFontRef, ctypes.void_t.ptr);
    this.CGFontCreateWithDataProvider = lib.declare("CGFontCreateWithDataProvider", ctypes.default_abi, this.CGFontRef, this.CGDataProviderRef);
    this.CGFontCreateWithFontName = lib.declare("CGFontCreateWithFontName", ctypes.default_abi, this.CGFontRef, this.CFStringRef);
    this.CGFontCreateCopyWithVariations = lib.declare("CGFontCreateCopyWithVariations", ctypes.default_abi, this.CGFontRef, this.CGFontRef, this.CFDictionaryRef);
    this.CGFontRetain = lib.declare("CGFontRetain", ctypes.default_abi, this.CGFontRef, this.CGFontRef);
    this.CGFontRelease = lib.declare("CGFontRelease", ctypes.default_abi, ctypes.void_t, this.CGFontRef);
    // Dropping declaration of 'CGFontGetNumberOfGlyphs': 'size_t' defined out of scope
    this.CGFontGetUnitsPerEm = lib.declare("CGFontGetUnitsPerEm", ctypes.default_abi, ctypes.int, this.CGFontRef);
    this.CGFontCopyPostScriptName = lib.declare("CGFontCopyPostScriptName", ctypes.default_abi, this.CFStringRef, this.CGFontRef);
    this.CGFontCopyFullName = lib.declare("CGFontCopyFullName", ctypes.default_abi, this.CFStringRef, this.CGFontRef);
    this.CGFontGetAscent = lib.declare("CGFontGetAscent", ctypes.default_abi, ctypes.int, this.CGFontRef);
    this.CGFontGetDescent = lib.declare("CGFontGetDescent", ctypes.default_abi, ctypes.int, this.CGFontRef);
    this.CGFontGetLeading = lib.declare("CGFontGetLeading", ctypes.default_abi, ctypes.int, this.CGFontRef);
    this.CGFontGetCapHeight = lib.declare("CGFontGetCapHeight", ctypes.default_abi, ctypes.int, this.CGFontRef);
    this.CGFontGetXHeight = lib.declare("CGFontGetXHeight", ctypes.default_abi, ctypes.int, this.CGFontRef);
    this.CGFontGetFontBBox = lib.declare("CGFontGetFontBBox", ctypes.default_abi, this.CGRect, this.CGFontRef);
    this.CGFontGetItalicAngle = lib.declare("CGFontGetItalicAngle", ctypes.default_abi, this.CGFloat, this.CGFontRef);
    this.CGFontGetStemV = lib.declare("CGFontGetStemV", ctypes.default_abi, this.CGFloat, this.CGFontRef);
    this.CGFontCopyVariationAxes = lib.declare("CGFontCopyVariationAxes", ctypes.default_abi, this.CFArrayRef, this.CGFontRef);
    this.CGFontCopyVariations = lib.declare("CGFontCopyVariations", ctypes.default_abi, this.CFDictionaryRef, this.CGFontRef);
    // Dropping declaration of 'CGFontGetGlyphAdvances': Unknown type bool_t
    // Dropping declaration of 'CGFontGetGlyphBBoxes': Unknown type bool_t
    this.CGFontGetGlyphWithGlyphName = lib.declare("CGFontGetGlyphWithGlyphName", ctypes.default_abi, this.CGGlyph, this.CGFontRef, this.CFStringRef);
    this.CGFontCopyGlyphNameForGlyph = lib.declare("CGFontCopyGlyphNameForGlyph", ctypes.default_abi, this.CFStringRef, this.CGFontRef, this.CGGlyph);
    // Dropping declaration of 'CGFontCanCreatePostScriptSubset': Unknown type bool_t
    // Dropping declaration of 'CGFontCreatePostScriptSubset': 'size_t' defined out of scope
    this.CGFontCreatePostScriptEncoding = lib.declare("CGFontCreatePostScriptEncoding", ctypes.default_abi, this.CFDataRef, this.CGFontRef, this.CGGlyph.ptr);
    this.CGFontCopyTableTags = lib.declare("CGFontCopyTableTags", ctypes.default_abi, this.CFArrayRef, this.CGFontRef);
    // Dropping declaration of 'CGFontCopyTableForTag': 'uint32_t' defined out of scope
    this.kCGFontVariationAxisName = lib.declare("kCGFontVariationAxisName", this.CFStringRef);
    this.kCGFontVariationAxisMinValue = lib.declare("kCGFontVariationAxisMinValue", this.CFStringRef);
    this.kCGFontVariationAxisMaxValue = lib.declare("kCGFontVariationAxisMaxValue", this.CFStringRef);
    this.kCGFontVariationAxisDefaultValue = lib.declare("kCGFontVariationAxisDefaultValue", this.CFStringRef);
    this.CGGlyphMin = 0;
    this.CGGlyphMax = 65534;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPath.h
function CGPath_h(lib) {
    CGAffineTransform_h.call(this, lib);
    CGBase_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._CGPATH_H)
        return;
    this._CGPATH_H = true;

    this.CGPath = new ctypes.StructType("CGPath");
    this.CGMutablePathRef = this.CGPath.ptr;
    this.CGPathRef = this.CGPath.ptr;
    this.CGPathGetTypeID = lib.declare("CGPathGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGPathCreateMutable = lib.declare("CGPathCreateMutable", ctypes.default_abi, this.CGMutablePathRef);
    this.CGPathCreateCopy = lib.declare("CGPathCreateCopy", ctypes.default_abi, this.CGPathRef, this.CGPathRef);
    this.CGPathCreateMutableCopy = lib.declare("CGPathCreateMutableCopy", ctypes.default_abi, this.CGMutablePathRef, this.CGPathRef);
    this.CGPathRetain = lib.declare("CGPathRetain", ctypes.default_abi, this.CGPathRef, this.CGPathRef);
    this.CGPathRelease = lib.declare("CGPathRelease", ctypes.default_abi, ctypes.void_t, this.CGPathRef);
    // Dropping declaration of 'CGPathEqualToPath': Unknown type bool_t
    this.CGPathMoveToPoint = lib.declare("CGPathMoveToPoint", ctypes.default_abi, ctypes.void_t, this.CGMutablePathRef, this.CGAffineTransform.ptr, this.CGFloat, this.CGFloat);
    this.CGPathAddLineToPoint = lib.declare("CGPathAddLineToPoint", ctypes.default_abi, ctypes.void_t, this.CGMutablePathRef, this.CGAffineTransform.ptr, this.CGFloat, this.CGFloat);
    this.CGPathAddQuadCurveToPoint = lib.declare("CGPathAddQuadCurveToPoint", ctypes.default_abi, ctypes.void_t, this.CGMutablePathRef, this.CGAffineTransform.ptr, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGPathAddCurveToPoint = lib.declare("CGPathAddCurveToPoint", ctypes.default_abi, ctypes.void_t, this.CGMutablePathRef, this.CGAffineTransform.ptr, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGPathCloseSubpath = lib.declare("CGPathCloseSubpath", ctypes.default_abi, ctypes.void_t, this.CGMutablePathRef);
    this.CGPathAddRect = lib.declare("CGPathAddRect", ctypes.default_abi, ctypes.void_t, this.CGMutablePathRef, this.CGAffineTransform.ptr, this.CGRect);
    // Dropping declaration of 'CGPathAddRects': 'size_t' defined out of scope
    // Dropping declaration of 'CGPathAddLines': 'size_t' defined out of scope
    this.CGPathAddEllipseInRect = lib.declare("CGPathAddEllipseInRect", ctypes.default_abi, ctypes.void_t, this.CGMutablePathRef, this.CGAffineTransform.ptr, this.CGRect);
    // Dropping declaration of 'CGPathAddArc': Unknown type bool_t
    this.CGPathAddArcToPoint = lib.declare("CGPathAddArcToPoint", ctypes.default_abi, ctypes.void_t, this.CGMutablePathRef, this.CGAffineTransform.ptr, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGPathAddPath = lib.declare("CGPathAddPath", ctypes.default_abi, ctypes.void_t, this.CGMutablePathRef, this.CGAffineTransform.ptr, this.CGPathRef);
    // Dropping declaration of 'CGPathIsEmpty': Unknown type bool_t
    // Dropping declaration of 'CGPathIsRect': Unknown type bool_t
    this.CGPathGetCurrentPoint = lib.declare("CGPathGetCurrentPoint", ctypes.default_abi, this.CGPoint, this.CGPathRef);
    this.CGPathGetBoundingBox = lib.declare("CGPathGetBoundingBox", ctypes.default_abi, this.CGRect, this.CGPathRef);
    this.CGPathGetPathBoundingBox = lib.declare("CGPathGetPathBoundingBox", ctypes.default_abi, this.CGRect, this.CGPathRef);
    // Dropping declaration of 'CGPathContainsPoint': Unknown type bool_t
    this.kCGPathElementMoveToPoint = 0;
    this.kCGPathElementAddLineToPoint = 1;
    this.kCGPathElementAddQuadCurveToPoint = 2;
    this.kCGPathElementAddCurveToPoint = 3;
    this.kCGPathElementCloseSubpath = 4;
    this.CGPathElement = new ctypes.StructType("CGPathElement", [{type: this.CGPathElementType}, {points: this.CGPoint.ptr}]);
    this.CGPathApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CGPathElement.ptr]).ptr;
    this.CGPathApply = lib.declare("CGPathApply", ctypes.default_abi, ctypes.void_t, this.CGPathRef, ctypes.void_t.ptr, this.CGPathApplierFunction);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGEvent.h
function CGEvent_h(lib) {
    CFData_h.call(this, lib);
    CGEventTypes_h.call(this, lib);
    CGRemoteOperation_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CFMachPort_h.call(this, lib);
    CGError_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CGEVENT_H)
        return;
    this._CGEVENT_H = true;

    this.CGEventGetTypeID = lib.declare("CGEventGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGEventCreate = lib.declare("CGEventCreate", ctypes.default_abi, this.CGEventRef, this.CGEventSourceRef);
    this.CGEventCreateData = lib.declare("CGEventCreateData", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CGEventRef);
    this.CGEventCreateFromData = lib.declare("CGEventCreateFromData", ctypes.default_abi, this.CGEventRef, this.CFAllocatorRef, this.CFDataRef);
    this.CGEventCreateMouseEvent = lib.declare("CGEventCreateMouseEvent", ctypes.default_abi, this.CGEventRef, this.CGEventSourceRef, this.CGEventType, this.CGPoint, this.CGMouseButton);
    // Dropping declaration of 'CGEventCreateKeyboardEvent': Unknown type bool_t
    // Dropping declaration of 'CGEventCreateScrollWheelEvent': 'uint32_t' defined out of scope
    this.CGEventCreateCopy = lib.declare("CGEventCreateCopy", ctypes.default_abi, this.CGEventRef, this.CGEventRef);
    this.CGEventCreateSourceFromEvent = lib.declare("CGEventCreateSourceFromEvent", ctypes.default_abi, this.CGEventSourceRef, this.CGEventRef);
    this.CGEventSetSource = lib.declare("CGEventSetSource", ctypes.default_abi, ctypes.void_t, this.CGEventRef, this.CGEventSourceRef);
    this.CGEventGetType = lib.declare("CGEventGetType", ctypes.default_abi, this.CGEventType, this.CGEventRef);
    this.CGEventSetType = lib.declare("CGEventSetType", ctypes.default_abi, ctypes.void_t, this.CGEventRef, this.CGEventType);
    this.CGEventGetTimestamp = lib.declare("CGEventGetTimestamp", ctypes.default_abi, this.CGEventTimestamp, this.CGEventRef);
    this.CGEventSetTimestamp = lib.declare("CGEventSetTimestamp", ctypes.default_abi, ctypes.void_t, this.CGEventRef, this.CGEventTimestamp);
    this.CGEventGetLocation = lib.declare("CGEventGetLocation", ctypes.default_abi, this.CGPoint, this.CGEventRef);
    this.CGEventGetUnflippedLocation = lib.declare("CGEventGetUnflippedLocation", ctypes.default_abi, this.CGPoint, this.CGEventRef);
    this.CGEventSetLocation = lib.declare("CGEventSetLocation", ctypes.default_abi, ctypes.void_t, this.CGEventRef, this.CGPoint);
    this.CGEventGetFlags = lib.declare("CGEventGetFlags", ctypes.default_abi, this.CGEventFlags, this.CGEventRef);
    this.CGEventSetFlags = lib.declare("CGEventSetFlags", ctypes.default_abi, ctypes.void_t, this.CGEventRef, this.CGEventFlags);
    this.CGEventKeyboardGetUnicodeString = lib.declare("CGEventKeyboardGetUnicodeString", ctypes.default_abi, ctypes.void_t, this.CGEventRef, this.UniCharCount, this.UniCharCount.ptr, ctypes.unsigned_short.ptr);
    this.CGEventKeyboardSetUnicodeString = lib.declare("CGEventKeyboardSetUnicodeString", ctypes.default_abi, ctypes.void_t, this.CGEventRef, this.UniCharCount, this.UniChar.ptr);
    // Dropping declaration of 'CGEventGetIntegerValueField': 'int64_t' defined out of scope
    // Dropping declaration of 'CGEventSetIntegerValueField': 'int64_t' defined out of scope
    this.CGEventGetDoubleValueField = lib.declare("CGEventGetDoubleValueField", ctypes.default_abi, ctypes.double, this.CGEventRef, this.CGEventField);
    this.CGEventSetDoubleValueField = lib.declare("CGEventSetDoubleValueField", ctypes.default_abi, ctypes.void_t, this.CGEventRef, this.CGEventField, ctypes.double);
    this.CGEventTapCreate = lib.declare("CGEventTapCreate", ctypes.default_abi, this.CFMachPortRef, this.CGEventTapLocation, this.CGEventTapPlacement, this.CGEventTapOptions, this.CGEventMask, this.CGEventTapCallBack, ctypes.void_t.ptr);
    this.CGEventTapCreateForPSN = lib.declare("CGEventTapCreateForPSN", ctypes.default_abi, this.CFMachPortRef, ctypes.void_t.ptr, this.CGEventTapPlacement, this.CGEventTapOptions, this.CGEventMask, this.CGEventTapCallBack, ctypes.void_t.ptr);
    // Dropping declaration of 'CGEventTapEnable': Unknown type bool_t
    // Dropping declaration of 'CGEventTapIsEnabled': Unknown type bool_t
    this.CGEventTapPostEvent = lib.declare("CGEventTapPostEvent", ctypes.default_abi, ctypes.void_t, this.CGEventTapProxy, this.CGEventRef);
    this.CGEventPost = lib.declare("CGEventPost", ctypes.default_abi, ctypes.void_t, this.CGEventTapLocation, this.CGEventRef);
    this.CGEventPostToPSN = lib.declare("CGEventPostToPSN", ctypes.default_abi, ctypes.void_t, ctypes.void_t.ptr, this.CGEventRef);
    // Dropping declaration of 'CGGetEventTapList': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGRemoteOperation.h
function CGRemoteOperation_h(lib) {
    CGGeometry_h.call(this, lib);
    CGError_h.call(this, lib);
    CFMachPort_h.call(this, lib);
    CFDate_h.call(this, lib);

    if (this._CGREMOTEOPERATION_H)
        return;
    this._CGREMOTEOPERATION_H = true;

    this.CGEventErr = this.CGError;
    // Dropping declaration of 'CGButtonCount': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGWheelCount': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGCharCode': 'uint16_t' defined out of scope
    // Dropping declaration of 'CGKeyCode': 'uint16_t' defined out of scope
    // Dropping declaration of 'CGScreenRefreshCallback': 'uint32_t' defined out of scope
    this.CGRegisterScreenRefreshCallback = lib.declare("CGRegisterScreenRefreshCallback", ctypes.default_abi, this.CGError, this.CGScreenRefreshCallback, ctypes.void_t.ptr);
    this.CGUnregisterScreenRefreshCallback = lib.declare("CGUnregisterScreenRefreshCallback", ctypes.default_abi, ctypes.void_t, this.CGScreenRefreshCallback, ctypes.void_t.ptr);
    // Dropping declaration of 'CGWaitForScreenRefreshRects': 'uint32_t' defined out of scope
    this.kCGScreenUpdateOperationRefresh = 0;
    this.kCGScreenUpdateOperationMove = 1;
    this.kCGScreenUpdateOperationReducedDirtyRectangleCount = -2147483648;
    // Dropping declaration of 'CGScreenUpdateOperation': 'uint32_t' defined out of scope
    this.CGScreenUpdateMoveDelta = new ctypes.StructType("CGScreenUpdateMoveDelta", []);
    // Dropping declaration of 'CGScreenUpdateMoveCallback': 'size_t' defined out of scope
    this.CGScreenRegisterMoveCallback = lib.declare("CGScreenRegisterMoveCallback", ctypes.default_abi, this.CGError, this.CGScreenUpdateMoveCallback, ctypes.void_t.ptr);
    this.CGScreenUnregisterMoveCallback = lib.declare("CGScreenUnregisterMoveCallback", ctypes.default_abi, ctypes.void_t, this.CGScreenUpdateMoveCallback, ctypes.void_t.ptr);
    // Dropping declaration of 'CGWaitForScreenUpdateRects': 'size_t' defined out of scope
    this.CGReleaseScreenRefreshRects = lib.declare("CGReleaseScreenRefreshRects", ctypes.default_abi, ctypes.void_t, this.CGRect.ptr);
    // Dropping declaration of 'CGCursorIsVisible': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGCursorIsDrawnInFramebuffer': 'boolean_t' defined out of scope
    this.CGWarpMouseCursorPosition = lib.declare("CGWarpMouseCursorPosition", ctypes.default_abi, this.CGError, this.CGPoint);
    // Dropping declaration of 'CGAssociateMouseAndMouseCursorPosition': 'boolean_t' defined out of scope
    this.CGWindowServerCFMachPort = lib.declare("CGWindowServerCFMachPort", ctypes.default_abi, this.CFMachPortRef);
    // Dropping declaration of 'CGEnableEventStateCombining': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGInhibitLocalEvents': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGPostMouseEvent': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGPostScrollWheelEvent': 'int32_t' defined out of scope
    // Dropping declaration of 'CGPostKeyboardEvent': 'boolean_t' defined out of scope
    this.kCGEventFilterMaskPermitLocalMouseEvents = 1;
    this.kCGEventFilterMaskPermitLocalKeyboardEvents = 2;
    this.kCGEventFilterMaskPermitSystemDefinedEvents = 4;
    // Dropping declaration of 'CGEventFilterMask': 'uint32_t' defined out of scope
    this.kCGEventSuppressionStateSuppressionInterval = 0;
    this.kCGEventSuppressionStateRemoteMouseDrag = 1;
    this.kCGNumberOfEventSuppressionStates = 2;
    // Dropping declaration of 'CGEventSuppressionState': 'uint32_t' defined out of scope
    this.CGSetLocalEventsFilterDuringSuppressionState = lib.declare("CGSetLocalEventsFilterDuringSuppressionState", ctypes.default_abi, this.CGError, this.CGEventFilterMask, this.CGEventSuppressionState);
    this.CGSetLocalEventsSuppressionInterval = lib.declare("CGSetLocalEventsSuppressionInterval", ctypes.default_abi, this.CGError, this.CFTimeInterval);
    // Dropping declaration of 'CGRectCount': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGColor.h
function CGColor_h(lib) {
    CGColorSpace_h.call(this, lib);
    CGPattern_h.call(this, lib);
    CFBase_h.call(this, lib);
    CGBase_h.call(this, lib);

    if (this._CGCOLOR_H)
        return;
    this._CGCOLOR_H = true;

    this.CGColor = new ctypes.StructType("CGColor");
    this.CGColorRef = this.CGColor.ptr;
    this.CGColorCreate = lib.declare("CGColorCreate", ctypes.default_abi, this.CGColorRef, this.CGColorSpaceRef, this.CGFloat.ptr);
    this.CGColorCreateGenericGray = lib.declare("CGColorCreateGenericGray", ctypes.default_abi, this.CGColorRef, this.CGFloat, this.CGFloat);
    this.CGColorCreateGenericRGB = lib.declare("CGColorCreateGenericRGB", ctypes.default_abi, this.CGColorRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGColorCreateGenericCMYK = lib.declare("CGColorCreateGenericCMYK", ctypes.default_abi, this.CGColorRef, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGColorGetConstantColor = lib.declare("CGColorGetConstantColor", ctypes.default_abi, this.CGColorRef, this.CFStringRef);
    this.CGColorCreateWithPattern = lib.declare("CGColorCreateWithPattern", ctypes.default_abi, this.CGColorRef, this.CGColorSpaceRef, this.CGPatternRef, this.CGFloat.ptr);
    this.CGColorCreateCopy = lib.declare("CGColorCreateCopy", ctypes.default_abi, this.CGColorRef, this.CGColorRef);
    this.CGColorCreateCopyWithAlpha = lib.declare("CGColorCreateCopyWithAlpha", ctypes.default_abi, this.CGColorRef, this.CGColorRef, this.CGFloat);
    this.CGColorRetain = lib.declare("CGColorRetain", ctypes.default_abi, this.CGColorRef, this.CGColorRef);
    this.CGColorRelease = lib.declare("CGColorRelease", ctypes.default_abi, ctypes.void_t, this.CGColorRef);
    // Dropping declaration of 'CGColorEqualToColor': Unknown type bool_t
    // Dropping declaration of 'CGColorGetNumberOfComponents': 'size_t' defined out of scope
    this.CGColorGetComponents = lib.declare("CGColorGetComponents", ctypes.default_abi, this.CGFloat.ptr, this.CGColorRef);
    this.CGColorGetAlpha = lib.declare("CGColorGetAlpha", ctypes.default_abi, this.CGFloat, this.CGColorRef);
    this.CGColorGetColorSpace = lib.declare("CGColorGetColorSpace", ctypes.default_abi, this.CGColorSpaceRef, this.CGColorRef);
    this.CGColorGetPattern = lib.declare("CGColorGetPattern", ctypes.default_abi, this.CGPatternRef, this.CGColorRef);
    this.CGColorGetTypeID = lib.declare("CGColorGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCGColorWhite = lib.declare("kCGColorWhite", this.CFStringRef);
    this.kCGColorBlack = lib.declare("kCGColorBlack", this.CFStringRef);
    this.kCGColorClear = lib.declare("kCGColorClear", this.CFStringRef);
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
    this.CGPDFOperatorTableCreate = lib.declare("CGPDFOperatorTableCreate", ctypes.default_abi, this.CGPDFOperatorTableRef);
    this.CGPDFOperatorTableRetain = lib.declare("CGPDFOperatorTableRetain", ctypes.default_abi, this.CGPDFOperatorTableRef, this.CGPDFOperatorTableRef);
    this.CGPDFOperatorTableRelease = lib.declare("CGPDFOperatorTableRelease", ctypes.default_abi, ctypes.void_t, this.CGPDFOperatorTableRef);
    this.CGPDFOperatorTableSetCallback = lib.declare("CGPDFOperatorTableSetCallback", ctypes.default_abi, ctypes.void_t, this.CGPDFOperatorTableRef, ctypes.char.ptr, this.CGPDFOperatorCallback);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGGeometry.h
function CGGeometry_h(lib) {
    CGBase_h.call(this, lib);
    CFDictionary_h.call(this, lib);

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
    this.CGPointZero = lib.declare("CGPointZero", this.CGPoint);
    this.CGSizeZero = lib.declare("CGSizeZero", this.CGSize);
    this.CGRectZero = lib.declare("CGRectZero", this.CGRect);
    this.CGRectNull = lib.declare("CGRectNull", this.CGRect);
    this.CGRectInfinite = lib.declare("CGRectInfinite", this.CGRect);
    this.CGRectGetMinX = lib.declare("CGRectGetMinX", ctypes.default_abi, this.CGFloat, this.CGRect);
    this.CGRectGetMidX = lib.declare("CGRectGetMidX", ctypes.default_abi, this.CGFloat, this.CGRect);
    this.CGRectGetMaxX = lib.declare("CGRectGetMaxX", ctypes.default_abi, this.CGFloat, this.CGRect);
    this.CGRectGetMinY = lib.declare("CGRectGetMinY", ctypes.default_abi, this.CGFloat, this.CGRect);
    this.CGRectGetMidY = lib.declare("CGRectGetMidY", ctypes.default_abi, this.CGFloat, this.CGRect);
    this.CGRectGetMaxY = lib.declare("CGRectGetMaxY", ctypes.default_abi, this.CGFloat, this.CGRect);
    this.CGRectGetWidth = lib.declare("CGRectGetWidth", ctypes.default_abi, this.CGFloat, this.CGRect);
    this.CGRectGetHeight = lib.declare("CGRectGetHeight", ctypes.default_abi, this.CGFloat, this.CGRect);
    // Dropping declaration of 'CGPointEqualToPoint': Unknown type bool_t
    // Dropping declaration of 'CGSizeEqualToSize': Unknown type bool_t
    // Dropping declaration of 'CGRectEqualToRect': Unknown type bool_t
    this.CGRectStandardize = lib.declare("CGRectStandardize", ctypes.default_abi, this.CGRect, this.CGRect);
    // Dropping declaration of 'CGRectIsEmpty': Unknown type bool_t
    // Dropping declaration of 'CGRectIsNull': Unknown type bool_t
    // Dropping declaration of 'CGRectIsInfinite': Unknown type bool_t
    this.CGRectInset = lib.declare("CGRectInset", ctypes.default_abi, this.CGRect, this.CGRect, this.CGFloat, this.CGFloat);
    this.CGRectIntegral = lib.declare("CGRectIntegral", ctypes.default_abi, this.CGRect, this.CGRect);
    this.CGRectUnion = lib.declare("CGRectUnion", ctypes.default_abi, this.CGRect, this.CGRect, this.CGRect);
    this.CGRectIntersection = lib.declare("CGRectIntersection", ctypes.default_abi, this.CGRect, this.CGRect, this.CGRect);
    this.CGRectOffset = lib.declare("CGRectOffset", ctypes.default_abi, this.CGRect, this.CGRect, this.CGFloat, this.CGFloat);
    this.CGRectDivide = lib.declare("CGRectDivide", ctypes.default_abi, ctypes.void_t, this.CGRect, this.CGRect.ptr, this.CGRect.ptr, this.CGFloat, this.CGRectEdge);
    // Dropping declaration of 'CGRectContainsPoint': Unknown type bool_t
    // Dropping declaration of 'CGRectContainsRect': Unknown type bool_t
    // Dropping declaration of 'CGRectIntersectsRect': Unknown type bool_t
    this.CGPointCreateDictionaryRepresentation = lib.declare("CGPointCreateDictionaryRepresentation", ctypes.default_abi, this.CFDictionaryRef, this.CGPoint);
    // Dropping declaration of 'CGPointMakeWithDictionaryRepresentation': Unknown type bool_t
    this.CGSizeCreateDictionaryRepresentation = lib.declare("CGSizeCreateDictionaryRepresentation", ctypes.default_abi, this.CFDictionaryRef, this.CGSize);
    // Dropping declaration of 'CGSizeMakeWithDictionaryRepresentation': Unknown type bool_t
    this.CGRectCreateDictionaryRepresentation = lib.declare("CGRectCreateDictionaryRepresentation", ctypes.default_abi, this.CFDictionaryRef, this.CGRect);
    // Dropping declaration of 'CGRectMakeWithDictionaryRepresentation': Unknown type bool_t
    // Dropping inline function 'CGPointMake'.
    // Dropping inline function 'CGSizeMake'.
    // Dropping inline function 'CGRectMake'.
    // Dropping inline function '__CGPointEqualToPoint'.
    // Dropping inline function '__CGSizeEqualToSize'.
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFContentStream.h
function CGPDFContentStream_h(lib) {
    CGPDFDictionary_h.call(this, lib);
    CGPDFPage_h.call(this, lib);
    CGPDFStream_h.call(this, lib);
    CGPDFObject_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CGPDFCONTENTSTREAM_H)
        return;
    this._CGPDFCONTENTSTREAM_H = true;

    this.CGPDFContentStream = new ctypes.StructType("CGPDFContentStream");
    this.CGPDFContentStreamRef = this.CGPDFContentStream.ptr;
    this.CGPDFContentStreamCreateWithPage = lib.declare("CGPDFContentStreamCreateWithPage", ctypes.default_abi, this.CGPDFContentStreamRef, this.CGPDFPageRef);
    this.CGPDFContentStreamCreateWithStream = lib.declare("CGPDFContentStreamCreateWithStream", ctypes.default_abi, this.CGPDFContentStreamRef, this.CGPDFStreamRef, this.CGPDFDictionaryRef, this.CGPDFContentStreamRef);
    this.CGPDFContentStreamRetain = lib.declare("CGPDFContentStreamRetain", ctypes.default_abi, this.CGPDFContentStreamRef, this.CGPDFContentStreamRef);
    this.CGPDFContentStreamRelease = lib.declare("CGPDFContentStreamRelease", ctypes.default_abi, ctypes.void_t, this.CGPDFContentStreamRef);
    this.CGPDFContentStreamGetStreams = lib.declare("CGPDFContentStreamGetStreams", ctypes.default_abi, this.CFArrayRef, this.CGPDFContentStreamRef);
    this.CGPDFContentStreamGetResource = lib.declare("CGPDFContentStreamGetResource", ctypes.default_abi, this.CGPDFObjectRef, this.CGPDFContentStreamRef, ctypes.char.ptr, ctypes.char.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFContext.h
function CGPDFContext_h(lib) {
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CGDataConsumer_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._CGPDFCONTEXT_H)
        return;
    this._CGPDFCONTEXT_H = true;

    this.CGPDFContextCreate = lib.declare("CGPDFContextCreate", ctypes.default_abi, this.CGContextRef, this.CGDataConsumerRef, this.CGRect.ptr, this.CFDictionaryRef);
    this.CGPDFContextCreateWithURL = lib.declare("CGPDFContextCreateWithURL", ctypes.default_abi, this.CGContextRef, this.CFURLRef, this.CGRect.ptr, this.CFDictionaryRef);
    this.CGPDFContextClose = lib.declare("CGPDFContextClose", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGPDFContextBeginPage = lib.declare("CGPDFContextBeginPage", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CFDictionaryRef);
    this.CGPDFContextEndPage = lib.declare("CGPDFContextEndPage", ctypes.default_abi, ctypes.void_t, this.CGContextRef);
    this.CGPDFContextSetURLForRect = lib.declare("CGPDFContextSetURLForRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CFURLRef, this.CGRect);
    this.CGPDFContextAddDestinationAtPoint = lib.declare("CGPDFContextAddDestinationAtPoint", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CFStringRef, this.CGPoint);
    this.CGPDFContextSetDestinationForRect = lib.declare("CGPDFContextSetDestinationForRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CFStringRef, this.CGRect);
    this.kCGPDFContextMediaBox = lib.declare("kCGPDFContextMediaBox", this.CFStringRef);
    this.kCGPDFContextCropBox = lib.declare("kCGPDFContextCropBox", this.CFStringRef);
    this.kCGPDFContextBleedBox = lib.declare("kCGPDFContextBleedBox", this.CFStringRef);
    this.kCGPDFContextTrimBox = lib.declare("kCGPDFContextTrimBox", this.CFStringRef);
    this.kCGPDFContextArtBox = lib.declare("kCGPDFContextArtBox", this.CFStringRef);
    this.kCGPDFContextTitle = lib.declare("kCGPDFContextTitle", this.CFStringRef);
    this.kCGPDFContextAuthor = lib.declare("kCGPDFContextAuthor", this.CFStringRef);
    this.kCGPDFContextSubject = lib.declare("kCGPDFContextSubject", this.CFStringRef);
    this.kCGPDFContextKeywords = lib.declare("kCGPDFContextKeywords", this.CFStringRef);
    this.kCGPDFContextCreator = lib.declare("kCGPDFContextCreator", this.CFStringRef);
    this.kCGPDFContextOwnerPassword = lib.declare("kCGPDFContextOwnerPassword", this.CFStringRef);
    this.kCGPDFContextUserPassword = lib.declare("kCGPDFContextUserPassword", this.CFStringRef);
    this.kCGPDFContextEncryptionKeyLength = lib.declare("kCGPDFContextEncryptionKeyLength", this.CFStringRef);
    this.kCGPDFContextAllowsPrinting = lib.declare("kCGPDFContextAllowsPrinting", this.CFStringRef);
    this.kCGPDFContextAllowsCopying = lib.declare("kCGPDFContextAllowsCopying", this.CFStringRef);
    this.kCGPDFContextOutputIntent = lib.declare("kCGPDFContextOutputIntent", this.CFStringRef);
    this.kCGPDFXOutputIntentSubtype = lib.declare("kCGPDFXOutputIntentSubtype", this.CFStringRef);
    this.kCGPDFXOutputConditionIdentifier = lib.declare("kCGPDFXOutputConditionIdentifier", this.CFStringRef);
    this.kCGPDFXOutputCondition = lib.declare("kCGPDFXOutputCondition", this.CFStringRef);
    this.kCGPDFXRegistryName = lib.declare("kCGPDFXRegistryName", this.CFStringRef);
    this.kCGPDFXInfo = lib.declare("kCGPDFXInfo", this.CFStringRef);
    this.kCGPDFXDestinationOutputProfile = lib.declare("kCGPDFXDestinationOutputProfile", this.CFStringRef);
    this.kCGPDFContextOutputIntents = lib.declare("kCGPDFContextOutputIntents", this.CFStringRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGWindow.h
function CGWindow_h(lib) {
    CGGeometry_h.call(this, lib);
    CGImage_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

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
    this.kCGWindowNumber = lib.declare("kCGWindowNumber", this.CFStringRef);
    this.kCGWindowStoreType = lib.declare("kCGWindowStoreType", this.CFStringRef);
    this.kCGWindowLayer = lib.declare("kCGWindowLayer", this.CFStringRef);
    this.kCGWindowBounds = lib.declare("kCGWindowBounds", this.CFStringRef);
    this.kCGWindowSharingState = lib.declare("kCGWindowSharingState", this.CFStringRef);
    this.kCGWindowAlpha = lib.declare("kCGWindowAlpha", this.CFStringRef);
    this.kCGWindowOwnerPID = lib.declare("kCGWindowOwnerPID", this.CFStringRef);
    this.kCGWindowMemoryUsage = lib.declare("kCGWindowMemoryUsage", this.CFStringRef);
    this.kCGWindowWorkspace = lib.declare("kCGWindowWorkspace", this.CFStringRef);
    this.kCGWindowOwnerName = lib.declare("kCGWindowOwnerName", this.CFStringRef);
    this.kCGWindowName = lib.declare("kCGWindowName", this.CFStringRef);
    this.kCGWindowIsOnscreen = lib.declare("kCGWindowIsOnscreen", this.CFStringRef);
    this.kCGWindowBackingLocationVideoMemory = lib.declare("kCGWindowBackingLocationVideoMemory", this.CFStringRef);
    this.kCGWindowListOptionAll = 0;
    this.kCGWindowListOptionOnScreenOnly = 1;
    this.kCGWindowListOptionOnScreenAboveWindow = 2;
    this.kCGWindowListOptionOnScreenBelowWindow = 4;
    this.kCGWindowListOptionIncludingWindow = 8;
    this.kCGWindowListExcludeDesktopElements = 16;
    this.CGWindowListCopyWindowInfo = lib.declare("CGWindowListCopyWindowInfo", ctypes.default_abi, this.CFArrayRef, this.CGWindowListOption, this.CGWindowID);
    this.CGWindowListCreate = lib.declare("CGWindowListCreate", ctypes.default_abi, this.CFArrayRef, this.CGWindowListOption, this.CGWindowID);
    this.CGWindowListCreateDescriptionFromArray = lib.declare("CGWindowListCreateDescriptionFromArray", ctypes.default_abi, this.CFArrayRef, this.CFArrayRef);
    this.kCGWindowImageDefault = 0;
    this.kCGWindowImageBoundsIgnoreFraming = 1;
    this.kCGWindowImageShouldBeOpaque = 2;
    this.kCGWindowImageOnlyShadows = 4;
    this.CGWindowListCreateImage = lib.declare("CGWindowListCreateImage", ctypes.default_abi, this.CGImageRef, this.CGRect, this.CGWindowListOption, this.CGWindowID, this.CGWindowImageOption);
    this.CGWindowListCreateImageFromArray = lib.declare("CGWindowListCreateImageFromArray", ctypes.default_abi, this.CGImageRef, this.CGRect, this.CFArrayRef, this.CGWindowImageOption);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGColorSpace.h
function CGColorSpace_h(lib) {
    CFData_h.call(this, lib);
    CFBase_h.call(this, lib);
    CGBase_h.call(this, lib);

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
    this.kCGColorSpaceGenericGray = lib.declare("kCGColorSpaceGenericGray", this.CFStringRef);
    this.kCGColorSpaceGenericRGB = lib.declare("kCGColorSpaceGenericRGB", this.CFStringRef);
    this.kCGColorSpaceGenericCMYK = lib.declare("kCGColorSpaceGenericCMYK", this.CFStringRef);
    this.kCGColorSpaceGenericRGBLinear = lib.declare("kCGColorSpaceGenericRGBLinear", this.CFStringRef);
    this.kCGColorSpaceAdobeRGB1998 = lib.declare("kCGColorSpaceAdobeRGB1998", this.CFStringRef);
    this.kCGColorSpaceSRGB = lib.declare("kCGColorSpaceSRGB", this.CFStringRef);
    this.kCGColorSpaceGenericGrayGamma2_2 = lib.declare("kCGColorSpaceGenericGrayGamma2_2", this.CFStringRef);
    this.CGColorSpaceCreateDeviceGray = lib.declare("CGColorSpaceCreateDeviceGray", ctypes.default_abi, this.CGColorSpaceRef);
    this.CGColorSpaceCreateDeviceRGB = lib.declare("CGColorSpaceCreateDeviceRGB", ctypes.default_abi, this.CGColorSpaceRef);
    this.CGColorSpaceCreateDeviceCMYK = lib.declare("CGColorSpaceCreateDeviceCMYK", ctypes.default_abi, this.CGColorSpaceRef);
    this.CGColorSpaceCreateCalibratedGray = lib.declare("CGColorSpaceCreateCalibratedGray", ctypes.default_abi, this.CGColorSpaceRef, this.CGFloat.ptr, this.CGFloat.ptr, this.CGFloat);
    this.CGColorSpaceCreateCalibratedRGB = lib.declare("CGColorSpaceCreateCalibratedRGB", ctypes.default_abi, this.CGColorSpaceRef, this.CGFloat.ptr, this.CGFloat.ptr, this.CGFloat.ptr, this.CGFloat.ptr);
    this.CGColorSpaceCreateLab = lib.declare("CGColorSpaceCreateLab", ctypes.default_abi, this.CGColorSpaceRef, this.CGFloat.ptr, this.CGFloat.ptr, this.CGFloat.ptr);
    this.CGColorSpaceCreateWithICCProfile = lib.declare("CGColorSpaceCreateWithICCProfile", ctypes.default_abi, this.CGColorSpaceRef, this.CFDataRef);
    // Dropping declaration of 'CGColorSpaceCreateICCBased': 'size_t' defined out of scope
    // Dropping declaration of 'CGColorSpaceCreateIndexed': 'size_t' defined out of scope
    this.CGColorSpaceCreatePattern = lib.declare("CGColorSpaceCreatePattern", ctypes.default_abi, this.CGColorSpaceRef, this.CGColorSpaceRef);
    this.CGColorSpaceCreateWithPlatformColorSpace = lib.declare("CGColorSpaceCreateWithPlatformColorSpace", ctypes.default_abi, this.CGColorSpaceRef, ctypes.void_t.ptr);
    this.CGColorSpaceCreateWithName = lib.declare("CGColorSpaceCreateWithName", ctypes.default_abi, this.CGColorSpaceRef, this.CFStringRef);
    this.CGColorSpaceRetain = lib.declare("CGColorSpaceRetain", ctypes.default_abi, this.CGColorSpaceRef, this.CGColorSpaceRef);
    this.CGColorSpaceRelease = lib.declare("CGColorSpaceRelease", ctypes.default_abi, ctypes.void_t, this.CGColorSpaceRef);
    this.CGColorSpaceCopyName = lib.declare("CGColorSpaceCopyName", ctypes.default_abi, this.CFStringRef, this.CGColorSpaceRef);
    this.CGColorSpaceGetTypeID = lib.declare("CGColorSpaceGetTypeID", ctypes.default_abi, this.CFTypeID);
    // Dropping declaration of 'CGColorSpaceGetNumberOfComponents': 'size_t' defined out of scope
    this.CGColorSpaceGetModel = lib.declare("CGColorSpaceGetModel", ctypes.default_abi, this.CGColorSpaceModel, this.CGColorSpaceRef);
    this.CGColorSpaceGetBaseColorSpace = lib.declare("CGColorSpaceGetBaseColorSpace", ctypes.default_abi, this.CGColorSpaceRef, this.CGColorSpaceRef);
    // Dropping declaration of 'CGColorSpaceGetColorTableCount': 'size_t' defined out of scope
    // Dropping declaration of 'CGColorSpaceGetColorTable': 'uint8_t' defined out of scope
    this.CGColorSpaceCopyICCProfile = lib.declare("CGColorSpaceCopyICCProfile", ctypes.default_abi, this.CFDataRef, this.CGColorSpaceRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGFunction.h
function CGFunction_h(lib) {
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._CGFUNCTION_H)
        return;
    this._CGFUNCTION_H = true;

    this.CGFunction = new ctypes.StructType("CGFunction");
    this.CGFunctionRef = this.CGFunction.ptr;
    this.CGFunctionEvaluateCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CGFloat.ptr, this.CGFloat.ptr]).ptr;
    this.CGFunctionReleaseInfoCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CGFunctionCallbacks = new ctypes.StructType("CGFunctionCallbacks", [{version: ctypes.unsigned_int}, {evaluate: this.CGFunctionEvaluateCallback}, {releaseInfo: this.CGFunctionReleaseInfoCallback}]);
    this.CGFunctionGetTypeID = lib.declare("CGFunctionGetTypeID", ctypes.default_abi, this.CFTypeID);
    // Dropping declaration of 'CGFunctionCreate': 'size_t' defined out of scope
    this.CGFunctionRetain = lib.declare("CGFunctionRetain", ctypes.default_abi, this.CGFunctionRef, this.CGFunctionRef);
    this.CGFunctionRelease = lib.declare("CGFunctionRelease", ctypes.default_abi, ctypes.void_t, this.CGFunctionRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFArray.h
function CGPDFArray_h(lib) {

    if (this._CGPDFARRAY_H)
        return;
    this._CGPDFARRAY_H = true;

    this.CGPDFArray = new ctypes.StructType("CGPDFArray");
    this.CGPDFArrayRef = this.CGPDFArray.ptr;
    // Dropping declaration of 'CGPDFArrayGetCount': 'size_t' defined out of scope
    // Dropping declaration of 'CGPDFArrayGetObject': Unknown type bool_t
    // Dropping declaration of 'CGPDFArrayGetNull': Unknown type bool_t
    // Dropping declaration of 'CGPDFArrayGetBoolean': Unknown type bool_t
    // Dropping declaration of 'CGPDFArrayGetInteger': Unknown type bool_t
    // Dropping declaration of 'CGPDFArrayGetNumber': Unknown type bool_t
    // Dropping declaration of 'CGPDFArrayGetName': Unknown type bool_t
    // Dropping declaration of 'CGPDFArrayGetString': Unknown type bool_t
    // Dropping declaration of 'CGPDFArrayGetArray': Unknown type bool_t
    // Dropping declaration of 'CGPDFArrayGetDictionary': Unknown type bool_t
    // Dropping declaration of 'CGPDFArrayGetStream': Unknown type bool_t
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGBitmapContext.h
function CGBitmapContext_h(lib) {
    CGColorSpace_h.call(this, lib);
    CGContext_h.call(this, lib);
    CGImage_h.call(this, lib);

    if (this._CGBITMAPCONTEXT_H)
        return;
    this._CGBITMAPCONTEXT_H = true;

    this.CGBitmapContextReleaseDataCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    // Dropping declaration of 'CGBitmapContextCreateWithData': 'size_t' defined out of scope
    // Dropping declaration of 'CGBitmapContextCreate': 'size_t' defined out of scope
    this.CGBitmapContextGetData = lib.declare("CGBitmapContextGetData", ctypes.default_abi, ctypes.void_t.ptr, this.CGContextRef);
    // Dropping declaration of 'CGBitmapContextGetWidth': 'size_t' defined out of scope
    // Dropping declaration of 'CGBitmapContextGetHeight': 'size_t' defined out of scope
    // Dropping declaration of 'CGBitmapContextGetBitsPerComponent': 'size_t' defined out of scope
    // Dropping declaration of 'CGBitmapContextGetBitsPerPixel': 'size_t' defined out of scope
    // Dropping declaration of 'CGBitmapContextGetBytesPerRow': 'size_t' defined out of scope
    this.CGBitmapContextGetColorSpace = lib.declare("CGBitmapContextGetColorSpace", ctypes.default_abi, this.CGColorSpaceRef, this.CGContextRef);
    this.CGBitmapContextGetAlphaInfo = lib.declare("CGBitmapContextGetAlphaInfo", ctypes.default_abi, this.CGImageAlphaInfo, this.CGContextRef);
    this.CGBitmapContextGetBitmapInfo = lib.declare("CGBitmapContextGetBitmapInfo", ctypes.default_abi, this.CGBitmapInfo, this.CGContextRef);
    this.CGBitmapContextCreateImage = lib.declare("CGBitmapContextCreateImage", ctypes.default_abi, this.CGImageRef, this.CGContextRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDirectDisplay.h
function CGDirectDisplay_h(lib) {
    CGImage_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CGError_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

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
    this.CGMainDisplayID = lib.declare("CGMainDisplayID", ctypes.default_abi, this.CGDirectDisplayID);
    // Dropping declaration of 'CGGetDisplaysWithPoint': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGGetDisplaysWithRect': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGGetDisplaysWithOpenGLDisplayMask': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGGetActiveDisplayList': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGGetOnlineDisplayList': 'uint32_t' defined out of scope
    this.CGDisplayIDToOpenGLDisplayMask = lib.declare("CGDisplayIDToOpenGLDisplayMask", ctypes.default_abi, this.CGOpenGLDisplayMask, this.CGDirectDisplayID);
    this.CGOpenGLDisplayMaskToDisplayID = lib.declare("CGOpenGLDisplayMaskToDisplayID", ctypes.default_abi, this.CGDirectDisplayID, this.CGOpenGLDisplayMask);
    this.CGDisplayBounds = lib.declare("CGDisplayBounds", ctypes.default_abi, this.CGRect, this.CGDirectDisplayID);
    // Dropping declaration of 'CGDisplayPixelsWide': 'size_t' defined out of scope
    // Dropping declaration of 'CGDisplayPixelsHigh': 'size_t' defined out of scope
    this.CGDisplayCopyAllDisplayModes = lib.declare("CGDisplayCopyAllDisplayModes", ctypes.default_abi, this.CFArrayRef, this.CGDirectDisplayID, this.CFDictionaryRef);
    this.CGDisplayCopyDisplayMode = lib.declare("CGDisplayCopyDisplayMode", ctypes.default_abi, this.CGDisplayModeRef, this.CGDirectDisplayID);
    this.CGDisplaySetDisplayMode = lib.declare("CGDisplaySetDisplayMode", ctypes.default_abi, this.CGError, this.CGDirectDisplayID, this.CGDisplayModeRef, this.CFDictionaryRef);
    // Dropping declaration of 'CGDisplayModeGetWidth': 'size_t' defined out of scope
    // Dropping declaration of 'CGDisplayModeGetHeight': 'size_t' defined out of scope
    this.CGDisplayModeCopyPixelEncoding = lib.declare("CGDisplayModeCopyPixelEncoding", ctypes.default_abi, this.CFStringRef, this.CGDisplayModeRef);
    this.CGDisplayModeGetRefreshRate = lib.declare("CGDisplayModeGetRefreshRate", ctypes.default_abi, ctypes.double, this.CGDisplayModeRef);
    // Dropping declaration of 'CGDisplayModeGetIOFlags': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGDisplayModeGetIODisplayModeID': 'int32_t' defined out of scope
    // Dropping declaration of 'CGDisplayModeIsUsableForDesktopGUI': Unknown type bool_t
    this.CGDisplayModeGetTypeID = lib.declare("CGDisplayModeGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGDisplayModeRetain = lib.declare("CGDisplayModeRetain", ctypes.default_abi, this.CGDisplayModeRef, this.CGDisplayModeRef);
    this.CGDisplayModeRelease = lib.declare("CGDisplayModeRelease", ctypes.default_abi, ctypes.void_t, this.CGDisplayModeRef);
    this.CGGammaValue = ctypes.float;
    this.CGSetDisplayTransferByFormula = lib.declare("CGSetDisplayTransferByFormula", ctypes.default_abi, this.CGError, this.CGDirectDisplayID, this.CGGammaValue, this.CGGammaValue, this.CGGammaValue, this.CGGammaValue, this.CGGammaValue, this.CGGammaValue, this.CGGammaValue, this.CGGammaValue, this.CGGammaValue);
    this.CGGetDisplayTransferByFormula = lib.declare("CGGetDisplayTransferByFormula", ctypes.default_abi, this.CGError, this.CGDirectDisplayID, this.CGGammaValue.ptr, this.CGGammaValue.ptr, this.CGGammaValue.ptr, this.CGGammaValue.ptr, this.CGGammaValue.ptr, this.CGGammaValue.ptr, this.CGGammaValue.ptr, this.CGGammaValue.ptr, this.CGGammaValue.ptr);
    // Dropping declaration of 'CGDisplayGammaTableCapacity': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGSetDisplayTransferByTable': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGGetDisplayTransferByTable': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGSetDisplayTransferByByteTable': 'uint32_t' defined out of scope
    this.CGDisplayRestoreColorSyncSettings = lib.declare("CGDisplayRestoreColorSyncSettings", ctypes.default_abi, ctypes.void_t);
    this.kCGCaptureNoOptions = 0;
    this.kCGCaptureNoFill = 1;
    // Dropping declaration of 'CGCaptureOptions': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsCaptured': 'boolean_t' defined out of scope
    this.CGDisplayCapture = lib.declare("CGDisplayCapture", ctypes.default_abi, this.CGError, this.CGDirectDisplayID);
    this.CGDisplayCaptureWithOptions = lib.declare("CGDisplayCaptureWithOptions", ctypes.default_abi, this.CGError, this.CGDirectDisplayID, this.CGCaptureOptions);
    this.CGDisplayRelease = lib.declare("CGDisplayRelease", ctypes.default_abi, this.CGError, this.CGDirectDisplayID);
    this.CGCaptureAllDisplays = lib.declare("CGCaptureAllDisplays", ctypes.default_abi, this.CGError);
    this.CGCaptureAllDisplaysWithOptions = lib.declare("CGCaptureAllDisplaysWithOptions", ctypes.default_abi, this.CGError, this.CGCaptureOptions);
    this.CGReleaseAllDisplays = lib.declare("CGReleaseAllDisplays", ctypes.default_abi, this.CGError);
    // Dropping declaration of 'CGShieldingWindowID': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGShieldingWindowLevel': 'int32_t' defined out of scope
    this.CGDisplayCreateImage = lib.declare("CGDisplayCreateImage", ctypes.default_abi, this.CGImageRef, this.CGDirectDisplayID);
    this.CGDisplayCreateImageForRect = lib.declare("CGDisplayCreateImageForRect", ctypes.default_abi, this.CGImageRef, this.CGDirectDisplayID, this.CGRect);
    this.CGDisplayHideCursor = lib.declare("CGDisplayHideCursor", ctypes.default_abi, this.CGError, this.CGDirectDisplayID);
    this.CGDisplayShowCursor = lib.declare("CGDisplayShowCursor", ctypes.default_abi, this.CGError, this.CGDirectDisplayID);
    this.CGDisplayMoveCursorToPoint = lib.declare("CGDisplayMoveCursorToPoint", ctypes.default_abi, this.CGError, this.CGDirectDisplayID, this.CGPoint);
    // Dropping declaration of 'CGGetLastMouseDelta': 'int32_t' defined out of scope
    // Dropping declaration of 'CGDisplayCanSetPalette': 'boolean_t' defined out of scope
    this.CGDisplaySetPalette = lib.declare("CGDisplaySetPalette", ctypes.default_abi, this.CGError, this.CGDirectDisplayID, this.CGDirectPaletteRef);
    // Dropping declaration of 'CGDisplayWaitForBeamPositionOutsideLines': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGDisplayBeamPosition': 'uint32_t' defined out of scope
    this.CGDisplayGetDrawingContext = lib.declare("CGDisplayGetDrawingContext", ctypes.default_abi, this.CGContextRef, this.CGDirectDisplayID);
    // Dropping declaration of 'CGDisplayCount': 'uint32_t' defined out of scope
    this.CGDisplayErr = this.CGError;
    // Dropping declaration of 'CGBeamPosition': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGByteValue': 'uint8_t' defined out of scope
    // Dropping declaration of 'CGDisplayCoord': 'int32_t' defined out of scope
    // Dropping declaration of 'CGMouseDelta': 'int32_t' defined out of scope
    // Dropping declaration of 'CGTableCount': 'uint32_t' defined out of scope
    this.CGDisplayBaseAddress = lib.declare("CGDisplayBaseAddress", ctypes.default_abi, ctypes.void_t.ptr, this.CGDirectDisplayID);
    // Dropping declaration of 'CGDisplayAddressForPosition': 'int32_t' defined out of scope
    // Dropping declaration of 'CGDisplayBytesPerRow': 'size_t' defined out of scope
    this.CGDisplayAvailableModes = lib.declare("CGDisplayAvailableModes", ctypes.default_abi, this.CFArrayRef, this.CGDirectDisplayID);
    // Dropping declaration of 'CGDisplayBestModeForParameters': 'size_t' defined out of scope
    // Dropping declaration of 'CGDisplayBestModeForParametersAndRefreshRate': 'size_t' defined out of scope
    // Dropping declaration of 'CGDisplayBestModeForParametersAndRefreshRateWithProperty': 'size_t' defined out of scope
    this.CGDisplayCurrentMode = lib.declare("CGDisplayCurrentMode", ctypes.default_abi, this.CFDictionaryRef, this.CGDirectDisplayID);
    this.CGDisplaySwitchToMode = lib.declare("CGDisplaySwitchToMode", ctypes.default_abi, this.CGError, this.CGDirectDisplayID, this.CFDictionaryRef);
    // Dropping declaration of 'CGDisplayBitsPerPixel': 'size_t' defined out of scope
    // Dropping declaration of 'CGDisplayBitsPerSample': 'size_t' defined out of scope
    // Dropping declaration of 'CGDisplaySamplesPerPixel': 'size_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDisplayConfiguration.h
function CGDisplayConfiguration_h(lib) {
    CGGeometry_h.call(this, lib);
    CGColorSpace_h.call(this, lib);
    IOTypes_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CGError_h.call(this, lib);
    CGDirectDisplay_h.call(this, lib);

    if (this._CGDISPLAYCONFIGURATION_H)
        return;
    this._CGDISPLAYCONFIGURATION_H = true;

    this._CGDisplayConfigRef = new ctypes.StructType("_CGDisplayConfigRef");
    this.CGDisplayConfigRef = this._CGDisplayConfigRef.ptr;
    this.CGBeginDisplayConfiguration = lib.declare("CGBeginDisplayConfiguration", ctypes.default_abi, this.CGError, this.CGDisplayConfigRef.ptr);
    // Dropping declaration of 'CGConfigureDisplayOrigin': 'int32_t' defined out of scope
    this.CGConfigureDisplayWithDisplayMode = lib.declare("CGConfigureDisplayWithDisplayMode", ctypes.default_abi, this.CGError, this.CGDisplayConfigRef, this.CGDirectDisplayID, this.CGDisplayModeRef, this.CFDictionaryRef);
    // Dropping declaration of 'CGConfigureDisplayStereoOperation': 'boolean_t' defined out of scope
    this.CGConfigureDisplayMirrorOfDisplay = lib.declare("CGConfigureDisplayMirrorOfDisplay", ctypes.default_abi, this.CGError, this.CGDisplayConfigRef, this.CGDirectDisplayID, this.CGDirectDisplayID);
    this.CGCancelDisplayConfiguration = lib.declare("CGCancelDisplayConfiguration", ctypes.default_abi, this.CGError, this.CGDisplayConfigRef);
    this.kCGConfigureForAppOnly = 0;
    this.kCGConfigureForSession = 1;
    this.kCGConfigurePermanently = 2;
    // Dropping declaration of 'CGConfigureOption': 'uint32_t' defined out of scope
    this.CGCompleteDisplayConfiguration = lib.declare("CGCompleteDisplayConfiguration", ctypes.default_abi, this.CGError, this.CGDisplayConfigRef, this.CGConfigureOption);
    this.CGRestorePermanentDisplayConfiguration = lib.declare("CGRestorePermanentDisplayConfiguration", ctypes.default_abi, ctypes.void_t);
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
    this.CGDisplayRegisterReconfigurationCallback = lib.declare("CGDisplayRegisterReconfigurationCallback", ctypes.default_abi, this.CGError, this.CGDisplayReconfigurationCallBack, ctypes.void_t.ptr);
    this.CGDisplayRemoveReconfigurationCallback = lib.declare("CGDisplayRemoveReconfigurationCallback", ctypes.default_abi, this.CGError, this.CGDisplayReconfigurationCallBack, ctypes.void_t.ptr);
    // Dropping declaration of 'CGDisplaySetStereoOperation': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsActive': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsAsleep': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsOnline': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsMain': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsBuiltin': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsInMirrorSet': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsAlwaysInMirrorSet': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsInHWMirrorSet': 'boolean_t' defined out of scope
    this.CGDisplayMirrorsDisplay = lib.declare("CGDisplayMirrorsDisplay", ctypes.default_abi, this.CGDirectDisplayID, this.CGDirectDisplayID);
    // Dropping declaration of 'CGDisplayUsesOpenGLAcceleration': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayIsStereo': 'boolean_t' defined out of scope
    this.CGDisplayPrimaryDisplay = lib.declare("CGDisplayPrimaryDisplay", ctypes.default_abi, this.CGDirectDisplayID, this.CGDirectDisplayID);
    // Dropping declaration of 'CGDisplayUnitNumber': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGDisplayVendorNumber': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGDisplayModelNumber': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGDisplaySerialNumber': 'uint32_t' defined out of scope
    // Disabled due to dependency on IOKit/IOTypes.h
    //this.CGDisplayIOServicePort = lib.declare("CGDisplayIOServicePort", ctypes.default_abi, this.io_service_t, this.CGDirectDisplayID);
    this.CGDisplayScreenSize = lib.declare("CGDisplayScreenSize", ctypes.default_abi, this.CGSize, this.CGDirectDisplayID);
    this.CGDisplayRotation = lib.declare("CGDisplayRotation", ctypes.default_abi, ctypes.double, this.CGDirectDisplayID);
    this.CGDisplayCopyColorSpace = lib.declare("CGDisplayCopyColorSpace", ctypes.default_abi, this.CGColorSpaceRef, this.CGDirectDisplayID);
    this.CGConfigureDisplayMode = lib.declare("CGConfigureDisplayMode", ctypes.default_abi, this.CGError, this.CGDisplayConfigRef, this.CGDirectDisplayID, this.CFDictionaryRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGImage.h
function CGImage_h(lib) {
    CGDataProvider_h.call(this, lib);
    CGColorSpace_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);

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
    this.CGImageGetTypeID = lib.declare("CGImageGetTypeID", ctypes.default_abi, this.CFTypeID);
    // Dropping declaration of 'CGImageCreate': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageMaskCreate': 'size_t' defined out of scope
    this.CGImageCreateCopy = lib.declare("CGImageCreateCopy", ctypes.default_abi, this.CGImageRef, this.CGImageRef);
    // Dropping declaration of 'CGImageCreateWithJPEGDataProvider': Unknown type bool_t
    // Dropping declaration of 'CGImageCreateWithPNGDataProvider': Unknown type bool_t
    this.CGImageCreateWithImageInRect = lib.declare("CGImageCreateWithImageInRect", ctypes.default_abi, this.CGImageRef, this.CGImageRef, this.CGRect);
    this.CGImageCreateWithMask = lib.declare("CGImageCreateWithMask", ctypes.default_abi, this.CGImageRef, this.CGImageRef, this.CGImageRef);
    this.CGImageCreateWithMaskingColors = lib.declare("CGImageCreateWithMaskingColors", ctypes.default_abi, this.CGImageRef, this.CGImageRef, this.CGFloat.ptr);
    this.CGImageCreateCopyWithColorSpace = lib.declare("CGImageCreateCopyWithColorSpace", ctypes.default_abi, this.CGImageRef, this.CGImageRef, this.CGColorSpaceRef);
    this.CGImageRetain = lib.declare("CGImageRetain", ctypes.default_abi, this.CGImageRef, this.CGImageRef);
    this.CGImageRelease = lib.declare("CGImageRelease", ctypes.default_abi, ctypes.void_t, this.CGImageRef);
    // Dropping declaration of 'CGImageIsMask': Unknown type bool_t
    // Dropping declaration of 'CGImageGetWidth': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageGetHeight': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageGetBitsPerComponent': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageGetBitsPerPixel': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageGetBytesPerRow': 'size_t' defined out of scope
    this.CGImageGetColorSpace = lib.declare("CGImageGetColorSpace", ctypes.default_abi, this.CGColorSpaceRef, this.CGImageRef);
    this.CGImageGetAlphaInfo = lib.declare("CGImageGetAlphaInfo", ctypes.default_abi, this.CGImageAlphaInfo, this.CGImageRef);
    this.CGImageGetDataProvider = lib.declare("CGImageGetDataProvider", ctypes.default_abi, this.CGDataProviderRef, this.CGImageRef);
    this.CGImageGetDecode = lib.declare("CGImageGetDecode", ctypes.default_abi, this.CGFloat.ptr, this.CGImageRef);
    // Dropping declaration of 'CGImageGetShouldInterpolate': Unknown type bool_t
    this.CGImageGetRenderingIntent = lib.declare("CGImageGetRenderingIntent", ctypes.default_abi, this.CGColorRenderingIntent, this.CGImageRef);
    this.CGImageGetBitmapInfo = lib.declare("CGImageGetBitmapInfo", ctypes.default_abi, this.CGBitmapInfo, this.CGImageRef);
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
    this.CGPDFObjectGetType = lib.declare("CGPDFObjectGetType", ctypes.default_abi, this.CGPDFObjectType, this.CGPDFObjectRef);
    // Dropping declaration of 'CGPDFObjectGetValue': Unknown type bool_t
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDataProvider.h
function CGDataProvider_h(lib) {
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFData_h.call(this, lib);

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
    this.CGDataProviderGetTypeID = lib.declare("CGDataProviderGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGDataProviderCreateSequential = lib.declare("CGDataProviderCreateSequential", ctypes.default_abi, this.CGDataProviderRef, ctypes.void_t.ptr, this.CGDataProviderSequentialCallbacks.ptr);
    // Dropping declaration of 'CGDataProviderCreateDirect': 'off_t' defined out of scope
    // Dropping declaration of 'CGDataProviderReleaseDataCallback': 'size_t' defined out of scope
    // Dropping declaration of 'CGDataProviderCreateWithData': 'size_t' defined out of scope
    this.CGDataProviderCreateWithCFData = lib.declare("CGDataProviderCreateWithCFData", ctypes.default_abi, this.CGDataProviderRef, this.CFDataRef);
    this.CGDataProviderCreateWithURL = lib.declare("CGDataProviderCreateWithURL", ctypes.default_abi, this.CGDataProviderRef, this.CFURLRef);
    this.CGDataProviderCreateWithFilename = lib.declare("CGDataProviderCreateWithFilename", ctypes.default_abi, this.CGDataProviderRef, ctypes.char.ptr);
    this.CGDataProviderRetain = lib.declare("CGDataProviderRetain", ctypes.default_abi, this.CGDataProviderRef, this.CGDataProviderRef);
    this.CGDataProviderRelease = lib.declare("CGDataProviderRelease", ctypes.default_abi, ctypes.void_t, this.CGDataProviderRef);
    this.CGDataProviderCopyData = lib.declare("CGDataProviderCopyData", ctypes.default_abi, this.CFDataRef, this.CGDataProviderRef);
    // Dropping declaration of 'CGDataProviderSkipBytesCallback': 'size_t' defined out of scope
    this.CGDataProviderCallbacks = new ctypes.StructType("CGDataProviderCallbacks", [{getBytes: this.CGDataProviderGetBytesCallback}, {skipBytes: this.CGDataProviderSkipBytesCallback}, {rewind: this.CGDataProviderRewindCallback}, {releaseProvider: this.CGDataProviderReleaseInfoCallback}]);
    // Dropping declaration of 'CGDataProviderGetBytesAtOffsetCallback': 'size_t' defined out of scope
    this.CGDataProviderDirectAccessCallbacks = new ctypes.StructType("CGDataProviderDirectAccessCallbacks", [{getBytePointer: this.CGDataProviderGetBytePointerCallback}, {releaseBytePointer: this.CGDataProviderReleaseBytePointerCallback}, {getBytes: this.CGDataProviderGetBytesAtOffsetCallback}, {releaseProvider: this.CGDataProviderReleaseInfoCallback}]);
    this.CGDataProviderCreate = lib.declare("CGDataProviderCreate", ctypes.default_abi, this.CGDataProviderRef, ctypes.void_t.ptr, this.CGDataProviderCallbacks.ptr);
    // Dropping declaration of 'CGDataProviderCreateDirectAccess': 'size_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFDocument.h
function CGPDFDocument_h(lib) {
    CGDataProvider_h.call(this, lib);
    CGPDFPage_h.call(this, lib);
    CGPDFDictionary_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CGPDFArray_h.call(this, lib);

    if (this._CGPDFDOCUMENT_H)
        return;
    this._CGPDFDOCUMENT_H = true;

    this.CGPDFDocument = new ctypes.StructType("CGPDFDocument");
    this.CGPDFDocumentRef = this.CGPDFDocument.ptr;
    this.CGPDFDocumentCreateWithProvider = lib.declare("CGPDFDocumentCreateWithProvider", ctypes.default_abi, this.CGPDFDocumentRef, this.CGDataProviderRef);
    this.CGPDFDocumentCreateWithURL = lib.declare("CGPDFDocumentCreateWithURL", ctypes.default_abi, this.CGPDFDocumentRef, this.CFURLRef);
    this.CGPDFDocumentRetain = lib.declare("CGPDFDocumentRetain", ctypes.default_abi, this.CGPDFDocumentRef, this.CGPDFDocumentRef);
    this.CGPDFDocumentRelease = lib.declare("CGPDFDocumentRelease", ctypes.default_abi, ctypes.void_t, this.CGPDFDocumentRef);
    this.CGPDFDocumentGetVersion = lib.declare("CGPDFDocumentGetVersion", ctypes.default_abi, ctypes.void_t, this.CGPDFDocumentRef, ctypes.int.ptr, ctypes.int.ptr);
    // Dropping declaration of 'CGPDFDocumentIsEncrypted': Unknown type bool_t
    // Dropping declaration of 'CGPDFDocumentUnlockWithPassword': Unknown type bool_t
    // Dropping declaration of 'CGPDFDocumentIsUnlocked': Unknown type bool_t
    // Dropping declaration of 'CGPDFDocumentAllowsPrinting': Unknown type bool_t
    // Dropping declaration of 'CGPDFDocumentAllowsCopying': Unknown type bool_t
    // Dropping declaration of 'CGPDFDocumentGetNumberOfPages': 'size_t' defined out of scope
    // Dropping declaration of 'CGPDFDocumentGetPage': 'size_t' defined out of scope
    this.CGPDFDocumentGetCatalog = lib.declare("CGPDFDocumentGetCatalog", ctypes.default_abi, this.CGPDFDictionaryRef, this.CGPDFDocumentRef);
    this.CGPDFDocumentGetInfo = lib.declare("CGPDFDocumentGetInfo", ctypes.default_abi, this.CGPDFDictionaryRef, this.CGPDFDocumentRef);
    this.CGPDFDocumentGetID = lib.declare("CGPDFDocumentGetID", ctypes.default_abi, this.CGPDFArrayRef, this.CGPDFDocumentRef);
    this.CGPDFDocumentGetTypeID = lib.declare("CGPDFDocumentGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGPDFDocumentGetMediaBox = lib.declare("CGPDFDocumentGetMediaBox", ctypes.default_abi, this.CGRect, this.CGPDFDocumentRef, ctypes.int);
    this.CGPDFDocumentGetCropBox = lib.declare("CGPDFDocumentGetCropBox", ctypes.default_abi, this.CGRect, this.CGPDFDocumentRef, ctypes.int);
    this.CGPDFDocumentGetBleedBox = lib.declare("CGPDFDocumentGetBleedBox", ctypes.default_abi, this.CGRect, this.CGPDFDocumentRef, ctypes.int);
    this.CGPDFDocumentGetTrimBox = lib.declare("CGPDFDocumentGetTrimBox", ctypes.default_abi, this.CGRect, this.CGPDFDocumentRef, ctypes.int);
    this.CGPDFDocumentGetArtBox = lib.declare("CGPDFDocumentGetArtBox", ctypes.default_abi, this.CGRect, this.CGPDFDocumentRef, ctypes.int);
    this.CGPDFDocumentGetRotationAngle = lib.declare("CGPDFDocumentGetRotationAngle", ctypes.default_abi, ctypes.int, this.CGPDFDocumentRef, ctypes.int);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGAffineTransform.h
function CGAffineTransform_h(lib) {
    CGBase_h.call(this, lib);
    CGGeometry_h.call(this, lib);

    if (this._CGAFFINETRANSFORM_H)
        return;
    this._CGAFFINETRANSFORM_H = true;

    this.CGAffineTransform = new ctypes.StructType("CGAffineTransform", [{a: this.CGFloat}, {b: this.CGFloat}, {c: this.CGFloat}, {d: this.CGFloat}, {tx: this.CGFloat}, {ty: this.CGFloat}]);
    this.CGAffineTransformIdentity = lib.declare("CGAffineTransformIdentity", this.CGAffineTransform);
    this.CGAffineTransformMake = lib.declare("CGAffineTransformMake", ctypes.default_abi, this.CGAffineTransform, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat, this.CGFloat);
    this.CGAffineTransformMakeTranslation = lib.declare("CGAffineTransformMakeTranslation", ctypes.default_abi, this.CGAffineTransform, this.CGFloat, this.CGFloat);
    this.CGAffineTransformMakeScale = lib.declare("CGAffineTransformMakeScale", ctypes.default_abi, this.CGAffineTransform, this.CGFloat, this.CGFloat);
    this.CGAffineTransformMakeRotation = lib.declare("CGAffineTransformMakeRotation", ctypes.default_abi, this.CGAffineTransform, this.CGFloat);
    // Dropping declaration of 'CGAffineTransformIsIdentity': Unknown type bool_t
    this.CGAffineTransformTranslate = lib.declare("CGAffineTransformTranslate", ctypes.default_abi, this.CGAffineTransform, this.CGAffineTransform, this.CGFloat, this.CGFloat);
    this.CGAffineTransformScale = lib.declare("CGAffineTransformScale", ctypes.default_abi, this.CGAffineTransform, this.CGAffineTransform, this.CGFloat, this.CGFloat);
    this.CGAffineTransformRotate = lib.declare("CGAffineTransformRotate", ctypes.default_abi, this.CGAffineTransform, this.CGAffineTransform, this.CGFloat);
    this.CGAffineTransformInvert = lib.declare("CGAffineTransformInvert", ctypes.default_abi, this.CGAffineTransform, this.CGAffineTransform);
    this.CGAffineTransformConcat = lib.declare("CGAffineTransformConcat", ctypes.default_abi, this.CGAffineTransform, this.CGAffineTransform, this.CGAffineTransform);
    // Dropping declaration of 'CGAffineTransformEqualToTransform': Unknown type bool_t
    this.CGPointApplyAffineTransform = lib.declare("CGPointApplyAffineTransform", ctypes.default_abi, this.CGPoint, this.CGPoint, this.CGAffineTransform);
    this.CGSizeApplyAffineTransform = lib.declare("CGSizeApplyAffineTransform", ctypes.default_abi, this.CGSize, this.CGSize, this.CGAffineTransform);
    this.CGRectApplyAffineTransform = lib.declare("CGRectApplyAffineTransform", ctypes.default_abi, this.CGRect, this.CGRect, this.CGAffineTransform);
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
    // Dropping declaration of 'CGPDFDictionaryGetCount': 'size_t' defined out of scope
    // Dropping declaration of 'CGPDFDictionaryGetObject': Unknown type bool_t
    // Dropping declaration of 'CGPDFDictionaryGetBoolean': Unknown type bool_t
    // Dropping declaration of 'CGPDFDictionaryGetInteger': Unknown type bool_t
    // Dropping declaration of 'CGPDFDictionaryGetNumber': Unknown type bool_t
    // Dropping declaration of 'CGPDFDictionaryGetName': Unknown type bool_t
    // Dropping declaration of 'CGPDFDictionaryGetString': Unknown type bool_t
    // Dropping declaration of 'CGPDFDictionaryGetArray': Unknown type bool_t
    // Dropping declaration of 'CGPDFDictionaryGetDictionary': Unknown type bool_t
    // Dropping declaration of 'CGPDFDictionaryGetStream': Unknown type bool_t
    this.CGPDFDictionaryApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.char.ptr, this.CGPDFObjectRef, ctypes.void_t.ptr]).ptr;
    this.CGPDFDictionaryApplyFunction = lib.declare("CGPDFDictionaryApplyFunction", ctypes.default_abi, ctypes.void_t, this.CGPDFDictionaryRef, this.CGPDFDictionaryApplierFunction, ctypes.void_t.ptr);
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
    CFDictionary_h.call(this, lib);
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
    this.CGPSConverterCreate = lib.declare("CGPSConverterCreate", ctypes.default_abi, this.CGPSConverterRef, ctypes.void_t.ptr, this.CGPSConverterCallbacks.ptr, this.CFDictionaryRef);
    // Dropping declaration of 'CGPSConverterConvert': Unknown type bool_t
    // Dropping declaration of 'CGPSConverterAbort': Unknown type bool_t
    // Dropping declaration of 'CGPSConverterIsConverting': Unknown type bool_t
    this.CGPSConverterGetTypeID = lib.declare("CGPSConverterGetTypeID", ctypes.default_abi, this.CFTypeID);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGGradient.h
function CGGradient_h(lib) {
    CGColorSpace_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    CGBase_h.call(this, lib);

    if (this._CGGRADIENT_H)
        return;
    this._CGGRADIENT_H = true;

    this.CGGradient = new ctypes.StructType("CGGradient");
    this.CGGradientRef = this.CGGradient.ptr;
    this.kCGGradientDrawsBeforeStartLocation = 1;
    this.kCGGradientDrawsAfterEndLocation = 2;
    // Dropping declaration of 'CGGradientDrawingOptions': 'uint32_t' defined out of scope
    this.CGGradientGetTypeID = lib.declare("CGGradientGetTypeID", ctypes.default_abi, this.CFTypeID);
    // Dropping declaration of 'CGGradientCreateWithColorComponents': 'size_t' defined out of scope
    this.CGGradientCreateWithColors = lib.declare("CGGradientCreateWithColors", ctypes.default_abi, this.CGGradientRef, this.CGColorSpaceRef, this.CFArrayRef, this.CGFloat.ptr);
    this.CGGradientRetain = lib.declare("CGGradientRetain", ctypes.default_abi, this.CGGradientRef, this.CGGradientRef);
    this.CGGradientRelease = lib.declare("CGGradientRelease", ctypes.default_abi, ctypes.void_t, this.CGGradientRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGGLContext.h
function CGGLContext_h(lib) {
    CGGeometry_h.call(this, lib);
    CGColorSpace_h.call(this, lib);
    CGContext_h.call(this, lib);

    if (this._CGGLCONTEXT_H)
        return;
    this._CGGLCONTEXT_H = true;

    this.CGGLContextCreate = lib.declare("CGGLContextCreate", ctypes.default_abi, this.CGContextRef, ctypes.void_t.ptr, this.CGSize, this.CGColorSpaceRef);
    this.CGGLContextUpdateViewportSize = lib.declare("CGGLContextUpdateViewportSize", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGSize);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFStream.h
function CGPDFStream_h(lib) {
    CFData_h.call(this, lib);
    CGPDFDictionary_h.call(this, lib);

    if (this._CGPDFSTREAM_H)
        return;
    this._CGPDFSTREAM_H = true;

    this.CGPDFStream = new ctypes.StructType("CGPDFStream");
    this.CGPDFStreamRef = this.CGPDFStream.ptr;
    this.CGPDFDataFormatRaw = 0;
    this.CGPDFDataFormatJPEGEncoded = 1;
    this.CGPDFDataFormatJPEG2000 = 2;
    this.CGPDFStreamGetDictionary = lib.declare("CGPDFStreamGetDictionary", ctypes.default_abi, this.CGPDFDictionaryRef, this.CGPDFStreamRef);
    this.CGPDFStreamCopyData = lib.declare("CGPDFStreamCopyData", ctypes.default_abi, this.CFDataRef, this.CGPDFStreamRef, this.CGPDFDataFormat.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPattern.h
function CGPattern_h(lib) {
    CGAffineTransform_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);

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
    this.CGPatternGetTypeID = lib.declare("CGPatternGetTypeID", ctypes.default_abi, this.CFTypeID);
    // Dropping declaration of 'CGPatternCreate': Unknown type bool_t
    this.CGPatternRetain = lib.declare("CGPatternRetain", ctypes.default_abi, this.CGPatternRef, this.CGPatternRef);
    this.CGPatternRelease = lib.declare("CGPatternRelease", ctypes.default_abi, ctypes.void_t, this.CGPatternRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFPage.h
function CGPDFPage_h(lib) {
    CGGeometry_h.call(this, lib);
    CGPDFDocument_h.call(this, lib);
    CGAffineTransform_h.call(this, lib);
    CGPDFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);

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
    this.CGPDFPageRetain = lib.declare("CGPDFPageRetain", ctypes.default_abi, this.CGPDFPageRef, this.CGPDFPageRef);
    this.CGPDFPageRelease = lib.declare("CGPDFPageRelease", ctypes.default_abi, ctypes.void_t, this.CGPDFPageRef);
    this.CGPDFPageGetDocument = lib.declare("CGPDFPageGetDocument", ctypes.default_abi, this.CGPDFDocumentRef, this.CGPDFPageRef);
    // Dropping declaration of 'CGPDFPageGetPageNumber': 'size_t' defined out of scope
    this.CGPDFPageGetBoxRect = lib.declare("CGPDFPageGetBoxRect", ctypes.default_abi, this.CGRect, this.CGPDFPageRef, this.CGPDFBox);
    this.CGPDFPageGetRotationAngle = lib.declare("CGPDFPageGetRotationAngle", ctypes.default_abi, ctypes.int, this.CGPDFPageRef);
    // Dropping declaration of 'CGPDFPageGetDrawingTransform': Unknown type bool_t
    this.CGPDFPageGetDictionary = lib.declare("CGPDFPageGetDictionary", ctypes.default_abi, this.CGPDFDictionaryRef, this.CGPDFPageRef);
    this.CGPDFPageGetTypeID = lib.declare("CGPDFPageGetTypeID", ctypes.default_abi, this.CFTypeID);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDisplayFade.h
function CGDisplayFade_h(lib) {
    CGDisplayConfiguration_h.call(this, lib);
    CGError_h.call(this, lib);

    if (this._CGDISPLAYFADE_H)
        return;
    this._CGDISPLAYFADE_H = true;

    // Dropping declaration of 'CGDisplayFadeReservationToken': 'uint32_t' defined out of scope
    this.CGDisplayBlendFraction = ctypes.float;
    this.CGDisplayFadeInterval = ctypes.float;
    this.CGConfigureDisplayFadeEffect = lib.declare("CGConfigureDisplayFadeEffect", ctypes.default_abi, this.CGError, this.CGDisplayConfigRef, this.CGDisplayFadeInterval, this.CGDisplayFadeInterval, ctypes.float, ctypes.float, ctypes.float);
    this.CGDisplayReservationInterval = ctypes.float;
    this.CGAcquireDisplayFadeReservation = lib.declare("CGAcquireDisplayFadeReservation", ctypes.default_abi, this.CGError, this.CGDisplayReservationInterval, this.CGDisplayFadeReservationToken.ptr);
    this.CGReleaseDisplayFadeReservation = lib.declare("CGReleaseDisplayFadeReservation", ctypes.default_abi, this.CGError, this.CGDisplayFadeReservationToken);
    // Dropping declaration of 'CGDisplayFade': 'boolean_t' defined out of scope
    // Dropping declaration of 'CGDisplayFadeOperationInProgress': 'boolean_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGDataConsumer.h
function CGDataConsumer_h(lib) {
    CFData_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFURL_h.call(this, lib);

    if (this._CGDATACONSUMER_H)
        return;
    this._CGDATACONSUMER_H = true;

    this.CGDataConsumer = new ctypes.StructType("CGDataConsumer");
    this.CGDataConsumerRef = this.CGDataConsumer.ptr;
    // Dropping declaration of 'CGDataConsumerPutBytesCallback': 'size_t' defined out of scope
    this.CGDataConsumerReleaseInfoCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CGDataConsumerCallbacks = new ctypes.StructType("CGDataConsumerCallbacks", [{putBytes: this.CGDataConsumerPutBytesCallback}, {releaseConsumer: this.CGDataConsumerReleaseInfoCallback}]);
    this.CGDataConsumerGetTypeID = lib.declare("CGDataConsumerGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGDataConsumerCreate = lib.declare("CGDataConsumerCreate", ctypes.default_abi, this.CGDataConsumerRef, ctypes.void_t.ptr, this.CGDataConsumerCallbacks.ptr);
    this.CGDataConsumerCreateWithURL = lib.declare("CGDataConsumerCreateWithURL", ctypes.default_abi, this.CGDataConsumerRef, this.CFURLRef);
    this.CGDataConsumerCreateWithCFData = lib.declare("CGDataConsumerCreateWithCFData", ctypes.default_abi, this.CGDataConsumerRef, this.CFMutableDataRef);
    this.CGDataConsumerRetain = lib.declare("CGDataConsumerRetain", ctypes.default_abi, this.CGDataConsumerRef, this.CGDataConsumerRef);
    this.CGDataConsumerRelease = lib.declare("CGDataConsumerRelease", ctypes.default_abi, ctypes.void_t, this.CGDataConsumerRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGLayer.h
function CGLayer_h(lib) {
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._CGLAYER_H)
        return;
    this._CGLAYER_H = true;

    this.CGLayer = new ctypes.StructType("CGLayer");
    this.CGLayerRef = this.CGLayer.ptr;
    this.CGLayerCreateWithContext = lib.declare("CGLayerCreateWithContext", ctypes.default_abi, this.CGLayerRef, this.CGContextRef, this.CGSize, this.CFDictionaryRef);
    this.CGLayerRetain = lib.declare("CGLayerRetain", ctypes.default_abi, this.CGLayerRef, this.CGLayerRef);
    this.CGLayerRelease = lib.declare("CGLayerRelease", ctypes.default_abi, ctypes.void_t, this.CGLayerRef);
    this.CGLayerGetSize = lib.declare("CGLayerGetSize", ctypes.default_abi, this.CGSize, this.CGLayerRef);
    this.CGLayerGetContext = lib.declare("CGLayerGetContext", ctypes.default_abi, this.CGContextRef, this.CGLayerRef);
    this.CGContextDrawLayerInRect = lib.declare("CGContextDrawLayerInRect", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGRect, this.CGLayerRef);
    this.CGContextDrawLayerAtPoint = lib.declare("CGContextDrawLayerAtPoint", ctypes.default_abi, ctypes.void_t, this.CGContextRef, this.CGPoint, this.CGLayerRef);
    this.CGLayerGetTypeID = lib.declare("CGLayerGetTypeID", ctypes.default_abi, this.CFTypeID);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGEventSource.h
function CGEventSource_h(lib) {
    CGEventTypes_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFDate_h.call(this, lib);
    CGRemoteOperation_h.call(this, lib);

    if (this._CGEVENTSOURCE_H)
        return;
    this._CGEVENTSOURCE_H = true;

    this.CGEventSourceGetTypeID = lib.declare("CGEventSourceGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGEventSourceCreate = lib.declare("CGEventSourceCreate", ctypes.default_abi, this.CGEventSourceRef, this.CGEventSourceStateID);
    this.CGEventSourceGetKeyboardType = lib.declare("CGEventSourceGetKeyboardType", ctypes.default_abi, this.CGEventSourceKeyboardType, this.CGEventSourceRef);
    this.CGEventSourceSetKeyboardType = lib.declare("CGEventSourceSetKeyboardType", ctypes.default_abi, ctypes.void_t, this.CGEventSourceRef, this.CGEventSourceKeyboardType);
    this.CGEventSourceGetPixelsPerLine = lib.declare("CGEventSourceGetPixelsPerLine", ctypes.default_abi, ctypes.double, this.CGEventSourceRef);
    this.CGEventSourceSetPixelsPerLine = lib.declare("CGEventSourceSetPixelsPerLine", ctypes.default_abi, ctypes.void_t, this.CGEventSourceRef, ctypes.double);
    this.CGEventSourceGetSourceStateID = lib.declare("CGEventSourceGetSourceStateID", ctypes.default_abi, this.CGEventSourceStateID, this.CGEventSourceRef);
    // Dropping declaration of 'CGEventSourceButtonState': Unknown type bool_t
    // Dropping declaration of 'CGEventSourceKeyState': Unknown type bool_t
    this.CGEventSourceFlagsState = lib.declare("CGEventSourceFlagsState", ctypes.default_abi, this.CGEventFlags, this.CGEventSourceStateID);
    this.CGEventSourceSecondsSinceLastEventType = lib.declare("CGEventSourceSecondsSinceLastEventType", ctypes.default_abi, this.CFTimeInterval, this.CGEventSourceStateID, this.CGEventType);
    // Dropping declaration of 'CGEventSourceCounterForEventType': 'uint32_t' defined out of scope
    // Dropping declaration of 'CGEventSourceSetUserData': 'int64_t' defined out of scope
    // Dropping declaration of 'CGEventSourceGetUserData': 'int64_t' defined out of scope
    this.CGEventSourceSetLocalEventsFilterDuringSuppressionState = lib.declare("CGEventSourceSetLocalEventsFilterDuringSuppressionState", ctypes.default_abi, ctypes.void_t, this.CGEventSourceRef, this.CGEventFilterMask, this.CGEventSuppressionState);
    this.CGEventSourceGetLocalEventsFilterDuringSuppressionState = lib.declare("CGEventSourceGetLocalEventsFilterDuringSuppressionState", ctypes.default_abi, this.CGEventFilterMask, this.CGEventSourceRef, this.CGEventSuppressionState);
    this.CGEventSourceSetLocalEventsSuppressionInterval = lib.declare("CGEventSourceSetLocalEventsSuppressionInterval", ctypes.default_abi, ctypes.void_t, this.CGEventSourceRef, this.CFTimeInterval);
    this.CGEventSourceGetLocalEventsSuppressionInterval = lib.declare("CGEventSourceGetLocalEventsSuppressionInterval", ctypes.default_abi, this.CFTimeInterval, this.CGEventSourceRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFScanner.h
function CGPDFScanner_h(lib) {
    CGPDFOperatorTable_h.call(this, lib);
    CGPDFContentStream_h.call(this, lib);

    if (this._CGPDFSCANNER_H)
        return;
    this._CGPDFSCANNER_H = true;

    this.CGPDFScanner = new ctypes.StructType("CGPDFScanner");
    this.CGPDFScannerRef = this.CGPDFScanner.ptr;
    this.CGPDFScannerCreate = lib.declare("CGPDFScannerCreate", ctypes.default_abi, this.CGPDFScannerRef, this.CGPDFContentStreamRef, this.CGPDFOperatorTableRef, ctypes.void_t.ptr);
    this.CGPDFScannerRetain = lib.declare("CGPDFScannerRetain", ctypes.default_abi, this.CGPDFScannerRef, this.CGPDFScannerRef);
    this.CGPDFScannerRelease = lib.declare("CGPDFScannerRelease", ctypes.default_abi, ctypes.void_t, this.CGPDFScannerRef);
    // Dropping declaration of 'CGPDFScannerScan': Unknown type bool_t
    this.CGPDFScannerGetContentStream = lib.declare("CGPDFScannerGetContentStream", ctypes.default_abi, this.CGPDFContentStreamRef, this.CGPDFScannerRef);
    // Dropping declaration of 'CGPDFScannerPopObject': Unknown type bool_t
    // Dropping declaration of 'CGPDFScannerPopBoolean': Unknown type bool_t
    // Dropping declaration of 'CGPDFScannerPopInteger': Unknown type bool_t
    // Dropping declaration of 'CGPDFScannerPopNumber': Unknown type bool_t
    // Dropping declaration of 'CGPDFScannerPopName': Unknown type bool_t
    // Dropping declaration of 'CGPDFScannerPopString': Unknown type bool_t
    // Dropping declaration of 'CGPDFScannerPopArray': Unknown type bool_t
    // Dropping declaration of 'CGPDFScannerPopDictionary': Unknown type bool_t
    // Dropping declaration of 'CGPDFScannerPopStream': Unknown type bool_t
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/Headers/CGPDFString.h
function CGPDFString_h(lib) {
    CFBase_h.call(this, lib);
    CFDate_h.call(this, lib);

    if (this._CGPDFSTRING_H)
        return;
    this._CGPDFSTRING_H = true;

    this.CGPDFString = new ctypes.StructType("CGPDFString");
    this.CGPDFStringRef = this.CGPDFString.ptr;
    // Dropping declaration of 'CGPDFStringGetLength': 'size_t' defined out of scope
    this.CGPDFStringGetBytePtr = lib.declare("CGPDFStringGetBytePtr", ctypes.default_abi, ctypes.unsigned_char.ptr, this.CGPDFStringRef);
    this.CGPDFStringCopyTextString = lib.declare("CGPDFStringCopyTextString", ctypes.default_abi, this.CFStringRef, this.CGPDFStringRef);
    this.CGPDFStringCopyDate = lib.declare("CGPDFStringCopyDate", ctypes.default_abi, this.CFDateRef, this.CGPDFStringRef);
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
    CFDictionary_h.call(this, lib);

    if (this._CGSESSION_H)
        return;
    this._CGSESSION_H = true;

    this.CGSessionCopyCurrentDictionary = lib.declare("CGSessionCopyCurrentDictionary", ctypes.default_abi, this.CFDictionaryRef);
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
    this.CGWindowLevelForKey = lib.declare("CGWindowLevelForKey", ctypes.default_abi, this.CGWindowLevel, this.CGWindowLevelKey);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["CoreGraphics", "CGDirectPalette_h", "CGShading_h", "CGContext_h", "CGFont_h", "CGPath_h", "CGEvent_h", "CGRemoteOperation_h", "CGColor_h", "CGPDFOperatorTable_h", "CGGeometry_h", "CGPDFContentStream_h", "CGPDFContext_h", "CGWindow_h", "CGColorSpace_h", "CGFunction_h", "CGPDFArray_h", "CGBitmapContext_h", "CGDirectDisplay_h", "CGDisplayConfiguration_h", "CGImage_h", "CGPDFObject_h", "CGDataProvider_h", "CGPDFDocument_h", "CGAffineTransform_h", "CGPDFDictionary_h", "CGEventTypes_h", "CGPSConverter_h", "CGGradient_h", "CGGLContext_h", "CGPDFStream_h", "CGPattern_h", "CGPDFPage_h", "CGDisplayFade_h", "CGDataConsumer_h", "CGLayer_h", "CGEventSource_h", "CGPDFScanner_h", "CGPDFString_h", "CGBase_h", "CGError_h", "CGSession_h", "CGWindowLevel_h"];

function CoreGraphics() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreGraphics.framework/CoreGraphics";
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
