// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/Metadata.framework/Headers/MDItem.h
function MDItem_h(lib) {
    CFArray_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFURL_h.call(this, lib);

    if (this._MDITEM_H)
        return;
    this._MDITEM_H = true;

    this.__MDItem = new ctypes.StructType("__MDItem");
    this.MDItemRef = this.__MDItem.ptr;
    this.MDItemGetTypeID = lib.declare("MDItemGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.MDItemCreate = lib.declare("MDItemCreate", ctypes.default_abi, this.MDItemRef, this.CFAllocatorRef, this.CFStringRef);
    this.MDItemCreateWithURL = lib.declare("MDItemCreateWithURL", ctypes.default_abi, this.MDItemRef, this.CFAllocatorRef, this.CFURLRef);
    this.MDItemCopyAttribute = lib.declare("MDItemCopyAttribute", ctypes.default_abi, this.CFTypeRef, this.MDItemRef, this.CFStringRef);
    this.MDItemCopyAttributes = lib.declare("MDItemCopyAttributes", ctypes.default_abi, this.CFDictionaryRef, this.MDItemRef, this.CFArrayRef);
    this.MDItemCopyAttributeList = lib.declare("MDItemCopyAttributeList", ctypes.default_abi, this.CFDictionaryRef, this.MDItemRef, "...");
    this.MDItemCopyAttributeNames = lib.declare("MDItemCopyAttributeNames", ctypes.default_abi, this.CFArrayRef, this.MDItemRef);
    this.__MDItemCopyAttributesEllipsis1 = lib.declare("__MDItemCopyAttributesEllipsis1", ctypes.default_abi, this.CFDictionaryRef, this.MDItemRef, "...");
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/Metadata.framework/Headers/MDQuery.h
function MDQuery_h(lib) {
    MDItem_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._MDQUERY_H)
        return;
    this._MDQUERY_H = true;

    this.__MDQuery = new ctypes.StructType("__MDQuery");
    this.MDQueryRef = this.__MDQuery.ptr;
    this.kMDQuerySynchronous = 1;
    this.kMDQueryWantsUpdates = 4;
    this.MDQueryGetTypeID = lib.declare("MDQueryGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.MDQueryCreate = lib.declare("MDQueryCreate", ctypes.default_abi, this.MDQueryRef, this.CFAllocatorRef, this.CFStringRef, this.CFArrayRef, this.CFArrayRef);
    this.MDQueryCreateSubset = lib.declare("MDQueryCreateSubset", ctypes.default_abi, this.MDQueryRef, this.CFAllocatorRef, this.MDQueryRef, this.CFStringRef, this.CFArrayRef, this.CFArrayRef);
    this.MDQueryCopyQueryString = lib.declare("MDQueryCopyQueryString", ctypes.default_abi, this.CFStringRef, this.MDQueryRef);
    this.MDQueryCopyValueListAttributes = lib.declare("MDQueryCopyValueListAttributes", ctypes.default_abi, this.CFArrayRef, this.MDQueryRef);
    this.MDQueryCopySortingAttributes = lib.declare("MDQueryCopySortingAttributes", ctypes.default_abi, this.CFArrayRef, this.MDQueryRef);
    this.MDQueryBatchingParams = new ctypes.StructType("MDQueryBatchingParams", []);
    this.MDQueryGetBatchingParameters = lib.declare("MDQueryGetBatchingParameters", ctypes.default_abi, this.MDQueryBatchingParams, this.MDQueryRef);
    this.MDQuerySetBatchingParameters = lib.declare("MDQuerySetBatchingParameters", ctypes.default_abi, ctypes.void_t, this.MDQueryRef, this.MDQueryBatchingParams);
    this.MDQueryCreateResultFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.MDQueryRef, this.MDItemRef, ctypes.void_t.ptr]).ptr;
    this.MDQuerySetCreateResultFunction = lib.declare("MDQuerySetCreateResultFunction", ctypes.default_abi, ctypes.void_t, this.MDQueryRef, this.MDQueryCreateResultFunction, ctypes.void_t.ptr, this.CFArrayCallBacks.ptr);
    this.MDQueryCreateValueFunction = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t.ptr, [this.MDQueryRef, this.CFStringRef, this.CFTypeRef, ctypes.void_t.ptr]).ptr;
    this.MDQuerySetCreateValueFunction = lib.declare("MDQuerySetCreateValueFunction", ctypes.default_abi, ctypes.void_t, this.MDQueryRef, this.MDQueryCreateValueFunction, ctypes.void_t.ptr, this.CFArrayCallBacks.ptr);
    // Dropping declaration of 'MDQuerySetDispatchQueue': 'dispatch_queue_t' defined out of scope
    this.MDQueryExecute = lib.declare("MDQueryExecute", ctypes.default_abi, this.Boolean, this.MDQueryRef, this.CFOptionFlags);
    this.MDQueryStop = lib.declare("MDQueryStop", ctypes.default_abi, ctypes.void_t, this.MDQueryRef);
    this.MDQueryDisableUpdates = lib.declare("MDQueryDisableUpdates", ctypes.default_abi, ctypes.void_t, this.MDQueryRef);
    this.MDQueryEnableUpdates = lib.declare("MDQueryEnableUpdates", ctypes.default_abi, ctypes.void_t, this.MDQueryRef);
    this.MDQueryIsGatheringComplete = lib.declare("MDQueryIsGatheringComplete", ctypes.default_abi, this.Boolean, this.MDQueryRef);
    this.MDQueryGetResultCount = lib.declare("MDQueryGetResultCount", ctypes.default_abi, this.CFIndex, this.MDQueryRef);
    this.MDQueryGetResultAtIndex = lib.declare("MDQueryGetResultAtIndex", ctypes.default_abi, ctypes.void_t.ptr, this.MDQueryRef, this.CFIndex);
    this.MDQueryGetIndexOfResult = lib.declare("MDQueryGetIndexOfResult", ctypes.default_abi, this.CFIndex, this.MDQueryRef, ctypes.void_t.ptr);
    this.MDQueryGetAttributeValueOfResultAtIndex = lib.declare("MDQueryGetAttributeValueOfResultAtIndex", ctypes.default_abi, ctypes.void_t.ptr, this.MDQueryRef, this.CFStringRef, this.CFIndex);
    this.MDQueryCopyValuesOfAttribute = lib.declare("MDQueryCopyValuesOfAttribute", ctypes.default_abi, this.CFArrayRef, this.MDQueryRef, this.CFStringRef);
    this.MDQueryGetCountOfResultsWithAttributeValue = lib.declare("MDQueryGetCountOfResultsWithAttributeValue", ctypes.default_abi, this.CFIndex, this.MDQueryRef, this.CFStringRef, this.CFTypeRef);
    this.MDQuerySortComparatorFunction = new ctypes.FunctionType(ctypes.default_abi, this.CFComparisonResult, [this.CFTypeRef.ptr, this.CFTypeRef.ptr, ctypes.void_t.ptr]).ptr;
    this.MDQuerySetSortComparator = lib.declare("MDQuerySetSortComparator", ctypes.default_abi, ctypes.void_t, this.MDQueryRef, this.MDQuerySortComparatorFunction, ctypes.void_t.ptr);
    this.MDQuerySetSearchScope = lib.declare("MDQuerySetSearchScope", ctypes.default_abi, ctypes.void_t, this.MDQueryRef, this.CFArrayRef, this.OptionBits);
    this.MDQuerySetMaxCount = lib.declare("MDQuerySetMaxCount", ctypes.default_abi, ctypes.void_t, this.MDQueryRef, this.CFIndex);
}

// Based on /System/Library/Frameworks/CoreServices.framework/Frameworks/Metadata.framework/Headers/MDSchema.h
function MDSchema_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._MDSCHEMA_H)
        return;
    this._MDSCHEMA_H = true;

    this.MDSchemaCopyAttributesForContentType = lib.declare("MDSchemaCopyAttributesForContentType", ctypes.default_abi, this.CFDictionaryRef, this.CFStringRef);
    this.MDSchemaCopyMetaAttributesForAttribute = lib.declare("MDSchemaCopyMetaAttributesForAttribute", ctypes.default_abi, this.CFDictionaryRef, this.CFStringRef);
    this.MDSchemaCopyAllAttributes = lib.declare("MDSchemaCopyAllAttributes", ctypes.default_abi, this.CFArrayRef);
    this.MDSchemaCopyDisplayNameForAttribute = lib.declare("MDSchemaCopyDisplayNameForAttribute", ctypes.default_abi, this.CFStringRef, this.CFStringRef);
    this.MDSchemaCopyDisplayDescriptionForAttribute = lib.declare("MDSchemaCopyDisplayDescriptionForAttribute", ctypes.default_abi, this.CFStringRef, this.CFStringRef);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["Metadata", "MDItem_h", "MDQuery_h", "MDSchema_h"];

function Metadata() {
    let libpath = "/System/Library/Frameworks/CoreServices.framework/Frameworks/Metadata.framework/Metadata";
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

    MDItem_h.call(this, lib);
    MDQuery_h.call(this, lib);
    MDSchema_h.call(this, lib);
}
