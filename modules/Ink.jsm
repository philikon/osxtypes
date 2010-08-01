// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/Ink.framework/Headers/Ink.h
function Ink_h(lib) {
    CFData_h.call(this, lib);
    HIGeometry_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    CarbonEvents_h.call(this, lib);
    Menus_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._INK_H)
        return;
    this._INK_H = true;

    this.OpaqueInkTextRef = new ctypes.StructType("OpaqueInkTextRef");
    this.InkTextRef = this.OpaqueInkTextRef.ptr;
    this.OpaqueInkStrokeRef = new ctypes.StructType("OpaqueInkStrokeRef");
    this.InkStrokeRef = this.OpaqueInkStrokeRef.ptr;
    this.InkPoint = new ctypes.StructType("InkPoint", [{point: this.HIPoint}, {tabletPointData: this.TabletPointRec}, {keyModifiers: this.UInt32}]);
    this.InkPointPtr = this.InkPoint.ptr;
    this.InkAlternateCount = this.CFIndex;
    this.InkUserWritingModeType = this.FourCharCode;
    this.kInkWriteNowhere = 1852798824;
    this.kInkWriteAnywhere = 1634630007;
    this.kInkWriteInInkAwareAppsOnly = 1767993456;
    this.InkApplicationWritingModeType = this.FourCharCode;
    this.kInkWriteNowhereInApp = 1852798817;
    this.kInkWriteAnywhereInApp = 1634629985;
    this.InkDrawingModeType = this.UInt32;
    this.kInkDrawNothing = 0;
    this.kInkDrawInkOnly = 1;
    this.kInkDrawInkAndWritingGuides = 2;
    this.InkTextDrawFlagsType = this.UInt32;
    this.kInkTextDrawDefault = 0;
    this.kInkTextDrawIgnorePressure = 1;
    this.kInkTextDrawHonorContext = 2;
    this.InkTerminationType = this.UInt32;
    this.kInkTerminationNone = 0;
    this.kInkTerminationTimeOut = 1;
    this.kInkTerminationOutOfProximity = 2;
    this.kInkTerminationRecognizerHorizontalBreak = 4;
    this.kInkTerminationRecognizerVerticalBreak = 8;
    this.kInkTerminationStroke = 16;
    this.kInkTerminationDefault = 15;
    this.kInkTerminationAll = -1;
    this.InkSourceType = this.UInt32;
    this.kInkSourceUser = 1;
    this.kInkSourceApplication = 2;
    this.InkRecognitionType = this.UInt32;
    this.kInkRecognitionNone = 0;
    this.kInkRecognitionText = 1;
    this.kInkRecognitionGesture = 2;
    this.kInkRecognitionDefault = 3;
    this.InkGestureKind = this.FourCharCode;
    this.kInkGestureUndo = 1970168943;
    this.kInkGestureCut = 1668641824;
    this.kInkGestureCopy = 1668247673;
    this.kInkGesturePaste = 1885434740;
    this.kInkGestureClear = 1668048225;
    this.kInkGestureSelectAll = 1935764588;
    this.kInkGestureEscape = 1852797985;
    this.kInkGestureTab = 1952539168;
    this.kInkGestureLeftSpace = 1819504739;
    this.kInkGestureRightSpace = 1920168035;
    this.kInkGestureLeftReturn = 1819440238;
    this.kInkGestureRightReturn = 1920103534;
    this.kInkGestureDelete = 1684368416;
    this.kInkGestureJoin = 1785686382;
    this.kInkAlternateCommand = 1768844129;
    this.kInkSeparatorCommand = 1768844147;
    this.kInkDrawingCommand = 1768844132;
    this.kInkTabletPointerUnknown = 0;
    this.kInkTabletPointerPen = 1;
    this.kInkTabletPointerCursor = 2;
    this.kInkTabletPointerEraser = 3;
    this.kInkPenTipButtonMask = 1;
    this.kInkPenLowerSideButtonMask = 2;
    this.kInkPenUpperSideButtonMask = 4;
    this.InkUserWritingMode = lib.declare("InkUserWritingMode", ctypes.default_abi, this.InkUserWritingModeType);
    this.InkSetApplicationWritingMode = lib.declare("InkSetApplicationWritingMode", ctypes.default_abi, ctypes.void_t, this.InkApplicationWritingModeType);
    this.InkSetApplicationRecognitionMode = lib.declare("InkSetApplicationRecognitionMode", ctypes.default_abi, ctypes.void_t, this.InkRecognitionType);
    this.InkSetPhraseTerminationMode = lib.declare("InkSetPhraseTerminationMode", ctypes.default_abi, ctypes.void_t, this.InkSourceType, this.InkTerminationType);
    this.InkIsPhraseInProgress = lib.declare("InkIsPhraseInProgress", ctypes.default_abi, this.Boolean);
    this.InkSetDrawingMode = lib.declare("InkSetDrawingMode", ctypes.default_abi, ctypes.void_t, this.InkDrawingModeType);
    this.InkAddStrokeToCurrentPhrase = lib.declare("InkAddStrokeToCurrentPhrase", ctypes.default_abi, ctypes.void_t, ctypes.unsigned_long, this.InkPoint.ptr);
    this.InkTerminateCurrentPhrase = lib.declare("InkTerminateCurrentPhrase", ctypes.default_abi, ctypes.void_t, this.InkSourceType);
    this.InkTextAlternatesCount = lib.declare("InkTextAlternatesCount", ctypes.default_abi, this.CFIndex, this.InkTextRef);
    this.InkTextCreateCFString = lib.declare("InkTextCreateCFString", ctypes.default_abi, this.CFStringRef, this.InkTextRef, this.CFIndex);
    this.InkTextInsertAlternatesInMenu = lib.declare("InkTextInsertAlternatesInMenu", ctypes.default_abi, this.ItemCount, this.InkTextRef, this.MenuRef, this.MenuItemIndex);
    this.InkTextKeyModifiers = lib.declare("InkTextKeyModifiers", ctypes.default_abi, this.UInt32, this.InkTextRef);
    this.InkTextCopy = lib.declare("InkTextCopy", ctypes.default_abi, this.InkTextRef, this.InkTextRef);
    this.InkTextBounds = lib.declare("InkTextBounds", ctypes.default_abi, this.HIRect, this.InkTextRef);
    this.InkTextDraw = lib.declare("InkTextDraw", ctypes.default_abi, ctypes.void_t, this.InkTextRef, this.CGContextRef, this.CGRect.ptr, this.InkTextDrawFlagsType);
    this.InkTextFlatten = lib.declare("InkTextFlatten", ctypes.default_abi, this.CFIndex, this.InkTextRef, this.CFMutableDataRef, this.CFIndex);
    this.InkTextCreateFromCFData = lib.declare("InkTextCreateFromCFData", ctypes.default_abi, this.InkTextRef, this.CFDataRef, this.CFIndex);
    this.InkTextGetTypeID = lib.declare("InkTextGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.InkTextGetStrokeCount = lib.declare("InkTextGetStrokeCount", ctypes.default_abi, this.CFIndex, this.InkTextRef);
    this.InkTextGetStroke = lib.declare("InkTextGetStroke", ctypes.default_abi, this.InkStrokeRef, this.InkTextRef, this.CFIndex);
    this.InkStrokeGetPointCount = lib.declare("InkStrokeGetPointCount", ctypes.default_abi, this.CFIndex, this.InkStrokeRef);
    this.InkStrokeGetPoints = lib.declare("InkStrokeGetPoints", ctypes.default_abi, this.InkPoint.ptr, this.InkStrokeRef, this.InkPoint.ptr);
    this.InkStrokeGetTypeID = lib.declare("InkStrokeGetTypeID", ctypes.default_abi, this.CFTypeID);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/CoreGraphics.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");

const EXPORTED_SYMBOLS = ["Ink", "Ink_h"];

function Ink() {
    let libpath = "/System/Library/Frameworks/Carbon.framework/Frameworks/Ink.framework/Ink";
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

    Ink_h.call(this, lib);
}
