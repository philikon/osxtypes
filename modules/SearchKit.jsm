// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKSearch.h
function SKSearch_h(lib) {
    CFDate_h.call(this, lib);
    SKDocument_h.call(this, lib);
    SKIndex_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._SKSEARCH_H)
        return;
    this._SKSEARCH_H = true;

    this.__SKSearch = new ctypes.StructType("__SKSearch");
    this.SKSearchRef = this.__SKSearch.ptr;
    this.SKSearchGetTypeID = lib.declare("SKSearchGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.SKSearchOptions = this.UInt32;
    this.kSKSearchOptionDefault = 0;
    this.kSKSearchOptionNoRelevanceScores = 1;
    this.kSKSearchOptionSpaceMeansOR = 2;
    this.kSKSearchOptionFindSimilar = 4;
    this.SKSearchCreate = lib.declare("SKSearchCreate", ctypes.default_abi, this.SKSearchRef, this.SKIndexRef, this.CFStringRef, this.SKSearchOptions);
    this.SKSearchCancel = lib.declare("SKSearchCancel", ctypes.default_abi, ctypes.void_t, this.SKSearchRef);
    this.SKSearchFindMatches = lib.declare("SKSearchFindMatches", ctypes.default_abi, this.Boolean, this.SKSearchRef, this.CFIndex, this.SKDocumentID.ptr, ctypes.float.ptr, this.CFTimeInterval, this.CFIndex.ptr);
    this.SKIndexCopyInfoForDocumentIDs = lib.declare("SKIndexCopyInfoForDocumentIDs", ctypes.default_abi, ctypes.void_t, this.SKIndexRef, this.CFIndex, this.SKDocumentID.ptr, this.CFStringRef.ptr, this.SKDocumentID.ptr);
    this.SKIndexCopyDocumentRefsForDocumentIDs = lib.declare("SKIndexCopyDocumentRefsForDocumentIDs", ctypes.default_abi, ctypes.void_t, this.SKIndexRef, this.CFIndex, this.SKDocumentID.ptr, this.SKDocumentRef.ptr);
    this.SKIndexCopyDocumentURLsForDocumentIDs = lib.declare("SKIndexCopyDocumentURLsForDocumentIDs", ctypes.default_abi, ctypes.void_t, this.SKIndexRef, this.CFIndex, this.SKDocumentID.ptr, this.CFURLRef.ptr);
    this.__SKSearchGroup = new ctypes.StructType("__SKSearchGroup");
    this.SKSearchGroupRef = this.__SKSearchGroup.ptr;
    this.SKSearchGroupGetTypeID = lib.declare("SKSearchGroupGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.__SKSearchResults = new ctypes.StructType("__SKSearchResults");
    this.SKSearchResultsRef = this.__SKSearchResults.ptr;
    this.SKSearchResultsGetTypeID = lib.declare("SKSearchResultsGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kSKSearchRanked = 0;
    this.kSKSearchBooleanRanked = 1;
    this.kSKSearchRequiredRanked = 2;
    this.kSKSearchPrefixRanked = 3;
    this.SKSearchResultsFilterCallBack = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.SKIndexRef, this.SKDocumentRef, ctypes.void_t.ptr]).ptr;
    this.SKSearchGroupCreate = lib.declare("SKSearchGroupCreate", ctypes.default_abi, this.SKSearchGroupRef, this.CFArrayRef);
    this.SKSearchGroupCopyIndexes = lib.declare("SKSearchGroupCopyIndexes", ctypes.default_abi, this.CFArrayRef, this.SKSearchGroupRef);
    this.SKSearchResultsCreateWithQuery = lib.declare("SKSearchResultsCreateWithQuery", ctypes.default_abi, this.SKSearchResultsRef, this.SKSearchGroupRef, this.CFStringRef, this.SKSearchType, this.CFIndex, ctypes.void_t.ptr, this.SKSearchResultsFilterCallBack);
    this.SKSearchResultsCreateWithDocuments = lib.declare("SKSearchResultsCreateWithDocuments", ctypes.default_abi, this.SKSearchResultsRef, this.SKSearchGroupRef, this.CFArrayRef, this.CFIndex, ctypes.void_t.ptr, this.SKSearchResultsFilterCallBack);
    this.SKSearchResultsGetCount = lib.declare("SKSearchResultsGetCount", ctypes.default_abi, this.CFIndex, this.SKSearchResultsRef);
    this.SKSearchResultsGetInfoInRange = lib.declare("SKSearchResultsGetInfoInRange", ctypes.default_abi, this.CFIndex, this.SKSearchResultsRef, this.CFRange, this.SKDocumentRef.ptr, this.SKIndexRef.ptr, ctypes.float.ptr);
    this.SKSearchResultsCopyMatchingTerms = lib.declare("SKSearchResultsCopyMatchingTerms", ctypes.default_abi, this.CFArrayRef, this.SKSearchResultsRef, this.CFIndex);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKAnalysis.h
function SKAnalysis_h(lib) {
    CFBase_h.call(this, lib);

    if (this._SKANALYSIS_H)
        return;
    this._SKANALYSIS_H = true;

    this.kSKMinTermLength = lib.declare("kSKMinTermLength", this.CFStringRef);
    this.kSKSubstitutions = lib.declare("kSKSubstitutions", this.CFStringRef);
    this.kSKStopWords = lib.declare("kSKStopWords", this.CFStringRef);
    this.kSKProximityIndexing = lib.declare("kSKProximityIndexing", this.CFStringRef);
    this.kSKMaximumTerms = lib.declare("kSKMaximumTerms", this.CFStringRef);
    this.kSKTermChars = lib.declare("kSKTermChars", this.CFStringRef);
    this.kSKStartTermChars = lib.declare("kSKStartTermChars", this.CFStringRef);
    this.kSKEndTermChars = lib.declare("kSKEndTermChars", this.CFStringRef);
    this.kSKLanguageTypes = lib.declare("kSKLanguageTypes", this.CFStringRef);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKIndex.h
function SKIndex_h(lib) {
    CFData_h.call(this, lib);
    SKDocument_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._SKINDEX_H)
        return;
    this._SKINDEX_H = true;

    this.__SKIndex = new ctypes.StructType("__SKIndex");
    this.SKIndexRef = this.__SKIndex.ptr;
    this.SKIndexGetTypeID = lib.declare("SKIndexGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.__SKIndexDocumentIterator = new ctypes.StructType("__SKIndexDocumentIterator");
    this.SKIndexDocumentIteratorRef = this.__SKIndexDocumentIterator.ptr;
    this.SKIndexDocumentIteratorGetTypeID = lib.declare("SKIndexDocumentIteratorGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.kSKIndexUnknown = 0;
    this.kSKIndexInverted = 1;
    this.kSKIndexVector = 2;
    this.kSKIndexInvertedVector = 3;
    this.kSKDocumentStateNotIndexed = 0;
    this.kSKDocumentStateIndexed = 1;
    this.kSKDocumentStateAddPending = 2;
    this.kSKDocumentStateDeletePending = 3;
    this.SKIndexCreateWithURL = lib.declare("SKIndexCreateWithURL", ctypes.default_abi, this.SKIndexRef, this.CFURLRef, this.CFStringRef, this.SKIndexType, this.CFDictionaryRef);
    this.SKIndexOpenWithURL = lib.declare("SKIndexOpenWithURL", ctypes.default_abi, this.SKIndexRef, this.CFURLRef, this.CFStringRef, this.Boolean);
    this.SKIndexCreateWithMutableData = lib.declare("SKIndexCreateWithMutableData", ctypes.default_abi, this.SKIndexRef, this.CFMutableDataRef, this.CFStringRef, this.SKIndexType, this.CFDictionaryRef);
    this.SKIndexOpenWithData = lib.declare("SKIndexOpenWithData", ctypes.default_abi, this.SKIndexRef, this.CFDataRef, this.CFStringRef);
    this.SKIndexOpenWithMutableData = lib.declare("SKIndexOpenWithMutableData", ctypes.default_abi, this.SKIndexRef, this.CFMutableDataRef, this.CFStringRef);
    this.SKIndexFlush = lib.declare("SKIndexFlush", ctypes.default_abi, this.Boolean, this.SKIndexRef);
    this.SKIndexSetMaximumBytesBeforeFlush = lib.declare("SKIndexSetMaximumBytesBeforeFlush", ctypes.default_abi, ctypes.void_t, this.SKIndexRef, this.CFIndex);
    this.SKIndexGetMaximumBytesBeforeFlush = lib.declare("SKIndexGetMaximumBytesBeforeFlush", ctypes.default_abi, this.CFIndex, this.SKIndexRef);
    this.SKIndexCompact = lib.declare("SKIndexCompact", ctypes.default_abi, this.Boolean, this.SKIndexRef);
    this.SKIndexGetIndexType = lib.declare("SKIndexGetIndexType", ctypes.default_abi, this.SKIndexType, this.SKIndexRef);
    this.SKIndexGetAnalysisProperties = lib.declare("SKIndexGetAnalysisProperties", ctypes.default_abi, this.CFDictionaryRef, this.SKIndexRef);
    this.SKIndexGetDocumentCount = lib.declare("SKIndexGetDocumentCount", ctypes.default_abi, this.CFIndex, this.SKIndexRef);
    this.SKIndexClose = lib.declare("SKIndexClose", ctypes.default_abi, ctypes.void_t, this.SKIndexRef);
    this.SKDocumentID = this.CFIndex;
    this.SKIndexAddDocumentWithText = lib.declare("SKIndexAddDocumentWithText", ctypes.default_abi, this.Boolean, this.SKIndexRef, this.SKDocumentRef, this.CFStringRef, this.Boolean);
    this.SKIndexAddDocument = lib.declare("SKIndexAddDocument", ctypes.default_abi, this.Boolean, this.SKIndexRef, this.SKDocumentRef, this.CFStringRef, this.Boolean);
    this.SKIndexRemoveDocument = lib.declare("SKIndexRemoveDocument", ctypes.default_abi, this.Boolean, this.SKIndexRef, this.SKDocumentRef);
    this.SKIndexCopyDocumentProperties = lib.declare("SKIndexCopyDocumentProperties", ctypes.default_abi, this.CFDictionaryRef, this.SKIndexRef, this.SKDocumentRef);
    this.SKIndexSetDocumentProperties = lib.declare("SKIndexSetDocumentProperties", ctypes.default_abi, ctypes.void_t, this.SKIndexRef, this.SKDocumentRef, this.CFDictionaryRef);
    this.SKIndexGetDocumentState = lib.declare("SKIndexGetDocumentState", ctypes.default_abi, this.SKDocumentIndexState, this.SKIndexRef, this.SKDocumentRef);
    this.SKIndexGetDocumentID = lib.declare("SKIndexGetDocumentID", ctypes.default_abi, this.SKDocumentID, this.SKIndexRef, this.SKDocumentRef);
    this.SKIndexCopyDocumentForDocumentID = lib.declare("SKIndexCopyDocumentForDocumentID", ctypes.default_abi, this.SKDocumentRef, this.SKIndexRef, this.SKDocumentID);
    this.SKIndexRenameDocument = lib.declare("SKIndexRenameDocument", ctypes.default_abi, this.Boolean, this.SKIndexRef, this.SKDocumentRef, this.CFStringRef);
    this.SKIndexMoveDocument = lib.declare("SKIndexMoveDocument", ctypes.default_abi, this.Boolean, this.SKIndexRef, this.SKDocumentRef, this.SKDocumentRef);
    this.SKIndexDocumentIteratorCreate = lib.declare("SKIndexDocumentIteratorCreate", ctypes.default_abi, this.SKIndexDocumentIteratorRef, this.SKIndexRef, this.SKDocumentRef);
    this.SKIndexDocumentIteratorCopyNext = lib.declare("SKIndexDocumentIteratorCopyNext", ctypes.default_abi, this.SKDocumentRef, this.SKIndexDocumentIteratorRef);
    this.SKIndexGetMaximumDocumentID = lib.declare("SKIndexGetMaximumDocumentID", ctypes.default_abi, this.SKDocumentID, this.SKIndexRef);
    this.SKIndexGetDocumentTermCount = lib.declare("SKIndexGetDocumentTermCount", ctypes.default_abi, this.CFIndex, this.SKIndexRef, this.SKDocumentID);
    this.SKIndexCopyTermIDArrayForDocumentID = lib.declare("SKIndexCopyTermIDArrayForDocumentID", ctypes.default_abi, this.CFArrayRef, this.SKIndexRef, this.SKDocumentID);
    this.SKIndexGetDocumentTermFrequency = lib.declare("SKIndexGetDocumentTermFrequency", ctypes.default_abi, this.CFIndex, this.SKIndexRef, this.SKDocumentID, this.CFIndex);
    this.SKIndexGetMaximumTermID = lib.declare("SKIndexGetMaximumTermID", ctypes.default_abi, this.CFIndex, this.SKIndexRef);
    this.SKIndexGetTermDocumentCount = lib.declare("SKIndexGetTermDocumentCount", ctypes.default_abi, this.CFIndex, this.SKIndexRef, this.CFIndex);
    this.SKIndexCopyDocumentIDArrayForTermID = lib.declare("SKIndexCopyDocumentIDArrayForTermID", ctypes.default_abi, this.CFArrayRef, this.SKIndexRef, this.CFIndex);
    this.SKIndexCopyTermStringForTermID = lib.declare("SKIndexCopyTermStringForTermID", ctypes.default_abi, this.CFStringRef, this.SKIndexRef, this.CFIndex);
    this.SKIndexGetTermIDForTermString = lib.declare("SKIndexGetTermIDForTermString", ctypes.default_abi, this.CFIndex, this.SKIndexRef, this.CFStringRef);
    this.SKLoadDefaultExtractorPlugIns = lib.declare("SKLoadDefaultExtractorPlugIns", ctypes.default_abi, ctypes.void_t);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKDocument.h
function SKDocument_h(lib) {
    CFBase_h.call(this, lib);
    CFURL_h.call(this, lib);

    if (this._SKDOCUMENT_H)
        return;
    this._SKDOCUMENT_H = true;

    this.SKDocumentRef = this.CFTypeRef;
    this.SKDocumentGetTypeID = lib.declare("SKDocumentGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.SKDocumentCreateWithURL = lib.declare("SKDocumentCreateWithURL", ctypes.default_abi, this.SKDocumentRef, this.CFURLRef);
    this.SKDocumentCopyURL = lib.declare("SKDocumentCopyURL", ctypes.default_abi, this.CFURLRef, this.SKDocumentRef);
    this.SKDocumentCreate = lib.declare("SKDocumentCreate", ctypes.default_abi, this.SKDocumentRef, this.CFStringRef, this.SKDocumentRef, this.CFStringRef);
    this.SKDocumentGetSchemeName = lib.declare("SKDocumentGetSchemeName", ctypes.default_abi, this.CFStringRef, this.SKDocumentRef);
    this.SKDocumentGetName = lib.declare("SKDocumentGetName", ctypes.default_abi, this.CFStringRef, this.SKDocumentRef);
    this.SKDocumentGetParent = lib.declare("SKDocumentGetParent", ctypes.default_abi, this.SKDocumentRef, this.SKDocumentRef);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKSummary.h
function SKSummary_h(lib) {
    CFBase_h.call(this, lib);

    if (this._SKSUMMARY_H)
        return;
    this._SKSUMMARY_H = true;

    this.__SKSummary = new ctypes.StructType("__SKSummary");
    this.SKSummaryRef = this.__SKSummary.ptr;
    this.SKSummaryGetTypeID = lib.declare("SKSummaryGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.SKSummaryCreateWithString = lib.declare("SKSummaryCreateWithString", ctypes.default_abi, this.SKSummaryRef, this.CFStringRef);
    this.SKSummaryGetSentenceCount = lib.declare("SKSummaryGetSentenceCount", ctypes.default_abi, this.CFIndex, this.SKSummaryRef);
    this.SKSummaryGetParagraphCount = lib.declare("SKSummaryGetParagraphCount", ctypes.default_abi, this.CFIndex, this.SKSummaryRef);
    this.SKSummaryCopySentenceAtIndex = lib.declare("SKSummaryCopySentenceAtIndex", ctypes.default_abi, this.CFStringRef, this.SKSummaryRef, this.CFIndex);
    this.SKSummaryCopyParagraphAtIndex = lib.declare("SKSummaryCopyParagraphAtIndex", ctypes.default_abi, this.CFStringRef, this.SKSummaryRef, this.CFIndex);
    this.SKSummaryCopySentenceSummaryString = lib.declare("SKSummaryCopySentenceSummaryString", ctypes.default_abi, this.CFStringRef, this.SKSummaryRef, this.CFIndex);
    this.SKSummaryCopyParagraphSummaryString = lib.declare("SKSummaryCopyParagraphSummaryString", ctypes.default_abi, this.CFStringRef, this.SKSummaryRef, this.CFIndex);
    this.SKSummaryGetSentenceSummaryInfo = lib.declare("SKSummaryGetSentenceSummaryInfo", ctypes.default_abi, this.CFIndex, this.SKSummaryRef, this.CFIndex, this.CFIndex.ptr, this.CFIndex.ptr, this.CFIndex.ptr);
    this.SKSummaryGetParagraphSummaryInfo = lib.declare("SKSummaryGetParagraphSummaryInfo", ctypes.default_abi, this.CFIndex, this.SKSummaryRef, this.CFIndex, this.CFIndex.ptr, this.CFIndex.ptr);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["SearchKit", "SKSearch_h", "SKAnalysis_h", "SKIndex_h", "SKDocument_h", "SKSummary_h"];

function SearchKit() {
    let libpath = "/System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/SearchKit";
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

    SKSearch_h.call(this, lib);
    SKAnalysis_h.call(this, lib);
    SKIndex_h.call(this, lib);
    SKDocument_h.call(this, lib);
    SKSummary_h.call(this, lib);
}
