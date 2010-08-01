// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/OpenScripting.framework/Headers/OSA.h
function OSA_h(lib) {
    AEDataModel_h.call(this, lib);
    AEInteraction_h.call(this, lib);
    Components_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._OSA_H)
        return;
    this._OSA_H = true;

    this.kOSAComponentType = 1869832480;
    this.kOSAGenericScriptingComponentSubtype = 1935896692;
    this.kOSAFileType = 1869832563;
    this.kOSASuite = 1634952050;
    this.kOSARecordedText = 1919247204;
    this.kOSAScriptIsModified = 1836016745;
    this.kOSAScriptIsTypeCompiledScript = 1668506482;
    this.kOSAScriptIsTypeScriptValue = 1986096245;
    this.kOSAScriptIsTypeScriptContext = 1668183160;
    this.kOSAScriptBestType = 1650815860;
    this.kOSACanGetSource = 1735619171;
    this.typeOSADialectInfo = 1684629103;
    this.keyOSADialectName = 1684955501;
    this.keyOSADialectCode = 1684238180;
    this.keyOSADialectLangCode = 1684824932;
    this.keyOSADialectScriptCode = 1685283684;
    this.OSAError = this.ComponentResult;
    this.OSAID = this.UInt32;
    this.kOSANullScript = 0;
    this.kOSANullMode = 0;
    this.kOSAModeNull = 0;
    this.OSACreateAppleEventProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.AEEventClass, this.AEEventID, this.AEAddressDesc.ptr, ctypes.short, this.SInt32, this.AppleEvent.ptr, this.SRefCon]).ptr;
    this.OSASendProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.AppleEvent.ptr, this.AppleEvent.ptr, this.AESendMode, this.AESendPriority, this.SInt32, this.AEIdleUPP, this.AEFilterUPP, this.SRefCon]).ptr;
    this.OSACreateAppleEventUPP = this.OSACreateAppleEventProcPtr;
    this.OSASendUPP = this.OSASendProcPtr;
    // Dropping inline function 'NewOSACreateAppleEventUPP'.
    // Dropping inline function 'NewOSASendUPP'.
    // Dropping inline function 'DisposeOSACreateAppleEventUPP'.
    // Dropping inline function 'DisposeOSASendUPP'.
    // Dropping inline function 'InvokeOSACreateAppleEventUPP'.
    // Dropping inline function 'InvokeOSASendUPP'.
    this.kOSASupportsCompiling = 2;
    this.kOSASupportsGetSource = 4;
    this.kOSASupportsAECoercion = 8;
    this.kOSASupportsAESending = 16;
    this.kOSASupportsRecording = 32;
    this.kOSASupportsConvenience = 64;
    this.kOSASupportsDialects = 128;
    this.kOSASupportsEventHandling = 256;
    this.kOSASelectLoad = 1;
    this.kOSASelectStore = 2;
    this.kOSASelectExecute = 3;
    this.kOSASelectDisplay = 4;
    this.kOSASelectScriptError = 5;
    this.kOSASelectDispose = 6;
    this.kOSASelectSetScriptInfo = 7;
    this.kOSASelectGetScriptInfo = 8;
    this.kOSASelectSetActiveProc = 9;
    this.kOSASelectGetActiveProc = 10;
    this.kOSASelectCopyDisplayString = 11;
    this.kOSASelectScriptingComponentName = 258;
    this.kOSASelectCompile = 259;
    this.kOSASelectCopyID = 260;
    this.kOSASelectCopyScript = 261;
    this.kOSASelectGetSource = 513;
    this.kOSASelectCopySourceString = 514;
    this.kOSASelectCoerceFromDesc = 769;
    this.kOSASelectCoerceToDesc = 770;
    this.kOSASelectSetSendProc = 1025;
    this.kOSASelectGetSendProc = 1026;
    this.kOSASelectSetCreateProc = 1027;
    this.kOSASelectGetCreateProc = 1028;
    this.kOSASelectSetDefaultTarget = 1029;
    this.kOSASelectStartRecording = 1281;
    this.kOSASelectStopRecording = 1282;
    this.kOSASelectLoadExecute = 1537;
    this.kOSASelectCompileExecute = 1538;
    this.kOSASelectDoScript = 1539;
    this.kOSASelectSetCurrentDialect = 1793;
    this.kOSASelectGetCurrentDialect = 1794;
    this.kOSASelectAvailableDialects = 1795;
    this.kOSASelectGetDialectInfo = 1796;
    this.kOSASelectAvailableDialectCodeList = 1797;
    this.kOSASelectSetResumeDispatchProc = 2049;
    this.kOSASelectGetResumeDispatchProc = 2050;
    this.kOSASelectExecuteEvent = 2051;
    this.kOSASelectDoEvent = 2052;
    this.kOSASelectMakeContext = 2053;
    this.kOSASelectComponentSpecificStart = 4097;
    this.kOSAModePreventGetSource = 1;
    this.kOSAModeNeverInteract = 16;
    this.kOSAModeCanInteract = 32;
    this.kOSAModeAlwaysInteract = 48;
    this.kOSAModeDontReconnect = 128;
    this.kOSAModeCantSwitchLayer = 64;
    this.kOSAModeDoRecord = 4096;
    this.kOSAModeCompileIntoContext = 2;
    this.kOSAModeAugmentContext = 4;
    this.kOSAModeDisplayForHumans = 8;
    this.kOSAModeDontStoreParent = 65536;
    this.kOSAModeDispatchToDirectObject = 131072;
    this.kOSAModeDontGetDataForArguments = 262144;
    this.kOSAModeFullyQualifyDescriptors = 524288;
    this.kOSAScriptResourceType = 1935896692;
    this.typeOSAGenericStorage = 1935896692;
    this.kOSAErrorNumber = 1701999214;
    this.kOSAErrorMessage = 1701999219;
    this.kOSAErrorBriefMessage = 1701999202;
    this.kOSAErrorApp = 1701994864;
    this.kOSAErrorPartialResult = 1886678130;
    this.kOSAErrorOffendingObject = 1701998434;
    this.kOSAErrorExpectedType = 1701999220;
    this.kOSAErrorRange = 1701998183;
    this.typeOSAErrorRange = 1701998183;
    this.keyOSASourceStart = 1936876403;
    this.keyOSASourceEnd = 1936876389;
    this.OSAActiveProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.SRefCon]).ptr;
    this.OSAActiveUPP = this.OSAActiveProcPtr;
    // Dropping inline function 'NewOSAActiveUPP'.
    // Dropping inline function 'DisposeOSAActiveUPP'.
    // Dropping inline function 'InvokeOSAActiveUPP'.
    this.kOSAUseStandardDispatch = -1;
    this.kOSANoDispatch = 0;
    this.kOSADontUsePhac = 1;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/OpenScripting.framework/Headers/OSAGeneric.h
function OSAGeneric_h(lib) {
    OSA_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._OSAGENERIC_H)
        return;
    this._OSAGENERIC_H = true;

    this.kGenericComponentVersion = 256;
    this.kGSSSelectGetDefaultScriptingComponent = 4097;
    this.kGSSSelectSetDefaultScriptingComponent = 4098;
    this.kGSSSelectGetScriptingComponent = 4099;
    this.kGSSSelectGetScriptingComponentFromStored = 4100;
    this.kGSSSelectGenericToRealID = 4101;
    this.kGSSSelectRealToGenericID = 4102;
    this.kGSSSelectOutOfRange = 4103;
    this.ScriptingComponentSelector = this.OSType;
    this.GenericID = this.OSAID;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/OpenScripting.framework/Headers/AppleScript.h
function AppleScript_h(lib) {

    if (this._APPLESCRIPT_H)
        return;
    this._APPLESCRIPT_H = true;

    this.typeAppleScript = 1634952050;
    this.kAppleScriptSubtype = 1634952050;
    this.typeASStorage = 1634952050;
    this.kASSelectInit = 4097;
    this.kASSelectSetSourceStyles = 4098;
    this.kASSelectGetSourceStyles = 4099;
    this.kASSelectGetSourceStyleNames = 4100;
    this.kASSelectCopySourceAttributes = 4101;
    this.kASSelectSetSourceAttributes = 4102;
    this.kASHasOpenHandler = 1752395620;
    this.kASDefaultMinStackSize = 4096;
    this.kASDefaultPreferredStackSize = 16384;
    this.kASDefaultMaxStackSize = 16384;
    this.kASDefaultMinHeapSize = 4096;
    this.kASDefaultPreferredHeapSize = 16384;
    this.kASDefaultMaxHeapSize = 33554432;
    this.kASSourceStyleUncompiledText = 0;
    this.kASSourceStyleNormalText = 1;
    this.kASSourceStyleLanguageKeyword = 2;
    this.kASSourceStyleApplicationKeyword = 3;
    this.kASSourceStyleComment = 4;
    this.kASSourceStyleLiteral = 5;
    this.kASSourceStyleUserSymbol = 6;
    this.kASSourceStyleObjectSpecifier = 7;
    this.kASSourceStyleString = 7;
    this.kASSourceStyleEventName = 8;
    this.kASSourceStyleParameterName = 9;
    this.kASSourceStyleClass = 10;
    this.kASSourceStyleProperty = 11;
    this.kASSourceStyleEnumValue = 12;
    this.kASSourceStyleDynamicEventName = 13;
    this.kASSourceStyleDynamicParameterName = 14;
    this.kASSourceStyleDynamicClass = 15;
    this.kASSourceStyleDynamicProperty = 16;
    this.kASSourceStyleDynamicEnumValue = 17;
    this.kASNumberOfSourceStyles = 18;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/OpenScripting.framework/Headers/ASDebugging.h
function ASDebugging_h(lib) {

    if (this._ASDEBUGGING_H)
        return;
    this._ASDEBUGGING_H = true;

    this.kOSAModeDontDefine = 1;
    this.kASSelectSetPropertyObsolete = 4353;
    this.kASSelectGetPropertyObsolete = 4354;
    this.kASSelectSetHandlerObsolete = 4355;
    this.kASSelectGetHandlerObsolete = 4356;
    this.kASSelectGetAppTerminologyObsolete = 4357;
    this.kASSelectSetProperty = 4358;
    this.kASSelectGetProperty = 4359;
    this.kASSelectSetHandler = 4360;
    this.kASSelectGetHandler = 4361;
    this.kASSelectGetAppTerminology = 4362;
    this.kASSelectGetSysTerminology = 4363;
    this.kASSelectGetPropertyNames = 4364;
    this.kASSelectGetHandlerNames = 4365;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/OpenScripting.framework/Headers/ASRegistry.h
function ASRegistry_h(lib) {

    if (this._ASREGISTRY_H)
        return;
    this._ASREGISTRY_H = true;

    this.keyAETarget = 1952543335;
    this.keySubjectAttr = 1937072746;
    this.keyASReturning = 1265792110;
    this.kASAppleScriptSuite = 1634952050;
    this.kASScriptEditorSuite = 1416591699;
    this.kASTypeNamesSuite = 1953525357;
    this.typeAETE = 1634038885;
    this.typeAEUT = 1634039156;
    this.kGetAETE = 1734636645;
    this.kGetAEUT = 1734636916;
    this.kUpdateAEUT = 1969517940;
    this.kUpdateAETE = 1969517669;
    this.kCleanUpAEUT = 1667528052;
    this.kASComment = 1668116084;
    this.kASLaunchEvent = 1852796784;
    this.keyScszResource = 1935897466;
    this.typeScszResource = 1935897466;
    this.kASSubroutineEvent = 1886610034;
    this.keyASSubroutineName = 1936613741;
    this.kASPrepositionalSubroutine = 1886610034;
    this.keyASPositionalArgs = 1885434471;
    this.keyAppHandledCoercion = 1768186227;
    this.kASStartLogEvent = 1819240241;
    this.kASStopLogEvent = 1819240240;
    this.kASCommentEvent = 1668116084;
    this.kASAdd = 723525664;
    this.kASSubtract = 757080096;
    this.kASMultiply = 706748448;
    this.kASDivide = 790634528;
    this.kASQuotient = 1684633120;
    this.kASRemainder = 1836016672;
    this.kASPower = 1579163680;
    this.kASEqual = 1025515552;
    this.kASNotEqual = -1390403552;
    this.kASGreaterThan = 1042292768;
    this.kASGreaterThanOrEqual = 1044193312;
    this.kASLessThan = 1008738336;
    this.kASLessThanOrEqual = 1010638880;
    this.kASComesBefore = 1667393138;
    this.kASComesAfter = 1667327602;
    this.kASConcatenate = 1667457396;
    this.kASStartsWith = 1650947956;
    this.kASEndsWith = 1701733491;
    this.kASContains = 1668247156;
    this.kASAnd = 1095648288;
    this.kASOr = 1330782240;
    this.kASNot = 1313821728;
    this.kASNegate = 1852139296;
    this.keyASArg = 1634887456;
    this.kASErrorEventCode = 1701999136;
    this.kOSAErrorArgs = 1701999201;
    this.keyAEErrorObject = 1701998434;
    this.pLength = 1818586727;
    this.pReverse = 1920365413;
    this.pRest = 1919251316;
    this.pInherits = 1665147742;
    this.pProperties = 1883327564;
    this.keyASUserRecordFields = 1970500198;
    this.typeUserRecordFields = 1818850164;
    this.keyASPrepositionAt = 1635000352;
    this.keyASPrepositionIn = 1768824864;
    this.keyASPrepositionFrom = 1718775661;
    this.keyASPrepositionFor = 1718579744;
    this.keyASPrepositionTo = 1953439776;
    this.keyASPrepositionThru = 1953002101;
    this.keyASPrepositionThrough = 1952999272;
    this.keyASPrepositionBy = 1652105248;
    this.keyASPrepositionOn = 1869488160;
    this.keyASPrepositionInto = 1768846447;
    this.keyASPrepositionOnto = 1869509743;
    this.keyASPrepositionBetween = 1651799918;
    this.keyASPrepositionAgainst = 1634169716;
    this.keyASPrepositionOutOf = 1869968495;
    this.keyASPrepositionInsteadOf = 1769174127;
    this.keyASPrepositionAsideFrom = 1634952294;
    this.keyASPrepositionAround = 1634889316;
    this.keyASPrepositionBeside = 1651730788;
    this.keyASPrepositionBeneath = 1651405928;
    this.keyASPrepositionUnder = 1970168946;
    this.keyASPrepositionOver = 1870030194;
    this.keyASPrepositionAbove = 1633842789;
    this.keyASPrepositionBelow = 1650814071;
    this.keyASPrepositionApartFrom = 1634759284;
    this.keyASPrepositionGiven = 1734964846;
    this.keyASPrepositionWith = 2003399784;
    this.keyASPrepositionWithout = 2003793268;
    this.keyASPrepositionAbout = 1633841013;
    this.keyASPrepositionSince = 1936614245;
    this.keyASPrepositionUntil = 1953066092;
    this.kDialectBundleResType = 1147298924;
    this.cConstant = 1701737837;
    this.cClassIdentifier = 1885564019;
    this.cObjectBeingExamined = 1702391150;
    this.cList = 1818850164;
    this.cSmallReal = 1936289383;
    this.cReal = 1685026146;
    this.cRecord = 1919247215;
    this.cReference = 1868720672;
    this.cUndefined = 1970168934;
    this.cMissingValue = 1836281447;
    this.cSymbol = 1937337698;
    this.cLinkedList = 1819046772;
    this.cVector = 1986356084;
    this.cEventIdentifier = 1702260340;
    this.cKeyIdentifier = 1803118948;
    this.cUserIdentifier = 1969841184;
    this.cPreposition = 1886545264;
    this.cKeyForm = 1801876077;
    this.cScript = 1935896692;
    this.cHandler = 1751215716;
    this.cProcedure = 1886547811;
    this.cHandleBreakpoint = 1651663211;
    this.cClosure = 1668051826;
    this.cRawData = 1919181172;
    this.cStringClass = 1413830740;
    this.cNumber = 1852662386;
    this.cListElement = 1667591277;
    this.cListOrRecord = 1819418656;
    this.cListOrString = 1819484192;
    this.cListRecordOrString = 1819439904;
    this.cNumberOrString = 1853038624;
    this.cNumberOrDateTime = 1852055584;
    this.cNumberDateTimeOrString = 1852076832;
    this.cAliasOrString = 1936072736;
    this.cSeconds = 1935896164;
    this.typeSound = 1936614432;
    this.enumBooleanValues = 1651470198;
    this.kAETrue = 1953658213;
    this.kAEFalse = 1717660787;
    this.enumMiscValues = 1835627363;
    this.kASCurrentApplication = 1668641377;
    this.formUserPropertyID = 1970500208;
    this.cString = 1413830740;
    this.pASIt = 1769218080;
    this.pASMe = 1835343904;
    this.pASResult = 1920167028;
    this.pASSpace = 1936744803;
    this.pASReturn = 1919251488;
    this.pASTab = 1952539168;
    this.pASPi = 1885937696;
    this.pASParent = 1885434469;
    this.kASInitializeEventCode = 1768843636;
    this.pASPrintLength = 1886547054;
    this.pASPrintDepth = 1886545008;
    this.pASTopLevelScript = 1634952050;
    this.kAECase = 1667330917;
    this.kAEDiacritic = 1684627811;
    this.kAEWhiteSpace = 2003331444;
    this.kAEHyphens = 1752789096;
    this.kAEExpansion = 1702391905;
    this.kAEPunctuation = 1886744163;
    this.kAEZenkakuHankaku = 2053859435;
    this.kAESmallKana = 1936420449;
    this.kAEKataHiragana = 1751739233;
    this.kASConsiderReplies = 1919775845;
    this.kASNumericStrings = 1853189477;
    this.enumConsiderations = 1668247155;
    this.kAECaseConsiderMask = 1;
    this.kAEDiacriticConsiderMask = 2;
    this.kAEWhiteSpaceConsiderMask = 4;
    this.kAEHyphensConsiderMask = 8;
    this.kAEExpansionConsiderMask = 16;
    this.kAEPunctuationConsiderMask = 32;
    this.kASConsiderRepliesConsiderMask = 64;
    this.kASNumericStringsConsiderMask = 128;
    this.kAECaseIgnoreMask = 65536;
    this.kAEDiacriticIgnoreMask = 131072;
    this.kAEWhiteSpaceIgnoreMask = 262144;
    this.kAEHyphensIgnoreMask = 524288;
    this.kAEExpansionIgnoreMask = 1048576;
    this.kAEPunctuationIgnoreMask = 2097152;
    this.kASConsiderRepliesIgnoreMask = 4194304;
    this.kASNumericStringsIgnoreMask = 8388608;
    this.enumConsidsAndIgnores = 1668508007;
    this.cCoercion = 1668244835;
    this.cCoerceUpperCase = 1954051440;
    this.cCoerceLowerCase = 1954049135;
    this.cCoerceRemoveDiacriticals = 1954047075;
    this.cCoerceRemovePunctuation = 1954050147;
    this.cCoerceRemoveHyphens = 1954048121;
    this.cCoerceOneByteToTwoByte = 1954047352;
    this.cCoerceRemoveWhiteSpace = 1954051955;
    this.cCoerceSmallKana = 1954050923;
    this.cCoerceZenkakuhankaku = 1954052709;
    this.cCoerceKataHiragana = 1954048872;
    this.cZone = 2054123109;
    this.cMachine = 1835098984;
    this.cAddress = 1633969266;
    this.cRunningAddress = 1918985316;
    this.cStorage = 1937010546;
    this.pASWeekday = 2003526777;
    this.pASMonth = 1835955304;
    this.pASDay = 1684109600;
    this.pASYear = 2036687218;
    this.pASTime = 1953066341;
    this.pASDateString = 1685288050;
    this.pASTimeString = 1953723506;
    this.cMonth = 1835955304;
    this.cJanuary = 1784770080;
    this.cFebruary = 1717920288;
    this.cMarch = 1835102752;
    this.cApril = 1634759200;
    this.cMay = 1835104544;
    this.cJune = 1786080800;
    this.cJuly = 1786080288;
    this.cAugust = 1635084064;
    this.cSeptember = 1936027680;
    this.cOctober = 1868788768;
    this.cNovember = 1852798496;
    this.cDecember = 1684366112;
    this.cWeekday = 2003526777;
    this.cSunday = 1937075744;
    this.cMonday = 1836019232;
    this.cTuesday = 1953850656;
    this.cWednesday = 2003133472;
    this.cThursday = 1953002784;
    this.cFriday = 1718774048;
    this.cSaturday = 1935766560;
    this.pASQuote = 1903521652;
    this.pASSeconds = 1936024435;
    this.pASMinutes = 1835626016;
    this.pASHours = 1752135026;
    this.pASDays = 1684109683;
    this.pASWeeks = 2003133803;
    this.cWritingCodeInfo = 1667855468;
    this.pScriptCode = 1886610276;
    this.pLangCode = 1886151524;
    this.kASMagicTellEvent = 1952803948;
    this.kASMagicEndTellEvent = 1952804452;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/OpenScripting.framework/Headers/FinderRegistry.h
function FinderRegistry_h(lib) {

    if (this._FINDERREGISTRY_H)
        return;
    this._FINDERREGISTRY_H = true;

    this.kAEFinderSuite = 1718510706;
    this.kAECleanUp = 1717791861;
    this.kAEEject = 1701471092;
    this.kAEEmpty = 1701671028;
    this.kAEErase = 1717924449;
    this.kAEGestalt = 1735619692;
    this.kAEPutAway = 1886680953;
    this.kAERebuildDesktopDB = 1919181922;
    this.kAESync = 1718972516;
    this.kAEInterceptOpen = 1718579310;
    this.kAEDatabaseSuite = 1145132097;
    this.kAESort = 1397707348;
    this.cInternalFinderObject = 1868720672;
    this.cAliasFile = 1634494817;
    this.cApplicationFile = 1634758758;
    this.cControlPanelFile = 1667458166;
    this.cDeskAccessoryFile = 1684104809;
    this.cDocumentFile = 1685021542;
    this.cFontFile = 1718514790;
    this.cSoundFile = 1936614502;
    this.cClippingFile = 1668051046;
    this.cContainer = 1668574834;
    this.cDesktop = 1667527531;
    this.cSharableContainer = 1935897714;
    this.cDisk = 1667524979;
    this.cFolder = 1667657580;
    this.cSuitcase = 1937007475;
    this.cAccessorySuitcase = 1685288308;
    this.cFontSuitcase = 1718842740;
    this.cTrash = 1668575859;
    this.cDesktopPrinter = 1685285744;
    this.cPackage = 1885430635;
    this.cContentSpace = 1685548644;
    this.cContainerWindow = 1668771428;
    this.cInfoWindow = 1769434724;
    this.cSharingWindow = 1937206884;
    this.cStatusWindow = 1903652452;
    this.cClippingWindow = 1819766372;
    this.cPreferencesWindow = 1886875236;
    this.cDTPWindow = 1685352567;
    this.cProcess = 1886544755;
    this.cAccessoryProcess = 1885561953;
    this.cApplicationProcess = 1885561200;
    this.cGroup = 1936159344;
    this.cUser = 1668641637;
    this.cSharingPrivileges = 1886546294;
    this.cPreferences = 1668313702;
    this.cLabel = 1668047468;
    this.cSound = 1936614432;
    this.cAliasList = 1634497396;
    this.cSpecialFolders = 1936746092;
    this.cOnlineDisk = 1668244595;
    this.cOnlineLocalDisk = 1668047987;
    this.cOnlineRemoteDisk = 1668441203;
    this.cEntireContents = 1701016691;
    this.cIconFamily = 1768317293;
    this.pComment = 1668246900;
    this.pContainer = 1668574834;
    this.pContentSpace = 1685548644;
    this.pCreationDateOld = 1668445284;
    this.pCreationDate = 1634952036;
    this.pDescription = 1685283698;
    this.pDisk = 1667524979;
    this.pFolderOld = 1667657580;
    this.pFolder = 1634952306;
    this.pIconBitmap = 1768516967;
    this.pInfoWindow = 1769434724;
    this.pKind = 1802071652;
    this.pLabelIndex = 1818321513;
    this.pModificationDateOld = 1836016740;
    this.pModificationDate = 1634954607;
    this.pPhysicalSize = 1885895027;
    this.pPosition = 1886352238;
    this.pIsSelected = 1769173868;
    this.pSize = 1886679930;
    this.pWindow = 1668770158;
    this.pPreferencesWindow = 1886875236;
    this.pFileCreator = 1717793396;
    this.pFileType = 1634956409;
    this.pFileTypeOld = 1718187120;
    this.pIsLocked = 1634954347;
    this.pIsLockedOld = 1769172075;
    this.pProductVersion = 1986359858;
    this.pOriginalItem = 1869769063;
    this.pMinAppPartition = 1836085876;
    this.pAppPartition = 1634758772;
    this.pSuggestedAppPartition = 1936749172;
    this.pIsScriptable = 1769169250;
    this.pInternetLocation = 1768714083;
    this.pSound = 1936614432;
    this.pShowFolderSize = 1936094074;
    this.pShowComment = 1935896429;
    this.pShowDate = 1935958388;
    this.pShowCreationDate = 1935893601;
    this.pShowKind = 1936420452;
    this.pShowLabel = 1936482924;
    this.pShowSize = 1936943482;
    this.pShowVersion = 1937142387;
    this.pSortDirection = 1936683620;
    this.pShowDiskInfo = 1935960430;
    this.pListViewIconSize = 1819699571;
    this.pGridIcons = 1718055524;
    this.pStaggerIcons = 1718842471;
    this.pViewFont = 1986424436;
    this.pViewFontSize = 1986425722;
    this.pCompletelyExpanded = 1885698147;
    this.pContainerWindow = 1668771428;
    this.pEntireContents = 1701016691;
    this.pExpandable = 1885698145;
    this.pExpanded = 1885698160;
    this.pPreviousView = 1937139063;
    this.pView = 1886807415;
    this.pIconSize = 1819699571;
    this.pKeepArranged = 1634890343;
    this.pKeepArrangedBy = 1634886265;
    this.pStartupDisk = 1935962987;
    this.pTrash = 1953657704;
    this.pOwner = 1936684910;
    this.pOwnerPrivileges = 1870098034;
    this.pGroup = 1936159344;
    this.pGroupPrivileges = 1735422066;
    this.pGuestPrivileges = 1735619696;
    this.pArePrivilegesInherited = 1768977014;
    this.pExported = 1936029808;
    this.pMounted = 1936551797;
    this.pSharingProtection = 1936749167;
    this.pSharing = 1936220530;
    this.pSharingWindow = 1937206884;
    this.pCapacity = 1667330145;
    this.pEjectable = 1769170282;
    this.pFreeSpace = 1718776688;
    this.pLocal = 1769173622;
    this.pIsStartup = 1769174116;
    this.pWarnOnEmpty = 2002874990;
    this.pIsZoomedFull = 2054516070;
    this.pIsPopup = 1685223282;
    this.pIsPulledOpen = 1886743660;
    this.pIsCollapsed = 2004052068;
    this.pObject = 1668244074;
    this.pSharableContainer = 1935897714;
    this.pInfoPanel = 1885433452;
    this.pFileShareOn = 1718839410;
    this.pFileShareStartingUp = 1718842736;
    this.pProgramLinkingOn = 1767990048;
    this.pShowModificationDate = 1935958388;
    this.pUseRelativeDate = 1970431092;
    this.pDelayBeforeSpringing = 1684368481;
    this.pSpringOpenFolders = 1936749159;
    this.pUseShortMenus = 1970498917;
    this.pUseWideGrid = 1970501479;
    this.pLabel1 = 1818389553;
    this.pLabel2 = 1818389554;
    this.pLabel3 = 1818389555;
    this.pLabel4 = 1818389556;
    this.pLabel5 = 1818389557;
    this.pLabel6 = 1818389558;
    this.pLabel7 = 1818389559;
    this.pDefaultIconViewIconSize = 1768518522;
    this.pDefaultButtonViewIconSize = 1651078010;
    this.pDefaultListViewIconSize = 1818850170;
    this.pIconViewArrangement = 1767993970;
    this.pButtonViewArrangement = 1650553458;
    this.pNoArrangement = 1851880050;
    this.pSnapToGridArrangement = 1735550049;
    this.pByNameArrangement = 1851878753;
    this.pByModificationDateArrangement = 1835299937;
    this.pByCreationDateArrangement = 1667527777;
    this.pBySizeArrangement = 1936292449;
    this.pByKindArrangement = 1802071649;
    this.pByLabelArrangement = 1818321505;
    this.pFile = 1718185061;
    this.pPartitionSpaceUsed = 1886745444;
    this.pLocalAndRemoteEvents = 1919252084;
    this.pHasScriptingTerminology = 1752392562;
    this.pDeskAccessoryFile = 1684104809;
    this.pApplicationFile = 1634758758;
    this.pCanConnect = 1667460974;
    this.pCanChangePassword = 1667461239;
    this.pCanDoProgramLinking = 1667850595;
    this.pIsOwner = 1769172855;
    this.pARADialIn = 1634885988;
    this.pShouldCallBack = 1667329122;
    this.pCallBackNumber = 1667395181;
    this.pAboutMacintosh = 1633837688;
    this.pAppleMenuItemsFolder = 1634561653;
    this.pControlPanelsFolder = 1668575852;
    this.pDesktop = 1684370283;
    this.pExtensionsFolder = 1702392942;
    this.pFinderPreferences = 1885762160;
    this.pFontsFolder = 1718578804;
    this.pFontsFolderPreAllegro = 1717988980;
    this.pLargestFreeBlock = 1835430501;
    this.pPreferencesFolder = 1886545254;
    this.pShortCuts = 1935897972;
    this.pShutdownFolder = 1936221286;
    this.pStartupItemsFolder = 1937011316;
    this.pSystemFolder = 1835098995;
    this.pTemporaryFolder = 1952804208;
    this.pViewPreferences = 1886812016;
    this.pStartingUp = 1635213675;
    this.pSeeFiles = 1886549618;
    this.pSeeFolders = 1886549619;
    this.pMakeChanges = 1886549623;
    this.pSmallIcon = 1936550243;
    this.pSmallButton = 1936548469;
    this.pLargeButton = 1818714741;
    this.pGrid = 1735551332;
    this.enumViewBy = 1987535481;
    this.enumGestalt = 1735615854;
    this.enumConflicts = 1667656803;
    this.enumExistingItems = 1702392681;
    this.enumOlderItems = 1869374578;
    this.enumDate = 1701733473;
    this.enumAnyDate = 1634629988;
    this.enumToday = 1952735609;
    this.enumYesterday = 2036621689;
    this.enumThisWeek = 1953981803;
    this.enumLastWeek = 1819764075;
    this.enumThisMonth = 1953329006;
    this.enumLastMonth = 1819111278;
    this.enumThisYear = 1954112882;
    this.enumLastYear = 1819895154;
    this.enumBeforeDate = 1650877556;
    this.enumAfterDate = 1634100340;
    this.enumBetweenDate = 1651795060;
    this.enumOnDate = 1869505652;
    this.enumAllDocuments = 1634495588;
    this.enumFolders = 1718578276;
    this.enumAliases = 1634494817;
    this.enumStationery = 1937006964;
    this.enumWhere = 2003330418;
    this.enumAllLocalDisks = 1634493547;
    this.enumAllRemoteDisks = 1634886763;
    this.enumAllDisks = 1634495588;
    this.enumAllOpenFolders = 1634690671;
    this.enumIconSize = 1769171322;
    this.enumSmallIconSize = 1936550243;
    this.enumMiniIconSize = 1835624803;
    this.enumLargeIconSize = 1818716515;
    this.enumSortDirection = 1936680050;
    this.enumSortDirectionNormal = 1936618093;
    this.enumSortDirectionReverse = 1936881267;
    this.enumArrangement = 1700885106;
    this.enumInfoWindowPanel = 1768975980;
    this.enumGeneralPanel = 1735421548;
    this.enumSharingPanel = 1936748140;
    this.enumStatusNConfigPanel = 1935896172;
    this.enumFontsPanel = 1718644332;
    this.enumMemoryPanel = 1836084844;
    this.enumPrefsWindowPanel = 1886415973;
    this.enumPrefsGeneralPanel = 1885826672;
    this.enumPrefsLabelPanel = 1886151280;
    this.enumPrefsIconViewPanel = 1885959792;
    this.enumPrefsButtonViewPanel = 1885501040;
    this.enumPrefsListViewPanel = 1886156400;
    this.typeIconFamily = 1768317293;
    this.typeIconAndMask = 1229147683;
    this.type8BitMask = 1815637355;
    this.type32BitIcon = 1768698674;
    this.type8BitIcon = 1768123448;
    this.type4BitIcon = 1768123444;
    this.typeSmallIconAndMask = 1768125219;
    this.typeSmall8BitMask = 1933077867;
    this.typeSmall32BitIcon = 1769157426;
    this.typeSmall8BitIcon = 1768125240;
    this.typeSmall4BitIcon = 1768125236;
    this.typeRelativeTime = 1920231789;
    this.typeConceptualTime = 1953066339;
    this.keyIconAndMask = 1229147683;
    this.key32BitIcon = 1768698674;
    this.key8BitIcon = 1768123448;
    this.key4BitIcon = 1768123444;
    this.key8BitMask = 1815637355;
    this.keySmallIconAndMask = 1768125219;
    this.keySmall8BitIcon = 1768125240;
    this.keySmall4BitIcon = 1768125236;
    this.keySmall32BitIcon = 1769157426;
    this.keySmall8BitMask = 1933077867;
    this.keyMini1BitMask = 1768123683;
    this.keyMini4BitIcon = 1768123700;
    this.keyMini8BitIcon = 1768123704;
    this.keyAEUsing = 1970497902;
    this.keyAEReplacing = 1634497136;
    this.keyAENoAutoRouting = 1919907188;
    this.keyLocalPositionList = 1836478572;
    this.keyGlobalPositionList = 1836478567;
    this.keyRedirectedDocumentList = 1718641772;
    this.keyASPrepositionHas = 1751216928;
    this.keyAll = 1803116908;
    this.keyOldFinderItems = 1718838636;
    this.formAlias = 1634494835;
    this.formCreator = 1717793396;
    this.errFinderIsBusy = -15260;
    this.errFinderWindowNotOpen = -15261;
    this.errFinderCannotPutAway = -15262;
    this.errFinderWindowMustBeIconView = -15263;
    this.errFinderWindowMustBeListView = -15264;
    this.errFinderCantMoveToDestination = -15265;
    this.errFinderCantMoveSource = -15266;
    this.errFinderCantOverwrite = -15267;
    this.errFinderIncestuousMove = -15268;
    this.errFinderCantMoveToAncestor = -15269;
    this.errFinderCantUseTrashedItems = -15270;
    this.errFinderItemAlreadyInDest = -15271;
    this.errFinderUnknownUser = -15272;
    this.errFinderSharePointsCantInherit = -15273;
    this.errFinderWindowWrongType = -15274;
    this.errFinderPropertyNowWindowBased = -15275;
    this.errFinderAppFolderProtected = -15276;
    this.errFinderSysFolderProtected = -15277;
    this.errFinderBoundsWrong = -15278;
    this.errAEValueOutOfRange = -15279;
    this.errFinderPropertyDoesNotApply = -15280;
    this.errFinderFileSharingMustBeOn = -15281;
    this.errFinderMustBeActive = -15282;
    this.errFinderVolumeNotFound = -15283;
    this.errFinderLockedItemsInTrash = -15284;
    this.errFinderOnlyLockedItemsInTrash = -15285;
    this.errFinderProgramLinkingMustBeOn = -15286;
    this.errFinderWindowMustBeButtonView = -15287;
    this.errFinderBadPackageContents = -15288;
    this.errFinderUnsupportedInsidePackages = -15289;
    this.errFinderCorruptOpenFolderList = -15290;
    this.errFinderNoInvisibleFiles = -15291;
    this.errFinderCantDeleteImmediately = -15292;
    this.errFinderLastReserved = -15379;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/OpenScripting.framework/Headers/DigitalHubRegistry.h
function DigitalHubRegistry_h(lib) {

    if (this._DIGITALHUBREGISTRY_H)
        return;
    this._DIGITALHUBREGISTRY_H = true;

    this.kDigiHubEventClass = 1684567394;
    this.kDigiHubMusicCD = 1635083108;
    this.kDigiHubPictureCD = 1885954916;
    this.kDigiHubVideoDVD = 1986295396;
    this.kDigiHubBlankCD = 1650680864;
    this.kDigiHubBlankDVD = 1650751076;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/OpenScripting.framework/Headers/OSAComp.h
function OSAComp_h(lib) {

    if (this._OSACOMP_H)
        return;
    this._OSACOMP_H = true;

}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/AE.jsm");
Components.utils.import("resource://osxtypes/HIToolbox.jsm");

const EXPORTED_SYMBOLS = ["OpenScripting", "OSA_h", "OSAGeneric_h", "AppleScript_h", "ASDebugging_h", "ASRegistry_h", "FinderRegistry_h", "DigitalHubRegistry_h", "OSAComp_h"];

function OpenScripting() {
    let libpath = "/System/Library/Frameworks/OpenScripting.framework/OpenScripting";
    let lib = ctypes.open(libpath);

    OSA_h.call(this, lib);
    OSAGeneric_h.call(this, lib);
    AppleScript_h.call(this, lib);
    ASDebugging_h.call(this, lib);
    ASRegistry_h.call(this, lib);
    FinderRegistry_h.call(this, lib);
    DigitalHubRegistry_h.call(this, lib);
    OSAComp_h.call(this, lib);
}