// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKSearch.h
function SKSearch_h(lib) {
    SKDocument_h.call(this, lib);
    SKIndex_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._SKSEARCH_H)
        return;
    this._SKSEARCH_H = true;

    this.__SKSearch = new ctypes.StructType("__SKSearch");
    this.SKSearchRef = this.__SKSearch.ptr;
    this.SKSearchOptions = this.UInt32;
    this.kSKSearchOptionDefault = 0;
    this.kSKSearchOptionNoRelevanceScores = 1;
    this.kSKSearchOptionSpaceMeansOR = 2;
    this.kSKSearchOptionFindSimilar = 4;
    this.__SKSearchGroup = new ctypes.StructType("__SKSearchGroup");
    this.SKSearchGroupRef = this.__SKSearchGroup.ptr;
    this.__SKSearchResults = new ctypes.StructType("__SKSearchResults");
    this.SKSearchResultsRef = this.__SKSearchResults.ptr;
    this.kSKSearchRanked = 0;
    this.kSKSearchBooleanRanked = 1;
    this.kSKSearchRequiredRanked = 2;
    this.kSKSearchPrefixRanked = 3;
    this.SKSearchResultsFilterCallBack = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.SKIndexRef, this.SKDocumentRef, ctypes.void_t.ptr]).ptr;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKAnalysis.h
function SKAnalysis_h(lib) {

    if (this._SKANALYSIS_H)
        return;
    this._SKANALYSIS_H = true;

}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKIndex.h
function SKIndex_h(lib) {
    CFBase_h.call(this, lib);

    if (this._SKINDEX_H)
        return;
    this._SKINDEX_H = true;

    this.__SKIndex = new ctypes.StructType("__SKIndex");
    this.SKIndexRef = this.__SKIndex.ptr;
    this.__SKIndexDocumentIterator = new ctypes.StructType("__SKIndexDocumentIterator");
    this.SKIndexDocumentIteratorRef = this.__SKIndexDocumentIterator.ptr;
    this.kSKIndexUnknown = 0;
    this.kSKIndexInverted = 1;
    this.kSKIndexVector = 2;
    this.kSKIndexInvertedVector = 3;
    this.kSKDocumentStateNotIndexed = 0;
    this.kSKDocumentStateIndexed = 1;
    this.kSKDocumentStateAddPending = 2;
    this.kSKDocumentStateDeletePending = 3;
    this.SKDocumentID = this.CFIndex;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKDocument.h
function SKDocument_h(lib) {
    CFBase_h.call(this, lib);

    if (this._SKDOCUMENT_H)
        return;
    this._SKDOCUMENT_H = true;

    this.SKDocumentRef = this.CFTypeRef;
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/SearchKit.framework/Headers/SKSummary.h
function SKSummary_h(lib) {

    if (this._SKSUMMARY_H)
        return;
    this._SKSUMMARY_H = true;

    this.__SKSummary = new ctypes.StructType("__SKSummary");
    this.SKSummaryRef = this.__SKSummary.ptr;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");

const EXPORTED_SYMBOLS = ["SearchKit", "SKSearch_h", "SKAnalysis_h", "SKIndex_h", "SKDocument_h", "SKSummary_h"];

function SearchKit() {
    let libpath = "/System/Library/Frameworks/SearchKit.framework/SearchKit";
    let lib = ctypes.open(libpath);

    SKSearch_h.call(this, lib);
    SKAnalysis_h.call(this, lib);
    SKIndex_h.call(this, lib);
    SKDocument_h.call(this, lib);
    SKSummary_h.call(this, lib);
}
