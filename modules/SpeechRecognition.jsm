// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/SpeechRecognition.framework/Headers/SpeechRecognition.h
function SpeechRecognition_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._SPEECHRECOGNITION_H)
        return;
    this._SPEECHRECOGNITION_H = true;

    this.kSRNotAvailable = -5100;
    this.kSRInternalError = -5101;
    this.kSRComponentNotFound = -5102;
    this.kSROutOfMemory = -5103;
    this.kSRNotASpeechObject = -5104;
    this.kSRBadParameter = -5105;
    this.kSRParamOutOfRange = -5106;
    this.kSRBadSelector = -5107;
    this.kSRBufferTooSmall = -5108;
    this.kSRNotARecSystem = -5109;
    this.kSRFeedbackNotAvail = -5110;
    this.kSRCantSetProperty = -5111;
    this.kSRCantGetProperty = -5112;
    this.kSRCantSetDuringRecognition = -5113;
    this.kSRAlreadyListening = -5114;
    this.kSRNotListeningState = -5115;
    this.kSRModelMismatch = -5116;
    this.kSRNoClientLanguageModel = -5117;
    this.kSRNoPendingUtterances = -5118;
    this.kSRRecognitionCanceled = -5119;
    this.kSRRecognitionDone = -5120;
    this.kSROtherRecAlreadyModal = -5121;
    this.kSRHasNoSubItems = -5122;
    this.kSRSubItemNotFound = -5123;
    this.kSRLanguageModelTooBig = -5124;
    this.kSRAlreadyReleased = -5125;
    this.kSRAlreadyFinished = -5126;
    this.kSRWordNotFound = -5127;
    this.kSRNotFinishedWithRejection = -5128;
    this.kSRExpansionTooDeep = -5129;
    this.kSRTooManyElements = -5130;
    this.kSRCantAdd = -5131;
    this.kSRSndInSourceDisconnected = -5132;
    this.kSRCantReadLanguageObject = -5133;
    this.kSRNotImplementedYet = -5199;
    this.OpaqueSRSpeechObject = new ctypes.StructType("OpaqueSRSpeechObject");
    this.SRSpeechObject = this.OpaqueSRSpeechObject.ptr;
    this.SRRecognitionSystem = this.SRSpeechObject;
    this.SRRecognizer = this.SRSpeechObject;
    this.SRSpeechSource = this.SRSpeechObject;
    this.SRRecognitionResult = this.SRSpeechSource;
    this.SRLanguageObject = this.SRSpeechObject;
    this.SRLanguageModel = this.SRLanguageObject;
    this.SRPath = this.SRLanguageObject;
    this.SRPhrase = this.SRLanguageObject;
    this.SRWord = this.SRLanguageObject;
    this.SRSpeedSetting = this.UInt16;
    this.SRRejectionLevel = this.UInt16;
    this.SRCallBackStruct = new ctypes.StructType("SRCallBackStruct", [{what: this.UInt32}, {message: ctypes.long}, {instance: this.SRRecognizer}, {status: this.OSErr}, {flags: this.SInt16}, {refCon: this.SRefCon}]);
    this.SRCallBackProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SRCallBackStruct.ptr]).ptr;
    this.SRCallBackUPP = this.SRCallBackProcPtr;
    // Dropping inline function 'NewSRCallBackUPP'.
    // Dropping inline function 'DisposeSRCallBackUPP'.
    // Dropping inline function 'InvokeSRCallBackUPP'.
    this.SRCallBackParam = new ctypes.StructType("SRCallBackParam", [{callBack: this.SRCallBackUPP}, {refCon: this.SRefCon}]);
    this.kSRDefaultRecognitionSystemID = 0;
    this.kSRFeedbackAndListeningModes = 1717729134;
    this.kSRRejectedWord = 1919249009;
    this.kSRCleanupOnClientExit = 1668052336;
    this.kSRNoFeedbackNoListenModes = 0;
    this.kSRHasFeedbackHasListenModes = 1;
    this.kSRNoFeedbackHasListenModes = 2;
    this.kSRDefaultSpeechSource = 0;
    this.kSRLiveDesktopSpeechSource = 1684761718;
    this.kSRCanned22kHzSpeechSource = 1667314226;
    this.kSRNotifyRecognitionBeginning = 1;
    this.kSRNotifyRecognitionDone = 2;
    this.kAESpeechSuite = 1936749155;
    this.kAESpeechDone = 1936880484;
    this.kAESpeechDetected = 1936876132;
    this.keySRRecognizer = 1802659171;
    this.keySRSpeechResult = 1802727538;
    this.keySRSpeechStatus = 1802728308;
    this.typeSRRecognizer = 1953654115;
    this.typeSRSpeechResult = 1953722482;
    this.kSRNotificationParam = 1852798057;
    this.kSRCallBackParam = 1667329132;
    this.kSRSearchStatusParam = 1937006964;
    this.kSRAutoFinishingParam = 1634101614;
    this.kSRForegroundOnly = 1718054766;
    this.kSRBlockBackground = 1651270247;
    this.kSRBlockModally = 1651273060;
    this.kSRWantsResultTextDrawn = 1954047586;
    this.kSRWantsAutoFBGestures = 1684431474;
    this.kSRSoundInVolume = 1987013749;
    this.kSRReadAudioFSSpec = 1635086948;
    this.kSRReadAudioURL = 1635086956;
    this.kSRCancelOnSoundOut = 1667330927;
    this.kSRSpeedVsAccuracyParam = 1936745828;
    this.kSRUseToggleListen = 0;
    this.kSRUsePushToTalk = 1;
    this.kSRListenKeyMode = 1818979684;
    this.kSRListenKeyCombo = 1818977657;
    this.kSRListenKeyName = 1819173229;
    this.kSRKeyWord = 1802990180;
    this.kSRKeyExpected = 1801812080;
    this.kSRIdleRecognizer = 1;
    this.kSRSearchInProgress = 2;
    this.kSRSearchWaitForAllClients = 4;
    this.kSRMustCancelSearch = 8;
    this.kSRPendingSearch = 16;
    this.kSRTEXTFormat = 1413830740;
    this.kSRPhraseFormat = 1819111528;
    this.kSRPathFormat = 1819111540;
    this.kSRLanguageModelFormat = 1819108973;
    this.kSRSpelling = 1936745836;
    this.kSRLMObjType = 1819112560;
    this.kSRRefCon = 1919247971;
    this.kSROptional = 1869640812;
    this.kSREnabled = 1701732972;
    this.kSRRepeatable = 1919972450;
    this.kSRRejectable = 1919574636;
    this.kSRRejectionLevel = 1919574900;
    this.kSRLanguageModelType = 1819111266;
    this.kSRPathType = 1885434984;
    this.kSRPhraseType = 1885893217;
    this.kSRWordType = 2003792484;
    this.kSRDefaultRejectionLevel = 50;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["SpeechRecognition", "SpeechRecognition_h"];

function SpeechRecognition() {
    let libpath = "/System/Library/Frameworks/SpeechRecognition.framework/SpeechRecognition";
    let lib = ctypes.open(libpath);

    SpeechRecognition_h.call(this, lib);
}
