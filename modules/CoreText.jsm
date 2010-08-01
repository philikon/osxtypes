// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFramesetter.h
function CTFramesetter_h(lib) {
    CGPath_h.call(this, lib);
    CFAttributedString_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CTTypesetter_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CTFrame_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._CTFRAMESETTER_H)
        return;
    this._CTFRAMESETTER_H = true;

    this.__CTFramesetter = new ctypes.StructType("__CTFramesetter");
    this.CTFramesetterRef = this.__CTFramesetter.ptr;
    this.CTFramesetterGetTypeID = lib.declare("CTFramesetterGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CTFramesetterCreateWithAttributedString = lib.declare("CTFramesetterCreateWithAttributedString", ctypes.default_abi, this.CTFramesetterRef, this.CFAttributedStringRef);
    this.CTFramesetterCreateFrame = lib.declare("CTFramesetterCreateFrame", ctypes.default_abi, this.CTFrameRef, this.CTFramesetterRef, this.CFRange, this.CGPathRef, this.CFDictionaryRef);
    this.CTFramesetterGetTypesetter = lib.declare("CTFramesetterGetTypesetter", ctypes.default_abi, this.CTTypesetterRef, this.CTFramesetterRef);
    this.CTFramesetterSuggestFrameSizeWithConstraints = lib.declare("CTFramesetterSuggestFrameSizeWithConstraints", ctypes.default_abi, this.CGSize, this.CTFramesetterRef, this.CFRange, this.CFDictionaryRef, this.CGSize, this.CFRange.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTLine.h
function CTLine_h(lib) {
    CFAttributedString_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CTLINE_H)
        return;
    this._CTLINE_H = true;

    this.__CTLine = new ctypes.StructType("__CTLine");
    this.CTLineRef = this.__CTLine.ptr;
    this.kCTLineTruncationStart = 0;
    this.kCTLineTruncationEnd = 1;
    this.kCTLineTruncationMiddle = 2;
    // Dropping declaration of 'CTLineTruncationType': 'uint32_t' defined out of scope
    this.CTLineGetTypeID = lib.declare("CTLineGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CTLineCreateWithAttributedString = lib.declare("CTLineCreateWithAttributedString", ctypes.default_abi, this.CTLineRef, this.CFAttributedStringRef);
    this.CTLineCreateTruncatedLine = lib.declare("CTLineCreateTruncatedLine", ctypes.default_abi, this.CTLineRef, this.CTLineRef, ctypes.double, this.CTLineTruncationType, this.CTLineRef);
    this.CTLineCreateJustifiedLine = lib.declare("CTLineCreateJustifiedLine", ctypes.default_abi, this.CTLineRef, this.CTLineRef, this.CGFloat, ctypes.double);
    this.CTLineGetGlyphCount = lib.declare("CTLineGetGlyphCount", ctypes.default_abi, this.CFIndex, this.CTLineRef);
    this.CTLineGetGlyphRuns = lib.declare("CTLineGetGlyphRuns", ctypes.default_abi, this.CFArrayRef, this.CTLineRef);
    this.CTLineGetStringRange = lib.declare("CTLineGetStringRange", ctypes.default_abi, this.CFRange, this.CTLineRef);
    this.CTLineGetPenOffsetForFlush = lib.declare("CTLineGetPenOffsetForFlush", ctypes.default_abi, ctypes.double, this.CTLineRef, this.CGFloat, ctypes.double);
    this.CTLineDraw = lib.declare("CTLineDraw", ctypes.default_abi, ctypes.void_t, this.CTLineRef, this.CGContextRef);
    this.CTLineGetImageBounds = lib.declare("CTLineGetImageBounds", ctypes.default_abi, this.CGRect, this.CTLineRef, this.CGContextRef);
    this.CTLineGetTypographicBounds = lib.declare("CTLineGetTypographicBounds", ctypes.default_abi, ctypes.double, this.CTLineRef, this.CGFloat.ptr, this.CGFloat.ptr, this.CGFloat.ptr);
    this.CTLineGetTrailingWhitespaceWidth = lib.declare("CTLineGetTrailingWhitespaceWidth", ctypes.default_abi, ctypes.double, this.CTLineRef);
    this.CTLineGetStringIndexForPosition = lib.declare("CTLineGetStringIndexForPosition", ctypes.default_abi, this.CFIndex, this.CTLineRef, this.CGPoint);
    this.CTLineGetOffsetForStringIndex = lib.declare("CTLineGetOffsetForStringIndex", ctypes.default_abi, this.CGFloat, this.CTLineRef, this.CFIndex, this.CGFloat.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFont.h
function CTFont_h(lib) {
    CFData_h.call(this, lib);
    CGPath_h.call(this, lib);
    CGAffineTransform_h.call(this, lib);
    CFCharacterSet_h.call(this, lib);
    CTFontTraits_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    ATSTypes_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CGFont_h.call(this, lib);
    CFString_h.call(this, lib);
    CTFontDescriptor_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CTFONT_H)
        return;
    this._CTFONT_H = true;

    this.__CTFont = new ctypes.StructType("__CTFont");
    this.CTFontRef = this.__CTFont.ptr;
    this.CTFontGetTypeID = lib.declare("CTFontGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCTFontCopyrightNameKey = lib.declare("kCTFontCopyrightNameKey", this.CFStringRef);
    this.kCTFontFamilyNameKey = lib.declare("kCTFontFamilyNameKey", this.CFStringRef);
    this.kCTFontSubFamilyNameKey = lib.declare("kCTFontSubFamilyNameKey", this.CFStringRef);
    this.kCTFontStyleNameKey = lib.declare("kCTFontStyleNameKey", this.CFStringRef);
    this.kCTFontUniqueNameKey = lib.declare("kCTFontUniqueNameKey", this.CFStringRef);
    this.kCTFontFullNameKey = lib.declare("kCTFontFullNameKey", this.CFStringRef);
    this.kCTFontVersionNameKey = lib.declare("kCTFontVersionNameKey", this.CFStringRef);
    this.kCTFontPostScriptNameKey = lib.declare("kCTFontPostScriptNameKey", this.CFStringRef);
    this.kCTFontTrademarkNameKey = lib.declare("kCTFontTrademarkNameKey", this.CFStringRef);
    this.kCTFontManufacturerNameKey = lib.declare("kCTFontManufacturerNameKey", this.CFStringRef);
    this.kCTFontDesignerNameKey = lib.declare("kCTFontDesignerNameKey", this.CFStringRef);
    this.kCTFontDescriptionNameKey = lib.declare("kCTFontDescriptionNameKey", this.CFStringRef);
    this.kCTFontVendorURLNameKey = lib.declare("kCTFontVendorURLNameKey", this.CFStringRef);
    this.kCTFontDesignerURLNameKey = lib.declare("kCTFontDesignerURLNameKey", this.CFStringRef);
    this.kCTFontLicenseNameKey = lib.declare("kCTFontLicenseNameKey", this.CFStringRef);
    this.kCTFontLicenseURLNameKey = lib.declare("kCTFontLicenseURLNameKey", this.CFStringRef);
    this.kCTFontSampleTextNameKey = lib.declare("kCTFontSampleTextNameKey", this.CFStringRef);
    this.kCTFontPostScriptCIDNameKey = lib.declare("kCTFontPostScriptCIDNameKey", this.CFStringRef);
    this.CTFontCreateWithName = lib.declare("CTFontCreateWithName", ctypes.default_abi, this.CTFontRef, this.CFStringRef, this.CGFloat, this.CGAffineTransform.ptr);
    this.CTFontCreateWithFontDescriptor = lib.declare("CTFontCreateWithFontDescriptor", ctypes.default_abi, this.CTFontRef, this.CTFontDescriptorRef, this.CGFloat, this.CGAffineTransform.ptr);
    this.kCTFontOptionsDefault = 0;
    this.kCTFontOptionsPreventAutoActivation = 1;
    this.kCTFontOptionsPreferSystemFont = 4;
    this.CTFontOptions = this.CFOptionFlags;
    this.CTFontCreateWithNameAndOptions = lib.declare("CTFontCreateWithNameAndOptions", ctypes.default_abi, this.CTFontRef, this.CFStringRef, this.CGFloat, this.CGAffineTransform.ptr, this.CTFontOptions);
    this.CTFontCreateWithFontDescriptorAndOptions = lib.declare("CTFontCreateWithFontDescriptorAndOptions", ctypes.default_abi, this.CTFontRef, this.CTFontDescriptorRef, this.CGFloat, this.CGAffineTransform.ptr, this.CTFontOptions);
    this.kCTFontNoFontType = -1;
    this.kCTFontUserFontType = 0;
    this.kCTFontUserFixedPitchFontType = 1;
    this.kCTFontSystemFontType = 2;
    this.kCTFontEmphasizedSystemFontType = 3;
    this.kCTFontSmallSystemFontType = 4;
    this.kCTFontSmallEmphasizedSystemFontType = 5;
    this.kCTFontMiniSystemFontType = 6;
    this.kCTFontMiniEmphasizedSystemFontType = 7;
    this.kCTFontViewsFontType = 8;
    this.kCTFontApplicationFontType = 9;
    this.kCTFontLabelFontType = 10;
    this.kCTFontMenuTitleFontType = 11;
    this.kCTFontMenuItemFontType = 12;
    this.kCTFontMenuItemMarkFontType = 13;
    this.kCTFontMenuItemCmdKeyFontType = 14;
    this.kCTFontWindowTitleFontType = 15;
    this.kCTFontPushButtonFontType = 16;
    this.kCTFontUtilityWindowTitleFontType = 17;
    this.kCTFontAlertHeaderFontType = 18;
    this.kCTFontSystemDetailFontType = 19;
    this.kCTFontEmphasizedSystemDetailFontType = 20;
    this.kCTFontToolbarFontType = 21;
    this.kCTFontSmallToolbarFontType = 22;
    this.kCTFontMessageFontType = 23;
    this.kCTFontPaletteFontType = 24;
    this.kCTFontToolTipFontType = 25;
    this.kCTFontControlContentFontType = 26;
    // Dropping declaration of 'CTFontUIFontType': 'uint32_t' defined out of scope
    this.CTFontCreateUIFontForLanguage = lib.declare("CTFontCreateUIFontForLanguage", ctypes.default_abi, this.CTFontRef, this.CTFontUIFontType, this.CGFloat, this.CFStringRef);
    this.CTFontCreateCopyWithAttributes = lib.declare("CTFontCreateCopyWithAttributes", ctypes.default_abi, this.CTFontRef, this.CTFontRef, this.CGFloat, this.CGAffineTransform.ptr, this.CTFontDescriptorRef);
    this.CTFontCreateCopyWithSymbolicTraits = lib.declare("CTFontCreateCopyWithSymbolicTraits", ctypes.default_abi, this.CTFontRef, this.CTFontRef, this.CGFloat, this.CGAffineTransform.ptr, this.CTFontSymbolicTraits, this.CTFontSymbolicTraits);
    this.CTFontCreateCopyWithFamily = lib.declare("CTFontCreateCopyWithFamily", ctypes.default_abi, this.CTFontRef, this.CTFontRef, this.CGFloat, this.CGAffineTransform.ptr, this.CFStringRef);
    this.CTFontCreateForString = lib.declare("CTFontCreateForString", ctypes.default_abi, this.CTFontRef, this.CTFontRef, this.CFStringRef, this.CFRange);
    this.CTFontCopyFontDescriptor = lib.declare("CTFontCopyFontDescriptor", ctypes.default_abi, this.CTFontDescriptorRef, this.CTFontRef);
    this.CTFontCopyAttribute = lib.declare("CTFontCopyAttribute", ctypes.default_abi, this.CFTypeRef, this.CTFontRef, this.CFStringRef);
    this.CTFontGetSize = lib.declare("CTFontGetSize", ctypes.default_abi, this.CGFloat, this.CTFontRef);
    this.CTFontGetMatrix = lib.declare("CTFontGetMatrix", ctypes.default_abi, this.CGAffineTransform, this.CTFontRef);
    this.CTFontGetSymbolicTraits = lib.declare("CTFontGetSymbolicTraits", ctypes.default_abi, this.CTFontSymbolicTraits, this.CTFontRef);
    this.CTFontCopyTraits = lib.declare("CTFontCopyTraits", ctypes.default_abi, this.CFDictionaryRef, this.CTFontRef);
    this.CTFontCopyPostScriptName = lib.declare("CTFontCopyPostScriptName", ctypes.default_abi, this.CFStringRef, this.CTFontRef);
    this.CTFontCopyFamilyName = lib.declare("CTFontCopyFamilyName", ctypes.default_abi, this.CFStringRef, this.CTFontRef);
    this.CTFontCopyFullName = lib.declare("CTFontCopyFullName", ctypes.default_abi, this.CFStringRef, this.CTFontRef);
    this.CTFontCopyDisplayName = lib.declare("CTFontCopyDisplayName", ctypes.default_abi, this.CFStringRef, this.CTFontRef);
    this.CTFontCopyName = lib.declare("CTFontCopyName", ctypes.default_abi, this.CFStringRef, this.CTFontRef, this.CFStringRef);
    this.CTFontCopyLocalizedName = lib.declare("CTFontCopyLocalizedName", ctypes.default_abi, this.CFStringRef, this.CTFontRef, this.CFStringRef, this.CFStringRef.ptr);
    this.CTFontCopyCharacterSet = lib.declare("CTFontCopyCharacterSet", ctypes.default_abi, this.CFCharacterSetRef, this.CTFontRef);
    this.CTFontGetStringEncoding = lib.declare("CTFontGetStringEncoding", ctypes.default_abi, this.CFStringEncoding, this.CTFontRef);
    this.CTFontCopySupportedLanguages = lib.declare("CTFontCopySupportedLanguages", ctypes.default_abi, this.CFArrayRef, this.CTFontRef);
    // Dropping declaration of 'CTFontGetGlyphsForCharacters': Unknown type bool_t
    this.CTFontGetAscent = lib.declare("CTFontGetAscent", ctypes.default_abi, this.CGFloat, this.CTFontRef);
    this.CTFontGetDescent = lib.declare("CTFontGetDescent", ctypes.default_abi, this.CGFloat, this.CTFontRef);
    this.CTFontGetLeading = lib.declare("CTFontGetLeading", ctypes.default_abi, this.CGFloat, this.CTFontRef);
    this.CTFontGetUnitsPerEm = lib.declare("CTFontGetUnitsPerEm", ctypes.default_abi, ctypes.unsigned_int, this.CTFontRef);
    this.CTFontGetGlyphCount = lib.declare("CTFontGetGlyphCount", ctypes.default_abi, this.CFIndex, this.CTFontRef);
    this.CTFontGetBoundingBox = lib.declare("CTFontGetBoundingBox", ctypes.default_abi, this.CGRect, this.CTFontRef);
    this.CTFontGetUnderlinePosition = lib.declare("CTFontGetUnderlinePosition", ctypes.default_abi, this.CGFloat, this.CTFontRef);
    this.CTFontGetUnderlineThickness = lib.declare("CTFontGetUnderlineThickness", ctypes.default_abi, this.CGFloat, this.CTFontRef);
    this.CTFontGetSlantAngle = lib.declare("CTFontGetSlantAngle", ctypes.default_abi, this.CGFloat, this.CTFontRef);
    this.CTFontGetCapHeight = lib.declare("CTFontGetCapHeight", ctypes.default_abi, this.CGFloat, this.CTFontRef);
    this.CTFontGetXHeight = lib.declare("CTFontGetXHeight", ctypes.default_abi, this.CGFloat, this.CTFontRef);
    this.CTFontGetGlyphWithName = lib.declare("CTFontGetGlyphWithName", ctypes.default_abi, this.CGGlyph, this.CTFontRef, this.CFStringRef);
    this.CTFontGetBoundingRectsForGlyphs = lib.declare("CTFontGetBoundingRectsForGlyphs", ctypes.default_abi, this.CGRect, this.CTFontRef, this.CTFontOrientation, this.CGGlyph.ptr, this.CGRect.ptr, this.CFIndex);
    this.CTFontGetAdvancesForGlyphs = lib.declare("CTFontGetAdvancesForGlyphs", ctypes.default_abi, ctypes.double, this.CTFontRef, this.CTFontOrientation, this.CGGlyph.ptr, this.CGSize.ptr, this.CFIndex);
    this.CTFontGetVerticalTranslationsForGlyphs = lib.declare("CTFontGetVerticalTranslationsForGlyphs", ctypes.default_abi, ctypes.void_t, this.CTFontRef, this.CGGlyph.ptr, this.CGSize.ptr, this.CFIndex);
    this.CTFontCreatePathForGlyph = lib.declare("CTFontCreatePathForGlyph", ctypes.default_abi, this.CGPathRef, this.CTFontRef, this.CGGlyph, this.CGAffineTransform.ptr);
    this.kCTFontVariationAxisIdentifierKey = lib.declare("kCTFontVariationAxisIdentifierKey", this.CFStringRef);
    this.kCTFontVariationAxisMinimumValueKey = lib.declare("kCTFontVariationAxisMinimumValueKey", this.CFStringRef);
    this.kCTFontVariationAxisMaximumValueKey = lib.declare("kCTFontVariationAxisMaximumValueKey", this.CFStringRef);
    this.kCTFontVariationAxisDefaultValueKey = lib.declare("kCTFontVariationAxisDefaultValueKey", this.CFStringRef);
    this.kCTFontVariationAxisNameKey = lib.declare("kCTFontVariationAxisNameKey", this.CFStringRef);
    this.CTFontCopyVariationAxes = lib.declare("CTFontCopyVariationAxes", ctypes.default_abi, this.CFArrayRef, this.CTFontRef);
    this.CTFontCopyVariation = lib.declare("CTFontCopyVariation", ctypes.default_abi, this.CFDictionaryRef, this.CTFontRef);
    this.kCTFontFeatureTypeIdentifierKey = lib.declare("kCTFontFeatureTypeIdentifierKey", this.CFStringRef);
    this.kCTFontFeatureTypeNameKey = lib.declare("kCTFontFeatureTypeNameKey", this.CFStringRef);
    this.kCTFontFeatureTypeExclusiveKey = lib.declare("kCTFontFeatureTypeExclusiveKey", this.CFStringRef);
    this.kCTFontFeatureTypeSelectorsKey = lib.declare("kCTFontFeatureTypeSelectorsKey", this.CFStringRef);
    this.kCTFontFeatureSelectorIdentifierKey = lib.declare("kCTFontFeatureSelectorIdentifierKey", this.CFStringRef);
    this.kCTFontFeatureSelectorNameKey = lib.declare("kCTFontFeatureSelectorNameKey", this.CFStringRef);
    this.kCTFontFeatureSelectorDefaultKey = lib.declare("kCTFontFeatureSelectorDefaultKey", this.CFStringRef);
    this.kCTFontFeatureSelectorSettingKey = lib.declare("kCTFontFeatureSelectorSettingKey", this.CFStringRef);
    this.CTFontCopyFeatures = lib.declare("CTFontCopyFeatures", ctypes.default_abi, this.CFArrayRef, this.CTFontRef);
    this.CTFontCopyFeatureSettings = lib.declare("CTFontCopyFeatureSettings", ctypes.default_abi, this.CFArrayRef, this.CTFontRef);
    this.CTFontCopyGraphicsFont = lib.declare("CTFontCopyGraphicsFont", ctypes.default_abi, this.CGFontRef, this.CTFontRef, this.CTFontDescriptorRef.ptr);
    this.CTFontCreateWithGraphicsFont = lib.declare("CTFontCreateWithGraphicsFont", ctypes.default_abi, this.CTFontRef, this.CGFontRef, this.CGFloat, this.CGAffineTransform.ptr, this.CTFontDescriptorRef);
    this.CTFontGetPlatformFont = lib.declare("CTFontGetPlatformFont", ctypes.default_abi, this.ATSFontRef, this.CTFontRef, this.CTFontDescriptorRef.ptr);
    this.CTFontCreateWithPlatformFont = lib.declare("CTFontCreateWithPlatformFont", ctypes.default_abi, this.CTFontRef, this.ATSFontRef, this.CGFloat, this.CGAffineTransform.ptr, this.CTFontDescriptorRef);
    // Dropping declaration of 'CTFontCreateWithQuickdrawInstance': 'int16_t' defined out of scope
    this.kCTFontTableBASE = 1111577413;
    this.kCTFontTableCFF = 1128678944;
    this.kCTFontTableDSIG = 1146308935;
    this.kCTFontTableEBDT = 1161970772;
    this.kCTFontTableEBLC = 1161972803;
    this.kCTFontTableEBSC = 1161974595;
    this.kCTFontTableGDEF = 1195656518;
    this.kCTFontTableGPOS = 1196445523;
    this.kCTFontTableGSUB = 1196643650;
    this.kCTFontTableJSTF = 1246975046;
    this.kCTFontTableLTSH = 1280594760;
    this.kCTFontTableOS2 = 1330851634;
    this.kCTFontTablePCLT = 1346587732;
    this.kCTFontTableVDMX = 1447316824;
    this.kCTFontTableVORG = 1448038983;
    this.kCTFontTableZapf = 1516335206;
    this.kCTFontTableAcnt = 1633906292;
    this.kCTFontTableAvar = 1635148146;
    this.kCTFontTableBdat = 1650745716;
    this.kCTFontTableBhed = 1651008868;
    this.kCTFontTableBloc = 1651273571;
    this.kCTFontTableBsln = 1651731566;
    this.kCTFontTableCmap = 1668112752;
    this.kCTFontTableCvar = 1668702578;
    this.kCTFontTableCvt = 1668707360;
    this.kCTFontTableFdsc = 1717859171;
    this.kCTFontTableFeat = 1717920116;
    this.kCTFontTableFmtx = 1718449272;
    this.kCTFontTableFpgm = 1718642541;
    this.kCTFontTableFvar = 1719034226;
    this.kCTFontTableGasp = 1734439792;
    this.kCTFontTableGlyf = 1735162214;
    this.kCTFontTableGvar = 1735811442;
    this.kCTFontTableHdmx = 1751412088;
    this.kCTFontTableHead = 1751474532;
    this.kCTFontTableHhea = 1751672161;
    this.kCTFontTableHmtx = 1752003704;
    this.kCTFontTableHsty = 1752396921;
    this.kCTFontTableJust = 1786082164;
    this.kCTFontTableKern = 1801810542;
    this.kCTFontTableLcar = 1818452338;
    this.kCTFontTableLoca = 1819239265;
    this.kCTFontTableMaxp = 1835104368;
    this.kCTFontTableMort = 1836020340;
    this.kCTFontTableMorx = 1836020344;
    this.kCTFontTableName = 1851878757;
    this.kCTFontTableOpbd = 1869636196;
    this.kCTFontTablePost = 1886352244;
    this.kCTFontTablePrep = 1886545264;
    this.kCTFontTableProp = 1886547824;
    this.kCTFontTableTrak = 1953653099;
    this.kCTFontTableVhea = 1986553185;
    this.kCTFontTableVmtx = 1986884728;
    // Dropping declaration of 'CTFontTableTag': 'uint32_t' defined out of scope
    this.kCTFontTableOptionNoOptions = 0;
    this.kCTFontTableOptionExcludeSynthetic = 1;
    // Dropping declaration of 'CTFontTableOptions': 'uint32_t' defined out of scope
    this.CTFontCopyAvailableTables = lib.declare("CTFontCopyAvailableTables", ctypes.default_abi, this.CFArrayRef, this.CTFontRef, this.CTFontTableOptions);
    this.CTFontCopyTable = lib.declare("CTFontCopyTable", ctypes.default_abi, this.CFDataRef, this.CTFontRef, this.CTFontTableTag, this.CTFontTableOptions);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTTypesetter.h
function CTTypesetter_h(lib) {
    CFAttributedString_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CTLine_h.call(this, lib);

    if (this._CTTYPESETTER_H)
        return;
    this._CTTYPESETTER_H = true;

    this.__CTTypesetter = new ctypes.StructType("__CTTypesetter");
    this.CTTypesetterRef = this.__CTTypesetter.ptr;
    this.CTTypesetterGetTypeID = lib.declare("CTTypesetterGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCTTypesetterOptionDisableBidiProcessing = lib.declare("kCTTypesetterOptionDisableBidiProcessing", this.CFStringRef);
    this.kCTTypesetterOptionForcedEmbeddingLevel = lib.declare("kCTTypesetterOptionForcedEmbeddingLevel", this.CFStringRef);
    this.CTTypesetterCreateWithAttributedString = lib.declare("CTTypesetterCreateWithAttributedString", ctypes.default_abi, this.CTTypesetterRef, this.CFAttributedStringRef);
    this.CTTypesetterCreateWithAttributedStringAndOptions = lib.declare("CTTypesetterCreateWithAttributedStringAndOptions", ctypes.default_abi, this.CTTypesetterRef, this.CFAttributedStringRef, this.CFDictionaryRef);
    this.CTTypesetterCreateLine = lib.declare("CTTypesetterCreateLine", ctypes.default_abi, this.CTLineRef, this.CTTypesetterRef, this.CFRange);
    this.CTTypesetterSuggestLineBreak = lib.declare("CTTypesetterSuggestLineBreak", ctypes.default_abi, this.CFIndex, this.CTTypesetterRef, this.CFIndex, ctypes.double);
    this.CTTypesetterSuggestClusterBreak = lib.declare("CTTypesetterSuggestClusterBreak", ctypes.default_abi, this.CFIndex, this.CTTypesetterRef, this.CFIndex, ctypes.double);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFontManagerErrors.h
function CTFontManagerErrors_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CTFONTMANAGERERRORS_H)
        return;
    this._CTFONTMANAGERERRORS_H = true;

    this.kCTFontManagerErrorDomain = lib.declare("kCTFontManagerErrorDomain", this.CFStringRef);
    this.kCTFontManagerErrorFontURLsKey = lib.declare("kCTFontManagerErrorFontURLsKey", this.CFStringRef);
    this.kCTFontManagerErrorFileNotFound = 101;
    this.kCTFontManagerErrorInsufficientPermissions = 102;
    this.kCTFontManagerErrorUnrecognizedFormat = 103;
    this.kCTFontManagerErrorInvalidFontData = 104;
    this.kCTFontManagerErrorAlreadyRegistered = 105;
    this.kCTFontManagerErrorNotRegistered = 201;
    this.kCTFontManagerErrorInUse = 202;
    this.kCTFontManagerErrorSystemRequired = 202;
    this.CTFontManagerError = this.CFIndex;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTRun.h
function CTRun_h(lib) {
    CGAffineTransform_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CGFont_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._CTRUN_H)
        return;
    this._CTRUN_H = true;

    this.__CTRun = new ctypes.StructType("__CTRun");
    this.CTRunRef = this.__CTRun.ptr;
    this.kCTRunStatusNoStatus = 0;
    this.kCTRunStatusRightToLeft = 1;
    this.kCTRunStatusNonMonotonic = 2;
    this.kCTRunStatusHasNonIdentityMatrix = 4;
    // Dropping declaration of 'CTRunStatus': 'uint32_t' defined out of scope
    this.CTRunGetTypeID = lib.declare("CTRunGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CTRunGetGlyphCount = lib.declare("CTRunGetGlyphCount", ctypes.default_abi, this.CFIndex, this.CTRunRef);
    this.CTRunGetAttributes = lib.declare("CTRunGetAttributes", ctypes.default_abi, this.CFDictionaryRef, this.CTRunRef);
    this.CTRunGetStatus = lib.declare("CTRunGetStatus", ctypes.default_abi, this.CTRunStatus, this.CTRunRef);
    this.CTRunGetGlyphsPtr = lib.declare("CTRunGetGlyphsPtr", ctypes.default_abi, this.CGGlyph.ptr, this.CTRunRef);
    this.CTRunGetGlyphs = lib.declare("CTRunGetGlyphs", ctypes.default_abi, ctypes.void_t, this.CTRunRef, this.CFRange, this.CGGlyph.ptr);
    this.CTRunGetPositionsPtr = lib.declare("CTRunGetPositionsPtr", ctypes.default_abi, this.CGPoint.ptr, this.CTRunRef);
    this.CTRunGetPositions = lib.declare("CTRunGetPositions", ctypes.default_abi, ctypes.void_t, this.CTRunRef, this.CFRange, this.CGPoint.ptr);
    this.CTRunGetAdvancesPtr = lib.declare("CTRunGetAdvancesPtr", ctypes.default_abi, this.CGSize.ptr, this.CTRunRef);
    this.CTRunGetAdvances = lib.declare("CTRunGetAdvances", ctypes.default_abi, ctypes.void_t, this.CTRunRef, this.CFRange, this.CGSize.ptr);
    this.CTRunGetStringIndicesPtr = lib.declare("CTRunGetStringIndicesPtr", ctypes.default_abi, this.CFIndex.ptr, this.CTRunRef);
    this.CTRunGetStringIndices = lib.declare("CTRunGetStringIndices", ctypes.default_abi, ctypes.void_t, this.CTRunRef, this.CFRange, this.CFIndex.ptr);
    this.CTRunGetStringRange = lib.declare("CTRunGetStringRange", ctypes.default_abi, this.CFRange, this.CTRunRef);
    this.CTRunGetTypographicBounds = lib.declare("CTRunGetTypographicBounds", ctypes.default_abi, ctypes.double, this.CTRunRef, this.CFRange, this.CGFloat.ptr, this.CGFloat.ptr, this.CGFloat.ptr);
    this.CTRunGetImageBounds = lib.declare("CTRunGetImageBounds", ctypes.default_abi, this.CGRect, this.CTRunRef, this.CGContextRef, this.CFRange);
    this.CTRunGetTextMatrix = lib.declare("CTRunGetTextMatrix", ctypes.default_abi, this.CGAffineTransform, this.CTRunRef);
    this.CTRunDraw = lib.declare("CTRunDraw", ctypes.default_abi, ctypes.void_t, this.CTRunRef, this.CGContextRef, this.CFRange);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFontCollection.h
function CTFontCollection_h(lib) {
    CTFontDescriptor_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CTFONTCOLLECTION_H)
        return;
    this._CTFONTCOLLECTION_H = true;

    this.__CTFontCollection = new ctypes.StructType("__CTFontCollection");
    this.CTFontCollectionRef = this.__CTFontCollection.ptr;
    this.CTFontCollectionGetTypeID = lib.declare("CTFontCollectionGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CTFontCollectionSortDescriptorsCallback = new ctypes.FunctionType(ctypes.default_abi, this.CFComparisonResult, [this.CTFontDescriptorRef, this.CTFontDescriptorRef, ctypes.void_t.ptr]).ptr;
    this.kCTFontCollectionRemoveDuplicatesOption = lib.declare("kCTFontCollectionRemoveDuplicatesOption", this.CFStringRef);
    this.CTFontCollectionCreateFromAvailableFonts = lib.declare("CTFontCollectionCreateFromAvailableFonts", ctypes.default_abi, this.CTFontCollectionRef, this.CFDictionaryRef);
    this.CTFontCollectionCreateWithFontDescriptors = lib.declare("CTFontCollectionCreateWithFontDescriptors", ctypes.default_abi, this.CTFontCollectionRef, this.CFArrayRef, this.CFDictionaryRef);
    this.CTFontCollectionCreateCopyWithFontDescriptors = lib.declare("CTFontCollectionCreateCopyWithFontDescriptors", ctypes.default_abi, this.CTFontCollectionRef, this.CTFontCollectionRef, this.CFArrayRef, this.CFDictionaryRef);
    this.CTFontCollectionCreateMatchingFontDescriptors = lib.declare("CTFontCollectionCreateMatchingFontDescriptors", ctypes.default_abi, this.CFArrayRef, this.CTFontCollectionRef);
    this.CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback = lib.declare("CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback", ctypes.default_abi, this.CFArrayRef, this.CTFontCollectionRef, this.CTFontCollectionSortDescriptorsCallback, ctypes.void_t.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFontDescriptor.h
function CTFontDescriptor_h(lib) {
    CFDictionary_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFSet_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    CFNumber_h.call(this, lib);

    if (this._CTFONTDESCRIPTOR_H)
        return;
    this._CTFONTDESCRIPTOR_H = true;

    this.__CTFontDescriptor = new ctypes.StructType("__CTFontDescriptor");
    this.CTFontDescriptorRef = this.__CTFontDescriptor.ptr;
    this.CTFontDescriptorGetTypeID = lib.declare("CTFontDescriptorGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCTFontURLAttribute = lib.declare("kCTFontURLAttribute", this.CFStringRef);
    this.kCTFontNameAttribute = lib.declare("kCTFontNameAttribute", this.CFStringRef);
    this.kCTFontDisplayNameAttribute = lib.declare("kCTFontDisplayNameAttribute", this.CFStringRef);
    this.kCTFontFamilyNameAttribute = lib.declare("kCTFontFamilyNameAttribute", this.CFStringRef);
    this.kCTFontStyleNameAttribute = lib.declare("kCTFontStyleNameAttribute", this.CFStringRef);
    this.kCTFontTraitsAttribute = lib.declare("kCTFontTraitsAttribute", this.CFStringRef);
    this.kCTFontVariationAttribute = lib.declare("kCTFontVariationAttribute", this.CFStringRef);
    this.kCTFontSizeAttribute = lib.declare("kCTFontSizeAttribute", this.CFStringRef);
    this.kCTFontMatrixAttribute = lib.declare("kCTFontMatrixAttribute", this.CFStringRef);
    this.kCTFontCascadeListAttribute = lib.declare("kCTFontCascadeListAttribute", this.CFStringRef);
    this.kCTFontCharacterSetAttribute = lib.declare("kCTFontCharacterSetAttribute", this.CFStringRef);
    this.kCTFontLanguagesAttribute = lib.declare("kCTFontLanguagesAttribute", this.CFStringRef);
    this.kCTFontBaselineAdjustAttribute = lib.declare("kCTFontBaselineAdjustAttribute", this.CFStringRef);
    this.kCTFontMacintoshEncodingsAttribute = lib.declare("kCTFontMacintoshEncodingsAttribute", this.CFStringRef);
    this.kCTFontFeaturesAttribute = lib.declare("kCTFontFeaturesAttribute", this.CFStringRef);
    this.kCTFontFeatureSettingsAttribute = lib.declare("kCTFontFeatureSettingsAttribute", this.CFStringRef);
    this.kCTFontFixedAdvanceAttribute = lib.declare("kCTFontFixedAdvanceAttribute", this.CFStringRef);
    this.kCTFontOrientationAttribute = lib.declare("kCTFontOrientationAttribute", this.CFStringRef);
    this.kCTFontDefaultOrientation = 0;
    this.kCTFontHorizontalOrientation = 1;
    this.kCTFontVerticalOrientation = 2;
    // Dropping declaration of 'CTFontOrientation': 'uint32_t' defined out of scope
    this.kCTFontFormatAttribute = lib.declare("kCTFontFormatAttribute", this.CFStringRef);
    this.kCTFontFormatUnrecognized = 0;
    this.kCTFontFormatOpenTypePostScript = 1;
    this.kCTFontFormatOpenTypeTrueType = 2;
    this.kCTFontFormatTrueType = 3;
    this.kCTFontFormatPostScript = 4;
    this.kCTFontFormatBitmap = 5;
    // Dropping declaration of 'CTFontFormat': 'uint32_t' defined out of scope
    this.kCTFontRegistrationScopeAttribute = lib.declare("kCTFontRegistrationScopeAttribute", this.CFStringRef);
    this.kCTFontPriorityAttribute = lib.declare("kCTFontPriorityAttribute", this.CFStringRef);
    this.kCTFontPrioritySystem = 10000;
    this.kCTFontPriorityNetwork = 20000;
    this.kCTFontPriorityComputer = 30000;
    this.kCTFontPriorityUser = 40000;
    this.kCTFontPriorityDynamic = 50000;
    this.kCTFontPriorityProcess = 60000;
    // Dropping declaration of 'CTFontPriority': 'uint32_t' defined out of scope
    this.kCTFontEnabledAttribute = lib.declare("kCTFontEnabledAttribute", this.CFStringRef);
    this.CTFontDescriptorCreateWithNameAndSize = lib.declare("CTFontDescriptorCreateWithNameAndSize", ctypes.default_abi, this.CTFontDescriptorRef, this.CFStringRef, this.CGFloat);
    this.CTFontDescriptorCreateWithAttributes = lib.declare("CTFontDescriptorCreateWithAttributes", ctypes.default_abi, this.CTFontDescriptorRef, this.CFDictionaryRef);
    this.CTFontDescriptorCreateCopyWithAttributes = lib.declare("CTFontDescriptorCreateCopyWithAttributes", ctypes.default_abi, this.CTFontDescriptorRef, this.CTFontDescriptorRef, this.CFDictionaryRef);
    this.CTFontDescriptorCreateCopyWithVariation = lib.declare("CTFontDescriptorCreateCopyWithVariation", ctypes.default_abi, this.CTFontDescriptorRef, this.CTFontDescriptorRef, this.CFNumberRef, this.CGFloat);
    this.CTFontDescriptorCreateCopyWithFeature = lib.declare("CTFontDescriptorCreateCopyWithFeature", ctypes.default_abi, this.CTFontDescriptorRef, this.CTFontDescriptorRef, this.CFNumberRef, this.CFNumberRef);
    this.CTFontDescriptorCreateMatchingFontDescriptors = lib.declare("CTFontDescriptorCreateMatchingFontDescriptors", ctypes.default_abi, this.CFArrayRef, this.CTFontDescriptorRef, this.CFSetRef);
    this.CTFontDescriptorCreateMatchingFontDescriptor = lib.declare("CTFontDescriptorCreateMatchingFontDescriptor", ctypes.default_abi, this.CTFontDescriptorRef, this.CTFontDescriptorRef, this.CFSetRef);
    this.CTFontDescriptorCopyAttributes = lib.declare("CTFontDescriptorCopyAttributes", ctypes.default_abi, this.CFDictionaryRef, this.CTFontDescriptorRef);
    this.CTFontDescriptorCopyAttribute = lib.declare("CTFontDescriptorCopyAttribute", ctypes.default_abi, this.CFTypeRef, this.CTFontDescriptorRef, this.CFStringRef);
    this.CTFontDescriptorCopyLocalizedAttribute = lib.declare("CTFontDescriptorCopyLocalizedAttribute", ctypes.default_abi, this.CFTypeRef, this.CTFontDescriptorRef, this.CFStringRef, this.CFStringRef.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTTextTab.h
function CTTextTab_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CTParagraphStyle_h.call(this, lib);

    if (this._CTTEXTTAB_H)
        return;
    this._CTTEXTTAB_H = true;

    this.__CTTextTab = new ctypes.StructType("__CTTextTab");
    this.CTTextTabRef = this.__CTTextTab.ptr;
    this.CTTextTabGetTypeID = lib.declare("CTTextTabGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCTTabColumnTerminatorsAttributeName = lib.declare("kCTTabColumnTerminatorsAttributeName", this.CFStringRef);
    this.CTTextTabCreate = lib.declare("CTTextTabCreate", ctypes.default_abi, this.CTTextTabRef, this.CTTextAlignment, ctypes.double, this.CFDictionaryRef);
    this.CTTextTabGetAlignment = lib.declare("CTTextTabGetAlignment", ctypes.default_abi, this.CTTextAlignment, this.CTTextTabRef);
    this.CTTextTabGetLocation = lib.declare("CTTextTabGetLocation", ctypes.default_abi, ctypes.double, this.CTTextTabRef);
    this.CTTextTabGetOptions = lib.declare("CTTextTabGetOptions", ctypes.default_abi, this.CFDictionaryRef, this.CTTextTabRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFontManager.h
function CTFontManager_h(lib) {
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    CFURL_h.call(this, lib);

    if (this._CTFONTMANAGER_H)
        return;
    this._CTFONTMANAGER_H = true;

    this.CTFontManagerCopyAvailablePostScriptNames = lib.declare("CTFontManagerCopyAvailablePostScriptNames", ctypes.default_abi, this.CFArrayRef);
    this.CTFontManagerCopyAvailableFontFamilyNames = lib.declare("CTFontManagerCopyAvailableFontFamilyNames", ctypes.default_abi, this.CFArrayRef);
    this.CTFontManagerCopyAvailableFontURLs = lib.declare("CTFontManagerCopyAvailableFontURLs", ctypes.default_abi, this.CFArrayRef);
    this.CTFontManagerCompareFontFamilyNames = lib.declare("CTFontManagerCompareFontFamilyNames", ctypes.default_abi, this.CFComparisonResult, ctypes.void_t.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr);
    this.CTFontManagerCreateFontDescriptorsFromURL = lib.declare("CTFontManagerCreateFontDescriptorsFromURL", ctypes.default_abi, this.CFArrayRef, this.CFURLRef);
    this.kCTFontManagerScopeNone = 0;
    this.kCTFontManagerScopeProcess = 1;
    this.kCTFontManagerScopeUser = 2;
    this.kCTFontManagerScopeSession = 3;
    // Dropping declaration of 'CTFontManagerScope': 'uint32_t' defined out of scope
    // Dropping declaration of 'CTFontManagerRegisterFontsForURL': Unknown type bool_t
    // Dropping declaration of 'CTFontManagerUnregisterFontsForURL': Unknown type bool_t
    // Dropping declaration of 'CTFontManagerRegisterFontsForURLs': Unknown type bool_t
    // Dropping declaration of 'CTFontManagerUnregisterFontsForURLs': Unknown type bool_t
    // Dropping declaration of 'CTFontManagerEnableFontDescriptors': Unknown type bool_t
    this.CTFontManagerGetScopeForURL = lib.declare("CTFontManagerGetScopeForURL", ctypes.default_abi, this.CTFontManagerScope, this.CFURLRef);
    // Dropping declaration of 'CTFontManagerIsSupportedFont': Unknown type bool_t
    this.kCTFontManagerBundleIdentifier = lib.declare("kCTFontManagerBundleIdentifier", this.CFStringRef);
    this.kCTFontManagerAutoActivationDefault = 0;
    this.kCTFontManagerAutoActivationDisabled = 1;
    this.kCTFontManagerAutoActivationEnabled = 2;
    this.kCTFontManagerAutoActivationPromptUser = 3;
    // Dropping declaration of 'CTFontManagerAutoActivationSetting': 'uint32_t' defined out of scope
    this.CTFontManagerSetAutoActivationSetting = lib.declare("CTFontManagerSetAutoActivationSetting", ctypes.default_abi, ctypes.void_t, this.CFStringRef, this.CTFontManagerAutoActivationSetting);
    this.CTFontManagerGetAutoActivationSetting = lib.declare("CTFontManagerGetAutoActivationSetting", ctypes.default_abi, this.CTFontManagerAutoActivationSetting, this.CFStringRef);
    this.kCTFontManagerRegisteredFontsChangedNotification = lib.declare("kCTFontManagerRegisteredFontsChangedNotification", this.CFStringRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTGlyphInfo.h
function CTGlyphInfo_h(lib) {
    CTFont_h.call(this, lib);
    CFBase_h.call(this, lib);
    CGFont_h.call(this, lib);

    if (this._CTGLYPHINFO_H)
        return;
    this._CTGLYPHINFO_H = true;

    this.__CTGlyphInfo = new ctypes.StructType("__CTGlyphInfo");
    this.CTGlyphInfoRef = this.__CTGlyphInfo.ptr;
    this.CTGlyphInfoGetTypeID = lib.declare("CTGlyphInfoGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCTIdentityMappingCharacterCollection = 0;
    this.kCTAdobeCNS1CharacterCollection = 1;
    this.kCTAdobeGB1CharacterCollection = 2;
    this.kCTAdobeJapan1CharacterCollection = 3;
    this.kCTAdobeJapan2CharacterCollection = 4;
    this.kCTAdobeKorea1CharacterCollection = 5;
    // Dropping declaration of 'CTCharacterCollection': 'uint16_t' defined out of scope
    this.CTGlyphInfoCreateWithGlyphName = lib.declare("CTGlyphInfoCreateWithGlyphName", ctypes.default_abi, this.CTGlyphInfoRef, this.CFStringRef, this.CTFontRef, this.CFStringRef);
    this.CTGlyphInfoCreateWithGlyph = lib.declare("CTGlyphInfoCreateWithGlyph", ctypes.default_abi, this.CTGlyphInfoRef, this.CGGlyph, this.CTFontRef, this.CFStringRef);
    this.CTGlyphInfoCreateWithCharacterIdentifier = lib.declare("CTGlyphInfoCreateWithCharacterIdentifier", ctypes.default_abi, this.CTGlyphInfoRef, this.CGFontIndex, this.CTCharacterCollection, this.CFStringRef);
    this.CTGlyphInfoGetGlyphName = lib.declare("CTGlyphInfoGetGlyphName", ctypes.default_abi, this.CFStringRef, this.CTGlyphInfoRef);
    this.CTGlyphInfoGetCharacterIdentifier = lib.declare("CTGlyphInfoGetCharacterIdentifier", ctypes.default_abi, this.CGFontIndex, this.CTGlyphInfoRef);
    this.CTGlyphInfoGetCharacterCollection = lib.declare("CTGlyphInfoGetCharacterCollection", ctypes.default_abi, this.CTCharacterCollection, this.CTGlyphInfoRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTParagraphStyle.h
function CTParagraphStyle_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CTPARAGRAPHSTYLE_H)
        return;
    this._CTPARAGRAPHSTYLE_H = true;

    this.__CTParagraphStyle = new ctypes.StructType("__CTParagraphStyle");
    this.CTParagraphStyleRef = this.__CTParagraphStyle.ptr;
    this.CTParagraphStyleGetTypeID = lib.declare("CTParagraphStyleGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCTLeftTextAlignment = 0;
    this.kCTRightTextAlignment = 1;
    this.kCTCenterTextAlignment = 2;
    this.kCTJustifiedTextAlignment = 3;
    this.kCTNaturalTextAlignment = 4;
    // Dropping declaration of 'CTTextAlignment': 'uint8_t' defined out of scope
    this.kCTLineBreakByWordWrapping = 0;
    this.kCTLineBreakByCharWrapping = 1;
    this.kCTLineBreakByClipping = 2;
    this.kCTLineBreakByTruncatingHead = 3;
    this.kCTLineBreakByTruncatingTail = 4;
    this.kCTLineBreakByTruncatingMiddle = 5;
    // Dropping declaration of 'CTLineBreakMode': 'uint8_t' defined out of scope
    this.kCTWritingDirectionNatural = -1;
    this.kCTWritingDirectionLeftToRight = 0;
    this.kCTWritingDirectionRightToLeft = 1;
    // Dropping declaration of 'CTWritingDirection': 'int8_t' defined out of scope
    this.kCTParagraphStyleSpecifierAlignment = 0;
    this.kCTParagraphStyleSpecifierFirstLineHeadIndent = 1;
    this.kCTParagraphStyleSpecifierHeadIndent = 2;
    this.kCTParagraphStyleSpecifierTailIndent = 3;
    this.kCTParagraphStyleSpecifierTabStops = 4;
    this.kCTParagraphStyleSpecifierDefaultTabInterval = 5;
    this.kCTParagraphStyleSpecifierLineBreakMode = 6;
    this.kCTParagraphStyleSpecifierLineHeightMultiple = 7;
    this.kCTParagraphStyleSpecifierMaximumLineHeight = 8;
    this.kCTParagraphStyleSpecifierMinimumLineHeight = 9;
    this.kCTParagraphStyleSpecifierLineSpacing = 10;
    this.kCTParagraphStyleSpecifierParagraphSpacing = 11;
    this.kCTParagraphStyleSpecifierParagraphSpacingBefore = 12;
    this.kCTParagraphStyleSpecifierBaseWritingDirection = 13;
    this.kCTParagraphStyleSpecifierCount = 14;
    // Dropping declaration of 'CTParagraphStyleSpecifier': 'uint32_t' defined out of scope
    this.CTParagraphStyleSetting = new ctypes.StructType("CTParagraphStyleSetting", []);
    this.CTParagraphStyleCreate = lib.declare("CTParagraphStyleCreate", ctypes.default_abi, this.CTParagraphStyleRef, this.CTParagraphStyleSetting.ptr, this.CFIndex);
    this.CTParagraphStyleCreateCopy = lib.declare("CTParagraphStyleCreateCopy", ctypes.default_abi, this.CTParagraphStyleRef, this.CTParagraphStyleRef);
    // Dropping declaration of 'CTParagraphStyleGetValueForSpecifier': Unknown type bool_t
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTStringAttributes.h
function CTStringAttributes_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CTSTRINGATTRIBUTES_H)
        return;
    this._CTSTRINGATTRIBUTES_H = true;

    this.kCTFontAttributeName = lib.declare("kCTFontAttributeName", this.CFStringRef);
    this.kCTForegroundColorFromContextAttributeName = lib.declare("kCTForegroundColorFromContextAttributeName", this.CFStringRef);
    this.kCTKernAttributeName = lib.declare("kCTKernAttributeName", this.CFStringRef);
    this.kCTLigatureAttributeName = lib.declare("kCTLigatureAttributeName", this.CFStringRef);
    this.kCTForegroundColorAttributeName = lib.declare("kCTForegroundColorAttributeName", this.CFStringRef);
    this.kCTParagraphStyleAttributeName = lib.declare("kCTParagraphStyleAttributeName", this.CFStringRef);
    this.kCTStrokeWidthAttributeName = lib.declare("kCTStrokeWidthAttributeName", this.CFStringRef);
    this.kCTStrokeColorAttributeName = lib.declare("kCTStrokeColorAttributeName", this.CFStringRef);
    this.kCTUnderlineStyleAttributeName = lib.declare("kCTUnderlineStyleAttributeName", this.CFStringRef);
    this.kCTSuperscriptAttributeName = lib.declare("kCTSuperscriptAttributeName", this.CFStringRef);
    this.kCTUnderlineColorAttributeName = lib.declare("kCTUnderlineColorAttributeName", this.CFStringRef);
    this.kCTVerticalFormsAttributeName = lib.declare("kCTVerticalFormsAttributeName", this.CFStringRef);
    this.kCTGlyphInfoAttributeName = lib.declare("kCTGlyphInfoAttributeName", this.CFStringRef);
    this.kCTCharacterShapeAttributeName = lib.declare("kCTCharacterShapeAttributeName", this.CFStringRef);
    this.kCTUnderlineStyleNone = 0;
    this.kCTUnderlineStyleSingle = 1;
    this.kCTUnderlineStyleThick = 2;
    this.kCTUnderlineStyleDouble = 9;
    // Dropping declaration of 'CTUnderlineStyle': 'int32_t' defined out of scope
    this.kCTUnderlinePatternSolid = 0;
    this.kCTUnderlinePatternDot = 256;
    this.kCTUnderlinePatternDash = 512;
    this.kCTUnderlinePatternDashDot = 768;
    this.kCTUnderlinePatternDashDotDot = 1024;
    // Dropping declaration of 'CTUnderlineStyleModifiers': 'int32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFontTraits.h
function CTFontTraits_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CTFONTTRAITS_H)
        return;
    this._CTFONTTRAITS_H = true;

    this.kCTFontSymbolicTrait = lib.declare("kCTFontSymbolicTrait", this.CFStringRef);
    this.kCTFontWeightTrait = lib.declare("kCTFontWeightTrait", this.CFStringRef);
    this.kCTFontWidthTrait = lib.declare("kCTFontWidthTrait", this.CFStringRef);
    this.kCTFontSlantTrait = lib.declare("kCTFontSlantTrait", this.CFStringRef);
    this.kCTFontClassMaskShift = 28;
    this.kCTFontItalicTrait = 1;
    this.kCTFontBoldTrait = 2;
    this.kCTFontExpandedTrait = 32;
    this.kCTFontCondensedTrait = 64;
    this.kCTFontMonoSpaceTrait = 1024;
    this.kCTFontVerticalTrait = 2048;
    this.kCTFontUIOptimizedTrait = 4096;
    this.kCTFontClassMaskTrait = -268435456;
    // Dropping declaration of 'CTFontSymbolicTraits': 'uint32_t' defined out of scope
    this.kCTFontUnknownClass = 0;
    this.kCTFontOldStyleSerifsClass = 268435456;
    this.kCTFontTransitionalSerifsClass = 536870912;
    this.kCTFontModernSerifsClass = 805306368;
    this.kCTFontClarendonSerifsClass = 1073741824;
    this.kCTFontSlabSerifsClass = 1342177280;
    this.kCTFontFreeformSerifsClass = 1879048192;
    this.kCTFontSansSerifClass = -2147483648;
    this.kCTFontOrnamentalsClass = -1879048192;
    this.kCTFontScriptsClass = -1610612736;
    this.kCTFontSymbolicClass = -1073741824;
    // Dropping declaration of 'CTFontStylisticClass': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFrame.h
function CTFrame_h(lib) {
    CGPath_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CTFRAME_H)
        return;
    this._CTFRAME_H = true;

    this.__CTFrame = new ctypes.StructType("__CTFrame");
    this.CTFrameRef = this.__CTFrame.ptr;
    this.CTFrameGetTypeID = lib.declare("CTFrameGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCTFrameProgressionTopToBottom = 0;
    this.kCTFrameProgressionRightToLeft = 1;
    // Dropping declaration of 'CTFrameProgression': 'uint32_t' defined out of scope
    this.kCTFrameProgressionAttributeName = lib.declare("kCTFrameProgressionAttributeName", this.CFStringRef);
    this.CTFrameGetStringRange = lib.declare("CTFrameGetStringRange", ctypes.default_abi, this.CFRange, this.CTFrameRef);
    this.CTFrameGetVisibleStringRange = lib.declare("CTFrameGetVisibleStringRange", ctypes.default_abi, this.CFRange, this.CTFrameRef);
    this.CTFrameGetPath = lib.declare("CTFrameGetPath", ctypes.default_abi, this.CGPathRef, this.CTFrameRef);
    this.CTFrameGetFrameAttributes = lib.declare("CTFrameGetFrameAttributes", ctypes.default_abi, this.CFDictionaryRef, this.CTFrameRef);
    this.CTFrameGetLines = lib.declare("CTFrameGetLines", ctypes.default_abi, this.CFArrayRef, this.CTFrameRef);
    this.CTFrameGetLineOrigins = lib.declare("CTFrameGetLineOrigins", ctypes.default_abi, ctypes.void_t, this.CTFrameRef, this.CFRange, this.CGPoint.ptr);
    this.CTFrameDraw = lib.declare("CTFrameDraw", ctypes.default_abi, ctypes.void_t, this.CTFrameRef, this.CGContextRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CoreText.h
function CoreText_h(lib) {

    if (this._CORETEXT_H)
        return;
    this._CORETEXT_H = true;

    // Dropping declaration of 'CTGetCoreTextVersion': 'uint32_t' defined out of scope
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/CoreGraphics.jsm");
Components.utils.import("resource://osxtypes/ATS.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["CoreText", "CTFramesetter_h", "CTLine_h", "CTFont_h", "CTTypesetter_h", "CTFontManagerErrors_h", "CTRun_h", "CTFontCollection_h", "CTFontDescriptor_h", "CTTextTab_h", "CTFontManager_h", "CTGlyphInfo_h", "CTParagraphStyle_h", "CTStringAttributes_h", "CTFontTraits_h", "CTFrame_h", "CoreText_h"];

function CoreText() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/CoreText";
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

    CTFramesetter_h.call(this, lib);
    CTLine_h.call(this, lib);
    CTFont_h.call(this, lib);
    CTTypesetter_h.call(this, lib);
    CTFontManagerErrors_h.call(this, lib);
    CTRun_h.call(this, lib);
    CTFontCollection_h.call(this, lib);
    CTFontDescriptor_h.call(this, lib);
    CTTextTab_h.call(this, lib);
    CTFontManager_h.call(this, lib);
    CTGlyphInfo_h.call(this, lib);
    CTParagraphStyle_h.call(this, lib);
    CTStringAttributes_h.call(this, lib);
    CTFontTraits_h.call(this, lib);
    CTFrame_h.call(this, lib);
    CoreText_h.call(this, lib);
}
