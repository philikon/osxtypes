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
    this.kMDItemAttributeChangeDate = lib.declare("kMDItemAttributeChangeDate", this.CFStringRef);
    this.kMDItemContentType = lib.declare("kMDItemContentType", this.CFStringRef);
    this.kMDItemContentTypeTree = lib.declare("kMDItemContentTypeTree", this.CFStringRef);
    this.kMDItemKeywords = lib.declare("kMDItemKeywords", this.CFStringRef);
    this.kMDItemTitle = lib.declare("kMDItemTitle", this.CFStringRef);
    this.kMDItemAuthors = lib.declare("kMDItemAuthors", this.CFStringRef);
    this.kMDItemEditors = lib.declare("kMDItemEditors", this.CFStringRef);
    this.kMDItemParticipants = lib.declare("kMDItemParticipants", this.CFStringRef);
    this.kMDItemProjects = lib.declare("kMDItemProjects", this.CFStringRef);
    this.kMDItemWhereFroms = lib.declare("kMDItemWhereFroms", this.CFStringRef);
    this.kMDItemComment = lib.declare("kMDItemComment", this.CFStringRef);
    this.kMDItemCopyright = lib.declare("kMDItemCopyright", this.CFStringRef);
    this.kMDItemLastUsedDate = lib.declare("kMDItemLastUsedDate", this.CFStringRef);
    this.kMDItemContentCreationDate = lib.declare("kMDItemContentCreationDate", this.CFStringRef);
    this.kMDItemContentModificationDate = lib.declare("kMDItemContentModificationDate", this.CFStringRef);
    this.kMDItemDurationSeconds = lib.declare("kMDItemDurationSeconds", this.CFStringRef);
    this.kMDItemContactKeywords = lib.declare("kMDItemContactKeywords", this.CFStringRef);
    this.kMDItemVersion = lib.declare("kMDItemVersion", this.CFStringRef);
    this.kMDItemPixelHeight = lib.declare("kMDItemPixelHeight", this.CFStringRef);
    this.kMDItemPixelWidth = lib.declare("kMDItemPixelWidth", this.CFStringRef);
    this.kMDItemPixelCount = lib.declare("kMDItemPixelCount", this.CFStringRef);
    this.kMDItemColorSpace = lib.declare("kMDItemColorSpace", this.CFStringRef);
    this.kMDItemBitsPerSample = lib.declare("kMDItemBitsPerSample", this.CFStringRef);
    this.kMDItemFlashOnOff = lib.declare("kMDItemFlashOnOff", this.CFStringRef);
    this.kMDItemFocalLength = lib.declare("kMDItemFocalLength", this.CFStringRef);
    this.kMDItemAcquisitionMake = lib.declare("kMDItemAcquisitionMake", this.CFStringRef);
    this.kMDItemAcquisitionModel = lib.declare("kMDItemAcquisitionModel", this.CFStringRef);
    this.kMDItemISOSpeed = lib.declare("kMDItemISOSpeed", this.CFStringRef);
    this.kMDItemOrientation = lib.declare("kMDItemOrientation", this.CFStringRef);
    this.kMDItemLayerNames = lib.declare("kMDItemLayerNames", this.CFStringRef);
    this.kMDItemWhiteBalance = lib.declare("kMDItemWhiteBalance", this.CFStringRef);
    this.kMDItemAperture = lib.declare("kMDItemAperture", this.CFStringRef);
    this.kMDItemProfileName = lib.declare("kMDItemProfileName", this.CFStringRef);
    this.kMDItemResolutionWidthDPI = lib.declare("kMDItemResolutionWidthDPI", this.CFStringRef);
    this.kMDItemResolutionHeightDPI = lib.declare("kMDItemResolutionHeightDPI", this.CFStringRef);
    this.kMDItemExposureMode = lib.declare("kMDItemExposureMode", this.CFStringRef);
    this.kMDItemExposureTimeSeconds = lib.declare("kMDItemExposureTimeSeconds", this.CFStringRef);
    this.kMDItemEXIFVersion = lib.declare("kMDItemEXIFVersion", this.CFStringRef);
    this.kMDItemEXIFGPSVersion = lib.declare("kMDItemEXIFGPSVersion", this.CFStringRef);
    this.kMDItemAltitude = lib.declare("kMDItemAltitude", this.CFStringRef);
    this.kMDItemLatitude = lib.declare("kMDItemLatitude", this.CFStringRef);
    this.kMDItemLongitude = lib.declare("kMDItemLongitude", this.CFStringRef);
    this.kMDItemSpeed = lib.declare("kMDItemSpeed", this.CFStringRef);
    this.kMDItemTimestamp = lib.declare("kMDItemTimestamp", this.CFStringRef);
    this.kMDItemGPSTrack = lib.declare("kMDItemGPSTrack", this.CFStringRef);
    this.kMDItemImageDirection = lib.declare("kMDItemImageDirection", this.CFStringRef);
    this.kMDItemNamedLocation = lib.declare("kMDItemNamedLocation", this.CFStringRef);
    this.kMDItemCodecs = lib.declare("kMDItemCodecs", this.CFStringRef);
    this.kMDItemMediaTypes = lib.declare("kMDItemMediaTypes", this.CFStringRef);
    this.kMDItemStreamable = lib.declare("kMDItemStreamable", this.CFStringRef);
    this.kMDItemTotalBitRate = lib.declare("kMDItemTotalBitRate", this.CFStringRef);
    this.kMDItemVideoBitRate = lib.declare("kMDItemVideoBitRate", this.CFStringRef);
    this.kMDItemAudioBitRate = lib.declare("kMDItemAudioBitRate", this.CFStringRef);
    this.kMDItemDeliveryType = lib.declare("kMDItemDeliveryType", this.CFStringRef);
    this.kMDItemAlbum = lib.declare("kMDItemAlbum", this.CFStringRef);
    this.kMDItemHasAlphaChannel = lib.declare("kMDItemHasAlphaChannel", this.CFStringRef);
    this.kMDItemRedEyeOnOff = lib.declare("kMDItemRedEyeOnOff", this.CFStringRef);
    this.kMDItemMeteringMode = lib.declare("kMDItemMeteringMode", this.CFStringRef);
    this.kMDItemMaxAperture = lib.declare("kMDItemMaxAperture", this.CFStringRef);
    this.kMDItemFNumber = lib.declare("kMDItemFNumber", this.CFStringRef);
    this.kMDItemExposureProgram = lib.declare("kMDItemExposureProgram", this.CFStringRef);
    this.kMDItemExposureTimeString = lib.declare("kMDItemExposureTimeString", this.CFStringRef);
    this.kMDItemHeadline = lib.declare("kMDItemHeadline", this.CFStringRef);
    this.kMDItemInstructions = lib.declare("kMDItemInstructions", this.CFStringRef);
    this.kMDItemCity = lib.declare("kMDItemCity", this.CFStringRef);
    this.kMDItemStateOrProvince = lib.declare("kMDItemStateOrProvince", this.CFStringRef);
    this.kMDItemCountry = lib.declare("kMDItemCountry", this.CFStringRef);
    this.kMDItemFSName = lib.declare("kMDItemFSName", this.CFStringRef);
    this.kMDItemDisplayName = lib.declare("kMDItemDisplayName", this.CFStringRef);
    this.kMDItemPath = lib.declare("kMDItemPath", this.CFStringRef);
    this.kMDItemFSSize = lib.declare("kMDItemFSSize", this.CFStringRef);
    this.kMDItemFSCreationDate = lib.declare("kMDItemFSCreationDate", this.CFStringRef);
    this.kMDItemFSContentChangeDate = lib.declare("kMDItemFSContentChangeDate", this.CFStringRef);
    this.kMDItemFSOwnerUserID = lib.declare("kMDItemFSOwnerUserID", this.CFStringRef);
    this.kMDItemFSOwnerGroupID = lib.declare("kMDItemFSOwnerGroupID", this.CFStringRef);
    this.kMDItemFSExists = lib.declare("kMDItemFSExists", this.CFStringRef);
    this.kMDItemFSIsReadable = lib.declare("kMDItemFSIsReadable", this.CFStringRef);
    this.kMDItemFSIsWriteable = lib.declare("kMDItemFSIsWriteable", this.CFStringRef);
    this.kMDItemFSHasCustomIcon = lib.declare("kMDItemFSHasCustomIcon", this.CFStringRef);
    this.kMDItemFSIsExtensionHidden = lib.declare("kMDItemFSIsExtensionHidden", this.CFStringRef);
    this.kMDItemFSIsStationery = lib.declare("kMDItemFSIsStationery", this.CFStringRef);
    this.kMDItemFSInvisible = lib.declare("kMDItemFSInvisible", this.CFStringRef);
    this.kMDItemFSLabel = lib.declare("kMDItemFSLabel", this.CFStringRef);
    this.kMDItemFSNodeCount = lib.declare("kMDItemFSNodeCount", this.CFStringRef);
    this.kMDItemTextContent = lib.declare("kMDItemTextContent", this.CFStringRef);
    this.kMDItemAudioSampleRate = lib.declare("kMDItemAudioSampleRate", this.CFStringRef);
    this.kMDItemAudioChannelCount = lib.declare("kMDItemAudioChannelCount", this.CFStringRef);
    this.kMDItemTempo = lib.declare("kMDItemTempo", this.CFStringRef);
    this.kMDItemKeySignature = lib.declare("kMDItemKeySignature", this.CFStringRef);
    this.kMDItemTimeSignature = lib.declare("kMDItemTimeSignature", this.CFStringRef);
    this.kMDItemAudioEncodingApplication = lib.declare("kMDItemAudioEncodingApplication", this.CFStringRef);
    this.kMDItemComposer = lib.declare("kMDItemComposer", this.CFStringRef);
    this.kMDItemLyricist = lib.declare("kMDItemLyricist", this.CFStringRef);
    this.kMDItemAudioTrackNumber = lib.declare("kMDItemAudioTrackNumber", this.CFStringRef);
    this.kMDItemRecordingDate = lib.declare("kMDItemRecordingDate", this.CFStringRef);
    this.kMDItemMusicalGenre = lib.declare("kMDItemMusicalGenre", this.CFStringRef);
    this.kMDItemIsGeneralMIDISequence = lib.declare("kMDItemIsGeneralMIDISequence", this.CFStringRef);
    this.kMDItemRecordingYear = lib.declare("kMDItemRecordingYear", this.CFStringRef);
    this.kMDItemOrganizations = lib.declare("kMDItemOrganizations", this.CFStringRef);
    this.kMDItemLanguages = lib.declare("kMDItemLanguages", this.CFStringRef);
    this.kMDItemRights = lib.declare("kMDItemRights", this.CFStringRef);
    this.kMDItemPublishers = lib.declare("kMDItemPublishers", this.CFStringRef);
    this.kMDItemContributors = lib.declare("kMDItemContributors", this.CFStringRef);
    this.kMDItemCoverage = lib.declare("kMDItemCoverage", this.CFStringRef);
    this.kMDItemSubject = lib.declare("kMDItemSubject", this.CFStringRef);
    this.kMDItemTheme = lib.declare("kMDItemTheme", this.CFStringRef);
    this.kMDItemDescription = lib.declare("kMDItemDescription", this.CFStringRef);
    this.kMDItemIdentifier = lib.declare("kMDItemIdentifier", this.CFStringRef);
    this.kMDItemAudiences = lib.declare("kMDItemAudiences", this.CFStringRef);
    this.kMDItemNumberOfPages = lib.declare("kMDItemNumberOfPages", this.CFStringRef);
    this.kMDItemPageWidth = lib.declare("kMDItemPageWidth", this.CFStringRef);
    this.kMDItemPageHeight = lib.declare("kMDItemPageHeight", this.CFStringRef);
    this.kMDItemSecurityMethod = lib.declare("kMDItemSecurityMethod", this.CFStringRef);
    this.kMDItemCreator = lib.declare("kMDItemCreator", this.CFStringRef);
    this.kMDItemEncodingApplications = lib.declare("kMDItemEncodingApplications", this.CFStringRef);
    this.kMDItemDueDate = lib.declare("kMDItemDueDate", this.CFStringRef);
    this.kMDItemStarRating = lib.declare("kMDItemStarRating", this.CFStringRef);
    this.kMDItemPhoneNumbers = lib.declare("kMDItemPhoneNumbers", this.CFStringRef);
    this.kMDItemEmailAddresses = lib.declare("kMDItemEmailAddresses", this.CFStringRef);
    this.kMDItemInstantMessageAddresses = lib.declare("kMDItemInstantMessageAddresses", this.CFStringRef);
    this.kMDItemKind = lib.declare("kMDItemKind", this.CFStringRef);
    this.kMDItemRecipients = lib.declare("kMDItemRecipients", this.CFStringRef);
    this.kMDItemFinderComment = lib.declare("kMDItemFinderComment", this.CFStringRef);
    this.kMDItemFonts = lib.declare("kMDItemFonts", this.CFStringRef);
    this.kMDItemAppleLoopsRootKey = lib.declare("kMDItemAppleLoopsRootKey", this.CFStringRef);
    this.kMDItemAppleLoopsKeyFilterType = lib.declare("kMDItemAppleLoopsKeyFilterType", this.CFStringRef);
    this.kMDItemAppleLoopsLoopMode = lib.declare("kMDItemAppleLoopsLoopMode", this.CFStringRef);
    this.kMDItemAppleLoopDescriptors = lib.declare("kMDItemAppleLoopDescriptors", this.CFStringRef);
    this.kMDItemMusicalInstrumentCategory = lib.declare("kMDItemMusicalInstrumentCategory", this.CFStringRef);
    this.kMDItemMusicalInstrumentName = lib.declare("kMDItemMusicalInstrumentName", this.CFStringRef);
    this.kMDItemCFBundleIdentifier = lib.declare("kMDItemCFBundleIdentifier", this.CFStringRef);
    this.kMDItemSupportFileType = lib.declare("kMDItemSupportFileType", this.CFStringRef);
    this.kMDItemInformation = lib.declare("kMDItemInformation", this.CFStringRef);
    this.kMDItemDirector = lib.declare("kMDItemDirector", this.CFStringRef);
    this.kMDItemProducer = lib.declare("kMDItemProducer", this.CFStringRef);
    this.kMDItemGenre = lib.declare("kMDItemGenre", this.CFStringRef);
    this.kMDItemPerformers = lib.declare("kMDItemPerformers", this.CFStringRef);
    this.kMDItemOriginalFormat = lib.declare("kMDItemOriginalFormat", this.CFStringRef);
    this.kMDItemOriginalSource = lib.declare("kMDItemOriginalSource", this.CFStringRef);
    this.kMDItemAuthorEmailAddresses = lib.declare("kMDItemAuthorEmailAddresses", this.CFStringRef);
    this.kMDItemRecipientEmailAddresses = lib.declare("kMDItemRecipientEmailAddresses", this.CFStringRef);
    this.kMDItemAuthorAddresses = lib.declare("kMDItemAuthorAddresses", this.CFStringRef);
    this.kMDItemRecipientAddresses = lib.declare("kMDItemRecipientAddresses", this.CFStringRef);
    this.kMDItemURL = lib.declare("kMDItemURL", this.CFStringRef);
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
    this.kMDQueryProgressNotification = lib.declare("kMDQueryProgressNotification", this.CFStringRef);
    this.kMDQueryDidFinishNotification = lib.declare("kMDQueryDidFinishNotification", this.CFStringRef);
    this.kMDQueryDidUpdateNotification = lib.declare("kMDQueryDidUpdateNotification", this.CFStringRef);
    this.kMDQueryUpdateAddedItems = lib.declare("kMDQueryUpdateAddedItems", this.CFStringRef);
    this.kMDQueryUpdateChangedItems = lib.declare("kMDQueryUpdateChangedItems", this.CFStringRef);
    this.kMDQueryUpdateRemovedItems = lib.declare("kMDQueryUpdateRemovedItems", this.CFStringRef);
    this.kMDQueryResultContentRelevance = lib.declare("kMDQueryResultContentRelevance", this.CFStringRef);
    this.MDQuerySetSearchScope = lib.declare("MDQuerySetSearchScope", ctypes.default_abi, ctypes.void_t, this.MDQueryRef, this.CFArrayRef, this.OptionBits);
    this.kMDQueryScopeHome = lib.declare("kMDQueryScopeHome", this.CFStringRef);
    this.kMDQueryScopeComputer = lib.declare("kMDQueryScopeComputer", this.CFStringRef);
    this.kMDQueryScopeNetwork = lib.declare("kMDQueryScopeNetwork", this.CFStringRef);
    this.kMDQueryScopeAllIndexed = lib.declare("kMDQueryScopeAllIndexed", this.CFStringRef);
    this.kMDQueryScopeComputerIndexed = lib.declare("kMDQueryScopeComputerIndexed", this.CFStringRef);
    this.kMDQueryScopeNetworkIndexed = lib.declare("kMDQueryScopeNetworkIndexed", this.CFStringRef);
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
    this.kMDAttributeDisplayValues = lib.declare("kMDAttributeDisplayValues", this.CFStringRef);
    this.kMDAttributeAllValues = lib.declare("kMDAttributeAllValues", this.CFStringRef);
    this.kMDAttributeReadOnlyValues = lib.declare("kMDAttributeReadOnlyValues", this.CFStringRef);
    this.kMDExporterAvaliable = lib.declare("kMDExporterAvaliable", this.CFStringRef);
    this.kMDAttributeName = lib.declare("kMDAttributeName", this.CFStringRef);
    this.kMDAttributeType = lib.declare("kMDAttributeType", this.CFStringRef);
    this.kMDAttributeMultiValued = lib.declare("kMDAttributeMultiValued", this.CFStringRef);
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
