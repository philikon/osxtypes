// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HTMLRendering.framework/Headers/HTMLRendering.h
function HTMLRendering_h(lib) {
    CFData_h.call(this, lib);
    Events_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    HIObject_h.call(this, lib);
    Files_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._HTMLRENDERING_H)
        return;
    this._HTMLRENDERING_H = true;

    this.OpaqueHRReference = new ctypes.StructType("OpaqueHRReference");
    this.HRReference = this.OpaqueHRReference.ptr;
    this.HRGetHTMLRenderingLibVersion = lib.declare("HRGetHTMLRenderingLibVersion", ctypes.default_abi, this.OSStatus, this.NumVersion.ptr);
    // Dropping inline function 'HRHTMLRenderingLibAvailable'.
    this.kHRRendererHTML32Type = 1752445746;
    this.HRNewReference = lib.declare("HRNewReference", ctypes.default_abi, this.OSStatus, this.HRReference.ptr, this.OSType, this.GrafPtr);
    this.HRNewReferenceInWindow = lib.declare("HRNewReferenceInWindow", ctypes.default_abi, this.OSStatus, this.HRReference.ptr, this.OSType, this.WindowRef);
    this.HRDisposeReference = lib.declare("HRDisposeReference", ctypes.default_abi, this.OSStatus, this.HRReference);
    this.HRFreeMemory = lib.declare("HRFreeMemory", ctypes.default_abi, this.SInt32, this.Size);
    this.HRScreenConfigurationChanged = lib.declare("HRScreenConfigurationChanged", ctypes.default_abi, ctypes.void_t);
    this.HRIsHREvent = lib.declare("HRIsHREvent", ctypes.default_abi, this.Boolean, this.EventRecord.ptr);
    this.HRSetGrafPtr = lib.declare("HRSetGrafPtr", ctypes.default_abi, this.OSStatus, this.HRReference, this.GrafPtr);
    this.HRSetWindowRef = lib.declare("HRSetWindowRef", ctypes.default_abi, this.OSStatus, this.HRReference, this.WindowRef);
    this.HRSetEmbeddingControl = lib.declare("HRSetEmbeddingControl", ctypes.default_abi, this.OSStatus, this.HRReference, this.ControlRef);
    this.HRActivate = lib.declare("HRActivate", ctypes.default_abi, this.OSStatus, this.HRReference);
    this.HRDeactivate = lib.declare("HRDeactivate", ctypes.default_abi, this.OSStatus, this.HRReference);
    this.HRDraw = lib.declare("HRDraw", ctypes.default_abi, this.OSStatus, this.HRReference, this.RgnHandle);
    this.HRDrawInPort = lib.declare("HRDrawInPort", ctypes.default_abi, this.OSStatus, this.HRReference, this.RgnHandle, this.CGrafPtr);
    this.HRSetRenderingRect = lib.declare("HRSetRenderingRect", ctypes.default_abi, this.OSStatus, this.HRReference, this.Rect.ptr);
    this.HRGetRenderedImageSize = lib.declare("HRGetRenderedImageSize", ctypes.default_abi, this.OSStatus, this.HRReference, this.Point.ptr);
    this.HRGetRenderedImageSize32 = lib.declare("HRGetRenderedImageSize32", ctypes.default_abi, this.OSStatus, this.HRReference, this.UInt32.ptr, this.UInt32.ptr);
    this.HRScrollToLocation = lib.declare("HRScrollToLocation", ctypes.default_abi, this.OSStatus, this.HRReference, this.Point.ptr);
    this.HRScrollToImageLocation32 = lib.declare("HRScrollToImageLocation32", ctypes.default_abi, this.OSStatus, this.HRReference, this.SInt32, this.SInt32);
    this.HRForceQuickdraw = lib.declare("HRForceQuickdraw", ctypes.default_abi, this.OSStatus, this.HRReference, this.Boolean);
    this.HRScrollbarState = this.SInt16;
    this.eHRScrollbarOn = 0;
    this.eHRScrollbarOff = 1;
    this.eHRScrollbarAuto = 2;
    this.HRSetScrollbarState = lib.declare("HRSetScrollbarState", ctypes.default_abi, this.OSStatus, this.HRReference, this.HRScrollbarState, this.HRScrollbarState);
    this.HRSetDrawBorder = lib.declare("HRSetDrawBorder", ctypes.default_abi, this.OSStatus, this.HRReference, this.Boolean);
    this.HRSetGrowboxCutout = lib.declare("HRSetGrowboxCutout", ctypes.default_abi, this.OSStatus, this.HRReference, this.Boolean);
    this.HRGoToFile = lib.declare("HRGoToFile", ctypes.default_abi, this.OSStatus, this.HRReference, this.FSSpec.ptr, this.Boolean, this.Boolean);
    this.HRGoToURL = lib.declare("HRGoToURL", ctypes.default_abi, this.OSStatus, this.HRReference, ctypes.char.ptr, this.Boolean, this.Boolean);
    this.HRGoToAnchor = lib.declare("HRGoToAnchor", ctypes.default_abi, this.OSStatus, this.HRReference, ctypes.char.ptr);
    this.HRGoToPtr = lib.declare("HRGoToPtr", ctypes.default_abi, this.OSStatus, this.HRReference, ctypes.char.ptr, this.UInt32, this.Boolean, this.Boolean);
    this.HRGoToFSRef = lib.declare("HRGoToFSRef", ctypes.default_abi, this.OSStatus, this.HRReference, this.FSRef.ptr, this.Boolean, this.Boolean);
    this.HRGoToCFURL = lib.declare("HRGoToCFURL", ctypes.default_abi, this.OSStatus, this.HRReference, this.CFURLRef, this.Boolean, this.Boolean);
    this.HRGoToAnchorCFString = lib.declare("HRGoToAnchorCFString", ctypes.default_abi, this.OSStatus, this.HRReference, this.CFStringRef);
    this.HRGoToData = lib.declare("HRGoToData", ctypes.default_abi, this.OSStatus, this.HRReference, this.CFDataRef, this.Boolean, this.Boolean);
    this.HRGetRootURL = lib.declare("HRGetRootURL", ctypes.default_abi, this.OSStatus, this.HRReference, this.Handle);
    this.HRGetBaseURL = lib.declare("HRGetBaseURL", ctypes.default_abi, this.OSStatus, this.HRReference, this.Handle);
    this.HRGetHTMLURL = lib.declare("HRGetHTMLURL", ctypes.default_abi, this.OSStatus, this.HRReference, this.Handle);
    this.HRGetTitle = lib.declare("HRGetTitle", ctypes.default_abi, this.OSStatus, this.HRReference, this.StringPtr);
    this.HRGetHTMLFile = lib.declare("HRGetHTMLFile", ctypes.default_abi, this.OSStatus, this.HRReference, this.FSSpec.ptr);
    this.HRGetRootURLAsCFString = lib.declare("HRGetRootURLAsCFString", ctypes.default_abi, this.OSStatus, this.HRReference, this.CFStringRef.ptr);
    this.HRGetBaseURLAsCFString = lib.declare("HRGetBaseURLAsCFString", ctypes.default_abi, this.OSStatus, this.HRReference, this.CFStringRef.ptr);
    this.HRGetHTMLURLAsCFURL = lib.declare("HRGetHTMLURLAsCFURL", ctypes.default_abi, this.OSStatus, this.HRReference, this.CFURLRef.ptr);
    this.HRGetTitleAsCFString = lib.declare("HRGetTitleAsCFString", ctypes.default_abi, this.OSStatus, this.HRReference, this.CFStringRef.ptr);
    this.HRGetHTMLFileAsFSRef = lib.declare("HRGetHTMLFileAsFSRef", ctypes.default_abi, this.OSStatus, this.HRReference, this.FSRef.ptr);
    this.HRUtilCreateFullURL = lib.declare("HRUtilCreateFullURL", ctypes.default_abi, this.OSStatus, ctypes.char.ptr, ctypes.char.ptr, this.Handle);
    this.HRUtilGetFSSpecFromURL = lib.declare("HRUtilGetFSSpecFromURL", ctypes.default_abi, this.OSStatus, ctypes.char.ptr, ctypes.char.ptr, this.FSSpec.ptr);
    this.HRUtilGetURLFromFSSpec = lib.declare("HRUtilGetURLFromFSSpec", ctypes.default_abi, this.OSStatus, this.FSSpec.ptr, this.Handle);
    this.HRUtilCreateFullCFURL = lib.declare("HRUtilCreateFullCFURL", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.CFStringRef, this.CFURLRef.ptr);
    this.HRUtilGetFSRefFromURL = lib.declare("HRUtilGetFSRefFromURL", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.CFStringRef, this.FSRef.ptr);
    this.HRUtilGetURLFromFSRef = lib.declare("HRUtilGetURLFromFSRef", ctypes.default_abi, this.OSStatus, this.FSRef.ptr, this.CFURLRef.ptr);
    this.HRWasURLVisitedProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.char.ptr, ctypes.void_t.ptr]).ptr;
    this.HRWasURLVisitedUPP = this.HRWasURLVisitedProcPtr;
    this.HRRegisterWasURLVisitedUPP = lib.declare("HRRegisterWasURLVisitedUPP", ctypes.default_abi, ctypes.void_t, this.HRWasURLVisitedUPP, this.HRReference, ctypes.void_t.ptr);
    this.HRUnregisterWasURLVisitedUPP = lib.declare("HRUnregisterWasURLVisitedUPP", ctypes.default_abi, ctypes.void_t, this.HRReference);
    this.HRWasCFURLVisitedProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.CFURLRef, ctypes.void_t.ptr]).ptr;
    this.HRWasCFURLVisitedUPP = this.HRWasCFURLVisitedProcPtr;
    this.HRRegisterWasCFURLVisitedUPP = lib.declare("HRRegisterWasCFURLVisitedUPP", ctypes.default_abi, ctypes.void_t, this.HRWasCFURLVisitedUPP, this.HRReference, ctypes.void_t.ptr);
    this.HRUnregisterWasCFURLVisitedUPP = lib.declare("HRUnregisterWasCFURLVisitedUPP", ctypes.default_abi, ctypes.void_t, this.HRReference);
    this.HRNewURLProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.char.ptr, ctypes.char.ptr, this.Boolean, ctypes.void_t.ptr]).ptr;
    this.HRNewURLUPP = this.HRNewURLProcPtr;
    this.HRRegisterNewURLUPP = lib.declare("HRRegisterNewURLUPP", ctypes.default_abi, ctypes.void_t, this.HRNewURLUPP, this.HRReference, ctypes.void_t.ptr);
    this.HRUnregisterNewURLUPP = lib.declare("HRUnregisterNewURLUPP", ctypes.default_abi, ctypes.void_t, this.HRReference);
    this.HRNewCFURLProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.CFURLRef, this.CFStringRef, this.Boolean, ctypes.void_t.ptr]).ptr;
    this.HRNewCFURLUPP = this.HRNewCFURLProcPtr;
    this.HRRegisterNewCFURLUPP = lib.declare("HRRegisterNewCFURLUPP", ctypes.default_abi, ctypes.void_t, this.HRNewCFURLUPP, this.HRReference, ctypes.void_t.ptr);
    this.HRUnregisterNewCFURLUPP = lib.declare("HRUnregisterNewCFURLUPP", ctypes.default_abi, ctypes.void_t, this.HRReference);
    this.URLSourceType = this.UInt16;
    this.kHRLookingForHTMLSource = 1;
    this.kHRLookingForImage = 2;
    this.kHRLookingForEmbedded = 3;
    this.kHRLookingForImageMap = 4;
    this.kHRLookingForFrame = 5;
    this.HRURLToFSSpecProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.char.ptr, ctypes.char.ptr, this.FSSpec.ptr, this.URLSourceType, ctypes.void_t.ptr]).ptr;
    this.HRURLToFSSpecUPP = this.HRURLToFSSpecProcPtr;
    this.HRRegisterURLToFSSpecUPP = lib.declare("HRRegisterURLToFSSpecUPP", ctypes.default_abi, ctypes.void_t, this.HRURLToFSSpecUPP, this.HRReference, ctypes.void_t.ptr);
    this.HRUnregisterURLToFSSpecUPP = lib.declare("HRUnregisterURLToFSSpecUPP", ctypes.default_abi, ctypes.void_t, this.HRReference);
    this.HRURLToFSRefProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.CFStringRef, this.CFStringRef, this.FSRef.ptr, this.URLSourceType, ctypes.void_t.ptr]).ptr;
    this.HRURLToFSRefUPP = this.HRURLToFSRefProcPtr;
    this.HRRegisterURLToFSRefUPP = lib.declare("HRRegisterURLToFSRefUPP", ctypes.default_abi, ctypes.void_t, this.HRURLToFSRefUPP, this.HRReference, ctypes.void_t.ptr);
    this.HRUnregisterURLToFSRefUPP = lib.declare("HRUnregisterURLToFSRefUPP", ctypes.default_abi, ctypes.void_t, this.HRReference);
    // Dropping inline function 'NewHRWasURLVisitedUPP'.
    // Dropping inline function 'NewHRWasCFURLVisitedUPP'.
    // Dropping inline function 'NewHRNewURLUPP'.
    // Dropping inline function 'NewHRNewCFURLUPP'.
    // Dropping inline function 'NewHRURLToFSSpecUPP'.
    // Dropping inline function 'NewHRURLToFSRefUPP'.
    // Dropping inline function 'DisposeHRWasURLVisitedUPP'.
    // Dropping inline function 'DisposeHRWasCFURLVisitedUPP'.
    // Dropping inline function 'DisposeHRNewURLUPP'.
    // Dropping inline function 'DisposeHRNewCFURLUPP'.
    // Dropping inline function 'DisposeHRURLToFSSpecUPP'.
    // Dropping inline function 'DisposeHRURLToFSRefUPP'.
    // Dropping inline function 'InvokeHRWasURLVisitedUPP'.
    // Dropping inline function 'InvokeHRWasCFURLVisitedUPP'.
    // Dropping inline function 'InvokeHRNewURLUPP'.
    // Dropping inline function 'InvokeHRNewCFURLUPP'.
    // Dropping inline function 'InvokeHRURLToFSSpecUPP'.
    // Dropping inline function 'InvokeHRURLToFSRefUPP'.
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/QD.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");

const EXPORTED_SYMBOLS = ["HTMLRendering", "HTMLRendering_h"];

function HTMLRendering() {
    let libpath = "/System/Library/Frameworks/Carbon.framework/Frameworks/HTMLRendering.framework/HTMLRendering";
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

    HTMLRendering_h.call(this, lib);
}
