// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/CommonPanels.framework/Headers/CMCalibrator.h
function CMCalibrator_h(lib) {
    MacTypes_h.call(this, lib);
    Events_h.call(this, lib);
    ColorSyncDeprecated_h.call(this, lib);

    if (this._CMCALIBRATOR_H)
        return;
    this._CMCALIBRATOR_H = true;

    this.CalibrateEventProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.EventRecord.ptr]).ptr;
    this.CalibrateEventUPP = this.CalibrateEventProcPtr;
    this.kCalibratorNamePrefix = 1667329129;
    this.CalibratorInfo = new ctypes.StructType("CalibratorInfo", [{dataSize: this.UInt32}, {displayID: this.CMDisplayIDType}, {profileLocationSize: this.UInt32}, {profileLocationPtr: this.CMProfileLocation.ptr}, {eventProc: this.CalibrateEventUPP}, {isGood: this.Boolean}]);
    this.CanCalibrateProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.CMDisplayIDType, ctypes.unsigned_char.ptr]).ptr;
    this.CalibrateProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.CalibratorInfo.ptr]).ptr;
    this.CanCalibrateUPP = this.CanCalibrateProcPtr;
    this.CalibrateUPP = this.CalibrateProcPtr;
    // Dropping inline function 'NewCalibrateEventUPP'.
    // Dropping inline function 'NewCanCalibrateUPP'.
    // Dropping inline function 'NewCalibrateUPP'.
    // Dropping inline function 'DisposeCalibrateEventUPP'.
    // Dropping inline function 'DisposeCanCalibrateUPP'.
    // Dropping inline function 'DisposeCalibrateUPP'.
    // Dropping inline function 'InvokeCalibrateEventUPP'.
    // Dropping inline function 'InvokeCanCalibrateUPP'.
    // Dropping inline function 'InvokeCalibrateUPP'.
    this.CMCalibrateDisplay = lib.declare("CMCalibrateDisplay", ctypes.default_abi, this.OSErr, this.CalibratorInfo.ptr);
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/CommonPanels.framework/Headers/FontPanel.h
function FontPanel_h(lib) {
    ATSTypes_h.call(this, lib);
    CarbonEventsCore_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._FONTPANEL_H)
        return;
    this._FONTPANEL_H = true;

    this.kEventClassFont = 1718578804;
    this.kHICommandShowHideFontPanel = 1936221808;
    this.kEventFontPanelClosed = 1;
    this.kEventFontSelection = 2;
    this.typeCTFontDescriptorRef = 1667658873;
    this.typeATSUFontID = 1835100014;
    this.typeATSUSize = 1718188132;
    this.typeFMFontFamily = 1936224114;
    this.typeFMFontStyle = 1936224114;
    this.typeFMFontSize = 1936224114;
    this.typeFontColor = 1666336578;
    this.kEventParamCTFontDescriptor = 1668572772;
    this.kEventParamATSUFontID = 1635084644;
    this.kEventParamATSUFontSize = 1635087226;
    this.kEventParamFMFontFamily = 1718445677;
    this.kEventParamFMFontStyle = 1718449012;
    this.kEventParamFMFontSize = 1718449018;
    this.kEventParamFontColor = 1717791858;
    this.kEventParamDictionary = 1684628340;
    this.kEventParamViewAttributesDictionary = 1684104291;
    this.kFontPanelATSUFontIDKey = lib.declare("kFontPanelATSUFontIDKey", this.CFStringRef);
    this.kFontPanelVariationAxesKey = lib.declare("kFontPanelVariationAxesKey", this.CFStringRef);
    this.kFontPanelVariationValuesKey = lib.declare("kFontPanelVariationValuesKey", this.CFStringRef);
    this.kFontPanelFeatureTypesKey = lib.declare("kFontPanelFeatureTypesKey", this.CFStringRef);
    this.kFontPanelFeatureSelectorsKey = lib.declare("kFontPanelFeatureSelectorsKey", this.CFStringRef);
    this.kFontPanelAttributesKey = lib.declare("kFontPanelAttributesKey", this.CFStringRef);
    this.kFontPanelAttributeTagsKey = lib.declare("kFontPanelAttributeTagsKey", this.CFStringRef);
    this.kFontPanelAttributeSizesKey = lib.declare("kFontPanelAttributeSizesKey", this.CFStringRef);
    this.kFontPanelAttributeValuesKey = lib.declare("kFontPanelAttributeValuesKey", this.CFStringRef);
    this.kFontPanelMouseTrackingState = lib.declare("kFontPanelMouseTrackingState", this.CFStringRef);
    this.kFontPanelBackgroundColorAttributeName = lib.declare("kFontPanelBackgroundColorAttributeName", this.CFStringRef);
    this.fontPanelShowErr = -8880;
    this.fontPanelSelectionStyleErr = -8881;
    this.fontPanelFontSelectionQDStyleVersionErr = -8882;
    this.kFontSelectionATSUIType = 1634956396;
    this.kFontSelectionQDType = 1903391852;
    this.kFontSelectionCoreTextType = 1668572772;
    this.kFontSelectionQDStyleVersionZero = 0;
    this.FontSelectionQDStyle = new ctypes.StructType("FontSelectionQDStyle", [{version: this.UInt32}, {instance: this.FMFontFamilyInstance}, {size: this.FMFontSize}, {hasColor: this.Boolean}, {reserved: this.UInt8}, {color: this.RGBColor}]);
    this.FontSelectionQDStylePtr = this.FontSelectionQDStyle.ptr;
    this.FPIsFontPanelVisible = lib.declare("FPIsFontPanelVisible", ctypes.default_abi, this.Boolean);
    this.FPShowHideFontPanel = lib.declare("FPShowHideFontPanel", ctypes.default_abi, this.OSStatus);
    this.SetFontInfoForSelection = lib.declare("SetFontInfoForSelection", ctypes.default_abi, this.OSStatus, this.OSType, this.UInt32, ctypes.void_t.ptr, this.EventTargetRef);
    this.OpaqueFCFontDescriptorRef = new ctypes.StructType("OpaqueFCFontDescriptorRef");
    this.FCFontDescriptorRef = this.OpaqueFCFontDescriptorRef.ptr;
    this.FCCopyCollectionNames = lib.declare("FCCopyCollectionNames", ctypes.default_abi, this.CFArrayRef);
    this.FCCopyFontDescriptorsInCollection = lib.declare("FCCopyFontDescriptorsInCollection", ctypes.default_abi, this.CFArrayRef, this.CFStringRef);
    this.FCAddCollection = lib.declare("FCAddCollection", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.OptionBits);
    this.FCRemoveCollection = lib.declare("FCRemoveCollection", ctypes.default_abi, this.OSStatus, this.CFStringRef);
    this.FCAddFontDescriptorToCollection = lib.declare("FCAddFontDescriptorToCollection", ctypes.default_abi, this.OSStatus, this.FCFontDescriptorRef, this.CFStringRef);
    this.FCRemoveFontDescriptorFromCollection = lib.declare("FCRemoveFontDescriptorFromCollection", ctypes.default_abi, this.OSStatus, this.FCFontDescriptorRef, this.CFStringRef);
    this.kFCFontFamilyAttribute = lib.declare("kFCFontFamilyAttribute", this.CFStringRef);
    this.kFCFontNameAttribute = lib.declare("kFCFontNameAttribute", this.CFStringRef);
    this.kFCFontFaceAttribute = lib.declare("kFCFontFaceAttribute", this.CFStringRef);
    this.kFCFontSizeAttribute = lib.declare("kFCFontSizeAttribute", this.CFStringRef);
    this.kFCFontVisibleNameAttribute = lib.declare("kFCFontVisibleNameAttribute", this.CFStringRef);
    this.kFCFontCGColorAttribute = lib.declare("kFCFontCGColorAttribute", this.CFStringRef);
    this.FCFontDescriptorCreateWithFontAttributes = lib.declare("FCFontDescriptorCreateWithFontAttributes", ctypes.default_abi, this.FCFontDescriptorRef, this.CFDictionaryRef);
    this.FCFontDescriptorCreateWithName = lib.declare("FCFontDescriptorCreateWithName", ctypes.default_abi, this.FCFontDescriptorRef, this.CFStringRef, this.CGFloat);
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/CommonPanels.framework/Headers/NSL.h
function NSL_h(lib) {
    Events_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._NSL_H)
        return;
    this._NSL_H = true;

    this.NSLDialogOptionFlags = this.UInt32;
    this.kNSLDefaultNSLDlogOptions = 0;
    this.kNSLNoURLTEField = 1;
    this.kNSLAddServiceTypes = 2;
    this.kNSLClientHandlesRecents = 4;
    this.NSLDialogOptions = new ctypes.StructType("NSLDialogOptions", [{version: this.UInt16}, {dialogOptionFlags: this.NSLDialogOptionFlags}, {windowTitle: this.Str255}, {actionButtonLabel: this.Str255}, {cancelButtonLabel: this.Str255}, {message: this.Str255}]);
    this.NSLURLFilterProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.char.ptr, ctypes.unsigned_char.ptr]).ptr;
    this.NSLEventProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.EventRecord.ptr, ctypes.void_t.ptr]).ptr;
    this.NSLURLFilterUPP = this.NSLURLFilterProcPtr;
    this.NSLEventUPP = this.NSLEventProcPtr;
    // Dropping inline function 'NewNSLURLFilterUPP'.
    // Dropping inline function 'NewNSLEventUPP'.
    // Dropping inline function 'DisposeNSLURLFilterUPP'.
    // Dropping inline function 'DisposeNSLEventUPP'.
    // Dropping inline function 'InvokeNSLURLFilterUPP'.
    // Dropping inline function 'InvokeNSLEventUPP'.
    this.NSLStandardGetURL = lib.declare("NSLStandardGetURL", ctypes.default_abi, this.OSStatus, this.NSLDialogOptions.ptr, this.NSLEventUPP, ctypes.void_t.ptr, this.NSLURLFilterUPP, ctypes.char.ptr, ctypes.char.ptr.ptr);
    this.NSLGetDefaultDialogOptions = lib.declare("NSLGetDefaultDialogOptions", ctypes.default_abi, this.OSStatus, this.NSLDialogOptions.ptr);
    this.NSLFreeURL = lib.declare("NSLFreeURL", ctypes.default_abi, ctypes.char.ptr, ctypes.char.ptr);
    this.NSLSaveURLAliasToFolder = lib.declare("NSLSaveURLAliasToFolder", ctypes.default_abi, this.OSErr, this.OSType, ctypes.char.ptr, ctypes.char.ptr);
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/CommonPanels.framework/Headers/ColorPicker.h
function ColorPicker_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    Events_h.call(this, lib);
    MacTypes_h.call(this, lib);
    ColorSyncDeprecated_h.call(this, lib);

    if (this._COLORPICKER_H)
        return;
    this._COLORPICKER_H = true;

    this.kMaximumSmallFract = 65535;
    this.kDefaultColorPickerWidth = 383;
    this.kDefaultColorPickerHeight = 238;
    this.DialogPlacementSpec = this.SInt16;
    this.kAtSpecifiedOrigin = 0;
    this.kDeepestColorScreen = 1;
    this.kCenterOnMainScreen = 2;
    this.kColorPickerDialogIsMoveable = 1;
    this.kColorPickerDialogIsModal = 2;
    this.kColorPickerCanModifyPalette = 4;
    this.kColorPickerCanAnimatePalette = 8;
    this.kColorPickerAppIsColorSyncAware = 16;
    this.kColorPickerInSystemDialog = 32;
    this.kColorPickerInApplicationDialog = 64;
    this.kColorPickerInPickerDialog = 128;
    this.kColorPickerDetachedFromChoices = 256;
    this.kColorPickerCallColorProcLive = 512;
    this.SmallFract = ctypes.unsigned_short;
    this.HSVColor = new ctypes.StructType("HSVColor", [{hue: this.SmallFract}, {saturation: this.SmallFract}, {value: this.SmallFract}]);
    this.HSLColor = new ctypes.StructType("HSLColor", [{hue: this.SmallFract}, {saturation: this.SmallFract}, {lightness: this.SmallFract}]);
    this.CMYColor = new ctypes.StructType("CMYColor", [{cyan: this.SmallFract}, {magenta: this.SmallFract}, {yellow: this.SmallFract}]);
    this.PMColor = new ctypes.StructType("PMColor", [{profile: this.CMProfileHandle}, {color: this.CMColor}]);
    this.PMColorPtr = this.PMColor.ptr;
    this.NPMColor = new ctypes.StructType("NPMColor", [{profile: this.CMProfileRef}, {color: this.CMColor}]);
    this.NPMColorPtr = this.NPMColor.ptr;
    this.OpaquePicker = new ctypes.StructType("OpaquePicker");
    this.Picker = this.OpaquePicker.ptr;
    this.picker = this.Picker;
    this.PickerMenuItemInfo = new ctypes.StructType("PickerMenuItemInfo", [{editMenuID: this.SInt16}, {cutItem: this.SInt16}, {copyItem: this.SInt16}, {pasteItem: this.SInt16}, {clearItem: this.SInt16}, {undoItem: this.SInt16}]);
    this.NColorChangedProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SRefCon, this.NPMColor.ptr]).ptr;
    this.NColorChangedUPP = this.NColorChangedProcPtr;
    // Dropping inline function 'NewNColorChangedUPP'.
    // Dropping inline function 'DisposeNColorChangedUPP'.
    // Dropping inline function 'InvokeNColorChangedUPP'.
    this.ColorChangedProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SInt32, this.PMColor.ptr]).ptr;
    this.UserEventProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.EventRecord.ptr]).ptr;
    this.ColorChangedUPP = this.ColorChangedProcPtr;
    this.UserEventUPP = this.UserEventProcPtr;
    // Dropping inline function 'NewColorChangedUPP'.
    // Dropping inline function 'NewUserEventUPP'.
    // Dropping inline function 'DisposeColorChangedUPP'.
    // Dropping inline function 'DisposeUserEventUPP'.
    // Dropping inline function 'InvokeColorChangedUPP'.
    // Dropping inline function 'InvokeUserEventUPP'.
    this.ColorPickerInfo = new ctypes.StructType("ColorPickerInfo", [{theColor: this.PMColor}, {dstProfile: this.CMProfileHandle}, {flags: this.UInt32}, {placeWhere: this.DialogPlacementSpec}, {dialogOrigin: this.Point}, {pickerType: this.OSType}, {eventProc: this.UserEventUPP}, {colorProc: this.ColorChangedUPP}, {colorProcData: this.UInt32}, {prompt: this.Str255}, {mInfo: this.PickerMenuItemInfo}, {newColorChosen: this.Boolean}, {filler: this.SInt8}]);
    this.NColorPickerInfo = new ctypes.StructType("NColorPickerInfo", [{theColor: this.NPMColor}, {dstProfile: this.CMProfileRef}, {flags: this.UInt32}, {placeWhere: this.DialogPlacementSpec}, {dialogOrigin: this.Point}, {pickerType: this.OSType}, {eventProc: this.UserEventUPP}, {colorProc: this.NColorChangedUPP}, {colorProcData: this.URefCon}, {prompt: this.Str255}, {mInfo: this.PickerMenuItemInfo}, {newColorChosen: this.Boolean}, {reserved: this.UInt8}]);
    this.Fix2SmallFract = lib.declare("Fix2SmallFract", ctypes.default_abi, this.SmallFract, this.Fixed);
    this.SmallFract2Fix = lib.declare("SmallFract2Fix", ctypes.default_abi, this.Fixed, this.SmallFract);
    this.CMY2RGB = lib.declare("CMY2RGB", ctypes.default_abi, ctypes.void_t, this.CMYColor.ptr, this.RGBColor.ptr);
    this.RGB2CMY = lib.declare("RGB2CMY", ctypes.default_abi, ctypes.void_t, this.RGBColor.ptr, this.CMYColor.ptr);
    this.HSL2RGB = lib.declare("HSL2RGB", ctypes.default_abi, ctypes.void_t, this.HSLColor.ptr, this.RGBColor.ptr);
    this.RGB2HSL = lib.declare("RGB2HSL", ctypes.default_abi, ctypes.void_t, this.RGBColor.ptr, this.HSLColor.ptr);
    this.HSV2RGB = lib.declare("HSV2RGB", ctypes.default_abi, ctypes.void_t, this.HSVColor.ptr, this.RGBColor.ptr);
    this.RGB2HSV = lib.declare("RGB2HSV", ctypes.default_abi, ctypes.void_t, this.RGBColor.ptr, this.HSVColor.ptr);
    this.GetColor = lib.declare("GetColor", ctypes.default_abi, this.Boolean, this.Point, this.ConstStr255Param, this.RGBColor.ptr, this.RGBColor.ptr);
    this.PickColor = lib.declare("PickColor", ctypes.default_abi, this.OSErr, this.ColorPickerInfo.ptr);
    this.NPickColor = lib.declare("NPickColor", ctypes.default_abi, this.OSErr, this.NColorPickerInfo.ptr);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/ColorSync.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/CoreGraphics.jsm");
Components.utils.import("resource://osxtypes/QD.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");
Components.utils.import("resource://osxtypes/ATS.jsm");

const EXPORTED_SYMBOLS = ["CommonPanels", "CMCalibrator_h", "FontPanel_h", "NSL_h", "ColorPicker_h"];

function CommonPanels() {
    let libpath = "/System/Library/Frameworks/Carbon.framework/Frameworks/CommonPanels.framework/CommonPanels";
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

    CMCalibrator_h.call(this, lib);
    FontPanel_h.call(this, lib);
    NSL_h.call(this, lib);
    ColorPicker_h.call(this, lib);
}
