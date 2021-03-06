// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/NavigationServices.framework/Headers/Navigation.h
function Navigation_h(lib) {
    MacWindows_h.call(this, lib);
    Events_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    Translation_h.call(this, lib);
    AEDataModel_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._NAVIGATION_H)
        return;
    this._NAVIGATION_H = true;

    this.NavAskSaveChangesAction = this.UInt32;
    this.kNavSaveChangesClosingDocument = 1;
    this.kNavSaveChangesQuittingApplication = 2;
    this.kNavSaveChangesOther = 0;
    this.NavAskSaveChangesResult = this.UInt32;
    this.kNavAskSaveChangesSave = 1;
    this.kNavAskSaveChangesCancel = 2;
    this.kNavAskSaveChangesDontSave = 3;
    this.NavAskDiscardChangesResult = this.UInt32;
    this.kNavAskDiscardChanges = 1;
    this.kNavAskDiscardChangesCancel = 2;
    this.NavFilterModes = this.SInt16;
    this.kNavFilteringBrowserList = 0;
    this.kNavFilteringFavorites = 1;
    this.kNavFilteringRecents = 2;
    this.kNavFilteringShortCutVolumes = 3;
    this.kNavFilteringLocationPopup = 4;
    this.kNavFileOrFolderVersion = 1;
    this.NavFileOrFolderInfo = new ctypes.StructType("NavFileOrFolderInfo", []);
    this.NavEventDataInfo = new ctypes.StructType("NavEventDataInfo", [{event: this.EventRecord.ptr}, {param: ctypes.void_t.ptr}]);
    this.NavEventData = new ctypes.StructType("NavEventData", [{eventDataParms: this.NavEventDataInfo}, {itemHit: this.SInt16}]);
    this.__NavDialog = new ctypes.StructType("__NavDialog");
    this.NavDialogRef = this.__NavDialog.ptr;
    this.NavUserAction = this.UInt32;
    this.kNavUserActionNone = 0;
    this.kNavUserActionCancel = 1;
    this.kNavUserActionOpen = 2;
    this.kNavUserActionSaveAs = 3;
    this.kNavUserActionChoose = 4;
    this.kNavUserActionNewFolder = 5;
    this.kNavUserActionSaveChanges = 6;
    this.kNavUserActionDontSaveChanges = 7;
    this.kNavUserActionDiscardChanges = 8;
    this.kNavUserActionReviewDocuments = 9;
    this.kNavUserActionDiscardDocuments = 10;
    this.kNavCBRecVersion = 1;
    this.NavCBRec = new ctypes.StructType("NavCBRec", [{version: this.UInt16}, {context: this.NavDialogRef}, {window: this.WindowRef}, {customRect: this.Rect}, {previewRect: this.Rect}, {eventData: this.NavEventData}, {userAction: this.NavUserAction}, {reserved: ctypes.char.array(218)}]);
    this.NavCBRecPtr = this.NavCBRec.ptr;
    this.NavEventCallbackMessage = this.SInt32;
    this.kNavCBEvent = 0;
    this.kNavCBCustomize = 1;
    this.kNavCBStart = 2;
    this.kNavCBTerminate = 3;
    this.kNavCBAdjustRect = 4;
    this.kNavCBNewLocation = 5;
    this.kNavCBShowDesktop = 6;
    this.kNavCBSelectEntry = 7;
    this.kNavCBPopupMenuSelect = 8;
    this.kNavCBAccept = 9;
    this.kNavCBCancel = 10;
    this.kNavCBAdjustPreview = 11;
    this.kNavCBUserAction = 12;
    this.kNavCBOpenSelection = -2147483648;
    this.NavCallBackUserData = ctypes.void_t.ptr;
    this.NavEventProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.NavEventCallbackMessage, this.NavCBRecPtr, ctypes.void_t.ptr]).ptr;
    this.NavPreviewProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.NavCBRecPtr, ctypes.void_t.ptr]).ptr;
    this.NavObjectFilterProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.AEDesc.ptr, ctypes.void_t.ptr, ctypes.void_t.ptr, this.NavFilterModes]).ptr;
    this.NavEventUPP = this.NavEventProcPtr;
    this.NavPreviewUPP = this.NavPreviewProcPtr;
    this.NavObjectFilterUPP = this.NavObjectFilterProcPtr;
    // Dropping inline function 'NewNavEventUPP'.
    // Dropping inline function 'NewNavPreviewUPP'.
    // Dropping inline function 'NewNavObjectFilterUPP'.
    // Dropping inline function 'DisposeNavEventUPP'.
    // Dropping inline function 'DisposeNavPreviewUPP'.
    // Dropping inline function 'DisposeNavObjectFilterUPP'.
    // Dropping inline function 'InvokeNavEventUPP'.
    // Dropping inline function 'InvokeNavPreviewUPP'.
    // Dropping inline function 'InvokeNavObjectFilterUPP'.
    this.NavCustomControlMessage = this.SInt32;
    this.kNavCtlShowDesktop = 0;
    this.kNavCtlSortBy = 1;
    this.kNavCtlSortOrder = 2;
    this.kNavCtlScrollHome = 3;
    this.kNavCtlScrollEnd = 4;
    this.kNavCtlPageUp = 5;
    this.kNavCtlPageDown = 6;
    this.kNavCtlGetLocation = 7;
    this.kNavCtlSetLocation = 8;
    this.kNavCtlGetSelection = 9;
    this.kNavCtlSetSelection = 10;
    this.kNavCtlShowSelection = 11;
    this.kNavCtlOpenSelection = 12;
    this.kNavCtlEjectVolume = 13;
    this.kNavCtlNewFolder = 14;
    this.kNavCtlCancel = 15;
    this.kNavCtlAccept = 16;
    this.kNavCtlIsPreviewShowing = 17;
    this.kNavCtlAddControl = 18;
    this.kNavCtlAddControlList = 19;
    this.kNavCtlGetFirstControlID = 20;
    this.kNavCtlSelectCustomType = 21;
    this.kNavCtlSelectAllType = 22;
    this.kNavCtlGetEditFileName = 23;
    this.kNavCtlSetEditFileName = 24;
    this.kNavCtlSelectEditFileName = 25;
    this.kNavCtlBrowserSelectAll = 26;
    this.kNavCtlGotoParent = 27;
    this.kNavCtlSetActionState = 28;
    this.kNavCtlBrowserRedraw = 29;
    this.kNavCtlTerminate = 30;
    this.NavActionState = this.UInt32;
    this.kNavNormalState = 0;
    this.kNavDontOpenState = 1;
    this.kNavDontSaveState = 2;
    this.kNavDontChooseState = 4;
    this.kNavDontNewFolderState = 16;
    this.NavPopupMenuItem = this.UInt16;
    this.kNavAllKnownFiles = 0;
    this.kNavAllReadableFiles = 1;
    this.kNavAllFiles = 2;
    this.NavSortKeyField = this.UInt16;
    this.kNavSortNameField = 0;
    this.kNavSortDateField = 1;
    this.NavSortOrder = this.UInt16;
    this.kNavSortAscending = 0;
    this.kNavSortDescending = 1;
    this.NavDialogOptionFlags = this.OptionBits;
    this.kNavDefaultNavDlogOptions = 228;
    this.kNavNoTypePopup = 1;
    this.kNavDontAutoTranslate = 2;
    this.kNavDontAddTranslateItems = 4;
    this.kNavAllFilesInPopup = 16;
    this.kNavAllowStationery = 32;
    this.kNavAllowPreviews = 64;
    this.kNavAllowMultipleFiles = 128;
    this.kNavAllowInvisibleFiles = 256;
    this.kNavDontResolveAliases = 512;
    this.kNavSelectDefaultLocation = 1024;
    this.kNavSelectAllReadableItem = 2048;
    this.kNavSupportPackages = 4096;
    this.kNavAllowOpenPackages = 8192;
    this.kNavDontAddRecents = 16384;
    this.kNavDontUseCustomFrame = 32768;
    this.kNavDontConfirmReplacement = 65536;
    this.kNavPreserveSaveFileExtension = 131072;
    this.NavTranslationOptions = this.UInt32;
    this.kNavTranslateInPlace = 0;
    this.kNavTranslateCopy = 1;
    this.kNavMenuItemSpecVersion = 0;
    this.NavMenuItemSpec = new ctypes.StructType("NavMenuItemSpec", [{version: this.UInt16}, {menuCreator: this.OSType}, {menuType: this.OSType}, {menuItemName: this.Str255}, {reserved: ctypes.char.array(245)}]);
    this.NavMenuItemSpecArrayPtr = this.NavMenuItemSpec.ptr;
    this.NavMenuItemSpecArrayHandle = this.NavMenuItemSpec.ptr.ptr;
    this.NavMenuItemSpecPtr = this.NavMenuItemSpecArrayPtr;
    this.NavMenuItemSpecHandle = this.NavMenuItemSpecArrayHandle;
    this.kNavGenericSignature = 707406378;
    this.kNavClientPopupExtensionTag = 1702392942;
    this.NavTypeList = new ctypes.StructType("NavTypeList", [{componentSignature: this.OSType}, {reserved: ctypes.short}, {osTypeCount: ctypes.short}, {osType: this.OSType.array(1)}]);
    this.NavTypeListPtr = this.NavTypeList.ptr;
    this.NavTypeListHandle = this.NavTypeListPtr.ptr;
    this.kNavReplyRecordVersion = 2;
    this.NavReplyRecord = new ctypes.StructType("NavReplyRecord", [{version: this.UInt16}, {validRecord: this.Boolean}, {replacing: this.Boolean}, {isStationery: this.Boolean}, {translationNeeded: this.Boolean}, {selection: this.AEDescList}, {keyScript: this.ScriptCode}, {fileTranslation: this.FileTranslationSpecArrayHandle}, {reserved1: this.UInt32}, {saveFileName: this.CFStringRef}, {saveFileExtensionHidden: this.Boolean}, {reserved2: this.UInt8}, {reserved: ctypes.char.array(225)}]);
    this.NavCompleteSave = lib.declare("NavCompleteSave", ctypes.default_abi, this.OSErr, this.NavReplyRecord.ptr, this.NavTranslationOptions);
    this.NavCustomControl = lib.declare("NavCustomControl", ctypes.default_abi, this.OSErr, this.NavDialogRef, this.NavCustomControlMessage, ctypes.void_t.ptr);
    this.NavCreatePreview = lib.declare("NavCreatePreview", ctypes.default_abi, this.OSErr, this.AEDesc.ptr, this.OSType, ctypes.void_t.ptr, this.Size);
    this.NavDisposeReply = lib.declare("NavDisposeReply", ctypes.default_abi, this.OSErr, this.NavReplyRecord.ptr);
    this.kNavDialogCreationOptionsVersion = 0;
    this.NavDialogCreationOptions = new ctypes.StructType("NavDialogCreationOptions", [{version: this.UInt16}, {optionFlags: this.NavDialogOptionFlags}, {location: this.Point}, {clientName: this.CFStringRef}, {windowTitle: this.CFStringRef}, {actionButtonLabel: this.CFStringRef}, {cancelButtonLabel: this.CFStringRef}, {saveFileName: this.CFStringRef}, {message: this.CFStringRef}, {preferenceKey: this.UInt32}, {popupExtension: this.CFArrayRef}, {modality: this.WindowModality}, {parentWindow: this.WindowRef}, {reserved: ctypes.char.array(16)}]);
    this.NavGetDefaultDialogCreationOptions = lib.declare("NavGetDefaultDialogCreationOptions", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr);
    this.NavCreateGetFileDialog = lib.declare("NavCreateGetFileDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.NavTypeListHandle, this.NavEventUPP, this.NavPreviewUPP, this.NavObjectFilterUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavCreatePutFileDialog = lib.declare("NavCreatePutFileDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.OSType, this.OSType, this.NavEventUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavCreateAskReviewDocumentsDialog = lib.declare("NavCreateAskReviewDocumentsDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.ItemCount, this.NavEventUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavCreateAskSaveChangesDialog = lib.declare("NavCreateAskSaveChangesDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.NavAskSaveChangesAction, this.NavEventUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavCreateAskDiscardChangesDialog = lib.declare("NavCreateAskDiscardChangesDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.NavEventUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavCreateChooseFileDialog = lib.declare("NavCreateChooseFileDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.NavTypeListHandle, this.NavEventUPP, this.NavPreviewUPP, this.NavObjectFilterUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavCreateChooseFolderDialog = lib.declare("NavCreateChooseFolderDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.NavEventUPP, this.NavObjectFilterUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavCreateChooseVolumeDialog = lib.declare("NavCreateChooseVolumeDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.NavEventUPP, this.NavObjectFilterUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavCreateChooseObjectDialog = lib.declare("NavCreateChooseObjectDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.NavEventUPP, this.NavPreviewUPP, this.NavObjectFilterUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavCreateNewFolderDialog = lib.declare("NavCreateNewFolderDialog", ctypes.default_abi, this.OSStatus, this.NavDialogCreationOptions.ptr, this.NavEventUPP, ctypes.void_t.ptr, this.NavDialogRef.ptr);
    this.NavDialogRun = lib.declare("NavDialogRun", ctypes.default_abi, this.OSStatus, this.NavDialogRef);
    this.NavDialogDispose = lib.declare("NavDialogDispose", ctypes.default_abi, ctypes.void_t, this.NavDialogRef);
    this.NavDialogGetWindow = lib.declare("NavDialogGetWindow", ctypes.default_abi, this.WindowRef, this.NavDialogRef);
    this.NavDialogGetUserAction = lib.declare("NavDialogGetUserAction", ctypes.default_abi, this.NavUserAction, this.NavDialogRef);
    this.NavDialogGetReply = lib.declare("NavDialogGetReply", ctypes.default_abi, this.OSStatus, this.NavDialogRef, this.NavReplyRecord.ptr);
    this.NavDialogGetSaveFileName = lib.declare("NavDialogGetSaveFileName", ctypes.default_abi, this.CFStringRef, this.NavDialogRef);
    this.NavDialogSetSaveFileName = lib.declare("NavDialogSetSaveFileName", ctypes.default_abi, this.OSStatus, this.NavDialogRef, this.CFStringRef);
    this.NavDialogGetSaveFileExtensionHidden = lib.declare("NavDialogGetSaveFileExtensionHidden", ctypes.default_abi, this.Boolean, this.NavDialogRef);
    this.NavDialogSetSaveFileExtensionHidden = lib.declare("NavDialogSetSaveFileExtensionHidden", ctypes.default_abi, this.OSStatus, this.NavDialogRef, this.Boolean);
    this.NavDialogSetFilterTypeIdentifiers = lib.declare("NavDialogSetFilterTypeIdentifiers", ctypes.default_abi, this.OSStatus, this.NavDialogRef, this.CFArrayRef);
    this.kNavDialogOptionsVersion = 0;
    this.NavDialogOptions = new ctypes.StructType("NavDialogOptions", [{version: this.UInt16}, {dialogOptionFlags: this.NavDialogOptionFlags}, {location: this.Point}, {clientName: this.Str255}, {windowTitle: this.Str255}, {actionButtonLabel: this.Str255}, {cancelButtonLabel: this.Str255}, {savedFileName: this.Str255}, {message: this.Str255}, {preferenceKey: this.UInt32}, {popupExtension: this.NavMenuItemSpecArrayHandle}, {reserved: ctypes.char.array(494)}]);
    this.NavLoad = lib.declare("NavLoad", ctypes.default_abi, this.OSErr);
    this.NavUnload = lib.declare("NavUnload", ctypes.default_abi, this.OSErr);
    this.NavLibraryVersion = lib.declare("NavLibraryVersion", ctypes.default_abi, this.UInt32);
    this.NavGetDefaultDialogOptions = lib.declare("NavGetDefaultDialogOptions", ctypes.default_abi, this.OSErr, this.NavDialogOptions.ptr);
    this.NavGetFile = lib.declare("NavGetFile", ctypes.default_abi, this.OSErr, this.AEDesc.ptr, this.NavReplyRecord.ptr, this.NavDialogOptions.ptr, this.NavEventUPP, this.NavPreviewUPP, this.NavObjectFilterUPP, this.NavTypeListHandle, ctypes.void_t.ptr);
    this.NavPutFile = lib.declare("NavPutFile", ctypes.default_abi, this.OSErr, this.AEDesc.ptr, this.NavReplyRecord.ptr, this.NavDialogOptions.ptr, this.NavEventUPP, this.OSType, this.OSType, ctypes.void_t.ptr);
    this.NavAskSaveChanges = lib.declare("NavAskSaveChanges", ctypes.default_abi, this.OSErr, this.NavDialogOptions.ptr, this.NavAskSaveChangesAction, this.NavAskSaveChangesResult.ptr, this.NavEventUPP, ctypes.void_t.ptr);
    this.NavCustomAskSaveChanges = lib.declare("NavCustomAskSaveChanges", ctypes.default_abi, this.OSErr, this.NavDialogOptions.ptr, this.NavAskSaveChangesResult.ptr, this.NavEventUPP, ctypes.void_t.ptr);
    this.NavAskDiscardChanges = lib.declare("NavAskDiscardChanges", ctypes.default_abi, this.OSErr, this.NavDialogOptions.ptr, this.NavAskDiscardChangesResult.ptr, this.NavEventUPP, ctypes.void_t.ptr);
    this.NavChooseFile = lib.declare("NavChooseFile", ctypes.default_abi, this.OSErr, this.AEDesc.ptr, this.NavReplyRecord.ptr, this.NavDialogOptions.ptr, this.NavEventUPP, this.NavPreviewUPP, this.NavObjectFilterUPP, this.NavTypeListHandle, ctypes.void_t.ptr);
    this.NavChooseFolder = lib.declare("NavChooseFolder", ctypes.default_abi, this.OSErr, this.AEDesc.ptr, this.NavReplyRecord.ptr, this.NavDialogOptions.ptr, this.NavEventUPP, this.NavObjectFilterUPP, ctypes.void_t.ptr);
    this.NavChooseVolume = lib.declare("NavChooseVolume", ctypes.default_abi, this.OSErr, this.AEDesc.ptr, this.NavReplyRecord.ptr, this.NavDialogOptions.ptr, this.NavEventUPP, this.NavObjectFilterUPP, ctypes.void_t.ptr);
    this.NavChooseObject = lib.declare("NavChooseObject", ctypes.default_abi, this.OSErr, this.AEDesc.ptr, this.NavReplyRecord.ptr, this.NavDialogOptions.ptr, this.NavEventUPP, this.NavObjectFilterUPP, ctypes.void_t.ptr);
    this.NavNewFolder = lib.declare("NavNewFolder", ctypes.default_abi, this.OSErr, this.AEDesc.ptr, this.NavReplyRecord.ptr, this.NavDialogOptions.ptr, this.NavEventUPP, ctypes.void_t.ptr);
    this.NavTranslateFile = lib.declare("NavTranslateFile", ctypes.default_abi, this.OSErr, this.NavReplyRecord.ptr, this.NavTranslationOptions);
    this.NavServicesCanRun = lib.declare("NavServicesCanRun", ctypes.default_abi, this.Boolean);
    // Dropping inline function 'NavServicesAvailable'.
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/AE.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/QD.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");

const EXPORTED_SYMBOLS = ["NavigationServices", "Navigation_h"];

function NavigationServices() {
    let libpath = "/System/Library/Frameworks/Carbon.framework/Frameworks/NavigationServices.framework/NavigationServices";
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

    Navigation_h.call(this, lib);
}
