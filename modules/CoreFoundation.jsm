// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFString.h
function CFString_h(lib) {
    CFBase_h.call(this, lib);
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
    this.kCFStringNormalizationFormD = 0;
    this.kCFStringNormalizationFormKD = 1;
    this.kCFStringNormalizationFormC = 2;
    this.kCFStringNormalizationFormKC = 3;
    this.CFStringNormalizationForm = this.CFIndex;
    this.CFStringInlineBuffer = new ctypes.StructType("CFStringInlineBuffer", [{buffer: this.UniChar.array(64)}, {theString: this.CFStringRef}, {directBuffer: this.UniChar.ptr}, {rangeToBuffer: this.CFRange}, {bufferedRangeStart: this.CFIndex}, {bufferedRangeEnd: this.CFIndex}]);
    // Dropping inline function 'CFStringInitInlineBuffer'.
    // Dropping inline function 'CFStringGetCharacterFromInlineBuffer'.
    // Dropping inline function 'CFStringIsSurrogateHighCharacter'.
    // Dropping inline function 'CFStringIsSurrogateLowCharacter'.
    // Dropping inline function 'CFStringGetLongCharacterForSurrogatePair'.
    // Dropping inline function 'CFStringGetSurrogatePairForLongCharacter'.
    // Dropping inline function 'CFStringGetSurrogatePairForLongCharacter'.
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFStringTokenizer.h
function CFStringTokenizer_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFSTRINGTOKENIZER_H)
        return;
    this._CFSTRINGTOKENIZER_H = true;

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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFNumberFormatter.h
function CFNumberFormatter_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFNUMBERFORMATTER_H)
        return;
    this._CFNUMBERFORMATTER_H = true;

    this.__CFNumberFormatter = new ctypes.StructType("__CFNumberFormatter");
    this.CFNumberFormatterRef = this.__CFNumberFormatter.ptr;
    this.kCFNumberFormatterNoStyle = 0;
    this.kCFNumberFormatterDecimalStyle = 1;
    this.kCFNumberFormatterCurrencyStyle = 2;
    this.kCFNumberFormatterPercentStyle = 3;
    this.kCFNumberFormatterScientificStyle = 4;
    this.kCFNumberFormatterSpellOutStyle = 5;
    this.CFNumberFormatterStyle = this.CFIndex;
    this.kCFNumberFormatterParseIntegersOnly = 1;
    this.CFNumberFormatterOptionFlags = this.CFOptionFlags;
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

    if (this._CFERROR_H)
        return;
    this._CFERROR_H = true;

    this.__CFError = new ctypes.StructType("__CFError");
    this.CFErrorRef = this.__CFError.ptr;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFStream.h
function CFStream_h(lib) {
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
    this.kCFStreamErrorDomainCustom = -1;
    this.kCFStreamErrorDomainPOSIX = 1;
    this.kCFStreamErrorDomainMacOSStatus = 2;
    this.CFStreamErrorDomain = this.CFIndex;
    this.CFStreamError = new ctypes.StructType("CFStreamError", [{domain: this.CFIndex}, {error: this.SInt32}]);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFURL.h
function CFURL_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFURL_H)
        return;
    this._CFURL_H = true;

    this.kCFURLPOSIXPathStyle = 0;
    this.kCFURLHFSPathStyle = 1;
    this.kCFURLWindowsPathStyle = 2;
    this.CFURLPathStyle = this.CFIndex;
    this.__CFURL = new ctypes.StructType("__CFURL");
    this.CFURLRef = this.__CFURL.ptr;
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
    this.kCFURLBookmarkCreationPreferFileIDResolutionMask = 256;
    this.kCFURLBookmarkCreationMinimalBookmarkMask = 512;
    this.kCFURLBookmarkCreationSuitableForBookmarkFile = 1024;
    this.CFURLBookmarkCreationOptions = this.CFOptionFlags;
    this.kCFBookmarkResolutionWithoutUIMask = 256;
    this.kCFBookmarkResolutionWithoutMountingMask = 512;
    this.CFURLBookmarkResolutionOptions = this.CFOptionFlags;
    this.CFURLBookmarkFileCreationOptions = this.CFOptionFlags;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFMessagePort.h
function CFMessagePort_h(lib) {
    CFData_h.call(this, lib);
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
    this.CFDictionaryValueCallBacks = new ctypes.StructType("CFDictionaryValueCallBacks", [{version: this.CFIndex}, {retain: this.CFDictionaryRetainCallBack}, {release: this.CFDictionaryReleaseCallBack}, {copyDescription: this.CFDictionaryCopyDescriptionCallBack}, {equal: this.CFDictionaryEqualCallBack}]);
    this.CFDictionaryApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFDictionary = new ctypes.StructType("__CFDictionary");
    this.CFDictionaryRef = this.__CFDictionary.ptr;
    this.CFMutableDictionaryRef = this.__CFDictionary.ptr;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFPreferences.h
function CFPreferences_h(lib) {

    if (this._CFPREFERENCES_H)
        return;
    this._CFPREFERENCES_H = true;

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
    this.CFSetApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFSet = new ctypes.StructType("__CFSet");
    this.CFSetRef = this.__CFSet.ptr;
    this.CFMutableSetRef = this.__CFSet.ptr;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFLocale.h
function CFLocale_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFLOCALE_H)
        return;
    this._CFLOCALE_H = true;

    this.__CFLocale = new ctypes.StructType("__CFLocale");
    this.CFLocaleRef = this.__CFLocale.ptr;
    this.kCFLocaleLanguageDirectionUnknown = 0;
    this.kCFLocaleLanguageDirectionLeftToRight = 1;
    this.kCFLocaleLanguageDirectionRightToLeft = 2;
    this.kCFLocaleLanguageDirectionTopToBottom = 3;
    this.kCFLocaleLanguageDirectionBottomToTop = 4;
    this.CFLocaleLanguageDirection = this.CFIndex;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFUserNotification.h
function CFUserNotification_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFUSERNOTIFICATION_H)
        return;
    this._CFUSERNOTIFICATION_H = true;

    this.__CFUserNotification = new ctypes.StructType("__CFUserNotification");
    this.CFUserNotificationRef = this.__CFUserNotification.ptr;
    this.CFUserNotificationCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFUserNotificationRef, this.CFOptionFlags]).ptr;
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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFBinaryHeap.h
function CFBinaryHeap_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFBINARYHEAP_H)
        return;
    this._CFBINARYHEAP_H = true;

    this.CFBinaryHeapCompareContext = new ctypes.StructType("CFBinaryHeapCompareContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFBinaryHeapCallBacks = new ctypes.StructType("CFBinaryHeapCallBacks", [{version: this.CFIndex}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFAllocatorRef, ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}, {compare: new ctypes.FunctionType(ctypes.default_abi, this.CFComparisonResult, [ctypes.void_t.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr}]);
    this.CFBinaryHeapApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFBinaryHeap = new ctypes.StructType("__CFBinaryHeap");
    this.CFBinaryHeapRef = this.__CFBinaryHeap.ptr;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFFileDescriptor.h
function CFFileDescriptor_h(lib) {
    CFBase_h.call(this, lib);

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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFRunLoop.h
function CFRunLoop_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

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
    this.CFRunLoopSourceContext = new ctypes.StructType("CFRunLoopSourceContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}, {equal: new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr}, {hash: new ctypes.FunctionType(ctypes.default_abi, this.CFHashCode, [ctypes.void_t.ptr]).ptr}, {schedule: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CFRunLoopRef, this.CFStringRef]).ptr}, {cancel: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, this.CFRunLoopRef, this.CFStringRef]).ptr}, {perform: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}]);
    this.CFRunLoopSourceContext1 = new ctypes.StructType("CFRunLoopSourceContext1", []);
    this.CFRunLoopObserverContext = new ctypes.StructType("CFRunLoopObserverContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFRunLoopObserverCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFRunLoopObserverRef, this.CFRunLoopActivity, ctypes.void_t.ptr]).ptr;
    this.CFRunLoopTimerContext = new ctypes.StructType("CFRunLoopTimerContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFRunLoopTimerCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFRunLoopTimerRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFData.h
function CFData_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFDATA_H)
        return;
    this._CFDATA_H = true;

    this.__CFData = new ctypes.StructType("__CFData");
    this.CFDataRef = this.__CFData.ptr;
    this.CFMutableDataRef = this.__CFData.ptr;
    this.kCFDataSearchBackwards = 1;
    this.kCFDataSearchAnchored = 2;
    this.CFDataSearchFlags = this.CFOptionFlags;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFBundle.h
function CFBundle_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._CFBUNDLE_H)
        return;
    this._CFBUNDLE_H = true;

    this.__CFBundle = new ctypes.StructType("__CFBundle");
    this.CFBundleRef = this.__CFBundle.ptr;
    this.CFPlugInRef = this.__CFBundle.ptr;
    this.kCFBundleExecutableArchitectureI386 = 7;
    this.kCFBundleExecutableArchitecturePPC = 18;
    this.kCFBundleExecutableArchitectureX86_64 = 16777223;
    this.kCFBundleExecutableArchitecturePPC64 = 16777234;
    this.CFBundleRefNum = this.SInt16;
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
    this.__CFDate = new ctypes.StructType("__CFDate");
    this.CFDateRef = this.__CFDate.ptr;
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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFURLEnumerator.h
function CFURLEnumerator_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFURLENUMERATOR_H)
        return;
    this._CFURLENUMERATOR_H = true;

    this.__CFURLEnumerator = new ctypes.StructType("__CFURLEnumerator");
    this.CFURLEnumeratorRef = this.__CFURLEnumerator.ptr;
    this.kCFURLEnumeratorDescendRecursively = 1;
    this.kCFURLEnumeratorSkipInvisibles = 2;
    this.kCFURLEnumeratorGenerateFileReferenceURLs = 4;
    this.kCFURLEnumeratorSkipPackageContents = 8;
    this.CFURLEnumeratorOptions = this.CFOptionFlags;
    this.kCFURLEnumeratorSuccess = 1;
    this.kCFURLEnumeratorEnd = 2;
    this.kCFURLEnumeratorError = 3;
    this.CFURLEnumeratorResult = this.CFIndex;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFSocket.h
function CFSocket_h(lib) {
    CFData_h.call(this, lib);
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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFBitVector.h
function CFBitVector_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._CFBITVECTOR_H)
        return;
    this._CFBITVECTOR_H = true;

    this.CFBit = this.UInt32;
    this.__CFBitVector = new ctypes.StructType("__CFBitVector");
    this.CFBitVectorRef = this.__CFBitVector.ptr;
    this.CFMutableBitVectorRef = this.__CFBitVector.ptr;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFCalendar.h
function CFCalendar_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFCALENDAR_H)
        return;
    this._CFCALENDAR_H = true;

    this.__CFCalendar = new ctypes.StructType("__CFCalendar");
    this.CFCalendarRef = this.__CFCalendar.ptr;
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
    this.kCFCalendarComponentsWrap = 1;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFPlugIn.h
function CFPlugIn_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFUUID_h.call(this, lib);
    CFBundle_h.call(this, lib);

    if (this._CFPLUGIN_H)
        return;
    this._CFPLUGIN_H = true;

    this.CFPlugInDynamicRegisterFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFPlugInRef]).ptr;
    this.CFPlugInUnloadFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFPlugInRef]).ptr;
    this.CFPlugInFactoryFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFAllocatorRef, this.CFUUIDRef]).ptr;
    this.__CFPlugInInstance = new ctypes.StructType("__CFPlugInInstance");
    this.CFPlugInInstanceRef = this.__CFPlugInInstance.ptr;
    this.CFPlugInInstanceGetInterfaceFunction = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.CFPlugInInstanceRef, this.CFStringRef, ctypes.void_t.ptr.ptr]).ptr;
    this.CFPlugInInstanceDeallocateInstanceDataFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFNumber.h
function CFNumber_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFNUMBER_H)
        return;
    this._CFNUMBER_H = true;

    this.__CFBoolean = new ctypes.StructType("__CFBoolean");
    this.CFBooleanRef = this.__CFBoolean.ptr;
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
    this.CFArrayApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFArray = new ctypes.StructType("__CFArray");
    this.CFArrayRef = this.__CFArray.ptr;
    this.CFMutableArrayRef = this.__CFArray.ptr;
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
    this.CFBagApplierFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.__CFBag = new ctypes.StructType("__CFBag");
    this.CFBagRef = this.__CFBag.ptr;
    this.CFMutableBagRef = this.__CFBag.ptr;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFTimeZone.h
function CFTimeZone_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFTIMEZONE_H)
        return;
    this._CFTIMEZONE_H = true;

    this.kCFTimeZoneNameStyleStandard = 0;
    this.kCFTimeZoneNameStyleShortStandard = 1;
    this.kCFTimeZoneNameStyleDaylightSaving = 2;
    this.kCFTimeZoneNameStyleShortDaylightSaving = 3;
    this.kCFTimeZoneNameStyleGeneric = 4;
    this.kCFTimeZoneNameStyleShortGeneric = 5;
    this.CFTimeZoneNameStyle = this.CFIndex;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFXMLParser.h
function CFXMLParser_h(lib) {
    CFData_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFXMLNode_h.call(this, lib);

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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFBase.h
function CFBase_h(lib) {

    if (this._CFBASE_H)
        return;
    this._CFBASE_H = true;

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
    this.__CFNull = new ctypes.StructType("__CFNull");
    this.CFNullRef = this.__CFNull.ptr;
    this.__CFAllocator = new ctypes.StructType("__CFAllocator");
    this.CFAllocatorRef = this.__CFAllocator.ptr;
    this.CFAllocatorRetainCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr;
    this.CFAllocatorReleaseCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr;
    this.CFAllocatorCopyDescriptionCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr;
    this.CFAllocatorAllocateCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.CFIndex, this.CFOptionFlags, ctypes.void_t.ptr]).ptr;
    this.CFAllocatorReallocateCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr, this.CFIndex, this.CFOptionFlags, ctypes.void_t.ptr]).ptr;
    this.CFAllocatorDeallocateCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr, ctypes.void_t.ptr]).ptr;
    this.CFAllocatorPreferredSizeCallBack = new ctypes.FunctionType(ctypes.default_abi, this.CFIndex, [this.CFIndex, this.CFOptionFlags, ctypes.void_t.ptr]).ptr;
    this.CFAllocatorContext = new ctypes.StructType("CFAllocatorContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: this.CFAllocatorRetainCallBack}, {release: this.CFAllocatorReleaseCallBack}, {copyDescription: this.CFAllocatorCopyDescriptionCallBack}, {allocate: this.CFAllocatorAllocateCallBack}, {reallocate: this.CFAllocatorReallocateCallBack}, {deallocate: this.CFAllocatorDeallocateCallBack}, {preferredSize: this.CFAllocatorPreferredSizeCallBack}]);
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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFAttributedString.h
function CFAttributedString_h(lib) {

    if (this._CFATTRIBUTEDSTRING_H)
        return;
    this._CFATTRIBUTEDSTRING_H = true;

    this.__CFAttributedString = new ctypes.StructType("__CFAttributedString");
    this.CFAttributedStringRef = this.__CFAttributedString.ptr;
    this.CFMutableAttributedStringRef = this.__CFAttributedString.ptr;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFMachPort.h
function CFMachPort_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFMACHPORT_H)
        return;
    this._CFMACHPORT_H = true;

    this.__CFMachPort = new ctypes.StructType("__CFMachPort");
    this.CFMachPortRef = this.__CFMachPort.ptr;
    this.CFMachPortContext = new ctypes.StructType("CFMachPortContext", [{version: this.CFIndex}, {info: ctypes.void_t.ptr}, {retain: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [ctypes.void_t.ptr]).ptr}, {release: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}, {copyDescription: new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [ctypes.void_t.ptr]).ptr}]);
    this.CFMachPortCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFMachPortRef, ctypes.void_t.ptr, this.CFIndex, ctypes.void_t.ptr]).ptr;
    this.CFMachPortInvalidationCallBack = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.CFMachPortRef, ctypes.void_t.ptr]).ptr;
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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFUUID.h
function CFUUID_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._CFUUID_H)
        return;
    this._CFUUID_H = true;

    this.__CFUUID = new ctypes.StructType("__CFUUID");
    this.CFUUIDRef = this.__CFUUID.ptr;
    this.CFUUIDBytes = new ctypes.StructType("CFUUIDBytes", [{byte0: this.UInt8}, {byte1: this.UInt8}, {byte2: this.UInt8}, {byte3: this.UInt8}, {byte4: this.UInt8}, {byte5: this.UInt8}, {byte6: this.UInt8}, {byte7: this.UInt8}, {byte8: this.UInt8}, {byte9: this.UInt8}, {byte10: this.UInt8}, {byte11: this.UInt8}, {byte12: this.UInt8}, {byte13: this.UInt8}, {byte14: this.UInt8}, {byte15: this.UInt8}]);
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFCharacterSet.h
function CFCharacterSet_h(lib) {
    CFBase_h.call(this, lib);

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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFDateFormatter.h
function CFDateFormatter_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFDATEFORMATTER_H)
        return;
    this._CFDATEFORMATTER_H = true;

    this.__CFDateFormatter = new ctypes.StructType("__CFDateFormatter");
    this.CFDateFormatterRef = this.__CFDateFormatter.ptr;
    this.kCFDateFormatterNoStyle = 0;
    this.kCFDateFormatterShortStyle = 1;
    this.kCFDateFormatterMediumStyle = 2;
    this.kCFDateFormatterLongStyle = 3;
    this.kCFDateFormatterFullStyle = 4;
    this.CFDateFormatterStyle = this.CFIndex;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFURLAccess.h
function CFURLAccess_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFURLACCESS_H)
        return;
    this._CFURLACCESS_H = true;

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
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFNotificationCenter.h
function CFNotificationCenter_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);

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
    this.kCFNotificationDeliverImmediately = 1;
    this.kCFNotificationPostToAllSessions = 2;
}

// Based on /System/Library/Frameworks/CoreFoundation.framework/Headers/CFPropertyList.h
function CFPropertyList_h(lib) {
    CFBase_h.call(this, lib);

    if (this._CFPROPERTYLIST_H)
        return;
    this._CFPROPERTYLIST_H = true;

    this.kCFPropertyListImmutable = 0;
    this.kCFPropertyListMutableContainers = 1;
    this.kCFPropertyListMutableContainersAndLeaves = 2;
    this.CFPropertyListMutabilityOptions = this.CFOptionFlags;
    this.kCFPropertyListOpenStepFormat = 1;
    this.kCFPropertyListXMLFormat_v1_0 = 100;
    this.kCFPropertyListBinaryFormat_v1_0 = 200;
    this.CFPropertyListFormat = this.CFIndex;
    this.kCFPropertyListReadCorruptError = 3840;
    this.kCFPropertyListReadUnknownVersionError = 3841;
    this.kCFPropertyListReadStreamError = 3842;
    this.kCFPropertyListWriteStreamError = 3851;
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
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
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
