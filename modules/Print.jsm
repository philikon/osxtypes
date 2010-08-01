// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/Print.framework/Headers/PMApplication.h
function PMApplication_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);
    PMDefinitions_h.call(this, lib);

    if (this._PMAPPLICATION_H)
        return;
    this._PMAPPLICATION_H = true;

    this.PMSheetDoneProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.PMPrintSession, this.WindowRef, this.Boolean]).ptr;
    this.PMSheetDoneUPP = this.PMSheetDoneProcPtr;
    this.PMSessionBeginCGDocument = lib.declare("PMSessionBeginCGDocument", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPrintSettings, this.PMPageFormat);
    this.PMSessionEndDocument = lib.declare("PMSessionEndDocument", ctypes.default_abi, this.OSStatus, this.PMPrintSession);
    this.PMSessionBeginPage = lib.declare("PMSessionBeginPage", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPageFormat, this.PMRect.ptr);
    this.PMSessionEndPage = lib.declare("PMSessionEndPage", ctypes.default_abi, this.OSStatus, this.PMPrintSession);
    this.PMSessionPageSetupDialog = lib.declare("PMSessionPageSetupDialog", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPageFormat, this.Boolean.ptr);
    this.PMSessionPrintDialog = lib.declare("PMSessionPrintDialog", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPrintSettings, this.PMPageFormat, this.Boolean.ptr);
    this.PMSessionUseSheets = lib.declare("PMSessionUseSheets", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.WindowRef, this.PMSheetDoneUPP);
    this.PMShowPageSetupDialogAsSheet = lib.declare("PMShowPageSetupDialogAsSheet", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPageFormat, this.WindowRef, this.PMSheetDoneUPP);
    this.PMShowPrintDialogWithOptions = lib.declare("PMShowPrintDialogWithOptions", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPrintSettings, this.PMPageFormat, this.PMPrintDialogOptionFlags, this.Boolean.ptr);
    this.PMShowPrintDialogWithOptionsAsSheet = lib.declare("PMShowPrintDialogWithOptionsAsSheet", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPrintSettings, this.PMPageFormat, this.PMPrintDialogOptionFlags, this.WindowRef, this.PMSheetDoneUPP);
    this.PMSessionEnablePrinterPresets = lib.declare("PMSessionEnablePrinterPresets", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.CFStringRef);
    this.PMSessionDisablePrinterPresets = lib.declare("PMSessionDisablePrinterPresets", ctypes.default_abi, this.OSStatus, this.PMPrintSession);
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/Print.framework/Headers/PMApplicationDeprecated.h
function PMApplicationDeprecated_h(lib) {
    PMDefinitionsDeprecated_h.call(this, lib);
    Dialogs_h.call(this, lib);
    MacTypes_h.call(this, lib);
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
    this.NewPMItemUPP = lib.declare("NewPMItemUPP", ctypes.default_abi, this.PMItemUPP, this.PMItemProcPtr);
    this.NewPMPrintDialogInitUPP = lib.declare("NewPMPrintDialogInitUPP", ctypes.default_abi, this.PMPrintDialogInitUPP, this.PMPrintDialogInitProcPtr);
    this.NewPMPageSetupDialogInitUPP = lib.declare("NewPMPageSetupDialogInitUPP", ctypes.default_abi, this.PMPageSetupDialogInitUPP, this.PMPageSetupDialogInitProcPtr);
    this.DisposePMItemUPP = lib.declare("DisposePMItemUPP", ctypes.default_abi, ctypes.void_t, this.PMItemUPP);
    this.DisposePMPrintDialogInitUPP = lib.declare("DisposePMPrintDialogInitUPP", ctypes.default_abi, ctypes.void_t, this.PMPrintDialogInitUPP);
    this.DisposePMPageSetupDialogInitUPP = lib.declare("DisposePMPageSetupDialogInitUPP", ctypes.default_abi, ctypes.void_t, this.PMPageSetupDialogInitUPP);
    this.InvokePMItemUPP = lib.declare("InvokePMItemUPP", ctypes.default_abi, ctypes.void_t, this.DialogRef, ctypes.short, this.PMItemUPP);
    this.InvokePMPrintDialogInitUPP = lib.declare("InvokePMPrintDialogInitUPP", ctypes.default_abi, ctypes.void_t, this.PMPrintSettings, this.PMDialog.ptr, this.PMPrintDialogInitUPP);
    this.InvokePMPageSetupDialogInitUPP = lib.declare("InvokePMPageSetupDialogInitUPP", ctypes.default_abi, ctypes.void_t, this.PMPageFormat, this.PMDialog.ptr, this.PMPageSetupDialogInitUPP);
    this.PMSessionBeginDocument = lib.declare("PMSessionBeginDocument", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPrintSettings, this.PMPageFormat);
    this.PMSessionPageSetupDialogInit = lib.declare("PMSessionPageSetupDialogInit", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPageFormat, this.PMDialog.ptr);
    this.PMSessionPrintDialogInit = lib.declare("PMSessionPrintDialogInit", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPrintSettings, this.PMPageFormat, this.PMDialog.ptr);
    this.PMSessionPrintDialogMain = lib.declare("PMSessionPrintDialogMain", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPrintSettings, this.PMPageFormat, this.Boolean.ptr, this.PMPrintDialogInitUPP);
    this.PMSessionPageSetupDialogMain = lib.declare("PMSessionPageSetupDialogMain", ctypes.default_abi, this.OSStatus, this.PMPrintSession, this.PMPageFormat, this.Boolean.ptr, this.PMPageSetupDialogInitUPP);
    this.PMGetDialogPtr = lib.declare("PMGetDialogPtr", ctypes.default_abi, this.OSStatus, this.PMDialog, this.DialogRef.ptr);
    this.PMGetModalFilterProc = lib.declare("PMGetModalFilterProc", ctypes.default_abi, this.OSStatus, this.PMDialog, this.ModalFilterUPP.ptr);
    this.PMSetModalFilterProc = lib.declare("PMSetModalFilterProc", ctypes.default_abi, this.OSStatus, this.PMDialog, this.ModalFilterUPP);
    this.PMGetItemProc = lib.declare("PMGetItemProc", ctypes.default_abi, this.OSStatus, this.PMDialog, this.PMItemUPP.ptr);
    this.PMSetItemProc = lib.declare("PMSetItemProc", ctypes.default_abi, this.OSStatus, this.PMDialog, this.PMItemUPP);
    this.PMGetDialogAccepted = lib.declare("PMGetDialogAccepted", ctypes.default_abi, this.OSStatus, this.PMDialog, this.Boolean.ptr);
    this.PMSetDialogAccepted = lib.declare("PMSetDialogAccepted", ctypes.default_abi, this.OSStatus, this.PMDialog, this.Boolean);
    this.PMGetDialogDone = lib.declare("PMGetDialogDone", ctypes.default_abi, this.OSStatus, this.PMDialog, this.Boolean.ptr);
    this.PMSetDialogDone = lib.declare("PMSetDialogDone", ctypes.default_abi, this.OSStatus, this.PMDialog, this.Boolean);
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/PrintCore.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/QD.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");

const EXPORTED_SYMBOLS = ["Print", "PMApplication_h", "PMApplicationDeprecated_h"];

function Print() {
    let libpath = "/System/Library/Frameworks/Carbon.framework/Frameworks/Print.framework/Print";
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

    PMApplication_h.call(this, lib);
    PMApplicationDeprecated_h.call(this, lib);
}
