// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFramesetter.h
function CTFramesetter_h(lib) {

    if (this._CTFRAMESETTER_H)
        return;
    this._CTFRAMESETTER_H = true;

    this.__CTFramesetter = new ctypes.StructType("__CTFramesetter");
    this.CTFramesetterRef = this.__CTFramesetter.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTLine.h
function CTLine_h(lib) {

    if (this._CTLINE_H)
        return;
    this._CTLINE_H = true;

    this.__CTLine = new ctypes.StructType("__CTLine");
    this.CTLineRef = this.__CTLine.ptr;
    this.kCTLineTruncationStart = 0;
    this.kCTLineTruncationEnd = 1;
    this.kCTLineTruncationMiddle = 2;
    // Dropping declaration of 'CTLineTruncationType': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFont.h
function CTFont_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CTFONT_H)
        return;
    this._CTFONT_H = true;

    this.__CTFont = new ctypes.StructType("__CTFont");
    this.CTFontRef = this.__CTFont.ptr;
    this.kCTFontOptionsDefault = 0;
    this.kCTFontOptionsPreventAutoActivation = 1;
    this.kCTFontOptionsPreferSystemFont = 4;
    this.CTFontOptions = this.CFOptionFlags;
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
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTTypesetter.h
function CTTypesetter_h(lib) {

    if (this._CTTYPESETTER_H)
        return;
    this._CTTYPESETTER_H = true;

    this.__CTTypesetter = new ctypes.StructType("__CTTypesetter");
    this.CTTypesetterRef = this.__CTTypesetter.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFontManagerErrors.h
function CTFontManagerErrors_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CTFONTMANAGERERRORS_H)
        return;
    this._CTFONTMANAGERERRORS_H = true;

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
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFontCollection.h
function CTFontCollection_h(lib) {
    CTFontDescriptor_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._CTFONTCOLLECTION_H)
        return;
    this._CTFONTCOLLECTION_H = true;

    this.__CTFontCollection = new ctypes.StructType("__CTFontCollection");
    this.CTFontCollectionRef = this.__CTFontCollection.ptr;
    this.CTFontCollectionSortDescriptorsCallback = new ctypes.FunctionType(ctypes.default_abi, this.CFComparisonResult, [this.CTFontDescriptorRef, this.CTFontDescriptorRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFontDescriptor.h
function CTFontDescriptor_h(lib) {

    if (this._CTFONTDESCRIPTOR_H)
        return;
    this._CTFONTDESCRIPTOR_H = true;

    this.__CTFontDescriptor = new ctypes.StructType("__CTFontDescriptor");
    this.CTFontDescriptorRef = this.__CTFontDescriptor.ptr;
    this.kCTFontDefaultOrientation = 0;
    this.kCTFontHorizontalOrientation = 1;
    this.kCTFontVerticalOrientation = 2;
    // Dropping declaration of 'CTFontOrientation': 'uint32_t' defined out of scope
    this.kCTFontFormatUnrecognized = 0;
    this.kCTFontFormatOpenTypePostScript = 1;
    this.kCTFontFormatOpenTypeTrueType = 2;
    this.kCTFontFormatTrueType = 3;
    this.kCTFontFormatPostScript = 4;
    this.kCTFontFormatBitmap = 5;
    // Dropping declaration of 'CTFontFormat': 'uint32_t' defined out of scope
    this.kCTFontPrioritySystem = 10000;
    this.kCTFontPriorityNetwork = 20000;
    this.kCTFontPriorityComputer = 30000;
    this.kCTFontPriorityUser = 40000;
    this.kCTFontPriorityDynamic = 50000;
    this.kCTFontPriorityProcess = 60000;
    // Dropping declaration of 'CTFontPriority': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTTextTab.h
function CTTextTab_h(lib) {

    if (this._CTTEXTTAB_H)
        return;
    this._CTTEXTTAB_H = true;

    this.__CTTextTab = new ctypes.StructType("__CTTextTab");
    this.CTTextTabRef = this.__CTTextTab.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTFontManager.h
function CTFontManager_h(lib) {

    if (this._CTFONTMANAGER_H)
        return;
    this._CTFONTMANAGER_H = true;

    this.kCTFontManagerScopeNone = 0;
    this.kCTFontManagerScopeProcess = 1;
    this.kCTFontManagerScopeUser = 2;
    this.kCTFontManagerScopeSession = 3;
    // Dropping declaration of 'CTFontManagerScope': 'uint32_t' defined out of scope
    this.kCTFontManagerAutoActivationDefault = 0;
    this.kCTFontManagerAutoActivationDisabled = 1;
    this.kCTFontManagerAutoActivationEnabled = 2;
    this.kCTFontManagerAutoActivationPromptUser = 3;
    // Dropping declaration of 'CTFontManagerAutoActivationSetting': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTGlyphInfo.h
function CTGlyphInfo_h(lib) {

    if (this._CTGLYPHINFO_H)
        return;
    this._CTGLYPHINFO_H = true;

    this.__CTGlyphInfo = new ctypes.StructType("__CTGlyphInfo");
    this.CTGlyphInfoRef = this.__CTGlyphInfo.ptr;
    this.kCTIdentityMappingCharacterCollection = 0;
    this.kCTAdobeCNS1CharacterCollection = 1;
    this.kCTAdobeGB1CharacterCollection = 2;
    this.kCTAdobeJapan1CharacterCollection = 3;
    this.kCTAdobeJapan2CharacterCollection = 4;
    this.kCTAdobeKorea1CharacterCollection = 5;
    // Dropping declaration of 'CTCharacterCollection': 'uint16_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTParagraphStyle.h
function CTParagraphStyle_h(lib) {

    if (this._CTPARAGRAPHSTYLE_H)
        return;
    this._CTPARAGRAPHSTYLE_H = true;

    this.__CTParagraphStyle = new ctypes.StructType("__CTParagraphStyle");
    this.CTParagraphStyleRef = this.__CTParagraphStyle.ptr;
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
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CTStringAttributes.h
function CTStringAttributes_h(lib) {

    if (this._CTSTRINGATTRIBUTES_H)
        return;
    this._CTSTRINGATTRIBUTES_H = true;

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

    if (this._CTFONTTRAITS_H)
        return;
    this._CTFONTTRAITS_H = true;

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

    if (this._CTFRAME_H)
        return;
    this._CTFRAME_H = true;

    this.__CTFrame = new ctypes.StructType("__CTFrame");
    this.CTFrameRef = this.__CTFrame.ptr;
    this.kCTFrameProgressionTopToBottom = 0;
    this.kCTFrameProgressionRightToLeft = 1;
    // Dropping declaration of 'CTFrameProgression': 'uint32_t' defined out of scope
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/CoreText.framework/Headers/CoreText.h
function CoreText_h(lib) {

    if (this._CORETEXT_H)
        return;
    this._CORETEXT_H = true;

}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");

const EXPORTED_SYMBOLS = ["CoreText", "CTFramesetter_h", "CTLine_h", "CTFont_h", "CTTypesetter_h", "CTFontManagerErrors_h", "CTRun_h", "CTFontCollection_h", "CTFontDescriptor_h", "CTTextTab_h", "CTFontManager_h", "CTGlyphInfo_h", "CTParagraphStyle_h", "CTStringAttributes_h", "CTFontTraits_h", "CTFrame_h", "CoreText_h"];

function CoreText() {
    let libpath = "/System/Library/Frameworks/CoreText.framework/CoreText";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
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
