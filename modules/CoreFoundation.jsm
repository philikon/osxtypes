// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFString.h
function CFString_h(lib) {
    CFData_h.call(this, lib);
    CFCharacterSet_h.call(this, lib);
    CFArray_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFLocale_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFSTRING_H)
        return;
    this._CFSTRING_H = true;

    this.CFStringEncoding = this.UInt32;
    this.kCFStringEncodingMacRoman = 0;
    this.kCFStringEncodingWindowsLatin1 = 1280;
    this.kCFStringEncodingISOLatin1 = 513;
    this.kCFStringEncodingNextStepLatin = 2817;
    this.kCFStringEncodingASCII = 1536;
    this.kCFStringEncodingUnicode = 256;
    this.kCFStringEncodingUTF8 = 134217984;
    this.kCFStringEncodingNonLossyASCII = 3071;
    this.kCFStringEncodingUTF16 = 256;
    this.kCFStringEncodingUTF16BE = 268435712;
    this.kCFStringEncodingUTF16LE = 335544576;
    this.kCFStringEncodingUTF32 = 201326848;
    this.kCFStringEncodingUTF32BE = 402653440;
    this.kCFStringEncodingUTF32LE = 469762304;
    this.CFStringBuiltInEncodings = this.CFStringEncoding;
    this.CFStringGetTypeID = lib.declare("CFStringGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFStringCreateWithPascalString = lib.declare("CFStringCreateWithPascalString", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.ConstStr255Param, this.CFStringEncoding);
    this.CFStringCreateWithCString = lib.declare("CFStringCreateWithCString", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, ctypes.char.ptr, this.CFStringEncoding);
    this.CFStringCreateWithBytes = lib.declare("CFStringCreateWithBytes", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex, this.CFStringEncoding, this.Boolean);
    this.CFStringCreateWithCharacters = lib.declare("CFStringCreateWithCharacters", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.UniChar.ptr, this.CFIndex);
    this.CFStringCreateWithPascalStringNoCopy = lib.declare("CFStringCreateWithPascalStringNoCopy", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.ConstStr255Param, this.CFStringEncoding, this.CFAllocatorRef);
    this.CFStringCreateWithCStringNoCopy = lib.declare("CFStringCreateWithCStringNoCopy", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, ctypes.char.ptr, this.CFStringEncoding, this.CFAllocatorRef);
    this.CFStringCreateWithBytesNoCopy = lib.declare("CFStringCreateWithBytesNoCopy", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex, this.CFStringEncoding, this.Boolean, this.CFAllocatorRef);
    this.CFStringCreateWithCharactersNoCopy = lib.declare("CFStringCreateWithCharactersNoCopy", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.UniChar.ptr, this.CFIndex, this.CFAllocatorRef);
    this.CFStringCreateWithSubstring = lib.declare("CFStringCreateWithSubstring", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef, this.CFRange);
    this.CFStringCreateCopy = lib.declare("CFStringCreateCopy", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFStringCreateWithFormat = lib.declare("CFStringCreateWithFormat", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFDictionaryRef, this.CFStringRef, "...");
    // Dropping declaration of 'CFStringCreateWithFormatAndArguments': 'va_list' defined out of scope
    this.CFStringCreateMutable = lib.declare("CFStringCreateMutable", ctypes.default_abi, this.CFMutableStringRef, this.CFAllocatorRef, this.CFIndex);
    this.CFStringCreateMutableCopy = lib.declare("CFStringCreateMutableCopy", ctypes.default_abi, this.CFMutableStringRef, this.CFAllocatorRef, this.CFIndex, this.CFStringRef);
    this.CFStringCreateMutableWithExternalCharactersNoCopy = lib.declare("CFStringCreateMutableWithExternalCharactersNoCopy", ctypes.default_abi, this.CFMutableStringRef, this.CFAllocatorRef, this.UniChar.ptr, this.CFIndex, this.CFIndex, this.CFAllocatorRef);
    this.CFStringCreateMutableWithExternalCharactersNoCopy = lib.declare("CFStringCreateMutableWithExternalCharactersNoCopy", ctypes.default_abi, this.CFMutableStringRef, this.CFAllocatorRef, ctypes.unsigned_short.ptr, this.CFIndex, this.CFIndex, this.CFAllocatorRef);
    this.CFStringGetLength = lib.declare("CFStringGetLength", ctypes.default_abi, this.CFIndex, this.CFStringRef);
    this.CFStringGetCharacterAtIndex = lib.declare("CFStringGetCharacterAtIndex", ctypes.default_abi, this.UniChar, this.CFStringRef, this.CFIndex);
    this.CFStringGetCharacters = lib.declare("CFStringGetCharacters", ctypes.default_abi, ctypes.void_t, this.CFStringRef, this.CFRange, this.UniChar.ptr);
    this.CFStringGetCharacters = lib.declare("CFStringGetCharacters", ctypes.default_abi, ctypes.void_t, this.CFStringRef, this.CFRange, ctypes.unsigned_short.ptr);
    this.CFStringGetPascalString = lib.declare("CFStringGetPascalString", ctypes.default_abi, this.Boolean, this.CFStringRef, this.StringPtr, this.CFIndex, this.CFStringEncoding);
    this.CFStringGetCString = lib.declare("CFStringGetCString", ctypes.default_abi, this.Boolean, this.CFStringRef, ctypes.char.ptr, this.CFIndex, this.CFStringEncoding);
    this.CFStringGetPascalStringPtr = lib.declare("CFStringGetPascalStringPtr", ctypes.default_abi, this.ConstStringPtr, this.CFStringRef, this.CFStringEncoding);
    this.CFStringGetCStringPtr = lib.declare("CFStringGetCStringPtr", ctypes.default_abi, ctypes.char.ptr, this.CFStringRef, this.CFStringEncoding);
    this.CFStringGetCharactersPtr = lib.declare("CFStringGetCharactersPtr", ctypes.default_abi, this.UniChar.ptr, this.CFStringRef);
    this.CFStringGetBytes = lib.declare("CFStringGetBytes", ctypes.default_abi, this.CFIndex, this.CFStringRef, this.CFRange, this.CFStringEncoding, this.UInt8, this.Boolean, this.UInt8.ptr, this.CFIndex, this.CFIndex.ptr);
    this.CFStringCreateFromExternalRepresentation = lib.declare("CFStringCreateFromExternalRepresentation", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFDataRef, this.CFStringEncoding);
    this.CFStringCreateExternalRepresentation = lib.declare("CFStringCreateExternalRepresentation", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFStringRef, this.CFStringEncoding, this.UInt8);
    this.CFStringGetSmallestEncoding = lib.declare("CFStringGetSmallestEncoding", ctypes.default_abi, this.CFStringEncoding, this.CFStringRef);
    this.CFStringGetFastestEncoding = lib.declare("CFStringGetFastestEncoding", ctypes.default_abi, this.CFStringEncoding, this.CFStringRef);
    this.CFStringGetSystemEncoding = lib.declare("CFStringGetSystemEncoding", ctypes.default_abi, this.CFStringEncoding);
    this.CFStringGetMaximumSizeForEncoding = lib.declare("CFStringGetMaximumSizeForEncoding", ctypes.default_abi, this.CFIndex, this.CFIndex, this.CFStringEncoding);
    this.CFStringGetFileSystemRepresentation = lib.declare("CFStringGetFileSystemRepresentation", ctypes.default_abi, this.Boolean, this.CFStringRef, ctypes.char.ptr, this.CFIndex);
    this.CFStringGetMaximumSizeOfFileSystemRepresentation = lib.declare("CFStringGetMaximumSizeOfFileSystemRepresentation", ctypes.default_abi, this.CFIndex, this.CFStringRef);
    this.CFStringCreateWithFileSystemRepresentation = lib.declare("CFStringCreateWithFileSystemRepresentation", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, ctypes.char.ptr);
    this.kCFCompareCaseInsensitive = 1;
    this.kCFCompareBackwards = 4;
    this.kCFCompareAnchored = 8;
    this.kCFCompareNonliteral = 16;
    this.kCFCompareLocalized = 32;
    this.kCFCompareNumerically = 64;
    this.kCFCompareDiacriticInsensitive = 128;
    this.kCFCompareWidthInsensitive = 256;
    this.kCFCompareForcedOrdering = 512;
    this.CFStringCompareFlags = this.CFOptionFlags;
    this.CFStringCompareWithOptionsAndLocale = lib.declare("CFStringCompareWithOptionsAndLocale", ctypes.default_abi, this.CFComparisonResult, this.CFStringRef, this.CFStringRef, this.CFRange, this.CFStringCompareFlags, this.CFLocaleRef);
    this.CFStringCompareWithOptions = lib.declare("CFStringCompareWithOptions", ctypes.default_abi, this.CFComparisonResult, this.CFStringRef, this.CFStringRef, this.CFRange, this.CFStringCompareFlags);
    this.CFStringCompare = lib.declare("CFStringCompare", ctypes.default_abi, this.CFComparisonResult, this.CFStringRef, this.CFStringRef, this.CFStringCompareFlags);
    this.CFStringFindWithOptionsAndLocale = lib.declare("CFStringFindWithOptionsAndLocale", ctypes.default_abi, this.Boolean, this.CFStringRef, this.CFStringRef, this.CFRange, this.CFStringCompareFlags, this.CFLocaleRef, this.CFRange.ptr);
    this.CFStringFindWithOptions = lib.declare("CFStringFindWithOptions", ctypes.default_abi, this.Boolean, this.CFStringRef, this.CFStringRef, this.CFRange, this.CFStringCompareFlags, this.CFRange.ptr);
    this.CFStringCreateArrayWithFindResults = lib.declare("CFStringCreateArrayWithFindResults", ctypes.default_abi, this.CFArrayRef, this.CFAllocatorRef, this.CFStringRef, this.CFStringRef, this.CFRange, this.CFStringCompareFlags);
    this.CFStringFind = lib.declare("CFStringFind", ctypes.default_abi, this.CFRange, this.CFStringRef, this.CFStringRef, this.CFStringCompareFlags);
    this.CFStringHasPrefix = lib.declare("CFStringHasPrefix", ctypes.default_abi, this.Boolean, this.CFStringRef, this.CFStringRef);
    this.CFStringHasSuffix = lib.declare("CFStringHasSuffix", ctypes.default_abi, this.Boolean, this.CFStringRef, this.CFStringRef);
    this.CFStringGetRangeOfComposedCharactersAtIndex = lib.declare("CFStringGetRangeOfComposedCharactersAtIndex", ctypes.default_abi, this.CFRange, this.CFStringRef, this.CFIndex);
    this.CFStringFindCharacterFromSet = lib.declare("CFStringFindCharacterFromSet", ctypes.default_abi, this.Boolean, this.CFStringRef, this.CFCharacterSetRef, this.CFRange, this.CFStringCompareFlags, this.CFRange.ptr);
    this.CFStringGetLineBounds = lib.declare("CFStringGetLineBounds", ctypes.default_abi, ctypes.void_t, this.CFStringRef, this.CFRange, this.CFIndex.ptr, this.CFIndex.ptr, this.CFIndex.ptr);
    this.CFStringGetParagraphBounds = lib.declare("CFStringGetParagraphBounds", ctypes.default_abi, ctypes.void_t, this.CFStringRef, this.CFRange, this.CFIndex.ptr, this.CFIndex.ptr, this.CFIndex.ptr);
    this.CFStringCreateByCombiningStrings = lib.declare("CFStringCreateByCombiningStrings", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFArrayRef, this.CFStringRef);
    this.CFStringCreateArrayBySeparatingStrings = lib.declare("CFStringCreateArrayBySeparatingStrings", ctypes.default_abi, this.CFArrayRef, this.CFAllocatorRef, this.CFStringRef, this.CFStringRef);
    this.CFStringGetIntValue = lib.declare("CFStringGetIntValue", ctypes.default_abi, this.SInt32, this.CFStringRef);
    this.CFStringGetDoubleValue = lib.declare("CFStringGetDoubleValue", ctypes.default_abi, ctypes.double, this.CFStringRef);
    this.CFStringAppend = lib.declare("CFStringAppend", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFStringRef);
    this.CFStringAppendCharacters = lib.declare("CFStringAppendCharacters", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.UniChar.ptr, this.CFIndex);
    this.CFStringAppendPascalString = lib.declare("CFStringAppendPascalString", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.ConstStr255Param, this.CFStringEncoding);
    this.CFStringAppendCString = lib.declare("CFStringAppendCString", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, ctypes.char.ptr, this.CFStringEncoding);
    this.CFStringAppendFormat = lib.declare("CFStringAppendFormat", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFDictionaryRef, this.CFStringRef, "...");
    // Dropping declaration of 'CFStringAppendFormatAndArguments': 'va_list' defined out of scope
    this.CFStringInsert = lib.declare("CFStringInsert", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFIndex, this.CFStringRef);
    this.CFStringDelete = lib.declare("CFStringDelete", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFRange);
    this.CFStringReplace = lib.declare("CFStringReplace", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFRange, this.CFStringRef);
    this.CFStringReplaceAll = lib.declare("CFStringReplaceAll", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFStringRef);
    this.CFStringFindAndReplace = lib.declare("CFStringFindAndReplace", ctypes.default_abi, this.CFIndex, this.CFMutableStringRef, this.CFStringRef, this.CFStringRef, this.CFRange, this.CFStringCompareFlags);
    this.CFStringSetExternalCharactersNoCopy = lib.declare("CFStringSetExternalCharactersNoCopy", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.UniChar.ptr, this.CFIndex, this.CFIndex);
    this.CFStringSetExternalCharactersNoCopy = lib.declare("CFStringSetExternalCharactersNoCopy", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, ctypes.unsigned_short.ptr, this.CFIndex, this.CFIndex);
    this.CFStringPad = lib.declare("CFStringPad", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFStringRef, this.CFIndex, this.CFIndex);
    this.CFStringTrim = lib.declare("CFStringTrim", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFStringRef);
    this.CFStringTrimWhitespace = lib.declare("CFStringTrimWhitespace", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef);
    this.CFStringLowercase = lib.declare("CFStringLowercase", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFLocaleRef);
    this.CFStringUppercase = lib.declare("CFStringUppercase", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFLocaleRef);
    this.CFStringCapitalize = lib.declare("CFStringCapitalize", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFLocaleRef);
    this.kCFStringNormalizationFormD = 0;
    this.kCFStringNormalizationFormKD = 1;
    this.kCFStringNormalizationFormC = 2;
    this.kCFStringNormalizationFormKC = 3;
    this.CFStringNormalizationForm = this.CFIndex;
    this.CFStringNormalize = lib.declare("CFStringNormalize", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFStringNormalizationForm);
    this.CFStringFold = lib.declare("CFStringFold", ctypes.default_abi, ctypes.void_t, this.CFMutableStringRef, this.CFOptionFlags, this.CFLocaleRef);
    this.CFStringTransform = lib.declare("CFStringTransform", ctypes.default_abi, this.Boolean, this.CFMutableStringRef, this.CFRange.ptr, this.CFStringRef, this.Boolean);
    this.kCFStringTransformStripCombiningMarks = lib.declare("kCFStringTransformStripCombiningMarks", this.CFStringRef);
    this.kCFStringTransformToLatin = lib.declare("kCFStringTransformToLatin", this.CFStringRef);
    this.kCFStringTransformFullwidthHalfwidth = lib.declare("kCFStringTransformFullwidthHalfwidth", this.CFStringRef);
    this.kCFStringTransformLatinKatakana = lib.declare("kCFStringTransformLatinKatakana", this.CFStringRef);
    this.kCFStringTransformLatinHiragana = lib.declare("kCFStringTransformLatinHiragana", this.CFStringRef);
    this.kCFStringTransformHiraganaKatakana = lib.declare("kCFStringTransformHiraganaKatakana", this.CFStringRef);
    this.kCFStringTransformMandarinLatin = lib.declare("kCFStringTransformMandarinLatin", this.CFStringRef);
    this.kCFStringTransformLatinHangul = lib.declare("kCFStringTransformLatinHangul", this.CFStringRef);
    this.kCFStringTransformLatinArabic = lib.declare("kCFStringTransformLatinArabic", this.CFStringRef);
    this.kCFStringTransformLatinHebrew = lib.declare("kCFStringTransformLatinHebrew", this.CFStringRef);
    this.kCFStringTransformLatinThai = lib.declare("kCFStringTransformLatinThai", this.CFStringRef);
    this.kCFStringTransformLatinCyrillic = lib.declare("kCFStringTransformLatinCyrillic", this.CFStringRef);
    this.kCFStringTransformLatinGreek = lib.declare("kCFStringTransformLatinGreek", this.CFStringRef);
    this.kCFStringTransformToXMLHex = lib.declare("kCFStringTransformToXMLHex", this.CFStringRef);
    this.kCFStringTransformToUnicodeName = lib.declare("kCFStringTransformToUnicodeName", this.CFStringRef);
    this.kCFStringTransformStripDiacritics = lib.declare("kCFStringTransformStripDiacritics", this.CFStringRef);
    this.CFStringIsEncodingAvailable = lib.declare("CFStringIsEncodingAvailable", ctypes.default_abi, this.Boolean, this.CFStringEncoding);
    this.CFStringGetListOfAvailableEncodings = lib.declare("CFStringGetListOfAvailableEncodings", ctypes.default_abi, this.CFStringEncoding.ptr);
    this.CFStringGetNameOfEncoding = lib.declare("CFStringGetNameOfEncoding", ctypes.default_abi, this.CFStringRef, this.CFStringEncoding);
    this.CFStringConvertEncodingToNSStringEncoding = lib.declare("CFStringConvertEncodingToNSStringEncoding", ctypes.default_abi, ctypes.unsigned_long, this.CFStringEncoding);
    this.CFStringConvertNSStringEncodingToEncoding = lib.declare("CFStringConvertNSStringEncodingToEncoding", ctypes.default_abi, this.CFStringEncoding, ctypes.unsigned_long);
    this.CFStringConvertEncodingToWindowsCodepage = lib.declare("CFStringConvertEncodingToWindowsCodepage", ctypes.default_abi, this.UInt32, this.CFStringEncoding);
    this.CFStringConvertWindowsCodepageToEncoding = lib.declare("CFStringConvertWindowsCodepageToEncoding", ctypes.default_abi, this.CFStringEncoding, this.UInt32);
    this.CFStringConvertIANACharSetNameToEncoding = lib.declare("CFStringConvertIANACharSetNameToEncoding", ctypes.default_abi, this.CFStringEncoding, this.CFStringRef);
    this.CFStringConvertEncodingToIANACharSetName = lib.declare("CFStringConvertEncodingToIANACharSetName", ctypes.default_abi, this.CFStringRef, this.CFStringEncoding);
    this.CFStringGetMostCompatibleMacStringEncoding = lib.declare("CFStringGetMostCompatibleMacStringEncoding", ctypes.default_abi, this.CFStringEncoding, this.CFStringEncoding);
    this.CFStringInlineBuffer = new ctypes.StructType("CFStringInlineBuffer", [{buffer: this.UniChar.array(64)}, {theString: this.CFStringRef}, {directBuffer: this.UniChar.ptr}, {rangeToBuffer: this.CFRange}, {bufferedRangeStart: this.CFIndex}, {bufferedRangeEnd: this.CFIndex}]);
    // Dropping inline function 'CFStringInitInlineBuffer'.
    // Dropping inline function 'CFStringGetCharacterFromInlineBuffer'.
    // Dropping inline function 'CFStringIsSurrogateHighCharacter'.
    // Dropping inline function 'CFStringIsSurrogateLowCharacter'.
    // Dropping inline function 'CFStringGetLongCharacterForSurrogatePair'.
    // Dropping inline function 'CFStringGetSurrogatePairForLongCharacter'.
    // Dropping inline function 'CFStringGetSurrogatePairForLongCharacter'.
    this.CFShow = lib.declare("CFShow", ctypes.default_abi, ctypes.void_t, this.CFTypeRef);
    this.CFShowStr = lib.declare("CFShowStr", ctypes.default_abi, ctypes.void_t, this.CFStringRef);
    this.__CFStringMakeConstantString = lib.declare("__CFStringMakeConstantString", ctypes.default_abi, this.CFStringRef, ctypes.char.ptr);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFStringTokenizer.h
function CFStringTokenizer_h(lib) {
    CFBase_h.call(this, lib);
    CFLocale_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CFSTRINGTOKENIZER_H)
        return;
    this._CFSTRINGTOKENIZER_H = true;

    this.CFStringTokenizerCopyBestStringLanguage = lib.declare("CFStringTokenizerCopyBestStringLanguage", ctypes.default_abi, this.CFStringRef, this.CFStringRef, this.CFRange);
    this.__CFStringTokenizer = new ctypes.StructType("__CFStringTokenizer");
    this.CFStringTokenizerRef = this.__CFStringTokenizer.ptr;
    this.kCFStringTokenizerUnitWord = 0;
    this.kCFStringTokenizerUnitSentence = 1;
    this.kCFStringTokenizerUnitParagraph = 2;
    this.kCFStringTokenizerUnitLineBreak = 3;
    this.kCFStringTokenizerUnitWordBoundary = 4;
    this.kCFStringTokenizerAttributeLatinTranscription = 65536;
    this.kCFStringTokenizerAttributeLanguage = 131072;
    this.kCFStringTokenizerTokenNone = 0;
    this.kCFStringTokenizerTokenNormal = 1;
    this.kCFStringTokenizerTokenHasSubTokensMask = 2;
    this.kCFStringTokenizerTokenHasDerivedSubTokensMask = 4;
    this.kCFStringTokenizerTokenHasHasNumbersMask = 8;
    this.kCFStringTokenizerTokenHasNonLettersMask = 16;
    this.kCFStringTokenizerTokenIsCJWordMask = 32;
    this.CFStringTokenizerTokenType = this.CFOptionFlags;
    this.CFStringTokenizerGetTypeID = lib.declare("CFStringTokenizerGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFStringTokenizerCreate = lib.declare("CFStringTokenizerCreate", ctypes.default_abi, this.CFStringTokenizerRef, this.CFAllocatorRef, this.CFStringRef, this.CFRange, this.CFOptionFlags, this.CFLocaleRef);
    this.CFStringTokenizerSetString = lib.declare("CFStringTokenizerSetString", ctypes.default_abi, ctypes.void_t, this.CFStringTokenizerRef, this.CFStringRef, this.CFRange);
    this.CFStringTokenizerGoToTokenAtIndex = lib.declare("CFStringTokenizerGoToTokenAtIndex", ctypes.default_abi, this.CFStringTokenizerTokenType, this.CFStringTokenizerRef, this.CFIndex);
    this.CFStringTokenizerAdvanceToNextToken = lib.declare("CFStringTokenizerAdvanceToNextToken", ctypes.default_abi, this.CFStringTokenizerTokenType, this.CFStringTokenizerRef);
    this.CFStringTokenizerGetCurrentTokenRange = lib.declare("CFStringTokenizerGetCurrentTokenRange", ctypes.default_abi, this.CFRange, this.CFStringTokenizerRef);
    this.CFStringTokenizerCopyCurrentTokenAttribute = lib.declare("CFStringTokenizerCopyCurrentTokenAttribute", ctypes.default_abi, this.CFTypeRef, this.CFStringTokenizerRef, this.CFOptionFlags);
    this.CFStringTokenizerGetCurrentSubTokens = lib.declare("CFStringTokenizerGetCurrentSubTokens", ctypes.default_abi, this.CFIndex, this.CFStringTokenizerRef, this.CFRange.ptr, this.CFIndex, this.CFMutableArrayRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFNumberFormatter.h
function CFNumberFormatter_h(lib) {
    MacTypes_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFLocale_h.call(this, lib);
    CFNumber_h.call(this, lib);

    if (this._CFNUMBERFORMATTER_H)
        return;
    this._CFNUMBERFORMATTER_H = true;

    this.__CFNumberFormatter = new ctypes.StructType("__CFNumberFormatter");
    this.CFNumberFormatterRef = this.__CFNumberFormatter.ptr;
    this.CFNumberFormatterGetTypeID = lib.declare("CFNumberFormatterGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCFNumberFormatterNoStyle = 0;
    this.kCFNumberFormatterDecimalStyle = 1;
    this.kCFNumberFormatterCurrencyStyle = 2;
    this.kCFNumberFormatterPercentStyle = 3;
    this.kCFNumberFormatterScientificStyle = 4;
    this.kCFNumberFormatterSpellOutStyle = 5;
    this.CFNumberFormatterStyle = this.CFIndex;
    this.CFNumberFormatterCreate = lib.declare("CFNumberFormatterCreate", ctypes.default_abi, this.CFNumberFormatterRef, this.CFAllocatorRef, this.CFLocaleRef, this.CFNumberFormatterStyle);
    this.CFNumberFormatterGetLocale = lib.declare("CFNumberFormatterGetLocale", ctypes.default_abi, this.CFLocaleRef, this.CFNumberFormatterRef);
    this.CFNumberFormatterGetStyle = lib.declare("CFNumberFormatterGetStyle", ctypes.default_abi, this.CFNumberFormatterStyle, this.CFNumberFormatterRef);
    this.CFNumberFormatterGetFormat = lib.declare("CFNumberFormatterGetFormat", ctypes.default_abi, this.CFStringRef, this.CFNumberFormatterRef);
    this.CFNumberFormatterSetFormat = lib.declare("CFNumberFormatterSetFormat", ctypes.default_abi, ctypes.void_t, this.CFNumberFormatterRef, this.CFStringRef);
    this.CFNumberFormatterCreateStringWithNumber = lib.declare("CFNumberFormatterCreateStringWithNumber", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFNumberFormatterRef, this.CFNumberRef);
    this.CFNumberFormatterCreateStringWithValue = lib.declare("CFNumberFormatterCreateStringWithValue", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFNumberFormatterRef, this.CFNumberType, ctypes.void_t.ptr);
    this.kCFNumberFormatterParseIntegersOnly = 1;
    this.CFNumberFormatterOptionFlags = this.CFOptionFlags;
    this.CFNumberFormatterCreateNumberFromString = lib.declare("CFNumberFormatterCreateNumberFromString", ctypes.default_abi, this.CFNumberRef, this.CFAllocatorRef, this.CFNumberFormatterRef, this.CFStringRef, this.CFRange.ptr, this.CFOptionFlags);
    this.CFNumberFormatterGetValueFromString = lib.declare("CFNumberFormatterGetValueFromString", ctypes.default_abi, this.Boolean, this.CFNumberFormatterRef, this.CFStringRef, this.CFRange.ptr, this.CFNumberType, ctypes.void_t.ptr);
    this.CFNumberFormatterSetProperty = lib.declare("CFNumberFormatterSetProperty", ctypes.default_abi, ctypes.void_t, this.CFNumberFormatterRef, this.CFStringRef, this.CFTypeRef);
    this.CFNumberFormatterCopyProperty = lib.declare("CFNumberFormatterCopyProperty", ctypes.default_abi, this.CFTypeRef, this.CFNumberFormatterRef, this.CFStringRef);
    this.kCFNumberFormatterCurrencyCode = lib.declare("kCFNumberFormatterCurrencyCode", this.CFStringRef);
    this.kCFNumberFormatterDecimalSeparator = lib.declare("kCFNumberFormatterDecimalSeparator", this.CFStringRef);
    this.kCFNumberFormatterCurrencyDecimalSeparator = lib.declare("kCFNumberFormatterCurrencyDecimalSeparator", this.CFStringRef);
    this.kCFNumberFormatterAlwaysShowDecimalSeparator = lib.declare("kCFNumberFormatterAlwaysShowDecimalSeparator", this.CFStringRef);
    this.kCFNumberFormatterGroupingSeparator = lib.declare("kCFNumberFormatterGroupingSeparator", this.CFStringRef);
    this.kCFNumberFormatterUseGroupingSeparator = lib.declare("kCFNumberFormatterUseGroupingSeparator", this.CFStringRef);
    this.kCFNumberFormatterPercentSymbol = lib.declare("kCFNumberFormatterPercentSymbol", this.CFStringRef);
    this.kCFNumberFormatterZeroSymbol = lib.declare("kCFNumberFormatterZeroSymbol", this.CFStringRef);
    this.kCFNumberFormatterNaNSymbol = lib.declare("kCFNumberFormatterNaNSymbol", this.CFStringRef);
    this.kCFNumberFormatterInfinitySymbol = lib.declare("kCFNumberFormatterInfinitySymbol", this.CFStringRef);
    this.kCFNumberFormatterMinusSign = lib.declare("kCFNumberFormatterMinusSign", this.CFStringRef);
    this.kCFNumberFormatterPlusSign = lib.declare("kCFNumberFormatterPlusSign", this.CFStringRef);
    this.kCFNumberFormatterCurrencySymbol = lib.declare("kCFNumberFormatterCurrencySymbol", this.CFStringRef);
    this.kCFNumberFormatterExponentSymbol = lib.declare("kCFNumberFormatterExponentSymbol", this.CFStringRef);
    this.kCFNumberFormatterMinIntegerDigits = lib.declare("kCFNumberFormatterMinIntegerDigits", this.CFStringRef);
    this.kCFNumberFormatterMaxIntegerDigits = lib.declare("kCFNumberFormatterMaxIntegerDigits", this.CFStringRef);
    this.kCFNumberFormatterMinFractionDigits = lib.declare("kCFNumberFormatterMinFractionDigits", this.CFStringRef);
    this.kCFNumberFormatterMaxFractionDigits = lib.declare("kCFNumberFormatterMaxFractionDigits", this.CFStringRef);
    this.kCFNumberFormatterGroupingSize = lib.declare("kCFNumberFormatterGroupingSize", this.CFStringRef);
    this.kCFNumberFormatterSecondaryGroupingSize = lib.declare("kCFNumberFormatterSecondaryGroupingSize", this.CFStringRef);
    this.kCFNumberFormatterRoundingMode = lib.declare("kCFNumberFormatterRoundingMode", this.CFStringRef);
    this.kCFNumberFormatterRoundingIncrement = lib.declare("kCFNumberFormatterRoundingIncrement", this.CFStringRef);
    this.kCFNumberFormatterFormatWidth = lib.declare("kCFNumberFormatterFormatWidth", this.CFStringRef);
    this.kCFNumberFormatterPaddingPosition = lib.declare("kCFNumberFormatterPaddingPosition", this.CFStringRef);
    this.kCFNumberFormatterPaddingCharacter = lib.declare("kCFNumberFormatterPaddingCharacter", this.CFStringRef);
    this.kCFNumberFormatterDefaultFormat = lib.declare("kCFNumberFormatterDefaultFormat", this.CFStringRef);
    this.kCFNumberFormatterMultiplier = lib.declare("kCFNumberFormatterMultiplier", this.CFStringRef);
    this.kCFNumberFormatterPositivePrefix = lib.declare("kCFNumberFormatterPositivePrefix", this.CFStringRef);
    this.kCFNumberFormatterPositiveSuffix = lib.declare("kCFNumberFormatterPositiveSuffix", this.CFStringRef);
    this.kCFNumberFormatterNegativePrefix = lib.declare("kCFNumberFormatterNegativePrefix", this.CFStringRef);
    this.kCFNumberFormatterNegativeSuffix = lib.declare("kCFNumberFormatterNegativeSuffix", this.CFStringRef);
    this.kCFNumberFormatterPerMillSymbol = lib.declare("kCFNumberFormatterPerMillSymbol", this.CFStringRef);
    this.kCFNumberFormatterInternationalCurrencySymbol = lib.declare("kCFNumberFormatterInternationalCurrencySymbol", this.CFStringRef);
    this.kCFNumberFormatterCurrencyGroupingSeparator = lib.declare("kCFNumberFormatterCurrencyGroupingSeparator", this.CFStringRef);
    this.kCFNumberFormatterIsLenient = lib.declare("kCFNumberFormatterIsLenient", this.CFStringRef);
    this.kCFNumberFormatterUseSignificantDigits = lib.declare("kCFNumberFormatterUseSignificantDigits", this.CFStringRef);
    this.kCFNumberFormatterMinSignificantDigits = lib.declare("kCFNumberFormatterMinSignificantDigits", this.CFStringRef);
    this.kCFNumberFormatterMaxSignificantDigits = lib.declare("kCFNumberFormatterMaxSignificantDigits", this.CFStringRef);
    this.kCFNumberFormatterRoundCeiling = 0;
    this.kCFNumberFormatterRoundFloor = 1;
    this.kCFNumberFormatterRoundDown = 2;
    this.kCFNumberFormatterRoundUp = 3;
    this.kCFNumberFormatterRoundHalfEven = 4;
    this.kCFNumberFormatterRoundHalfDown = 5;
    this.kCFNumberFormatterRoundHalfUp = 6;
    this.CFNumberFormatterRoundingMode = this.CFIndex;
    this.kCFNumberFormatterPadBeforePrefix = 0;
    this.kCFNumberFormatterPadAfterPrefix = 1;
    this.kCFNumberFormatterPadBeforeSuffix = 2;
    this.kCFNumberFormatterPadAfterSuffix = 3;
    this.CFNumberFormatterPadPosition = this.CFIndex;
    // Dropping declaration of 'CFNumberFormatterGetDecimalInfoForCurrencyCode': 'int32_t' defined out of scope
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFByteOrder.h
function CFByteOrder_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFBYTEORDER_H)
        return;
    this._CFBYTEORDER_H = true;

    this.CFByteOrderUnknown = 0;
    this.CFByteOrderLittleEndian = 1;
    this.CFByteOrderBigEndian = 2;
    this.CFByteOrder = this.CFIndex;
    // Dropping inline function 'CFByteOrderGetCurrent'.
    // Dropping inline function 'CFSwapInt16'.
    // Dropping inline function 'CFSwapInt32'.
    // Dropping inline function 'CFSwapInt64'.
    // Dropping inline function 'CFSwapInt16BigToHost'.
    // Dropping inline function 'CFSwapInt32BigToHost'.
    // Dropping inline function 'CFSwapInt64BigToHost'.
    // Dropping inline function 'CFSwapInt16HostToBig'.
    // Dropping inline function 'CFSwapInt32HostToBig'.
    // Dropping inline function 'CFSwapInt64HostToBig'.
    // Dropping inline function 'CFSwapInt16LittleToHost'.
    // Dropping inline function 'CFSwapInt32LittleToHost'.
    // Dropping inline function 'CFSwapInt64LittleToHost'.
    // Dropping inline function 'CFSwapInt16HostToLittle'.
    // Dropping inline function 'CFSwapInt32HostToLittle'.
    // Dropping inline function 'CFSwapInt64HostToLittle'.
    this.CFSwappedFloat32 = new ctypes.StructType("CFSwappedFloat32", []);
    this.CFSwappedFloat64 = new ctypes.StructType("CFSwappedFloat64", []);
    // Dropping inline function 'CFConvertFloat32HostToSwapped'.
    // Dropping inline function 'CFConvertFloat32SwappedToHost'.
    // Dropping inline function 'CFConvertFloat64HostToSwapped'.
    // Dropping inline function 'CFConvertFloat64SwappedToHost'.
    // Dropping inline function 'CFConvertFloatHostToSwapped'.
    // Dropping inline function 'CFConvertFloatSwappedToHost'.
    // Dropping inline function 'CFConvertDoubleHostToSwapped'.
    // Dropping inline function 'CFConvertDoubleSwappedToHost'.
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFError.h
function CFError_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);

    if (this._CFERROR_H)
        return;
    this._CFERROR_H = true;

    this.__CFError = new ctypes.StructType("__CFError");
    this.CFErrorRef = this.__CFError.ptr;
    this.CFErrorGetTypeID = lib.declare("CFErrorGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCFErrorDomainPOSIX = lib.declare("kCFErrorDomainPOSIX", this.CFStringRef);
    this.kCFErrorDomainOSStatus = lib.declare("kCFErrorDomainOSStatus", this.CFStringRef);
    this.kCFErrorDomainMach = lib.declare("kCFErrorDomainMach", this.CFStringRef);
    this.kCFErrorDomainCocoa = lib.declare("kCFErrorDomainCocoa", this.CFStringRef);
    this.kCFErrorLocalizedDescriptionKey = lib.declare("kCFErrorLocalizedDescriptionKey", this.CFStringRef);
    this.kCFErrorLocalizedFailureReasonKey = lib.declare("kCFErrorLocalizedFailureReasonKey", this.CFStringRef);
    this.kCFErrorLocalizedRecoverySuggestionKey = lib.declare("kCFErrorLocalizedRecoverySuggestionKey", this.CFStringRef);
    this.kCFErrorDescriptionKey = lib.declare("kCFErrorDescriptionKey", this.CFStringRef);
    this.kCFErrorUnderlyingErrorKey = lib.declare("kCFErrorUnderlyingErrorKey", this.CFStringRef);
    this.CFErrorCreate = lib.declare("CFErrorCreate", ctypes.default_abi, this.CFErrorRef, this.CFAllocatorRef, this.CFStringRef, this.CFIndex, this.CFDictionaryRef);
    this.CFErrorCreateWithUserInfoKeysAndValues = lib.declare("CFErrorCreateWithUserInfoKeysAndValues", ctypes.default_abi, this.CFErrorRef, this.CFAllocatorRef, this.CFStringRef, this.CFIndex, ctypes.void_t.ptr.ptr, ctypes.void_t.ptr.ptr, this.CFIndex);
    this.CFErrorGetDomain = lib.declare("CFErrorGetDomain", ctypes.default_abi, this.CFStringRef, this.CFErrorRef);
    this.CFErrorGetCode = lib.declare("CFErrorGetCode", ctypes.default_abi, this.CFIndex, this.CFErrorRef);
    this.CFErrorCopyUserInfo = lib.declare("CFErrorCopyUserInfo", ctypes.default_abi, this.CFDictionaryRef, this.CFErrorRef);
    this.CFErrorCopyDescription = lib.declare("CFErrorCopyDescription", ctypes.default_abi, this.CFStringRef, this.CFErrorRef);
    this.CFErrorCopyFailureReason = lib.declare("CFErrorCopyFailureReason", ctypes.default_abi, this.CFStringRef, this.CFErrorRef);
    this.CFErrorCopyRecoverySuggestion = lib.declare("CFErrorCopyRecoverySuggestion", ctypes.default_abi, this.CFStringRef, this.CFErrorRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFStream.h
function CFStream_h(lib) {
    CFRunLoop_h.call(this, lib);
    CFError_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFSocket_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFSTREAM_H)
        return;
    this._CFSTREAM_H = true;

    this.kCFStreamStatusNotOpen = 0;
    this.kCFStreamStatusOpening = 1;
    this.kCFStreamStatusOpen = 2;
    this.kCFStreamStatusReading = 3;
    this.kCFStreamStatusWriting = 4;
    this.kCFStreamStatusAtEnd = 5;
    this.kCFStreamStatusClosed = 6;
    this.kCFStreamStatusError = 7;
    this.CFStreamStatus = this.CFIndex;
    this.kCFStreamEventNone = 0;
    this.kCFStreamEventOpenCompleted = 1;
    this.kCFStreamEventHasBytesAvailable = 2;
    this.kCFStreamEventCanAcceptBytes = 4;
    this.kCFStreamEventErrorOccurred = 8;
    this.kCFStreamEventEndEncountered = 16;
    this.CFStreamEventType = this.CFOptionFlags;
    this.CFStreamClientContext = new ctypes.StructType("CFStreamClientContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.__CFReadStream = new ctypes.StructType("__CFReadStream");
    this.CFReadStreamRef = this.__CFReadStream.ptr;
    this.__CFWriteStream = new ctypes.StructType("__CFWriteStream");
    this.CFWriteStreamRef = this.__CFWriteStream.ptr;
    this.CFReadStreamClientCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFReadStreamRef, this.CFStreamEventType, ctypes.void_t.ptr]).ptr;
    this.CFWriteStreamClientCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFWriteStreamRef, this.CFStreamEventType, ctypes.void_t.ptr]).ptr;
    this.CFReadStreamGetTypeID = lib.declare("CFReadStreamGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFWriteStreamGetTypeID = lib.declare("CFWriteStreamGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCFStreamPropertyDataWritten = lib.declare("kCFStreamPropertyDataWritten", this.CFStringRef);
    this.CFReadStreamCreateWithBytesNoCopy = lib.declare("CFReadStreamCreateWithBytesNoCopy", ctypes.default_abi, this.CFReadStreamRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex, this.CFAllocatorRef);
    this.CFWriteStreamCreateWithBuffer = lib.declare("CFWriteStreamCreateWithBuffer", ctypes.default_abi, this.CFWriteStreamRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex);
    this.CFWriteStreamCreateWithAllocatedBuffers = lib.declare("CFWriteStreamCreateWithAllocatedBuffers", ctypes.default_abi, this.CFWriteStreamRef, this.CFAllocatorRef, this.CFAllocatorRef);
    this.CFReadStreamCreateWithFile = lib.declare("CFReadStreamCreateWithFile", ctypes.default_abi, this.CFReadStreamRef, this.CFAllocatorRef, this.CFURLRef);
    this.CFWriteStreamCreateWithFile = lib.declare("CFWriteStreamCreateWithFile", ctypes.default_abi, this.CFWriteStreamRef, this.CFAllocatorRef, this.CFURLRef);
    this.CFStreamCreateBoundPair = lib.declare("CFStreamCreateBoundPair", ctypes.default_abi, ctypes.void_t, this.CFAllocatorRef, this.CFReadStreamRef.ptr, this.CFWriteStreamRef.ptr, this.CFIndex);
    this.kCFStreamPropertyAppendToFile = lib.declare("kCFStreamPropertyAppendToFile", this.CFStringRef);
    this.kCFStreamPropertyFileCurrentOffset = lib.declare("kCFStreamPropertyFileCurrentOffset", this.CFStringRef);
    this.kCFStreamPropertySocketNativeHandle = lib.declare("kCFStreamPropertySocketNativeHandle", this.CFStringRef);
    this.kCFStreamPropertySocketRemoteHostName = lib.declare("kCFStreamPropertySocketRemoteHostName", this.CFStringRef);
    this.kCFStreamPropertySocketRemotePortNumber = lib.declare("kCFStreamPropertySocketRemotePortNumber", this.CFStringRef);
    this.CFStreamCreatePairWithSocket = lib.declare("CFStreamCreatePairWithSocket", ctypes.default_abi, ctypes.void_t, this.CFAllocatorRef, this.CFSocketNativeHandle, this.CFReadStreamRef.ptr, this.CFWriteStreamRef.ptr);
    this.CFStreamCreatePairWithSocketToHost = lib.declare("CFStreamCreatePairWithSocketToHost", ctypes.default_abi, ctypes.void_t, this.CFAllocatorRef, this.CFStringRef, this.UInt32, this.CFReadStreamRef.ptr, this.CFWriteStreamRef.ptr);
    this.CFStreamCreatePairWithPeerSocketSignature = lib.declare("CFStreamCreatePairWithPeerSocketSignature", ctypes.default_abi, ctypes.void_t, this.CFAllocatorRef, this.CFSocketSignature.ptr, this.CFReadStreamRef.ptr, this.CFWriteStreamRef.ptr);
    this.CFReadStreamGetStatus = lib.declare("CFReadStreamGetStatus", ctypes.default_abi, this.CFStreamStatus, this.CFReadStreamRef);
    this.CFWriteStreamGetStatus = lib.declare("CFWriteStreamGetStatus", ctypes.default_abi, this.CFStreamStatus, this.CFWriteStreamRef);
    this.CFReadStreamCopyError = lib.declare("CFReadStreamCopyError", ctypes.default_abi, this.CFErrorRef, this.CFReadStreamRef);
    this.CFWriteStreamCopyError = lib.declare("CFWriteStreamCopyError", ctypes.default_abi, this.CFErrorRef, this.CFWriteStreamRef);
    this.CFReadStreamOpen = lib.declare("CFReadStreamOpen", ctypes.default_abi, this.Boolean, this.CFReadStreamRef);
    this.CFWriteStreamOpen = lib.declare("CFWriteStreamOpen", ctypes.default_abi, this.Boolean, this.CFWriteStreamRef);
    this.CFReadStreamClose = lib.declare("CFReadStreamClose", ctypes.default_abi, ctypes.void_t, this.CFReadStreamRef);
    this.CFWriteStreamClose = lib.declare("CFWriteStreamClose", ctypes.default_abi, ctypes.void_t, this.CFWriteStreamRef);
    this.CFReadStreamHasBytesAvailable = lib.declare("CFReadStreamHasBytesAvailable", ctypes.default_abi, this.Boolean, this.CFReadStreamRef);
    this.CFReadStreamRead = lib.declare("CFReadStreamRead", ctypes.default_abi, this.CFIndex, this.CFReadStreamRef, this.UInt8.ptr, this.CFIndex);
    this.CFReadStreamGetBuffer = lib.declare("CFReadStreamGetBuffer", ctypes.default_abi, this.UInt8.ptr, this.CFReadStreamRef, this.CFIndex, this.CFIndex.ptr);
    this.CFWriteStreamCanAcceptBytes = lib.declare("CFWriteStreamCanAcceptBytes", ctypes.default_abi, this.Boolean, this.CFWriteStreamRef);
    this.CFWriteStreamWrite = lib.declare("CFWriteStreamWrite", ctypes.default_abi, this.CFIndex, this.CFWriteStreamRef, this.UInt8.ptr, this.CFIndex);
    this.CFReadStreamCopyProperty = lib.declare("CFReadStreamCopyProperty", ctypes.default_abi, this.CFTypeRef, this.CFReadStreamRef, this.CFStringRef);
    this.CFWriteStreamCopyProperty = lib.declare("CFWriteStreamCopyProperty", ctypes.default_abi, this.CFTypeRef, this.CFWriteStreamRef, this.CFStringRef);
    this.CFReadStreamSetProperty = lib.declare("CFReadStreamSetProperty", ctypes.default_abi, this.Boolean, this.CFReadStreamRef, this.CFStringRef, this.CFTypeRef);
    this.CFWriteStreamSetProperty = lib.declare("CFWriteStreamSetProperty", ctypes.default_abi, this.Boolean, this.CFWriteStreamRef, this.CFStringRef, this.CFTypeRef);
    this.CFReadStreamSetClient = lib.declare("CFReadStreamSetClient", ctypes.default_abi, this.Boolean, this.CFReadStreamRef, this.CFOptionFlags, this.CFReadStreamClientCallBack, this.CFStreamClientContext.ptr);
    this.CFWriteStreamSetClient = lib.declare("CFWriteStreamSetClient", ctypes.default_abi, this.Boolean, this.CFWriteStreamRef, this.CFOptionFlags, this.CFWriteStreamClientCallBack, this.CFStreamClientContext.ptr);
    this.CFReadStreamScheduleWithRunLoop = lib.declare("CFReadStreamScheduleWithRunLoop", ctypes.default_abi, ctypes.void_t, this.CFReadStreamRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFWriteStreamScheduleWithRunLoop = lib.declare("CFWriteStreamScheduleWithRunLoop", ctypes.default_abi, ctypes.void_t, this.CFWriteStreamRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFReadStreamUnscheduleFromRunLoop = lib.declare("CFReadStreamUnscheduleFromRunLoop", ctypes.default_abi, ctypes.void_t, this.CFReadStreamRef, this.CFRunLoopRef, this.CFStringRef);
    this.CFWriteStreamUnscheduleFromRunLoop = lib.declare("CFWriteStreamUnscheduleFromRunLoop", ctypes.default_abi, ctypes.void_t, this.CFWriteStreamRef, this.CFRunLoopRef, this.CFStringRef);
    this.kCFStreamErrorDomainCustom = -1;
    this.kCFStreamErrorDomainPOSIX = 1;
    this.kCFStreamErrorDomainMacOSStatus = 2;
    this.CFStreamErrorDomain = this.CFIndex;
    this.CFStreamError = new ctypes.StructType("CFStreamError", [{domain: this.CFIndex}, {error: this.SInt32}]);
    this.CFReadStreamGetError = lib.declare("CFReadStreamGetError", ctypes.default_abi, this.CFStreamError, this.CFReadStreamRef);
    this.CFWriteStreamGetError = lib.declare("CFWriteStreamGetError", ctypes.default_abi, this.CFStreamError, this.CFWriteStreamRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFURL.h
function CFURL_h(lib) {
    CFData_h.call(this, lib);
    CFError_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFString_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFURL_H)
        return;
    this._CFURL_H = true;

    // Fwd declaration to avoid importing CarbonCore/Files.h (cyclic import!)
    this.FSRef = new ctypes.StructType("FSRef", [{hidden: this.UInt8.array(80)}]);

    this.kCFURLPOSIXPathStyle = 0;
    this.kCFURLHFSPathStyle = 1;
    this.kCFURLWindowsPathStyle = 2;
    this.CFURLPathStyle = this.CFIndex;
    this.__CFURL = new ctypes.StructType("__CFURL");
    this.CFURLRef = this.__CFURL.ptr;
    this.CFURLGetTypeID = lib.declare("CFURLGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFURLCreateWithBytes = lib.declare("CFURLCreateWithBytes", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex, this.CFStringEncoding, this.CFURLRef);
    this.CFURLCreateData = lib.declare("CFURLCreateData", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFURLRef, this.CFStringEncoding, this.Boolean);
    this.CFURLCreateWithString = lib.declare("CFURLCreateWithString", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFStringRef, this.CFURLRef);
    this.CFURLCreateAbsoluteURLWithBytes = lib.declare("CFURLCreateAbsoluteURLWithBytes", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex, this.CFStringEncoding, this.CFURLRef, this.Boolean);
    this.CFURLCreateWithFileSystemPath = lib.declare("CFURLCreateWithFileSystemPath", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFStringRef, this.CFURLPathStyle, this.Boolean);
    this.CFURLCreateFromFileSystemRepresentation = lib.declare("CFURLCreateFromFileSystemRepresentation", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex, this.Boolean);
    this.CFURLCreateWithFileSystemPathRelativeToBase = lib.declare("CFURLCreateWithFileSystemPathRelativeToBase", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFStringRef, this.CFURLPathStyle, this.Boolean, this.CFURLRef);
    this.CFURLCreateFromFileSystemRepresentationRelativeToBase = lib.declare("CFURLCreateFromFileSystemRepresentationRelativeToBase", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex, this.Boolean, this.CFURLRef);
    this.CFURLGetFileSystemRepresentation = lib.declare("CFURLGetFileSystemRepresentation", ctypes.default_abi, this.Boolean, this.CFURLRef, this.Boolean, this.UInt8.ptr, this.CFIndex);
    this.CFURLCopyAbsoluteURL = lib.declare("CFURLCopyAbsoluteURL", ctypes.default_abi, this.CFURLRef, this.CFURLRef);
    this.CFURLGetString = lib.declare("CFURLGetString", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLGetBaseURL = lib.declare("CFURLGetBaseURL", ctypes.default_abi, this.CFURLRef, this.CFURLRef);
    this.CFURLCanBeDecomposed = lib.declare("CFURLCanBeDecomposed", ctypes.default_abi, this.Boolean, this.CFURLRef);
    this.CFURLCopyScheme = lib.declare("CFURLCopyScheme", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLCopyNetLocation = lib.declare("CFURLCopyNetLocation", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLCopyPath = lib.declare("CFURLCopyPath", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLCopyStrictPath = lib.declare("CFURLCopyStrictPath", ctypes.default_abi, this.CFStringRef, this.CFURLRef, this.Boolean.ptr);
    this.CFURLCopyFileSystemPath = lib.declare("CFURLCopyFileSystemPath", ctypes.default_abi, this.CFStringRef, this.CFURLRef, this.CFURLPathStyle);
    this.CFURLHasDirectoryPath = lib.declare("CFURLHasDirectoryPath", ctypes.default_abi, this.Boolean, this.CFURLRef);
    this.CFURLCopyResourceSpecifier = lib.declare("CFURLCopyResourceSpecifier", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLCopyHostName = lib.declare("CFURLCopyHostName", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLGetPortNumber = lib.declare("CFURLGetPortNumber", ctypes.default_abi, this.SInt32, this.CFURLRef);
    this.CFURLCopyUserName = lib.declare("CFURLCopyUserName", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLCopyPassword = lib.declare("CFURLCopyPassword", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLCopyParameterString = lib.declare("CFURLCopyParameterString", ctypes.default_abi, this.CFStringRef, this.CFURLRef, this.CFStringRef);
    this.CFURLCopyQueryString = lib.declare("CFURLCopyQueryString", ctypes.default_abi, this.CFStringRef, this.CFURLRef, this.CFStringRef);
    this.CFURLCopyFragment = lib.declare("CFURLCopyFragment", ctypes.default_abi, this.CFStringRef, this.CFURLRef, this.CFStringRef);
    this.CFURLCopyLastPathComponent = lib.declare("CFURLCopyLastPathComponent", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLCopyPathExtension = lib.declare("CFURLCopyPathExtension", ctypes.default_abi, this.CFStringRef, this.CFURLRef);
    this.CFURLCreateCopyAppendingPathComponent = lib.declare("CFURLCreateCopyAppendingPathComponent", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFURLRef, this.CFStringRef, this.Boolean);
    this.CFURLCreateCopyDeletingLastPathComponent = lib.declare("CFURLCreateCopyDeletingLastPathComponent", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFURLRef);
    this.CFURLCreateCopyAppendingPathExtension = lib.declare("CFURLCreateCopyAppendingPathExtension", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFURLRef, this.CFStringRef);
    this.CFURLCreateCopyDeletingPathExtension = lib.declare("CFURLCreateCopyDeletingPathExtension", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFURLRef);
    this.CFURLGetBytes = lib.declare("CFURLGetBytes", ctypes.default_abi, this.CFIndex, this.CFURLRef, this.UInt8.ptr, this.CFIndex);
    this.kCFURLComponentScheme = 1;
    this.kCFURLComponentNetLocation = 2;
    this.kCFURLComponentPath = 3;
    this.kCFURLComponentResourceSpecifier = 4;
    this.kCFURLComponentUser = 5;
    this.kCFURLComponentPassword = 6;
    this.kCFURLComponentUserInfo = 7;
    this.kCFURLComponentHost = 8;
    this.kCFURLComponentPort = 9;
    this.kCFURLComponentParameterString = 10;
    this.kCFURLComponentQuery = 11;
    this.kCFURLComponentFragment = 12;
    this.CFURLComponentType = this.CFIndex;
    this.CFURLGetByteRangeForComponent = lib.declare("CFURLGetByteRangeForComponent", ctypes.default_abi, this.CFRange, this.CFURLRef, this.CFURLComponentType, this.CFRange.ptr);
    this.CFURLCreateStringByReplacingPercentEscapes = lib.declare("CFURLCreateStringByReplacingPercentEscapes", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef, this.CFStringRef);
    this.CFURLCreateStringByReplacingPercentEscapesUsingEncoding = lib.declare("CFURLCreateStringByReplacingPercentEscapesUsingEncoding", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef, this.CFStringRef, this.CFStringEncoding);
    this.CFURLCreateStringByAddingPercentEscapes = lib.declare("CFURLCreateStringByAddingPercentEscapes", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef, this.CFStringRef, this.CFStringRef, this.CFStringEncoding);
    this.CFURLCreateFileReferenceURL = lib.declare("CFURLCreateFileReferenceURL", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFURLRef, this.CFErrorRef.ptr);
    this.CFURLCreateFilePathURL = lib.declare("CFURLCreateFilePathURL", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFURLRef, this.CFErrorRef.ptr);
    this.CFURLCreateFromFSRef = lib.declare("CFURLCreateFromFSRef", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.FSRef.ptr);
    this.CFURLGetFSRef = lib.declare("CFURLGetFSRef", ctypes.default_abi, this.Boolean, this.CFURLRef, this.FSRef.ptr);
    this.CFURLCopyResourcePropertyForKey = lib.declare("CFURLCopyResourcePropertyForKey", ctypes.default_abi, this.Boolean, this.CFURLRef, this.CFStringRef, ctypes.void_t.ptr, this.CFErrorRef.ptr);
    this.CFURLCopyResourcePropertiesForKeys = lib.declare("CFURLCopyResourcePropertiesForKeys", ctypes.default_abi, this.CFDictionaryRef, this.CFURLRef, this.CFArrayRef, this.CFErrorRef.ptr);
    this.CFURLSetResourcePropertyForKey = lib.declare("CFURLSetResourcePropertyForKey", ctypes.default_abi, this.Boolean, this.CFURLRef, this.CFStringRef, this.CFTypeRef, this.CFErrorRef.ptr);
    this.CFURLSetResourcePropertiesForKeys = lib.declare("CFURLSetResourcePropertiesForKeys", ctypes.default_abi, this.Boolean, this.CFURLRef, this.CFDictionaryRef, this.CFErrorRef.ptr);
    this.CFURLClearResourcePropertyCacheForKey = lib.declare("CFURLClearResourcePropertyCacheForKey", ctypes.default_abi, ctypes.void_t, this.CFURLRef, this.CFStringRef);
    this.CFURLClearResourcePropertyCache = lib.declare("CFURLClearResourcePropertyCache", ctypes.default_abi, ctypes.void_t, this.CFURLRef);
    this.CFURLSetTemporaryResourcePropertyForKey = lib.declare("CFURLSetTemporaryResourcePropertyForKey", ctypes.default_abi, ctypes.void_t, this.CFURLRef, this.CFStringRef, this.CFTypeRef);
    this.CFURLResourceIsReachable = lib.declare("CFURLResourceIsReachable", ctypes.default_abi, this.Boolean, this.CFURLRef, this.CFErrorRef.ptr);
    this.kCFURLNameKey = lib.declare("kCFURLNameKey", this.CFStringRef);
    this.kCFURLLocalizedNameKey = lib.declare("kCFURLLocalizedNameKey", this.CFStringRef);
    this.kCFURLIsRegularFileKey = lib.declare("kCFURLIsRegularFileKey", this.CFStringRef);
    this.kCFURLIsDirectoryKey = lib.declare("kCFURLIsDirectoryKey", this.CFStringRef);
    this.kCFURLIsSymbolicLinkKey = lib.declare("kCFURLIsSymbolicLinkKey", this.CFStringRef);
    this.kCFURLIsVolumeKey = lib.declare("kCFURLIsVolumeKey", this.CFStringRef);
    this.kCFURLIsPackageKey = lib.declare("kCFURLIsPackageKey", this.CFStringRef);
    this.kCFURLIsSystemImmutableKey = lib.declare("kCFURLIsSystemImmutableKey", this.CFStringRef);
    this.kCFURLIsUserImmutableKey = lib.declare("kCFURLIsUserImmutableKey", this.CFStringRef);
    this.kCFURLIsHiddenKey = lib.declare("kCFURLIsHiddenKey", this.CFStringRef);
    this.kCFURLHasHiddenExtensionKey = lib.declare("kCFURLHasHiddenExtensionKey", this.CFStringRef);
    this.kCFURLCreationDateKey = lib.declare("kCFURLCreationDateKey", this.CFStringRef);
    this.kCFURLContentAccessDateKey = lib.declare("kCFURLContentAccessDateKey", this.CFStringRef);
    this.kCFURLContentModificationDateKey = lib.declare("kCFURLContentModificationDateKey", this.CFStringRef);
    this.kCFURLAttributeModificationDateKey = lib.declare("kCFURLAttributeModificationDateKey", this.CFStringRef);
    this.kCFURLLinkCountKey = lib.declare("kCFURLLinkCountKey", this.CFStringRef);
    this.kCFURLParentDirectoryURLKey = lib.declare("kCFURLParentDirectoryURLKey", this.CFStringRef);
    this.kCFURLVolumeURLKey = lib.declare("kCFURLVolumeURLKey", this.CFStringRef);
    this.kCFURLTypeIdentifierKey = lib.declare("kCFURLTypeIdentifierKey", this.CFStringRef);
    this.kCFURLLocalizedTypeDescriptionKey = lib.declare("kCFURLLocalizedTypeDescriptionKey", this.CFStringRef);
    this.kCFURLLabelNumberKey = lib.declare("kCFURLLabelNumberKey", this.CFStringRef);
    this.kCFURLLabelColorKey = lib.declare("kCFURLLabelColorKey", this.CFStringRef);
    this.kCFURLLocalizedLabelKey = lib.declare("kCFURLLocalizedLabelKey", this.CFStringRef);
    this.kCFURLEffectiveIconKey = lib.declare("kCFURLEffectiveIconKey", this.CFStringRef);
    this.kCFURLCustomIconKey = lib.declare("kCFURLCustomIconKey", this.CFStringRef);
    this.kCFURLFileSizeKey = lib.declare("kCFURLFileSizeKey", this.CFStringRef);
    this.kCFURLFileAllocatedSizeKey = lib.declare("kCFURLFileAllocatedSizeKey", this.CFStringRef);
    this.kCFURLIsAliasFileKey = lib.declare("kCFURLIsAliasFileKey", this.CFStringRef);
    this.kCFURLVolumeLocalizedFormatDescriptionKey = lib.declare("kCFURLVolumeLocalizedFormatDescriptionKey", this.CFStringRef);
    this.kCFURLVolumeTotalCapacityKey = lib.declare("kCFURLVolumeTotalCapacityKey", this.CFStringRef);
    this.kCFURLVolumeAvailableCapacityKey = lib.declare("kCFURLVolumeAvailableCapacityKey", this.CFStringRef);
    this.kCFURLVolumeResourceCountKey = lib.declare("kCFURLVolumeResourceCountKey", this.CFStringRef);
    this.kCFURLVolumeSupportsPersistentIDsKey = lib.declare("kCFURLVolumeSupportsPersistentIDsKey", this.CFStringRef);
    this.kCFURLVolumeSupportsSymbolicLinksKey = lib.declare("kCFURLVolumeSupportsSymbolicLinksKey", this.CFStringRef);
    this.kCFURLVolumeSupportsHardLinksKey = lib.declare("kCFURLVolumeSupportsHardLinksKey", this.CFStringRef);
    this.kCFURLVolumeSupportsJournalingKey = lib.declare("kCFURLVolumeSupportsJournalingKey", this.CFStringRef);
    this.kCFURLVolumeIsJournalingKey = lib.declare("kCFURLVolumeIsJournalingKey", this.CFStringRef);
    this.kCFURLVolumeSupportsSparseFilesKey = lib.declare("kCFURLVolumeSupportsSparseFilesKey", this.CFStringRef);
    this.kCFURLVolumeSupportsZeroRunsKey = lib.declare("kCFURLVolumeSupportsZeroRunsKey", this.CFStringRef);
    this.kCFURLVolumeSupportsCaseSensitiveNamesKey = lib.declare("kCFURLVolumeSupportsCaseSensitiveNamesKey", this.CFStringRef);
    this.kCFURLVolumeSupportsCasePreservedNamesKey = lib.declare("kCFURLVolumeSupportsCasePreservedNamesKey", this.CFStringRef);
    this.kCFURLBookmarkCreationPreferFileIDResolutionMask = 256;
    this.kCFURLBookmarkCreationMinimalBookmarkMask = 512;
    this.kCFURLBookmarkCreationSuitableForBookmarkFile = 1024;
    this.CFURLBookmarkCreationOptions = this.CFOptionFlags;
    this.kCFBookmarkResolutionWithoutUIMask = 256;
    this.kCFBookmarkResolutionWithoutMountingMask = 512;
    this.CFURLBookmarkResolutionOptions = this.CFOptionFlags;
    this.CFURLBookmarkFileCreationOptions = this.CFOptionFlags;
    this.CFURLCreateBookmarkData = lib.declare("CFURLCreateBookmarkData", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFURLRef, this.CFURLBookmarkCreationOptions, this.CFArrayRef, this.CFURLRef, this.CFErrorRef.ptr);
    this.CFURLCreateByResolvingBookmarkData = lib.declare("CFURLCreateByResolvingBookmarkData", ctypes.default_abi, this.CFURLRef, this.CFAllocatorRef, this.CFDataRef, this.CFURLBookmarkResolutionOptions, this.CFURLRef, this.CFArrayRef, this.Boolean.ptr, this.CFErrorRef.ptr);
    this.CFURLCreateResourcePropertiesForKeysFromBookmarkData = lib.declare("CFURLCreateResourcePropertiesForKeysFromBookmarkData", ctypes.default_abi, this.CFDictionaryRef, this.CFAllocatorRef, this.CFArrayRef, this.CFDataRef);
    this.CFURLCreateResourcePropertyForKeyFromBookmarkData = lib.declare("CFURLCreateResourcePropertyForKeyFromBookmarkData", ctypes.default_abi, this.CFTypeRef, this.CFAllocatorRef, this.CFStringRef, this.CFDataRef);
    this.CFURLCreateBookmarkDataFromFile = lib.declare("CFURLCreateBookmarkDataFromFile", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFURLRef, this.CFErrorRef.ptr);
    this.CFURLWriteBookmarkDataToFile = lib.declare("CFURLWriteBookmarkDataToFile", ctypes.default_abi, this.Boolean, this.CFDataRef, this.CFURLRef, this.CFURLBookmarkFileCreationOptions, this.CFErrorRef.ptr);
    this.CFURLCreateBookmarkDataFromAliasRecord = lib.declare("CFURLCreateBookmarkDataFromAliasRecord", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFDataRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFMessagePort.h
function CFMessagePort_h(lib) {
    CFData_h.call(this, lib);
    CFDate_h.call(this, lib);
    CFRunLoop_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFMESSAGEPORT_H)
        return;
    this._CFMESSAGEPORT_H = true;

    this.__CFMessagePort = new ctypes.StructType("__CFMessagePort");
    this.CFMessagePortRef = this.__CFMessagePort.ptr;
    this.kCFMessagePortSuccess = 0;
    this.kCFMessagePortSendTimeout = -1;
    this.kCFMessagePortReceiveTimeout = -2;
    this.kCFMessagePortIsInvalid = -3;
    this.kCFMessagePortTransportError = -4;
    this.kCFMessagePortBecameInvalidError = -5;
    this.CFMessagePortContext = new ctypes.StructType("CFMessagePortContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFMessagePortCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFDataRef, [this.CFMessagePortRef, this.SInt32, this.CFDataRef, ctypes.void_t.ptr]).ptr;
    this.CFMessagePortInvalidationCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFMessagePortRef, ctypes.void_t.ptr]).ptr;
    this.CFMessagePortGetTypeID = lib.declare("CFMessagePortGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFMessagePortCreateLocal = lib.declare("CFMessagePortCreateLocal", ctypes.default_abi, this.CFMessagePortRef, this.CFAllocatorRef, this.CFStringRef, this.CFMessagePortCallBack, this.CFMessagePortContext.ptr, this.Boolean.ptr);
    this.CFMessagePortCreateRemote = lib.declare("CFMessagePortCreateRemote", ctypes.default_abi, this.CFMessagePortRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFMessagePortIsRemote = lib.declare("CFMessagePortIsRemote", ctypes.default_abi, this.Boolean, this.CFMessagePortRef);
    this.CFMessagePortGetName = lib.declare("CFMessagePortGetName", ctypes.default_abi, this.CFStringRef, this.CFMessagePortRef);
    this.CFMessagePortSetName = lib.declare("CFMessagePortSetName", ctypes.default_abi, this.Boolean, this.CFMessagePortRef, this.CFStringRef);
    this.CFMessagePortGetContext = lib.declare("CFMessagePortGetContext", ctypes.default_abi, ctypes.void_t, this.CFMessagePortRef, this.CFMessagePortContext.ptr);
    this.CFMessagePortInvalidate = lib.declare("CFMessagePortInvalidate", ctypes.default_abi, ctypes.void_t, this.CFMessagePortRef);
    this.CFMessagePortIsValid = lib.declare("CFMessagePortIsValid", ctypes.default_abi, this.Boolean, this.CFMessagePortRef);
    this.CFMessagePortGetInvalidationCallBack = lib.declare("CFMessagePortGetInvalidationCallBack", ctypes.default_abi, this.CFMessagePortInvalidationCallBack, this.CFMessagePortRef);
    this.CFMessagePortSetInvalidationCallBack = lib.declare("CFMessagePortSetInvalidationCallBack", ctypes.default_abi, ctypes.void_t, this.CFMessagePortRef, this.CFMessagePortInvalidationCallBack);
    this.CFMessagePortSendRequest = lib.declare("CFMessagePortSendRequest", ctypes.default_abi, this.SInt32, this.CFMessagePortRef, this.SInt32, this.CFDataRef, this.CFTimeInterval, this.CFTimeInterval, this.CFStringRef, this.CFDataRef.ptr);
    this.CFMessagePortCreateRunLoopSource = lib.declare("CFMessagePortCreateRunLoopSource", ctypes.default_abi, this.CFRunLoopSourceRef, this.CFAllocatorRef, this.CFMessagePortRef, this.CFIndex);
    // Dropping declaration of 'CFMessagePortSetDispatchQueue': 'dispatch_queue_t' defined out of scope
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFDictionary.h
function CFDictionary_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFDICTIONARY_H)
        return;
    this._CFDICTIONARY_H = true;

    this.CFDictionaryRetainCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr;
    this.CFDictionaryReleaseCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr;
    this.CFDictionaryCopyDescriptionCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr;
    this.CFDictionaryEqualCallBack = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CFDictionaryHashCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFHashCode, [ctypes.void_t.ptr]).ptr;
    this.CFDictionaryKeyCallBacks = new ctypes.StructType("CFDictionaryKeyCallBacks", [{version: this.CFIndex}, {retain: this.CFDictionaryRetainCallBack}, {release: this.CFDictionaryReleaseCallBack}, {copyDescription: this.CFDictionaryCopyDescriptionCallBack}, {equal: this.CFDictionaryEqualCallBack}, {hash: this.CFDictionaryHashCallBack}]);
    this.kCFTypeDictionaryKeyCallBacks = lib.declare("kCFTypeDictionaryKeyCallBacks", this.CFDictionaryKeyCallBacks);
    this.kCFCopyStringDictionaryKeyCallBacks = lib.declare("kCFCopyStringDictionaryKeyCallBacks", this.CFDictionaryKeyCallBacks);
    this.CFDictionaryValueCallBacks = new ctypes.StructType("CFDictionaryValueCallBacks", [{version: this.CFIndex}, {retain: this.CFDictionaryRetainCallBack}, {release: this.CFDictionaryReleaseCallBack}, {copyDescription: this.CFDictionaryCopyDescriptionCallBack}, {equal: this.CFDictionaryEqualCallBack}]);
    this.kCFTypeDictionaryValueCallBacks = lib.declare("kCFTypeDictionaryValueCallBacks", this.CFDictionaryValueCallBacks);
    this.CFDictionaryApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFDictionary = new ctypes.StructType("__CFDictionary");
    this.CFDictionaryRef = this.__CFDictionary.ptr;
    this.CFMutableDictionaryRef = this.__CFDictionary.ptr;
    this.CFDictionaryGetTypeID = lib.declare("CFDictionaryGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFDictionaryCreate = lib.declare("CFDictionaryCreate", ctypes.default_abi, this.CFDictionaryRef, this.CFAllocatorRef, ctypes.void_t.ptr.ptr, ctypes.void_t.ptr.ptr, this.CFIndex, this.CFDictionaryKeyCallBacks.ptr, this.CFDictionaryValueCallBacks.ptr);
    this.CFDictionaryCreateCopy = lib.declare("CFDictionaryCreateCopy", ctypes.default_abi, this.CFDictionaryRef, this.CFAllocatorRef, this.CFDictionaryRef);
    this.CFDictionaryCreateMutable = lib.declare("CFDictionaryCreateMutable", ctypes.default_abi, this.CFMutableDictionaryRef, this.CFAllocatorRef, this.CFIndex, this.CFDictionaryKeyCallBacks.ptr, this.CFDictionaryValueCallBacks.ptr);
    this.CFDictionaryCreateMutableCopy = lib.declare("CFDictionaryCreateMutableCopy", ctypes.default_abi, this.CFMutableDictionaryRef, this.CFAllocatorRef, this.CFIndex, this.CFDictionaryRef);
    this.CFDictionaryGetCount = lib.declare("CFDictionaryGetCount", ctypes.default_abi, this.CFIndex, this.CFDictionaryRef);
    this.CFDictionaryGetCountOfKey = lib.declare("CFDictionaryGetCountOfKey", ctypes.default_abi, this.CFIndex, this.CFDictionaryRef, ctypes.void_t.ptr);
    this.CFDictionaryGetCountOfValue = lib.declare("CFDictionaryGetCountOfValue", ctypes.default_abi, this.CFIndex, this.CFDictionaryRef, ctypes.void_t.ptr);
    this.CFDictionaryContainsKey = lib.declare("CFDictionaryContainsKey", ctypes.default_abi, this.Boolean, this.CFDictionaryRef, ctypes.void_t.ptr);
    this.CFDictionaryContainsValue = lib.declare("CFDictionaryContainsValue", ctypes.default_abi, this.Boolean, this.CFDictionaryRef, ctypes.void_t.ptr);
    this.CFDictionaryGetValue = lib.declare("CFDictionaryGetValue", ctypes.default_abi, ctypes.void_t.ptr, this.CFDictionaryRef, ctypes.void_t.ptr);
    this.CFDictionaryGetValueIfPresent = lib.declare("CFDictionaryGetValueIfPresent", ctypes.default_abi, this.Boolean, this.CFDictionaryRef, ctypes.void_t.ptr, ctypes.void_t.ptr.ptr);
    this.CFDictionaryGetKeysAndValues = lib.declare("CFDictionaryGetKeysAndValues", ctypes.default_abi, ctypes.void_t, this.CFDictionaryRef, ctypes.void_t.ptr.ptr, ctypes.void_t.ptr.ptr);
    this.CFDictionaryApplyFunction = lib.declare("CFDictionaryApplyFunction", ctypes.default_abi, ctypes.void_t, this.CFDictionaryRef, this.CFDictionaryApplierFunction, ctypes.void_t.ptr);
    this.CFDictionaryAddValue = lib.declare("CFDictionaryAddValue", ctypes.default_abi, ctypes.void_t, this.CFMutableDictionaryRef, ctypes.void_t.ptr, ctypes.void_t.ptr);
    this.CFDictionarySetValue = lib.declare("CFDictionarySetValue", ctypes.default_abi, ctypes.void_t, this.CFMutableDictionaryRef, ctypes.void_t.ptr, ctypes.void_t.ptr);
    this.CFDictionaryReplaceValue = lib.declare("CFDictionaryReplaceValue", ctypes.default_abi, ctypes.void_t, this.CFMutableDictionaryRef, ctypes.void_t.ptr, ctypes.void_t.ptr);
    this.CFDictionaryRemoveValue = lib.declare("CFDictionaryRemoveValue", ctypes.default_abi, ctypes.void_t, this.CFMutableDictionaryRef, ctypes.void_t.ptr);
    this.CFDictionaryRemoveAllValues = lib.declare("CFDictionaryRemoveAllValues", ctypes.default_abi, ctypes.void_t, this.CFMutableDictionaryRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFPreferences.h
function CFPreferences_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFPREFERENCES_H)
        return;
    this._CFPREFERENCES_H = true;

    this.kCFPreferencesAnyApplication = lib.declare("kCFPreferencesAnyApplication", this.CFStringRef);
    this.kCFPreferencesCurrentApplication = lib.declare("kCFPreferencesCurrentApplication", this.CFStringRef);
    this.kCFPreferencesAnyHost = lib.declare("kCFPreferencesAnyHost", this.CFStringRef);
    this.kCFPreferencesCurrentHost = lib.declare("kCFPreferencesCurrentHost", this.CFStringRef);
    this.kCFPreferencesAnyUser = lib.declare("kCFPreferencesAnyUser", this.CFStringRef);
    this.kCFPreferencesCurrentUser = lib.declare("kCFPreferencesCurrentUser", this.CFStringRef);
    this.CFPreferencesCopyAppValue = lib.declare("CFPreferencesCopyAppValue", ctypes.default_abi, this.CFPropertyListRef, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesGetAppBooleanValue = lib.declare("CFPreferencesGetAppBooleanValue", ctypes.default_abi, this.Boolean, this.CFStringRef, this.CFStringRef, this.Boolean.ptr);
    this.CFPreferencesGetAppIntegerValue = lib.declare("CFPreferencesGetAppIntegerValue", ctypes.default_abi, this.CFIndex, this.CFStringRef, this.CFStringRef, this.Boolean.ptr);
    this.CFPreferencesSetAppValue = lib.declare("CFPreferencesSetAppValue", ctypes.default_abi, ctypes.void_t, this.CFStringRef, this.CFPropertyListRef, this.CFStringRef);
    this.CFPreferencesAddSuitePreferencesToApp = lib.declare("CFPreferencesAddSuitePreferencesToApp", ctypes.default_abi, ctypes.void_t, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesRemoveSuitePreferencesFromApp = lib.declare("CFPreferencesRemoveSuitePreferencesFromApp", ctypes.default_abi, ctypes.void_t, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesAppSynchronize = lib.declare("CFPreferencesAppSynchronize", ctypes.default_abi, this.Boolean, this.CFStringRef);
    this.CFPreferencesCopyValue = lib.declare("CFPreferencesCopyValue", ctypes.default_abi, this.CFPropertyListRef, this.CFStringRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesCopyMultiple = lib.declare("CFPreferencesCopyMultiple", ctypes.default_abi, this.CFDictionaryRef, this.CFArrayRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesSetValue = lib.declare("CFPreferencesSetValue", ctypes.default_abi, ctypes.void_t, this.CFStringRef, this.CFPropertyListRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesSetMultiple = lib.declare("CFPreferencesSetMultiple", ctypes.default_abi, ctypes.void_t, this.CFDictionaryRef, this.CFArrayRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesSynchronize = lib.declare("CFPreferencesSynchronize", ctypes.default_abi, this.Boolean, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesCopyApplicationList = lib.declare("CFPreferencesCopyApplicationList", ctypes.default_abi, this.CFArrayRef, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesCopyKeyList = lib.declare("CFPreferencesCopyKeyList", ctypes.default_abi, this.CFArrayRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFPreferencesAppValueIsForced = lib.declare("CFPreferencesAppValueIsForced", ctypes.default_abi, this.Boolean, this.CFStringRef, this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFSet.h
function CFSet_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFSET_H)
        return;
    this._CFSET_H = true;

    this.CFSetRetainCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr;
    this.CFSetReleaseCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr;
    this.CFSetCopyDescriptionCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr;
    this.CFSetEqualCallBack = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CFSetHashCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFHashCode, [ctypes.void_t.ptr]).ptr;
    this.CFSetCallBacks = new ctypes.StructType("CFSetCallBacks", [{version: this.CFIndex}, {retain: this.CFSetRetainCallBack}, {release: this.CFSetReleaseCallBack}, {copyDescription: this.CFSetCopyDescriptionCallBack}, {equal: this.CFSetEqualCallBack}, {hash: this.CFSetHashCallBack}]);
    this.kCFTypeSetCallBacks = lib.declare("kCFTypeSetCallBacks", this.CFSetCallBacks);
    this.kCFCopyStringSetCallBacks = lib.declare("kCFCopyStringSetCallBacks", this.CFSetCallBacks);
    this.CFSetApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFSet = new ctypes.StructType("__CFSet");
    this.CFSetRef = this.__CFSet.ptr;
    this.CFMutableSetRef = this.__CFSet.ptr;
    this.CFSetGetTypeID = lib.declare("CFSetGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFSetCreate = lib.declare("CFSetCreate", ctypes.default_abi, this.CFSetRef, this.CFAllocatorRef, ctypes.void_t.ptr.ptr, this.CFIndex, this.CFSetCallBacks.ptr);
    this.CFSetCreateCopy = lib.declare("CFSetCreateCopy", ctypes.default_abi, this.CFSetRef, this.CFAllocatorRef, this.CFSetRef);
    this.CFSetCreateMutable = lib.declare("CFSetCreateMutable", ctypes.default_abi, this.CFMutableSetRef, this.CFAllocatorRef, this.CFIndex, this.CFSetCallBacks.ptr);
    this.CFSetCreateMutableCopy = lib.declare("CFSetCreateMutableCopy", ctypes.default_abi, this.CFMutableSetRef, this.CFAllocatorRef, this.CFIndex, this.CFSetRef);
    this.CFSetGetCount = lib.declare("CFSetGetCount", ctypes.default_abi, this.CFIndex, this.CFSetRef);
    this.CFSetGetCountOfValue = lib.declare("CFSetGetCountOfValue", ctypes.default_abi, this.CFIndex, this.CFSetRef, ctypes.void_t.ptr);
    this.CFSetContainsValue = lib.declare("CFSetContainsValue", ctypes.default_abi, this.Boolean, this.CFSetRef, ctypes.void_t.ptr);
    this.CFSetGetValue = lib.declare("CFSetGetValue", ctypes.default_abi, ctypes.void_t.ptr, this.CFSetRef, ctypes.void_t.ptr);
    this.CFSetGetValueIfPresent = lib.declare("CFSetGetValueIfPresent", ctypes.default_abi, this.Boolean, this.CFSetRef, ctypes.void_t.ptr, ctypes.void_t.ptr.ptr);
    this.CFSetGetValues = lib.declare("CFSetGetValues", ctypes.default_abi, ctypes.void_t, this.CFSetRef, ctypes.void_t.ptr.ptr);
    this.CFSetApplyFunction = lib.declare("CFSetApplyFunction", ctypes.default_abi, ctypes.void_t, this.CFSetRef, this.CFSetApplierFunction, ctypes.void_t.ptr);
    this.CFSetAddValue = lib.declare("CFSetAddValue", ctypes.default_abi, ctypes.void_t, this.CFMutableSetRef, ctypes.void_t.ptr);
    this.CFSetReplaceValue = lib.declare("CFSetReplaceValue", ctypes.default_abi, ctypes.void_t, this.CFMutableSetRef, ctypes.void_t.ptr);
    this.CFSetSetValue = lib.declare("CFSetSetValue", ctypes.default_abi, ctypes.void_t, this.CFMutableSetRef, ctypes.void_t.ptr);
    this.CFSetRemoveValue = lib.declare("CFSetRemoveValue", ctypes.default_abi, ctypes.void_t, this.CFMutableSetRef, ctypes.void_t.ptr);
    this.CFSetRemoveAllValues = lib.declare("CFSetRemoveAllValues", ctypes.default_abi, ctypes.void_t, this.CFMutableSetRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFLocale.h
function CFLocale_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CFLOCALE_H)
        return;
    this._CFLOCALE_H = true;

    this.__CFLocale = new ctypes.StructType("__CFLocale");
    this.CFLocaleRef = this.__CFLocale.ptr;
    this.CFLocaleGetTypeID = lib.declare("CFLocaleGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFLocaleGetSystem = lib.declare("CFLocaleGetSystem", ctypes.default_abi, this.CFLocaleRef);
    this.CFLocaleCopyCurrent = lib.declare("CFLocaleCopyCurrent", ctypes.default_abi, this.CFLocaleRef);
    this.CFLocaleCopyAvailableLocaleIdentifiers = lib.declare("CFLocaleCopyAvailableLocaleIdentifiers", ctypes.default_abi, this.CFArrayRef);
    this.CFLocaleCopyISOLanguageCodes = lib.declare("CFLocaleCopyISOLanguageCodes", ctypes.default_abi, this.CFArrayRef);
    this.CFLocaleCopyISOCountryCodes = lib.declare("CFLocaleCopyISOCountryCodes", ctypes.default_abi, this.CFArrayRef);
    this.CFLocaleCopyISOCurrencyCodes = lib.declare("CFLocaleCopyISOCurrencyCodes", ctypes.default_abi, this.CFArrayRef);
    this.CFLocaleCopyCommonISOCurrencyCodes = lib.declare("CFLocaleCopyCommonISOCurrencyCodes", ctypes.default_abi, this.CFArrayRef);
    this.CFLocaleCopyPreferredLanguages = lib.declare("CFLocaleCopyPreferredLanguages", ctypes.default_abi, this.CFArrayRef);
    this.CFLocaleCreateCanonicalLanguageIdentifierFromString = lib.declare("CFLocaleCreateCanonicalLanguageIdentifierFromString", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFLocaleCreateCanonicalLocaleIdentifierFromString = lib.declare("CFLocaleCreateCanonicalLocaleIdentifierFromString", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes = lib.declare("CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.LangCode, this.RegionCode);
    // Dropping declaration of 'CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode': 'uint32_t' defined out of scope
    // Dropping declaration of 'CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier': 'uint32_t' defined out of scope
    this.kCFLocaleLanguageDirectionUnknown = 0;
    this.kCFLocaleLanguageDirectionLeftToRight = 1;
    this.kCFLocaleLanguageDirectionRightToLeft = 2;
    this.kCFLocaleLanguageDirectionTopToBottom = 3;
    this.kCFLocaleLanguageDirectionBottomToTop = 4;
    this.CFLocaleLanguageDirection = this.CFIndex;
    this.CFLocaleGetLanguageCharacterDirection = lib.declare("CFLocaleGetLanguageCharacterDirection", ctypes.default_abi, this.CFLocaleLanguageDirection, this.CFStringRef);
    this.CFLocaleGetLanguageLineDirection = lib.declare("CFLocaleGetLanguageLineDirection", ctypes.default_abi, this.CFLocaleLanguageDirection, this.CFStringRef);
    this.CFLocaleCreateComponentsFromLocaleIdentifier = lib.declare("CFLocaleCreateComponentsFromLocaleIdentifier", ctypes.default_abi, this.CFDictionaryRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFLocaleCreateLocaleIdentifierFromComponents = lib.declare("CFLocaleCreateLocaleIdentifierFromComponents", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFDictionaryRef);
    this.CFLocaleCreate = lib.declare("CFLocaleCreate", ctypes.default_abi, this.CFLocaleRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFLocaleCreateCopy = lib.declare("CFLocaleCreateCopy", ctypes.default_abi, this.CFLocaleRef, this.CFAllocatorRef, this.CFLocaleRef);
    this.CFLocaleGetIdentifier = lib.declare("CFLocaleGetIdentifier", ctypes.default_abi, this.CFStringRef, this.CFLocaleRef);
    this.CFLocaleGetValue = lib.declare("CFLocaleGetValue", ctypes.default_abi, this.CFTypeRef, this.CFLocaleRef, this.CFStringRef);
    this.CFLocaleCopyDisplayNameForPropertyValue = lib.declare("CFLocaleCopyDisplayNameForPropertyValue", ctypes.default_abi, this.CFStringRef, this.CFLocaleRef, this.CFStringRef, this.CFStringRef);
    this.kCFLocaleCurrentLocaleDidChangeNotification = lib.declare("kCFLocaleCurrentLocaleDidChangeNotification", this.CFStringRef);
    this.kCFLocaleIdentifier = lib.declare("kCFLocaleIdentifier", this.CFStringRef);
    this.kCFLocaleLanguageCode = lib.declare("kCFLocaleLanguageCode", this.CFStringRef);
    this.kCFLocaleCountryCode = lib.declare("kCFLocaleCountryCode", this.CFStringRef);
    this.kCFLocaleScriptCode = lib.declare("kCFLocaleScriptCode", this.CFStringRef);
    this.kCFLocaleVariantCode = lib.declare("kCFLocaleVariantCode", this.CFStringRef);
    this.kCFLocaleExemplarCharacterSet = lib.declare("kCFLocaleExemplarCharacterSet", this.CFStringRef);
    this.kCFLocaleCalendarIdentifier = lib.declare("kCFLocaleCalendarIdentifier", this.CFStringRef);
    this.kCFLocaleCalendar = lib.declare("kCFLocaleCalendar", this.CFStringRef);
    this.kCFLocaleCollationIdentifier = lib.declare("kCFLocaleCollationIdentifier", this.CFStringRef);
    this.kCFLocaleUsesMetricSystem = lib.declare("kCFLocaleUsesMetricSystem", this.CFStringRef);
    this.kCFLocaleMeasurementSystem = lib.declare("kCFLocaleMeasurementSystem", this.CFStringRef);
    this.kCFLocaleDecimalSeparator = lib.declare("kCFLocaleDecimalSeparator", this.CFStringRef);
    this.kCFLocaleGroupingSeparator = lib.declare("kCFLocaleGroupingSeparator", this.CFStringRef);
    this.kCFLocaleCurrencySymbol = lib.declare("kCFLocaleCurrencySymbol", this.CFStringRef);
    this.kCFLocaleCurrencyCode = lib.declare("kCFLocaleCurrencyCode", this.CFStringRef);
    this.kCFLocaleCollatorIdentifier = lib.declare("kCFLocaleCollatorIdentifier", this.CFStringRef);
    this.kCFLocaleQuotationBeginDelimiterKey = lib.declare("kCFLocaleQuotationBeginDelimiterKey", this.CFStringRef);
    this.kCFLocaleQuotationEndDelimiterKey = lib.declare("kCFLocaleQuotationEndDelimiterKey", this.CFStringRef);
    this.kCFLocaleAlternateQuotationBeginDelimiterKey = lib.declare("kCFLocaleAlternateQuotationBeginDelimiterKey", this.CFStringRef);
    this.kCFLocaleAlternateQuotationEndDelimiterKey = lib.declare("kCFLocaleAlternateQuotationEndDelimiterKey", this.CFStringRef);
    this.kCFGregorianCalendar = lib.declare("kCFGregorianCalendar", this.CFStringRef);
    this.kCFBuddhistCalendar = lib.declare("kCFBuddhistCalendar", this.CFStringRef);
    this.kCFChineseCalendar = lib.declare("kCFChineseCalendar", this.CFStringRef);
    this.kCFHebrewCalendar = lib.declare("kCFHebrewCalendar", this.CFStringRef);
    this.kCFIslamicCalendar = lib.declare("kCFIslamicCalendar", this.CFStringRef);
    this.kCFIslamicCivilCalendar = lib.declare("kCFIslamicCivilCalendar", this.CFStringRef);
    this.kCFJapaneseCalendar = lib.declare("kCFJapaneseCalendar", this.CFStringRef);
    this.kCFRepublicOfChinaCalendar = lib.declare("kCFRepublicOfChinaCalendar", this.CFStringRef);
    this.kCFPersianCalendar = lib.declare("kCFPersianCalendar", this.CFStringRef);
    this.kCFIndianCalendar = lib.declare("kCFIndianCalendar", this.CFStringRef);
    this.kCFISO8601Calendar = lib.declare("kCFISO8601Calendar", this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFUserNotification.h
function CFUserNotification_h(lib) {
    CFDate_h.call(this, lib);
    CFRunLoop_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFUSERNOTIFICATION_H)
        return;
    this._CFUSERNOTIFICATION_H = true;

    this.__CFUserNotification = new ctypes.StructType("__CFUserNotification");
    this.CFUserNotificationRef = this.__CFUserNotification.ptr;
    this.CFUserNotificationCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFUserNotificationRef, this.CFOptionFlags]).ptr;
    this.CFUserNotificationGetTypeID = lib.declare("CFUserNotificationGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFUserNotificationCreate = lib.declare("CFUserNotificationCreate", ctypes.default_abi, this.CFUserNotificationRef, this.CFAllocatorRef, this.CFTimeInterval, this.CFOptionFlags, this.SInt32.ptr, this.CFDictionaryRef);
    this.CFUserNotificationReceiveResponse = lib.declare("CFUserNotificationReceiveResponse", ctypes.default_abi, this.SInt32, this.CFUserNotificationRef, this.CFTimeInterval, this.CFOptionFlags.ptr);
    this.CFUserNotificationGetResponseValue = lib.declare("CFUserNotificationGetResponseValue", ctypes.default_abi, this.CFStringRef, this.CFUserNotificationRef, this.CFStringRef, this.CFIndex);
    this.CFUserNotificationGetResponseDictionary = lib.declare("CFUserNotificationGetResponseDictionary", ctypes.default_abi, this.CFDictionaryRef, this.CFUserNotificationRef);
    this.CFUserNotificationUpdate = lib.declare("CFUserNotificationUpdate", ctypes.default_abi, this.SInt32, this.CFUserNotificationRef, this.CFTimeInterval, this.CFOptionFlags, this.CFDictionaryRef);
    this.CFUserNotificationCancel = lib.declare("CFUserNotificationCancel", ctypes.default_abi, this.SInt32, this.CFUserNotificationRef);
    this.CFUserNotificationCreateRunLoopSource = lib.declare("CFUserNotificationCreateRunLoopSource", ctypes.default_abi, this.CFRunLoopSourceRef, this.CFAllocatorRef, this.CFUserNotificationRef, this.CFUserNotificationCallBack, this.CFIndex);
    this.CFUserNotificationDisplayNotice = lib.declare("CFUserNotificationDisplayNotice", ctypes.default_abi, this.SInt32, this.CFTimeInterval, this.CFOptionFlags, this.CFURLRef, this.CFURLRef, this.CFURLRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFUserNotificationDisplayAlert = lib.declare("CFUserNotificationDisplayAlert", ctypes.default_abi, this.SInt32, this.CFTimeInterval, this.CFOptionFlags, this.CFURLRef, this.CFURLRef, this.CFURLRef, this.CFStringRef, this.CFStringRef, this.CFStringRef, this.CFStringRef, this.CFStringRef, this.CFOptionFlags.ptr);
    this.kCFUserNotificationStopAlertLevel = 0;
    this.kCFUserNotificationNoteAlertLevel = 1;
    this.kCFUserNotificationCautionAlertLevel = 2;
    this.kCFUserNotificationPlainAlertLevel = 3;
    this.kCFUserNotificationDefaultResponse = 0;
    this.kCFUserNotificationAlternateResponse = 1;
    this.kCFUserNotificationOtherResponse = 2;
    this.kCFUserNotificationCancelResponse = 3;
    this.kCFUserNotificationNoDefaultButtonFlag = 32;
    this.kCFUserNotificationUseRadioButtonsFlag = 64;
    // Dropping inline function 'CFUserNotificationCheckBoxChecked'.
    // Dropping inline function 'CFUserNotificationSecureTextField'.
    // Dropping inline function 'CFUserNotificationPopUpSelection'.
    this.kCFUserNotificationIconURLKey = lib.declare("kCFUserNotificationIconURLKey", this.CFStringRef);
    this.kCFUserNotificationSoundURLKey = lib.declare("kCFUserNotificationSoundURLKey", this.CFStringRef);
    this.kCFUserNotificationLocalizationURLKey = lib.declare("kCFUserNotificationLocalizationURLKey", this.CFStringRef);
    this.kCFUserNotificationAlertHeaderKey = lib.declare("kCFUserNotificationAlertHeaderKey", this.CFStringRef);
    this.kCFUserNotificationAlertMessageKey = lib.declare("kCFUserNotificationAlertMessageKey", this.CFStringRef);
    this.kCFUserNotificationDefaultButtonTitleKey = lib.declare("kCFUserNotificationDefaultButtonTitleKey", this.CFStringRef);
    this.kCFUserNotificationAlternateButtonTitleKey = lib.declare("kCFUserNotificationAlternateButtonTitleKey", this.CFStringRef);
    this.kCFUserNotificationOtherButtonTitleKey = lib.declare("kCFUserNotificationOtherButtonTitleKey", this.CFStringRef);
    this.kCFUserNotificationProgressIndicatorValueKey = lib.declare("kCFUserNotificationProgressIndicatorValueKey", this.CFStringRef);
    this.kCFUserNotificationPopUpTitlesKey = lib.declare("kCFUserNotificationPopUpTitlesKey", this.CFStringRef);
    this.kCFUserNotificationTextFieldTitlesKey = lib.declare("kCFUserNotificationTextFieldTitlesKey", this.CFStringRef);
    this.kCFUserNotificationCheckBoxTitlesKey = lib.declare("kCFUserNotificationCheckBoxTitlesKey", this.CFStringRef);
    this.kCFUserNotificationTextFieldValuesKey = lib.declare("kCFUserNotificationTextFieldValuesKey", this.CFStringRef);
    this.kCFUserNotificationPopUpSelectionKey = lib.declare("kCFUserNotificationPopUpSelectionKey", this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFBinaryHeap.h
function CFBinaryHeap_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFBINARYHEAP_H)
        return;
    this._CFBINARYHEAP_H = true;

    this.CFBinaryHeapCompareContext = new ctypes.StructType("CFBinaryHeapCompareContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFBinaryHeapCallBacks = new ctypes.StructType("CFBinaryHeapCallBacks", [{version: this.CFIndex}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}, {compare: new ctypes.FunctionType(ctypes.default_abi, this.CFComparisonResult, [ctypes.void_t.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr}]);
    this.kCFStringBinaryHeapCallBacks = lib.declare("kCFStringBinaryHeapCallBacks", this.CFBinaryHeapCallBacks);
    this.CFBinaryHeapApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFBinaryHeap = new ctypes.StructType("__CFBinaryHeap");
    this.CFBinaryHeapRef = this.__CFBinaryHeap.ptr;
    this.CFBinaryHeapGetTypeID = lib.declare("CFBinaryHeapGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFBinaryHeapCreate = lib.declare("CFBinaryHeapCreate", ctypes.default_abi, this.CFBinaryHeapRef, this.CFAllocatorRef, this.CFIndex, this.CFBinaryHeapCallBacks.ptr, this.CFBinaryHeapCompareContext.ptr);
    this.CFBinaryHeapCreateCopy = lib.declare("CFBinaryHeapCreateCopy", ctypes.default_abi, this.CFBinaryHeapRef, this.CFAllocatorRef, this.CFIndex, this.CFBinaryHeapRef);
    this.CFBinaryHeapGetCount = lib.declare("CFBinaryHeapGetCount", ctypes.default_abi, this.CFIndex, this.CFBinaryHeapRef);
    this.CFBinaryHeapGetCountOfValue = lib.declare("CFBinaryHeapGetCountOfValue", ctypes.default_abi, this.CFIndex, this.CFBinaryHeapRef, ctypes.void_t.ptr);
    this.CFBinaryHeapContainsValue = lib.declare("CFBinaryHeapContainsValue", ctypes.default_abi, this.Boolean, this.CFBinaryHeapRef, ctypes.void_t.ptr);
    this.CFBinaryHeapGetMinimum = lib.declare("CFBinaryHeapGetMinimum", ctypes.default_abi, ctypes.void_t.ptr, this.CFBinaryHeapRef);
    this.CFBinaryHeapGetMinimumIfPresent = lib.declare("CFBinaryHeapGetMinimumIfPresent", ctypes.default_abi, this.Boolean, this.CFBinaryHeapRef, ctypes.void_t.ptr.ptr);
    this.CFBinaryHeapGetValues = lib.declare("CFBinaryHeapGetValues", ctypes.default_abi, ctypes.void_t, this.CFBinaryHeapRef, ctypes.void_t.ptr.ptr);
    this.CFBinaryHeapApplyFunction = lib.declare("CFBinaryHeapApplyFunction", ctypes.default_abi, ctypes.void_t, this.CFBinaryHeapRef, this.CFBinaryHeapApplierFunction, ctypes.void_t.ptr);
    this.CFBinaryHeapAddValue = lib.declare("CFBinaryHeapAddValue", ctypes.default_abi, ctypes.void_t, this.CFBinaryHeapRef, ctypes.void_t.ptr);
    this.CFBinaryHeapRemoveMinimumValue = lib.declare("CFBinaryHeapRemoveMinimumValue", ctypes.default_abi, ctypes.void_t, this.CFBinaryHeapRef);
    this.CFBinaryHeapRemoveAllValues = lib.declare("CFBinaryHeapRemoveAllValues", ctypes.default_abi, ctypes.void_t, this.CFBinaryHeapRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFFileDescriptor.h
function CFFileDescriptor_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFRunLoop_h.call(this, lib);

    if (this._CFFILEDESCRIPTOR_H)
        return;
    this._CFFILEDESCRIPTOR_H = true;

    this.CFFileDescriptorNativeDescriptor = ctypes.int;
    this.__CFFileDescriptor = new ctypes.StructType("__CFFileDescriptor");
    this.CFFileDescriptorRef = this.__CFFileDescriptor.ptr;
    this.kCFFileDescriptorReadCallBack = 1;
    this.kCFFileDescriptorWriteCallBack = 2;
    this.CFFileDescriptorCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFFileDescriptorRef, this.CFOptionFlags, ctypes.void_t.ptr]).ptr;
    this.CFFileDescriptorContext = new ctypes.StructType("CFFileDescriptorContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFFileDescriptorGetTypeID = lib.declare("CFFileDescriptorGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFFileDescriptorCreate = lib.declare("CFFileDescriptorCreate", ctypes.default_abi, this.CFFileDescriptorRef, this.CFAllocatorRef, this.CFFileDescriptorNativeDescriptor, this.Boolean, this.CFFileDescriptorCallBack, this.CFFileDescriptorContext.ptr);
    this.CFFileDescriptorGetNativeDescriptor = lib.declare("CFFileDescriptorGetNativeDescriptor", ctypes.default_abi, this.CFFileDescriptorNativeDescriptor, this.CFFileDescriptorRef);
    this.CFFileDescriptorGetContext = lib.declare("CFFileDescriptorGetContext", ctypes.default_abi, ctypes.void_t, this.CFFileDescriptorRef, this.CFFileDescriptorContext.ptr);
    this.CFFileDescriptorEnableCallBacks = lib.declare("CFFileDescriptorEnableCallBacks", ctypes.default_abi, ctypes.void_t, this.CFFileDescriptorRef, this.CFOptionFlags);
    this.CFFileDescriptorDisableCallBacks = lib.declare("CFFileDescriptorDisableCallBacks", ctypes.default_abi, ctypes.void_t, this.CFFileDescriptorRef, this.CFOptionFlags);
    this.CFFileDescriptorInvalidate = lib.declare("CFFileDescriptorInvalidate", ctypes.default_abi, ctypes.void_t, this.CFFileDescriptorRef);
    this.CFFileDescriptorIsValid = lib.declare("CFFileDescriptorIsValid", ctypes.default_abi, this.Boolean, this.CFFileDescriptorRef);
    this.CFFileDescriptorCreateRunLoopSource = lib.declare("CFFileDescriptorCreateRunLoopSource", ctypes.default_abi, this.CFRunLoopSourceRef, this.CFAllocatorRef, this.CFFileDescriptorRef, this.CFIndex);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFRunLoop.h
function CFRunLoop_h(lib) {
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFDate_h.call(this, lib);

    if (this._CFRUNLOOP_H)
        return;
    this._CFRUNLOOP_H = true;

    this.__CFRunLoop = new ctypes.StructType("__CFRunLoop");
    this.CFRunLoopRef = this.__CFRunLoop.ptr;
    this.__CFRunLoopSource = new ctypes.StructType("__CFRunLoopSource");
    this.CFRunLoopSourceRef = this.__CFRunLoopSource.ptr;
    this.__CFRunLoopObserver = new ctypes.StructType("__CFRunLoopObserver");
    this.CFRunLoopObserverRef = this.__CFRunLoopObserver.ptr;
    this.__CFRunLoopTimer = new ctypes.StructType("__CFRunLoopTimer");
    this.CFRunLoopTimerRef = this.__CFRunLoopTimer.ptr;
    this.kCFRunLoopRunFinished = 1;
    this.kCFRunLoopRunStopped = 2;
    this.kCFRunLoopRunTimedOut = 3;
    this.kCFRunLoopRunHandledSource = 4;
    this.kCFRunLoopEntry = 1;
    this.kCFRunLoopBeforeTimers = 2;
    this.kCFRunLoopBeforeSources = 4;
    this.kCFRunLoopBeforeWaiting = 32;
    this.kCFRunLoopAfterWaiting = 64;
    this.kCFRunLoopExit = 128;
    this.kCFRunLoopAllActivities = 268435455;
    this.CFRunLoopActivity = this.CFOptionFlags;
    this.kCFRunLoopDefaultMode = lib.declare("kCFRunLoopDefaultMode", this.CFStringRef);
    this.kCFRunLoopCommonModes = lib.declare("kCFRunLoopCommonModes", this.CFStringRef);
    this.CFRunLoopGetTypeID = lib.declare("CFRunLoopGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFRunLoopGetCurrent = lib.declare("CFRunLoopGetCurrent", ctypes.default_abi, this.CFRunLoopRef);
    this.CFRunLoopGetMain = lib.declare("CFRunLoopGetMain", ctypes.default_abi, this.CFRunLoopRef);
    this.CFRunLoopCopyCurrentMode = lib.declare("CFRunLoopCopyCurrentMode", ctypes.default_abi, this.CFStringRef, this.CFRunLoopRef);
    this.CFRunLoopCopyAllModes = lib.declare("CFRunLoopCopyAllModes", ctypes.default_abi, this.CFArrayRef, this.CFRunLoopRef);
    this.CFRunLoopAddCommonMode = lib.declare("CFRunLoopAddCommonMode", ctypes.default_abi, ctypes.void_t, this.CFRunLoopRef, this.CFStringRef);
    this.CFRunLoopGetNextTimerFireDate = lib.declare("CFRunLoopGetNextTimerFireDate", ctypes.default_abi, this.CFAbsoluteTime, this.CFRunLoopRef, this.CFStringRef);
    this.CFRunLoopRun = lib.declare("CFRunLoopRun", ctypes.default_abi, ctypes.void_t);
    this.CFRunLoopRunInMode = lib.declare("CFRunLoopRunInMode", ctypes.default_abi, this.SInt32, this.CFStringRef, this.CFTimeInterval, this.Boolean);
    this.CFRunLoopIsWaiting = lib.declare("CFRunLoopIsWaiting", ctypes.default_abi, this.Boolean, this.CFRunLoopRef);
    this.CFRunLoopWakeUp = lib.declare("CFRunLoopWakeUp", ctypes.default_abi, ctypes.void_t, this.CFRunLoopRef);
    this.CFRunLoopStop = lib.declare("CFRunLoopStop", ctypes.default_abi, ctypes.void_t, this.CFRunLoopRef);
    this.CFRunLoopContainsSource = lib.declare("CFRunLoopContainsSource", ctypes.default_abi, this.Boolean, this.CFRunLoopRef, this.CFRunLoopSourceRef, this.CFStringRef);
    this.CFRunLoopAddSource = lib.declare("CFRunLoopAddSource", ctypes.default_abi, ctypes.void_t, this.CFRunLoopRef, this.CFRunLoopSourceRef, this.CFStringRef);
    this.CFRunLoopRemoveSource = lib.declare("CFRunLoopRemoveSource", ctypes.default_abi, ctypes.void_t, this.CFRunLoopRef, this.CFRunLoopSourceRef, this.CFStringRef);
    this.CFRunLoopContainsObserver = lib.declare("CFRunLoopContainsObserver", ctypes.default_abi, this.Boolean, this.CFRunLoopRef, this.CFRunLoopObserverRef, this.CFStringRef);
    this.CFRunLoopAddObserver = lib.declare("CFRunLoopAddObserver", ctypes.default_abi, ctypes.void_t, this.CFRunLoopRef, this.CFRunLoopObserverRef, this.CFStringRef);
    this.CFRunLoopRemoveObserver = lib.declare("CFRunLoopRemoveObserver", ctypes.default_abi, ctypes.void_t, this.CFRunLoopRef, this.CFRunLoopObserverRef, this.CFStringRef);
    this.CFRunLoopContainsTimer = lib.declare("CFRunLoopContainsTimer", ctypes.default_abi, this.Boolean, this.CFRunLoopRef, this.CFRunLoopTimerRef, this.CFStringRef);
    this.CFRunLoopAddTimer = lib.declare("CFRunLoopAddTimer", ctypes.default_abi, ctypes.void_t, this.CFRunLoopRef, this.CFRunLoopTimerRef, this.CFStringRef);
    this.CFRunLoopRemoveTimer = lib.declare("CFRunLoopRemoveTimer", ctypes.default_abi, ctypes.void_t, this.CFRunLoopRef, this.CFRunLoopTimerRef, this.CFStringRef);
    this.CFRunLoopSourceContext = new ctypes.StructType("CFRunLoopSourceContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}, {equal: new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr}, {hash: new ctypes.FunctionType(ctypes.default_abi, this.CFHashCode, [ctypes.void_t.ptr]).ptr}, {schedule: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CFRunLoopRef, this.CFStringRef]).ptr}, {cancel: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CFRunLoopRef, this.CFStringRef]).ptr}, {perform: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}]);
    this.CFRunLoopSourceContext1 = new ctypes.StructType("CFRunLoopSourceContext1", []);
    this.CFRunLoopSourceGetTypeID = lib.declare("CFRunLoopSourceGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFRunLoopSourceCreate = lib.declare("CFRunLoopSourceCreate", ctypes.default_abi, this.CFRunLoopSourceRef, this.CFAllocatorRef, this.CFIndex, this.CFRunLoopSourceContext.ptr);
    this.CFRunLoopSourceGetOrder = lib.declare("CFRunLoopSourceGetOrder", ctypes.default_abi, this.CFIndex, this.CFRunLoopSourceRef);
    this.CFRunLoopSourceInvalidate = lib.declare("CFRunLoopSourceInvalidate", ctypes.default_abi, ctypes.void_t, this.CFRunLoopSourceRef);
    this.CFRunLoopSourceIsValid = lib.declare("CFRunLoopSourceIsValid", ctypes.default_abi, this.Boolean, this.CFRunLoopSourceRef);
    this.CFRunLoopSourceGetContext = lib.declare("CFRunLoopSourceGetContext", ctypes.default_abi, ctypes.void_t, this.CFRunLoopSourceRef, this.CFRunLoopSourceContext.ptr);
    this.CFRunLoopSourceSignal = lib.declare("CFRunLoopSourceSignal", ctypes.default_abi, ctypes.void_t, this.CFRunLoopSourceRef);
    this.CFRunLoopObserverContext = new ctypes.StructType("CFRunLoopObserverContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFRunLoopObserverCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFRunLoopObserverRef, this.CFRunLoopActivity, ctypes.void_t.ptr]).ptr;
    this.CFRunLoopObserverGetTypeID = lib.declare("CFRunLoopObserverGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFRunLoopObserverCreate = lib.declare("CFRunLoopObserverCreate", ctypes.default_abi, this.CFRunLoopObserverRef, this.CFAllocatorRef, this.CFOptionFlags, this.Boolean, this.CFIndex, this.CFRunLoopObserverCallBack, this.CFRunLoopObserverContext.ptr);
    this.CFRunLoopObserverGetActivities = lib.declare("CFRunLoopObserverGetActivities", ctypes.default_abi, this.CFOptionFlags, this.CFRunLoopObserverRef);
    this.CFRunLoopObserverDoesRepeat = lib.declare("CFRunLoopObserverDoesRepeat", ctypes.default_abi, this.Boolean, this.CFRunLoopObserverRef);
    this.CFRunLoopObserverGetOrder = lib.declare("CFRunLoopObserverGetOrder", ctypes.default_abi, this.CFIndex, this.CFRunLoopObserverRef);
    this.CFRunLoopObserverInvalidate = lib.declare("CFRunLoopObserverInvalidate", ctypes.default_abi, ctypes.void_t, this.CFRunLoopObserverRef);
    this.CFRunLoopObserverIsValid = lib.declare("CFRunLoopObserverIsValid", ctypes.default_abi, this.Boolean, this.CFRunLoopObserverRef);
    this.CFRunLoopObserverGetContext = lib.declare("CFRunLoopObserverGetContext", ctypes.default_abi, ctypes.void_t, this.CFRunLoopObserverRef, this.CFRunLoopObserverContext.ptr);
    this.CFRunLoopTimerContext = new ctypes.StructType("CFRunLoopTimerContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFRunLoopTimerCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFRunLoopTimerRef, ctypes.void_t.ptr]).ptr;
    this.CFRunLoopTimerGetTypeID = lib.declare("CFRunLoopTimerGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFRunLoopTimerCreate = lib.declare("CFRunLoopTimerCreate", ctypes.default_abi, this.CFRunLoopTimerRef, this.CFAllocatorRef, this.CFAbsoluteTime, this.CFTimeInterval, this.CFOptionFlags, this.CFIndex, this.CFRunLoopTimerCallBack, this.CFRunLoopTimerContext.ptr);
    this.CFRunLoopTimerGetNextFireDate = lib.declare("CFRunLoopTimerGetNextFireDate", ctypes.default_abi, this.CFAbsoluteTime, this.CFRunLoopTimerRef);
    this.CFRunLoopTimerSetNextFireDate = lib.declare("CFRunLoopTimerSetNextFireDate", ctypes.default_abi, ctypes.void_t, this.CFRunLoopTimerRef, this.CFAbsoluteTime);
    this.CFRunLoopTimerGetInterval = lib.declare("CFRunLoopTimerGetInterval", ctypes.default_abi, this.CFTimeInterval, this.CFRunLoopTimerRef);
    this.CFRunLoopTimerDoesRepeat = lib.declare("CFRunLoopTimerDoesRepeat", ctypes.default_abi, this.Boolean, this.CFRunLoopTimerRef);
    this.CFRunLoopTimerGetOrder = lib.declare("CFRunLoopTimerGetOrder", ctypes.default_abi, this.CFIndex, this.CFRunLoopTimerRef);
    this.CFRunLoopTimerInvalidate = lib.declare("CFRunLoopTimerInvalidate", ctypes.default_abi, ctypes.void_t, this.CFRunLoopTimerRef);
    this.CFRunLoopTimerIsValid = lib.declare("CFRunLoopTimerIsValid", ctypes.default_abi, this.Boolean, this.CFRunLoopTimerRef);
    this.CFRunLoopTimerGetContext = lib.declare("CFRunLoopTimerGetContext", ctypes.default_abi, ctypes.void_t, this.CFRunLoopTimerRef, this.CFRunLoopTimerContext.ptr);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFData.h
function CFData_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFDATA_H)
        return;
    this._CFDATA_H = true;

    this.__CFData = new ctypes.StructType("__CFData");
    this.CFDataRef = this.__CFData.ptr;
    this.CFMutableDataRef = this.__CFData.ptr;
    this.CFDataGetTypeID = lib.declare("CFDataGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFDataCreate = lib.declare("CFDataCreate", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex);
    this.CFDataCreateWithBytesNoCopy = lib.declare("CFDataCreateWithBytesNoCopy", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex, this.CFAllocatorRef);
    this.CFDataCreateCopy = lib.declare("CFDataCreateCopy", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFDataRef);
    this.CFDataCreateMutable = lib.declare("CFDataCreateMutable", ctypes.default_abi, this.CFMutableDataRef, this.CFAllocatorRef, this.CFIndex);
    this.CFDataCreateMutableCopy = lib.declare("CFDataCreateMutableCopy", ctypes.default_abi, this.CFMutableDataRef, this.CFAllocatorRef, this.CFIndex, this.CFDataRef);
    this.CFDataGetLength = lib.declare("CFDataGetLength", ctypes.default_abi, this.CFIndex, this.CFDataRef);
    this.CFDataGetBytePtr = lib.declare("CFDataGetBytePtr", ctypes.default_abi, this.UInt8.ptr, this.CFDataRef);
    this.CFDataGetMutableBytePtr = lib.declare("CFDataGetMutableBytePtr", ctypes.default_abi, this.UInt8.ptr, this.CFMutableDataRef);
    this.CFDataGetBytes = lib.declare("CFDataGetBytes", ctypes.default_abi, ctypes.void_t, this.CFDataRef, this.CFRange, this.UInt8.ptr);
    this.CFDataSetLength = lib.declare("CFDataSetLength", ctypes.default_abi, ctypes.void_t, this.CFMutableDataRef, this.CFIndex);
    this.CFDataIncreaseLength = lib.declare("CFDataIncreaseLength", ctypes.default_abi, ctypes.void_t, this.CFMutableDataRef, this.CFIndex);
    this.CFDataAppendBytes = lib.declare("CFDataAppendBytes", ctypes.default_abi, ctypes.void_t, this.CFMutableDataRef, this.UInt8.ptr, this.CFIndex);
    this.CFDataReplaceBytes = lib.declare("CFDataReplaceBytes", ctypes.default_abi, ctypes.void_t, this.CFMutableDataRef, this.CFRange, this.UInt8.ptr, this.CFIndex);
    this.CFDataDeleteBytes = lib.declare("CFDataDeleteBytes", ctypes.default_abi, ctypes.void_t, this.CFMutableDataRef, this.CFRange);
    this.kCFDataSearchBackwards = 1;
    this.kCFDataSearchAnchored = 2;
    this.CFDataSearchFlags = this.CFOptionFlags;
    this.CFDataFind = lib.declare("CFDataFind", ctypes.default_abi, this.CFRange, this.CFDataRef, this.CFDataRef, this.CFRange, this.CFDataSearchFlags);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFBundle.h
function CFBundle_h(lib) {
    CFError_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFBUNDLE_H)
        return;
    this._CFBUNDLE_H = true;

    this.__CFBundle = new ctypes.StructType("__CFBundle");
    this.CFBundleRef = this.__CFBundle.ptr;
    this.CFPlugInRef = this.__CFBundle.ptr;
    this.kCFBundleInfoDictionaryVersionKey = lib.declare("kCFBundleInfoDictionaryVersionKey", this.CFStringRef);
    this.kCFBundleExecutableKey = lib.declare("kCFBundleExecutableKey", this.CFStringRef);
    this.kCFBundleIdentifierKey = lib.declare("kCFBundleIdentifierKey", this.CFStringRef);
    this.kCFBundleVersionKey = lib.declare("kCFBundleVersionKey", this.CFStringRef);
    this.kCFBundleDevelopmentRegionKey = lib.declare("kCFBundleDevelopmentRegionKey", this.CFStringRef);
    this.kCFBundleNameKey = lib.declare("kCFBundleNameKey", this.CFStringRef);
    this.kCFBundleLocalizationsKey = lib.declare("kCFBundleLocalizationsKey", this.CFStringRef);
    this.CFBundleGetMainBundle = lib.declare("CFBundleGetMainBundle", ctypes.default_abi, this.CFBundleRef);
    this.CFBundleGetBundleWithIdentifier = lib.declare("CFBundleGetBundleWithIdentifier", ctypes.default_abi, this.CFBundleRef, this.CFStringRef);
    this.CFBundleGetAllBundles = lib.declare("CFBundleGetAllBundles", ctypes.default_abi, this.CFArrayRef);
    this.CFBundleGetTypeID = lib.declare("CFBundleGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFBundleCreate = lib.declare("CFBundleCreate", ctypes.default_abi, this.CFBundleRef, this.CFAllocatorRef, this.CFURLRef);
    this.CFBundleCreateBundlesFromDirectory = lib.declare("CFBundleCreateBundlesFromDirectory", ctypes.default_abi, this.CFArrayRef, this.CFAllocatorRef, this.CFURLRef, this.CFStringRef);
    this.CFBundleCopyBundleURL = lib.declare("CFBundleCopyBundleURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef);
    this.CFBundleGetValueForInfoDictionaryKey = lib.declare("CFBundleGetValueForInfoDictionaryKey", ctypes.default_abi, this.CFTypeRef, this.CFBundleRef, this.CFStringRef);
    this.CFBundleGetInfoDictionary = lib.declare("CFBundleGetInfoDictionary", ctypes.default_abi, this.CFDictionaryRef, this.CFBundleRef);
    this.CFBundleGetLocalInfoDictionary = lib.declare("CFBundleGetLocalInfoDictionary", ctypes.default_abi, this.CFDictionaryRef, this.CFBundleRef);
    this.CFBundleGetPackageInfo = lib.declare("CFBundleGetPackageInfo", ctypes.default_abi, ctypes.void_t, this.CFBundleRef, this.UInt32.ptr, this.UInt32.ptr);
    this.CFBundleGetIdentifier = lib.declare("CFBundleGetIdentifier", ctypes.default_abi, this.CFStringRef, this.CFBundleRef);
    this.CFBundleGetVersionNumber = lib.declare("CFBundleGetVersionNumber", ctypes.default_abi, this.UInt32, this.CFBundleRef);
    this.CFBundleGetDevelopmentRegion = lib.declare("CFBundleGetDevelopmentRegion", ctypes.default_abi, this.CFStringRef, this.CFBundleRef);
    this.CFBundleCopySupportFilesDirectoryURL = lib.declare("CFBundleCopySupportFilesDirectoryURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef);
    this.CFBundleCopyResourcesDirectoryURL = lib.declare("CFBundleCopyResourcesDirectoryURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef);
    this.CFBundleCopyPrivateFrameworksURL = lib.declare("CFBundleCopyPrivateFrameworksURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef);
    this.CFBundleCopySharedFrameworksURL = lib.declare("CFBundleCopySharedFrameworksURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef);
    this.CFBundleCopySharedSupportURL = lib.declare("CFBundleCopySharedSupportURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef);
    this.CFBundleCopyBuiltInPlugInsURL = lib.declare("CFBundleCopyBuiltInPlugInsURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef);
    this.CFBundleCopyInfoDictionaryInDirectory = lib.declare("CFBundleCopyInfoDictionaryInDirectory", ctypes.default_abi, this.CFDictionaryRef, this.CFURLRef);
    this.CFBundleGetPackageInfoInDirectory = lib.declare("CFBundleGetPackageInfoInDirectory", ctypes.default_abi, this.Boolean, this.CFURLRef, this.UInt32.ptr, this.UInt32.ptr);
    this.CFBundleCopyResourceURL = lib.declare("CFBundleCopyResourceURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFBundleCopyResourceURLsOfType = lib.declare("CFBundleCopyResourceURLsOfType", ctypes.default_abi, this.CFArrayRef, this.CFBundleRef, this.CFStringRef, this.CFStringRef);
    this.CFBundleCopyLocalizedString = lib.declare("CFBundleCopyLocalizedString", ctypes.default_abi, this.CFStringRef, this.CFBundleRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFBundleCopyResourceURLInDirectory = lib.declare("CFBundleCopyResourceURLInDirectory", ctypes.default_abi, this.CFURLRef, this.CFURLRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFBundleCopyResourceURLsOfTypeInDirectory = lib.declare("CFBundleCopyResourceURLsOfTypeInDirectory", ctypes.default_abi, this.CFArrayRef, this.CFURLRef, this.CFStringRef, this.CFStringRef);
    this.CFBundleCopyBundleLocalizations = lib.declare("CFBundleCopyBundleLocalizations", ctypes.default_abi, this.CFArrayRef, this.CFBundleRef);
    this.CFBundleCopyPreferredLocalizationsFromArray = lib.declare("CFBundleCopyPreferredLocalizationsFromArray", ctypes.default_abi, this.CFArrayRef, this.CFArrayRef);
    this.CFBundleCopyLocalizationsForPreferences = lib.declare("CFBundleCopyLocalizationsForPreferences", ctypes.default_abi, this.CFArrayRef, this.CFArrayRef, this.CFArrayRef);
    this.CFBundleCopyResourceURLForLocalization = lib.declare("CFBundleCopyResourceURLForLocalization", ctypes.default_abi, this.CFURLRef, this.CFBundleRef, this.CFStringRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFBundleCopyResourceURLsOfTypeForLocalization = lib.declare("CFBundleCopyResourceURLsOfTypeForLocalization", ctypes.default_abi, this.CFArrayRef, this.CFBundleRef, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.CFBundleCopyInfoDictionaryForURL = lib.declare("CFBundleCopyInfoDictionaryForURL", ctypes.default_abi, this.CFDictionaryRef, this.CFURLRef);
    this.CFBundleCopyLocalizationsForURL = lib.declare("CFBundleCopyLocalizationsForURL", ctypes.default_abi, this.CFArrayRef, this.CFURLRef);
    this.CFBundleCopyExecutableArchitecturesForURL = lib.declare("CFBundleCopyExecutableArchitecturesForURL", ctypes.default_abi, this.CFArrayRef, this.CFURLRef);
    this.CFBundleCopyExecutableURL = lib.declare("CFBundleCopyExecutableURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef);
    this.kCFBundleExecutableArchitectureI386 = 7;
    this.kCFBundleExecutableArchitecturePPC = 18;
    this.kCFBundleExecutableArchitectureX86_64 = 16777223;
    this.kCFBundleExecutableArchitecturePPC64 = 16777234;
    this.CFBundleCopyExecutableArchitectures = lib.declare("CFBundleCopyExecutableArchitectures", ctypes.default_abi, this.CFArrayRef, this.CFBundleRef);
    this.CFBundlePreflightExecutable = lib.declare("CFBundlePreflightExecutable", ctypes.default_abi, this.Boolean, this.CFBundleRef, this.CFErrorRef.ptr);
    this.CFBundleLoadExecutableAndReturnError = lib.declare("CFBundleLoadExecutableAndReturnError", ctypes.default_abi, this.Boolean, this.CFBundleRef, this.CFErrorRef.ptr);
    this.CFBundleLoadExecutable = lib.declare("CFBundleLoadExecutable", ctypes.default_abi, this.Boolean, this.CFBundleRef);
    this.CFBundleIsExecutableLoaded = lib.declare("CFBundleIsExecutableLoaded", ctypes.default_abi, this.Boolean, this.CFBundleRef);
    this.CFBundleUnloadExecutable = lib.declare("CFBundleUnloadExecutable", ctypes.default_abi, ctypes.void_t, this.CFBundleRef);
    this.CFBundleGetFunctionPointerForName = lib.declare("CFBundleGetFunctionPointerForName", ctypes.default_abi, ctypes.void_t.ptr, this.CFBundleRef, this.CFStringRef);
    this.CFBundleGetFunctionPointersForNames = lib.declare("CFBundleGetFunctionPointersForNames", ctypes.default_abi, ctypes.void_t, this.CFBundleRef, this.CFArrayRef, ctypes.void_t.ptr.ptr);
    this.CFBundleGetDataPointerForName = lib.declare("CFBundleGetDataPointerForName", ctypes.default_abi, ctypes.void_t.ptr, this.CFBundleRef, this.CFStringRef);
    this.CFBundleGetDataPointersForNames = lib.declare("CFBundleGetDataPointersForNames", ctypes.default_abi, ctypes.void_t, this.CFBundleRef, this.CFArrayRef, ctypes.void_t.ptr.ptr);
    this.CFBundleCopyAuxiliaryExecutableURL = lib.declare("CFBundleCopyAuxiliaryExecutableURL", ctypes.default_abi, this.CFURLRef, this.CFBundleRef, this.CFStringRef);
    this.CFBundleGetPlugIn = lib.declare("CFBundleGetPlugIn", ctypes.default_abi, this.CFPlugInRef, this.CFBundleRef);
    this.CFBundleRefNum = this.SInt16;
    this.CFBundleOpenBundleResourceMap = lib.declare("CFBundleOpenBundleResourceMap", ctypes.default_abi, this.CFBundleRefNum, this.CFBundleRef);
    this.CFBundleOpenBundleResourceFiles = lib.declare("CFBundleOpenBundleResourceFiles", ctypes.default_abi, this.SInt32, this.CFBundleRef, this.CFBundleRefNum.ptr, this.CFBundleRefNum.ptr);
    this.CFBundleCloseBundleResourceMap = lib.declare("CFBundleCloseBundleResourceMap", ctypes.default_abi, ctypes.void_t, this.CFBundleRef, this.CFBundleRefNum);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFDate.h
function CFDate_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFDATE_H)
        return;
    this._CFDATE_H = true;

    this.CFTimeInterval = ctypes.double;
    this.CFAbsoluteTime = this.CFTimeInterval;
    this.CFAbsoluteTimeGetCurrent = lib.declare("CFAbsoluteTimeGetCurrent", ctypes.default_abi, this.CFAbsoluteTime);
    this.kCFAbsoluteTimeIntervalSince1970 = lib.declare("kCFAbsoluteTimeIntervalSince1970", this.CFTimeInterval);
    this.kCFAbsoluteTimeIntervalSince1904 = lib.declare("kCFAbsoluteTimeIntervalSince1904", this.CFTimeInterval);
    this.__CFDate = new ctypes.StructType("__CFDate");
    this.CFDateRef = this.__CFDate.ptr;
    this.CFDateGetTypeID = lib.declare("CFDateGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFDateCreate = lib.declare("CFDateCreate", ctypes.default_abi, this.CFDateRef, this.CFAllocatorRef, this.CFAbsoluteTime);
    this.CFDateGetAbsoluteTime = lib.declare("CFDateGetAbsoluteTime", ctypes.default_abi, this.CFAbsoluteTime, this.CFDateRef);
    this.CFDateGetTimeIntervalSinceDate = lib.declare("CFDateGetTimeIntervalSinceDate", ctypes.default_abi, this.CFTimeInterval, this.CFDateRef, this.CFDateRef);
    this.CFDateCompare = lib.declare("CFDateCompare", ctypes.default_abi, this.CFComparisonResult, this.CFDateRef, this.CFDateRef, ctypes.void_t.ptr);
    this.__CFTimeZone = new ctypes.StructType("__CFTimeZone");
    this.CFTimeZoneRef = this.__CFTimeZone.ptr;
    this.CFGregorianDate = new ctypes.StructType("CFGregorianDate", [{year: this.SInt32}, {month: this.SInt8}, {day: this.SInt8}, {hour: this.SInt8}, {minute: this.SInt8}, {second: ctypes.double}]);
    this.CFGregorianUnits = new ctypes.StructType("CFGregorianUnits", [{years: this.SInt32}, {months: this.SInt32}, {days: this.SInt32}, {hours: this.SInt32}, {minutes: this.SInt32}, {seconds: ctypes.double}]);
    this.kCFGregorianUnitsYears = 1;
    this.kCFGregorianUnitsMonths = 2;
    this.kCFGregorianUnitsDays = 4;
    this.kCFGregorianUnitsHours = 8;
    this.kCFGregorianUnitsMinutes = 16;
    this.kCFGregorianUnitsSeconds = 32;
    this.kCFGregorianAllUnits = 16777215;
    this.CFGregorianUnitFlags = this.CFOptionFlags;
    this.CFGregorianDateIsValid = lib.declare("CFGregorianDateIsValid", ctypes.default_abi, this.Boolean, this.CFGregorianDate, this.CFOptionFlags);
    this.CFGregorianDateGetAbsoluteTime = lib.declare("CFGregorianDateGetAbsoluteTime", ctypes.default_abi, this.CFAbsoluteTime, this.CFGregorianDate, this.CFTimeZoneRef);
    this.CFAbsoluteTimeGetGregorianDate = lib.declare("CFAbsoluteTimeGetGregorianDate", ctypes.default_abi, this.CFGregorianDate, this.CFAbsoluteTime, this.CFTimeZoneRef);
    this.CFAbsoluteTimeAddGregorianUnits = lib.declare("CFAbsoluteTimeAddGregorianUnits", ctypes.default_abi, this.CFAbsoluteTime, this.CFAbsoluteTime, this.CFTimeZoneRef, this.CFGregorianUnits);
    this.CFAbsoluteTimeGetDifferenceAsGregorianUnits = lib.declare("CFAbsoluteTimeGetDifferenceAsGregorianUnits", ctypes.default_abi, this.CFGregorianUnits, this.CFAbsoluteTime, this.CFAbsoluteTime, this.CFTimeZoneRef, this.CFOptionFlags);
    this.CFAbsoluteTimeGetDayOfWeek = lib.declare("CFAbsoluteTimeGetDayOfWeek", ctypes.default_abi, this.SInt32, this.CFAbsoluteTime, this.CFTimeZoneRef);
    this.CFAbsoluteTimeGetDayOfYear = lib.declare("CFAbsoluteTimeGetDayOfYear", ctypes.default_abi, this.SInt32, this.CFAbsoluteTime, this.CFTimeZoneRef);
    this.CFAbsoluteTimeGetWeekOfYear = lib.declare("CFAbsoluteTimeGetWeekOfYear", ctypes.default_abi, this.SInt32, this.CFAbsoluteTime, this.CFTimeZoneRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFURLEnumerator.h
function CFURLEnumerator_h(lib) {
    CFError_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFURLENUMERATOR_H)
        return;
    this._CFURLENUMERATOR_H = true;

    this.__CFURLEnumerator = new ctypes.StructType("__CFURLEnumerator");
    this.CFURLEnumeratorRef = this.__CFURLEnumerator.ptr;
    this.CFURLEnumeratorGetTypeID = lib.declare("CFURLEnumeratorGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCFURLEnumeratorDescendRecursively = 1;
    this.kCFURLEnumeratorSkipInvisibles = 2;
    this.kCFURLEnumeratorGenerateFileReferenceURLs = 4;
    this.kCFURLEnumeratorSkipPackageContents = 8;
    this.CFURLEnumeratorOptions = this.CFOptionFlags;
    this.CFURLEnumeratorCreateForDirectoryURL = lib.declare("CFURLEnumeratorCreateForDirectoryURL", ctypes.default_abi, this.CFURLEnumeratorRef, this.CFAllocatorRef, this.CFURLRef, this.CFURLEnumeratorOptions, this.CFArrayRef);
    this.CFURLEnumeratorCreateForMountedVolumes = lib.declare("CFURLEnumeratorCreateForMountedVolumes", ctypes.default_abi, this.CFURLEnumeratorRef, this.CFAllocatorRef, this.CFURLEnumeratorOptions, this.CFArrayRef);
    this.kCFURLEnumeratorSuccess = 1;
    this.kCFURLEnumeratorEnd = 2;
    this.kCFURLEnumeratorError = 3;
    this.CFURLEnumeratorResult = this.CFIndex;
    this.CFURLEnumeratorGetNextURL = lib.declare("CFURLEnumeratorGetNextURL", ctypes.default_abi, this.CFURLEnumeratorResult, this.CFURLEnumeratorRef, this.CFURLRef.ptr, this.CFErrorRef.ptr);
    this.CFURLEnumeratorSkipDescendents = lib.declare("CFURLEnumeratorSkipDescendents", ctypes.default_abi, ctypes.void_t, this.CFURLEnumeratorRef);
    this.CFURLEnumeratorGetDescendentLevel = lib.declare("CFURLEnumeratorGetDescendentLevel", ctypes.default_abi, this.CFIndex, this.CFURLEnumeratorRef);
    this.CFURLEnumeratorGetSourceDidChange = lib.declare("CFURLEnumeratorGetSourceDidChange", ctypes.default_abi, this.Boolean, this.CFURLEnumeratorRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFSocket.h
function CFSocket_h(lib) {
    CFData_h.call(this, lib);
    CFDate_h.call(this, lib);
    CFRunLoop_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFSOCKET_H)
        return;
    this._CFSOCKET_H = true;

    this.CFSocketNativeHandle = ctypes.int;
    this.__CFSocket = new ctypes.StructType("__CFSocket");
    this.CFSocketRef = this.__CFSocket.ptr;
    this.kCFSocketSuccess = 0;
    this.kCFSocketError = -1;
    this.kCFSocketTimeout = -2;
    this.CFSocketError = this.CFIndex;
    this.CFSocketSignature = new ctypes.StructType("CFSocketSignature", [{protocolFamily: this.SInt32}, {socketType: this.SInt32}, {protocol: this.SInt32}, {address: this.CFDataRef}]);
    this.kCFSocketNoCallBack = 0;
    this.kCFSocketReadCallBack = 1;
    this.kCFSocketAcceptCallBack = 2;
    this.kCFSocketDataCallBack = 3;
    this.kCFSocketConnectCallBack = 4;
    this.kCFSocketWriteCallBack = 8;
    this.CFSocketCallBackType = this.CFOptionFlags;
    this.kCFSocketAutomaticallyReenableReadCallBack = 1;
    this.kCFSocketAutomaticallyReenableAcceptCallBack = 2;
    this.kCFSocketAutomaticallyReenableDataCallBack = 3;
    this.kCFSocketAutomaticallyReenableWriteCallBack = 8;
    this.kCFSocketLeaveErrors = 64;
    this.kCFSocketCloseOnInvalidate = 128;
    this.CFSocketCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFSocketRef, this.CFSocketCallBackType, this.CFDataRef, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CFSocketContext = new ctypes.StructType("CFSocketContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFSocketGetTypeID = lib.declare("CFSocketGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFSocketCreate = lib.declare("CFSocketCreate", ctypes.default_abi, this.CFSocketRef, this.CFAllocatorRef, this.SInt32, this.SInt32, this.SInt32, this.CFOptionFlags, this.CFSocketCallBack, this.CFSocketContext.ptr);
    this.CFSocketCreateWithNative = lib.declare("CFSocketCreateWithNative", ctypes.default_abi, this.CFSocketRef, this.CFAllocatorRef, this.CFSocketNativeHandle, this.CFOptionFlags, this.CFSocketCallBack, this.CFSocketContext.ptr);
    this.CFSocketCreateWithSocketSignature = lib.declare("CFSocketCreateWithSocketSignature", ctypes.default_abi, this.CFSocketRef, this.CFAllocatorRef, this.CFSocketSignature.ptr, this.CFOptionFlags, this.CFSocketCallBack, this.CFSocketContext.ptr);
    this.CFSocketCreateConnectedToSocketSignature = lib.declare("CFSocketCreateConnectedToSocketSignature", ctypes.default_abi, this.CFSocketRef, this.CFAllocatorRef, this.CFSocketSignature.ptr, this.CFOptionFlags, this.CFSocketCallBack, this.CFSocketContext.ptr, this.CFTimeInterval);
    this.CFSocketSetAddress = lib.declare("CFSocketSetAddress", ctypes.default_abi, this.CFSocketError, this.CFSocketRef, this.CFDataRef);
    this.CFSocketConnectToAddress = lib.declare("CFSocketConnectToAddress", ctypes.default_abi, this.CFSocketError, this.CFSocketRef, this.CFDataRef, this.CFTimeInterval);
    this.CFSocketInvalidate = lib.declare("CFSocketInvalidate", ctypes.default_abi, ctypes.void_t, this.CFSocketRef);
    this.CFSocketIsValid = lib.declare("CFSocketIsValid", ctypes.default_abi, this.Boolean, this.CFSocketRef);
    this.CFSocketCopyAddress = lib.declare("CFSocketCopyAddress", ctypes.default_abi, this.CFDataRef, this.CFSocketRef);
    this.CFSocketCopyPeerAddress = lib.declare("CFSocketCopyPeerAddress", ctypes.default_abi, this.CFDataRef, this.CFSocketRef);
    this.CFSocketGetContext = lib.declare("CFSocketGetContext", ctypes.default_abi, ctypes.void_t, this.CFSocketRef, this.CFSocketContext.ptr);
    this.CFSocketGetNative = lib.declare("CFSocketGetNative", ctypes.default_abi, this.CFSocketNativeHandle, this.CFSocketRef);
    this.CFSocketCreateRunLoopSource = lib.declare("CFSocketCreateRunLoopSource", ctypes.default_abi, this.CFRunLoopSourceRef, this.CFAllocatorRef, this.CFSocketRef, this.CFIndex);
    this.CFSocketGetSocketFlags = lib.declare("CFSocketGetSocketFlags", ctypes.default_abi, this.CFOptionFlags, this.CFSocketRef);
    this.CFSocketSetSocketFlags = lib.declare("CFSocketSetSocketFlags", ctypes.default_abi, ctypes.void_t, this.CFSocketRef, this.CFOptionFlags);
    this.CFSocketDisableCallBacks = lib.declare("CFSocketDisableCallBacks", ctypes.default_abi, ctypes.void_t, this.CFSocketRef, this.CFOptionFlags);
    this.CFSocketEnableCallBacks = lib.declare("CFSocketEnableCallBacks", ctypes.default_abi, ctypes.void_t, this.CFSocketRef, this.CFOptionFlags);
    this.CFSocketSendData = lib.declare("CFSocketSendData", ctypes.default_abi, this.CFSocketError, this.CFSocketRef, this.CFDataRef, this.CFDataRef, this.CFTimeInterval);
    this.CFSocketRegisterValue = lib.declare("CFSocketRegisterValue", ctypes.default_abi, this.CFSocketError, this.CFSocketSignature.ptr, this.CFTimeInterval, this.CFStringRef, this.CFPropertyListRef);
    this.CFSocketCopyRegisteredValue = lib.declare("CFSocketCopyRegisteredValue", ctypes.default_abi, this.CFSocketError, this.CFSocketSignature.ptr, this.CFTimeInterval, this.CFStringRef, this.CFPropertyListRef.ptr, this.CFDataRef.ptr);
    this.CFSocketRegisterSocketSignature = lib.declare("CFSocketRegisterSocketSignature", ctypes.default_abi, this.CFSocketError, this.CFSocketSignature.ptr, this.CFTimeInterval, this.CFStringRef, this.CFSocketSignature.ptr);
    this.CFSocketCopyRegisteredSocketSignature = lib.declare("CFSocketCopyRegisteredSocketSignature", ctypes.default_abi, this.CFSocketError, this.CFSocketSignature.ptr, this.CFTimeInterval, this.CFStringRef, this.CFSocketSignature.ptr, this.CFDataRef.ptr);
    this.CFSocketUnregister = lib.declare("CFSocketUnregister", ctypes.default_abi, this.CFSocketError, this.CFSocketSignature.ptr, this.CFTimeInterval, this.CFStringRef);
    this.CFSocketSetDefaultNameRegistryPortNumber = lib.declare("CFSocketSetDefaultNameRegistryPortNumber", ctypes.default_abi, ctypes.void_t, this.UInt16);
    this.CFSocketGetDefaultNameRegistryPortNumber = lib.declare("CFSocketGetDefaultNameRegistryPortNumber", ctypes.default_abi, this.UInt16);
    this.kCFSocketCommandKey = lib.declare("kCFSocketCommandKey", this.CFStringRef);
    this.kCFSocketNameKey = lib.declare("kCFSocketNameKey", this.CFStringRef);
    this.kCFSocketValueKey = lib.declare("kCFSocketValueKey", this.CFStringRef);
    this.kCFSocketResultKey = lib.declare("kCFSocketResultKey", this.CFStringRef);
    this.kCFSocketErrorKey = lib.declare("kCFSocketErrorKey", this.CFStringRef);
    this.kCFSocketRegisterCommand = lib.declare("kCFSocketRegisterCommand", this.CFStringRef);
    this.kCFSocketRetrieveCommand = lib.declare("kCFSocketRetrieveCommand", this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFBitVector.h
function CFBitVector_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFBITVECTOR_H)
        return;
    this._CFBITVECTOR_H = true;

    this.CFBit = this.UInt32;
    this.__CFBitVector = new ctypes.StructType("__CFBitVector");
    this.CFBitVectorRef = this.__CFBitVector.ptr;
    this.CFMutableBitVectorRef = this.__CFBitVector.ptr;
    this.CFBitVectorGetTypeID = lib.declare("CFBitVectorGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFBitVectorCreate = lib.declare("CFBitVectorCreate", ctypes.default_abi, this.CFBitVectorRef, this.CFAllocatorRef, this.UInt8.ptr, this.CFIndex);
    this.CFBitVectorCreateCopy = lib.declare("CFBitVectorCreateCopy", ctypes.default_abi, this.CFBitVectorRef, this.CFAllocatorRef, this.CFBitVectorRef);
    this.CFBitVectorCreateMutable = lib.declare("CFBitVectorCreateMutable", ctypes.default_abi, this.CFMutableBitVectorRef, this.CFAllocatorRef, this.CFIndex);
    this.CFBitVectorCreateMutableCopy = lib.declare("CFBitVectorCreateMutableCopy", ctypes.default_abi, this.CFMutableBitVectorRef, this.CFAllocatorRef, this.CFIndex, this.CFBitVectorRef);
    this.CFBitVectorGetCount = lib.declare("CFBitVectorGetCount", ctypes.default_abi, this.CFIndex, this.CFBitVectorRef);
    this.CFBitVectorGetCountOfBit = lib.declare("CFBitVectorGetCountOfBit", ctypes.default_abi, this.CFIndex, this.CFBitVectorRef, this.CFRange, this.CFBit);
    this.CFBitVectorContainsBit = lib.declare("CFBitVectorContainsBit", ctypes.default_abi, this.Boolean, this.CFBitVectorRef, this.CFRange, this.CFBit);
    this.CFBitVectorGetBitAtIndex = lib.declare("CFBitVectorGetBitAtIndex", ctypes.default_abi, this.CFBit, this.CFBitVectorRef, this.CFIndex);
    this.CFBitVectorGetBits = lib.declare("CFBitVectorGetBits", ctypes.default_abi, ctypes.void_t, this.CFBitVectorRef, this.CFRange, this.UInt8.ptr);
    this.CFBitVectorGetFirstIndexOfBit = lib.declare("CFBitVectorGetFirstIndexOfBit", ctypes.default_abi, this.CFIndex, this.CFBitVectorRef, this.CFRange, this.CFBit);
    this.CFBitVectorGetLastIndexOfBit = lib.declare("CFBitVectorGetLastIndexOfBit", ctypes.default_abi, this.CFIndex, this.CFBitVectorRef, this.CFRange, this.CFBit);
    this.CFBitVectorSetCount = lib.declare("CFBitVectorSetCount", ctypes.default_abi, ctypes.void_t, this.CFMutableBitVectorRef, this.CFIndex);
    this.CFBitVectorFlipBitAtIndex = lib.declare("CFBitVectorFlipBitAtIndex", ctypes.default_abi, ctypes.void_t, this.CFMutableBitVectorRef, this.CFIndex);
    this.CFBitVectorFlipBits = lib.declare("CFBitVectorFlipBits", ctypes.default_abi, ctypes.void_t, this.CFMutableBitVectorRef, this.CFRange);
    this.CFBitVectorSetBitAtIndex = lib.declare("CFBitVectorSetBitAtIndex", ctypes.default_abi, ctypes.void_t, this.CFMutableBitVectorRef, this.CFIndex, this.CFBit);
    this.CFBitVectorSetBits = lib.declare("CFBitVectorSetBits", ctypes.default_abi, ctypes.void_t, this.CFMutableBitVectorRef, this.CFRange, this.CFBit);
    this.CFBitVectorSetAllBits = lib.declare("CFBitVectorSetAllBits", ctypes.default_abi, ctypes.void_t, this.CFMutableBitVectorRef, this.CFBit);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFCalendar.h
function CFCalendar_h(lib) {
    CFDate_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFLocale_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFCALENDAR_H)
        return;
    this._CFCALENDAR_H = true;

    this.__CFCalendar = new ctypes.StructType("__CFCalendar");
    this.CFCalendarRef = this.__CFCalendar.ptr;
    this.CFCalendarGetTypeID = lib.declare("CFCalendarGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFCalendarCopyCurrent = lib.declare("CFCalendarCopyCurrent", ctypes.default_abi, this.CFCalendarRef);
    this.CFCalendarCreateWithIdentifier = lib.declare("CFCalendarCreateWithIdentifier", ctypes.default_abi, this.CFCalendarRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFCalendarGetIdentifier = lib.declare("CFCalendarGetIdentifier", ctypes.default_abi, this.CFStringRef, this.CFCalendarRef);
    this.CFCalendarCopyLocale = lib.declare("CFCalendarCopyLocale", ctypes.default_abi, this.CFLocaleRef, this.CFCalendarRef);
    this.CFCalendarSetLocale = lib.declare("CFCalendarSetLocale", ctypes.default_abi, ctypes.void_t, this.CFCalendarRef, this.CFLocaleRef);
    this.CFCalendarCopyTimeZone = lib.declare("CFCalendarCopyTimeZone", ctypes.default_abi, this.CFTimeZoneRef, this.CFCalendarRef);
    this.CFCalendarSetTimeZone = lib.declare("CFCalendarSetTimeZone", ctypes.default_abi, ctypes.void_t, this.CFCalendarRef, this.CFTimeZoneRef);
    this.CFCalendarGetFirstWeekday = lib.declare("CFCalendarGetFirstWeekday", ctypes.default_abi, this.CFIndex, this.CFCalendarRef);
    this.CFCalendarSetFirstWeekday = lib.declare("CFCalendarSetFirstWeekday", ctypes.default_abi, ctypes.void_t, this.CFCalendarRef, this.CFIndex);
    this.CFCalendarGetMinimumDaysInFirstWeek = lib.declare("CFCalendarGetMinimumDaysInFirstWeek", ctypes.default_abi, this.CFIndex, this.CFCalendarRef);
    this.CFCalendarSetMinimumDaysInFirstWeek = lib.declare("CFCalendarSetMinimumDaysInFirstWeek", ctypes.default_abi, ctypes.void_t, this.CFCalendarRef, this.CFIndex);
    this.kCFCalendarUnitEra = 2;
    this.kCFCalendarUnitYear = 4;
    this.kCFCalendarUnitMonth = 8;
    this.kCFCalendarUnitDay = 16;
    this.kCFCalendarUnitHour = 32;
    this.kCFCalendarUnitMinute = 64;
    this.kCFCalendarUnitSecond = 128;
    this.kCFCalendarUnitWeek = 256;
    this.kCFCalendarUnitWeekday = 512;
    this.kCFCalendarUnitWeekdayOrdinal = 1024;
    this.kCFCalendarUnitQuarter = 2048;
    this.CFCalendarUnit = this.CFOptionFlags;
    this.CFCalendarGetMinimumRangeOfUnit = lib.declare("CFCalendarGetMinimumRangeOfUnit", ctypes.default_abi, this.CFRange, this.CFCalendarRef, this.CFCalendarUnit);
    this.CFCalendarGetMaximumRangeOfUnit = lib.declare("CFCalendarGetMaximumRangeOfUnit", ctypes.default_abi, this.CFRange, this.CFCalendarRef, this.CFCalendarUnit);
    this.CFCalendarGetRangeOfUnit = lib.declare("CFCalendarGetRangeOfUnit", ctypes.default_abi, this.CFRange, this.CFCalendarRef, this.CFCalendarUnit, this.CFCalendarUnit, this.CFAbsoluteTime);
    this.CFCalendarGetOrdinalityOfUnit = lib.declare("CFCalendarGetOrdinalityOfUnit", ctypes.default_abi, this.CFIndex, this.CFCalendarRef, this.CFCalendarUnit, this.CFCalendarUnit, this.CFAbsoluteTime);
    this.CFCalendarGetTimeRangeOfUnit = lib.declare("CFCalendarGetTimeRangeOfUnit", ctypes.default_abi, this.Boolean, this.CFCalendarRef, this.CFCalendarUnit, this.CFAbsoluteTime, this.CFAbsoluteTime.ptr, this.CFTimeInterval.ptr);
    this.CFCalendarComposeAbsoluteTime = lib.declare("CFCalendarComposeAbsoluteTime", ctypes.default_abi, this.Boolean, this.CFCalendarRef, this.CFAbsoluteTime.ptr, ctypes.char.ptr, "...");
    this.CFCalendarDecomposeAbsoluteTime = lib.declare("CFCalendarDecomposeAbsoluteTime", ctypes.default_abi, this.Boolean, this.CFCalendarRef, this.CFAbsoluteTime, ctypes.char.ptr, "...");
    this.kCFCalendarComponentsWrap = 1;
    this.CFCalendarAddComponents = lib.declare("CFCalendarAddComponents", ctypes.default_abi, this.Boolean, this.CFCalendarRef, this.CFAbsoluteTime.ptr, this.CFOptionFlags, ctypes.char.ptr, "...");
    this.CFCalendarGetComponentDifference = lib.declare("CFCalendarGetComponentDifference", ctypes.default_abi, this.Boolean, this.CFCalendarRef, this.CFAbsoluteTime, this.CFAbsoluteTime, this.CFOptionFlags, ctypes.char.ptr, "...");
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFPlugIn.h
function CFPlugIn_h(lib) {
    CFUUID_h.call(this, lib);
    CFBundle_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFPLUGIN_H)
        return;
    this._CFPLUGIN_H = true;

    this.kCFPlugInDynamicRegistrationKey = lib.declare("kCFPlugInDynamicRegistrationKey", this.CFStringRef);
    this.kCFPlugInDynamicRegisterFunctionKey = lib.declare("kCFPlugInDynamicRegisterFunctionKey", this.CFStringRef);
    this.kCFPlugInUnloadFunctionKey = lib.declare("kCFPlugInUnloadFunctionKey", this.CFStringRef);
    this.kCFPlugInFactoriesKey = lib.declare("kCFPlugInFactoriesKey", this.CFStringRef);
    this.kCFPlugInTypesKey = lib.declare("kCFPlugInTypesKey", this.CFStringRef);
    this.CFPlugInDynamicRegisterFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFPlugInRef]).ptr;
    this.CFPlugInUnloadFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFPlugInRef]).ptr;
    this.CFPlugInFactoryFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFAllocatorRef, this.CFUUIDRef]).ptr;
    this.CFPlugInGetTypeID = lib.declare("CFPlugInGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFPlugInCreate = lib.declare("CFPlugInCreate", ctypes.default_abi, this.CFPlugInRef, this.CFAllocatorRef, this.CFURLRef);
    this.CFPlugInGetBundle = lib.declare("CFPlugInGetBundle", ctypes.default_abi, this.CFBundleRef, this.CFPlugInRef);
    this.CFPlugInSetLoadOnDemand = lib.declare("CFPlugInSetLoadOnDemand", ctypes.default_abi, ctypes.void_t, this.CFPlugInRef, this.Boolean);
    this.CFPlugInIsLoadOnDemand = lib.declare("CFPlugInIsLoadOnDemand", ctypes.default_abi, this.Boolean, this.CFPlugInRef);
    this.CFPlugInFindFactoriesForPlugInType = lib.declare("CFPlugInFindFactoriesForPlugInType", ctypes.default_abi, this.CFArrayRef, this.CFUUIDRef);
    this.CFPlugInFindFactoriesForPlugInTypeInPlugIn = lib.declare("CFPlugInFindFactoriesForPlugInTypeInPlugIn", ctypes.default_abi, this.CFArrayRef, this.CFUUIDRef, this.CFPlugInRef);
    this.CFPlugInInstanceCreate = lib.declare("CFPlugInInstanceCreate", ctypes.default_abi, ctypes.void_t.ptr, this.CFAllocatorRef, this.CFUUIDRef, this.CFUUIDRef);
    this.CFPlugInRegisterFactoryFunction = lib.declare("CFPlugInRegisterFactoryFunction", ctypes.default_abi, this.Boolean, this.CFUUIDRef, this.CFPlugInFactoryFunction);
    this.CFPlugInRegisterFactoryFunctionByName = lib.declare("CFPlugInRegisterFactoryFunctionByName", ctypes.default_abi, this.Boolean, this.CFUUIDRef, this.CFPlugInRef, this.CFStringRef);
    this.CFPlugInUnregisterFactory = lib.declare("CFPlugInUnregisterFactory", ctypes.default_abi, this.Boolean, this.CFUUIDRef);
    this.CFPlugInRegisterPlugInType = lib.declare("CFPlugInRegisterPlugInType", ctypes.default_abi, this.Boolean, this.CFUUIDRef, this.CFUUIDRef);
    this.CFPlugInUnregisterPlugInType = lib.declare("CFPlugInUnregisterPlugInType", ctypes.default_abi, this.Boolean, this.CFUUIDRef, this.CFUUIDRef);
    this.CFPlugInAddInstanceForFactory = lib.declare("CFPlugInAddInstanceForFactory", ctypes.default_abi, ctypes.void_t, this.CFUUIDRef);
    this.CFPlugInRemoveInstanceForFactory = lib.declare("CFPlugInRemoveInstanceForFactory", ctypes.default_abi, ctypes.void_t, this.CFUUIDRef);
    this.__CFPlugInInstance = new ctypes.StructType("__CFPlugInInstance");
    this.CFPlugInInstanceRef = this.__CFPlugInInstance.ptr;
    this.CFPlugInInstanceGetInterfaceFunction = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.CFPlugInInstanceRef, this.CFStringRef, ctypes.void_t.ptr.ptr]).ptr;
    this.CFPlugInInstanceDeallocateInstanceDataFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CFPlugInInstanceGetInterfaceFunctionTable = lib.declare("CFPlugInInstanceGetInterfaceFunctionTable", ctypes.default_abi, this.Boolean, this.CFPlugInInstanceRef, this.CFStringRef, ctypes.void_t.ptr.ptr);
    this.CFPlugInInstanceGetFactoryName = lib.declare("CFPlugInInstanceGetFactoryName", ctypes.default_abi, this.CFStringRef, this.CFPlugInInstanceRef);
    this.CFPlugInInstanceGetInstanceData = lib.declare("CFPlugInInstanceGetInstanceData", ctypes.default_abi, ctypes.void_t.ptr, this.CFPlugInInstanceRef);
    this.CFPlugInInstanceGetTypeID = lib.declare("CFPlugInInstanceGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFPlugInInstanceCreateWithInstanceDataSize = lib.declare("CFPlugInInstanceCreateWithInstanceDataSize", ctypes.default_abi, this.CFPlugInInstanceRef, this.CFAllocatorRef, this.CFIndex, this.CFPlugInInstanceDeallocateInstanceDataFunction, this.CFStringRef, this.CFPlugInInstanceGetInterfaceFunction);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFNumber.h
function CFNumber_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFNUMBER_H)
        return;
    this._CFNUMBER_H = true;

    this.__CFBoolean = new ctypes.StructType("__CFBoolean");
    this.CFBooleanRef = this.__CFBoolean.ptr;
    this.kCFBooleanTrue = lib.declare("kCFBooleanTrue", this.CFBooleanRef);
    this.kCFBooleanFalse = lib.declare("kCFBooleanFalse", this.CFBooleanRef);
    this.CFBooleanGetTypeID = lib.declare("CFBooleanGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFBooleanGetValue = lib.declare("CFBooleanGetValue", ctypes.default_abi, this.Boolean, this.CFBooleanRef);
    this.kCFNumberSInt8Type = 1;
    this.kCFNumberSInt16Type = 2;
    this.kCFNumberSInt32Type = 3;
    this.kCFNumberSInt64Type = 4;
    this.kCFNumberFloat32Type = 5;
    this.kCFNumberFloat64Type = 6;
    this.kCFNumberCharType = 7;
    this.kCFNumberShortType = 8;
    this.kCFNumberIntType = 9;
    this.kCFNumberLongType = 10;
    this.kCFNumberLongLongType = 11;
    this.kCFNumberFloatType = 12;
    this.kCFNumberDoubleType = 13;
    this.kCFNumberCFIndexType = 14;
    this.kCFNumberNSIntegerType = 15;
    this.kCFNumberCGFloatType = 16;
    this.kCFNumberMaxType = 16;
    this.CFNumberType = this.CFIndex;
    this.__CFNumber = new ctypes.StructType("__CFNumber");
    this.CFNumberRef = this.__CFNumber.ptr;
    this.kCFNumberPositiveInfinity = lib.declare("kCFNumberPositiveInfinity", this.CFNumberRef);
    this.kCFNumberNegativeInfinity = lib.declare("kCFNumberNegativeInfinity", this.CFNumberRef);
    this.kCFNumberNaN = lib.declare("kCFNumberNaN", this.CFNumberRef);
    this.CFNumberGetTypeID = lib.declare("CFNumberGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFNumberCreate = lib.declare("CFNumberCreate", ctypes.default_abi, this.CFNumberRef, this.CFAllocatorRef, this.CFNumberType, ctypes.void_t.ptr);
    this.CFNumberGetType = lib.declare("CFNumberGetType", ctypes.default_abi, this.CFNumberType, this.CFNumberRef);
    this.CFNumberGetByteSize = lib.declare("CFNumberGetByteSize", ctypes.default_abi, this.CFIndex, this.CFNumberRef);
    this.CFNumberIsFloatType = lib.declare("CFNumberIsFloatType", ctypes.default_abi, this.Boolean, this.CFNumberRef);
    this.CFNumberGetValue = lib.declare("CFNumberGetValue", ctypes.default_abi, this.Boolean, this.CFNumberRef, this.CFNumberType, ctypes.void_t.ptr);
    this.CFNumberCompare = lib.declare("CFNumberCompare", ctypes.default_abi, this.CFComparisonResult, this.CFNumberRef, this.CFNumberRef, ctypes.void_t.ptr);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFArray.h
function CFArray_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFARRAY_H)
        return;
    this._CFARRAY_H = true;

    this.CFArrayRetainCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr;
    this.CFArrayReleaseCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr;
    this.CFArrayCopyDescriptionCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr;
    this.CFArrayEqualCallBack = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CFArrayCallBacks = new ctypes.StructType("CFArrayCallBacks", [{version: this.CFIndex}, {retain: this.CFArrayRetainCallBack}, {release: this.CFArrayReleaseCallBack}, {copyDescription: this.CFArrayCopyDescriptionCallBack}, {equal: this.CFArrayEqualCallBack}]);
    this.kCFTypeArrayCallBacks = lib.declare("kCFTypeArrayCallBacks", this.CFArrayCallBacks);
    this.CFArrayApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFArray = new ctypes.StructType("__CFArray");
    this.CFArrayRef = this.__CFArray.ptr;
    this.CFMutableArrayRef = this.__CFArray.ptr;
    this.CFArrayGetTypeID = lib.declare("CFArrayGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFArrayCreate = lib.declare("CFArrayCreate", ctypes.default_abi, this.CFArrayRef, this.CFAllocatorRef, ctypes.void_t.ptr.ptr, this.CFIndex, this.CFArrayCallBacks.ptr);
    this.CFArrayCreateCopy = lib.declare("CFArrayCreateCopy", ctypes.default_abi, this.CFArrayRef, this.CFAllocatorRef, this.CFArrayRef);
    this.CFArrayCreateMutable = lib.declare("CFArrayCreateMutable", ctypes.default_abi, this.CFMutableArrayRef, this.CFAllocatorRef, this.CFIndex, this.CFArrayCallBacks.ptr);
    this.CFArrayCreateMutableCopy = lib.declare("CFArrayCreateMutableCopy", ctypes.default_abi, this.CFMutableArrayRef, this.CFAllocatorRef, this.CFIndex, this.CFArrayRef);
    this.CFArrayGetCount = lib.declare("CFArrayGetCount", ctypes.default_abi, this.CFIndex, this.CFArrayRef);
    this.CFArrayGetCountOfValue = lib.declare("CFArrayGetCountOfValue", ctypes.default_abi, this.CFIndex, this.CFArrayRef, this.CFRange, ctypes.void_t.ptr);
    this.CFArrayContainsValue = lib.declare("CFArrayContainsValue", ctypes.default_abi, this.Boolean, this.CFArrayRef, this.CFRange, ctypes.void_t.ptr);
    this.CFArrayGetValueAtIndex = lib.declare("CFArrayGetValueAtIndex", ctypes.default_abi, ctypes.void_t.ptr, this.CFArrayRef, this.CFIndex);
    this.CFArrayGetValues = lib.declare("CFArrayGetValues", ctypes.default_abi, ctypes.void_t, this.CFArrayRef, this.CFRange, ctypes.void_t.ptr.ptr);
    this.CFArrayApplyFunction = lib.declare("CFArrayApplyFunction", ctypes.default_abi, ctypes.void_t, this.CFArrayRef, this.CFRange, this.CFArrayApplierFunction, ctypes.void_t.ptr);
    this.CFArrayGetFirstIndexOfValue = lib.declare("CFArrayGetFirstIndexOfValue", ctypes.default_abi, this.CFIndex, this.CFArrayRef, this.CFRange, ctypes.void_t.ptr);
    this.CFArrayGetLastIndexOfValue = lib.declare("CFArrayGetLastIndexOfValue", ctypes.default_abi, this.CFIndex, this.CFArrayRef, this.CFRange, ctypes.void_t.ptr);
    this.CFArrayBSearchValues = lib.declare("CFArrayBSearchValues", ctypes.default_abi, this.CFIndex, this.CFArrayRef, this.CFRange, ctypes.void_t.ptr, this.CFComparatorFunction, ctypes.void_t.ptr);
    this.CFArrayAppendValue = lib.declare("CFArrayAppendValue", ctypes.default_abi, ctypes.void_t, this.CFMutableArrayRef, ctypes.void_t.ptr);
    this.CFArrayInsertValueAtIndex = lib.declare("CFArrayInsertValueAtIndex", ctypes.default_abi, ctypes.void_t, this.CFMutableArrayRef, this.CFIndex, ctypes.void_t.ptr);
    this.CFArraySetValueAtIndex = lib.declare("CFArraySetValueAtIndex", ctypes.default_abi, ctypes.void_t, this.CFMutableArrayRef, this.CFIndex, ctypes.void_t.ptr);
    this.CFArrayRemoveValueAtIndex = lib.declare("CFArrayRemoveValueAtIndex", ctypes.default_abi, ctypes.void_t, this.CFMutableArrayRef, this.CFIndex);
    this.CFArrayRemoveAllValues = lib.declare("CFArrayRemoveAllValues", ctypes.default_abi, ctypes.void_t, this.CFMutableArrayRef);
    this.CFArrayReplaceValues = lib.declare("CFArrayReplaceValues", ctypes.default_abi, ctypes.void_t, this.CFMutableArrayRef, this.CFRange, ctypes.void_t.ptr.ptr, this.CFIndex);
    this.CFArrayExchangeValuesAtIndices = lib.declare("CFArrayExchangeValuesAtIndices", ctypes.default_abi, ctypes.void_t, this.CFMutableArrayRef, this.CFIndex, this.CFIndex);
    this.CFArraySortValues = lib.declare("CFArraySortValues", ctypes.default_abi, ctypes.void_t, this.CFMutableArrayRef, this.CFRange, this.CFComparatorFunction, ctypes.void_t.ptr);
    this.CFArrayAppendArray = lib.declare("CFArrayAppendArray", ctypes.default_abi, ctypes.void_t, this.CFMutableArrayRef, this.CFArrayRef, this.CFRange);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFBag.h
function CFBag_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFBAG_H)
        return;
    this._CFBAG_H = true;

    this.CFBagRetainCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr;
    this.CFBagReleaseCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr;
    this.CFBagCopyDescriptionCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr;
    this.CFBagEqualCallBack = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CFBagHashCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFHashCode, [ctypes.void_t.ptr]).ptr;
    this.CFBagCallBacks = new ctypes.StructType("CFBagCallBacks", [{version: this.CFIndex}, {retain: this.CFBagRetainCallBack}, {release: this.CFBagReleaseCallBack}, {copyDescription: this.CFBagCopyDescriptionCallBack}, {equal: this.CFBagEqualCallBack}, {hash: this.CFBagHashCallBack}]);
    this.kCFTypeBagCallBacks = lib.declare("kCFTypeBagCallBacks", this.CFBagCallBacks);
    this.kCFCopyStringBagCallBacks = lib.declare("kCFCopyStringBagCallBacks", this.CFBagCallBacks);
    this.CFBagApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFBag = new ctypes.StructType("__CFBag");
    this.CFBagRef = this.__CFBag.ptr;
    this.CFMutableBagRef = this.__CFBag.ptr;
    this.CFBagGetTypeID = lib.declare("CFBagGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFBagCreate = lib.declare("CFBagCreate", ctypes.default_abi, this.CFBagRef, this.CFAllocatorRef, ctypes.void_t.ptr.ptr, this.CFIndex, this.CFBagCallBacks.ptr);
    this.CFBagCreateCopy = lib.declare("CFBagCreateCopy", ctypes.default_abi, this.CFBagRef, this.CFAllocatorRef, this.CFBagRef);
    this.CFBagCreateMutable = lib.declare("CFBagCreateMutable", ctypes.default_abi, this.CFMutableBagRef, this.CFAllocatorRef, this.CFIndex, this.CFBagCallBacks.ptr);
    this.CFBagCreateMutableCopy = lib.declare("CFBagCreateMutableCopy", ctypes.default_abi, this.CFMutableBagRef, this.CFAllocatorRef, this.CFIndex, this.CFBagRef);
    this.CFBagGetCount = lib.declare("CFBagGetCount", ctypes.default_abi, this.CFIndex, this.CFBagRef);
    this.CFBagGetCountOfValue = lib.declare("CFBagGetCountOfValue", ctypes.default_abi, this.CFIndex, this.CFBagRef, ctypes.void_t.ptr);
    this.CFBagContainsValue = lib.declare("CFBagContainsValue", ctypes.default_abi, this.Boolean, this.CFBagRef, ctypes.void_t.ptr);
    this.CFBagGetValue = lib.declare("CFBagGetValue", ctypes.default_abi, ctypes.void_t.ptr, this.CFBagRef, ctypes.void_t.ptr);
    this.CFBagGetValueIfPresent = lib.declare("CFBagGetValueIfPresent", ctypes.default_abi, this.Boolean, this.CFBagRef, ctypes.void_t.ptr, ctypes.void_t.ptr.ptr);
    this.CFBagGetValues = lib.declare("CFBagGetValues", ctypes.default_abi, ctypes.void_t, this.CFBagRef, ctypes.void_t.ptr.ptr);
    this.CFBagApplyFunction = lib.declare("CFBagApplyFunction", ctypes.default_abi, ctypes.void_t, this.CFBagRef, this.CFBagApplierFunction, ctypes.void_t.ptr);
    this.CFBagAddValue = lib.declare("CFBagAddValue", ctypes.default_abi, ctypes.void_t, this.CFMutableBagRef, ctypes.void_t.ptr);
    this.CFBagReplaceValue = lib.declare("CFBagReplaceValue", ctypes.default_abi, ctypes.void_t, this.CFMutableBagRef, ctypes.void_t.ptr);
    this.CFBagSetValue = lib.declare("CFBagSetValue", ctypes.default_abi, ctypes.void_t, this.CFMutableBagRef, ctypes.void_t.ptr);
    this.CFBagRemoveValue = lib.declare("CFBagRemoveValue", ctypes.default_abi, ctypes.void_t, this.CFMutableBagRef, ctypes.void_t.ptr);
    this.CFBagRemoveAllValues = lib.declare("CFBagRemoveAllValues", ctypes.default_abi, ctypes.void_t, this.CFMutableBagRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFTimeZone.h
function CFTimeZone_h(lib) {
    CFData_h.call(this, lib);
    CFDate_h.call(this, lib);
    CFLocale_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFTIMEZONE_H)
        return;
    this._CFTIMEZONE_H = true;

    this.CFTimeZoneGetTypeID = lib.declare("CFTimeZoneGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFTimeZoneCopySystem = lib.declare("CFTimeZoneCopySystem", ctypes.default_abi, this.CFTimeZoneRef);
    this.CFTimeZoneResetSystem = lib.declare("CFTimeZoneResetSystem", ctypes.default_abi, ctypes.void_t);
    this.CFTimeZoneCopyDefault = lib.declare("CFTimeZoneCopyDefault", ctypes.default_abi, this.CFTimeZoneRef);
    this.CFTimeZoneSetDefault = lib.declare("CFTimeZoneSetDefault", ctypes.default_abi, ctypes.void_t, this.CFTimeZoneRef);
    this.CFTimeZoneCopyKnownNames = lib.declare("CFTimeZoneCopyKnownNames", ctypes.default_abi, this.CFArrayRef);
    this.CFTimeZoneCopyAbbreviationDictionary = lib.declare("CFTimeZoneCopyAbbreviationDictionary", ctypes.default_abi, this.CFDictionaryRef);
    this.CFTimeZoneSetAbbreviationDictionary = lib.declare("CFTimeZoneSetAbbreviationDictionary", ctypes.default_abi, ctypes.void_t, this.CFDictionaryRef);
    this.CFTimeZoneCreate = lib.declare("CFTimeZoneCreate", ctypes.default_abi, this.CFTimeZoneRef, this.CFAllocatorRef, this.CFStringRef, this.CFDataRef);
    this.CFTimeZoneCreateWithTimeIntervalFromGMT = lib.declare("CFTimeZoneCreateWithTimeIntervalFromGMT", ctypes.default_abi, this.CFTimeZoneRef, this.CFAllocatorRef, this.CFTimeInterval);
    this.CFTimeZoneCreateWithName = lib.declare("CFTimeZoneCreateWithName", ctypes.default_abi, this.CFTimeZoneRef, this.CFAllocatorRef, this.CFStringRef, this.Boolean);
    this.CFTimeZoneGetName = lib.declare("CFTimeZoneGetName", ctypes.default_abi, this.CFStringRef, this.CFTimeZoneRef);
    this.CFTimeZoneGetData = lib.declare("CFTimeZoneGetData", ctypes.default_abi, this.CFDataRef, this.CFTimeZoneRef);
    this.CFTimeZoneGetSecondsFromGMT = lib.declare("CFTimeZoneGetSecondsFromGMT", ctypes.default_abi, this.CFTimeInterval, this.CFTimeZoneRef, this.CFAbsoluteTime);
    this.CFTimeZoneCopyAbbreviation = lib.declare("CFTimeZoneCopyAbbreviation", ctypes.default_abi, this.CFStringRef, this.CFTimeZoneRef, this.CFAbsoluteTime);
    this.CFTimeZoneIsDaylightSavingTime = lib.declare("CFTimeZoneIsDaylightSavingTime", ctypes.default_abi, this.Boolean, this.CFTimeZoneRef, this.CFAbsoluteTime);
    this.CFTimeZoneGetDaylightSavingTimeOffset = lib.declare("CFTimeZoneGetDaylightSavingTimeOffset", ctypes.default_abi, this.CFTimeInterval, this.CFTimeZoneRef, this.CFAbsoluteTime);
    this.CFTimeZoneGetNextDaylightSavingTimeTransition = lib.declare("CFTimeZoneGetNextDaylightSavingTimeTransition", ctypes.default_abi, this.CFAbsoluteTime, this.CFTimeZoneRef, this.CFAbsoluteTime);
    this.kCFTimeZoneNameStyleStandard = 0;
    this.kCFTimeZoneNameStyleShortStandard = 1;
    this.kCFTimeZoneNameStyleDaylightSaving = 2;
    this.kCFTimeZoneNameStyleShortDaylightSaving = 3;
    this.kCFTimeZoneNameStyleGeneric = 4;
    this.kCFTimeZoneNameStyleShortGeneric = 5;
    this.CFTimeZoneNameStyle = this.CFIndex;
    this.CFTimeZoneCopyLocalizedName = lib.declare("CFTimeZoneCopyLocalizedName", ctypes.default_abi, this.CFStringRef, this.CFTimeZoneRef, this.CFTimeZoneNameStyle, this.CFLocaleRef);
    this.kCFTimeZoneSystemTimeZoneDidChangeNotification = lib.declare("kCFTimeZoneSystemTimeZoneDidChangeNotification", this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFXMLParser.h
function CFXMLParser_h(lib) {
    CFData_h.call(this, lib);
    CFXMLNode_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFXMLPARSER_H)
        return;
    this._CFXMLPARSER_H = true;

    this.__CFXMLParser = new ctypes.StructType("__CFXMLParser");
    this.CFXMLParserRef = this.__CFXMLParser.ptr;
    this.kCFXMLParserValidateDocument = 1;
    this.kCFXMLParserSkipMetaData = 2;
    this.kCFXMLParserReplacePhysicalEntities = 4;
    this.kCFXMLParserSkipWhitespace = 8;
    this.kCFXMLParserResolveExternalEntities = 16;
    this.kCFXMLParserAddImpliedAttributes = 32;
    this.kCFXMLParserAllOptions = 16777215;
    this.kCFXMLParserNoOptions = 0;
    this.CFXMLParserOptions = this.CFOptionFlags;
    this.kCFXMLStatusParseNotBegun = -2;
    this.kCFXMLStatusParseInProgress = -1;
    this.kCFXMLStatusParseSuccessful = 0;
    this.kCFXMLErrorUnexpectedEOF = 1;
    this.kCFXMLErrorUnknownEncoding = 2;
    this.kCFXMLErrorEncodingConversionFailure = 3;
    this.kCFXMLErrorMalformedProcessingInstruction = 4;
    this.kCFXMLErrorMalformedDTD = 5;
    this.kCFXMLErrorMalformedName = 6;
    this.kCFXMLErrorMalformedCDSect = 7;
    this.kCFXMLErrorMalformedCloseTag = 8;
    this.kCFXMLErrorMalformedStartTag = 9;
    this.kCFXMLErrorMalformedDocument = 10;
    this.kCFXMLErrorElementlessDocument = 11;
    this.kCFXMLErrorMalformedComment = 12;
    this.kCFXMLErrorMalformedCharacterReference = 13;
    this.kCFXMLErrorMalformedParsedCharacterData = 14;
    this.kCFXMLErrorNoData = 15;
    this.CFXMLParserStatusCode = this.CFIndex;
    this.CFXMLParserCreateXMLStructureCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFXMLParserRef, this.CFXMLNodeRef, ctypes.void_t.ptr]).ptr;
    this.CFXMLParserAddChildCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFXMLParserRef, ctypes.void_t.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CFXMLParserEndXMLStructureCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFXMLParserRef, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CFXMLParserResolveExternalEntityCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFDataRef, [this.CFXMLParserRef, this.CFXMLExternalID.ptr, ctypes.void_t.ptr]).ptr;
    this.CFXMLParserHandleErrorCallBack = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.CFXMLParserRef, this.CFXMLParserStatusCode, ctypes.void_t.ptr]).ptr;
    this.CFXMLParserCallBacks = new ctypes.StructType("CFXMLParserCallBacks", [{version: this.CFIndex}, {createXMLStructure: this.CFXMLParserCreateXMLStructureCallBack}, {addChild: this.CFXMLParserAddChildCallBack}, {endXMLStructure: this.CFXMLParserEndXMLStructureCallBack}, {resolveExternalEntity: this.CFXMLParserResolveExternalEntityCallBack}, {handleError: this.CFXMLParserHandleErrorCallBack}]);
    this.CFXMLParserRetainCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr;
    this.CFXMLParserReleaseCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CFXMLParserCopyDescriptionCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr;
    this.CFXMLParserContext = new ctypes.StructType("CFXMLParserContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: this.CFXMLParserRetainCallBack}, {release: this.CFXMLParserReleaseCallBack}, {copyDescription: this.CFXMLParserCopyDescriptionCallBack}]);
    this.CFXMLParserGetTypeID = lib.declare("CFXMLParserGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFXMLParserCreate = lib.declare("CFXMLParserCreate", ctypes.default_abi, this.CFXMLParserRef, this.CFAllocatorRef, this.CFDataRef, this.CFURLRef, this.CFOptionFlags, this.CFIndex, this.CFXMLParserCallBacks.ptr, this.CFXMLParserContext.ptr);
    this.CFXMLParserCreateWithDataFromURL = lib.declare("CFXMLParserCreateWithDataFromURL", ctypes.default_abi, this.CFXMLParserRef, this.CFAllocatorRef, this.CFURLRef, this.CFOptionFlags, this.CFIndex, this.CFXMLParserCallBacks.ptr, this.CFXMLParserContext.ptr);
    this.CFXMLParserGetContext = lib.declare("CFXMLParserGetContext", ctypes.default_abi, ctypes.void_t, this.CFXMLParserRef, this.CFXMLParserContext.ptr);
    this.CFXMLParserGetCallBacks = lib.declare("CFXMLParserGetCallBacks", ctypes.default_abi, ctypes.void_t, this.CFXMLParserRef, this.CFXMLParserCallBacks.ptr);
    this.CFXMLParserGetSourceURL = lib.declare("CFXMLParserGetSourceURL", ctypes.default_abi, this.CFURLRef, this.CFXMLParserRef);
    this.CFXMLParserGetLocation = lib.declare("CFXMLParserGetLocation", ctypes.default_abi, this.CFIndex, this.CFXMLParserRef);
    this.CFXMLParserGetLineNumber = lib.declare("CFXMLParserGetLineNumber", ctypes.default_abi, this.CFIndex, this.CFXMLParserRef);
    this.CFXMLParserGetDocument = lib.declare("CFXMLParserGetDocument", ctypes.default_abi, ctypes.void_t.ptr, this.CFXMLParserRef);
    this.CFXMLParserGetStatusCode = lib.declare("CFXMLParserGetStatusCode", ctypes.default_abi, this.CFXMLParserStatusCode, this.CFXMLParserRef);
    this.CFXMLParserCopyErrorDescription = lib.declare("CFXMLParserCopyErrorDescription", ctypes.default_abi, this.CFStringRef, this.CFXMLParserRef);
    this.CFXMLParserAbort = lib.declare("CFXMLParserAbort", ctypes.default_abi, ctypes.void_t, this.CFXMLParserRef, this.CFXMLParserStatusCode, this.CFStringRef);
    this.CFXMLParserParse = lib.declare("CFXMLParserParse", ctypes.default_abi, this.Boolean, this.CFXMLParserRef);
    this.CFXMLTreeCreateFromData = lib.declare("CFXMLTreeCreateFromData", ctypes.default_abi, this.CFXMLTreeRef, this.CFAllocatorRef, this.CFDataRef, this.CFURLRef, this.CFOptionFlags, this.CFIndex);
    this.CFXMLTreeCreateFromDataWithError = lib.declare("CFXMLTreeCreateFromDataWithError", ctypes.default_abi, this.CFXMLTreeRef, this.CFAllocatorRef, this.CFDataRef, this.CFURLRef, this.CFOptionFlags, this.CFIndex, this.CFDictionaryRef.ptr);
    this.CFXMLTreeCreateWithDataFromURL = lib.declare("CFXMLTreeCreateWithDataFromURL", ctypes.default_abi, this.CFXMLTreeRef, this.CFAllocatorRef, this.CFURLRef, this.CFOptionFlags, this.CFIndex);
    this.CFXMLTreeCreateXMLData = lib.declare("CFXMLTreeCreateXMLData", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFXMLTreeRef);
    this.CFXMLCreateStringByEscapingEntities = lib.declare("CFXMLCreateStringByEscapingEntities", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef, this.CFDictionaryRef);
    this.CFXMLCreateStringByUnescapingEntities = lib.declare("CFXMLCreateStringByUnescapingEntities", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef, this.CFDictionaryRef);
    this.kCFXMLTreeErrorDescription = lib.declare("kCFXMLTreeErrorDescription", this.CFStringRef);
    this.kCFXMLTreeErrorLineNumber = lib.declare("kCFXMLTreeErrorLineNumber", this.CFStringRef);
    this.kCFXMLTreeErrorLocation = lib.declare("kCFXMLTreeErrorLocation", this.CFStringRef);
    this.kCFXMLTreeErrorStatusCode = lib.declare("kCFXMLTreeErrorStatusCode", this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFBase.h
function CFBase_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._CFBASE_H)
        return;
    this._CFBASE_H = true;

    // Dropping declaration of 'kCFCoreFoundationVersionNumber': No value
    this.CFTypeID = ctypes.unsigned_long;
    this.CFOptionFlags = ctypes.unsigned_long;
    this.CFHashCode = ctypes.unsigned_long;
    this.CFIndex = ctypes.long;
    this.CFTypeRef = ctypes.void_t.ptr;
    this.__CFString = new ctypes.StructType("__CFString");
    this.CFStringRef = this.__CFString.ptr;
    this.CFMutableStringRef = this.__CFString.ptr;
    this.CFPropertyListRef = this.CFTypeRef;
    this.kCFCompareLessThan = -1;
    this.kCFCompareEqualTo = 0;
    this.kCFCompareGreaterThan = 1;
    this.CFComparisonResult = this.CFIndex;
    this.CFComparatorFunction = new ctypes.FunctionType(ctypes.default_abi, this.CFComparisonResult, [ctypes.void_t.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.kCFNotFound = -1;
    this.CFRange = new ctypes.StructType("CFRange", [{location: this.CFIndex}, {length: this.CFIndex}]);
    // Dropping inline function 'CFRangeMake'.
    this.__CFRangeMake = lib.declare("__CFRangeMake", ctypes.default_abi, this.CFRange, this.CFIndex, this.CFIndex);
    this.__CFNull = new ctypes.StructType("__CFNull");
    this.CFNullRef = this.__CFNull.ptr;
    this.CFNullGetTypeID = lib.declare("CFNullGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCFNull = lib.declare("kCFNull", this.CFNullRef);
    this.__CFAllocator = new ctypes.StructType("__CFAllocator");
    this.CFAllocatorRef = this.__CFAllocator.ptr;
    this.kCFAllocatorDefault = lib.declare("kCFAllocatorDefault", this.CFAllocatorRef);
    this.kCFAllocatorSystemDefault = lib.declare("kCFAllocatorSystemDefault", this.CFAllocatorRef);
    this.kCFAllocatorMalloc = lib.declare("kCFAllocatorMalloc", this.CFAllocatorRef);
    this.kCFAllocatorMallocZone = lib.declare("kCFAllocatorMallocZone", this.CFAllocatorRef);
    this.kCFAllocatorNull = lib.declare("kCFAllocatorNull", this.CFAllocatorRef);
    this.kCFAllocatorUseContext = lib.declare("kCFAllocatorUseContext", this.CFAllocatorRef);
    this.CFAllocatorRetainCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr;
    this.CFAllocatorReleaseCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CFAllocatorCopyDescriptionCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr;
    this.CFAllocatorAllocateCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFIndex, this.CFOptionFlags, ctypes.void_t.ptr]).ptr;
    this.CFAllocatorReallocateCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr, this.CFIndex, this.CFOptionFlags, ctypes.void_t.ptr]).ptr;
    this.CFAllocatorDeallocateCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CFAllocatorPreferredSizeCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFIndex, [this.CFIndex, this.CFOptionFlags, ctypes.void_t.ptr]).ptr;
    this.CFAllocatorContext = new ctypes.StructType("CFAllocatorContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: this.CFAllocatorRetainCallBack}, {release: this.CFAllocatorReleaseCallBack}, {copyDescription: this.CFAllocatorCopyDescriptionCallBack}, {allocate: this.CFAllocatorAllocateCallBack}, {reallocate: this.CFAllocatorReallocateCallBack}, {deallocate: this.CFAllocatorDeallocateCallBack}, {preferredSize: this.CFAllocatorPreferredSizeCallBack}]);
    this.CFAllocatorGetTypeID = lib.declare("CFAllocatorGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFAllocatorSetDefault = lib.declare("CFAllocatorSetDefault", ctypes.default_abi, ctypes.void_t, this.CFAllocatorRef);
    this.CFAllocatorGetDefault = lib.declare("CFAllocatorGetDefault", ctypes.default_abi, this.CFAllocatorRef);
    this.CFAllocatorCreate = lib.declare("CFAllocatorCreate", ctypes.default_abi, this.CFAllocatorRef, this.CFAllocatorRef, this.CFAllocatorContext.ptr);
    this.CFAllocatorAllocate = lib.declare("CFAllocatorAllocate", ctypes.default_abi, ctypes.void_t.ptr, this.CFAllocatorRef, this.CFIndex, this.CFOptionFlags);
    this.CFAllocatorReallocate = lib.declare("CFAllocatorReallocate", ctypes.default_abi, ctypes.void_t.ptr, this.CFAllocatorRef, ctypes.void_t.ptr, this.CFIndex, this.CFOptionFlags);
    this.CFAllocatorDeallocate = lib.declare("CFAllocatorDeallocate", ctypes.default_abi, ctypes.void_t, this.CFAllocatorRef, ctypes.void_t.ptr);
    this.CFAllocatorGetPreferredSizeForSize = lib.declare("CFAllocatorGetPreferredSizeForSize", ctypes.default_abi, this.CFIndex, this.CFAllocatorRef, this.CFIndex, this.CFOptionFlags);
    this.CFAllocatorGetContext = lib.declare("CFAllocatorGetContext", ctypes.default_abi, ctypes.void_t, this.CFAllocatorRef, this.CFAllocatorContext.ptr);
    this.CFGetTypeID = lib.declare("CFGetTypeID", ctypes.default_abi, this.CFTypeID, this.CFTypeRef);
    this.CFCopyTypeIDDescription = lib.declare("CFCopyTypeIDDescription", ctypes.default_abi, this.CFStringRef, this.CFTypeID);
    this.CFRetain = lib.declare("CFRetain", ctypes.default_abi, this.CFTypeRef, this.CFTypeRef);
    this.CFRelease = lib.declare("CFRelease", ctypes.default_abi, ctypes.void_t, this.CFTypeRef);
    this.CFGetRetainCount = lib.declare("CFGetRetainCount", ctypes.default_abi, this.CFIndex, this.CFTypeRef);
    this.CFMakeCollectable = lib.declare("CFMakeCollectable", ctypes.default_abi, this.CFTypeRef, this.CFTypeRef);
    this.CFEqual = lib.declare("CFEqual", ctypes.default_abi, this.Boolean, this.CFTypeRef, this.CFTypeRef);
    this.CFHash = lib.declare("CFHash", ctypes.default_abi, this.CFHashCode, this.CFTypeRef);
    this.CFCopyDescription = lib.declare("CFCopyDescription", ctypes.default_abi, this.CFStringRef, this.CFTypeRef);
    this.CFGetAllocator = lib.declare("CFGetAllocator", ctypes.default_abi, this.CFAllocatorRef, this.CFTypeRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFTree.h
function CFTree_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFTREE_H)
        return;
    this._CFTREE_H = true;

    this.CFTreeRetainCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr;
    this.CFTreeReleaseCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CFTreeCopyDescriptionCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr;
    this.CFTreeContext = new ctypes.StructType("CFTreeContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: this.CFTreeRetainCallBack}, {release: this.CFTreeReleaseCallBack}, {copyDescription: this.CFTreeCopyDescriptionCallBack}]);
    this.CFTreeApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFTree = new ctypes.StructType("__CFTree");
    this.CFTreeRef = this.__CFTree.ptr;
    this.CFTreeGetTypeID = lib.declare("CFTreeGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFTreeCreate = lib.declare("CFTreeCreate", ctypes.default_abi, this.CFTreeRef, this.CFAllocatorRef, this.CFTreeContext.ptr);
    this.CFTreeGetParent = lib.declare("CFTreeGetParent", ctypes.default_abi, this.CFTreeRef, this.CFTreeRef);
    this.CFTreeGetNextSibling = lib.declare("CFTreeGetNextSibling", ctypes.default_abi, this.CFTreeRef, this.CFTreeRef);
    this.CFTreeGetFirstChild = lib.declare("CFTreeGetFirstChild", ctypes.default_abi, this.CFTreeRef, this.CFTreeRef);
    this.CFTreeGetContext = lib.declare("CFTreeGetContext", ctypes.default_abi, ctypes.void_t, this.CFTreeRef, this.CFTreeContext.ptr);
    this.CFTreeGetChildCount = lib.declare("CFTreeGetChildCount", ctypes.default_abi, this.CFIndex, this.CFTreeRef);
    this.CFTreeGetChildAtIndex = lib.declare("CFTreeGetChildAtIndex", ctypes.default_abi, this.CFTreeRef, this.CFTreeRef, this.CFIndex);
    this.CFTreeGetChildren = lib.declare("CFTreeGetChildren", ctypes.default_abi, ctypes.void_t, this.CFTreeRef, this.CFTreeRef.ptr);
    this.CFTreeApplyFunctionToChildren = lib.declare("CFTreeApplyFunctionToChildren", ctypes.default_abi, ctypes.void_t, this.CFTreeRef, this.CFTreeApplierFunction, ctypes.void_t.ptr);
    this.CFTreeFindRoot = lib.declare("CFTreeFindRoot", ctypes.default_abi, this.CFTreeRef, this.CFTreeRef);
    this.CFTreeSetContext = lib.declare("CFTreeSetContext", ctypes.default_abi, ctypes.void_t, this.CFTreeRef, this.CFTreeContext.ptr);
    this.CFTreePrependChild = lib.declare("CFTreePrependChild", ctypes.default_abi, ctypes.void_t, this.CFTreeRef, this.CFTreeRef);
    this.CFTreeAppendChild = lib.declare("CFTreeAppendChild", ctypes.default_abi, ctypes.void_t, this.CFTreeRef, this.CFTreeRef);
    this.CFTreeInsertSibling = lib.declare("CFTreeInsertSibling", ctypes.default_abi, ctypes.void_t, this.CFTreeRef, this.CFTreeRef);
    this.CFTreeRemove = lib.declare("CFTreeRemove", ctypes.default_abi, ctypes.void_t, this.CFTreeRef);
    this.CFTreeRemoveAllChildren = lib.declare("CFTreeRemoveAllChildren", ctypes.default_abi, ctypes.void_t, this.CFTreeRef);
    this.CFTreeSortChildren = lib.declare("CFTreeSortChildren", ctypes.default_abi, ctypes.void_t, this.CFTreeRef, this.CFComparatorFunction, ctypes.void_t.ptr);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFAttributedString.h
function CFAttributedString_h(lib) {
    CFBase_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFATTRIBUTEDSTRING_H)
        return;
    this._CFATTRIBUTEDSTRING_H = true;

    this.__CFAttributedString = new ctypes.StructType("__CFAttributedString");
    this.CFAttributedStringRef = this.__CFAttributedString.ptr;
    this.CFMutableAttributedStringRef = this.__CFAttributedString.ptr;
    this.CFAttributedStringGetTypeID = lib.declare("CFAttributedStringGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFAttributedStringCreate = lib.declare("CFAttributedStringCreate", ctypes.default_abi, this.CFAttributedStringRef, this.CFAllocatorRef, this.CFStringRef, this.CFDictionaryRef);
    this.CFAttributedStringCreateWithSubstring = lib.declare("CFAttributedStringCreateWithSubstring", ctypes.default_abi, this.CFAttributedStringRef, this.CFAllocatorRef, this.CFAttributedStringRef, this.CFRange);
    this.CFAttributedStringCreateCopy = lib.declare("CFAttributedStringCreateCopy", ctypes.default_abi, this.CFAttributedStringRef, this.CFAllocatorRef, this.CFAttributedStringRef);
    this.CFAttributedStringGetString = lib.declare("CFAttributedStringGetString", ctypes.default_abi, this.CFStringRef, this.CFAttributedStringRef);
    this.CFAttributedStringGetLength = lib.declare("CFAttributedStringGetLength", ctypes.default_abi, this.CFIndex, this.CFAttributedStringRef);
    this.CFAttributedStringGetAttributes = lib.declare("CFAttributedStringGetAttributes", ctypes.default_abi, this.CFDictionaryRef, this.CFAttributedStringRef, this.CFIndex, this.CFRange.ptr);
    this.CFAttributedStringGetAttribute = lib.declare("CFAttributedStringGetAttribute", ctypes.default_abi, this.CFTypeRef, this.CFAttributedStringRef, this.CFIndex, this.CFStringRef, this.CFRange.ptr);
    this.CFAttributedStringGetAttributesAndLongestEffectiveRange = lib.declare("CFAttributedStringGetAttributesAndLongestEffectiveRange", ctypes.default_abi, this.CFDictionaryRef, this.CFAttributedStringRef, this.CFIndex, this.CFRange, this.CFRange.ptr);
    this.CFAttributedStringGetAttributeAndLongestEffectiveRange = lib.declare("CFAttributedStringGetAttributeAndLongestEffectiveRange", ctypes.default_abi, this.CFTypeRef, this.CFAttributedStringRef, this.CFIndex, this.CFStringRef, this.CFRange, this.CFRange.ptr);
    this.CFAttributedStringCreateMutableCopy = lib.declare("CFAttributedStringCreateMutableCopy", ctypes.default_abi, this.CFMutableAttributedStringRef, this.CFAllocatorRef, this.CFIndex, this.CFAttributedStringRef);
    this.CFAttributedStringCreateMutable = lib.declare("CFAttributedStringCreateMutable", ctypes.default_abi, this.CFMutableAttributedStringRef, this.CFAllocatorRef, this.CFIndex);
    this.CFAttributedStringReplaceString = lib.declare("CFAttributedStringReplaceString", ctypes.default_abi, ctypes.void_t, this.CFMutableAttributedStringRef, this.CFRange, this.CFStringRef);
    this.CFAttributedStringGetMutableString = lib.declare("CFAttributedStringGetMutableString", ctypes.default_abi, this.CFMutableStringRef, this.CFMutableAttributedStringRef);
    this.CFAttributedStringSetAttributes = lib.declare("CFAttributedStringSetAttributes", ctypes.default_abi, ctypes.void_t, this.CFMutableAttributedStringRef, this.CFRange, this.CFDictionaryRef, this.Boolean);
    this.CFAttributedStringSetAttribute = lib.declare("CFAttributedStringSetAttribute", ctypes.default_abi, ctypes.void_t, this.CFMutableAttributedStringRef, this.CFRange, this.CFStringRef, this.CFTypeRef);
    this.CFAttributedStringRemoveAttribute = lib.declare("CFAttributedStringRemoveAttribute", ctypes.default_abi, ctypes.void_t, this.CFMutableAttributedStringRef, this.CFRange, this.CFStringRef);
    this.CFAttributedStringReplaceAttributedString = lib.declare("CFAttributedStringReplaceAttributedString", ctypes.default_abi, ctypes.void_t, this.CFMutableAttributedStringRef, this.CFRange, this.CFAttributedStringRef);
    this.CFAttributedStringBeginEditing = lib.declare("CFAttributedStringBeginEditing", ctypes.default_abi, ctypes.void_t, this.CFMutableAttributedStringRef);
    this.CFAttributedStringEndEditing = lib.declare("CFAttributedStringEndEditing", ctypes.default_abi, ctypes.void_t, this.CFMutableAttributedStringRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFMachPort.h
function CFMachPort_h(lib) {
    CFRunLoop_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFMACHPORT_H)
        return;
    this._CFMACHPORT_H = true;

    this.__CFMachPort = new ctypes.StructType("__CFMachPort");
    this.CFMachPortRef = this.__CFMachPort.ptr;
    this.CFMachPortContext = new ctypes.StructType("CFMachPortContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFMachPortCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFMachPortRef, ctypes.void_t.ptr, this.CFIndex, ctypes.void_t.ptr]).ptr;
    this.CFMachPortInvalidationCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFMachPortRef, ctypes.void_t.ptr]).ptr;
    this.CFMachPortGetTypeID = lib.declare("CFMachPortGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFMachPortCreate = lib.declare("CFMachPortCreate", ctypes.default_abi, this.CFMachPortRef, this.CFAllocatorRef, this.CFMachPortCallBack, this.CFMachPortContext.ptr, this.Boolean.ptr);
    // Dropping declaration of 'CFMachPortCreateWithPort': 'mach_port_t' defined out of scope
    // Dropping declaration of 'CFMachPortGetPort': 'mach_port_t' defined out of scope
    this.CFMachPortGetContext = lib.declare("CFMachPortGetContext", ctypes.default_abi, ctypes.void_t, this.CFMachPortRef, this.CFMachPortContext.ptr);
    this.CFMachPortInvalidate = lib.declare("CFMachPortInvalidate", ctypes.default_abi, ctypes.void_t, this.CFMachPortRef);
    this.CFMachPortIsValid = lib.declare("CFMachPortIsValid", ctypes.default_abi, this.Boolean, this.CFMachPortRef);
    this.CFMachPortGetInvalidationCallBack = lib.declare("CFMachPortGetInvalidationCallBack", ctypes.default_abi, this.CFMachPortInvalidationCallBack, this.CFMachPortRef);
    this.CFMachPortSetInvalidationCallBack = lib.declare("CFMachPortSetInvalidationCallBack", ctypes.default_abi, ctypes.void_t, this.CFMachPortRef, this.CFMachPortInvalidationCallBack);
    this.CFMachPortCreateRunLoopSource = lib.declare("CFMachPortCreateRunLoopSource", ctypes.default_abi, this.CFRunLoopSourceRef, this.CFAllocatorRef, this.CFMachPortRef, this.CFIndex);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFXMLNode.h
function CFXMLNode_h(lib) {
    CFTree_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFString_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFXMLNODE_H)
        return;
    this._CFXMLNODE_H = true;

    this.kCFXMLNodeCurrentVersion = 1;
    this.__CFXMLNode = new ctypes.StructType("__CFXMLNode");
    this.CFXMLNodeRef = this.__CFXMLNode.ptr;
    this.CFXMLTreeRef = this.CFTreeRef;
    this.kCFXMLNodeTypeDocument = 1;
    this.kCFXMLNodeTypeElement = 2;
    this.kCFXMLNodeTypeAttribute = 3;
    this.kCFXMLNodeTypeProcessingInstruction = 4;
    this.kCFXMLNodeTypeComment = 5;
    this.kCFXMLNodeTypeText = 6;
    this.kCFXMLNodeTypeCDATASection = 7;
    this.kCFXMLNodeTypeDocumentFragment = 8;
    this.kCFXMLNodeTypeEntity = 9;
    this.kCFXMLNodeTypeEntityReference = 10;
    this.kCFXMLNodeTypeDocumentType = 11;
    this.kCFXMLNodeTypeWhitespace = 12;
    this.kCFXMLNodeTypeNotation = 13;
    this.kCFXMLNodeTypeElementTypeDeclaration = 14;
    this.kCFXMLNodeTypeAttributeListDeclaration = 15;
    this.CFXMLNodeTypeCode = this.CFIndex;
    this.CFXMLElementInfo = new ctypes.StructType("CFXMLElementInfo", [{attributes: this.CFDictionaryRef}, {attributeOrder: this.CFArrayRef}, {isEmpty: this.Boolean}, {_reserved: ctypes.char.array(3)}]);
    this.CFXMLProcessingInstructionInfo = new ctypes.StructType("CFXMLProcessingInstructionInfo", [{dataString: this.CFStringRef}]);
    this.CFXMLDocumentInfo = new ctypes.StructType("CFXMLDocumentInfo", [{sourceURL: this.CFURLRef}, {encoding: this.CFStringEncoding}]);
    this.CFXMLExternalID = new ctypes.StructType("CFXMLExternalID", [{systemID: this.CFURLRef}, {publicID: this.CFStringRef}]);
    this.CFXMLDocumentTypeInfo = new ctypes.StructType("CFXMLDocumentTypeInfo", [{externalID: this.CFXMLExternalID}]);
    this.CFXMLNotationInfo = new ctypes.StructType("CFXMLNotationInfo", [{externalID: this.CFXMLExternalID}]);
    this.CFXMLElementTypeDeclarationInfo = new ctypes.StructType("CFXMLElementTypeDeclarationInfo", [{contentDescription: this.CFStringRef}]);
    this.CFXMLAttributeDeclarationInfo = new ctypes.StructType("CFXMLAttributeDeclarationInfo", [{attributeName: this.CFStringRef}, {typeString: this.CFStringRef}, {defaultString: this.CFStringRef}]);
    this.CFXMLAttributeListDeclarationInfo = new ctypes.StructType("CFXMLAttributeListDeclarationInfo", [{numberOfAttributes: this.CFIndex}, {attributes: this.CFXMLAttributeDeclarationInfo.ptr}]);
    this.kCFXMLEntityTypeParameter = 0;
    this.kCFXMLEntityTypeParsedInternal = 1;
    this.kCFXMLEntityTypeParsedExternal = 2;
    this.kCFXMLEntityTypeUnparsed = 3;
    this.kCFXMLEntityTypeCharacter = 4;
    this.CFXMLEntityTypeCode = this.CFIndex;
    this.CFXMLEntityInfo = new ctypes.StructType("CFXMLEntityInfo", [{entityType: this.CFXMLEntityTypeCode}, {replacementText: this.CFStringRef}, {entityID: this.CFXMLExternalID}, {notationName: this.CFStringRef}]);
    this.CFXMLEntityReferenceInfo = new ctypes.StructType("CFXMLEntityReferenceInfo", [{entityType: this.CFXMLEntityTypeCode}]);
    this.CFXMLNodeGetTypeID = lib.declare("CFXMLNodeGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFXMLNodeCreate = lib.declare("CFXMLNodeCreate", ctypes.default_abi, this.CFXMLNodeRef, this.CFAllocatorRef, this.CFXMLNodeTypeCode, this.CFStringRef, ctypes.void_t.ptr, this.CFIndex);
    this.CFXMLNodeCreateCopy = lib.declare("CFXMLNodeCreateCopy", ctypes.default_abi, this.CFXMLNodeRef, this.CFAllocatorRef, this.CFXMLNodeRef);
    this.CFXMLNodeGetTypeCode = lib.declare("CFXMLNodeGetTypeCode", ctypes.default_abi, this.CFXMLNodeTypeCode, this.CFXMLNodeRef);
    this.CFXMLNodeGetString = lib.declare("CFXMLNodeGetString", ctypes.default_abi, this.CFStringRef, this.CFXMLNodeRef);
    this.CFXMLNodeGetInfoPtr = lib.declare("CFXMLNodeGetInfoPtr", ctypes.default_abi, ctypes.void_t.ptr, this.CFXMLNodeRef);
    this.CFXMLNodeGetVersion = lib.declare("CFXMLNodeGetVersion", ctypes.default_abi, this.CFIndex, this.CFXMLNodeRef);
    this.CFXMLTreeCreateWithNode = lib.declare("CFXMLTreeCreateWithNode", ctypes.default_abi, this.CFXMLTreeRef, this.CFAllocatorRef, this.CFXMLNodeRef);
    this.CFXMLTreeGetNode = lib.declare("CFXMLTreeGetNode", ctypes.default_abi, this.CFXMLNodeRef, this.CFXMLTreeRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFUUID.h
function CFUUID_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFUUID_H)
        return;
    this._CFUUID_H = true;

    this.__CFUUID = new ctypes.StructType("__CFUUID");
    this.CFUUIDRef = this.__CFUUID.ptr;
    this.CFUUIDBytes = new ctypes.StructType("CFUUIDBytes", [{byte0: this.UInt8}, {byte1: this.UInt8}, {byte2: this.UInt8}, {byte3: this.UInt8}, {byte4: this.UInt8}, {byte5: this.UInt8}, {byte6: this.UInt8}, {byte7: this.UInt8}, {byte8: this.UInt8}, {byte9: this.UInt8}, {byte10: this.UInt8}, {byte11: this.UInt8}, {byte12: this.UInt8}, {byte13: this.UInt8}, {byte14: this.UInt8}, {byte15: this.UInt8}]);
    this.CFUUIDGetTypeID = lib.declare("CFUUIDGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFUUIDCreate = lib.declare("CFUUIDCreate", ctypes.default_abi, this.CFUUIDRef, this.CFAllocatorRef);
    this.CFUUIDCreateWithBytes = lib.declare("CFUUIDCreateWithBytes", ctypes.default_abi, this.CFUUIDRef, this.CFAllocatorRef, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8);
    this.CFUUIDCreateFromString = lib.declare("CFUUIDCreateFromString", ctypes.default_abi, this.CFUUIDRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFUUIDCreateString = lib.declare("CFUUIDCreateString", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFUUIDRef);
    this.CFUUIDGetConstantUUIDWithBytes = lib.declare("CFUUIDGetConstantUUIDWithBytes", ctypes.default_abi, this.CFUUIDRef, this.CFAllocatorRef, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8, this.UInt8);
    this.CFUUIDGetUUIDBytes = lib.declare("CFUUIDGetUUIDBytes", ctypes.default_abi, this.CFUUIDBytes, this.CFUUIDRef);
    this.CFUUIDCreateFromUUIDBytes = lib.declare("CFUUIDCreateFromUUIDBytes", ctypes.default_abi, this.CFUUIDRef, this.CFAllocatorRef, this.CFUUIDBytes);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFCharacterSet.h
function CFCharacterSet_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFData_h.call(this, lib);

    if (this._CFCHARACTERSET_H)
        return;
    this._CFCHARACTERSET_H = true;

    this.__CFCharacterSet = new ctypes.StructType("__CFCharacterSet");
    this.CFCharacterSetRef = this.__CFCharacterSet.ptr;
    this.CFMutableCharacterSetRef = this.__CFCharacterSet.ptr;
    this.kCFCharacterSetControl = 1;
    this.kCFCharacterSetWhitespace = 2;
    this.kCFCharacterSetWhitespaceAndNewline = 3;
    this.kCFCharacterSetDecimalDigit = 4;
    this.kCFCharacterSetLetter = 5;
    this.kCFCharacterSetLowercaseLetter = 6;
    this.kCFCharacterSetUppercaseLetter = 7;
    this.kCFCharacterSetNonBase = 8;
    this.kCFCharacterSetDecomposable = 9;
    this.kCFCharacterSetAlphaNumeric = 10;
    this.kCFCharacterSetPunctuation = 11;
    this.kCFCharacterSetCapitalizedLetter = 13;
    this.kCFCharacterSetSymbol = 14;
    this.kCFCharacterSetNewline = 15;
    this.kCFCharacterSetIllegal = 12;
    this.CFCharacterSetPredefinedSet = this.CFIndex;
    this.CFCharacterSetGetTypeID = lib.declare("CFCharacterSetGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFCharacterSetGetPredefined = lib.declare("CFCharacterSetGetPredefined", ctypes.default_abi, this.CFCharacterSetRef, this.CFCharacterSetPredefinedSet);
    this.CFCharacterSetCreateWithCharactersInRange = lib.declare("CFCharacterSetCreateWithCharactersInRange", ctypes.default_abi, this.CFCharacterSetRef, this.CFAllocatorRef, this.CFRange);
    this.CFCharacterSetCreateWithCharactersInString = lib.declare("CFCharacterSetCreateWithCharactersInString", ctypes.default_abi, this.CFCharacterSetRef, this.CFAllocatorRef, this.CFStringRef);
    this.CFCharacterSetCreateWithBitmapRepresentation = lib.declare("CFCharacterSetCreateWithBitmapRepresentation", ctypes.default_abi, this.CFCharacterSetRef, this.CFAllocatorRef, this.CFDataRef);
    this.CFCharacterSetCreateInvertedSet = lib.declare("CFCharacterSetCreateInvertedSet", ctypes.default_abi, this.CFCharacterSetRef, this.CFAllocatorRef, this.CFCharacterSetRef);
    this.CFCharacterSetIsSupersetOfSet = lib.declare("CFCharacterSetIsSupersetOfSet", ctypes.default_abi, this.Boolean, this.CFCharacterSetRef, this.CFCharacterSetRef);
    this.CFCharacterSetHasMemberInPlane = lib.declare("CFCharacterSetHasMemberInPlane", ctypes.default_abi, this.Boolean, this.CFCharacterSetRef, this.CFIndex);
    this.CFCharacterSetCreateMutable = lib.declare("CFCharacterSetCreateMutable", ctypes.default_abi, this.CFMutableCharacterSetRef, this.CFAllocatorRef);
    this.CFCharacterSetCreateCopy = lib.declare("CFCharacterSetCreateCopy", ctypes.default_abi, this.CFCharacterSetRef, this.CFAllocatorRef, this.CFCharacterSetRef);
    this.CFCharacterSetCreateMutableCopy = lib.declare("CFCharacterSetCreateMutableCopy", ctypes.default_abi, this.CFMutableCharacterSetRef, this.CFAllocatorRef, this.CFCharacterSetRef);
    this.CFCharacterSetIsCharacterMember = lib.declare("CFCharacterSetIsCharacterMember", ctypes.default_abi, this.Boolean, this.CFCharacterSetRef, this.UniChar);
    this.CFCharacterSetIsLongCharacterMember = lib.declare("CFCharacterSetIsLongCharacterMember", ctypes.default_abi, this.Boolean, this.CFCharacterSetRef, this.UTF32Char);
    this.CFCharacterSetCreateBitmapRepresentation = lib.declare("CFCharacterSetCreateBitmapRepresentation", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFCharacterSetRef);
    this.CFCharacterSetAddCharactersInRange = lib.declare("CFCharacterSetAddCharactersInRange", ctypes.default_abi, ctypes.void_t, this.CFMutableCharacterSetRef, this.CFRange);
    this.CFCharacterSetRemoveCharactersInRange = lib.declare("CFCharacterSetRemoveCharactersInRange", ctypes.default_abi, ctypes.void_t, this.CFMutableCharacterSetRef, this.CFRange);
    this.CFCharacterSetAddCharactersInString = lib.declare("CFCharacterSetAddCharactersInString", ctypes.default_abi, ctypes.void_t, this.CFMutableCharacterSetRef, this.CFStringRef);
    this.CFCharacterSetRemoveCharactersInString = lib.declare("CFCharacterSetRemoveCharactersInString", ctypes.default_abi, ctypes.void_t, this.CFMutableCharacterSetRef, this.CFStringRef);
    this.CFCharacterSetUnion = lib.declare("CFCharacterSetUnion", ctypes.default_abi, ctypes.void_t, this.CFMutableCharacterSetRef, this.CFCharacterSetRef);
    this.CFCharacterSetIntersect = lib.declare("CFCharacterSetIntersect", ctypes.default_abi, ctypes.void_t, this.CFMutableCharacterSetRef, this.CFCharacterSetRef);
    this.CFCharacterSetInvert = lib.declare("CFCharacterSetInvert", ctypes.default_abi, ctypes.void_t, this.CFMutableCharacterSetRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFDateFormatter.h
function CFDateFormatter_h(lib) {
    CFBase_h.call(this, lib);
    CFLocale_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFDate_h.call(this, lib);

    if (this._CFDATEFORMATTER_H)
        return;
    this._CFDATEFORMATTER_H = true;

    this.__CFDateFormatter = new ctypes.StructType("__CFDateFormatter");
    this.CFDateFormatterRef = this.__CFDateFormatter.ptr;
    this.CFDateFormatterCreateDateFormatFromTemplate = lib.declare("CFDateFormatterCreateDateFormatFromTemplate", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFStringRef, this.CFOptionFlags, this.CFLocaleRef);
    this.CFDateFormatterGetTypeID = lib.declare("CFDateFormatterGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kCFDateFormatterNoStyle = 0;
    this.kCFDateFormatterShortStyle = 1;
    this.kCFDateFormatterMediumStyle = 2;
    this.kCFDateFormatterLongStyle = 3;
    this.kCFDateFormatterFullStyle = 4;
    this.CFDateFormatterStyle = this.CFIndex;
    this.CFDateFormatterCreate = lib.declare("CFDateFormatterCreate", ctypes.default_abi, this.CFDateFormatterRef, this.CFAllocatorRef, this.CFLocaleRef, this.CFDateFormatterStyle, this.CFDateFormatterStyle);
    this.CFDateFormatterGetLocale = lib.declare("CFDateFormatterGetLocale", ctypes.default_abi, this.CFLocaleRef, this.CFDateFormatterRef);
    this.CFDateFormatterGetDateStyle = lib.declare("CFDateFormatterGetDateStyle", ctypes.default_abi, this.CFDateFormatterStyle, this.CFDateFormatterRef);
    this.CFDateFormatterGetTimeStyle = lib.declare("CFDateFormatterGetTimeStyle", ctypes.default_abi, this.CFDateFormatterStyle, this.CFDateFormatterRef);
    this.CFDateFormatterGetFormat = lib.declare("CFDateFormatterGetFormat", ctypes.default_abi, this.CFStringRef, this.CFDateFormatterRef);
    this.CFDateFormatterSetFormat = lib.declare("CFDateFormatterSetFormat", ctypes.default_abi, ctypes.void_t, this.CFDateFormatterRef, this.CFStringRef);
    this.CFDateFormatterCreateStringWithDate = lib.declare("CFDateFormatterCreateStringWithDate", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFDateFormatterRef, this.CFDateRef);
    this.CFDateFormatterCreateStringWithAbsoluteTime = lib.declare("CFDateFormatterCreateStringWithAbsoluteTime", ctypes.default_abi, this.CFStringRef, this.CFAllocatorRef, this.CFDateFormatterRef, this.CFAbsoluteTime);
    this.CFDateFormatterCreateDateFromString = lib.declare("CFDateFormatterCreateDateFromString", ctypes.default_abi, this.CFDateRef, this.CFAllocatorRef, this.CFDateFormatterRef, this.CFStringRef, this.CFRange.ptr);
    this.CFDateFormatterGetAbsoluteTimeFromString = lib.declare("CFDateFormatterGetAbsoluteTimeFromString", ctypes.default_abi, this.Boolean, this.CFDateFormatterRef, this.CFStringRef, this.CFRange.ptr, this.CFAbsoluteTime.ptr);
    this.CFDateFormatterSetProperty = lib.declare("CFDateFormatterSetProperty", ctypes.default_abi, ctypes.void_t, this.CFDateFormatterRef, this.CFStringRef, this.CFTypeRef);
    this.CFDateFormatterCopyProperty = lib.declare("CFDateFormatterCopyProperty", ctypes.default_abi, this.CFTypeRef, this.CFDateFormatterRef, this.CFStringRef);
    this.kCFDateFormatterIsLenient = lib.declare("kCFDateFormatterIsLenient", this.CFStringRef);
    this.kCFDateFormatterTimeZone = lib.declare("kCFDateFormatterTimeZone", this.CFStringRef);
    this.kCFDateFormatterCalendarName = lib.declare("kCFDateFormatterCalendarName", this.CFStringRef);
    this.kCFDateFormatterDefaultFormat = lib.declare("kCFDateFormatterDefaultFormat", this.CFStringRef);
    this.kCFDateFormatterTwoDigitStartDate = lib.declare("kCFDateFormatterTwoDigitStartDate", this.CFStringRef);
    this.kCFDateFormatterDefaultDate = lib.declare("kCFDateFormatterDefaultDate", this.CFStringRef);
    this.kCFDateFormatterCalendar = lib.declare("kCFDateFormatterCalendar", this.CFStringRef);
    this.kCFDateFormatterEraSymbols = lib.declare("kCFDateFormatterEraSymbols", this.CFStringRef);
    this.kCFDateFormatterMonthSymbols = lib.declare("kCFDateFormatterMonthSymbols", this.CFStringRef);
    this.kCFDateFormatterShortMonthSymbols = lib.declare("kCFDateFormatterShortMonthSymbols", this.CFStringRef);
    this.kCFDateFormatterWeekdaySymbols = lib.declare("kCFDateFormatterWeekdaySymbols", this.CFStringRef);
    this.kCFDateFormatterShortWeekdaySymbols = lib.declare("kCFDateFormatterShortWeekdaySymbols", this.CFStringRef);
    this.kCFDateFormatterAMSymbol = lib.declare("kCFDateFormatterAMSymbol", this.CFStringRef);
    this.kCFDateFormatterPMSymbol = lib.declare("kCFDateFormatterPMSymbol", this.CFStringRef);
    this.kCFDateFormatterLongEraSymbols = lib.declare("kCFDateFormatterLongEraSymbols", this.CFStringRef);
    this.kCFDateFormatterVeryShortMonthSymbols = lib.declare("kCFDateFormatterVeryShortMonthSymbols", this.CFStringRef);
    this.kCFDateFormatterStandaloneMonthSymbols = lib.declare("kCFDateFormatterStandaloneMonthSymbols", this.CFStringRef);
    this.kCFDateFormatterShortStandaloneMonthSymbols = lib.declare("kCFDateFormatterShortStandaloneMonthSymbols", this.CFStringRef);
    this.kCFDateFormatterVeryShortStandaloneMonthSymbols = lib.declare("kCFDateFormatterVeryShortStandaloneMonthSymbols", this.CFStringRef);
    this.kCFDateFormatterVeryShortWeekdaySymbols = lib.declare("kCFDateFormatterVeryShortWeekdaySymbols", this.CFStringRef);
    this.kCFDateFormatterStandaloneWeekdaySymbols = lib.declare("kCFDateFormatterStandaloneWeekdaySymbols", this.CFStringRef);
    this.kCFDateFormatterShortStandaloneWeekdaySymbols = lib.declare("kCFDateFormatterShortStandaloneWeekdaySymbols", this.CFStringRef);
    this.kCFDateFormatterVeryShortStandaloneWeekdaySymbols = lib.declare("kCFDateFormatterVeryShortStandaloneWeekdaySymbols", this.CFStringRef);
    this.kCFDateFormatterQuarterSymbols = lib.declare("kCFDateFormatterQuarterSymbols", this.CFStringRef);
    this.kCFDateFormatterShortQuarterSymbols = lib.declare("kCFDateFormatterShortQuarterSymbols", this.CFStringRef);
    this.kCFDateFormatterStandaloneQuarterSymbols = lib.declare("kCFDateFormatterStandaloneQuarterSymbols", this.CFStringRef);
    this.kCFDateFormatterShortStandaloneQuarterSymbols = lib.declare("kCFDateFormatterShortStandaloneQuarterSymbols", this.CFStringRef);
    this.kCFDateFormatterGregorianStartDate = lib.declare("kCFDateFormatterGregorianStartDate", this.CFStringRef);
    this.kCFDateFormatterDoesRelativeDateFormattingKey = lib.declare("kCFDateFormatterDoesRelativeDateFormattingKey", this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFURLAccess.h
function CFURLAccess_h(lib) {
    CFData_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFURLACCESS_H)
        return;
    this._CFURLACCESS_H = true;

    this.CFURLCreateDataAndPropertiesFromResource = lib.declare("CFURLCreateDataAndPropertiesFromResource", ctypes.default_abi, this.Boolean, this.CFAllocatorRef, this.CFURLRef, this.CFDataRef.ptr, this.CFDictionaryRef.ptr, this.CFArrayRef, this.SInt32.ptr);
    this.CFURLWriteDataAndPropertiesToResource = lib.declare("CFURLWriteDataAndPropertiesToResource", ctypes.default_abi, this.Boolean, this.CFURLRef, this.CFDataRef, this.CFDictionaryRef, this.SInt32.ptr);
    this.CFURLDestroyResource = lib.declare("CFURLDestroyResource", ctypes.default_abi, this.Boolean, this.CFURLRef, this.SInt32.ptr);
    this.CFURLCreatePropertyFromResource = lib.declare("CFURLCreatePropertyFromResource", ctypes.default_abi, this.CFTypeRef, this.CFAllocatorRef, this.CFURLRef, this.CFStringRef, this.SInt32.ptr);
    this.kCFURLUnknownError = -10;
    this.kCFURLUnknownSchemeError = -11;
    this.kCFURLResourceNotFoundError = -12;
    this.kCFURLResourceAccessViolationError = -13;
    this.kCFURLRemoteHostUnavailableError = -14;
    this.kCFURLImproperArgumentsError = -15;
    this.kCFURLUnknownPropertyKeyError = -16;
    this.kCFURLPropertyKeyUnavailableError = -17;
    this.kCFURLTimeoutError = -18;
    this.CFURLError = this.CFIndex;
    this.kCFURLFileExists = lib.declare("kCFURLFileExists", this.CFStringRef);
    this.kCFURLFileDirectoryContents = lib.declare("kCFURLFileDirectoryContents", this.CFStringRef);
    this.kCFURLFileLength = lib.declare("kCFURLFileLength", this.CFStringRef);
    this.kCFURLFileLastModificationTime = lib.declare("kCFURLFileLastModificationTime", this.CFStringRef);
    this.kCFURLFilePOSIXMode = lib.declare("kCFURLFilePOSIXMode", this.CFStringRef);
    this.kCFURLFileOwnerID = lib.declare("kCFURLFileOwnerID", this.CFStringRef);
    this.kCFURLHTTPStatusCode = lib.declare("kCFURLHTTPStatusCode", this.CFStringRef);
    this.kCFURLHTTPStatusLine = lib.declare("kCFURLHTTPStatusLine", this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFNotificationCenter.h
function CFNotificationCenter_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFNOTIFICATIONCENTER_H)
        return;
    this._CFNOTIFICATIONCENTER_H = true;

    this.__CFNotificationCenter = new ctypes.StructType("__CFNotificationCenter");
    this.CFNotificationCenterRef = this.__CFNotificationCenter.ptr;
    this.CFNotificationCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFNotificationCenterRef, ctypes.void_t.ptr, this.CFStringRef, ctypes.void_t.ptr, this.CFDictionaryRef]).ptr;
    this.CFNotificationSuspensionBehaviorDrop = 1;
    this.CFNotificationSuspensionBehaviorCoalesce = 2;
    this.CFNotificationSuspensionBehaviorHold = 3;
    this.CFNotificationSuspensionBehaviorDeliverImmediately = 4;
    this.CFNotificationSuspensionBehavior = this.CFIndex;
    this.CFNotificationCenterGetTypeID = lib.declare("CFNotificationCenterGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CFNotificationCenterGetLocalCenter = lib.declare("CFNotificationCenterGetLocalCenter", ctypes.default_abi, this.CFNotificationCenterRef);
    this.CFNotificationCenterGetDistributedCenter = lib.declare("CFNotificationCenterGetDistributedCenter", ctypes.default_abi, this.CFNotificationCenterRef);
    this.CFNotificationCenterGetDarwinNotifyCenter = lib.declare("CFNotificationCenterGetDarwinNotifyCenter", ctypes.default_abi, this.CFNotificationCenterRef);
    this.CFNotificationCenterAddObserver = lib.declare("CFNotificationCenterAddObserver", ctypes.default_abi, ctypes.void_t, this.CFNotificationCenterRef, ctypes.void_t.ptr, this.CFNotificationCallback, this.CFStringRef, ctypes.void_t.ptr, this.CFNotificationSuspensionBehavior);
    this.CFNotificationCenterRemoveObserver = lib.declare("CFNotificationCenterRemoveObserver", ctypes.default_abi, ctypes.void_t, this.CFNotificationCenterRef, ctypes.void_t.ptr, this.CFStringRef, ctypes.void_t.ptr);
    this.CFNotificationCenterRemoveEveryObserver = lib.declare("CFNotificationCenterRemoveEveryObserver", ctypes.default_abi, ctypes.void_t, this.CFNotificationCenterRef, ctypes.void_t.ptr);
    this.CFNotificationCenterPostNotification = lib.declare("CFNotificationCenterPostNotification", ctypes.default_abi, ctypes.void_t, this.CFNotificationCenterRef, this.CFStringRef, ctypes.void_t.ptr, this.CFDictionaryRef, this.Boolean);
    this.kCFNotificationDeliverImmediately = 1;
    this.kCFNotificationPostToAllSessions = 2;
    this.CFNotificationCenterPostNotificationWithOptions = lib.declare("CFNotificationCenterPostNotificationWithOptions", ctypes.default_abi, ctypes.void_t, this.CFNotificationCenterRef, this.CFStringRef, ctypes.void_t.ptr, this.CFDictionaryRef, this.CFOptionFlags);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFPropertyList.h
function CFPropertyList_h(lib) {
    CFData_h.call(this, lib);
    CFError_h.call(this, lib);
    CFStream_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CFPROPERTYLIST_H)
        return;
    this._CFPROPERTYLIST_H = true;

    this.kCFPropertyListImmutable = 0;
    this.kCFPropertyListMutableContainers = 1;
    this.kCFPropertyListMutableContainersAndLeaves = 2;
    this.CFPropertyListMutabilityOptions = this.CFOptionFlags;
    this.CFPropertyListCreateFromXMLData = lib.declare("CFPropertyListCreateFromXMLData", ctypes.default_abi, this.CFPropertyListRef, this.CFAllocatorRef, this.CFDataRef, this.CFOptionFlags, this.CFStringRef.ptr);
    this.CFPropertyListCreateXMLData = lib.declare("CFPropertyListCreateXMLData", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFPropertyListRef);
    this.CFPropertyListCreateDeepCopy = lib.declare("CFPropertyListCreateDeepCopy", ctypes.default_abi, this.CFPropertyListRef, this.CFAllocatorRef, this.CFPropertyListRef, this.CFOptionFlags);
    this.kCFPropertyListOpenStepFormat = 1;
    this.kCFPropertyListXMLFormat_v1_0 = 100;
    this.kCFPropertyListBinaryFormat_v1_0 = 200;
    this.CFPropertyListFormat = this.CFIndex;
    this.CFPropertyListIsValid = lib.declare("CFPropertyListIsValid", ctypes.default_abi, this.Boolean, this.CFPropertyListRef, this.CFPropertyListFormat);
    this.CFPropertyListWriteToStream = lib.declare("CFPropertyListWriteToStream", ctypes.default_abi, this.CFIndex, this.CFPropertyListRef, this.CFWriteStreamRef, this.CFPropertyListFormat, this.CFStringRef.ptr);
    this.CFPropertyListCreateFromStream = lib.declare("CFPropertyListCreateFromStream", ctypes.default_abi, this.CFPropertyListRef, this.CFAllocatorRef, this.CFReadStreamRef, this.CFIndex, this.CFOptionFlags, this.CFPropertyListFormat.ptr, this.CFStringRef.ptr);
    this.kCFPropertyListReadCorruptError = 3840;
    this.kCFPropertyListReadUnknownVersionError = 3841;
    this.kCFPropertyListReadStreamError = 3842;
    this.kCFPropertyListWriteStreamError = 3851;
    this.CFPropertyListCreateWithData = lib.declare("CFPropertyListCreateWithData", ctypes.default_abi, this.CFPropertyListRef, this.CFAllocatorRef, this.CFDataRef, this.CFOptionFlags, this.CFPropertyListFormat.ptr, this.CFErrorRef.ptr);
    this.CFPropertyListCreateWithStream = lib.declare("CFPropertyListCreateWithStream", ctypes.default_abi, this.CFPropertyListRef, this.CFAllocatorRef, this.CFReadStreamRef, this.CFIndex, this.CFOptionFlags, this.CFPropertyListFormat.ptr, this.CFErrorRef.ptr);
    this.CFPropertyListWrite = lib.declare("CFPropertyListWrite", ctypes.default_abi, this.CFIndex, this.CFPropertyListRef, this.CFWriteStreamRef, this.CFPropertyListFormat, this.CFOptionFlags, this.CFErrorRef.ptr);
    this.CFPropertyListCreateData = lib.declare("CFPropertyListCreateData", ctypes.default_abi, this.CFDataRef, this.CFAllocatorRef, this.CFPropertyListRef, this.CFPropertyListFormat, this.CFOptionFlags, this.CFErrorRef.ptr);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFStringEncodingExt.h
function CFStringEncodingExt_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFSTRINGENCODINGEXT_H)
        return;
    this._CFSTRINGENCODINGEXT_H = true;

    this.kCFStringEncodingMacJapanese = 1;
    this.kCFStringEncodingMacChineseTrad = 2;
    this.kCFStringEncodingMacKorean = 3;
    this.kCFStringEncodingMacArabic = 4;
    this.kCFStringEncodingMacHebrew = 5;
    this.kCFStringEncodingMacGreek = 6;
    this.kCFStringEncodingMacCyrillic = 7;
    this.kCFStringEncodingMacDevanagari = 9;
    this.kCFStringEncodingMacGurmukhi = 10;
    this.kCFStringEncodingMacGujarati = 11;
    this.kCFStringEncodingMacOriya = 12;
    this.kCFStringEncodingMacBengali = 13;
    this.kCFStringEncodingMacTamil = 14;
    this.kCFStringEncodingMacTelugu = 15;
    this.kCFStringEncodingMacKannada = 16;
    this.kCFStringEncodingMacMalayalam = 17;
    this.kCFStringEncodingMacSinhalese = 18;
    this.kCFStringEncodingMacBurmese = 19;
    this.kCFStringEncodingMacKhmer = 20;
    this.kCFStringEncodingMacThai = 21;
    this.kCFStringEncodingMacLaotian = 22;
    this.kCFStringEncodingMacGeorgian = 23;
    this.kCFStringEncodingMacArmenian = 24;
    this.kCFStringEncodingMacChineseSimp = 25;
    this.kCFStringEncodingMacTibetan = 26;
    this.kCFStringEncodingMacMongolian = 27;
    this.kCFStringEncodingMacEthiopic = 28;
    this.kCFStringEncodingMacCentralEurRoman = 29;
    this.kCFStringEncodingMacVietnamese = 30;
    this.kCFStringEncodingMacExtArabic = 31;
    this.kCFStringEncodingMacSymbol = 33;
    this.kCFStringEncodingMacDingbats = 34;
    this.kCFStringEncodingMacTurkish = 35;
    this.kCFStringEncodingMacCroatian = 36;
    this.kCFStringEncodingMacIcelandic = 37;
    this.kCFStringEncodingMacRomanian = 38;
    this.kCFStringEncodingMacCeltic = 39;
    this.kCFStringEncodingMacGaelic = 40;
    this.kCFStringEncodingMacFarsi = 140;
    this.kCFStringEncodingMacUkrainian = 152;
    this.kCFStringEncodingMacInuit = 236;
    this.kCFStringEncodingMacVT100 = 252;
    this.kCFStringEncodingMacHFS = 255;
    this.kCFStringEncodingISOLatin2 = 514;
    this.kCFStringEncodingISOLatin3 = 515;
    this.kCFStringEncodingISOLatin4 = 516;
    this.kCFStringEncodingISOLatinCyrillic = 517;
    this.kCFStringEncodingISOLatinArabic = 518;
    this.kCFStringEncodingISOLatinGreek = 519;
    this.kCFStringEncodingISOLatinHebrew = 520;
    this.kCFStringEncodingISOLatin5 = 521;
    this.kCFStringEncodingISOLatin6 = 522;
    this.kCFStringEncodingISOLatinThai = 523;
    this.kCFStringEncodingISOLatin7 = 525;
    this.kCFStringEncodingISOLatin8 = 526;
    this.kCFStringEncodingISOLatin9 = 527;
    this.kCFStringEncodingISOLatin10 = 528;
    this.kCFStringEncodingDOSLatinUS = 1024;
    this.kCFStringEncodingDOSGreek = 1029;
    this.kCFStringEncodingDOSBalticRim = 1030;
    this.kCFStringEncodingDOSLatin1 = 1040;
    this.kCFStringEncodingDOSGreek1 = 1041;
    this.kCFStringEncodingDOSLatin2 = 1042;
    this.kCFStringEncodingDOSCyrillic = 1043;
    this.kCFStringEncodingDOSTurkish = 1044;
    this.kCFStringEncodingDOSPortuguese = 1045;
    this.kCFStringEncodingDOSIcelandic = 1046;
    this.kCFStringEncodingDOSHebrew = 1047;
    this.kCFStringEncodingDOSCanadianFrench = 1048;
    this.kCFStringEncodingDOSArabic = 1049;
    this.kCFStringEncodingDOSNordic = 1050;
    this.kCFStringEncodingDOSRussian = 1051;
    this.kCFStringEncodingDOSGreek2 = 1052;
    this.kCFStringEncodingDOSThai = 1053;
    this.kCFStringEncodingDOSJapanese = 1056;
    this.kCFStringEncodingDOSChineseSimplif = 1057;
    this.kCFStringEncodingDOSKorean = 1058;
    this.kCFStringEncodingDOSChineseTrad = 1059;
    this.kCFStringEncodingWindowsLatin2 = 1281;
    this.kCFStringEncodingWindowsCyrillic = 1282;
    this.kCFStringEncodingWindowsGreek = 1283;
    this.kCFStringEncodingWindowsLatin5 = 1284;
    this.kCFStringEncodingWindowsHebrew = 1285;
    this.kCFStringEncodingWindowsArabic = 1286;
    this.kCFStringEncodingWindowsBalticRim = 1287;
    this.kCFStringEncodingWindowsVietnamese = 1288;
    this.kCFStringEncodingWindowsKoreanJohab = 1296;
    this.kCFStringEncodingANSEL = 1537;
    this.kCFStringEncodingJIS_X0201_76 = 1568;
    this.kCFStringEncodingJIS_X0208_83 = 1569;
    this.kCFStringEncodingJIS_X0208_90 = 1570;
    this.kCFStringEncodingJIS_X0212_90 = 1571;
    this.kCFStringEncodingJIS_C6226_78 = 1572;
    this.kCFStringEncodingShiftJIS_X0213 = 1576;
    this.kCFStringEncodingShiftJIS_X0213_MenKuTen = 1577;
    this.kCFStringEncodingGB_2312_80 = 1584;
    this.kCFStringEncodingGBK_95 = 1585;
    this.kCFStringEncodingGB_18030_2000 = 1586;
    this.kCFStringEncodingKSC_5601_87 = 1600;
    this.kCFStringEncodingKSC_5601_92_Johab = 1601;
    this.kCFStringEncodingCNS_11643_92_P1 = 1617;
    this.kCFStringEncodingCNS_11643_92_P2 = 1618;
    this.kCFStringEncodingCNS_11643_92_P3 = 1619;
    this.kCFStringEncodingISO_2022_JP = 2080;
    this.kCFStringEncodingISO_2022_JP_2 = 2081;
    this.kCFStringEncodingISO_2022_JP_1 = 2082;
    this.kCFStringEncodingISO_2022_JP_3 = 2083;
    this.kCFStringEncodingISO_2022_CN = 2096;
    this.kCFStringEncodingISO_2022_CN_EXT = 2097;
    this.kCFStringEncodingISO_2022_KR = 2112;
    this.kCFStringEncodingEUC_JP = 2336;
    this.kCFStringEncodingEUC_CN = 2352;
    this.kCFStringEncodingEUC_TW = 2353;
    this.kCFStringEncodingEUC_KR = 2368;
    this.kCFStringEncodingShiftJIS = 2561;
    this.kCFStringEncodingKOI8_R = 2562;
    this.kCFStringEncodingBig5 = 2563;
    this.kCFStringEncodingMacRomanLatin1 = 2564;
    this.kCFStringEncodingHZ_GB_2312 = 2565;
    this.kCFStringEncodingBig5_HKSCS_1999 = 2566;
    this.kCFStringEncodingVISCII = 2567;
    this.kCFStringEncodingKOI8_U = 2568;
    this.kCFStringEncodingBig5_E = 2569;
    this.kCFStringEncodingNextStepJapanese = 2818;
    this.kCFStringEncodingEBCDIC_US = 3073;
    this.kCFStringEncodingEBCDIC_CP037 = 3074;
    this.kCFStringEncodingUTF7 = 67109120;
    this.kCFStringEncodingUTF7_IMAP = 2576;
    this.kCFStringEncodingShiftJIS_X0213_00 = 1576;
    this.CFStringEncodings = this.CFIndex;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["CoreFoundation", "CFString_h", "CFStringTokenizer_h", "CFNumberFormatter_h", "CFByteOrder_h", "CFError_h", "CFStream_h", "CFURL_h", "CFMessagePort_h", "CFDictionary_h", "CFPreferences_h", "CFSet_h", "CFLocale_h", "CFUserNotification_h", "CFBinaryHeap_h", "CFFileDescriptor_h", "CFRunLoop_h", "CFData_h", "CFBundle_h", "CFDate_h", "CFURLEnumerator_h", "CFSocket_h", "CFBitVector_h", "CFCalendar_h", "CFPlugIn_h", "CFNumber_h", "CFArray_h", "CFBag_h", "CFTimeZone_h", "CFXMLParser_h", "CFBase_h", "CFTree_h", "CFAttributedString_h", "CFMachPort_h", "CFXMLNode_h", "CFUUID_h", "CFCharacterSet_h", "CFDateFormatter_h", "CFURLAccess_h", "CFNotificationCenter_h", "CFPropertyList_h", "CFStringEncodingExt_h"];

function CoreFoundation() {
    let libpath = "/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation";
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

    CFString_h.call(this, lib);
    CFStringTokenizer_h.call(this, lib);
    CFNumberFormatter_h.call(this, lib);
    CFByteOrder_h.call(this, lib);
    CFError_h.call(this, lib);
    CFStream_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFMessagePort_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFPreferences_h.call(this, lib);
    CFSet_h.call(this, lib);
    CFLocale_h.call(this, lib);
    CFUserNotification_h.call(this, lib);
    CFBinaryHeap_h.call(this, lib);
    CFFileDescriptor_h.call(this, lib);
    CFRunLoop_h.call(this, lib);
    CFData_h.call(this, lib);
    CFBundle_h.call(this, lib);
    CFDate_h.call(this, lib);
    CFURLEnumerator_h.call(this, lib);
    CFSocket_h.call(this, lib);
    CFBitVector_h.call(this, lib);
    CFCalendar_h.call(this, lib);
    CFPlugIn_h.call(this, lib);
    CFNumber_h.call(this, lib);
    CFArray_h.call(this, lib);
    CFBag_h.call(this, lib);
    CFTimeZone_h.call(this, lib);
    CFXMLParser_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFTree_h.call(this, lib);
    CFAttributedString_h.call(this, lib);
    CFMachPort_h.call(this, lib);
    CFXMLNode_h.call(this, lib);
    CFUUID_h.call(this, lib);
    CFCharacterSet_h.call(this, lib);
    CFDateFormatter_h.call(this, lib);
    CFURLAccess_h.call(this, lib);
    CFNotificationCenter_h.call(this, lib);
    CFPropertyList_h.call(this, lib);
    CFStringEncodingExt_h.call(this, lib);
}
