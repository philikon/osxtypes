// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/SpeechSynthesis.framework/Headers/SpeechSynthesis.h
function SpeechSynthesis_h(lib) {
    CFError_h.call(this, lib);
    CFBase_h.call(this, lib);
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._SPEECHSYNTHESIS_H)
        return;
    this._SPEECHSYNTHESIS_H = true;

    this.kTextToSpeechSynthType = 1953788771;
    this.kTextToSpeechVoiceType = 1953789540;
    this.kTextToSpeechVoiceFileType = 1953789542;
    this.kTextToSpeechVoiceBundleType = 1953789538;
    this.kNoEndingProsody = 1;
    this.kNoSpeechInterrupt = 2;
    this.kPreflightThenPause = 4;
    this.kImmediate = 0;
    this.kEndOfWord = 1;
    this.kEndOfSentence = 2;
    this.soStatus = 1937006964;
    this.soErrors = 1701999215;
    this.soInputMode = 1768845428;
    this.soCharacterMode = 1667785074;
    this.soNumberMode = 1852662386;
    this.soRate = 1918989413;
    this.soPitchBase = 1885495667;
    this.soPitchMod = 1886220132;
    this.soVolume = 1987013741;
    this.soSynthType = 1986359923;
    this.soRecentSync = 1937337955;
    this.soPhonemeSymbols = 1885893497;
    this.soCurrentVoice = 1668706168;
    this.soCommandDelimiter = 1684826477;
    this.soReset = 1920165236;
    this.soCurrentA5 = 1836663093;
    this.soRefCon = 1919247971;
    this.soTextDoneCallBack = 1952736098;
    this.soSpeechDoneCallBack = 1935958882;
    this.soSyncCallBack = 1937335138;
    this.soErrorCallBack = 1701995362;
    this.soPhonemeCallBack = 1885889378;
    this.soWordCallBack = 2003067746;
    this.soSynthExtension = 2020896356;
    this.soSoundOutput = 1936614511;
    this.soOutputToFileWithCFURL = 1869635942;
    this.soOutputToExtAudioFile = 1869635960;
    this.soOutputToAudioDevice = 1869635940;
    this.soPhonemeOptions = 1886351476;
    this.kSpeechImmediateBoundary = 0;
    this.kSpeechWordBoundary = 1;
    this.kSpeechSentenceBoundary = 2;
    this.SpeechBoundary = this.UInt32;
    this.modeText = 1413830740;
    this.modePhonemes = 1346916174;
    this.modeNormal = 1313821261;
    this.modeLiteral = 1280594508;
    this.soVoiceDescription = 1768842863;
    this.soVoiceFile = 1718773094;
    this.kSpeechGenerateTune = 1;
    this.kSpeechRelativePitch = 2;
    this.kSpeechRelativeDuration = 4;
    this.kSpeechShowSyllables = 8;
    this.kAudioUnitSubType_SpeechSynthesis = 1953788784;
    this.kAudioUnitProperty_Voice = 3330;
    this.kAudioUnitProperty_SpeechChannel = 3331;
    this.SpeechChannelRecord = new ctypes.StructType("SpeechChannelRecord", [{data: ctypes.long.array(1)}]);
    this.SpeechChannel = this.SpeechChannelRecord.ptr;
    this.VoiceSpec = new ctypes.StructType("VoiceSpec", [{creator: this.OSType}, {id: this.OSType}]);
    this.VoiceSpecPtr = this.VoiceSpec.ptr;
    this.kNeuter = 0;
    this.kMale = 1;
    this.kFemale = 2;
    this.VoiceDescription = new ctypes.StructType("VoiceDescription", [{length: this.SInt32}, {voice: this.VoiceSpec}, {version: this.SInt32}, {name: this.Str63}, {comment: this.Str255}, {gender: this.SInt16}, {age: this.SInt16}, {script: this.SInt16}, {language: this.SInt16}, {region: this.SInt16}, {reserved: this.SInt32.array(4)}]);
    this.VoiceFileInfo = new ctypes.StructType("VoiceFileInfo", [{fileSpec: this.FSSpec}, {resID: this.SInt16}]);
    this.SpeechStatusInfo = new ctypes.StructType("SpeechStatusInfo", [{outputBusy: this.Boolean}, {outputPaused: this.Boolean}, {inputBytesLeft: ctypes.long}, {phonemeCode: this.SInt16}]);
    this.SpeechErrorInfo = new ctypes.StructType("SpeechErrorInfo", [{count: this.SInt16}, {oldest: this.OSErr}, {oldPos: ctypes.long}, {newest: this.OSErr}, {newPos: ctypes.long}]);
    this.SpeechVersionInfo = new ctypes.StructType("SpeechVersionInfo", [{synthType: this.OSType}, {synthSubType: this.OSType}, {synthManufacturer: this.OSType}, {synthFlags: this.SInt32}, {synthVersion: this.NumVersion}]);
    this.PhonemeInfo = new ctypes.StructType("PhonemeInfo", [{opcode: this.SInt16}, {phStr: this.Str15}, {exampleStr: this.Str31}, {hiliteStart: this.SInt16}, {hiliteEnd: this.SInt16}]);
    this.PhonemeDescriptor = new ctypes.StructType("PhonemeDescriptor", [{phonemeCount: this.SInt16}, {thePhonemes: this.PhonemeInfo.array(1)}]);
    this.SpeechXtndData = new ctypes.StructType("SpeechXtndData", [{synthCreator: this.OSType}, {synthData: this.Byte.array(2)}]);
    this.DelimiterInfo = new ctypes.StructType("DelimiterInfo", [{startDelimiter: this.Byte.array(2)}, {endDelimiter: this.Byte.array(2)}]);
    this.SpeechTextDoneProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SpeechChannel, this.SRefCon, ctypes.void_t.ptr.ptr, ctypes.unsigned_long.ptr, this.SInt32.ptr]).ptr;
    this.SpeechDoneProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SpeechChannel, this.SRefCon]).ptr;
    this.SpeechSyncProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SpeechChannel, this.SRefCon, this.OSType]).ptr;
    this.SpeechErrorProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SpeechChannel, this.SRefCon, this.OSErr, ctypes.long]).ptr;
    this.SpeechPhonemeProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SpeechChannel, this.SRefCon, this.SInt16]).ptr;
    this.SpeechWordProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SpeechChannel, this.SRefCon, ctypes.unsigned_long, this.UInt16]).ptr;
    this.SpeechTextDoneUPP = this.SpeechTextDoneProcPtr;
    this.SpeechDoneUPP = this.SpeechDoneProcPtr;
    this.SpeechSyncUPP = this.SpeechSyncProcPtr;
    this.SpeechErrorUPP = this.SpeechErrorProcPtr;
    this.SpeechPhonemeUPP = this.SpeechPhonemeProcPtr;
    this.SpeechWordUPP = this.SpeechWordProcPtr;
    // Dropping inline function 'NewSpeechTextDoneUPP'.
    // Dropping inline function 'NewSpeechDoneUPP'.
    // Dropping inline function 'NewSpeechSyncUPP'.
    // Dropping inline function 'NewSpeechErrorUPP'.
    // Dropping inline function 'NewSpeechPhonemeUPP'.
    // Dropping inline function 'NewSpeechWordUPP'.
    // Dropping inline function 'DisposeSpeechTextDoneUPP'.
    // Dropping inline function 'DisposeSpeechDoneUPP'.
    // Dropping inline function 'DisposeSpeechSyncUPP'.
    // Dropping inline function 'DisposeSpeechErrorUPP'.
    // Dropping inline function 'DisposeSpeechPhonemeUPP'.
    // Dropping inline function 'DisposeSpeechWordUPP'.
    // Dropping inline function 'InvokeSpeechTextDoneUPP'.
    // Dropping inline function 'InvokeSpeechDoneUPP'.
    // Dropping inline function 'InvokeSpeechSyncUPP'.
    // Dropping inline function 'InvokeSpeechErrorUPP'.
    // Dropping inline function 'InvokeSpeechPhonemeUPP'.
    // Dropping inline function 'InvokeSpeechWordUPP'.
    this.SpeechErrorCFProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SpeechChannel, this.SRefCon, this.CFErrorRef]).ptr;
    this.SpeechWordCFProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SpeechChannel, this.SRefCon, this.CFStringRef, this.CFRange]).ptr;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");

const EXPORTED_SYMBOLS = ["SpeechSynthesis", "SpeechSynthesis_h"];

function SpeechSynthesis() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/SpeechSynthesis.framework/SpeechSynthesis";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    SpeechSynthesis_h.call(this, lib);
}
