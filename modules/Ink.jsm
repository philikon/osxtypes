// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/Ink.framework/Headers/Ink.h
function Ink_h(lib) {
    CFBase_h.call(this, lib);
    HIGeometry_h.call(this, lib);
    CarbonEvents_h.call(this, lib);
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
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");

const EXPORTED_SYMBOLS = ["Ink", "Ink_h"];

function Ink() {
    let libpath = "/System/Library/Frameworks/Ink.framework/Ink";
    let lib = ctypes.open(libpath);

    Ink_h.call(this, lib);
}
