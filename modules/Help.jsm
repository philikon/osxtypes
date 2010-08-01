// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/Help.framework/Headers/AppleHelp.h
function AppleHelp_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._APPLEHELP_H)
        return;
    this._APPLEHELP_H = true;

    this.kAHInternalErr = -10790;
    this.kAHInternetConfigPrefErr = -10791;
    this.AHTOCType = this.SInt16;
    this.kAHTOCTypeUser = 0;
    this.kAHTOCTypeDeveloper = 1;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["Help", "AppleHelp_h"];

function Help() {
    let libpath = "/System/Library/Frameworks/Help.framework/Help";
    let lib = ctypes.open(libpath);

    AppleHelp_h.call(this, lib);
}
