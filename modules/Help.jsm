// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/Help.framework/Headers/AppleHelp.h
function AppleHelp_h(lib) {
    CFBase_h.call(this, lib);
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);
    CFURL_h.call(this, lib);

    if (this._APPLEHELP_H)
        return;
    this._APPLEHELP_H = true;

    this.kAHInternalErr = -10790;
    this.kAHInternetConfigPrefErr = -10791;
    this.AHTOCType = this.SInt16;
    this.kAHTOCTypeUser = 0;
    this.kAHTOCTypeDeveloper = 1;
    this.AHSearch = lib.declare("AHSearch", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.CFStringRef);
    this.AHGotoMainTOC = lib.declare("AHGotoMainTOC", ctypes.default_abi, this.OSStatus, this.AHTOCType);
    this.AHGotoPage = lib.declare("AHGotoPage", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.CFStringRef, this.CFStringRef);
    this.AHLookupAnchor = lib.declare("AHLookupAnchor", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.CFStringRef);
    this.AHRegisterHelpBook = lib.declare("AHRegisterHelpBook", ctypes.default_abi, this.OSStatus, this.FSRef.ptr);
    this.AHRegisterHelpBookWithURL = lib.declare("AHRegisterHelpBookWithURL", ctypes.default_abi, this.OSStatus, this.CFURLRef);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["Help", "AppleHelp_h"];

function Help() {
    let libpath = "/System/Library/Frameworks/Carbon.framework/Frameworks/Help.framework/Help";
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

    AppleHelp_h.call(this, lib);
}
