// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/Print.framework/Headers/PMApplication.h
function PMApplication_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    MacTypes_h.call(this, lib);
    PMDefinitions_h.call(this, lib);

    if (this._PMAPPLICATION_H)
        return;
    this._PMAPPLICATION_H = true;

    this.PMSheetDoneProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.PMPrintSession, this.WindowRef, this.Boolean]).ptr;
    this.PMSheetDoneUPP = this.PMSheetDoneProcPtr;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/Print.framework/Headers/PMApplicationDeprecated.h
function PMApplicationDeprecated_h(lib) {
    PMDefinitionsDeprecated_h.call(this, lib);
    Dialogs_h.call(this, lib);
    PMDefinitions_h.call(this, lib);

    if (this._PMAPPLICATIONDEPRECATED_H)
        return;
    this._PMAPPLICATIONDEPRECATED_H = true;

    this.PMItemProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.DialogRef, ctypes.short]).ptr;
    this.PMPrintDialogInitProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.PMPrintSettings, this.PMDialog.ptr]).ptr;
    this.PMPageSetupDialogInitProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.PMPageFormat, this.PMDialog.ptr]).ptr;
    this.PMItemUPP = this.PMItemProcPtr;
    this.PMPrintDialogInitUPP = this.PMPrintDialogInitProcPtr;
    this.PMPageSetupDialogInitUPP = this.PMPageSetupDialogInitProcPtr;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");
Components.utils.import("resource://osxtypes/QD.jsm");
Components.utils.import("resource://osxtypes/PrintCore.jsm");

const EXPORTED_SYMBOLS = ["Print", "PMApplication_h", "PMApplicationDeprecated_h"];

function Print() {
    let libpath = "/System/Library/Frameworks/Print.framework/Print";
    let lib = ctypes.open(libpath);

    PMApplication_h.call(this, lib);
    PMApplicationDeprecated_h.call(this, lib);
}
