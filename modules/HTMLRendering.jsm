// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HTMLRendering.framework/Headers/HTMLRendering.h
function HTMLRendering_h(lib) {
    Files_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFURL_h.call(this, lib);

    if (this._HTMLRENDERING_H)
        return;
    this._HTMLRENDERING_H = true;

    this.OpaqueHRReference = new ctypes.StructType("OpaqueHRReference");
    this.HRReference = this.OpaqueHRReference.ptr;
    // Dropping inline function 'HRHTMLRenderingLibAvailable'.
    this.kHRRendererHTML32Type = 1752445746;
    this.HRScrollbarState = this.SInt16;
    this.eHRScrollbarOn = 0;
    this.eHRScrollbarOff = 1;
    this.eHRScrollbarAuto = 2;
    this.HRWasURLVisitedProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.char.ptr, ctypes.void_t.ptr]).ptr;
    this.HRWasURLVisitedUPP = this.HRWasURLVisitedProcPtr;
    this.HRWasCFURLVisitedProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.CFURLRef, ctypes.void_t.ptr]).ptr;
    this.HRWasCFURLVisitedUPP = this.HRWasCFURLVisitedProcPtr;
    this.HRNewURLProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.char.ptr, ctypes.char.ptr, this.Boolean, ctypes.void_t.ptr]).ptr;
    this.HRNewURLUPP = this.HRNewURLProcPtr;
    this.HRNewCFURLProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.CFURLRef, this.CFStringRef, this.Boolean, ctypes.void_t.ptr]).ptr;
    this.HRNewCFURLUPP = this.HRNewCFURLProcPtr;
    this.URLSourceType = this.UInt16;
    this.kHRLookingForHTMLSource = 1;
    this.kHRLookingForImage = 2;
    this.kHRLookingForEmbedded = 3;
    this.kHRLookingForImageMap = 4;
    this.kHRLookingForFrame = 5;
    this.HRURLToFSSpecProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.char.ptr, ctypes.char.ptr, this.FSSpec.ptr, this.URLSourceType, ctypes.void_t.ptr]).ptr;
    this.HRURLToFSSpecUPP = this.HRURLToFSSpecProcPtr;
    this.HRURLToFSRefProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.CFStringRef, this.CFStringRef, this.FSRef.ptr, this.URLSourceType, ctypes.void_t.ptr]).ptr;
    this.HRURLToFSRefUPP = this.HRURLToFSRefProcPtr;
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
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["HTMLRendering", "HTMLRendering_h"];

function HTMLRendering() {
    let libpath = "/System/Library/Frameworks/Carbon.framework/Frameworks/HTMLRendering.framework/HTMLRendering";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    HTMLRendering_h.call(this, lib);
}
