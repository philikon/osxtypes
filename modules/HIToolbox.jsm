// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Menus.h
function Menus_h(lib) {
    Collections_h.call(this, lib);
    CFUUID_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    CFAttributedString_h.call(this, lib);
    TextCommon_h.call(this, lib);
    AEDataModel_h.call(this, lib);
    CFBase_h.call(this, lib);
    CTFont_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._MENUS_H)
        return;
    this._MENUS_H = true;

    this.textMenuProc = 0;
    this.kHIMenuAppendItem = 65535;
    this.noMark = 0;
    this.kMenuStdMenuProc = 63;
    this.kMenuStdMenuBarProc = 63;
    this.kMenuNoModifiers = 0;
    this.kMenuShiftModifier = 1;
    this.kMenuOptionModifier = 2;
    this.kMenuControlModifier = 4;
    this.kMenuNoCommandModifier = 8;
    this.kMenuNoIcon = 0;
    this.kMenuIconType = 1;
    this.kMenuShrinkIconType = 2;
    this.kMenuSmallIconType = 3;
    this.kMenuColorIconType = 4;
    this.kMenuIconSuiteType = 5;
    this.kMenuIconRefType = 6;
    this.kMenuCGImageRefType = 7;
    this.kMenuSystemIconSelectorType = 8;
    this.kMenuIconResourceType = 9;
    this.kMenuNullGlyph = 0;
    this.kMenuTabRightGlyph = 2;
    this.kMenuTabLeftGlyph = 3;
    this.kMenuEnterGlyph = 4;
    this.kMenuShiftGlyph = 5;
    this.kMenuControlGlyph = 6;
    this.kMenuOptionGlyph = 7;
    this.kMenuSpaceGlyph = 9;
    this.kMenuDeleteRightGlyph = 10;
    this.kMenuReturnGlyph = 11;
    this.kMenuReturnR2LGlyph = 12;
    this.kMenuNonmarkingReturnGlyph = 13;
    this.kMenuPencilGlyph = 15;
    this.kMenuDownwardArrowDashedGlyph = 16;
    this.kMenuCommandGlyph = 17;
    this.kMenuCheckmarkGlyph = 18;
    this.kMenuDiamondGlyph = 19;
    this.kMenuAppleLogoFilledGlyph = 20;
    this.kMenuParagraphKoreanGlyph = 21;
    this.kMenuDeleteLeftGlyph = 23;
    this.kMenuLeftArrowDashedGlyph = 24;
    this.kMenuUpArrowDashedGlyph = 25;
    this.kMenuRightArrowDashedGlyph = 26;
    this.kMenuEscapeGlyph = 27;
    this.kMenuClearGlyph = 28;
    this.kMenuLeftDoubleQuotesJapaneseGlyph = 29;
    this.kMenuRightDoubleQuotesJapaneseGlyph = 30;
    this.kMenuTrademarkJapaneseGlyph = 31;
    this.kMenuBlankGlyph = 97;
    this.kMenuPageUpGlyph = 98;
    this.kMenuCapsLockGlyph = 99;
    this.kMenuLeftArrowGlyph = 100;
    this.kMenuRightArrowGlyph = 101;
    this.kMenuNorthwestArrowGlyph = 102;
    this.kMenuHelpGlyph = 103;
    this.kMenuUpArrowGlyph = 104;
    this.kMenuSoutheastArrowGlyph = 105;
    this.kMenuDownArrowGlyph = 106;
    this.kMenuPageDownGlyph = 107;
    this.kMenuAppleLogoOutlineGlyph = 108;
    this.kMenuContextualMenuGlyph = 109;
    this.kMenuPowerGlyph = 110;
    this.kMenuF1Glyph = 111;
    this.kMenuF2Glyph = 112;
    this.kMenuF3Glyph = 113;
    this.kMenuF4Glyph = 114;
    this.kMenuF5Glyph = 115;
    this.kMenuF6Glyph = 116;
    this.kMenuF7Glyph = 117;
    this.kMenuF8Glyph = 118;
    this.kMenuF9Glyph = 119;
    this.kMenuF10Glyph = 120;
    this.kMenuF11Glyph = 121;
    this.kMenuF12Glyph = 122;
    this.kMenuF13Glyph = 135;
    this.kMenuF14Glyph = 136;
    this.kMenuF15Glyph = 137;
    this.kMenuControlISOGlyph = 138;
    this.kMenuEjectGlyph = 140;
    this.kMenuEisuGlyph = 141;
    this.kMenuKanaGlyph = 142;
    this.kMenuF16Glyph = 143;
    this.kMenuF17Glyph = 144;
    this.kMenuF18Glyph = 145;
    this.kMenuF19Glyph = 146;
    this.MenuAttributes = this.UInt32;
    this.kMenuAttrExcludesMarkColumn = 1;
    this.kMenuAttrAutoDisable = 4;
    this.kMenuAttrUsePencilGlyph = 8;
    this.kMenuAttrHidden = 16;
    this.kMenuAttrCondenseSeparators = 32;
    this.kMenuAttrDoNotCacheImage = 64;
    this.kMenuAttrDoNotUseUserCommandKeys = 128;
    this.MenuItemAttributes = this.UInt32;
    this.kMenuItemAttrDisabled = 1;
    this.kMenuItemAttrIconDisabled = 2;
    this.kMenuItemAttrSubmenuParentChoosable = 4;
    this.kMenuItemAttrDynamic = 8;
    this.kMenuItemAttrNotPreviousAlternate = 16;
    this.kMenuItemAttrHidden = 32;
    this.kMenuItemAttrSeparator = 64;
    this.kMenuItemAttrSectionHeader = 128;
    this.kMenuItemAttrIgnoreMeta = 256;
    this.kMenuItemAttrAutoRepeat = 512;
    this.kMenuItemAttrUseVirtualKey = 1024;
    this.kMenuItemAttrCustomDraw = 2048;
    this.kMenuItemAttrIncludeInCmdKeyMatching = 4096;
    this.kMenuItemAttrAutoDisable = 8192;
    this.kMenuItemAttrUpdateSingleItem = 16384;
    this.MenuTrackingMode = this.UInt32;
    this.kMenuTrackingModeMouse = 1;
    this.kMenuTrackingModeKeyboard = 2;
    this.MenuEventOptions = this.UInt32;
    this.kMenuEventIncludeDisabledItems = 1;
    this.kMenuEventQueryOnly = 2;
    this.kMenuEventDontCheckSubmenus = 4;
    this.MenuID = this.SInt16;
    this.MenuItemIndex = this.UInt16;
    this.MenuCommand = this.OSType;
    this.OpaqueMenuRef = new ctypes.StructType("OpaqueMenuRef");
    this.MenuRef = this.OpaqueMenuRef.ptr;
    this.MenuHandle = this.MenuRef;
    this.MenuBarHandle = this.Handle;
    this.MenuBarHeader = new ctypes.StructType("MenuBarHeader", [{lastMenu: this.UInt16}, {lastRight: this.SInt16}, {mbResID: this.SInt16}]);
    this.HMenuBarHeader = new ctypes.StructType("HMenuBarHeader", [{lastHMenu: this.UInt16}, {menuTitleBits: this.PixMapHandle}]);
    this.MenuBarMenu = new ctypes.StructType("MenuBarMenu", [{menu: this.MenuRef}, {menuLeft: this.SInt16}]);
    this.HMenuBarMenu = new ctypes.StructType("HMenuBarMenu", [{menu: this.MenuRef}, {reserved: this.SInt16}]);
    this.MenuTrackingData = new ctypes.StructType("MenuTrackingData", [{menu: this.MenuRef}, {itemSelected: this.MenuItemIndex}, {itemUnderMouse: this.MenuItemIndex}, {itemRect: this.Rect}, {virtualMenuTop: this.SInt32}, {virtualMenuBottom: this.SInt32}]);
    this.MenuTrackingDataPtr = this.MenuTrackingData.ptr;
    this.kMenuItemDataText = 1;
    this.kMenuItemDataMark = 2;
    this.kMenuItemDataCmdKey = 4;
    this.kMenuItemDataCmdKeyGlyph = 8;
    this.kMenuItemDataCmdKeyModifiers = 16;
    this.kMenuItemDataStyle = 32;
    this.kMenuItemDataEnabled = 64;
    this.kMenuItemDataIconEnabled = 128;
    this.kMenuItemDataIconID = 256;
    this.kMenuItemDataIconHandle = 512;
    this.kMenuItemDataCommandID = 1024;
    this.kMenuItemDataTextEncoding = 2048;
    this.kMenuItemDataSubmenuID = 4096;
    this.kMenuItemDataSubmenuHandle = 8192;
    this.kMenuItemDataFontID = 16384;
    this.kMenuItemDataRefcon = 32768;
    this.kMenuItemDataAttributes = 65536;
    this.kMenuItemDataCFString = 131072;
    this.kMenuItemDataProperties = 262144;
    this.kMenuItemDataIndent = 524288;
    this.kMenuItemDataCmdVirtualKey = 1048576;
    this.kMenuItemDataAttributedText = 2097152;
    this.kMenuItemDataFont = 4194304;
    this.kMenuItemDataAllDataVersionOne = 1048575;
    this.kMenuItemDataAllDataVersionTwo = 2097151;
    this.kMenuItemDataAllDataVersionThree = 8388607;
    this.MenuItemDataFlags = this.UInt64;
    this.MenuItemDataRec = new ctypes.StructType("MenuItemDataRec", [{whichData: this.MenuItemDataFlags}, {text: this.StringPtr}, {mark: this.UniChar}, {cmdKey: this.UniChar}, {cmdKeyGlyph: this.UInt32}, {cmdKeyModifiers: this.UInt32}, {style: this.Style}, {enabled: this.Boolean}, {iconEnabled: this.Boolean}, {filler1: this.UInt8}, {iconID: this.SInt32}, {iconType: this.UInt32}, {iconHandle: this.Handle}, {cmdID: this.MenuCommand}, {encoding: this.TextEncoding}, {submenuID: this.MenuID}, {submenuHandle: this.MenuRef}, {fontID: this.SInt32}, {refcon: this.URefCon}, {attr: this.OptionBits}, {cfText: this.CFStringRef}, {properties: this.Collection}, {indent: this.UInt32}, {cmdVirtualKey: this.UInt16}, {attributedText: this.CFAttributedStringRef}, {font: this.CTFontRef}]);
    this.MenuItemDataPtr = this.MenuItemDataRec.ptr;
    this.MenuItemID = this.UInt32;
    this.kMenuDefProcPtr = 0;
    this.kMenuDefClassID = 1;
    this.MenuDefType = this.UInt32;
    this.MenuDefProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.short, this.MenuRef, this.Rect.ptr, this.Point, ctypes.short.ptr]).ptr;
    this.MenuDefUPP = this.MenuDefProcPtr;
    // Dropping inline function 'NewMenuDefUPP'.
    // Dropping inline function 'DisposeMenuDefUPP'.
    // Dropping inline function 'InvokeMenuDefUPP'.
    this.MenuDefSpec = new ctypes.StructType("MenuDefSpec", []);
    this.MenuDefSpecPtr = this.MenuDefSpec.ptr;
    this.kHIMenuDismissedBySelection = 1;
    this.kHIMenuDismissedByUserCancel = 2;
    this.kHIMenuDismissedByMouseDown = 3;
    this.kHIMenuDismissedByMouseUp = 4;
    this.kHIMenuDismissedByKeyEvent = 5;
    this.kHIMenuDismissedByAppSwitch = 6;
    this.kHIMenuDismissedByTimeout = 7;
    this.kHIMenuDismissedByCancelMenuTracking = 8;
    this.kHIMenuDismissedByActivationChange = 9;
    this.kHIMenuDismissedByFocusChange = 10;
    this.kMenuPropertyPersistent = 1;
    this.kHierarchicalFontMenuOption = 1;
    this.gestaltContextualMenuAttr = 1668116085;
    this.gestaltContextualMenuUnusedBit = 0;
    this.gestaltContextualMenuTrapAvailable = 1;
    this.gestaltContextualMenuHasAttributeAndModifierKeys = 2;
    this.gestaltContextualMenuHasUnicodeSupport = 3;
    this.kCMHelpItemNoHelp = 0;
    this.kCMHelpItemAppleGuide = 1;
    this.kCMHelpItemOtherHelp = 2;
    this.kCMHelpItemRemoveHelp = 3;
    this.kCMNothingSelected = 0;
    this.kCMMenuItemSelected = 1;
    this.kCMShowHelpSelected = 3;
    this.keyContextualMenuName = 1886282093;
    this.keyContextualMenuCommandID = 1668113252;
    this.keyContextualMenuSubmenu = 1668117346;
    this.keyContextualMenuAttributes = 1668112756;
    this.keyContextualMenuModifiers = 1668115812;
    this.ContextualMenuInterfaceStruct = new ctypes.StructType("ContextualMenuInterfaceStruct", [{_reserved: ctypes.void_t.ptr}, {QueryInterface: new ctypes.FunctionType(ctypes.default_abi, this.SInt32, [ctypes.void_t.ptr, this.CFUUIDBytes, ctypes.void_t.ptr.ptr]).ptr}, {AddRef: new ctypes.FunctionType(ctypes.default_abi, this.UInt32, [ctypes.void_t.ptr]).ptr}, {Release: new ctypes.FunctionType(ctypes.default_abi, this.UInt32, [ctypes.void_t.ptr]).ptr}, {ExamineContext: new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.void_t.ptr, this.AEDesc.ptr, this.AEDescList.ptr]).ptr}, {HandleSelection: new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.void_t.ptr, this.AEDesc.ptr, this.SInt32]).ptr}, {PostMenuCleanup: new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.void_t.ptr]).ptr}]);
    this.kMenuDrawMsg = 0;
    this.kMenuSizeMsg = 2;
    this.kMenuPopUpMsg = 3;
    this.kMenuCalcItemMsg = 5;
    this.kMenuThemeSavvyMsg = 7;
    this.kMenuInitMsg = 8;
    this.kMenuDisposeMsg = 9;
    this.kMenuFindItemMsg = 10;
    this.kMenuHiliteItemMsg = 11;
    this.kMenuDrawItemsMsg = 12;
    this.mDrawMsg = 0;
    this.mSizeMsg = 2;
    this.mPopUpMsg = 3;
    this.mCalcItemMsg = 5;
    this.kThemeSavvyMenuResponse = 29811;
    this.MDEFHiliteItemData = new ctypes.StructType("MDEFHiliteItemData", [{previousItem: this.MenuItemIndex}, {newItem: this.MenuItemIndex}, {context: ctypes.void_t.ptr}]);
    this.MDEFHiliteItemDataPtr = this.MDEFHiliteItemData.ptr;
    this.HiliteMenuItemData = this.MDEFHiliteItemData;
    this.HiliteMenuItemDataPtr = this.MDEFHiliteItemDataPtr;
    this.MDEFDrawData = new ctypes.StructType("MDEFDrawData", [{trackingData: this.MenuTrackingData}, {context: ctypes.void_t.ptr}]);
    this.MDEFDrawDataPtr = this.MDEFDrawData.ptr;
    this.MDEFFindItemData = new ctypes.StructType("MDEFFindItemData", [{trackingData: this.MenuTrackingData}, {context: ctypes.void_t.ptr}]);
    this.MDEFFindItemDataPtr = this.MDEFFindItemData.ptr;
    this.MDEFDrawItemsData = new ctypes.StructType("MDEFDrawItemsData", [{firstItem: this.MenuItemIndex}, {lastItem: this.MenuItemIndex}, {trackingData: this.MenuTrackingData.ptr}, {context: ctypes.void_t.ptr}]);
    this.MDEFDrawItemsDataPtr = this.MDEFDrawItemsData.ptr;
    this.mctAllItems = -98;
    this.mctLastIDIndic = -99;
    this.MCEntry = new ctypes.StructType("MCEntry", [{mctID: this.MenuID}, {mctItem: ctypes.short}, {mctRGB1: this.RGBColor}, {mctRGB2: this.RGBColor}, {mctRGB3: this.RGBColor}, {mctRGB4: this.RGBColor}, {mctReserved: ctypes.short}]);
    this.MCEntryPtr = this.MCEntry.ptr;
    this.MCTable = this.MCEntry.array(1);
    this.MCTablePtr = this.MCEntry.ptr;
    this.MCTableHandle = this.MCTablePtr.ptr;
    this.MenuCRsrc = new ctypes.StructType("MenuCRsrc", [{numEntries: ctypes.short}, {mcEntryRecs: this.MCTable}]);
    this.MenuCRsrcPtr = this.MenuCRsrc.ptr;
    this.MenuCRsrcHandle = this.MenuCRsrcPtr.ptr;
    this.hMenuCmd = 27;
    this.kInsertHierarchicalMenu = -1;
    this.hierMenu = -1;
    this.MenuBarDefProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.long, [ctypes.short, ctypes.short, ctypes.short, ctypes.long]).ptr;
    this.MenuHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, []).ptr;
    this.MBarHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.short, [this.Rect.ptr]).ptr;
    this.MenuBarDefUPP = this.MenuBarDefProcPtr;
    this.MenuHookUPP = this.MenuHookProcPtr;
    this.MBarHookUPP = this.MBarHookProcPtr;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/MacWindows.h
function MacWindows_h(lib) {
    Events_h.call(this, lib);
    CarbonEventsCore_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    QDOffscreen_h.call(this, lib);
    CGBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._MACWINDOWS_H)
        return;
    this._MACWINDOWS_H = true;

    this.HIWindowRef = this.WindowRef;
    this.PropertyCreator = this.OSType;
    this.PropertyTag = this.OSType;
    this.WindowClass = this.UInt32;
    this.kAlertWindowClass = 1;
    this.kMovableAlertWindowClass = 2;
    this.kModalWindowClass = 3;
    this.kMovableModalWindowClass = 4;
    this.kFloatingWindowClass = 5;
    this.kDocumentWindowClass = 6;
    this.kUtilityWindowClass = 8;
    this.kHelpWindowClass = 10;
    this.kSheetWindowClass = 11;
    this.kToolbarWindowClass = 12;
    this.kPlainWindowClass = 13;
    this.kOverlayWindowClass = 14;
    this.kSheetAlertWindowClass = 15;
    this.kAltPlainWindowClass = 16;
    this.kSimpleWindowClass = 18;
    this.kDrawerWindowClass = 20;
    this.kAllWindowClasses = -1;
    this.kHIWindowBitCloseBox = 1;
    this.kHIWindowBitZoomBox = 2;
    this.kHIWindowBitCollapseBox = 4;
    this.kHIWindowBitResizable = 5;
    this.kHIWindowBitSideTitlebar = 6;
    this.kHIWindowBitToolbarButton = 7;
    this.kHIWindowBitUnifiedTitleAndToolbar = 8;
    this.kHIWindowBitTextured = 9;
    this.kHIWindowBitNoTitleBar = 10;
    this.kHIWindowBitTexturedSquareCorners = 11;
    this.kHIWindowBitNoTexturedContentSeparator = 12;
    this.kHIWindowBitRoundBottomBarCorners = 13;
    this.kHIWindowBitDoesNotCycle = 16;
    this.kHIWindowBitNoUpdates = 17;
    this.kHIWindowBitNoActivates = 18;
    this.kHIWindowBitOpaqueForEvents = 19;
    this.kHIWindowBitCompositing = 20;
    this.kHIWindowBitFrameworkScaled = 21;
    this.kHIWindowBitNoShadow = 22;
    this.kHIWindowBitCanBeVisibleWithoutLogin = 23;
    this.kHIWindowBitAsyncDrag = 24;
    this.kHIWindowBitHideOnSuspend = 25;
    this.kHIWindowBitStandardHandler = 26;
    this.kHIWindowBitHideOnFullScreen = 27;
    this.kHIWindowBitInWindowMenu = 28;
    this.kHIWindowBitLiveResize = 29;
    this.kHIWindowBitIgnoreClicks = 30;
    this.kHIWindowBitNoConstrain = 32;
    this.kHIWindowBitDoesNotHide = 33;
    this.kHIWindowBitAutoViewDragTracking = 34;
    this.kHIWindowBitAutoCalibration = 36;
    this.kWindowNoAttributes = 0;
    this.kWindowCloseBoxAttribute = 1;
    this.kWindowHorizontalZoomAttribute = 2;
    this.kWindowVerticalZoomAttribute = 4;
    this.kWindowFullZoomAttribute = 6;
    this.kWindowCollapseBoxAttribute = 8;
    this.kWindowResizableAttribute = 16;
    this.kWindowSideTitlebarAttribute = 32;
    this.kWindowToolbarButtonAttribute = 64;
    this.kWindowUnifiedTitleAndToolbarAttribute = 128;
    this.kWindowMetalAttribute = 256;
    this.kWindowNoTitleBarAttribute = 512;
    this.kWindowTexturedSquareCornersAttribute = 1024;
    this.kWindowMetalNoContentSeparatorAttribute = 2048;
    this.kWindowHasRoundBottomBarCornersAttribute = 4096;
    this.kWindowDoesNotCycleAttribute = 32768;
    this.kWindowNoUpdatesAttribute = 65536;
    this.kWindowNoActivatesAttribute = 131072;
    this.kWindowOpaqueForEventsAttribute = 262144;
    this.kWindowCompositingAttribute = 524288;
    this.kWindowNoShadowAttribute = 2097152;
    this.kWindowCanBeVisibleWithoutLoginAttribute = 4194304;
    this.kWindowHideOnSuspendAttribute = 16777216;
    this.kWindowAsyncDragAttribute = 8388608;
    this.kWindowStandardHandlerAttribute = 33554432;
    this.kWindowHideOnFullScreenAttribute = 67108864;
    this.kWindowInWindowMenuAttribute = 134217728;
    this.kWindowLiveResizeAttribute = 268435456;
    this.kWindowIgnoreClicksAttribute = 536870912;
    this.kWindowFrameworkScaledAttribute = 1048576;
    this.kWindowStandardDocumentAttributes = 31;
    this.kWindowStandardFloatingAttributes = 9;
    this.kWindowNoConstrainAttribute = -2147483648;
    this.WindowAttributes = this.OptionBits;
    this.kWindowDefProcType = 1464091974;
    this.kStandardWindowDefinition = 0;
    this.kRoundWindowDefinition = 1;
    this.kFloatingWindowDefinition = 124;
    this.kDocumentWindowVariantCode = 0;
    this.kModalDialogVariantCode = 1;
    this.kPlainDialogVariantCode = 2;
    this.kShadowDialogVariantCode = 3;
    this.kMovableModalDialogVariantCode = 5;
    this.kAlertVariantCode = 7;
    this.kMovableAlertVariantCode = 9;
    this.kSideFloaterVariantCode = 8;
    this.documentProc = 0;
    this.dBoxProc = 1;
    this.plainDBox = 2;
    this.altDBoxProc = 3;
    this.noGrowDocProc = 4;
    this.movableDBoxProc = 5;
    this.zoomDocProc = 8;
    this.zoomNoGrow = 12;
    this.floatProc = 1985;
    this.floatGrowProc = 1987;
    this.floatZoomProc = 1989;
    this.floatZoomGrowProc = 1991;
    this.floatSideProc = 1993;
    this.floatSideGrowProc = 1995;
    this.floatSideZoomProc = 1997;
    this.floatSideZoomGrowProc = 1999;
    this.kWindowDocumentDefProcResID = 64;
    this.kWindowDialogDefProcResID = 65;
    this.kWindowUtilityDefProcResID = 66;
    this.kWindowUtilitySideTitleDefProcResID = 67;
    this.kWindowSheetDefProcResID = 68;
    this.kWindowSimpleDefProcResID = 69;
    this.kWindowSheetAlertDefProcResID = 70;
    this.kWindowDocumentProc = 1024;
    this.kWindowGrowDocumentProc = 1025;
    this.kWindowVertZoomDocumentProc = 1026;
    this.kWindowVertZoomGrowDocumentProc = 1027;
    this.kWindowHorizZoomDocumentProc = 1028;
    this.kWindowHorizZoomGrowDocumentProc = 1029;
    this.kWindowFullZoomDocumentProc = 1030;
    this.kWindowFullZoomGrowDocumentProc = 1031;
    this.kWindowPlainDialogProc = 1040;
    this.kWindowShadowDialogProc = 1041;
    this.kWindowModalDialogProc = 1042;
    this.kWindowMovableModalDialogProc = 1043;
    this.kWindowAlertProc = 1044;
    this.kWindowMovableAlertProc = 1045;
    this.kWindowMovableModalGrowProc = 1046;
    this.kWindowFloatProc = 1057;
    this.kWindowFloatGrowProc = 1059;
    this.kWindowFloatVertZoomProc = 1061;
    this.kWindowFloatVertZoomGrowProc = 1063;
    this.kWindowFloatHorizZoomProc = 1065;
    this.kWindowFloatHorizZoomGrowProc = 1067;
    this.kWindowFloatFullZoomProc = 1069;
    this.kWindowFloatFullZoomGrowProc = 1071;
    this.kWindowFloatSideProc = 1073;
    this.kWindowFloatSideGrowProc = 1075;
    this.kWindowFloatSideVertZoomProc = 1077;
    this.kWindowFloatSideVertZoomGrowProc = 1079;
    this.kWindowFloatSideHorizZoomProc = 1081;
    this.kWindowFloatSideHorizZoomGrowProc = 1083;
    this.kWindowFloatSideFullZoomProc = 1085;
    this.kWindowFloatSideFullZoomGrowProc = 1087;
    this.kWindowSheetProc = 1088;
    this.kWindowSheetAlertProc = 1120;
    this.kWindowSimpleProc = 1104;
    this.kWindowSimpleFrameProc = 1105;
    this.kWindowOverlayProc = 1136;
    this.kWindowNoPosition = 0;
    this.kWindowDefaultPosition = 0;
    this.kWindowCenterMainScreen = 10250;
    this.kWindowAlertPositionMainScreen = 12298;
    this.kWindowStaggerMainScreen = 14346;
    this.kWindowCenterParentWindow = 43018;
    this.kWindowAlertPositionParentWindow = 45066;
    this.kWindowStaggerParentWindow = 47114;
    this.kWindowCenterParentWindowScreen = 26634;
    this.kWindowAlertPositionParentWindowScreen = 28682;
    this.kWindowStaggerParentWindowScreen = 30730;
    this.WindowPositionMethod = this.UInt32;
    this.kWindowCenterOnMainScreen = 1;
    this.kWindowCenterOnParentWindow = 2;
    this.kWindowCenterOnParentWindowScreen = 3;
    this.kWindowCascadeOnMainScreen = 4;
    this.kWindowCascadeOnParentWindow = 5;
    this.kWindowCascadeOnParentWindowScreen = 6;
    this.kWindowCascadeStartAtParentWindowScreen = 10;
    this.kWindowAlertPositionOnMainScreen = 7;
    this.kWindowAlertPositionOnParentWindow = 8;
    this.kWindowAlertPositionOnParentWindowScreen = 9;
    this.WindowRegionCode = this.UInt16;
    this.kWindowTitleBarRgn = 0;
    this.kWindowTitleTextRgn = 1;
    this.kWindowCloseBoxRgn = 2;
    this.kWindowZoomBoxRgn = 3;
    this.kWindowDragRgn = 5;
    this.kWindowGrowRgn = 6;
    this.kWindowCollapseBoxRgn = 7;
    this.kWindowTitleProxyIconRgn = 8;
    this.kWindowStructureRgn = 32;
    this.kWindowContentRgn = 33;
    this.kWindowUpdateRgn = 34;
    this.kWindowOpaqueRgn = 35;
    this.kWindowGlobalPortRgn = 40;
    this.kWindowToolbarButtonRgn = 41;
    this.dialogKind = 2;
    this.userKind = 8;
    this.kDialogWindowKind = 2;
    this.kApplicationWindowKind = 8;
    this.WindowPartCode = this.SInt16;
    this.inDesk = 0;
    this.inNoWindow = 0;
    this.inMenuBar = 1;
    this.inSysWindow = 2;
    this.inContent = 3;
    this.inDrag = 4;
    this.inGrow = 5;
    this.inGoAway = 6;
    this.inZoomIn = 7;
    this.inZoomOut = 8;
    this.inCollapseBox = 11;
    this.inProxyIcon = 12;
    this.inToolbarButton = 13;
    this.inStructure = 15;
    this.WindowDefPartCode = this.SInt16;
    this.wNoHit = 0;
    this.wInContent = 1;
    this.wInDrag = 2;
    this.wInGrow = 3;
    this.wInGoAway = 4;
    this.wInZoomIn = 5;
    this.wInZoomOut = 6;
    this.wInCollapseBox = 9;
    this.wInProxyIcon = 10;
    this.wInToolbarButton = 11;
    this.wInStructure = 13;
    this.kWindowCanGrow = 1;
    this.kWindowCanZoom = 2;
    this.kWindowCanCollapse = 4;
    this.kWindowIsModal = 8;
    this.kWindowCanGetWindowRegion = 16;
    this.kWindowIsAlert = 32;
    this.kWindowHasTitleBar = 64;
    this.kWindowSupportsDragHilite = 128;
    this.kWindowSupportsModifiedBit = 256;
    this.kWindowCanDrawInCurrentPort = 512;
    this.kWindowCanSetupProxyDragImage = 1024;
    this.kWindowCanMeasureTitle = 2048;
    this.kWindowWantsDisposeAtProcessDeath = 4096;
    this.kWindowSupportsGetGrowImageRegion = 8192;
    this.kWindowIsOpaque = 16384;
    this.kWindowDefSupportsColorGrafPort = 1073741826;
    this.kMouseUpOutOfSlop = -2147450880;
    this.WStateData = new ctypes.StructType("WStateData", [{userState: this.Rect}, {stdState: this.Rect}]);
    this.WStateDataPtr = this.WStateData.ptr;
    this.WStateDataHandle = this.WStateDataPtr.ptr;
    this.WindowDefProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.long, [ctypes.short, this.WindowRef, ctypes.short, ctypes.long]).ptr;
    this.WindowDefUPP = this.WindowDefProcPtr;
    // Dropping inline function 'NewWindowDefUPP'.
    // Dropping inline function 'DisposeWindowDefUPP'.
    // Dropping inline function 'InvokeWindowDefUPP'.
    this.kWindowDefProcPtr = 0;
    this.kWindowDefObjectClass = 1;
    this.kWindowDefProcID = 2;
    this.kWindowDefHIView = 3;
    this.WindowDefType = this.UInt32;
    this.WindowDefSpec = new ctypes.StructType("WindowDefSpec", []);
    this.WindowDefSpecPtr = this.WindowDefSpec.ptr;
    this.kHIWindowBackingLocationDefault = 0;
    this.kHIWindowBackingLocationVideoMemory = 1;
    this.kHIWindowBackingLocationMainMemory = 2;
    this.HIWindowBackingLocation = this.UInt32;
    this.kHIWindowSharingNone = 0;
    this.kHIWindowSharingReadOnly = 1;
    this.kHIWindowSharingReadWrite = 2;
    this.HIWindowSharingType = this.UInt32;
    this.WindowModality = this.UInt32;
    this.kWindowModalityNone = 0;
    this.kWindowModalitySystemModal = 1;
    this.kWindowModalityAppModal = 2;
    this.kWindowModalityWindowModal = 3;
    this.OpaqueWindowGroupRef = new ctypes.StructType("OpaqueWindowGroupRef");
    this.WindowGroupRef = this.OpaqueWindowGroupRef.ptr;
    this.WindowGroupAttributes = this.UInt32;
    this.kWindowGroupAttrSelectAsLayer = 1;
    this.kWindowGroupAttrMoveTogether = 2;
    this.kWindowGroupAttrLayerTogether = 4;
    this.kWindowGroupAttrSharedActivation = 8;
    this.kWindowGroupAttrHideOnCollapse = 16;
    this.kWindowGroupAttrFixedLevel = 32;
    this.WindowActivationScope = this.UInt32;
    this.kWindowActivationScopeNone = 0;
    this.kWindowActivationScopeIndependent = 1;
    this.kWindowActivationScopeAll = 2;
    this.kNextWindowGroup = 1;
    this.kPreviousWindowGroup = 0;
    this.WindowGroupContentOptions = this.UInt32;
    this.kWindowGroupContentsReturnWindows = 1;
    this.kWindowGroupContentsRecurse = 2;
    this.kWindowGroupContentsVisible = 4;
    this.kWindowGroupLevelActive = 1;
    this.kWindowGroupLevelInactive = 2;
    this.kWindowGroupLevelPromoted = 3;
    this.kHIWindowDepthInvalid = 0;
    this.kHIWindowDepth32Bit = 1;
    this.kHIWindowDepth64Bit = 2;
    this.kHIWindowDepthFloat = 3;
    this.HIWindowDepth = this.UInt32;
    this.ScrollWindowOptions = this.UInt32;
    this.kScrollWindowNoOptions = 0;
    this.kScrollWindowInvalidate = 1;
    this.kScrollWindowEraseToPortBackground = 2;
    this.kHIWindowIgnoreObscuringWindows = 1;
    this.kWindowMenuIncludeRotate = 1;
    this.kHIWindowMenuCreator = 2003398244;
    this.kHIWindowMenuWindowTag = 2003398244;
    this.WindowTransitionEffect = this.UInt32;
    this.kWindowZoomTransitionEffect = 1;
    this.kWindowSheetTransitionEffect = 2;
    this.kWindowSlideTransitionEffect = 3;
    this.kWindowFadeTransitionEffect = 4;
    this.kWindowGenieTransitionEffect = 5;
    this.WindowTransitionAction = this.UInt32;
    this.kWindowShowTransitionAction = 1;
    this.kWindowHideTransitionAction = 2;
    this.kWindowMoveTransitionAction = 3;
    this.kWindowResizeTransitionAction = 4;
    this.TransitionWindowOptions = new ctypes.StructType("TransitionWindowOptions", [{version: this.UInt32}, {duration: this.EventTime}, {window: this.WindowRef}, {userData: ctypes.void_t.ptr}]);
    this.WindowConstrainOptions = this.UInt32;
    this.kWindowConstrainMayResize = 1;
    this.kWindowConstrainMoveRegardlessOfFit = 2;
    this.kWindowConstrainAllowPartial = 4;
    this.kWindowConstrainCalcOnly = 8;
    this.kWindowConstrainUseTransitionWindow = 16;
    this.kWindowConstrainMoveMinimum = 64;
    this.kWindowConstrainUseSpecifiedBounds = 256;
    this.kWindowConstrainStandardOptions = 2;
    this.WindowLatentVisibility = this.UInt32;
    this.kWindowLatentVisibleFloater = 1;
    this.kWindowLatentVisibleSuspend = 2;
    this.kWindowLatentVisibleFullScreen = 4;
    this.kWindowLatentVisibleAppHidden = 8;
    this.kWindowLatentVisibleCollapsedOwner = 16;
    this.kWindowLatentVisibleCollapsedGroup = 32;
    this.kHIWindowBehaviorTransient = 1;
    this.kHIWindowBehaviorStationary = 2;
    this.kHIWindowCanJoinAllSpaces = 256;
    this.kHIWindowMoveToActiveSpace = 512;
    this.kHIWindowExposeHidden = 1;
    this.kHIWindowVisibleInAllSpaces = 256;
    this.HIWindowAvailability = this.OptionBits;
    this.kWindowEdgeDefault = 0;
    this.kWindowEdgeTop = 1;
    this.kWindowEdgeLeft = 2;
    this.kWindowEdgeBottom = 4;
    this.kWindowEdgeRight = 8;
    this.kWindowDrawerOpening = 1;
    this.kWindowDrawerOpen = 2;
    this.kWindowDrawerClosing = 3;
    this.kWindowDrawerClosed = 4;
    this.WindowDrawerState = this.UInt32;
    this.kHIToolbarViewDrawBackgroundTag = 1650549611;
    this.HIWindowScaleMode = this.UInt32;
    this.kHIWindowScaleModeUnscaled = 0;
    this.kHIWindowScaleModeMagnified = 1;
    this.kHIWindowScaleModeFrameworkScaled = 2;
    this.HIContentBorderMetrics = new ctypes.StructType("HIContentBorderMetrics", [{top: this.CGFloat}, {left: this.CGFloat}, {bottom: this.CGFloat}, {right: this.CGFloat}]);
    this.kWindowPropertyPersistent = 1;
    this.kWindowMsgDraw = 0;
    this.kWindowMsgHitTest = 1;
    this.kWindowMsgCalculateShape = 2;
    this.kWindowMsgInitialize = 3;
    this.kWindowMsgCleanUp = 4;
    this.kWindowMsgDrawGrowOutline = 5;
    this.kWindowMsgDrawGrowBox = 6;
    this.kWindowMsgGetFeatures = 7;
    this.kWindowMsgGetRegion = 8;
    this.kWindowMsgDragHilite = 9;
    this.kWindowMsgModified = 10;
    this.kWindowMsgDrawInCurrentPort = 11;
    this.kWindowMsgSetupProxyDragImage = 12;
    this.kWindowMsgStateChanged = 13;
    this.kWindowMsgMeasureTitle = 14;
    this.kWindowMsgGetGrowImageRegion = 19;
    this.wDraw = 0;
    this.wHit = 1;
    this.wCalcRgns = 2;
    this.wNew = 3;
    this.wDispose = 4;
    this.wGrow = 5;
    this.wDrawGIcon = 6;
    this.kWindowStateTitleChanged = 1;
    this.SetupWindowProxyDragImageRec = new ctypes.StructType("SetupWindowProxyDragImageRec", [{imageGWorld: this.GWorldPtr}, {imageRgn: this.RgnHandle}, {outlineRgn: this.RgnHandle}]);
    this.MeasureWindowTitleRec = new ctypes.StructType("MeasureWindowTitleRec", [{fullTitleWidth: this.SInt16}, {titleTextWidth: this.SInt16}, {isUnicodeTitle: this.Boolean}, {unused: this.Boolean}]);
    this.MeasureWindowTitleRecPtr = this.MeasureWindowTitleRec.ptr;
    this.GetGrowImageRegionRec = new ctypes.StructType("GetGrowImageRegionRec", [{growRect: this.Rect}, {growImageRegion: this.RgnHandle}]);
    this.GetWindowRegionRec = new ctypes.StructType("GetWindowRegionRec", [{winRgn: this.RgnHandle}, {regionCode: this.WindowRegionCode}]);
    this.GetWindowRegionPtr = this.GetWindowRegionRec.ptr;
    this.GetWindowRegionRecPtr = this.GetWindowRegionRec.ptr;
    this.deskPatID = 16;
    this.wContentColor = 0;
    this.wFrameColor = 1;
    this.wTextColor = 2;
    this.wHiliteColor = 3;
    this.wTitleBarColor = 4;
    this.WinCTab = new ctypes.StructType("WinCTab", [{wCSeed: ctypes.long}, {wCReserved: ctypes.short}, {ctSize: ctypes.short}, {ctTable: this.ColorSpec.array(5)}]);
    this.WCTabPtr = this.WinCTab.ptr;
    this.WCTabHandle = this.WCTabPtr.ptr;
    this.kWindowDefinitionVersionOne = 1;
    this.kWindowDefinitionVersionTwo = 2;
    this.kWindowIsCollapsedState = 1;
    this.BasicWindowDescription = new ctypes.StructType("BasicWindowDescription", []);
    this.kStoredWindowSystemTag = 1634758764;
    this.kStoredBasicWindowDescriptionID = 1935827315;
    this.kStoredWindowPascalTitleID = 1932670261;
    this.kStoredWindowTitleCFStringID = 1667658612;
    this.DeskHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Boolean, this.EventRecord.ptr]).ptr;
    this.WindowPaintProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.GDHandle, this.GrafPtr, this.WindowRef, this.RgnHandle, this.RgnHandle, ctypes.void_t.ptr]).ptr;
    this.DeskHookUPP = this.DeskHookProcPtr;
    this.WindowPaintUPP = this.WindowPaintProcPtr;
    // Dropping inline function 'NewWindowPaintUPP'.
    // Dropping inline function 'DisposeWindowPaintUPP'.
    // Dropping inline function 'InvokeWindowPaintUPP'.
    this.kWindowPaintProcOptionsNone = 0;
    this.WindowPaintProcOptions = this.OptionBits;
    this.kWindowGroupAttrSelectable = 1;
    this.kWindowGroupAttrPositionFixed = 2;
    this.kWindowGroupAttrZOrderFixed = 4;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/MacTextEditor.h
function MacTextEditor_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    ATSUnicodeTypes_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    TextCommon_h.call(this, lib);
    CFURL_h.call(this, lib);
    Menus_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._MACTEXTEDITOR_H)
        return;
    this._MACTEXTEDITOR_H = true;

    this.OpaqueTXNObject = new ctypes.StructType("OpaqueTXNObject");
    this.TXNObject = this.OpaqueTXNObject.ptr;
    this.TXNVersionValue = this.UInt32;
    this.TXNFrameID = this.UInt32;
    this.kTXNDisabledFunctionalityErr = -22019;
    this.kTXNOperationNotAllowedErr = -22020;
    this.kTXNWillDefaultToATSUIBit = 0;
    this.kTXNWillDefaultToCarbonEventBit = 1;
    this.TXNFeatureBits = this.OptionBits;
    this.kTXNWillDefaultToATSUIMask = 1;
    this.kTXNWillDefaultToCarbonEventMask = 2;
    this.kTXNWantMoviesBit = 0;
    this.kTXNWantSoundBit = 1;
    this.kTXNWantGraphicsBit = 2;
    this.kTXNAlwaysUseQuickDrawTextBit = 3;
    this.kTXNUseTemporaryMemoryBit = 4;
    this.TXNInitOptions = this.OptionBits;
    this.kTXNWantMoviesMask = 1;
    this.kTXNWantSoundMask = 2;
    this.kTXNWantGraphicsMask = 4;
    this.kTXNAlwaysUseQuickDrawTextMask = 8;
    this.kTXNUseTemporaryMemoryMask = 16;
    this.kTXNDefaultFontSize = 786432;
    this.kTXNDefaultFontStyle = 0;
    this.kTXNDrawGrowIconBit = 0;
    this.kTXNShowWindowBit = 1;
    this.kTXNWantHScrollBarBit = 2;
    this.kTXNWantVScrollBarBit = 3;
    this.kTXNReadOnlyBit = 5;
    this.kTXNNoSelectionBit = 7;
    this.kTXNSaveStylesAsSTYLResourceBit = 8;
    this.kOutputTextInUnicodeEncodingBit = 9;
    this.kTXNDoNotInstallDragProcsBit = 10;
    this.kTXNAlwaysWrapAtViewEdgeBit = 11;
    this.kTXNDontDrawSelectionWhenInactiveBit = 13;
    this.kTXNSingleLineOnlyBit = 14;
    this.kTXNDisableDragAndDropBit = 15;
    this.kTXNMonostyledTextBit = 17;
    this.kTXNDoFontSubstitutionBit = 22;
    this.TXNFrameOptions = this.OptionBits;
    this.kTXNDrawGrowIconMask = 1;
    this.kTXNShowWindowMask = 2;
    this.kTXNWantHScrollBarMask = 4;
    this.kTXNWantVScrollBarMask = 8;
    this.kTXNReadOnlyMask = 32;
    this.kTXNNoSelectionMask = 128;
    this.kTXNSaveStylesAsSTYLResourceMask = 256;
    this.kOutputTextInUnicodeEncodingMask = 512;
    this.kTXNDoNotInstallDragProcsMask = 1024;
    this.kTXNAlwaysWrapAtViewEdgeMask = 2048;
    this.kTXNDontDrawSelectionWhenInactiveMask = 8192;
    this.kTXNSingleLineOnlyMask = 16384;
    this.kTXNDisableDragAndDropMask = 32768;
    this.kTXNMonostyledTextMask = 131072;
    this.kTXNDoFontSubstitutionMask = 4194304;
    this.kTXNSetFlushnessBit = 0;
    this.kTXNSetJustificationBit = 1;
    this.kTXNUseFontFallBackBit = 2;
    this.kTXNRotateTextBit = 3;
    this.kTXNUseVerticalTextBit = 4;
    this.kTXNDontUpdateBoxRectBit = 5;
    this.kTXNDontDrawTextBit = 6;
    this.kTXNUseCGContextRefBit = 7;
    this.kTXNDontWrapTextBit = 9;
    this.TXNTextBoxOptions = this.OptionBits;
    this.kTXNSetFlushnessMask = 1;
    this.kTXNSetJustificationMask = 2;
    this.kTXNUseFontFallBackMask = 4;
    this.kTXNRotateTextMask = 8;
    this.kTXNUseVerticalTextMask = 16;
    this.kTXNDontUpdateBoxRectMask = 32;
    this.kTXNDontDrawTextMask = 64;
    this.kTXNUseCGContextRefMask = 128;
    this.kTXNDontWrapTextMask = 512;
    this.TXNTextBoxOptionsData = new ctypes.StructType("TXNTextBoxOptionsData", [{optionTags: this.TXNTextBoxOptions}, {flushness: this.Fract}, {justification: this.Fract}, {rotation: this.Fixed}, {options: ctypes.void_t.ptr}]);
    this.TXNFileType = this.OSType;
    this.kTXNTextFile = 1413830740;
    this.kTXNAIFFFile = 1095321158;
    this.kTXNUnicodeTextFile = 1970567284;
    this.kTXNTextensionFile = 1954051182;
    this.kTXNPictureFile = 1346978644;
    this.kTXNMovieFile = 1299148630;
    this.kTXNSoundFile = 1936091500;
    this.TXNPermanentTextEncodingType = this.UInt32;
    this.kTXNSystemDefaultEncoding = 0;
    this.kTXNMacOSEncoding = 1;
    this.kTXNUnicodeEncoding = 2;
    this.TXNDataType = this.OSType;
    this.kTXNTextData = 1413830740;
    this.kTXNUnicodeTextData = 1970567284;
    this.kTXNRichTextFormatData = 1381254688;
    this.kTXNPictureData = 1346978644;
    this.kTXNMovieData = 1836019574;
    this.kTXNSoundData = 1936614432;
    this.kTXNTextAndMultimediaData = 1954051182;
    this.TXNTabType = this.SInt8;
    this.kTXNRightTab = -1;
    this.kTXNLeftTab = 0;
    this.kTXNCenterTab = 1;
    this.TXNTab = new ctypes.StructType("TXNTab", [{value: this.SInt16}, {tabType: this.TXNTabType}, {filler: this.UInt8}]);
    this.kTXNLeftToRight = 0;
    this.kTXNRightToLeft = 1;
    this.kTXNFlushDefault = 0;
    this.kTXNFlushLeft = 1;
    this.kTXNFlushRight = 2;
    this.kTXNCenter = 4;
    this.kTXNFullJust = 8;
    this.kTXNForceFullJust = 16;
    this.TXNMargins = new ctypes.StructType("TXNMargins", [{topMargin: this.SInt16}, {leftMargin: this.SInt16}, {bottomMargin: this.SInt16}, {rightMargin: this.SInt16}]);
    this.TXNControlTag = this.FourCharCode;
    this.kTXNLineDirectionTag = 1819174002;
    this.kTXNJustificationTag = 1786082164;
    this.kTXNIOPrivilegesTag = 1768910966;
    this.kTXNSelectionStateTag = 1936487284;
    this.kTXNInlineStateTag = 1768846196;
    this.kTXNWordWrapStateTag = 2004316787;
    this.kTXNAutoIndentStateTag = 1635084654;
    this.kTXNTabSettingsTag = 1952539251;
    this.kTXNRefConTag = 1919312750;
    this.kTXNMarginsTag = 1835102823;
    this.kTXNFlattenMoviesTag = 1718378868;
    this.kTXNDoFontSubstitution = 1716745570;
    this.kTXNNoUserIOTag = 1853188463;
    this.kTXNUseCarbonEvents = 1667392354;
    this.kTXNDrawSelectionWhenInactiveTag = 1685285998;
    this.kTXNDisableDragAndDropTag = 1685217639;
    this.kTXNSingleLevelUndoTag = 1970168943;
    this.kTXNVisibilityTag = 1986622306;
    this.kTXNDisableLayoutAndDrawTag = 1986622306;
    this.kTXNAutoScrollBehaviorTag = 1935828342;
    this.kTXNClearThisControl = -1;
    this.kTXNClearTheseFontFeatures = -2147483648;
    this.kTXNReadWrite = 0;
    this.kTXNReadOnly = 1;
    this.kTXNSelectionOn = 1;
    this.kTXNSelectionOff = 0;
    this.kTXNUseInline = 0;
    this.kTXNUseBottomline = 1;
    this.kTXNAutoWrap = 0;
    this.kTXNNoAutoWrap = 1;
    this.kTXNAutoIndentOff = 0;
    this.kTXNAutoIndentOn = 1;
    this.kTXNDontDrawSelectionWhenInactive = 0;
    this.kTXNDrawSelectionWhenInactive = 1;
    this.kTXNEnableDragAndDrop = 0;
    this.kTXNDisableDragAndDrop = 1;
    this.kTXNDisableLayoutAndDraw = 1;
    this.kTXNEnableLayoutAndDraw = 0;
    this.TXNControlData = new ctypes.StructType("TXNControlData", [{uValue: ctypes.unsigned_long}, {sValue: ctypes.long}, {tabValue: this.TXNTab}, {marginsPtr: this.TXNMargins.ptr}]);
    this.TXNAutoScrollBehavior = this.UInt32;
    this.kTXNAutoScrollInsertionIntoView = 0;
    this.kTXNAutoScrollNever = 1;
    this.kTXNAutoScrollWhenInsertionVisible = 2;
    this.TXNOffset = this.UInt32;
    this.kTXNUseCurrentSelection = -1;
    this.kTXNStartOffset = 0;
    this.kTXNEndOffset = 2147483647;
    this.kTXNShowStart = 0;
    this.kTXNShowEnd = 1;
    this.kTXNSingleStylePerTextDocumentResType = 1297109842;
    this.kTXNMultipleStylesPerTextDocumentResType = 1937013100;
    this.TXNHyperLinkState = this.UInt32;
    this.kTXNLinkNotPressed = 0;
    this.kTXNLinkWasPressed = 1;
    this.kTXNLinkTracking = 3;
    this.TXNTypeRunAttributes = this.FourCharCode;
    this.kTXNTextEncodingAttribute = 1701733220;
    this.kTXNATSUIFontFeaturesAttribute = 1635018341;
    this.kTXNATSUIFontVariationsAttribute = 1635022433;
    this.kTXNURLAttribute = 1970433121;
    this.kTXNATSUIStyle = 1634956396;
    this.TXNTypeRunAttributeSizes = this.ByteCount;
    this.kTXNTextEncodingAttributeSize = 4;
    this.kTXNATSUIStyleSize = 4;
    this.TXNATSUIFeatures = new ctypes.StructType("TXNATSUIFeatures", [{featureCount: this.ItemCount}, {featureTypes: this.ATSUFontFeatureType.ptr}, {featureSelectors: this.ATSUFontFeatureSelector.ptr}]);
    this.TXNATSUIVariations = new ctypes.StructType("TXNATSUIVariations", [{variationCount: this.ItemCount}, {variationAxis: this.ATSUFontVariationAxis.ptr}, {variationValues: this.ATSUFontVariationValue.ptr}]);
    this.TXNAttributeData = new ctypes.StructType("TXNAttributeData", [{dataPtr: ctypes.void_t.ptr}, {dataValue: this.UInt32}, {atsuFeatures: this.TXNATSUIFeatures.ptr}, {atsuVariations: this.TXNATSUIVariations.ptr}, {urlReference: this.CFURLRef}]);
    this.TXNTypeAttributes = new ctypes.StructType("TXNTypeAttributes", [{tag: this.TXNTypeRunAttributes}, {size: this.ByteCount}, {data: this.TXNAttributeData}]);
    this.kTXNDontCareTypeSize = -1;
    this.kTXNDontCareTypeStyle = 255;
    this.kTXNIncrementTypeSize = 1;
    this.kTXNDecrementTypeSize = -2147483648;
    this.kTXNUseScriptDefaultValue = -1;
    this.kTXNNoFontVariations = 32767;
    this.kTXNFontContinuousBit = 0;
    this.kTXNSizeContinuousBit = 1;
    this.kTXNStyleContinuousBit = 2;
    this.kTXNColorContinuousBit = 3;
    this.kTXNATSUIStyleContinuousBit = 4;
    this.TXNContinuousFlags = this.OptionBits;
    this.kTXNFontContinuousMask = 1;
    this.kTXNSizeContinuousMask = 2;
    this.kTXNStyleContinuousMask = 4;
    this.kTXNColorContinuousMask = 8;
    this.kTXNATSUIStyleContinuousMask = 16;
    this.kTXNIgnoreCaseBit = 0;
    this.kTXNEntireWordBit = 1;
    this.kTXNUseEncodingWordRulesBit = 31;
    this.TXNMatchOptions = this.OptionBits;
    this.kTXNIgnoreCaseMask = 1;
    this.kTXNEntireWordMask = 2;
    this.kTXNUseEncodingWordRulesMask = -2147483648;
    this.TXNMatchTextRecord = new ctypes.StructType("TXNMatchTextRecord", [{iTextPtr: ctypes.void_t.ptr}, {iTextToMatchLength: ctypes.long}, {iTextEncoding: this.TextEncoding}]);
    this.TXNMacOSPreferredFontDescription = new ctypes.StructType("TXNMacOSPreferredFontDescription", [{fontID: this.UInt32}, {pointSize: this.Fixed}, {encoding: this.TextEncoding}, {fontStyle: this.Style}]);
    this.TXNBackgroundType = this.UInt32;
    this.kTXNBackgroundTypeRGB = 1;
    this.TXNBackgroundData = new ctypes.StructType("TXNBackgroundData", [{color: this.RGBColor}]);
    this.TXNBackground = new ctypes.StructType("TXNBackground", [{bgType: this.TXNBackgroundType}, {bg: this.TXNBackgroundData}]);
    this.TXNScrollUnit = this.UInt32;
    this.kTXNScrollUnitsInPixels = 0;
    this.kTXNScrollUnitsInLines = 1;
    this.kTXNScrollUnitsInViewRects = 2;
    this.TXNScrollBarOrientation = this.UInt32;
    this.kTXNHorizontal = 0;
    this.kTXNVertical = 1;
    this.TXNScrollBarState = this.Boolean;
    this.kScrollBarsAlwaysActive = 1;
    this.kScrollBarsSyncWithFocus = 0;
    this.kTXNDrawItemScrollbarsBit = 0;
    this.kTXNDrawItemTextBit = 1;
    this.kTXNDrawItemTextAndSelectionBit = 2;
    this.TXNDrawItems = this.OptionBits;
    this.kTXNDrawItemScrollbarsMask = 1;
    this.kTXNDrawItemTextMask = 2;
    this.kTXNDrawItemTextAndSelectionMask = 4;
    this.kTXNDrawItemAllMask = -1;
    this.TXNRectKey = this.UInt32;
    this.kTXNViewRectKey = 0;
    this.kTXNDestinationRectKey = 1;
    this.kTXNTextRectKey = 2;
    this.kTXNVerticalScrollBarRectKey = 3;
    this.kTXNHorizontalScrollBarRectKey = 4;
    this.TXNCarbonEventInfo = new ctypes.StructType("TXNCarbonEventInfo", [{useCarbonEvents: this.Boolean}, {filler: this.UInt8}, {flags: this.UInt16}, {fDictionary: this.CFDictionaryRef}]);
    this.TXNFindProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.TXNMatchTextRecord.ptr, this.TXNDataType, this.TXNMatchOptions, ctypes.void_t.ptr, this.TextEncoding, this.TXNOffset, this.ByteCount, this.TXNOffset.ptr, this.TXNOffset.ptr, this.Boolean.ptr, this.URefCon]).ptr;
    this.TXNActionNameMapperProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [this.CFStringRef, this.UInt32, ctypes.void_t.ptr]).ptr;
    this.TXNContextualMenuSetupProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.MenuRef, this.TXNObject, ctypes.void_t.ptr]).ptr;
    this.TXNScrollInfoProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SInt32, this.SInt32, this.TXNScrollBarOrientation, this.SRefCon]).ptr;
    this.TXNFindUPP = this.TXNFindProcPtr;
    this.TXNActionNameMapperUPP = this.TXNActionNameMapperProcPtr;
    this.TXNContextualMenuSetupUPP = this.TXNContextualMenuSetupProcPtr;
    this.TXNScrollInfoUPP = this.TXNScrollInfoProcPtr;
    // Dropping inline function 'NewTXNFindUPP'.
    // Dropping inline function 'NewTXNActionNameMapperUPP'.
    // Dropping inline function 'NewTXNContextualMenuSetupUPP'.
    // Dropping inline function 'NewTXNScrollInfoUPP'.
    // Dropping inline function 'DisposeTXNFindUPP'.
    // Dropping inline function 'DisposeTXNActionNameMapperUPP'.
    // Dropping inline function 'DisposeTXNContextualMenuSetupUPP'.
    // Dropping inline function 'DisposeTXNScrollInfoUPP'.
    // Dropping inline function 'InvokeTXNFindUPP'.
    // Dropping inline function 'InvokeTXNActionNameMapperUPP'.
    // Dropping inline function 'InvokeTXNContextualMenuSetupUPP'.
    // Dropping inline function 'InvokeTXNScrollInfoUPP'.
    this.TXNCommandEventSupportOptions = this.OptionBits;
    this.kTXNSupportEditCommandProcessing = 1;
    this.kTXNSupportEditCommandUpdating = 2;
    this.kTXNSupportSpellCheckCommandProcessing = 4;
    this.kTXNSupportSpellCheckCommandUpdating = 8;
    this.kTXNSupportFontCommandProcessing = 16;
    this.kTXNSupportFontCommandUpdating = 32;
    this.OpaqueTXNFontMenuObject = new ctypes.StructType("OpaqueTXNFontMenuObject");
    this.TXNFontMenuObject = this.OpaqueTXNFontMenuObject.ptr;
    this.kTXNKeyboardSyncStateTag = 1801614201;
    this.kTXNSyncKeyboard = 0;
    this.kTXNNoSyncKeyboard = 1;
    this.kTXNNoKeyboardSyncBit = 6;
    this.kTXNNoKeyboardSyncMask = 64;
    this.TXTNTag = this.FourCharCode;
    this.TXNErrors = this.OSStatus;
    this.TXNObjectRefcon = ctypes.void_t.ptr;
    this.TXNLongRect = new ctypes.StructType("TXNLongRect", [{top: this.SInt32}, {left: this.SInt32}, {bottom: this.SInt32}, {right: this.SInt32}]);
    this.TXNFrameType = this.UInt32;
    this.kTXNTextEditStyleFrameType = 1;
    this.kTXNPageFrameType = 2;
    this.kTXNMultipleFrameType = 3;
    this.kTXNQDFontNameAttribute = 1718514798;
    this.kTXNQDFontFamilyIDAttribute = 1718578804;
    this.kTXNQDFontSizeAttribute = 1936292453;
    this.kTXNQDFontStyleAttribute = 1717658469;
    this.kTXNQDFontColorAttribute = 1802268530;
    this.kTXNQDFontNameAttributeSize = 256;
    this.kTXNQDFontFamilyIDAttributeSize = 2;
    this.kTXNFontSizeAttributeSize = 4;
    this.kTXNQDFontSizeAttributeSize = 2;
    this.kTXNQDFontStyleAttributeSize = 1;
    this.kTXNQDFontColorAttributeSize = 6;
    this.kTXNUseQDforImagingBit = 16;
    this.kTXNUseQDforImagingMask = 65536;
    this.kTXNImageWithQDBit = 8;
    this.kTXNImageWithQDMask = 256;
    this.kTXNDrawCaretWhenInactiveTag = 1684238964;
    this.kTXNDontDrawCaretWhenInactive = 0;
    this.kTXNDrawCaretWhenInactive = 1;
    this.kTXNDontDrawCaretWhenInactiveBit = 12;
    this.kTXNDontDrawCaretWhenInactiveMask = 4096;
    this.kTXNNoTSMEverBit = 4;
    this.kTXNNoTSMEverMask = 16;
    this.kTXNNoAppleEventHandlersBit = 0;
    this.kTXNRestartAppleEventHandlersBit = 1;
    this.kTXNNoAppleEventHandlersMask = 1;
    this.kTXNRestartAppleEventHandlersMask = 2;
    this.TXNActionKey = this.UInt32;
    this.kTXNTypingAction = 0;
    this.kTXNCutAction = 1;
    this.kTXNPasteAction = 2;
    this.kTXNClearAction = 3;
    this.kTXNChangeFontAction = 4;
    this.kTXNChangeFontColorAction = 5;
    this.kTXNChangeFontSizeAction = 6;
    this.kTXNChangeStyleAction = 7;
    this.kTXNAlignLeftAction = 8;
    this.kTXNAlignCenterAction = 9;
    this.kTXNAlignRightAction = 10;
    this.kTXNDropAction = 11;
    this.kTXNMoveAction = 12;
    this.kTXNFontFeatureAction = 13;
    this.kTXNFontVariationAction = 14;
    this.kTXNUndoLastAction = 1024;
    this.TXNActionKeyMapperProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.CFStringRef, [this.TXNActionKey, this.UInt32]).ptr;
    this.TXNActionKeyMapperUPP = this.TXNActionKeyMapperProcPtr;
    // Dropping inline function 'NewTXNActionKeyMapperUPP'.
    // Dropping inline function 'DisposeTXNActionKeyMapperUPP'.
    // Dropping inline function 'InvokeTXNActionKeyMapperUPP'.
    this.kTXNTextInputCountBit = 0;
    this.kTXNRunCountBit = 1;
    this.TXNCountOptions = this.OptionBits;
    this.kTXNTextInputCountMask = 1;
    this.kTXNRunCountMask = 2;
    this.kTXNAllCountMask = 3;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/CarbonEventsCore.h
function CarbonEventsCore_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._CARBONEVENTSCORE_H)
        return;
    this._CARBONEVENTSCORE_H = true;

    this.OpaqueEventRef = new ctypes.StructType("OpaqueEventRef");
    this.EventRef = this.OpaqueEventRef.ptr;
    this.eventAlreadyPostedErr = -9860;
    this.eventTargetBusyErr = -9861;
    this.eventClassInvalidErr = -9862;
    this.eventClassIncorrectErr = -9864;
    this.eventDeferAccessibilityEventErr = -9865;
    this.eventHandlerAlreadyInstalledErr = -9866;
    this.eventInternalErr = -9868;
    this.eventKindIncorrectErr = -9869;
    this.eventParameterNotFoundErr = -9870;
    this.eventNotHandledErr = -9874;
    this.eventLoopTimedOutErr = -9875;
    this.eventLoopQuitErr = -9876;
    this.eventNotInQueueErr = -9877;
    this.eventHotKeyExistsErr = -9878;
    this.eventHotKeyInvalidErr = -9879;
    this.eventPassToNextTargetErr = -9880;
    this.kEventParamDirectObject = 757935405;
    this.kEventParamDragRef = 1685217639;
    this.typeDragRef = 1685217639;
    this.typeCTFontRef = 1668572786;
    this.typeCTGlyphInfoRef = 1668573033;
    this.EventPriority = this.SInt16;
    this.kEventPriorityLow = 0;
    this.kEventPriorityStandard = 1;
    this.kEventPriorityHigh = 2;
    this.kEventLeaveInQueue = 0;
    this.kEventRemoveFromQueue = 1;
    this.EventTime = ctypes.double;
    this.EventTimeout = this.EventTime;
    this.EventTimerInterval = this.EventTime;
    // Dropping inline function 'TicksToEventTime'.
    // Dropping inline function 'EventTimeToTicks'.
    this.EventTypeSpec = new ctypes.StructType("EventTypeSpec", [{eventClass: this.OSType}, {eventKind: this.UInt32}]);
    this.EventParamName = this.OSType;
    this.EventParamType = this.OSType;
    this.OpaqueEventLoopRef = new ctypes.StructType("OpaqueEventLoopRef");
    this.EventLoopRef = this.OpaqueEventLoopRef.ptr;
    this.EventAttributes = this.UInt32;
    this.kEventAttributeNone = 0;
    this.kEventAttributeUserEvent = 1;
    this.kEventAttributeMonitored = 8;
    this.OpaqueEventQueueRef = new ctypes.StructType("OpaqueEventQueueRef");
    this.EventQueueRef = this.OpaqueEventQueueRef.ptr;
    this.EventComparatorProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.EventRef, ctypes.void_t.ptr]).ptr;
    this.EventComparatorUPP = this.EventComparatorProcPtr;
    // Dropping inline function 'NewEventComparatorUPP'.
    // Dropping inline function 'DisposeEventComparatorUPP'.
    // Dropping inline function 'InvokeEventComparatorUPP'.
    this.kEventQueueOptionsNone = 0;
    this.__EventLoopTimer = new ctypes.StructType("__EventLoopTimer");
    this.EventLoopTimerRef = this.__EventLoopTimer.ptr;
    this.EventLoopTimerProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.EventLoopTimerRef, ctypes.void_t.ptr]).ptr;
    this.kEventLoopIdleTimerStarted = 1;
    this.kEventLoopIdleTimerIdling = 2;
    this.kEventLoopIdleTimerStopped = 3;
    this.EventLoopIdleTimerMessage = this.UInt16;
    this.EventLoopIdleTimerProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.EventLoopTimerRef, this.EventLoopIdleTimerMessage, ctypes.void_t.ptr]).ptr;
    this.EventLoopTimerUPP = this.EventLoopTimerProcPtr;
    this.EventLoopIdleTimerUPP = this.EventLoopIdleTimerProcPtr;
    // Dropping inline function 'NewEventLoopTimerUPP'.
    // Dropping inline function 'NewEventLoopIdleTimerUPP'.
    // Dropping inline function 'DisposeEventLoopTimerUPP'.
    // Dropping inline function 'DisposeEventLoopIdleTimerUPP'.
    // Dropping inline function 'InvokeEventLoopTimerUPP'.
    // Dropping inline function 'InvokeEventLoopIdleTimerUPP'.
    this.OpaqueEventHandlerRef = new ctypes.StructType("OpaqueEventHandlerRef");
    this.EventHandlerRef = this.OpaqueEventHandlerRef.ptr;
    this.OpaqueEventHandlerCallRef = new ctypes.StructType("OpaqueEventHandlerCallRef");
    this.EventHandlerCallRef = this.OpaqueEventHandlerCallRef.ptr;
    this.EventHandlerProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.EventHandlerCallRef, this.EventRef, ctypes.void_t.ptr]).ptr;
    this.EventHandlerUPP = this.EventHandlerProcPtr;
    // Dropping inline function 'NewEventHandlerUPP'.
    // Dropping inline function 'DisposeEventHandlerUPP'.
    // Dropping inline function 'InvokeEventHandlerUPP'.
    this.OpaqueEventTargetRef = new ctypes.StructType("OpaqueEventTargetRef");
    this.EventTargetRef = this.OpaqueEventTargetRef.ptr;
    this.kEventTargetDontPropagate = 1;
    this.kEventTargetSendToAllHandlers = 2;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HITheme.h
function HITheme_h(lib) {
    CFDate_h.call(this, lib);
    Appearance_h.call(this, lib);
    CGBase_h.call(this, lib);
    CTFont_h.call(this, lib);
    HIGeometry_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._HITHEME_H)
        return;
    this._HITHEME_H = true;

    this.kHIThemeOrientationNormal = 0;
    this.kHIThemeOrientationInverted = 1;
    this.HIThemeOrientation = this.UInt32;
    this.kHIThemeSplitterAdornmentNone = 0;
    this.kHIThemeSplitterAdornmentMetal = 1;
    this.HIThemeSplitterAdornment = this.UInt32;
    this.kHIThemeGrowBoxKindNormal = 0;
    this.kHIThemeGrowBoxKindNone = 1;
    this.HIThemeGrowBoxKind = this.UInt32;
    this.kHIThemeGrowBoxSizeNormal = 0;
    this.kHIThemeGrowBoxSizeSmall = 1;
    this.HIThemeGrowBoxSize = this.UInt32;
    this.kHIThemeGroupBoxKindPrimary = 0;
    this.kHIThemeGroupBoxKindSecondary = 1;
    this.kHIThemeGroupBoxKindPrimaryOpaque = 3;
    this.kHIThemeGroupBoxKindSecondaryOpaque = 4;
    this.HIThemeGroupBoxKind = this.UInt32;
    this.kHIThemeHeaderKindWindow = 0;
    this.kHIThemeHeaderKindList = 1;
    this.HIThemeHeaderKind = this.UInt32;
    this.kHIThemeFrameTextFieldSquare = 0;
    this.kHIThemeFrameListBox = 1;
    this.kHIThemeFrameTextFieldRound = 1000;
    this.kHIThemeFrameTextFieldRoundSmall = 1001;
    this.kHIThemeFrameTextFieldRoundMini = 1002;
    this.HIThemeFrameKind = this.UInt32;
    this.kHIThemeMenuTitleDrawCondensed = 1;
    this.HIScrollBarTrackInfo = new ctypes.StructType("HIScrollBarTrackInfo", [{version: this.UInt32}, {enableState: this.ThemeTrackEnableState}, {pressState: this.ThemeTrackPressState}, {viewsize: this.CGFloat}]);
    this.HIThemeTrackDrawInfo = new ctypes.StructType("HIThemeTrackDrawInfo", []);
    this.HIThemeAnimationTimeInfo = new ctypes.StructType("HIThemeAnimationTimeInfo", [{start: this.CFAbsoluteTime}, {current: this.CFAbsoluteTime}]);
    this.HIThemeAnimationFrameInfo = new ctypes.StructType("HIThemeAnimationFrameInfo", [{index: this.UInt32}]);
    this.HIThemeButtonDrawInfo = new ctypes.StructType("HIThemeButtonDrawInfo", []);
    this.HIThemeButtonDrawInfoPtr = this.HIThemeButtonDrawInfo.ptr;
    this.HIThemeSplitterDrawInfo = new ctypes.StructType("HIThemeSplitterDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {adornment: this.HIThemeSplitterAdornment}]);
    this.HIThemeSplitterDrawInfoPtr = this.HIThemeSplitterDrawInfo.ptr;
    this.kHIThemeTabAdornmentNone = 0;
    this.kHIThemeTabAdornmentFocus = 4;
    this.kHIThemeTabAdornmentLeadingSeparator = 8;
    this.kHIThemeTabAdornmentTrailingSeparator = 16;
    this.HIThemeTabAdornment = this.UInt32;
    this.kHIThemeTabSizeNormal = 0;
    this.kHIThemeTabSizeSmall = 1;
    this.kHIThemeTabSizeMini = 3;
    this.HIThemeTabSize = this.UInt32;
    this.kHIThemeTabPositionFirst = 0;
    this.kHIThemeTabPositionMiddle = 1;
    this.kHIThemeTabPositionLast = 2;
    this.kHIThemeTabPositionOnly = 3;
    this.HIThemeTabPosition = this.UInt32;
    this.kHIThemeTabKindNormal = 0;
    this.HIThemeTabKind = this.UInt32;
    this.HIThemeTabDrawInfo = new ctypes.StructType("HIThemeTabDrawInfo", [{version: this.UInt32}, {style: this.ThemeTabStyle}, {direction: this.ThemeTabDirection}, {size: this.HIThemeTabSize}, {adornment: this.HIThemeTabAdornment}, {kind: this.HIThemeTabKind}, {position: this.HIThemeTabPosition}]);
    this.HIThemeTabDrawInfoVersionZero = new ctypes.StructType("HIThemeTabDrawInfoVersionZero", [{version: this.UInt32}, {style: this.ThemeTabStyle}, {direction: this.ThemeTabDirection}, {size: this.HIThemeTabSize}, {adornment: this.HIThemeTabAdornment}]);
    this.kHIThemeTabPaneAdornmentNormal = 0;
    this.HIThemeTabPaneAdornment = this.UInt32;
    this.HIThemeTabPaneDrawInfo = new ctypes.StructType("HIThemeTabPaneDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {direction: this.ThemeTabDirection}, {size: this.HIThemeTabSize}, {kind: this.HIThemeTabKind}, {adornment: this.HIThemeTabPaneAdornment}]);
    this.HIThemeTabPaneDrawInfoVersionZero = new ctypes.StructType("HIThemeTabPaneDrawInfoVersionZero", [{version: this.UInt32}, {state: this.ThemeDrawState}, {direction: this.ThemeTabDirection}, {size: this.HIThemeTabSize}]);
    this.kHIThemeMenuDrawInfoVersionZero = 0;
    this.kHIThemeMenuDrawInfoVersionOne = 1001;
    this.HIThemeMenuDrawInfo = new ctypes.StructType("HIThemeMenuDrawInfo", [{version: this.UInt32}, {menuType: this.ThemeMenuType}, {reserved1: ctypes.unsigned_long}, {reserved2: this.CGFloat}, {menuDirection: this.UInt32}, {reserved3: this.CGFloat}, {reserved4: this.CGFloat}]);
    this.HIThemeMenuDrawInfoPtr = this.HIThemeMenuDrawInfo.ptr;
    this.HIThemeMenuDrawInfoVersionZero = new ctypes.StructType("HIThemeMenuDrawInfoVersionZero", [{version: this.UInt32}, {menuType: this.ThemeMenuType}]);
    this.HIThemeMenuDrawInfoVersionZeroPtr = this.HIThemeMenuDrawInfoVersionZero.ptr;
    this.HIThemeMenuItemDrawInfo = new ctypes.StructType("HIThemeMenuItemDrawInfo", [{version: this.UInt32}, {itemType: this.ThemeMenuItemType}, {state: this.ThemeMenuState}]);
    this.HIThemeMenuItemDrawInfoPtr = this.HIThemeMenuItemDrawInfo.ptr;
    this.HIThemeFrameDrawInfo = new ctypes.StructType("HIThemeFrameDrawInfo", [{version: this.UInt32}, {kind: this.HIThemeFrameKind}, {state: this.ThemeDrawState}, {isFocused: this.Boolean}]);
    this.HIThemeFrameDrawInfoPtr = this.HIThemeFrameDrawInfo.ptr;
    this.HIThemeGroupBoxDrawInfo = new ctypes.StructType("HIThemeGroupBoxDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {kind: this.HIThemeGroupBoxKind}]);
    this.HIThemeGroupBoxDrawInfoPtr = this.HIThemeGroupBoxDrawInfo.ptr;
    this.HIThemeGrabberDrawInfo = new ctypes.StructType("HIThemeGrabberDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}]);
    this.HIThemeGrabberDrawInfoPtr = this.HIThemeGrabberDrawInfo.ptr;
    this.HIThemePlacardDrawInfo = new ctypes.StructType("HIThemePlacardDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}]);
    this.HIThemePlacardDrawInfoPtr = this.HIThemePlacardDrawInfo.ptr;
    this.HIThemeHeaderDrawInfo = new ctypes.StructType("HIThemeHeaderDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {kind: this.HIThemeHeaderKind}]);
    this.HIThemeHeaderDrawInfoPtr = this.HIThemeHeaderDrawInfo.ptr;
    this.HIThemeMenuBarDrawInfo = new ctypes.StructType("HIThemeMenuBarDrawInfo", [{version: this.UInt32}, {state: this.ThemeMenuBarState}, {attributes: this.OptionBits}]);
    this.HIThemeMenuBarDrawInfoPtr = this.HIThemeMenuBarDrawInfo.ptr;
    this.HIThemeMenuTitleDrawInfo = new ctypes.StructType("HIThemeMenuTitleDrawInfo", [{version: this.UInt32}, {state: this.ThemeMenuState}, {attributes: this.OptionBits}, {condensedTitleExtra: this.CGFloat}]);
    this.HIThemeMenuTitleDrawInfoPtr = this.HIThemeMenuTitleDrawInfo.ptr;
    this.HIThemeTickMarkDrawInfo = new ctypes.StructType("HIThemeTickMarkDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}]);
    this.HIThemeTickMarkDrawInfoPtr = this.HIThemeTickMarkDrawInfo.ptr;
    this.HIThemeWindowDrawInfo = new ctypes.StructType("HIThemeWindowDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {windowType: this.ThemeWindowType}, {attributes: this.ThemeWindowAttributes}, {titleHeight: this.CGFloat}, {titleWidth: this.CGFloat}]);
    this.HIThemeWindowDrawInfoPtr = this.HIThemeWindowDrawInfo.ptr;
    this.HIThemeWindowWidgetDrawInfo = new ctypes.StructType("HIThemeWindowWidgetDrawInfo", [{version: this.UInt32}, {widgetState: this.ThemeDrawState}, {widgetType: this.ThemeTitleBarWidget}, {windowState: this.ThemeDrawState}, {windowType: this.ThemeWindowType}, {attributes: this.ThemeWindowAttributes}, {titleHeight: this.CGFloat}, {titleWidth: this.CGFloat}]);
    this.HIThemeWindowWidgetDrawInfoPtr = this.HIThemeWindowWidgetDrawInfo.ptr;
    this.HIThemeSeparatorDrawInfo = new ctypes.StructType("HIThemeSeparatorDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}]);
    this.HIThemeSeparatorDrawInfoPtr = this.HIThemeSeparatorDrawInfo.ptr;
    this.HIThemeScrollBarDelimitersDrawInfo = new ctypes.StructType("HIThemeScrollBarDelimitersDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {windowType: this.ThemeWindowType}, {attributes: this.ThemeWindowAttributes}]);
    this.HIThemeScrollBarDelimitersDrawInfoPtr = this.HIThemeScrollBarDelimitersDrawInfo.ptr;
    this.HIThemeChasingArrowsDrawInfo = new ctypes.StructType("HIThemeChasingArrowsDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {index: this.UInt32}]);
    this.HIThemeChasingArrowsDrawInfoPtr = this.HIThemeChasingArrowsDrawInfo.ptr;
    this.HIThemePopupArrowDrawInfo = new ctypes.StructType("HIThemePopupArrowDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {orientation: this.ThemeArrowOrientation}, {size: this.ThemePopupArrowSize}]);
    this.HIThemePopupArrowDrawInfoPtr = this.HIThemePopupArrowDrawInfo.ptr;
    this.HIThemeGrowBoxDrawInfo = new ctypes.StructType("HIThemeGrowBoxDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {kind: this.HIThemeGrowBoxKind}, {direction: this.ThemeGrowDirection}, {size: this.HIThemeGrowBoxSize}]);
    this.HIThemeGrowBoxDrawInfoPtr = this.HIThemeGrowBoxDrawInfo.ptr;
    this.HIThemeBackgroundDrawInfo = new ctypes.StructType("HIThemeBackgroundDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {kind: this.ThemeBackgroundKind}]);
    this.HIThemeBackgroundDrawInfoPtr = this.HIThemeBackgroundDrawInfo.ptr;
    this.kHIThemeSegmentPositionFirst = 0;
    this.kHIThemeSegmentPositionMiddle = 1;
    this.kHIThemeSegmentPositionLast = 2;
    this.kHIThemeSegmentPositionOnly = 3;
    this.HIThemeSegmentPosition = this.UInt32;
    this.kHIThemeSegmentKindNormal = 0;
    this.kHIThemeSegmentKindTextured = 1;
    this.kHIThemeSegmentKindInset = 1;
    this.HIThemeSegmentKind = this.UInt32;
    this.kHIThemeSegmentSizeNormal = 0;
    this.kHIThemeSegmentSizeSmall = 1;
    this.kHIThemeSegmentSizeMini = 3;
    this.HIThemeSegmentSize = this.UInt32;
    this.kHIThemeSegmentAdornmentNone = 0;
    this.kHIThemeSegmentAdornmentFocus = 4;
    this.kHIThemeSegmentAdornmentLeadingSeparator = 8;
    this.kHIThemeSegmentAdornmentTrailingSeparator = 16;
    this.HIThemeSegmentAdornment = this.UInt32;
    this.HIThemeSegmentDrawInfo = new ctypes.StructType("HIThemeSegmentDrawInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {value: this.ThemeButtonValue}, {size: this.HIThemeSegmentSize}, {kind: this.HIThemeSegmentKind}, {position: this.HIThemeSegmentPosition}, {adornment: this.HIThemeSegmentAdornment}]);
    this.HIThemeSegmentDrawInfoPtr = this.HIThemeSegmentDrawInfo.ptr;
    this.kHIThemeTextTruncationNone = 0;
    this.kHIThemeTextTruncationMiddle = 1;
    this.kHIThemeTextTruncationEnd = 2;
    this.kHIThemeTextTruncationDefault = 3;
    this.HIThemeTextTruncation = this.UInt32;
    this.kHIThemeTextHorizontalFlushLeft = 0;
    this.kHIThemeTextHorizontalFlushCenter = 1;
    this.kHIThemeTextHorizontalFlushRight = 2;
    this.kHIThemeTextHorizontalFlushDefault = 3;
    this.HIThemeTextHorizontalFlush = this.UInt32;
    this.kHIThemeTextVerticalFlushTop = 0;
    this.kHIThemeTextVerticalFlushCenter = 1;
    this.kHIThemeTextVerticalFlushBottom = 2;
    this.kHIThemeTextVerticalFlushDefault = 3;
    this.HIThemeTextVerticalFlush = this.UInt32;
    this.kHIThemeTextBoxOptionNone = 0;
    this.kHIThemeTextBoxOptionStronglyVertical = 2;
    this.kHIThemeTextBoxOptionEngraved = 4;
    this.kHIThemeTextBoxOptionDontClip = 262144;
    this.HIThemeTextBoxOptions = this.OptionBits;
    this.kHIThemeTextInfoVersionZero = 0;
    this.kHIThemeTextInfoVersionOne = 1;
    this.HIThemeTextInfo = new ctypes.StructType("HIThemeTextInfo", [{version: this.UInt32}, {state: this.ThemeDrawState}, {fontID: this.ThemeFontID}, {horizontalFlushness: this.HIThemeTextHorizontalFlush}, {verticalFlushness: this.HIThemeTextVerticalFlush}, {options: this.HIThemeTextBoxOptions}, {truncationPosition: this.HIThemeTextTruncation}, {truncationMaxLines: this.UInt32}, {truncationHappened: this.Boolean}, {filler1: this.UInt8}, {font: this.CTFontRef}]);
    this.kHIThemeFocusRingOnly = 0;
    this.kHIThemeFocusRingAbove = 1;
    this.kHIThemeFocusRingBelow = 2;
    this.HIThemeFocusRing = this.UInt32;
    this.kThemeMetricScrollBarWidth = 0;
    this.kThemeMetricSmallScrollBarWidth = 1;
    this.kThemeMetricCheckBoxHeight = 2;
    this.kThemeMetricRadioButtonHeight = 3;
    this.kThemeMetricEditTextWhitespace = 4;
    this.kThemeMetricEditTextFrameOutset = 5;
    this.kThemeMetricListBoxFrameOutset = 6;
    this.kThemeMetricFocusRectOutset = 7;
    this.kThemeMetricImageWellThickness = 8;
    this.kThemeMetricScrollBarOverlap = 9;
    this.kThemeMetricLargeTabHeight = 10;
    this.kThemeMetricLargeTabCapsWidth = 11;
    this.kThemeMetricTabFrameOverlap = 12;
    this.kThemeMetricTabIndentOrStyle = 13;
    this.kThemeMetricTabOverlap = 14;
    this.kThemeMetricSmallTabHeight = 15;
    this.kThemeMetricSmallTabCapsWidth = 16;
    this.kThemeMetricPushButtonHeight = 19;
    this.kThemeMetricListHeaderHeight = 20;
    this.kThemeMetricDisclosureTriangleHeight = 25;
    this.kThemeMetricDisclosureTriangleWidth = 26;
    this.kThemeMetricLittleArrowsHeight = 27;
    this.kThemeMetricLittleArrowsWidth = 28;
    this.kThemeMetricPopupButtonHeight = 30;
    this.kThemeMetricSmallPopupButtonHeight = 31;
    this.kThemeMetricLargeProgressBarThickness = 32;
    this.kThemeMetricPullDownHeight = 33;
    this.kThemeMetricSmallPullDownHeight = 34;
    this.kThemeMetricResizeControlHeight = 38;
    this.kThemeMetricSmallResizeControlHeight = 39;
    this.kThemeMetricHSliderHeight = 41;
    this.kThemeMetricHSliderTickHeight = 42;
    this.kThemeMetricVSliderWidth = 45;
    this.kThemeMetricVSliderTickWidth = 46;
    this.kThemeMetricTitleBarControlsHeight = 49;
    this.kThemeMetricCheckBoxWidth = 50;
    this.kThemeMetricRadioButtonWidth = 52;
    this.kThemeMetricNormalProgressBarThickness = 58;
    this.kThemeMetricProgressBarShadowOutset = 59;
    this.kThemeMetricSmallProgressBarShadowOutset = 60;
    this.kThemeMetricPrimaryGroupBoxContentInset = 61;
    this.kThemeMetricSecondaryGroupBoxContentInset = 62;
    this.kThemeMetricMenuMarkColumnWidth = 63;
    this.kThemeMetricMenuExcludedMarkColumnWidth = 64;
    this.kThemeMetricMenuMarkIndent = 65;
    this.kThemeMetricMenuTextLeadingEdgeMargin = 66;
    this.kThemeMetricMenuTextTrailingEdgeMargin = 67;
    this.kThemeMetricMenuIndentWidth = 68;
    this.kThemeMetricMenuIconTrailingEdgeMargin = 69;
    this.kThemeMetricDisclosureButtonHeight = 17;
    this.kThemeMetricRoundButtonSize = 18;
    this.kThemeMetricSmallCheckBoxHeight = 21;
    this.kThemeMetricDisclosureButtonWidth = 22;
    this.kThemeMetricSmallDisclosureButtonHeight = 23;
    this.kThemeMetricSmallDisclosureButtonWidth = 24;
    this.kThemeMetricPaneSplitterHeight = 29;
    this.kThemeMetricSmallPushButtonHeight = 35;
    this.kThemeMetricSmallRadioButtonHeight = 36;
    this.kThemeMetricRelevanceIndicatorHeight = 37;
    this.kThemeMetricLargeRoundButtonSize = 40;
    this.kThemeMetricSmallHSliderHeight = 43;
    this.kThemeMetricSmallHSliderTickHeight = 44;
    this.kThemeMetricSmallVSliderWidth = 47;
    this.kThemeMetricSmallVSliderTickWidth = 48;
    this.kThemeMetricSmallCheckBoxWidth = 51;
    this.kThemeMetricSmallRadioButtonWidth = 53;
    this.kThemeMetricSmallHSliderMinThumbWidth = 54;
    this.kThemeMetricSmallVSliderMinThumbHeight = 55;
    this.kThemeMetricSmallHSliderTickOffset = 56;
    this.kThemeMetricSmallVSliderTickOffset = 57;
    this.kThemeMetricComboBoxLargeBottomShadowOffset = 70;
    this.kThemeMetricComboBoxLargeRightShadowOffset = 71;
    this.kThemeMetricComboBoxSmallBottomShadowOffset = 72;
    this.kThemeMetricComboBoxSmallRightShadowOffset = 73;
    this.kThemeMetricComboBoxLargeDisclosureWidth = 74;
    this.kThemeMetricComboBoxSmallDisclosureWidth = 75;
    this.kThemeMetricRoundTextFieldContentInsetLeft = 76;
    this.kThemeMetricRoundTextFieldContentInsetRight = 77;
    this.kThemeMetricRoundTextFieldContentInsetBottom = 78;
    this.kThemeMetricRoundTextFieldContentInsetTop = 79;
    this.kThemeMetricRoundTextFieldContentHeight = 80;
    this.kThemeMetricComboBoxMiniBottomShadowOffset = 81;
    this.kThemeMetricComboBoxMiniDisclosureWidth = 82;
    this.kThemeMetricComboBoxMiniRightShadowOffset = 83;
    this.kThemeMetricLittleArrowsMiniHeight = 84;
    this.kThemeMetricLittleArrowsMiniWidth = 85;
    this.kThemeMetricLittleArrowsSmallHeight = 86;
    this.kThemeMetricLittleArrowsSmallWidth = 87;
    this.kThemeMetricMiniCheckBoxHeight = 88;
    this.kThemeMetricMiniCheckBoxWidth = 89;
    this.kThemeMetricMiniDisclosureButtonHeight = 90;
    this.kThemeMetricMiniDisclosureButtonWidth = 91;
    this.kThemeMetricMiniHSliderHeight = 92;
    this.kThemeMetricMiniHSliderMinThumbWidth = 93;
    this.kThemeMetricMiniHSliderTickHeight = 94;
    this.kThemeMetricMiniHSliderTickOffset = 95;
    this.kThemeMetricMiniPopupButtonHeight = 96;
    this.kThemeMetricMiniPullDownHeight = 97;
    this.kThemeMetricMiniPushButtonHeight = 98;
    this.kThemeMetricMiniRadioButtonHeight = 99;
    this.kThemeMetricMiniRadioButtonWidth = 100;
    this.kThemeMetricMiniTabCapsWidth = 101;
    this.kThemeMetricMiniTabFrameOverlap = 102;
    this.kThemeMetricMiniTabHeight = 103;
    this.kThemeMetricMiniTabOverlap = 104;
    this.kThemeMetricMiniVSliderMinThumbHeight = 105;
    this.kThemeMetricMiniVSliderTickOffset = 106;
    this.kThemeMetricMiniVSliderTickWidth = 107;
    this.kThemeMetricMiniVSliderWidth = 108;
    this.kThemeMetricRoundTextFieldContentInsetWithIconLeft = 109;
    this.kThemeMetricRoundTextFieldContentInsetWithIconRight = 110;
    this.kThemeMetricRoundTextFieldMiniContentHeight = 111;
    this.kThemeMetricRoundTextFieldMiniContentInsetBottom = 112;
    this.kThemeMetricRoundTextFieldMiniContentInsetLeft = 113;
    this.kThemeMetricRoundTextFieldMiniContentInsetRight = 114;
    this.kThemeMetricRoundTextFieldMiniContentInsetTop = 115;
    this.kThemeMetricRoundTextFieldMiniContentInsetWithIconLeft = 116;
    this.kThemeMetricRoundTextFieldMiniContentInsetWithIconRight = 117;
    this.kThemeMetricRoundTextFieldSmallContentHeight = 118;
    this.kThemeMetricRoundTextFieldSmallContentInsetBottom = 119;
    this.kThemeMetricRoundTextFieldSmallContentInsetLeft = 120;
    this.kThemeMetricRoundTextFieldSmallContentInsetRight = 121;
    this.kThemeMetricRoundTextFieldSmallContentInsetTop = 122;
    this.kThemeMetricRoundTextFieldSmallContentInsetWithIconLeft = 123;
    this.kThemeMetricRoundTextFieldSmallContentInsetWithIconRight = 124;
    this.kThemeMetricSmallTabFrameOverlap = 125;
    this.kThemeMetricSmallTabOverlap = 126;
    this.kThemeMetricSmallPaneSplitterHeight = 127;
    this.kThemeMetricHSliderTickOffset = 128;
    this.kThemeMetricVSliderTickOffset = 129;
    this.kThemeMetricSliderMinThumbHeight = 130;
    this.kThemeMetricSliderMinThumbWidth = 131;
    this.kThemeMetricScrollBarMinThumbHeight = 132;
    this.kThemeMetricScrollBarMinThumbWidth = 133;
    this.kThemeMetricSmallScrollBarMinThumbHeight = 134;
    this.kThemeMetricSmallScrollBarMinThumbWidth = 135;
    this.kThemeMetricButtonRoundedHeight = 136;
    this.kThemeMetricButtonRoundedRecessedHeight = 137;
    this.kThemeMetricSeparatorSize = 138;
    this.kThemeMetricTexturedPushButtonHeight = 139;
    this.kThemeMetricTexturedSmallPushButtonHeight = 140;
    this.ThemeMetric = this.UInt32;
    this.kThemeMetricCheckBoxGlyphHeight = 2;
    this.kThemeMetricRadioButtonGlyphHeight = 3;
    this.kThemeMetricDisclosureButtonSize = 17;
    this.kThemeMetricBestListHeaderHeight = 20;
    this.kThemeMetricSmallProgressBarThickness = 58;
    this.kThemeMetricProgressBarThickness = 32;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Drag.h
function Drag_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._DRAG_H)
        return;
    this._DRAG_H = true;

    this.OpaqueDragRef = new ctypes.StructType("OpaqueDragRef");
    this.DragRef = this.OpaqueDragRef.ptr;
    this.DragItemRef = this.URefCon;
    this.FlavorType = this.OSType;
    this.DragAttributes = this.OptionBits;
    this.kDragHasLeftSenderWindow = 1;
    this.kDragInsideSenderApplication = 2;
    this.kDragInsideSenderWindow = 4;
    this.DragBehaviors = this.OptionBits;
    this.kDragBehaviorNone = 0;
    this.kDragBehaviorZoomBackAnimation = 1;
    this.DragImageFlags = this.OptionBits;
    this.kDragRegionAndImage = 16;
    this.kDragDoNotScaleImage = 32;
    this.kDragStandardTranslucency = 0;
    this.kDragDarkTranslucency = 1;
    this.kDragDarkerTranslucency = 2;
    this.kDragOpaqueTranslucency = 3;
    this.FlavorFlags = this.UInt32;
    this.flavorSenderOnly = 1;
    this.flavorSenderTranslated = 2;
    this.flavorNotSaved = 4;
    this.flavorSystemTranslated = 256;
    this.flavorDataPromised = 512;
    this.kFlavorTypeClippingName = 1668050541;
    this.kFlavorTypeClippingFilename = 1668048494;
    this.kFlavorTypeUnicodeClippingName = 1969450094;
    this.kFlavorTypeUnicodeClippingFilename = 1969450086;
    this.kFlavorTypeDragToTrashOnly = 1717859444;
    this.kFlavorTypeFinderNoTrackingBehavior = 1718514786;
    this.DragActions = this.OptionBits;
    this.kDragActionNothing = 0;
    this.kDragActionCopy = 1;
    this.kDragActionAlias = 2;
    this.kDragActionGeneric = 4;
    this.kDragActionPrivate = 8;
    this.kDragActionMove = 16;
    this.kDragActionDelete = 32;
    this.kDragActionAll = -1;
    this.DragInputProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.Point.ptr, this.SInt16.ptr, ctypes.void_t.ptr, this.DragRef]).ptr;
    this.DragInputUPP = this.DragInputProcPtr;
    // Dropping inline function 'NewDragInputUPP'.
    // Dropping inline function 'DisposeDragInputUPP'.
    // Dropping inline function 'InvokeDragInputUPP'.
    this.kDragFlavorTypeHFS = 1751544608;
    this.kDragFlavorTypePromiseHFS = 1885890163;
    this.flavorTypeHFS = 1751544608;
    this.flavorTypePromiseHFS = 1885890163;
    this.kDragPromisedFlavorFindFile = 1918332209;
    this.kDragPromisedFlavor = 1718842192;
    this.kDragPseudoCreatorVolumeOrDirectory = 1296122707;
    this.kDragPseudoFileTypeVolume = 1684632427;
    this.kDragPseudoFileTypeDirectory = 1718578276;
    this.HFSFlavor = new ctypes.StructType("HFSFlavor", [{fileType: this.OSType}, {fileCreator: this.OSType}, {fdFlags: this.UInt16}, {fileSpec: this.FSSpec}]);
    this.PromiseHFSFlavor = new ctypes.StructType("PromiseHFSFlavor", [{fileType: this.OSType}, {fileCreator: this.OSType}, {fdFlags: this.UInt16}, {promisedFlavor: this.FlavorType}]);
    this.DragTrackingMessage = this.SInt16;
    this.kDragTrackingEnterHandler = 1;
    this.kDragTrackingEnterWindow = 2;
    this.kDragTrackingInWindow = 3;
    this.kDragTrackingLeaveWindow = 4;
    this.kDragTrackingLeaveHandler = 5;
    this.DragRegionMessage = this.SInt16;
    this.kDragRegionBegin = 1;
    this.kDragRegionDraw = 2;
    this.kDragRegionHide = 3;
    this.kDragRegionIdle = 4;
    this.kDragRegionEnd = 5;
    this.ZoomAcceleration = this.SInt16;
    this.kZoomNoAcceleration = 0;
    this.kZoomAccelerate = 1;
    this.kZoomDecelerate = 2;
    this.kDragStandardDropLocationTrash = 1953657704;
    this.kDragStandardDropLocationUnknown = 1970170734;
    this.StandardDropLocation = this.OSType;
    this.DragSendDataProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.FlavorType, ctypes.void_t.ptr, this.DragItemRef, this.DragRef]).ptr;
    this.DragTrackingHandlerProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.DragTrackingMessage, this.WindowRef, ctypes.void_t.ptr, this.DragRef]).ptr;
    this.DragReceiveHandlerProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.WindowRef, ctypes.void_t.ptr, this.DragRef]).ptr;
    this.DragDrawingProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.DragRegionMessage, this.RgnHandle, this.Point, this.RgnHandle, this.Point, ctypes.void_t.ptr, this.DragRef]).ptr;
    this.DragSendDataUPP = this.DragSendDataProcPtr;
    this.DragTrackingHandlerUPP = this.DragTrackingHandlerProcPtr;
    this.DragReceiveHandlerUPP = this.DragReceiveHandlerProcPtr;
    this.DragDrawingUPP = this.DragDrawingProcPtr;
    // Dropping inline function 'NewDragSendDataUPP'.
    // Dropping inline function 'NewDragTrackingHandlerUPP'.
    // Dropping inline function 'NewDragReceiveHandlerUPP'.
    // Dropping inline function 'NewDragDrawingUPP'.
    // Dropping inline function 'DisposeDragSendDataUPP'.
    // Dropping inline function 'DisposeDragTrackingHandlerUPP'.
    // Dropping inline function 'DisposeDragReceiveHandlerUPP'.
    // Dropping inline function 'DisposeDragDrawingUPP'.
    // Dropping inline function 'InvokeDragSendDataUPP'.
    // Dropping inline function 'InvokeDragTrackingHandlerUPP'.
    // Dropping inline function 'InvokeDragReceiveHandlerUPP'.
    // Dropping inline function 'InvokeDragDrawingUPP'.
    this.DragReference = this.DragRef;
    this.ItemReference = this.DragItemRef;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Events.h
function Events_h(lib) {
    OSUtils_h.call(this, lib);
    MacTypes_h.call(this, lib);
    Endian_h.call(this, lib);

    if (this._EVENTS_H)
        return;
    this._EVENTS_H = true;

    this.EventKind = this.UInt16;
    this.EventMask = this.UInt16;
    this.nullEvent = 0;
    this.mouseDown = 1;
    this.mouseUp = 2;
    this.keyDown = 3;
    this.keyUp = 4;
    this.autoKey = 5;
    this.updateEvt = 6;
    this.diskEvt = 7;
    this.activateEvt = 8;
    this.osEvt = 15;
    this.kHighLevelEvent = 23;
    this.mDownMask = 2;
    this.mUpMask = 4;
    this.keyDownMask = 8;
    this.keyUpMask = 16;
    this.autoKeyMask = 32;
    this.updateMask = 64;
    this.diskMask = 128;
    this.activMask = 256;
    this.highLevelEventMask = 1024;
    this.osMask = 32768;
    this.everyEvent = 65535;
    this.charCodeMask = 255;
    this.keyCodeMask = 65280;
    this.adbAddrMask = 16711680;
    this.osEvtMessageMask = -16777216;
    this.mouseMovedMessage = 250;
    this.suspendResumeMessage = 1;
    this.resumeFlag = 1;
    this.EventModifiers = this.UInt16;
    this.activeFlagBit = 0;
    this.btnStateBit = 7;
    this.cmdKeyBit = 8;
    this.shiftKeyBit = 9;
    this.alphaLockBit = 10;
    this.optionKeyBit = 11;
    this.controlKeyBit = 12;
    this.rightShiftKeyBit = 13;
    this.rightOptionKeyBit = 14;
    this.rightControlKeyBit = 15;
    this.activeFlag = 1;
    this.btnState = 128;
    this.cmdKey = 256;
    this.shiftKey = 512;
    this.alphaLock = 1024;
    this.optionKey = 2048;
    this.controlKey = 4096;
    this.rightShiftKey = 8192;
    this.rightOptionKey = 16384;
    this.rightControlKey = 32768;
    this.kNullCharCode = 0;
    this.kHomeCharCode = 1;
    this.kEnterCharCode = 3;
    this.kEndCharCode = 4;
    this.kHelpCharCode = 5;
    this.kBellCharCode = 7;
    this.kBackspaceCharCode = 8;
    this.kTabCharCode = 9;
    this.kLineFeedCharCode = 10;
    this.kVerticalTabCharCode = 11;
    this.kPageUpCharCode = 11;
    this.kFormFeedCharCode = 12;
    this.kPageDownCharCode = 12;
    this.kReturnCharCode = 13;
    this.kFunctionKeyCharCode = 16;
    this.kCommandCharCode = 17;
    this.kCheckCharCode = 18;
    this.kDiamondCharCode = 19;
    this.kAppleLogoCharCode = 20;
    this.kEscapeCharCode = 27;
    this.kClearCharCode = 27;
    this.kLeftArrowCharCode = 28;
    this.kRightArrowCharCode = 29;
    this.kUpArrowCharCode = 30;
    this.kDownArrowCharCode = 31;
    this.kSpaceCharCode = 32;
    this.kDeleteCharCode = 127;
    this.kBulletCharCode = 165;
    this.kNonBreakingSpaceCharCode = 202;
    this.kShiftUnicode = 8679;
    this.kControlUnicode = 8963;
    this.kOptionUnicode = 8997;
    this.kCommandUnicode = 8984;
    this.kPencilUnicode = 9998;
    this.kPencilLeftUnicode = 63490;
    this.kCheckUnicode = 10003;
    this.kDiamondUnicode = 9670;
    this.kBulletUnicode = 8226;
    this.kAppleLogoUnicode = 63743;
    this.kVK_ANSI_A = 0;
    this.kVK_ANSI_S = 1;
    this.kVK_ANSI_D = 2;
    this.kVK_ANSI_F = 3;
    this.kVK_ANSI_H = 4;
    this.kVK_ANSI_G = 5;
    this.kVK_ANSI_Z = 6;
    this.kVK_ANSI_X = 7;
    this.kVK_ANSI_C = 8;
    this.kVK_ANSI_V = 9;
    this.kVK_ANSI_B = 11;
    this.kVK_ANSI_Q = 12;
    this.kVK_ANSI_W = 13;
    this.kVK_ANSI_E = 14;
    this.kVK_ANSI_R = 15;
    this.kVK_ANSI_Y = 16;
    this.kVK_ANSI_T = 17;
    this.kVK_ANSI_1 = 18;
    this.kVK_ANSI_2 = 19;
    this.kVK_ANSI_3 = 20;
    this.kVK_ANSI_4 = 21;
    this.kVK_ANSI_6 = 22;
    this.kVK_ANSI_5 = 23;
    this.kVK_ANSI_Equal = 24;
    this.kVK_ANSI_9 = 25;
    this.kVK_ANSI_7 = 26;
    this.kVK_ANSI_Minus = 27;
    this.kVK_ANSI_8 = 28;
    this.kVK_ANSI_0 = 29;
    this.kVK_ANSI_RightBracket = 30;
    this.kVK_ANSI_O = 31;
    this.kVK_ANSI_U = 32;
    this.kVK_ANSI_LeftBracket = 33;
    this.kVK_ANSI_I = 34;
    this.kVK_ANSI_P = 35;
    this.kVK_ANSI_L = 37;
    this.kVK_ANSI_J = 38;
    this.kVK_ANSI_Quote = 39;
    this.kVK_ANSI_K = 40;
    this.kVK_ANSI_Semicolon = 41;
    this.kVK_ANSI_Backslash = 42;
    this.kVK_ANSI_Comma = 43;
    this.kVK_ANSI_Slash = 44;
    this.kVK_ANSI_N = 45;
    this.kVK_ANSI_M = 46;
    this.kVK_ANSI_Period = 47;
    this.kVK_ANSI_Grave = 50;
    this.kVK_ANSI_KeypadDecimal = 65;
    this.kVK_ANSI_KeypadMultiply = 67;
    this.kVK_ANSI_KeypadPlus = 69;
    this.kVK_ANSI_KeypadClear = 71;
    this.kVK_ANSI_KeypadDivide = 75;
    this.kVK_ANSI_KeypadEnter = 76;
    this.kVK_ANSI_KeypadMinus = 78;
    this.kVK_ANSI_KeypadEquals = 81;
    this.kVK_ANSI_Keypad0 = 82;
    this.kVK_ANSI_Keypad1 = 83;
    this.kVK_ANSI_Keypad2 = 84;
    this.kVK_ANSI_Keypad3 = 85;
    this.kVK_ANSI_Keypad4 = 86;
    this.kVK_ANSI_Keypad5 = 87;
    this.kVK_ANSI_Keypad6 = 88;
    this.kVK_ANSI_Keypad7 = 89;
    this.kVK_ANSI_Keypad8 = 91;
    this.kVK_ANSI_Keypad9 = 92;
    this.kVK_Return = 36;
    this.kVK_Tab = 48;
    this.kVK_Space = 49;
    this.kVK_Delete = 51;
    this.kVK_Escape = 53;
    this.kVK_Command = 55;
    this.kVK_Shift = 56;
    this.kVK_CapsLock = 57;
    this.kVK_Option = 58;
    this.kVK_Control = 59;
    this.kVK_RightShift = 60;
    this.kVK_RightOption = 61;
    this.kVK_RightControl = 62;
    this.kVK_Function = 63;
    this.kVK_F17 = 64;
    this.kVK_VolumeUp = 72;
    this.kVK_VolumeDown = 73;
    this.kVK_Mute = 74;
    this.kVK_F18 = 79;
    this.kVK_F19 = 80;
    this.kVK_F20 = 90;
    this.kVK_F5 = 96;
    this.kVK_F6 = 97;
    this.kVK_F7 = 98;
    this.kVK_F3 = 99;
    this.kVK_F8 = 100;
    this.kVK_F9 = 101;
    this.kVK_F11 = 103;
    this.kVK_F13 = 105;
    this.kVK_F16 = 106;
    this.kVK_F14 = 107;
    this.kVK_F10 = 109;
    this.kVK_F12 = 111;
    this.kVK_F15 = 113;
    this.kVK_Help = 114;
    this.kVK_Home = 115;
    this.kVK_PageUp = 116;
    this.kVK_ForwardDelete = 117;
    this.kVK_F4 = 118;
    this.kVK_End = 119;
    this.kVK_F2 = 120;
    this.kVK_PageDown = 121;
    this.kVK_F1 = 122;
    this.kVK_LeftArrow = 123;
    this.kVK_RightArrow = 124;
    this.kVK_DownArrow = 125;
    this.kVK_UpArrow = 126;
    this.kVK_ISO_Section = 10;
    this.kVK_JIS_Yen = 93;
    this.kVK_JIS_Underscore = 94;
    this.kVK_JIS_KeypadComma = 95;
    this.kVK_JIS_Eisu = 102;
    this.kVK_JIS_Kana = 104;
    this.EventRecord = new ctypes.StructType("EventRecord", [{what: this.EventKind}, {message: ctypes.unsigned_long}, {when: this.UInt32}, {where: this.Point}, {modifiers: this.EventModifiers}]);
    this.FKEYProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, []).ptr;
    this.FKEYUPP = this.FKEYProcPtr;
    this.KeyMap = this.BigEndianUInt32.array(4);
    this.KeyMapByteArray = this.UInt8.array(16);
    this.networkEvt = 10;
    this.driverEvt = 11;
    this.app1Evt = 12;
    this.app2Evt = 13;
    this.app3Evt = 14;
    this.app4Evt = 15;
    this.networkMask = 1024;
    this.driverMask = 2048;
    this.app1Mask = 4096;
    this.app2Mask = 8192;
    this.app3Mask = 16384;
    this.app4Mask = 32768;
    this.EvQEl = new ctypes.StructType("EvQEl", [{qLink: this.QElemPtr}, {qType: this.SInt16}, {evtQWhat: this.EventKind}, {evtQMessage: ctypes.unsigned_long}, {evtQWhen: this.UInt32}, {evtQWhere: this.Point}, {evtQModifiers: this.EventModifiers}]);
    this.EvQElPtr = this.EvQEl.ptr;
    this.GetNextEventFilterProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.EventRecord.ptr, this.Boolean.ptr]).ptr;
    this.GetNextEventFilterUPP = this.GetNextEventFilterProcPtr;
    this.GNEFilterUPP = this.GetNextEventFilterUPP;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/TranslationExtensions.h
function TranslationExtensions_h(lib) {
    Components_h.call(this, lib);
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._TRANSLATIONEXTENSIONS_H)
        return;
    this._TRANSLATIONEXTENSIONS_H = true;

    this.kSupportsFileTranslation = 1;
    this.kSupportsScrapTranslation = 2;
    this.kTranslatorCanGenerateFilename = 4;
    this.FileType = this.OSType;
    this.ScrapType = this.ResType;
    this.TranslationAttributes = this.UInt32;
    this.taDstDocNeedsResourceFork = 1;
    this.taDstIsAppTranslation = 2;
    this.FileTypeSpec = new ctypes.StructType("FileTypeSpec", [{format: this.FileType}, {hint: ctypes.long}, {flags: this.TranslationAttributes}, {catInfoType: this.OSType}, {catInfoCreator: this.OSType}]);
    this.FileTranslationList = new ctypes.StructType("FileTranslationList", [{modDate: ctypes.unsigned_long}, {groupCount: ctypes.unsigned_long}]);
    this.FileTranslationListPtr = this.FileTranslationList.ptr;
    this.FileTranslationListHandle = this.FileTranslationListPtr.ptr;
    this.ScrapTypeSpec = new ctypes.StructType("ScrapTypeSpec", [{format: this.ScrapType}, {hint: ctypes.long}]);
    this.ScrapTranslationList = new ctypes.StructType("ScrapTranslationList", [{modDate: ctypes.unsigned_long}, {groupCount: ctypes.unsigned_long}]);
    this.ScrapTranslationListPtr = this.ScrapTranslationList.ptr;
    this.ScrapTranslationListHandle = this.ScrapTranslationListPtr.ptr;
    this.TranslationRefNum = ctypes.long;
    this.kTranslateGetFileTranslationList = 0;
    this.kTranslateIdentifyFile = 1;
    this.kTranslateTranslateFile = 2;
    this.kTranslateGetTranslatedFilename = 3;
    this.kTranslateGetScrapTranslationList = 10;
    this.kTranslateIdentifyScrap = 11;
    this.kTranslateTranslateScrap = 12;
    this.kTranslateGetScrapTranslationListConsideringData = 13;
    this.DoGetFileTranslationListProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ComponentResult, [this.ComponentInstance, this.FileTranslationListHandle]).ptr;
    this.DoIdentifyFileProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ComponentResult, [this.ComponentInstance, this.FSSpec.ptr, this.FileType.ptr]).ptr;
    this.DoTranslateFileProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ComponentResult, [this.ComponentInstance, this.TranslationRefNum, this.FSSpec.ptr, this.FileType, ctypes.long, this.FSSpec.ptr, this.FileType, ctypes.long]).ptr;
    this.DoGetTranslatedFilenameProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ComponentResult, [this.ComponentInstance, this.FileType, ctypes.long, this.FSSpec.ptr]).ptr;
    this.DoGetScrapTranslationListProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ComponentResult, [this.ComponentInstance, this.ScrapTranslationListHandle]).ptr;
    this.DoIdentifyScrapProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ComponentResult, [this.ComponentInstance, ctypes.void_t.ptr, this.Size, this.ScrapType.ptr]).ptr;
    this.DoTranslateScrapProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ComponentResult, [this.ComponentInstance, this.TranslationRefNum, ctypes.void_t.ptr, this.Size, this.ScrapType, ctypes.long, this.Handle, this.ScrapType, ctypes.long]).ptr;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Controls.h
function Controls_h(lib) {
    Collections_h.call(this, lib);
    Events_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    HIObject_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._CONTROLS_H)
        return;
    this._CONTROLS_H = true;

    this.kControlDefProcType = 1128547654;
    this.kControlTemplateResourceType = 1129206860;
    this.kControlColorTableResourceType = 1667462242;
    this.kControlDefProcResourceType = 1128547654;
    this.ControlTemplate = new ctypes.StructType("ControlTemplate", [{controlRect: this.Rect}, {controlValue: this.SInt16}, {controlVisible: this.Boolean}, {fill: this.UInt8}, {controlMaximum: this.SInt16}, {controlMinimum: this.SInt16}, {controlDefProcID: this.SInt16}, {controlReference: this.SInt32}, {controlTitle: this.Str255}]);
    this.ControlTemplatePtr = this.ControlTemplate.ptr;
    this.ControlTemplateHandle = this.ControlTemplatePtr.ptr;
    this.ControlPartCode = this.SInt16;
    this.ControlActionProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.ControlPartCode]).ptr;
    this.ControlActionUPP = this.ControlActionProcPtr;
    // Dropping inline function 'NewControlActionUPP'.
    // Dropping inline function 'DisposeControlActionUPP'.
    // Dropping inline function 'InvokeControlActionUPP'.
    this.cFrameColor = 0;
    this.cBodyColor = 1;
    this.cTextColor = 2;
    this.cThumbColor = 3;
    this.kNumberCtlCTabEntries = 4;
    this.CtlCTab = new ctypes.StructType("CtlCTab", [{ccSeed: this.SInt32}, {ccRider: this.SInt16}, {ctSize: this.SInt16}, {ctTable: this.ColorSpec.array(4)}]);
    this.CCTabPtr = this.CtlCTab.ptr;
    this.CCTabHandle = this.CCTabPtr.ptr;
    this.ControlVariant = this.SInt16;
    this.kControlNoVariant = 0;
    this.kControlUsesOwningWindowsFontVariant = 8;
    this.kControlNoPart = 0;
    this.kControlIndicatorPart = 129;
    this.kControlDisabledPart = 254;
    this.kControlInactivePart = 255;
    this.kControlEntireControl = 0;
    this.kControlStructureMetaPart = -1;
    this.kControlContentMetaPart = -2;
    this.kControlOpaqueMetaPart = -3;
    this.kControlClickableMetaPart = -4;
    this.kControlFocusNoPart = 0;
    this.kControlFocusNextPart = -1;
    this.kControlFocusPrevPart = -2;
    this.ControlFocusPart = this.ControlPartCode;
    this.kControlCollectionTagBounds = 1651471726;
    this.kControlCollectionTagValue = 1986096245;
    this.kControlCollectionTagMinimum = 1835626016;
    this.kControlCollectionTagMaximum = 1835104288;
    this.kControlCollectionTagViewSize = 1986618743;
    this.kControlCollectionTagVisibility = 1986622313;
    this.kControlCollectionTagRefCon = 1919247971;
    this.kControlCollectionTagTitle = 1953068140;
    this.kControlCollectionTagUnicodeTitle = 1970566252;
    this.kControlCollectionTagIDSignature = 1768190825;
    this.kControlCollectionTagIDID = 1768188260;
    this.kControlCollectionTagCommand = 1668113440;
    this.kControlCollectionTagVarCode = 1986097763;
    this.kControlContentTextOnly = 0;
    this.kControlNoContent = 0;
    this.kControlContentIconSuiteRes = 1;
    this.kControlContentCIconRes = 2;
    this.kControlContentPictRes = 3;
    this.kControlContentICONRes = 4;
    this.kControlContentAlertIconRes = 5;
    this.kControlContentIconSuiteHandle = 129;
    this.kControlContentCIconHandle = 130;
    this.kControlContentPictHandle = 131;
    this.kControlContentIconRef = 132;
    this.kControlContentICON = 133;
    this.kControlContentCGImageRef = 134;
    this.ControlContentType = this.SInt16;
    this.ControlImageContentInfo = new ctypes.StructType("ControlImageContentInfo", []);
    this.ControlImageContentInfoPtr = this.ControlImageContentInfo.ptr;
    this.ControlButtonContentInfo = this.ControlImageContentInfo;
    this.ControlButtonContentInfoPtr = this.ControlButtonContentInfo.ptr;
    this.kControlKeyScriptBehaviorAllowAnyScript = 1634629920;
    this.kControlKeyScriptBehaviorPrefersRoman = 1886547310;
    this.kControlKeyScriptBehaviorRequiresRoman = 1920101742;
    this.ControlKeyScriptBehavior = this.UInt32;
    this.kControlFontBigSystemFont = -1;
    this.kControlFontSmallSystemFont = -2;
    this.kControlFontSmallBoldSystemFont = -3;
    this.kControlFontViewSystemFont = -4;
    this.kControlFontMiniSystemFont = -5;
    this.kControlUseFontMask = 1;
    this.kControlUseFaceMask = 2;
    this.kControlUseSizeMask = 4;
    this.kControlUseForeColorMask = 8;
    this.kControlUseBackColorMask = 16;
    this.kControlUseModeMask = 32;
    this.kControlUseJustMask = 64;
    this.kControlUseAllMask = 255;
    this.kControlAddFontSizeMask = 256;
    this.kControlAddToMetaFontMask = 512;
    this.kControlUseThemeFontIDMask = 128;
    this.ControlFontStyleRec = new ctypes.StructType("ControlFontStyleRec", [{flags: this.SInt16}, {font: this.SInt16}, {size: this.SInt16}, {style: this.SInt16}, {mode: this.SInt16}, {just: this.SInt16}, {foreColor: this.RGBColor}, {backColor: this.RGBColor}]);
    this.ControlFontStylePtr = this.ControlFontStyleRec.ptr;
    this.kDoNotActivateAndIgnoreClick = 0;
    this.kDoNotActivateAndHandleClick = 1;
    this.kActivateAndIgnoreClick = 2;
    this.kActivateAndHandleClick = 3;
    this.ClickActivationResult = this.UInt32;
    this.kControlFontStyleTag = 1718578804;
    this.kControlKeyFilterTag = 1718383730;
    this.kControlKindTag = 1802071652;
    this.kControlSizeTag = 1936292453;
    this.kControlContentTag = 1668247156;
    this.kControlThemeTextFontTag = 1952999028;
    this.kControlThemeTextHorizontalFlushTag = 1952999526;
    this.kControlThemeTextVerticalFlushTag = 1953003110;
    this.kControlThemeTextTruncationTag = 1953002612;
    this.kControlThemeTextInfoTag = 1953002601;
    this.kControlSupportsGhosting = 1;
    this.kControlSupportsEmbedding = 2;
    this.kControlSupportsFocus = 4;
    this.kControlWantsIdle = 8;
    this.kControlWantsActivate = 16;
    this.kControlHandlesTracking = 32;
    this.kControlSupportsDataAccess = 64;
    this.kControlHasSpecialBackground = 128;
    this.kControlGetsFocusOnClick = 256;
    this.kControlSupportsCalcBestRect = 512;
    this.kControlSupportsLiveFeedback = 1024;
    this.kControlHasRadioBehavior = 2048;
    this.kControlSupportsDragAndDrop = 4096;
    this.kControlAutoToggles = 16384;
    this.kControlSupportsGetRegion = 131072;
    this.kControlSupportsFlattening = 524288;
    this.kControlSupportsSetCursor = 1048576;
    this.kControlSupportsContextualMenus = 2097152;
    this.kControlSupportsClickActivation = 4194304;
    this.kControlIdlesWithTimer = 8388608;
    this.kControlInvertsUpDownValueMeaning = 16777216;
    this.drawCntl = 0;
    this.testCntl = 1;
    this.calcCRgns = 2;
    this.initCntl = 3;
    this.dispCntl = 4;
    this.posCntl = 5;
    this.thumbCntl = 6;
    this.dragCntl = 7;
    this.autoTrack = 8;
    this.calcCntlRgn = 10;
    this.calcThumbRgn = 11;
    this.drawThumbOutline = 12;
    this.kControlMsgDrawGhost = 13;
    this.kControlMsgCalcBestRect = 14;
    this.kControlMsgHandleTracking = 15;
    this.kControlMsgFocus = 16;
    this.kControlMsgKeyDown = 17;
    this.kControlMsgIdle = 18;
    this.kControlMsgGetFeatures = 19;
    this.kControlMsgSetData = 20;
    this.kControlMsgGetData = 21;
    this.kControlMsgActivate = 22;
    this.kControlMsgSetUpBackground = 23;
    this.kControlMsgCalcValueFromPos = 26;
    this.kControlMsgTestNewMsgSupport = 27;
    this.kControlMsgSubValueChanged = 25;
    this.kControlMsgSubControlAdded = 28;
    this.kControlMsgSubControlRemoved = 29;
    this.kControlMsgApplyTextColor = 30;
    this.kControlMsgGetRegion = 31;
    this.kControlMsgFlatten = 32;
    this.kControlMsgSetCursor = 33;
    this.kControlMsgDragEnter = 38;
    this.kControlMsgDragLeave = 39;
    this.kControlMsgDragWithin = 40;
    this.kControlMsgDragReceive = 41;
    this.kControlMsgDisplayDebugInfo = 46;
    this.kControlMsgContextualMenuClick = 47;
    this.kControlMsgGetClickActivation = 48;
    this.ControlDefProcMessage = this.SInt16;
    this.kControlSizeNormal = 0;
    this.kControlSizeSmall = 1;
    this.kControlSizeLarge = 2;
    this.kControlSizeMini = 3;
    this.kControlSizeAuto = 65535;
    this.ControlSize = this.UInt16;
    this.kDrawControlEntireControl = 0;
    this.kDrawControlIndicatorOnly = 129;
    this.kDragControlEntireControl = 0;
    this.kDragControlIndicator = 1;
    this.IndicatorDragConstraint = new ctypes.StructType("IndicatorDragConstraint", [{limitRect: this.Rect}, {slopRect: this.Rect}, {axis: this.DragConstraint}]);
    this.IndicatorDragConstraintPtr = this.IndicatorDragConstraint.ptr;
    this.kControlSupportsNewMessages = 544172832;
    this.ControlTrackingRec = new ctypes.StructType("ControlTrackingRec", [{startPt: this.Point}, {modifiers: this.EventModifiers}, {action: this.ControlActionUPP}]);
    this.ControlTrackingPtr = this.ControlTrackingRec.ptr;
    this.ControlKeyDownRec = new ctypes.StructType("ControlKeyDownRec", [{modifiers: this.EventModifiers}, {keyCode: this.SInt16}, {charCode: this.SInt16}]);
    this.ControlKeyDownPtr = this.ControlKeyDownRec.ptr;
    this.ControlDataAccessRec = new ctypes.StructType("ControlDataAccessRec", [{tag: this.ResType}, {part: this.ResType}, {size: this.Size}, {dataPtr: this.Ptr}]);
    this.ControlDataAccessPtr = this.ControlDataAccessRec.ptr;
    this.ControlCalcSizeRec = new ctypes.StructType("ControlCalcSizeRec", [{height: this.SInt16}, {width: this.SInt16}, {baseLine: this.SInt16}]);
    this.ControlCalcSizePtr = this.ControlCalcSizeRec.ptr;
    this.ControlBackgroundRec = new ctypes.StructType("ControlBackgroundRec", [{depth: this.SInt16}, {colorDevice: this.Boolean}]);
    this.ControlBackgroundPtr = this.ControlBackgroundRec.ptr;
    this.ControlApplyTextColorRec = new ctypes.StructType("ControlApplyTextColorRec", [{depth: this.SInt16}, {colorDevice: this.Boolean}, {active: this.Boolean}]);
    this.ControlApplyTextColorPtr = this.ControlApplyTextColorRec.ptr;
    this.ControlGetRegionRec = new ctypes.StructType("ControlGetRegionRec", [{region: this.RgnHandle}, {part: this.ControlPartCode}]);
    this.ControlGetRegionPtr = this.ControlGetRegionRec.ptr;
    this.ControlSetCursorRec = new ctypes.StructType("ControlSetCursorRec", [{localPoint: this.Point}, {modifiers: this.EventModifiers}, {cursorWasSet: this.Boolean}]);
    this.ControlSetCursorPtr = this.ControlSetCursorRec.ptr;
    this.ControlContextualMenuClickRec = new ctypes.StructType("ControlContextualMenuClickRec", [{localPoint: this.Point}, {menuDisplayed: this.Boolean}]);
    this.ControlContextualMenuClickPtr = this.ControlContextualMenuClickRec.ptr;
    this.ControlClickActivationRec = new ctypes.StructType("ControlClickActivationRec", [{localPoint: this.Point}, {modifiers: this.EventModifiers}, {result: this.ClickActivationResult}]);
    this.ControlClickActivationPtr = this.ControlClickActivationRec.ptr;
    this.ControlDefProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.SInt32, [this.SInt16, this.ControlRef, this.ControlDefProcMessage, this.SInt32]).ptr;
    this.ControlDefUPP = this.ControlDefProcPtr;
    // Dropping inline function 'NewControlDefUPP'.
    // Dropping inline function 'DisposeControlDefUPP'.
    // Dropping inline function 'InvokeControlDefUPP'.
    this.kControlKeyFilterBlockKey = 0;
    this.kControlKeyFilterPassKey = 1;
    this.ControlKeyFilterResult = this.SInt16;
    this.ControlKeyFilterProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ControlKeyFilterResult, [this.ControlRef, this.SInt16.ptr, this.SInt16.ptr, this.EventModifiers.ptr]).ptr;
    this.ControlKeyFilterUPP = this.ControlKeyFilterProcPtr;
    // Dropping inline function 'NewControlKeyFilterUPP'.
    // Dropping inline function 'DisposeControlKeyFilterUPP'.
    // Dropping inline function 'InvokeControlKeyFilterUPP'.
    this.noConstraint = 0;
    this.hAxisOnly = 1;
    this.vAxisOnly = 2;
    this.kControlDefProcPtr = 0;
    this.kControlDefObjectClass = 1;
    this.ControlDefType = this.UInt32;
    this.ControlDefSpec = new ctypes.StructType("ControlDefSpec", []);
    this.ControlCNTLToCollectionProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.Rect.ptr, this.SInt16, this.Boolean, this.SInt16, this.SInt16, this.SInt16, this.SRefCon, this.ConstStr255Param, this.Collection]).ptr;
    this.ControlCNTLToCollectionUPP = this.ControlCNTLToCollectionProcPtr;
    // Dropping inline function 'NewControlCNTLToCollectionUPP'.
    // Dropping inline function 'DisposeControlCNTLToCollectionUPP'.
    // Dropping inline function 'InvokeControlCNTLToCollectionUPP'.
    this.ControlColorProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.ControlRef, this.SInt16, this.SInt16, this.Boolean]).ptr;
    this.ControlColorUPP = this.ControlColorProcPtr;
    // Dropping inline function 'NewControlColorUPP'.
    // Dropping inline function 'DisposeControlColorUPP'.
    // Dropping inline function 'InvokeControlColorUPP'.
    this.ControlID = new ctypes.StructType("ControlID", [{signature: this.OSType}, {id: this.SInt32}]);
    this.ControlKind = new ctypes.StructType("ControlKind", [{signature: this.OSType}, {kind: this.OSType}]);
    this.kControlKindSignatureApple = 1634758764;
    this.kControlPropertyPersistent = 1;
    this.kDragTrackingEnterControl = 2;
    this.kDragTrackingInControl = 3;
    this.kDragTrackingLeaveControl = 4;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIView.h
function HIView_h(lib) {
    CGBase_h.call(this, lib);
    Controls_h.call(this, lib);
    HIObject_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._HIVIEW_H)
        return;
    this._HIVIEW_H = true;

    this.HIViewID = this.ControlID;
    this.kHIViewZOrderAbove = 1;
    this.kHIViewZOrderBelow = 2;
    this.HIViewZOrderOp = this.UInt32;
    this.HIViewFrameMetrics = new ctypes.StructType("HIViewFrameMetrics", [{top: this.CGFloat}, {left: this.CGFloat}, {bottom: this.CGFloat}, {right: this.CGFloat}]);
    this.kHIViewAttributeSendCommandToUserFocus = 1;
    this.kHIViewAttributeIsFieldEditor = 2;
    this.kHIViewSendCommandToUserFocus = 1;
    this.kHIViewFeatureSupportsGhosting = 1;
    this.kHIViewFeatureAllowsSubviews = 2;
    this.kHIViewFeatureGetsFocusOnClick = 256;
    this.kHIViewFeatureSupportsLiveFeedback = 1024;
    this.kHIViewFeatureSupportsRadioBehavior = 2048;
    this.kHIViewFeatureAutoToggles = 16384;
    this.kHIViewFeatureIdlesWithTimer = 8388608;
    this.kHIViewFeatureInvertsUpDownValueMeaning = 16777216;
    this.kHIViewFeatureIsOpaque = 33554432;
    this.kHIViewFeatureDoesNotDraw = 134217728;
    this.kHIViewFeatureDoesNotUseSpecialParts = 268435456;
    this.kHIViewFeatureIgnoresClicks = 536870912;
    this.kHIViewValidFeaturesForPanther = 998264067;
    this.kHIViewSupportsGhosting = 1;
    this.kHIViewAllowsSubviews = 2;
    this.kHIViewGetsFocusOnClick = 256;
    this.kHIViewSupportsLiveFeedback = 1024;
    this.kHIViewSupportsRadioBehavior = 2048;
    this.kHIViewAutoToggles = 16384;
    this.kHIViewIdlesWithTimer = 8388608;
    this.kHIViewInvertsUpDownValueMeaning = 16777216;
    this.kHIViewIsOpaque = 33554432;
    this.kHIViewDoesNotDraw = 134217728;
    this.kHIViewDoesNotUseSpecialParts = 268435456;
    this.kHIViewIgnoresClicks = 536870912;
    this.HIViewFeatures = this.UInt64;
    this.HIViewPartCode = this.ControlPartCode;
    this.kHIViewNoPart = 0;
    this.kHIViewIndicatorPart = 129;
    this.kHIViewDisabledPart = 254;
    this.kHIViewInactivePart = 255;
    this.kHIViewEntireView = 0;
    this.kHIViewStructureMetaPart = -1;
    this.kHIViewContentMetaPart = -2;
    this.kHIViewOpaqueMetaPart = -3;
    this.kHIViewClickableMetaPart = -4;
    this.kHIViewFocusNoPart = 0;
    this.kHIViewFocusNextPart = -1;
    this.kHIViewFocusPrevPart = -2;
    this.HIViewImageContentType = this.ControlContentType;
    this.HIViewImageContentInfo = this.ControlImageContentInfo;
    this.HIViewContentType = this.SInt16;
    this.kHIViewContentTextOnly = 0;
    this.kHIViewContentNone = 0;
    this.kHIViewContentIconSuiteRef = 129;
    this.kHIViewContentIconRef = 132;
    this.kHIViewContentCGImageRef = 134;
    this.kHIViewContentImageResource = 135;
    this.kHIViewContentImageFile = 136;
    this.kHIViewContentIconTypeAndCreator = 137;
    this.kHIViewContentAlertIconType = 138;
    this.kHIViewContentNSImage = 139;
    this.HITypeAndCreator = new ctypes.StructType("HITypeAndCreator", [{type: this.OSType}, {creator: this.OSType}]);
    this.HIViewContentInfo = new ctypes.StructType("HIViewContentInfo", []);
    this.HIViewContentInfoPtr = this.HIViewContentInfo.ptr;
    this.errNeedsCompositedWindow = -30598;
    this.HIViewKind = new ctypes.StructType("HIViewKind", [{signature: this.OSType}, {kind: this.OSType}]);
    this.kHIViewKindSignatureApple = 1634758764;
    this.OpaqueHIViewTrackingAreaRef = new ctypes.StructType("OpaqueHIViewTrackingAreaRef");
    this.HIViewTrackingAreaRef = this.OpaqueHIViewTrackingAreaRef.ptr;
    this.kEventParamHIViewTrackingArea = 1668575841;
    this.typeHIViewTrackingAreaRef = 1668575841;
    this.kEventControlTrackingAreaEntered = 23;
    this.kEventControlTrackingAreaExited = 24;
    this.HIViewTrackingAreaID = this.UInt64;
    this.kHIViewFocusOnAnyControl = 1;
    this.kHIViewFocusTraditionally = 2;
    this.kHIViewFocusWithoutWrapping = 4;
    this.kHILayoutBindNone = 0;
    this.kHILayoutBindMin = 1;
    this.kHILayoutBindMax = 2;
    this.kHILayoutBindLeft = 1;
    this.kHILayoutBindRight = 2;
    this.kHILayoutBindTop = 1;
    this.kHILayoutBindBottom = 2;
    this.HIBindingKind = this.UInt16;
    this.HISideBinding = new ctypes.StructType("HISideBinding", [{toView: this.HIViewRef}, {kind: this.HIBindingKind}, {offset: this.CGFloat}]);
    this.HIBinding = new ctypes.StructType("HIBinding", [{top: this.HISideBinding}, {left: this.HISideBinding}, {bottom: this.HISideBinding}, {right: this.HISideBinding}]);
    this.kHILayoutScaleAbsolute = 0;
    this.HIScaleKind = this.UInt16;
    this.HIAxisScale = new ctypes.StructType("HIAxisScale", [{toView: this.HIViewRef}, {kind: this.HIScaleKind}, {ratio: this.CGFloat}]);
    this.HIScaling = new ctypes.StructType("HIScaling", [{x: this.HIAxisScale}, {y: this.HIAxisScale}]);
    this.kHILayoutPositionNone = 0;
    this.kHILayoutPositionCenter = 1;
    this.kHILayoutPositionMin = 2;
    this.kHILayoutPositionMax = 3;
    this.kHILayoutPositionLeft = 2;
    this.kHILayoutPositionRight = 3;
    this.kHILayoutPositionTop = 2;
    this.kHILayoutPositionBottom = 3;
    this.HIPositionKind = this.UInt16;
    this.HIAxisPosition = new ctypes.StructType("HIAxisPosition", [{toView: this.HIViewRef}, {kind: this.HIPositionKind}, {offset: this.CGFloat}]);
    this.HIPositioning = new ctypes.StructType("HIPositioning", [{x: this.HIAxisPosition}, {y: this.HIAxisPosition}]);
    this.HILayoutInfo = new ctypes.StructType("HILayoutInfo", [{version: this.UInt32}, {binding: this.HIBinding}, {scale: this.HIScaling}, {position: this.HIPositioning}]);
    this.kHILayoutInfoVersionZero = 0;
    this.kHITransformNone = 0;
    this.kHITransformDisabled = 1;
    this.kHITransformSelected = 16384;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/TSMTE.h
function TSMTE_h(lib) {
    TextEdit_h.call(this, lib);

    if (this._TSMTE_H)
        return;
    this._TSMTE_H = true;

    this.kTSMTESignature = 1953322053;
    this.kTSMTEInterfaceType = 1953322053;
    this.kTSMTEAutoScroll = 1;
    this.TSMTEPreUpdateProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.TEHandle, ctypes.long]).ptr;
    this.TSMTEPostUpdateProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.TEHandle, ctypes.long, ctypes.long, ctypes.long, ctypes.long, ctypes.long, ctypes.long]).ptr;
    this.TSMTEPreUpdateUPP = this.TSMTEPreUpdateProcPtr;
    this.TSMTEPostUpdateUPP = this.TSMTEPostUpdateProcPtr;
    this.TSMTERec = new ctypes.StructType("TSMTERec", [{textH: this.TEHandle}, {preUpdateProc: this.TSMTEPreUpdateUPP}, {postUpdateProc: this.TSMTEPostUpdateUPP}, {updateFlag: ctypes.long}, {refCon: ctypes.long}]);
    this.TSMTERecPtr = this.TSMTERec.ptr;
    this.TSMTERecHandle = this.TSMTERecPtr.ptr;
    // Dropping inline function 'NewTSMTEPreUpdateUPP'.
    // Dropping inline function 'NewTSMTEPostUpdateUPP'.
    // Dropping inline function 'DisposeTSMTEPreUpdateUPP'.
    // Dropping inline function 'DisposeTSMTEPostUpdateUPP'.
    // Dropping inline function 'InvokeTSMTEPreUpdateUPP'.
    // Dropping inline function 'InvokeTSMTEPostUpdateUPP'.
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/CarbonEvents.h
function CarbonEvents_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._CARBONEVENTS_H)
        return;
    this._CARBONEVENTS_H = true;

    this.kEventParamPostTarget = 1886679655;
    this.typeEventTargetRef = 1702130279;
    this.kEventParamPostOptions = 1886351476;
    this.typeEventTargetOptions = 1702129520;
    this.kEventParamWindowRef = 2003398244;
    this.kEventParamGrafPort = 1735549286;
    this.kEventParamMenuRef = 1835363957;
    this.kEventParamEventRef = 1702260340;
    this.kEventParamControlRef = 1668575852;
    this.kEventParamRgnHandle = 1919381096;
    this.kEventParamEnabled = 1701732706;
    this.kEventParamDimensions = 1684630899;
    this.kEventParamBounds = 1651471726;
    this.kEventParamAvailableBounds = 1635150946;
    this.kEventParamAEEventID = 1702261865;
    this.kEventParamAEEventClass = 1702257516;
    this.kEventParamCGContextRef = 1668183160;
    this.kEventParamCGImageRef = 1667721581;
    this.kEventParamDeviceDepth = 1684371044;
    this.kEventParamDeviceColor = 1684371043;
    this.kEventParamMutableArray = 1835102834;
    this.kEventParamResult = 1634628466;
    this.kEventParamMinimumSize = 1835955066;
    this.kEventParamMaximumSize = 1836610426;
    this.kEventParamAttributes = 1635021938;
    this.kEventParamReason = 2003335487;
    this.kEventParamTransactionID = 1953656435;
    this.kEventParamDisplayDevice = 1734632822;
    this.kEventParamGDevice = 1734632822;
    this.kEventParamIndex = 1768842360;
    this.kEventParamUserData = 1970500196;
    this.kEventParamShape = 1936220528;
    this.typeWindowRef = 2003398244;
    this.typeGrafPtr = 1735549286;
    this.typeGWorldPtr = 1735879780;
    this.typeMenuRef = 1835363957;
    this.typeControlRef = 1668575852;
    this.typeCollection = 1668052078;
    this.typeQDRgnHandle = 1919381096;
    this.typeOSStatus = 1869837172;
    this.typeCFIndex = 1667656056;
    this.typeCGContextRef = 1668183160;
    this.typeCGImageRef = 1667721581;
    this.typeHIPoint = 1751740532;
    this.typeHISize = 1751741306;
    this.typeHIRect = 1751741027;
    this.typeHIShapeRef = 1936220528;
    this.typeVoidPtr = 1987012964;
    this.typeGDHandle = 1734632822;
    this.typeCGDisplayID = 1667721572;
    this.typeCGFloat = 1667720812;
    this.typeHIPoint72DPIGlobal = 1751740519;
    this.typeHIPointScreenPixel = 1751740531;
    this.typeHISize72DPIGlobal = 1751741287;
    this.typeHISizeScreenPixel = 1751741299;
    this.typeHIRect72DPIGlobal = 1751741031;
    this.typeHIRectScreenPixel = 1751741043;
    this.typeCGFloat72DPIGlobal = 1751737959;
    this.typeCGFloatScreenPixel = 1751737971;
    this.kEventParamDisplayChangeFlags = 1667720304;
    this.typeCGDisplayChangeFlags = 1667720294;
    this.typeRefCon = 1987012964;
    this.typeByteCount = 1835100014;
    this.typeByteOffset = 1835100014;
    this.typeSignedByteCount = 1819242087;
    this.typeSignedByteOffset = 1819242087;
    this.kEventParamMouseLocation = 1835822947;
    this.kEventParamWindowMouseLocation = 2003660661;
    this.kEventParamMouseButton = 1835168878;
    this.kEventParamClickCount = 1667460724;
    this.kEventParamMouseWheelAxis = 1836540280;
    this.kEventParamMouseWheelDelta = 1836541036;
    this.kEventParamMouseWheelSmoothVerticalDelta = 1935767673;
    this.kEventParamMouseWheelSmoothHorizontalDelta = 1935767672;
    this.kEventParamMouseDelta = 1835299937;
    this.kEventParamMouseChord = 1667788658;
    this.kEventParamTabletEventType = 1952607348;
    this.kEventParamMouseTrackingRef = 1836348006;
    this.typeMouseButton = 1835168878;
    this.typeMouseWheelAxis = 1836540280;
    this.typeMouseTrackingRef = 1836348006;
    this.kEventParamMagnificationAmount = 1835100014;
    this.kEventParamRotationAmount = 1919906913;
    this.kEventParamSwipeDirection = 1937205616;
    this.kEventParamKeyCode = 1801678692;
    this.kEventParamKeyMacCharCodes = 1801676914;
    this.kEventParamKeyModifiers = 1802334052;
    this.kEventParamKeyUnicodes = 1802858089;
    this.kEventParamKeyboardType = 1801610356;
    this.typeEventHotKeyID = 1751869796;
    this.kEventParamTSMSendRefCon = 1953722979;
    this.kEventParamTSMSendComponentInstance = 1953719145;
    this.kEventParamTextInputSendRefCon = 1953722979;
    this.kEventParamTextInputSendComponentInstance = 1953719145;
    this.kEventParamTextInputSendSLRec = 1953723244;
    this.kEventParamTextInputReplySLRec = 1953657708;
    this.kEventParamTextInputSendText = 1953723512;
    this.kEventParamTextInputReplyText = 1953657976;
    this.kEventParamTextInputSendAttributedString = 1953718643;
    this.kEventParamTextInputReplyAttributedString = 1953653107;
    this.kEventParamTextInputSendUpdateRng = 1953723760;
    this.kEventParamTextInputSendHiliteRng = 1953720425;
    this.kEventParamTextInputSendClauseRng = 1953719148;
    this.kEventParamTextInputSendPinRng = 1953722478;
    this.kEventParamTextInputSendFixLen = 1953719928;
    this.kEventParamTextInputSendLeadingEdge = 1953721445;
    this.kEventParamTextInputReplyLeadingEdge = 1953655909;
    this.kEventParamTextInputSendTextOffset = 1953723503;
    this.kEventParamTextInputReplyTextOffset = 1953657967;
    this.kEventParamTextInputReplyRegionClass = 1953657447;
    this.kEventParamTextInputSendCurrentPoint = 1953719152;
    this.kEventParamTextInputSendDraggingMode = 1953719405;
    this.kEventParamTextInputReplyPoint = 1953656948;
    this.kEventParamTextInputReplyFont = 1953654388;
    this.kEventParamTextInputReplyFMFont = 1953654381;
    this.kEventParamTextInputReplyPointSize = 1953656954;
    this.kEventParamTextInputReplyLineHeight = 1953655912;
    this.kEventParamTextInputReplyLineAscent = 1953655905;
    this.kEventParamTextInputReplyCTFontRef = 1953653606;
    this.kEventParamTextInputReplyATSFont = 1953653094;
    this.kEventParamTextInputReplyTextAngle = 1953657953;
    this.kEventParamTextInputSendShowHide = 1953723240;
    this.kEventParamTextInputReplyShowHide = 1953657704;
    this.kEventParamTextInputSendKeyboardEvent = 1953721189;
    this.kEventParamTextInputSendTextServiceEncoding = 1953723237;
    this.kEventParamTextInputSendTextServiceMacEncoding = 1953723245;
    this.kEventParamTextInputReplyMacEncoding = 1953656165;
    this.kEventParamTextInputGlyphInfoArray = 1735159912;
    this.kEventParamTextInputSendGlyphInfoArray = 1735159912;
    this.kEventParamTextInputReplyGlyphInfoArray = 1919381608;
    this.kEventParamTextInputSendReplaceRange = 1953722992;
    this.kEventParamTextInputSendMouseEvent = 1953721701;
    this.kEventParamTSMDocAccessSendRefCon = 1953722979;
    this.kEventParamTSMDocAccessSendComponentInstance = 1953719145;
    this.kEventParamTSMDocAccessCharacterCount = 1952736116;
    this.kEventParamTSMDocAccessReplyCharacterRange = 1952739954;
    this.kEventParamTSMDocAccessReplyCharactersPtr = 1952739952;
    this.kEventParamTSMDocAccessSendCharacterIndex = 1952740201;
    this.kEventParamTSMDocAccessSendCharacterRange = 1952740210;
    this.kEventParamTSMDocAccessSendCharactersPtr = 1952740208;
    this.kEventParamTSMDocAccessRequestedCharacterAttributes = 1952736097;
    this.kEventParamTSMDocAccessReplyCTFontRef = 1952736102;
    this.kEventParamTSMDocAccessReplyATSFont = 1952735590;
    this.kEventParamTSMDocAccessReplyFontSize = 1952739955;
    this.kEventParamTSMDocAccessEffectiveRange = 1952736626;
    this.kEventParamTSMDocAccessReplyCTGlyphInfoRef = 1952739945;
    this.kEventParamTSMDocAccessReplyATSUGlyphSelector = 1952739943;
    this.kEventParamTSMDocAccessLockCount = 1952738403;
    this.kEventParamTSMDocAccessLineBounds = 1952738402;
    this.kEventParamTSMDocAccessBaselineDelta = 1952735844;
    this.typeATSFontRef = 1635021670;
    this.typeGlyphSelector = 1735157363;
    this.kEventParamHICommand = 1751346532;
    this.typeHICommand = 1751346532;
    this.kEventParamWindowFeatures = 2003203186;
    this.kEventParamWindowDefPart = 2003071075;
    this.kEventParamWindowPartCode = 2003853682;
    this.kEventParamCurrentBounds = 1668440948;
    this.kEventParamOriginalBounds = 1869767540;
    this.kEventParamPreviousBounds = 1886544756;
    this.kEventParamClickActivation = 1668047203;
    this.kEventParamWindowRegionCode = 2004052080;
    this.kEventParamWindowContentBounds = 2003001966;
    this.kEventParamWindowDragHiliteFlag = 2003069030;
    this.kEventParamWindowModifiedFlag = 2003658342;
    this.kEventParamWindowProxyGWorldPtr = 2003855223;
    this.kEventParamWindowProxyImageRgn = 2003855730;
    this.kEventParamWindowProxyOutlineRgn = 2003857266;
    this.kEventParamWindowStateChangedFlags = 2004050790;
    this.kEventParamWindowTitleFullWidth = 2004117111;
    this.kEventParamWindowTitleTextWidth = 2004120695;
    this.kEventParamWindowGrowRect = 1735549812;
    this.kEventParamPreviousDockRect = 1885631075;
    this.kEventParamPreviousDockDevice = 1885628260;
    this.kEventParamCurrentDockRect = 1667527267;
    this.kEventParamCurrentDockDevice = 1667524452;
    this.kEventParamWindowTransitionAction = 2004115811;
    this.kEventParamWindowTransitionEffect = 2004116838;
    this.typeWindowRegionCode = 2004052080;
    this.typeWindowDefPartCode = 2003071092;
    this.typeWindowPartCode = 2003853682;
    this.typeClickActivationResult = 1668047203;
    this.typeWindowTransitionAction = 2004115811;
    this.typeWindowTransitionEffect = 2004116838;
    this.kEventParamControlPart = 1668313716;
    this.kEventParamInitCollection = 1768124268;
    this.kEventParamControlMessage = 1668117351;
    this.kEventParamControlParam = 1668313709;
    this.kEventParamControlResult = 1668445036;
    this.kEventParamControlRegion = 1668441966;
    this.kEventParamControlAction = 1667331440;
    this.kEventParamControlIndicatorDragConstraint = 1667851363;
    this.kEventParamControlIndicatorRegion = 1667854958;
    this.kEventParamControlIsGhosting = 1667724148;
    this.kEventParamControlIndicatorOffset = 1667854182;
    this.kEventParamControlClickActivationResult = 1667457394;
    this.kEventParamControlSubControl = 1668511074;
    this.kEventParamControlOptimalBounds = 1668244078;
    this.kEventParamControlOptimalBaselineOffset = 1668244079;
    this.kEventParamControlDataTag = 1667527783;
    this.kEventParamControlDataBuffer = 1667523174;
    this.kEventParamControlDataBufferSize = 1667523187;
    this.kEventParamControlDrawDepth = 1667523696;
    this.kEventParamControlDrawInColor = 1667524963;
    this.kEventParamControlDrawEngraved = 1667523950;
    this.kEventParamControlFeatures = 1667658866;
    this.kEventParamControlPartBounds = 1668309604;
    this.kEventParamControlOriginalOwningWindow = 1668247415;
    this.kEventParamControlCurrentOwningWindow = 1667460983;
    this.kEventParamControlFocusEverything = 1667655030;
    this.kEventParamNextControl = 1668184163;
    this.kEventParamStartControl = 1668510819;
    this.kEventParamControlSubview = 1668511351;
    this.kEventParamControlPreviousPart = 1668247651;
    this.kEventParamControlCurrentPart = 1668182115;
    this.kEventParamControlInvalRgn = 1667855986;
    this.kEventParamControlValue = 1668702572;
    this.kEventParamControlHit = 1667787124;
    this.kEventParamControlPartAutoRepeats = 1667331442;
    this.kEventParamControlFrameMetrics = 1667657076;
    this.kEventParamControlWouldAcceptDrop = 1668047975;
    this.kEventParamControlPrefersShape = 1668313960;
    this.typeControlActionUPP = 1667331440;
    this.typeIndicatorDragConstraint = 1667851363;
    this.typeControlPartCode = 1668313716;
    this.typeControlFrameMetrics = 1667853939;
    this.kEventParamCurrentMenuTrackingMode = 1668117613;
    this.kEventParamNewMenuTrackingMode = 1852666989;
    this.kEventParamMenuFirstOpen = 829650031;
    this.kEventParamMenuItemIndex = 1769235821;
    this.kEventParamMenuCommand = 1835232612;
    this.kEventParamEnableMenuForKeyEvent = 1718579819;
    this.kEventParamMenuEventOptions = 1835364208;
    this.kEventParamMenuContext = 1835234424;
    this.kEventParamMenuDismissed = 1835297139;
    this.kEventParamMenuItemBounds = 1835627618;
    this.kEventParamMenuMarkBounds = 1835887458;
    this.kEventParamMenuIconBounds = 1835623266;
    this.kEventParamMenuTextBounds = 1836349538;
    this.kEventParamMenuTextBaseline = 1836343916;
    this.kEventParamMenuCommandKeyBounds = 1835232610;
    this.kEventParamMenuVirtualTop = 1836479092;
    this.kEventParamMenuVirtualBottom = 1836479074;
    this.kEventParamMenuDrawState = 1835299443;
    this.kEventParamMenuItemType = 1835627632;
    this.kEventParamMenuItemWidth = 1835627639;
    this.kEventParamMenuItemHeight = 1835627624;
    this.kEventParamMenuFrameView = 1835430518;
    this.kEventParamMenuType = 1836349808;
    this.kEventParamMenuIsPopup = 1836085104;
    this.kEventParamMenuDirection = 1835297138;
    this.kEventParamParentMenu = 1836085869;
    this.kEventParamParentMenuItem = 1836085865;
    this.kEventParamMenuPopupItem = 1836083572;
    this.kEventParamMenuContextHeight = 1835231348;
    this.typeMenuItemIndex = 1835623544;
    this.typeMenuCommand = 1835232612;
    this.typeMenuTrackingMode = 1836346724;
    this.typeMenuEventOptions = 1835364208;
    this.typeThemeMenuState = 1953328755;
    this.typeThemeMenuItemType = 1953327476;
    this.typeMenuDirection = 1835297138;
    this.typeThemeMenuType = 1953330297;
    this.kEventParamProcessID = 1886613024;
    this.kEventParamLaunchRefCon = 1819436390;
    this.kEventParamLaunchErr = 1701999136;
    this.kEventParamSystemUIMode = 1969843556;
    this.kEventParamSystemUIOptions = 1969844080;
    this.kEventParamIsInInstantMouser = 1768779637;
    this.kEventParamPreviousWindow = 1886549623;
    this.kEventParamCurrentWindow = 1668641399;
    this.kEventParamTabletPointRec = 1952608867;
    this.kEventParamTabletProximityRec = 1952608376;
    this.typeTabletPointRec = 1952608867;
    this.typeTabletProximityRec = 1952608376;
    this.kEventParamNewScrollBarVariant = 1853055606;
    this.kEventParamPasteboardRef = 1885500004;
    this.kEventParamScrapRef = 1935897200;
    this.kEventParamServiceCopyTypes = 1937142628;
    this.kEventParamServicePasteTypes = 1937141876;
    this.kEventParamServiceMessageName = 1937141095;
    this.kEventParamServiceUserData = 1937143140;
    this.typePasteboardRef = 1885500004;
    this.typeScrapRef = 1935897200;
    this.kEventParamAccessibleObject = 1634689642;
    this.kEventParamAccessibleChild = 1633904748;
    this.kEventParamAccessibleAttributeName = 1635020397;
    this.kEventParamAccessibleAttributeNames = 1635020403;
    this.kEventParamAccessibleAttributeValue = 1635022444;
    this.kEventParamAccessibleAttributeSettable = 1635021684;
    this.kEventParamAccessibleAttributeParameter = 1635020897;
    this.kEventParamAccessibleActionName = 1633906285;
    this.kEventParamAccessibleActionNames = 1633906291;
    this.kEventParamAccessibleActionDescription = 1633903731;
    this.kEventParamAccessibilityEventQueued = 1634038133;
    this.typeCFRange = 1667658350;
    this.kEventParamAppleEvent = 1634039412;
    this.kEventParamAppleEventReply = 1634038384;
    this.MouseTrackingResult = this.UInt16;
    this.kMouseTrackingMouseDown = 1;
    this.kMouseTrackingMouseUp = 2;
    this.kMouseTrackingMouseExited = 3;
    this.kMouseTrackingMouseEntered = 4;
    this.kMouseTrackingMouseDragged = 5;
    this.kMouseTrackingKeyModifiersChanged = 6;
    this.kMouseTrackingUserCancelled = 7;
    this.kMouseTrackingTimedOut = 8;
    this.kMouseTrackingMouseMoved = 9;
    this.kMouseTrackingClientEvent = 10;
    this.kMouseTrackingScrollWheel = 11;
    this.kTrackMouseLocationOptionDontConsumeMouseUp = 1;
    this.kTrackMouseLocationOptionIncludeScrollWheel = 8;
    this.kMouseParamsSticky = 1937008995;
    this.kMouseParamsProxyIcon = 1886547832;
    this.kMouseParamsClickAndHold = 1668049007;
    this.kMouseParamsDragInitiation = 1685217639;
    this.kEventClassMouse = 1836021107;
    this.kEventClassKeyboard = 1801812322;
    this.kEventClassTextInput = 1952807028;
    this.kEventClassApplication = 1634758764;
    this.kEventClassAppleEvent = 1701867619;
    this.kEventClassMenu = 1835363957;
    this.kEventClassWindow = 2003398244;
    this.kEventClassControl = 1668183148;
    this.kEventClassCommand = 1668113523;
    this.kEventClassTablet = 1952607348;
    this.kEventClassVolume = 1987013664;
    this.kEventClassAppearance = 1634758765;
    this.kEventClassService = 1936028278;
    this.kEventClassToolbar = 1952604530;
    this.kEventClassToolbarItem = 1952606580;
    this.kEventClassToolbarItemView = 1952606582;
    this.kEventClassAccessibility = 1633903461;
    this.kEventClassSystem = 1835098995;
    this.kEventClassInk = 1768844064;
    this.kEventClassTSMDocumentAccess = 1952735587;
    this.kEventClassGesture = 1734701940;
    this.EventMouseButton = this.UInt16;
    this.kEventMouseButtonPrimary = 1;
    this.kEventMouseButtonSecondary = 2;
    this.kEventMouseButtonTertiary = 3;
    this.EventMouseWheelAxis = this.UInt16;
    this.kEventMouseWheelAxisX = 0;
    this.kEventMouseWheelAxisY = 1;
    this.kEventMouseDown = 1;
    this.kEventMouseUp = 2;
    this.kEventMouseMoved = 5;
    this.kEventMouseDragged = 6;
    this.kEventMouseEntered = 8;
    this.kEventMouseExited = 9;
    this.kEventMouseWheelMoved = 10;
    this.kEventMouseScroll = 11;
    this.kEventGestureStarted = 1;
    this.kEventGestureEnded = 2;
    this.kEventGestureMagnify = 4;
    this.kEventGestureSwipe = 5;
    this.kEventGestureRotate = 6;
    this.kEventTSMDocumentAccessGetLength = 1;
    this.kEventTSMDocumentAccessGetSelectedRange = 2;
    this.kEventTSMDocumentAccessGetCharactersPtr = 3;
    this.kEventTSMDocumentAccessGetCharactersPtrForLargestBuffer = 4;
    this.kEventTSMDocumentAccessGetCharacters = 5;
    this.kTSMDocAccessFontSizeAttributeBit = 0;
    this.kTSMDocAccessEffectiveRangeAttributeBit = 1;
    this.TSMDocAccessAttributes = this.UInt32;
    this.kTSMDocAccessFontSizeAttribute = 1;
    this.kTSMDocAccessEffectiveRangeAttribute = 2;
    this.kEventTSMDocumentAccessGetFont = 6;
    this.kEventTSMDocumentAccessGetGlyphInfo = 7;
    this.kEventTSMDocumentAccessGetFirstRectForRange = 11;
    this.kEventTSMDocumentAccessLockDocument = 8;
    this.kEventTSMDocumentAccessUnlockDocument = 9;
    this.kEventTextInputUpdateActiveInputArea = 1;
    this.kEventTextInputUnicodeForKeyEvent = 2;
    this.kEventTextInputOffsetToPos = 3;
    this.kEventTextInputPosToOffset = 4;
    this.kEventTextInputShowHideBottomWindow = 5;
    this.kEventTextInputGetSelectedText = 6;
    this.kEventTextInputUnicodeText = 7;
    this.kEventTextInputFilterText = 14;
    this.kEventTextInputIsMouseEventInInlineInputArea = 16;
    this.kEventRawKeyDown = 1;
    this.kEventRawKeyRepeat = 2;
    this.kEventRawKeyUp = 3;
    this.kEventRawKeyModifiersChanged = 4;
    this.kEventHotKeyPressed = 5;
    this.kEventHotKeyReleased = 6;
    this.kEventKeyModifierNumLockBit = 16;
    this.kEventKeyModifierFnBit = 17;
    this.kEventKeyModifierNumLockMask = 65536;
    this.kEventKeyModifierFnMask = 131072;
    this.kEventAppActivated = 1;
    this.kEventAppDeactivated = 2;
    this.kEventAppQuit = 3;
    this.kEventAppLaunchNotification = 4;
    this.kEventAppLaunched = 5;
    this.kEventAppTerminated = 6;
    this.kEventAppFrontSwitched = 7;
    this.kEventAppHidden = 107;
    this.kEventAppShown = 108;
    this.kEventAppSystemUIModeChanged = 109;
    this.kAvailBoundsChangedForDock = 1;
    this.kAvailBoundsChangedForDisplay = 2;
    this.kEventAppAvailableWindowBoundsChanged = 110;
    this.kEventAppActiveWindowChanged = 111;
    this.kEventAppGetDockTileMenu = 20;
    this.kEventAppUpdateDockTile = 21;
    this.kEventAppFocusMenuBar = 8;
    this.kEventAppFocusNextDocumentWindow = 9;
    this.kEventAppFocusNextFloatingWindow = 10;
    this.kEventAppFocusToolbar = 11;
    this.kEventAppFocusDrawer = 12;
    this.kEventAppIsEventInInstantMouser = 104;
    this.kEventAppleEvent = 1;
    this.kEventWindowUpdate = 1;
    this.kEventWindowDrawContent = 2;
    this.kEventWindowActivated = 5;
    this.kEventWindowDeactivated = 6;
    this.kEventWindowHandleActivate = 91;
    this.kEventWindowHandleDeactivate = 92;
    this.kEventWindowGetClickActivation = 7;
    this.kHIModalClickIsModal = 1;
    this.kHIModalClickAllowEvent = 2;
    this.kHIModalClickAnnounce = 4;
    this.kHIModalClickRaiseWindow = 8;
    this.HIModalClickResult = this.UInt32;
    this.typeModalClickResult = 2003657586;
    this.typeWindowModality = 2003660644;
    this.kEventParamModalClickResult = 2003657586;
    this.kEventParamModalWindow = 1836542318;
    this.kEventParamWindowModality = 2003660644;
    this.kEventWindowGetClickModality = 8;
    this.kWindowBoundsChangeUserDrag = 1;
    this.kWindowBoundsChangeUserResize = 2;
    this.kWindowBoundsChangeSizeChanged = 4;
    this.kWindowBoundsChangeOriginChanged = 8;
    this.kWindowBoundsChangeZoom = 16;
    this.kEventWindowShowing = 22;
    this.kEventWindowHiding = 23;
    this.kEventWindowShown = 24;
    this.kEventWindowHidden = 25;
    this.kEventWindowCollapsing = 86;
    this.kEventWindowCollapsed = 67;
    this.kEventWindowExpanding = 87;
    this.kEventWindowExpanded = 70;
    this.kEventWindowZoomed = 76;
    this.kEventWindowBoundsChanging = 26;
    this.kEventWindowBoundsChanged = 27;
    this.kEventWindowResizeStarted = 28;
    this.kEventWindowResizeCompleted = 29;
    this.kEventWindowDragStarted = 30;
    this.kEventWindowDragCompleted = 31;
    this.kEventWindowClosed = 73;
    this.kEventWindowTransitionStarted = 88;
    this.kEventWindowTransitionCompleted = 89;
    this.kEventWindowClickDragRgn = 32;
    this.kEventWindowClickResizeRgn = 33;
    this.kEventWindowClickCollapseRgn = 34;
    this.kEventWindowClickCloseRgn = 35;
    this.kEventWindowClickZoomRgn = 36;
    this.kEventWindowClickContentRgn = 37;
    this.kEventWindowClickProxyIconRgn = 38;
    this.kEventWindowClickToolbarButtonRgn = 41;
    this.kEventWindowClickStructureRgn = 42;
    this.kEventWindowCursorChange = 40;
    this.kEventWindowCollapse = 66;
    this.kEventWindowCollapseAll = 68;
    this.kEventWindowExpand = 69;
    this.kEventWindowExpandAll = 71;
    this.kEventWindowClose = 72;
    this.kEventWindowCloseAll = 74;
    this.kEventWindowZoom = 75;
    this.kEventWindowZoomAll = 77;
    this.kEventWindowContextualMenuSelect = 78;
    this.kEventWindowPathSelect = 79;
    this.kEventWindowGetIdealSize = 80;
    this.kEventWindowGetIdealStandardState = 93;
    this.kEventWindowGetMinimumSize = 81;
    this.kEventWindowGetMaximumSize = 82;
    this.kEventWindowConstrain = 83;
    this.kEventWindowRestoreFromDock = 84;
    this.kEventWindowProxyBeginDrag = 128;
    this.kEventWindowProxyEndDrag = 129;
    this.kEventWindowHandleContentClick = 85;
    this.kEventWindowGetDockTileMenu = 90;
    this.kEventWindowUpdateDockTile = 94;
    this.kEventWindowColorSpaceChanged = 95;
    this.kEventWindowToolbarSwitchMode = 150;
    this.kEventWindowFocusAcquired = 200;
    this.kEventWindowFocusRelinquish = 201;
    this.kEventWindowFocusLost = 205;
    this.kEventWindowFocusRestored = 206;
    this.kEventWindowFocusContent = 202;
    this.kEventWindowFocusToolbar = 203;
    this.kEventWindowFocusDrawer = 204;
    this.kEventWindowSheetOpening = 210;
    this.kEventWindowSheetOpened = 211;
    this.kEventWindowSheetClosing = 212;
    this.kEventWindowSheetClosed = 213;
    this.kEventWindowDrawerOpening = 220;
    this.kEventWindowDrawerOpened = 221;
    this.kEventWindowDrawerClosing = 222;
    this.kEventWindowDrawerClosed = 223;
    this.kEventWindowDrawFrame = 1000;
    this.kEventWindowDrawPart = 1001;
    this.kEventWindowGetRegion = 1002;
    this.kEventWindowHitTest = 1003;
    this.kEventWindowInit = 1004;
    this.kEventWindowDispose = 1005;
    this.kEventWindowDragHilite = 1006;
    this.kEventWindowModified = 1007;
    this.kEventWindowSetupProxyDragImage = 1008;
    this.kEventWindowStateChanged = 1009;
    this.kEventWindowMeasureTitle = 1010;
    this.kEventWindowDrawGrowBox = 1011;
    this.kEventWindowGetGrowImageRegion = 1012;
    this.kEventWindowPaint = 1013;
    this.kEventWindowAttributesChanged = 1019;
    this.kEventWindowTitleChanged = 1020;
    this.kMenuContextMenuBar = 1;
    this.kMenuContextPullDown = 256;
    this.kMenuContextPopUp = 512;
    this.kMenuContextSubmenu = 1024;
    this.kMenuContextMenuBarTracking = 65536;
    this.kMenuContextPopUpTracking = 131072;
    this.kMenuContextKeyMatching = 262144;
    this.kMenuContextMenuEnabling = 524288;
    this.kMenuContextCommandIDSearch = 1048576;
    this.kMenuContextInspection = 4194304;
    this.kMenuContextContextualMenu = 8388608;
    this.kMenuContextDontUpdateText = 16777216;
    this.kMenuContextDontUpdateKey = 33554432;
    this.kMenuContextDontUpdateIcon = 67108864;
    this.kMenuContextDontUpdateEnabled = 134217728;
    this.kHIMenuRightDirection = 0;
    this.kHIMenuLeftDirection = 1;
    this.kHIMenuCenterDirection = 2;
    this.kEventMenuBeginTracking = 1;
    this.kEventMenuEndTracking = 2;
    this.kEventMenuChangeTrackingMode = 3;
    this.kEventMenuOpening = 4;
    this.kEventMenuClosed = 5;
    this.kEventMenuTargetItem = 6;
    this.kEventMenuMatchKey = 7;
    this.kEventMenuEnableItems = 8;
    this.kEventMenuPopulate = 9;
    this.kEventMenuDispose = 1001;
    this.kEventMenuMeasureItemWidth = 100;
    this.kEventMenuMeasureItemHeight = 101;
    this.kEventMenuDrawItem = 102;
    this.kEventMenuDrawItemContent = 103;
    this.kEventMenuCalculateSize = 1004;
    this.kEventMenuCreateFrameView = 1005;
    this.kEventMenuGetFrameBounds = 1006;
    this.kEventMenuBecomeScrollable = 1007;
    this.kEventMenuCeaseToBeScrollable = 1008;
    this.kEventMenuBarShown = 2000;
    this.kEventMenuBarHidden = 2001;
    this.kEventCommandProcess = 1;
    this.kEventCommandUpdateStatus = 2;
    this.kHICommandOK = 1869291552;
    this.kHICommandCancel = 1852797985;
    this.kHICommandQuit = 1903520116;
    this.kHICommandUndo = 1970168943;
    this.kHICommandRedo = 1919247471;
    this.kHICommandCut = 1668641824;
    this.kHICommandCopy = 1668247673;
    this.kHICommandPaste = 1885434740;
    this.kHICommandClear = 1668048225;
    this.kHICommandSelectAll = 1935764588;
    this.kHICommandHide = 1751737445;
    this.kHICommandHideOthers = 1751737455;
    this.kHICommandShowAll = 1936220524;
    this.kHICommandPreferences = 1886545254;
    this.kHICommandZoomWindow = 2054123373;
    this.kHICommandMinimizeWindow = 1835626089;
    this.kHICommandMinimizeAll = 1835626081;
    this.kHICommandMaximizeWindow = 1835104361;
    this.kHICommandMaximizeAll = 1835104353;
    this.kHICommandArrangeInFront = 1718775412;
    this.kHICommandBringAllToFront = 1650881140;
    this.kHICommandWindowListSeparator = 2003592310;
    this.kHICommandWindowListTerminator = 2003596148;
    this.kHICommandSelectWindow = 1937205614;
    this.kHICommandRotateWindowsForward = 1919906935;
    this.kHICommandRotateWindowsBackward = 1919906914;
    this.kHICommandRotateFloatingWindowsForward = 1920231031;
    this.kHICommandRotateFloatingWindowsBackward = 1920231010;
    this.kHICommandAbout = 1633841013;
    this.kHICommandNew = 1852143392;
    this.kHICommandOpen = 1869636974;
    this.kHICommandClose = 1668050803;
    this.kHICommandCloseFile = 1668050790;
    this.kHICommandSave = 1935767141;
    this.kHICommandSaveAs = 1937138035;
    this.kHICommandRevert = 1920365172;
    this.kHICommandPrint = 1886547572;
    this.kHICommandPageSetup = 1885431653;
    this.kHICommandAppHelp = 1634233456;
    this.kHICommandShowCharacterPalette = 1667789424;
    this.kHICommandShowSpellingPanel = 1936225136;
    this.kHICommandCheckSpelling = 1667986288;
    this.kHICommandChangeSpelling = 1667789680;
    this.kHICommandCheckSpellingAsYouType = 1634955363;
    this.kHICommandIgnoreSpelling = 1768387440;
    this.kHICommandLearnWord = 1819440996;
    this.kHICommandFromMenu = 1;
    this.kHICommandFromControl = 2;
    this.kHICommandFromWindow = 4;
    this.HICommand = new ctypes.StructType("HICommand", []);
    this.HICommandExtended = new ctypes.StructType("HICommandExtended", []);
    this.kEventControlClick = 13;
    this.kEventControlHit = 1;
    this.kEventControlInitialize = 1000;
    this.kEventControlDispose = 1001;
    this.kEventControlGetOptimalBounds = 1003;
    this.kEventControlOptimalBoundsChanged = 1004;
    this.kEventControlSimulateHit = 2;
    this.kEventControlHitTest = 3;
    this.kEventControlDraw = 4;
    this.kEventControlApplyBackground = 5;
    this.kEventControlApplyTextColor = 6;
    this.kEventControlGetNextFocusCandidate = 14;
    this.kEventControlGetAutoToggleValue = 15;
    this.kEventControlInterceptSubviewClick = 16;
    this.kEventControlGetClickActivation = 17;
    this.kEventControlDragEnter = 18;
    this.kEventControlDragWithin = 19;
    this.kEventControlDragLeave = 20;
    this.kEventControlDragReceive = 21;
    this.kEventControlSetFocusPart = 7;
    this.kEventControlGetFocusPart = 8;
    this.kEventControlActivate = 9;
    this.kEventControlDeactivate = 10;
    this.kEventControlSetCursor = 11;
    this.kEventControlContextualMenuClick = 12;
    this.kEventControlTrack = 51;
    this.kEventControlGetScrollToHereStartPoint = 52;
    this.kEventControlGetIndicatorDragConstraint = 53;
    this.kEventControlIndicatorMoved = 54;
    this.kEventControlGhostingFinished = 55;
    this.kEventControlGetActionProcPart = 56;
    this.kEventControlGetPartRegion = 101;
    this.kEventControlGetPartBounds = 102;
    this.kEventControlSetData = 103;
    this.kEventControlGetData = 104;
    this.kEventControlGetSizeConstraints = 105;
    this.kEventControlGetFrameMetrics = 106;
    this.kEventControlValueFieldChanged = 151;
    this.kEventControlAddedSubControl = 152;
    this.kEventControlRemovingSubControl = 153;
    this.kEventControlBoundsChanged = 154;
    this.kEventControlInvalidateForSizeChange = 22;
    this.kEventControlVisibilityChanged = 157;
    this.kEventControlOwningWindowChanged = 159;
    this.kEventControlTitleChanged = 158;
    this.kEventControlHiliteChanged = 160;
    this.kEventControlEnabledStateChanged = 161;
    this.kEventControlLayoutInfoChanged = 162;
    this.kEventControlFocusPartChanged = 164;
    this.kEventControlArbitraryMessage = 201;
    this.kControlBoundsChangeSizeChanged = 4;
    this.kControlBoundsChangePositionChanged = 8;
    this.kEventTabletPoint = 1;
    this.kEventTabletProximity = 2;
    this.TabletPointRec = new ctypes.StructType("TabletPointRec", [{absX: this.SInt32}, {absY: this.SInt32}, {absZ: this.SInt32}, {buttons: this.UInt16}, {pressure: this.UInt16}, {tiltX: this.SInt16}, {tiltY: this.SInt16}, {rotation: this.UInt16}, {tangentialPressure: this.SInt16}, {deviceID: this.UInt16}, {vendor1: this.SInt16}, {vendor2: this.SInt16}, {vendor3: this.SInt16}]);
    this.TabletPointerRec = this.TabletPointRec;
    this.TabletProximityRec = new ctypes.StructType("TabletProximityRec", [{vendorID: this.UInt16}, {tabletID: this.UInt16}, {pointerID: this.UInt16}, {deviceID: this.UInt16}, {systemTabletID: this.UInt16}, {vendorPointerType: this.UInt16}, {pointerSerialNumber: this.UInt32}, {uniqueID: this.UInt64}, {capabilityMask: this.UInt32}, {pointerType: this.UInt8}, {enterProximity: this.UInt8}]);
    this.typeFSVolumeRefNum = 1987013742;
    this.kEventVolumeMounted = 1;
    this.kEventVolumeUnmounted = 2;
    this.kEventAppearanceScrollBarVariantChanged = 1;
    this.kEventServiceCopy = 1;
    this.kEventServicePaste = 2;
    this.kEventServiceGetTypes = 3;
    this.kEventServicePerform = 4;
    this.kEventSystemTimeDateChanged = 2;
    this.kEventSystemDisplaysAsleep = 3;
    this.kEventSystemDisplaysAwake = 4;
    this.kEventSystemDisplayReconfigured = 6;
    this.kEventSystemUserSessionActivated = 10;
    this.kEventSystemUserSessionDeactivated = 11;
    this.EventHotKeyID = new ctypes.StructType("EventHotKeyID", [{signature: this.OSType}, {id: this.UInt32}]);
    this.OpaqueEventHotKeyRef = new ctypes.StructType("OpaqueEventHotKeyRef");
    this.EventHotKeyRef = this.OpaqueEventHotKeyRef.ptr;
    this.kEventHotKeyNoOptions = 0;
    this.kEventHotKeyExclusive = 1;
    this.kHIHotKeyModeAllEnabled = 0;
    this.kHIHotKeyModeAllDisabled = 1;
    this.kHIHotKeyModeAllDisabledExceptUniversalAccess = 2;
    this.kEventParamInkTextRef = 1769435748;
    this.kEventParamInkKeyboardShortcut = 1768645220;
    this.kEventParamInkGestureKind = 1735093860;
    this.kEventParamInkGestureBounds = 1734504036;
    this.kEventParamInkGestureHotspot = 1734897524;
    this.kEventInkPoint = 10;
    this.kEventInkGesture = 11;
    this.kEventInkText = 12;
    this.OpaqueMouseTrackingRef = new ctypes.StructType("OpaqueMouseTrackingRef");
    this.MouseTrackingRef = this.OpaqueMouseTrackingRef.ptr;
    this.MouseTrackingOptions = this.UInt32;
    this.kMouseTrackingOptionsLocalClip = 0;
    this.kMouseTrackingOptionsGlobalClip = 1;
    this.kMouseTrackingOptionsStandard = 0;
    this.MouseTrackingRegionID = new ctypes.StructType("MouseTrackingRegionID", [{signature: this.OSType}, {id: this.SInt32}]);
    this.OpaqueToolboxObjectClassRef = new ctypes.StructType("OpaqueToolboxObjectClassRef");
    this.ToolboxObjectClassRef = this.OpaqueToolboxObjectClassRef.ptr;
    this.kEventParamTabletPointerRec = 1952608867;
    this.typeTabletPointerRec = 1952608867;
    this.kEventWindowDefDrawFrame = 1000;
    this.kEventWindowDefDrawPart = 1001;
    this.kEventWindowDefGetRegion = 1002;
    this.kEventWindowDefHitTest = 1003;
    this.kEventWindowDefInit = 1004;
    this.kEventWindowDefDispose = 1005;
    this.kEventWindowDefDragHilite = 1006;
    this.kEventWindowDefModified = 1007;
    this.kEventWindowDefSetupProxyDragImage = 1008;
    this.kEventWindowDefStateChanged = 1009;
    this.kEventWindowDefMeasureTitle = 1010;
    this.kEventWindowDefDrawGrowBox = 1011;
    this.kEventWindowDefGetGrowImageRegion = 1012;
    this.kEventClassEPPC = 1701867619;
    this.kEventHighLevelEvent = 1;
    this.kEventUpdateActiveInputArea = 1;
    this.kEventUnicodeForKeyEvent = 2;
    this.kEventOffsetToPos = 3;
    this.kEventPosToOffset = 4;
    this.kEventShowHideBottomWindow = 5;
    this.kEventGetSelectedText = 6;
    this.kEventProcessCommand = 1;
    this.kEventTabletPointer = 1;
    this.EventClassID = this.UInt32;
    this.EventClass = this.UInt32;
    this.EventType = this.UInt32;
    this.kMouseTrackingMousePressed = 1;
    this.kMouseTrackingMouseReleased = 2;
    this.kEventControlGetSubviewForMouseEvent = 16;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIWindowViews.h
function HIWindowViews_h(lib) {

    if (this._HIWINDOWVIEWS_H)
        return;
    this._HIWINDOWVIEWS_H = true;

    this.kHIWindowTitleBarPart = 2;
    this.kHIWindowDragPart = 3;
    this.kHIWindowTitleProxyIconPart = 2;
    this.kControlKindHIGrowBoxView = 1735552887;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/TextServices.h
function TextServices_h(lib) {
    ATSTypes_h.call(this, lib);
    CFBase_h.call(this, lib);
    Components_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._TEXTSERVICES_H)
        return;
    this._TEXTSERVICES_H = true;

    this.kTextService = 1953724003;
    this.kTSMVersion = 336;
    this.kTSM15Version = 336;
    this.kTSM20Version = 512;
    this.kTSM22Version = 544;
    this.kTSM23Version = 560;
    this.kTSM24Version = 576;
    this.InterfaceTypeList = this.OSType.array(1);
    this.TSMDocumentInterfaceType = this.OSType;
    this.kTextServiceDocumentInterfaceType = 1953724003;
    this.kTSMTEDocumentInterfaceType = 1953322053;
    this.kUnicodeDocumentInterfaceType = 1969516387;
    this.kUnicodeDocument = 1969516387;
    this.TextServiceClass = this.OSType;
    this.kKeyboardInputMethodClass = 1768845421;
    this.kInkInputMethodClass = 1768844064;
    this.kCharacterPaletteInputMethodClass = 1668312180;
    this.kSpeechInputMethodClass = 1987012963;
    this.kOCRInputMethodClass = 1868788256;
    this.OpaqueTSMDocumentID = new ctypes.StructType("OpaqueTSMDocumentID");
    this.TSMDocumentID = this.OpaqueTSMDocumentID.ptr;
    this.TSMDocumentPropertyTag = this.OSType;
    this.kTSMDocumentTextServicePropertyTag = 1953724003;
    this.kTSMDocumentUnicodePropertyTag = 1969516387;
    this.kTSMDocumentTSMTEPropertyTag = 1953322053;
    this.kTSMDocumentSupportGlyphInfoPropertyTag = 1685088105;
    this.kTSMDocumentUseFloatingWindowPropertyTag = 1970501485;
    this.kTSMDocumentUnicodeInputWindowPropertyTag = 1685091682;
    this.kTSMDocumentSupportDocumentAccessPropertyTag = 1684107385;
    this.kTSMDocumentPropertySupportGlyphInfo = 1685088105;
    this.kTSMDocumentPropertyUnicodeInputWindow = 1685091682;
    this.kTSMDocumentRefconPropertyTag = 1919247971;
    this.kTSMDocumentInputModePropertyTag = 1768778093;
    this.kTSMDocumentWindowLevelPropertyTag = 1953983600;
    this.kTSMDocumentInputSourceOverridePropertyTag = 1768843635;
    this.kTSMDocumentEnabledInputSourcesPropertyTag = 1701734771;
    this.kUnknownLanguage = 65535;
    this.kUnknownScript = 65535;
    this.kNeutralScript = 65535;
    this.bTakeActiveEvent = 15;
    this.bHandleAERecording = 16;
    this.bScriptMask = 32512;
    this.bLanguageMask = 255;
    this.bScriptLanguageMask = 32767;
    this.kCMGetScriptLangSupport = 1;
    this.kCMInitiateTextService = 2;
    this.kCMTerminateTextService = 3;
    this.kCMActivateTextService = 4;
    this.kCMDeactivateTextService = 5;
    this.kCMTextServiceEvent = 6;
    this.kCMTextServiceEventRef = 6;
    this.kCMGetTextServiceMenu = 7;
    this.kCMTextServiceMenuSelect = 8;
    this.kCMFixTextService = 9;
    this.kCMSetTextServiceCursor = 10;
    this.kCMHidePaletteWindows = 11;
    this.kCMGetTextServiceProperty = 12;
    this.kCMSetTextServiceProperty = 13;
    this.kCMUCTextServiceEvent = 14;
    this.kCMCopyTextServiceInputModeList = 15;
    this.kCMInputModePaletteItemHit = 16;
    this.kCMGetInputModePaletteMenu = 17;
    this.TextServiceInfo = new ctypes.StructType("TextServiceInfo", [{fComponent: this.Component}, {fItemName: this.Str255}]);
    this.TextServiceInfoPtr = this.TextServiceInfo.ptr;
    this.TextServiceList = new ctypes.StructType("TextServiceList", [{fTextServiceCount: ctypes.short}, {fServices: this.TextServiceInfo.array(1)}]);
    this.TextServiceListPtr = this.TextServiceList.ptr;
    this.TextServiceListHandle = this.TextServiceListPtr.ptr;
    this.ScriptLanguageRecord = new ctypes.StructType("ScriptLanguageRecord", [{fScript: this.ScriptCode}, {fLanguage: this.LangCode}]);
    this.ScriptLanguageSupport = new ctypes.StructType("ScriptLanguageSupport", [{fScriptLanguageCount: this.SInt16}, {fScriptLanguageArray: this.ScriptLanguageRecord.array(1)}]);
    this.ScriptLanguageSupportPtr = this.ScriptLanguageSupport.ptr;
    this.ScriptLanguageSupportHandle = this.ScriptLanguageSupportPtr.ptr;
    this.TSMGlyphInfo = new ctypes.StructType("TSMGlyphInfo", [{range: this.CFRange}, {fontRef: this.ATSFontRef}, {collection: this.UInt16}, {glyphID: this.UInt16}]);
    this.TSMGlyphInfoArray = new ctypes.StructType("TSMGlyphInfoArray", [{numGlyphInfo: this.ItemCount}, {glyphInfo: this.TSMGlyphInfo.array(1)}]);
    this.TextServicePropertyTag = this.OSType;
    this.kTextServiceJaTypingMethodPropertyTag = 1786018160;
    this.kTextServiceInputModePropertyTag = 1768778093;
    this.kIMJaTypingMethodProperty = 1786018160;
    this.kIMJaTypingMethodRoman = 1919905121;
    this.kIMJaTypingMethodKana = 1801547361;
    this.TextServicePropertyValue = this.SInt32;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIImageViews.h
function HIImageViews_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._HIIMAGEVIEWS_H)
        return;
    this._HIIMAGEVIEWS_H = true;

    this.kControlKindHIImageView = 1768776039;
    this.HIImageViewAutoTransformOptions = this.UInt32;
    this.kHIImageViewAutoTransformNone = 0;
    this.kHIImageViewAutoTransformOnDisable = 1;
    this.kHIImageViewAutoTransformOnDeactivate = 2;
    this.kHIImageViewImageTag = 1768776039;
    this.kControlIconProc = 320;
    this.kControlIconNoTrackProc = 321;
    this.kControlIconSuiteProc = 322;
    this.kControlIconSuiteNoTrackProc = 323;
    this.kControlIconRefProc = 324;
    this.kControlIconRefNoTrackProc = 325;
    this.kControlKindIcon = 1768124270;
    this.kControlIconTransformTag = 1953654381;
    this.kControlIconAlignmentTag = 1634494318;
    this.kControlIconResourceIDTag = 1769104755;
    this.kControlIconContentTag = 1668247156;
    this.kControlImageWellProc = 176;
    this.kControlKindImageWell = 2003135596;
    this.kControlImageWellContentTag = 1668247156;
    this.kControlImageWellTransformTag = 1953653102;
    this.kControlImageWellIsDragDestinationTag = 1685217639;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Appearance.h
function Appearance_h(lib) {
    Collections_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._APPEARANCE_H)
        return;
    this._APPEARANCE_H = true;

    this.kAppearanceEventClass = 1634758770;
    this.kAEAppearanceChanged = 1953000805;
    this.kAESystemFontChanged = 1937339238;
    this.kAESmallSystemFontChanged = 1936942702;
    this.kAEViewsFontChanged = 1986424436;
    this.kThemeDataFileType = 1953000805;
    this.kThemePlatinumFileType = 1886155886;
    this.kThemeCustomThemesFileType = 1935893870;
    this.kThemeSoundTrackFileType = 1953721956;
    this.AppearancePartCode = this.SInt16;
    this.kAppearancePartMetaNone = 0;
    this.kAppearancePartMetaDisabled = 254;
    this.kAppearancePartMetaInactive = 255;
    this.kAppearancePartIndicator = 129;
    this.kAppearancePartUpButton = 20;
    this.kAppearancePartDownButton = 21;
    this.kAppearancePartLeftButton = 20;
    this.kAppearancePartRightButton = 21;
    this.kAppearancePartPageUpArea = 22;
    this.kAppearancePartPageDownArea = 23;
    this.kAppearancePartPageLeftArea = 22;
    this.kAppearancePartPageRightArea = 23;
    this.AppearanceRegionCode = this.UInt16;
    this.kAppearanceRegionTitleBar = 0;
    this.kAppearanceRegionTitleText = 1;
    this.kAppearanceRegionCloseBox = 2;
    this.kAppearanceRegionZoomBox = 3;
    this.kAppearanceRegionDrag = 5;
    this.kAppearanceRegionGrow = 6;
    this.kAppearanceRegionCollapseBox = 7;
    this.kAppearanceRegionTitleProxyIcon = 8;
    this.kAppearanceRegionStructure = 32;
    this.kAppearanceRegionContent = 33;
    this.kAppearanceRegionToolbarButton = 41;
    this.kThemeBrushDialogBackgroundActive = 1;
    this.kThemeBrushDialogBackgroundInactive = 2;
    this.kThemeBrushAlertBackgroundActive = 3;
    this.kThemeBrushAlertBackgroundInactive = 4;
    this.kThemeBrushModelessDialogBackgroundActive = 5;
    this.kThemeBrushModelessDialogBackgroundInactive = 6;
    this.kThemeBrushUtilityWindowBackgroundActive = 7;
    this.kThemeBrushUtilityWindowBackgroundInactive = 8;
    this.kThemeBrushListViewSortColumnBackground = 9;
    this.kThemeBrushListViewBackground = 10;
    this.kThemeBrushIconLabelBackground = 11;
    this.kThemeBrushListViewSeparator = 12;
    this.kThemeBrushChasingArrows = 13;
    this.kThemeBrushDragHilite = 14;
    this.kThemeBrushDocumentWindowBackground = 15;
    this.kThemeBrushFinderWindowBackground = 16;
    this.kThemeBrushScrollBarDelimiterActive = 17;
    this.kThemeBrushScrollBarDelimiterInactive = 18;
    this.kThemeBrushFocusHighlight = 19;
    this.kThemeBrushPopupArrowActive = 20;
    this.kThemeBrushPopupArrowPressed = 21;
    this.kThemeBrushPopupArrowInactive = 22;
    this.kThemeBrushAppleGuideCoachmark = 23;
    this.kThemeBrushIconLabelBackgroundSelected = 24;
    this.kThemeBrushStaticAreaFill = 25;
    this.kThemeBrushActiveAreaFill = 26;
    this.kThemeBrushButtonFrameActive = 27;
    this.kThemeBrushButtonFrameInactive = 28;
    this.kThemeBrushButtonFaceActive = 29;
    this.kThemeBrushButtonFaceInactive = 30;
    this.kThemeBrushButtonFacePressed = 31;
    this.kThemeBrushButtonActiveDarkShadow = 32;
    this.kThemeBrushButtonActiveDarkHighlight = 33;
    this.kThemeBrushButtonActiveLightShadow = 34;
    this.kThemeBrushButtonActiveLightHighlight = 35;
    this.kThemeBrushButtonInactiveDarkShadow = 36;
    this.kThemeBrushButtonInactiveDarkHighlight = 37;
    this.kThemeBrushButtonInactiveLightShadow = 38;
    this.kThemeBrushButtonInactiveLightHighlight = 39;
    this.kThemeBrushButtonPressedDarkShadow = 40;
    this.kThemeBrushButtonPressedDarkHighlight = 41;
    this.kThemeBrushButtonPressedLightShadow = 42;
    this.kThemeBrushButtonPressedLightHighlight = 43;
    this.kThemeBrushBevelActiveLight = 44;
    this.kThemeBrushBevelActiveDark = 45;
    this.kThemeBrushBevelInactiveLight = 46;
    this.kThemeBrushBevelInactiveDark = 47;
    this.kThemeBrushNotificationWindowBackground = 48;
    this.kThemeBrushMovableModalBackground = 49;
    this.kThemeBrushSheetBackgroundOpaque = 50;
    this.kThemeBrushDrawerBackground = 51;
    this.kThemeBrushToolbarBackground = 52;
    this.kThemeBrushSheetBackgroundTransparent = 53;
    this.kThemeBrushMenuBackground = 54;
    this.kThemeBrushMenuBackgroundSelected = 55;
    this.kThemeBrushListViewOddRowBackground = 56;
    this.kThemeBrushListViewEvenRowBackground = 57;
    this.kThemeBrushListViewColumnDivider = 58;
    this.kThemeBrushSheetBackground = 50;
    this.kThemeBrushBlack = -1;
    this.kThemeBrushWhite = -2;
    this.kThemeBrushPrimaryHighlightColor = -3;
    this.kThemeBrushSecondaryHighlightColor = -4;
    this.kThemeBrushAlternatePrimaryHighlightColor = -5;
    this.ThemeBrush = this.SInt16;
    this.kThemeTextColorDialogActive = 1;
    this.kThemeTextColorDialogInactive = 2;
    this.kThemeTextColorAlertActive = 3;
    this.kThemeTextColorAlertInactive = 4;
    this.kThemeTextColorModelessDialogActive = 5;
    this.kThemeTextColorModelessDialogInactive = 6;
    this.kThemeTextColorWindowHeaderActive = 7;
    this.kThemeTextColorWindowHeaderInactive = 8;
    this.kThemeTextColorPlacardActive = 9;
    this.kThemeTextColorPlacardInactive = 10;
    this.kThemeTextColorPlacardPressed = 11;
    this.kThemeTextColorPushButtonActive = 12;
    this.kThemeTextColorPushButtonInactive = 13;
    this.kThemeTextColorPushButtonPressed = 14;
    this.kThemeTextColorBevelButtonActive = 15;
    this.kThemeTextColorBevelButtonInactive = 16;
    this.kThemeTextColorBevelButtonPressed = 17;
    this.kThemeTextColorPopupButtonActive = 18;
    this.kThemeTextColorPopupButtonInactive = 19;
    this.kThemeTextColorPopupButtonPressed = 20;
    this.kThemeTextColorIconLabel = 21;
    this.kThemeTextColorListView = 22;
    this.kThemeTextColorDocumentWindowTitleActive = 23;
    this.kThemeTextColorDocumentWindowTitleInactive = 24;
    this.kThemeTextColorMovableModalWindowTitleActive = 25;
    this.kThemeTextColorMovableModalWindowTitleInactive = 26;
    this.kThemeTextColorUtilityWindowTitleActive = 27;
    this.kThemeTextColorUtilityWindowTitleInactive = 28;
    this.kThemeTextColorPopupWindowTitleActive = 29;
    this.kThemeTextColorPopupWindowTitleInactive = 30;
    this.kThemeTextColorRootMenuActive = 31;
    this.kThemeTextColorRootMenuSelected = 32;
    this.kThemeTextColorRootMenuDisabled = 33;
    this.kThemeTextColorMenuItemActive = 34;
    this.kThemeTextColorMenuItemSelected = 35;
    this.kThemeTextColorMenuItemDisabled = 36;
    this.kThemeTextColorPopupLabelActive = 37;
    this.kThemeTextColorPopupLabelInactive = 38;
    this.kThemeTextColorTabFrontActive = 39;
    this.kThemeTextColorTabNonFrontActive = 40;
    this.kThemeTextColorTabNonFrontPressed = 41;
    this.kThemeTextColorTabFrontInactive = 42;
    this.kThemeTextColorTabNonFrontInactive = 43;
    this.kThemeTextColorIconLabelSelected = 44;
    this.kThemeTextColorBevelButtonStickyActive = 45;
    this.kThemeTextColorBevelButtonStickyInactive = 46;
    this.kThemeTextColorNotification = 47;
    this.kThemeTextColorSystemDetail = 48;
    this.kThemeTextColorBlack = -1;
    this.kThemeTextColorWhite = -2;
    this.ThemeTextColor = this.SInt16;
    this.kThemeStateInactive = 0;
    this.kThemeStateActive = 1;
    this.kThemeStatePressed = 2;
    this.kThemeStateRollover = 6;
    this.kThemeStateUnavailable = 7;
    this.kThemeStateUnavailableInactive = 8;
    this.kThemeStateDisabled = 0;
    this.kThemeStatePressedUp = 2;
    this.kThemeStatePressedDown = 3;
    this.ThemeDrawState = this.UInt32;
    this.kThemeArrowCursor = 0;
    this.kThemeCopyArrowCursor = 1;
    this.kThemeAliasArrowCursor = 2;
    this.kThemeContextualMenuArrowCursor = 3;
    this.kThemeIBeamCursor = 4;
    this.kThemeCrossCursor = 5;
    this.kThemePlusCursor = 6;
    this.kThemeWatchCursor = 7;
    this.kThemeClosedHandCursor = 8;
    this.kThemeOpenHandCursor = 9;
    this.kThemePointingHandCursor = 10;
    this.kThemeCountingUpHandCursor = 11;
    this.kThemeCountingDownHandCursor = 12;
    this.kThemeCountingUpAndDownHandCursor = 13;
    this.kThemeSpinningCursor = 14;
    this.kThemeResizeLeftCursor = 15;
    this.kThemeResizeRightCursor = 16;
    this.kThemeResizeLeftRightCursor = 17;
    this.kThemeNotAllowedCursor = 18;
    this.kThemeResizeUpCursor = 19;
    this.kThemeResizeDownCursor = 20;
    this.kThemeResizeUpDownCursor = 21;
    this.kThemePoofCursor = 22;
    this.ThemeCursor = this.UInt32;
    this.kThemeMenuBarNormal = 0;
    this.kThemeMenuBarSelected = 1;
    this.ThemeMenuBarState = this.UInt16;
    this.kThemeMenuSquareMenuBar = 1;
    this.kThemeMenuActive = 0;
    this.kThemeMenuSelected = 1;
    this.kThemeMenuDisabled = 3;
    this.ThemeMenuState = this.UInt16;
    this.kThemeMenuTypePullDown = 0;
    this.kThemeMenuTypePopUp = 1;
    this.kThemeMenuTypeHierarchical = 2;
    this.kThemeMenuTypeInactive = 256;
    this.ThemeMenuType = this.UInt16;
    this.kThemeMenuItemPlain = 0;
    this.kThemeMenuItemHierarchical = 1;
    this.kThemeMenuItemScrollUpArrow = 2;
    this.kThemeMenuItemScrollDownArrow = 3;
    this.kThemeMenuItemAtTop = 256;
    this.kThemeMenuItemAtBottom = 512;
    this.kThemeMenuItemHierBackground = 1024;
    this.kThemeMenuItemPopUpBackground = 2048;
    this.kThemeMenuItemHasIcon = 32768;
    this.kThemeMenuItemNoBackground = 16384;
    this.kThemeMenuItemAlignRight = 8192;
    this.ThemeMenuItemType = this.UInt16;
    this.kThemeBackgroundTabPane = 1;
    this.kThemeBackgroundPlacard = 2;
    this.kThemeBackgroundWindowHeader = 3;
    this.kThemeBackgroundListViewWindowHeader = 4;
    this.kThemeBackgroundSecondaryGroupBox = 5;
    this.kThemeBackgroundMetal = 6;
    this.ThemeBackgroundKind = this.UInt32;
    this.kThemeNameTag = 1851878757;
    this.kThemeVariantNameTag = 1986097774;
    this.kThemeVariantBaseTintTag = 1953066612;
    this.kThemeHighlightColorTag = 1751347052;
    this.kThemeScrollBarArrowStyleTag = 1935827314;
    this.kThemeScrollBarThumbStyleTag = 1935832168;
    this.kThemeSoundsEnabledTag = 1936614515;
    this.kThemeDblClickCollapseTag = 1668246636;
    this.kThemeAppearanceFileNameTag = 1953000805;
    this.kThemeSystemFontTag = 1818719078;
    this.kThemeSmallSystemFontTag = 1936552806;
    this.kThemeViewsFontTag = 1986424436;
    this.kThemeViewsFontSizeTag = 1986425722;
    this.kThemeDesktopPatternNameTag = 1885434990;
    this.kThemeDesktopPatternTag = 1885434996;
    this.kThemeDesktopPictureNameTag = 1685089901;
    this.kThemeDesktopPictureAliasTag = 1685086572;
    this.kThemeDesktopPictureAlignmentTag = 1685086574;
    this.kThemeHighlightColorNameTag = 1751346797;
    this.kThemeExamplePictureIDTag = 1701865827;
    this.kThemeSoundTrackNameTag = 1936614516;
    this.kThemeSoundMaskTag = 1936552811;
    this.kThemeUserDefinedTag = 1970496882;
    this.kThemeSmoothFontEnabledTag = 1936551791;
    this.kThemeSmoothFontMinSizeTag = 1936551795;
    this.kTiledOnScreen = 1;
    this.kCenterOnScreen = 2;
    this.kFitToScreen = 3;
    this.kFillScreen = 4;
    this.kUseBestGuess = 5;
    this.kThemeCheckBoxClassicX = 0;
    this.kThemeCheckBoxCheckMark = 1;
    this.ThemeCheckBoxStyle = this.UInt16;
    this.kThemeScrollBarArrowsSingle = 0;
    this.kThemeScrollBarArrowsLowerRight = 1;
    this.ThemeScrollBarArrowStyle = this.UInt16;
    this.kThemeScrollBarThumbNormal = 0;
    this.kThemeScrollBarThumbProportional = 1;
    this.ThemeScrollBarThumbStyle = this.UInt16;
    this.kThemeSystemFont = 0;
    this.kThemeSmallSystemFont = 1;
    this.kThemeSmallEmphasizedSystemFont = 2;
    this.kThemeViewsFont = 3;
    this.kThemeEmphasizedSystemFont = 4;
    this.kThemeApplicationFont = 5;
    this.kThemeLabelFont = 6;
    this.kThemeSystemFontDetail = 7;
    this.kThemeSystemFontDetailEmphasized = 8;
    this.kThemeMenuTitleFont = 100;
    this.kThemeMenuItemFont = 101;
    this.kThemeMenuItemMarkFont = 102;
    this.kThemeMenuItemCmdKeyFont = 103;
    this.kThemeWindowTitleFont = 104;
    this.kThemePushButtonFont = 105;
    this.kThemeUtilityWindowTitleFont = 106;
    this.kThemeAlertHeaderFont = 107;
    this.kThemeToolbarFont = 108;
    this.kThemeMiniSystemFont = 109;
    this.kThemeCurrentPortFont = 200;
    this.kThemeSpecifiedFont = 201;
    this.kPublicThemeFontCount = 21;
    this.ThemeFontID = this.UInt16;
    this.kThemeTabNonFront = 0;
    this.kThemeTabNonFrontPressed = 1;
    this.kThemeTabNonFrontInactive = 2;
    this.kThemeTabFront = 3;
    this.kThemeTabFrontInactive = 4;
    this.kThemeTabNonFrontUnavailable = 5;
    this.kThemeTabFrontUnavailable = 6;
    this.ThemeTabStyle = this.UInt16;
    this.kThemeTabNorth = 0;
    this.kThemeTabSouth = 1;
    this.kThemeTabEast = 2;
    this.kThemeTabWest = 3;
    this.ThemeTabDirection = this.UInt16;
    this.kThemeSmallTabHeight = 16;
    this.kThemeLargeTabHeight = 21;
    this.kThemeTabPaneOverlap = 3;
    this.kThemeSmallTabHeightMax = 19;
    this.kThemeLargeTabHeightMax = 24;
    this.kThemeScrollBarMedium = 0;
    this.kThemeScrollBarSmall = 1;
    this.kThemeSliderMedium = 2;
    this.kThemeProgressBarMedium = 3;
    this.kThemeIndeterminateBarMedium = 4;
    this.kThemeRelevanceBar = 5;
    this.kThemeSliderSmall = 6;
    this.kThemeProgressBarLarge = 7;
    this.kThemeIndeterminateBarLarge = 8;
    this.kThemeScrollBarMini = 9;
    this.kThemeSliderMini = 10;
    this.kThemeProgressBarMini = 11;
    this.kThemeIndeterminateBarMini = 12;
    this.kThemeMediumScrollBar = 0;
    this.kThemeSmallScrollBar = 1;
    this.kThemeMediumSlider = 2;
    this.kThemeMediumProgressBar = 3;
    this.kThemeMediumIndeterminateBar = 4;
    this.kThemeSmallSlider = 6;
    this.kThemeLargeProgressBar = 7;
    this.kThemeLargeIndeterminateBar = 8;
    this.kThemeMiniScrollBar = 9;
    this.kThemeMiniSlider = 10;
    this.kThemeMiniProgressBar = 11;
    this.kThemeMiniIndeterminateBar = 12;
    this.ThemeTrackKind = this.UInt16;
    this.kThemeTrackActive = 0;
    this.kThemeTrackDisabled = 1;
    this.kThemeTrackNothingToScroll = 2;
    this.kThemeTrackInactive = 3;
    this.ThemeTrackEnableState = this.UInt8;
    this.kThemeLeftOutsideArrowPressed = 1;
    this.kThemeLeftInsideArrowPressed = 2;
    this.kThemeLeftTrackPressed = 4;
    this.kThemeThumbPressed = 8;
    this.kThemeRightTrackPressed = 16;
    this.kThemeRightInsideArrowPressed = 32;
    this.kThemeRightOutsideArrowPressed = 64;
    this.kThemeTopOutsideArrowPressed = 1;
    this.kThemeTopInsideArrowPressed = 2;
    this.kThemeTopTrackPressed = 4;
    this.kThemeBottomTrackPressed = 16;
    this.kThemeBottomInsideArrowPressed = 32;
    this.kThemeBottomOutsideArrowPressed = 64;
    this.ThemeTrackPressState = this.UInt8;
    this.kThemeThumbPlain = 0;
    this.kThemeThumbUpward = 1;
    this.kThemeThumbDownward = 2;
    this.ThemeThumbDirection = this.UInt8;
    this.kThemeTrackHorizontal = 1;
    this.kThemeTrackRightToLeft = 2;
    this.kThemeTrackShowThumb = 4;
    this.kThemeTrackThumbRgnIsNotGhost = 8;
    this.kThemeTrackNoScrollBarArrows = 16;
    this.kThemeTrackHasFocus = 32;
    this.kThemeTrackHideTrack = 64;
    this.ThemeTrackAttributes = this.UInt16;
    this.ScrollBarTrackInfo = new ctypes.StructType("ScrollBarTrackInfo", [{viewsize: this.SInt32}, {pressState: this.ThemeTrackPressState}]);
    this.SliderTrackInfo = new ctypes.StructType("SliderTrackInfo", [{thumbDir: this.ThemeThumbDirection}, {pressState: this.ThemeTrackPressState}]);
    this.ProgressTrackInfo = new ctypes.StructType("ProgressTrackInfo", [{phase: this.UInt8}]);
    this.ThemeTrackDrawInfo = new ctypes.StructType("ThemeTrackDrawInfo", []);
    this.kThemeWindowHasGrow = 1;
    this.kThemeWindowHasHorizontalZoom = 8;
    this.kThemeWindowHasVerticalZoom = 16;
    this.kThemeWindowHasFullZoom = 24;
    this.kThemeWindowHasCloseBox = 32;
    this.kThemeWindowHasCollapseBox = 64;
    this.kThemeWindowHasTitleText = 128;
    this.kThemeWindowIsCollapsed = 256;
    this.kThemeWindowHasDirty = 512;
    this.kThemeWindowHasToolbarButton = 2048;
    this.ThemeWindowAttributes = this.UInt32;
    this.kThemeDocumentWindow = 0;
    this.kThemeDialogWindow = 1;
    this.kThemeMovableDialogWindow = 2;
    this.kThemeAlertWindow = 3;
    this.kThemeMovableAlertWindow = 4;
    this.kThemePlainDialogWindow = 5;
    this.kThemeShadowDialogWindow = 6;
    this.kThemePopupWindow = 7;
    this.kThemeUtilityWindow = 8;
    this.kThemeUtilitySideWindow = 9;
    this.kThemeSheetWindow = 10;
    this.kThemeDrawerWindow = 11;
    this.ThemeWindowType = this.UInt16;
    this.kThemeWidgetCloseBox = 0;
    this.kThemeWidgetZoomBox = 1;
    this.kThemeWidgetCollapseBox = 2;
    this.kThemeWidgetDirtyCloseBox = 6;
    this.kThemeWidgetABox = 3;
    this.kThemeWidgetBBox = 4;
    this.kThemeWidgetBOffBox = 5;
    this.ThemeTitleBarWidget = this.UInt16;
    this.kThemeArrowLeft = 0;
    this.kThemeArrowDown = 1;
    this.kThemeArrowRight = 2;
    this.kThemeArrowUp = 3;
    this.ThemeArrowOrientation = this.UInt16;
    this.kThemeArrow3pt = 0;
    this.kThemeArrow5pt = 1;
    this.kThemeArrow7pt = 2;
    this.kThemeArrow9pt = 3;
    this.ThemePopupArrowSize = this.UInt16;
    this.kThemeGrowLeft = 1;
    this.kThemeGrowRight = 2;
    this.kThemeGrowUp = 4;
    this.kThemeGrowDown = 8;
    this.ThemeGrowDirection = this.UInt16;
    this.kThemePushButton = 0;
    this.kThemeCheckBox = 1;
    this.kThemeRadioButton = 2;
    this.kThemeBevelButton = 3;
    this.kThemeArrowButton = 4;
    this.kThemePopupButton = 5;
    this.kThemeDisclosureTriangle = 6;
    this.kThemeIncDecButton = 7;
    this.kThemeBevelButtonSmall = 8;
    this.kThemeBevelButtonMedium = 3;
    this.kThemeBevelButtonLarge = 9;
    this.kThemeListHeaderButton = 10;
    this.kThemeRoundButton = 11;
    this.kThemeRoundButtonLarge = 12;
    this.kThemeCheckBoxSmall = 13;
    this.kThemeRadioButtonSmall = 14;
    this.kThemeRoundedBevelButton = 15;
    this.kThemeComboBox = 16;
    this.kThemeComboBoxSmall = 17;
    this.kThemeComboBoxMini = 18;
    this.kThemeCheckBoxMini = 19;
    this.kThemeRadioButtonMini = 20;
    this.kThemeIncDecButtonSmall = 21;
    this.kThemeIncDecButtonMini = 22;
    this.kThemeArrowButtonSmall = 23;
    this.kThemeArrowButtonMini = 24;
    this.kThemePushButtonNormal = 25;
    this.kThemePushButtonSmall = 26;
    this.kThemePushButtonMini = 27;
    this.kThemePopupButtonNormal = 28;
    this.kThemePopupButtonSmall = 29;
    this.kThemePopupButtonMini = 30;
    this.kThemeBevelButtonInset = 31;
    this.kThemePushButtonTextured = 32;
    this.kThemePushButtonTexturedSmall = 33;
    this.kThemeRoundButtonHelp = 34;
    this.kThemePushButtonInset = 32;
    this.kThemePushButtonInsetSmall = 33;
    this.kThemeNormalCheckBox = 1;
    this.kThemeNormalRadioButton = 2;
    this.kThemeLargeBevelButton = 9;
    this.kThemeMediumBevelButton = 3;
    this.kThemeMiniCheckBox = 19;
    this.kThemeMiniRadioButton = 20;
    this.kThemeSmallBevelButton = 8;
    this.kThemeSmallCheckBox = 13;
    this.kThemeSmallRadioButton = 14;
    this.kThemeLargeRoundButton = 12;
    this.kThemeDisclosureButton = 6;
    this.ThemeButtonKind = this.UInt16;
    this.kThemeButtonOff = 0;
    this.kThemeButtonOn = 1;
    this.kThemeButtonMixed = 2;
    this.kThemeDisclosureRight = 0;
    this.kThemeDisclosureDown = 1;
    this.kThemeDisclosureLeft = 2;
    this.ThemeButtonValue = this.UInt16;
    this.kThemeAdornmentNone = 0;
    this.kThemeAdornmentDefault = 1;
    this.kThemeAdornmentFocus = 4;
    this.kThemeAdornmentRightToLeft = 16;
    this.kThemeAdornmentDrawIndicatorOnly = 32;
    this.kThemeAdornmentHeaderButtonLeftNeighborSelected = 64;
    this.kThemeAdornmentHeaderButtonRightNeighborSelected = 128;
    this.kThemeAdornmentHeaderButtonSortUp = 256;
    this.kThemeAdornmentHeaderMenuButton = 512;
    this.kThemeAdornmentHeaderButtonNoShadow = 1024;
    this.kThemeAdornmentHeaderButtonShadowOnly = 2048;
    this.kThemeAdornmentHeaderButtonNoSortArrow = 4096;
    this.kThemeAdornmentArrowLeftArrow = 64;
    this.kThemeAdornmentArrowDownArrow = 128;
    this.kThemeAdornmentArrowDoubleArrow = 256;
    this.kThemeAdornmentArrowUpArrow = 512;
    this.kThemeAdornmentArrowRightArrow = 1024;
    this.kThemeAdornmentNoShadow = 1024;
    this.kThemeAdornmentShadowOnly = 2048;
    this.ThemeButtonAdornment = this.UInt16;
    this.ThemeButtonDrawInfo = new ctypes.StructType("ThemeButtonDrawInfo", [{state: this.ThemeDrawState}, {value: this.ThemeButtonValue}, {adornment: this.ThemeButtonAdornment}]);
    this.ThemeButtonDrawInfoPtr = this.ThemeButtonDrawInfo.ptr;
    this.kThemeNoSounds = 0;
    this.kThemeWindowSoundsMask = 1;
    this.kThemeMenuSoundsMask = 2;
    this.kThemeControlSoundsMask = 4;
    this.kThemeFinderSoundsMask = 8;
    this.kThemeDragSoundNone = 0;
    this.kThemeDragSoundMoveWindow = 2003660662;
    this.kThemeDragSoundGrowWindow = 2003268207;
    this.kThemeDragSoundMoveUtilWindow = 1970106230;
    this.kThemeDragSoundGrowUtilWindow = 1969713775;
    this.kThemeDragSoundMoveDialog = 1684893558;
    this.kThemeDragSoundMoveAlert = 1634561910;
    this.kThemeDragSoundMoveIcon = 1768779638;
    this.kThemeDragSoundSliderThumb = 1936487528;
    this.kThemeDragSoundSliderGhost = 1936484200;
    this.kThemeDragSoundScrollBarThumb = 1935832168;
    this.kThemeDragSoundScrollBarGhost = 1935828840;
    this.kThemeDragSoundScrollBarArrowDecreasing = 1935827300;
    this.kThemeDragSoundScrollBarArrowIncreasing = 1935827305;
    this.kThemeDragSoundDragging = 1685217639;
    this.ThemeDragSoundKind = this.OSType;
    this.kThemeSoundNone = 0;
    this.kThemeSoundMenuOpen = 1835955567;
    this.kThemeSoundMenuClose = 1835955555;
    this.kThemeSoundMenuItemHilite = 1835955561;
    this.kThemeSoundMenuItemRelease = 1835955571;
    this.kThemeSoundWindowClosePress = 2003004528;
    this.kThemeSoundWindowCloseEnter = 2003004517;
    this.kThemeSoundWindowCloseExit = 2003004536;
    this.kThemeSoundWindowCloseRelease = 2003004530;
    this.kThemeSoundWindowZoomPress = 2004512112;
    this.kThemeSoundWindowZoomEnter = 2004512101;
    this.kThemeSoundWindowZoomExit = 2004512120;
    this.kThemeSoundWindowZoomRelease = 2004512114;
    this.kThemeSoundWindowCollapsePress = 2003005296;
    this.kThemeSoundWindowCollapseEnter = 2003005285;
    this.kThemeSoundWindowCollapseExit = 2003005304;
    this.kThemeSoundWindowCollapseRelease = 2003005298;
    this.kThemeSoundWindowDragBoundary = 2003067492;
    this.kThemeSoundUtilWinClosePress = 1969450096;
    this.kThemeSoundUtilWinCloseEnter = 1969450085;
    this.kThemeSoundUtilWinCloseExit = 1969450104;
    this.kThemeSoundUtilWinCloseRelease = 1969450098;
    this.kThemeSoundUtilWinZoomPress = 1970957680;
    this.kThemeSoundUtilWinZoomEnter = 1970957669;
    this.kThemeSoundUtilWinZoomExit = 1970957688;
    this.kThemeSoundUtilWinZoomRelease = 1970957682;
    this.kThemeSoundUtilWinCollapsePress = 1969450864;
    this.kThemeSoundUtilWinCollapseEnter = 1969450853;
    this.kThemeSoundUtilWinCollapseExit = 1969450872;
    this.kThemeSoundUtilWinCollapseRelease = 1969450866;
    this.kThemeSoundUtilWinDragBoundary = 1969513060;
    this.kThemeSoundWindowOpen = 2003791982;
    this.kThemeSoundWindowClose = 2003004531;
    this.kThemeSoundWindowZoomIn = 2004512105;
    this.kThemeSoundWindowZoomOut = 2004512111;
    this.kThemeSoundWindowCollapseUp = 2003005292;
    this.kThemeSoundWindowCollapseDown = 2003138672;
    this.kThemeSoundWindowActivate = 2002871156;
    this.kThemeSoundUtilWindowOpen = 1970237550;
    this.kThemeSoundUtilWindowClose = 1969450099;
    this.kThemeSoundUtilWindowZoomIn = 1970957673;
    this.kThemeSoundUtilWindowZoomOut = 1970957679;
    this.kThemeSoundUtilWindowCollapseUp = 1969450860;
    this.kThemeSoundUtilWindowCollapseDown = 1969584240;
    this.kThemeSoundUtilWindowActivate = 1969316724;
    this.kThemeSoundDialogOpen = 1685024878;
    this.kThemeSoundDialogClose = 1684825955;
    this.kThemeSoundAlertOpen = 1634693230;
    this.kThemeSoundAlertClose = 1634497635;
    this.kThemeSoundPopupWindowOpen = 1886875504;
    this.kThemeSoundPopupWindowClose = 1886872428;
    this.kThemeSoundButtonPress = 1651797616;
    this.kThemeSoundButtonEnter = 1651797605;
    this.kThemeSoundButtonExit = 1651797624;
    this.kThemeSoundButtonRelease = 1651797618;
    this.kThemeSoundDefaultButtonPress = 1684173936;
    this.kThemeSoundDefaultButtonEnter = 1684173925;
    this.kThemeSoundDefaultButtonExit = 1684173944;
    this.kThemeSoundDefaultButtonRelease = 1684173938;
    this.kThemeSoundCancelButtonPress = 1667396720;
    this.kThemeSoundCancelButtonEnter = 1667396709;
    this.kThemeSoundCancelButtonExit = 1667396728;
    this.kThemeSoundCancelButtonRelease = 1667396722;
    this.kThemeSoundCheckboxPress = 1667787632;
    this.kThemeSoundCheckboxEnter = 1667787621;
    this.kThemeSoundCheckboxExit = 1667787640;
    this.kThemeSoundCheckboxRelease = 1667787634;
    this.kThemeSoundRadioPress = 1918985328;
    this.kThemeSoundRadioEnter = 1918985317;
    this.kThemeSoundRadioExit = 1918985336;
    this.kThemeSoundRadioRelease = 1918985330;
    this.kThemeSoundScrollArrowPress = 1935827312;
    this.kThemeSoundScrollArrowEnter = 1935827301;
    this.kThemeSoundScrollArrowExit = 1935827320;
    this.kThemeSoundScrollArrowRelease = 1935827314;
    this.kThemeSoundScrollEndOfTrack = 1935832165;
    this.kThemeSoundScrollTrackPress = 1935832176;
    this.kThemeSoundSliderEndOfTrack = 1936487525;
    this.kThemeSoundSliderTrackPress = 1936487536;
    this.kThemeSoundBalloonOpen = 1651273327;
    this.kThemeSoundBalloonClose = 1651273315;
    this.kThemeSoundBevelPress = 1650816624;
    this.kThemeSoundBevelEnter = 1650816613;
    this.kThemeSoundBevelExit = 1650816632;
    this.kThemeSoundBevelRelease = 1650816626;
    this.kThemeSoundLittleArrowUpPress = 1818326384;
    this.kThemeSoundLittleArrowDnPress = 1818322032;
    this.kThemeSoundLittleArrowEnter = 1818325605;
    this.kThemeSoundLittleArrowExit = 1818325624;
    this.kThemeSoundLittleArrowUpRelease = 1818326386;
    this.kThemeSoundLittleArrowDnRelease = 1818322034;
    this.kThemeSoundPopupPress = 1886351472;
    this.kThemeSoundPopupEnter = 1886351461;
    this.kThemeSoundPopupExit = 1886351480;
    this.kThemeSoundPopupRelease = 1886351474;
    this.kThemeSoundDisclosurePress = 1685283696;
    this.kThemeSoundDisclosureEnter = 1685283685;
    this.kThemeSoundDisclosureExit = 1685283704;
    this.kThemeSoundDisclosureRelease = 1685283698;
    this.kThemeSoundTabPressed = 1952539248;
    this.kThemeSoundTabEnter = 1952539237;
    this.kThemeSoundTabExit = 1952539256;
    this.kThemeSoundTabRelease = 1952539250;
    this.kThemeSoundDragTargetHilite = 1685350505;
    this.kThemeSoundDragTargetUnhilite = 1685353832;
    this.kThemeSoundDragTargetDrop = 1685349490;
    this.kThemeSoundEmptyTrash = 1718907507;
    this.kThemeSoundSelectItem = 1718838636;
    this.kThemeSoundNewItem = 1718510967;
    this.kThemeSoundReceiveDrop = 1717858928;
    this.kThemeSoundCopyDone = 1717792868;
    this.kThemeSoundResolveAlias = 1718772076;
    this.kThemeSoundLaunchApp = 1718378864;
    this.kThemeSoundDiskInsert = 1685285737;
    this.kThemeSoundDiskEject = 1685285733;
    this.kThemeSoundFinderDragOnIcon = 1717858158;
    this.kThemeSoundFinderDragOffIcon = 1717858150;
    this.ThemeSoundKind = this.OSType;
    this.kThemePopupTabNormalPosition = 0;
    this.kThemePopupTabCenterOnWindow = 1;
    this.kThemePopupTabCenterOnOffset = 2;
    this.ThemeWindowMetrics = new ctypes.StructType("ThemeWindowMetrics", [{metricSize: this.UInt16}, {titleHeight: this.SInt16}, {titleWidth: this.SInt16}, {popupTabOffset: this.SInt16}, {popupTabWidth: this.SInt16}, {popupTabPosition: this.UInt16}]);
    this.ThemeWindowMetricsPtr = this.ThemeWindowMetrics.ptr;
    this.OpaqueThemeDrawingState = new ctypes.StructType("OpaqueThemeDrawingState");
    this.ThemeDrawingState = this.OpaqueThemeDrawingState.ptr;
    this.ThemeTabTitleDrawProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Rect.ptr, this.ThemeTabStyle, this.ThemeTabDirection, this.SInt16, this.Boolean, this.URefCon]).ptr;
    this.ThemeEraseProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Rect.ptr, this.URefCon, this.SInt16, this.Boolean]).ptr;
    this.ThemeButtonDrawProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Rect.ptr, this.ThemeButtonKind, this.ThemeButtonDrawInfo.ptr, this.URefCon, this.SInt16, this.Boolean]).ptr;
    this.WindowTitleDrawingProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Rect.ptr, this.SInt16, this.Boolean, this.URefCon]).ptr;
    this.ThemeIteratorProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.ConstStr255Param, this.SInt16, this.Collection, this.PRefCon]).ptr;
    this.ThemeTabTitleDrawUPP = this.ThemeTabTitleDrawProcPtr;
    this.ThemeEraseUPP = this.ThemeEraseProcPtr;
    this.ThemeButtonDrawUPP = this.ThemeButtonDrawProcPtr;
    this.WindowTitleDrawingUPP = this.WindowTitleDrawingProcPtr;
    this.ThemeIteratorUPP = this.ThemeIteratorProcPtr;
    // Dropping inline function 'NewThemeTabTitleDrawUPP'.
    // Dropping inline function 'NewThemeEraseUPP'.
    // Dropping inline function 'NewThemeButtonDrawUPP'.
    // Dropping inline function 'NewWindowTitleDrawingUPP'.
    // Dropping inline function 'NewThemeIteratorUPP'.
    // Dropping inline function 'DisposeThemeTabTitleDrawUPP'.
    // Dropping inline function 'DisposeThemeEraseUPP'.
    // Dropping inline function 'DisposeThemeButtonDrawUPP'.
    // Dropping inline function 'DisposeWindowTitleDrawingUPP'.
    // Dropping inline function 'DisposeThemeIteratorUPP'.
    // Dropping inline function 'InvokeThemeTabTitleDrawUPP'.
    // Dropping inline function 'InvokeThemeEraseUPP'.
    // Dropping inline function 'InvokeThemeButtonDrawUPP'.
    // Dropping inline function 'InvokeWindowTitleDrawingUPP'.
    // Dropping inline function 'InvokeThemeIteratorUPP'.
    this.MenuTitleDrawingProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Rect.ptr, this.SInt16, this.Boolean, this.SRefCon]).ptr;
    this.MenuItemDrawingProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Rect.ptr, this.SInt16, this.Boolean, this.SRefCon]).ptr;
    this.MenuTitleDrawingUPP = this.MenuTitleDrawingProcPtr;
    this.MenuItemDrawingUPP = this.MenuItemDrawingProcPtr;
    // Dropping inline function 'NewMenuTitleDrawingUPP'.
    // Dropping inline function 'NewMenuItemDrawingUPP'.
    // Dropping inline function 'DisposeMenuTitleDrawingUPP'.
    // Dropping inline function 'DisposeMenuItemDrawingUPP'.
    // Dropping inline function 'InvokeMenuTitleDrawingUPP'.
    // Dropping inline function 'InvokeMenuItemDrawingUPP'.
    this.appearanceBadBrushIndexErr = -30560;
    this.appearanceProcessRegisteredErr = -30561;
    this.appearanceProcessNotRegisteredErr = -30562;
    this.appearanceBadTextColorIndexErr = -30563;
    this.appearanceThemeHasNoAccents = -30564;
    this.appearanceBadCursorIndexErr = -30565;
    this.kThemeActiveDialogBackgroundBrush = 1;
    this.kThemeInactiveDialogBackgroundBrush = 2;
    this.kThemeActiveAlertBackgroundBrush = 3;
    this.kThemeInactiveAlertBackgroundBrush = 4;
    this.kThemeActiveModelessDialogBackgroundBrush = 5;
    this.kThemeInactiveModelessDialogBackgroundBrush = 6;
    this.kThemeActiveUtilityWindowBackgroundBrush = 7;
    this.kThemeInactiveUtilityWindowBackgroundBrush = 8;
    this.kThemeListViewSortColumnBackgroundBrush = 9;
    this.kThemeListViewBackgroundBrush = 10;
    this.kThemeIconLabelBackgroundBrush = 11;
    this.kThemeListViewSeparatorBrush = 12;
    this.kThemeChasingArrowsBrush = 13;
    this.kThemeDragHiliteBrush = 14;
    this.kThemeDocumentWindowBackgroundBrush = 15;
    this.kThemeFinderWindowBackgroundBrush = 16;
    this.kThemeActiveScrollBarDelimiterBrush = 17;
    this.kThemeInactiveScrollBarDelimiterBrush = 18;
    this.kThemeFocusHighlightBrush = 19;
    this.kThemeActivePopupArrowBrush = 20;
    this.kThemePressedPopupArrowBrush = 21;
    this.kThemeInactivePopupArrowBrush = 22;
    this.kThemeAppleGuideCoachmarkBrush = 23;
    this.kThemeActiveDialogTextColor = 1;
    this.kThemeInactiveDialogTextColor = 2;
    this.kThemeActiveAlertTextColor = 3;
    this.kThemeInactiveAlertTextColor = 4;
    this.kThemeActiveModelessDialogTextColor = 5;
    this.kThemeInactiveModelessDialogTextColor = 6;
    this.kThemeActiveWindowHeaderTextColor = 7;
    this.kThemeInactiveWindowHeaderTextColor = 8;
    this.kThemeActivePlacardTextColor = 9;
    this.kThemeInactivePlacardTextColor = 10;
    this.kThemePressedPlacardTextColor = 11;
    this.kThemeActivePushButtonTextColor = 12;
    this.kThemeInactivePushButtonTextColor = 13;
    this.kThemePressedPushButtonTextColor = 14;
    this.kThemeActiveBevelButtonTextColor = 15;
    this.kThemeInactiveBevelButtonTextColor = 16;
    this.kThemePressedBevelButtonTextColor = 17;
    this.kThemeActivePopupButtonTextColor = 18;
    this.kThemeInactivePopupButtonTextColor = 19;
    this.kThemePressedPopupButtonTextColor = 20;
    this.kThemeIconLabelTextColor = 21;
    this.kThemeListViewTextColor = 22;
    this.kThemeActiveDocumentWindowTitleTextColor = 23;
    this.kThemeInactiveDocumentWindowTitleTextColor = 24;
    this.kThemeActiveMovableModalWindowTitleTextColor = 25;
    this.kThemeInactiveMovableModalWindowTitleTextColor = 26;
    this.kThemeActiveUtilityWindowTitleTextColor = 27;
    this.kThemeInactiveUtilityWindowTitleTextColor = 28;
    this.kThemeActivePopupWindowTitleColor = 29;
    this.kThemeInactivePopupWindowTitleColor = 30;
    this.kThemeActiveRootMenuTextColor = 31;
    this.kThemeSelectedRootMenuTextColor = 32;
    this.kThemeDisabledRootMenuTextColor = 33;
    this.kThemeActiveMenuItemTextColor = 34;
    this.kThemeSelectedMenuItemTextColor = 35;
    this.kThemeDisabledMenuItemTextColor = 36;
    this.kThemeActivePopupLabelTextColor = 37;
    this.kThemeInactivePopupLabelTextColor = 38;
    this.kAEThemeSwitch = 1953000805;
    this.kThemeNoAdornment = 0;
    this.kThemeDefaultAdornment = 1;
    this.kThemeFocusAdornment = 4;
    this.kThemeRightToLeftAdornment = 16;
    this.kThemeDrawIndicatorOnly = 32;
    this.kThemeBrushPassiveAreaFill = 25;
    this.kThemeScrollBar = 0;
    this.kThemeSlider = 2;
    this.kThemeProgressBar = 3;
    this.kThemeIndeterminateBar = 4;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Dialogs.h
function Dialogs_h(lib) {
    Events_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    IconsCore_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._DIALOGS_H)
        return;
    this._DIALOGS_H = true;

    this.kControlDialogItem = 4;
    this.kButtonDialogItem = 4;
    this.kCheckBoxDialogItem = 5;
    this.kRadioButtonDialogItem = 6;
    this.kResourceControlDialogItem = 7;
    this.kStaticTextDialogItem = 8;
    this.kEditTextDialogItem = 16;
    this.kIconDialogItem = 32;
    this.kPictureDialogItem = 64;
    this.kUserDialogItem = 0;
    this.kHelpDialogItem = 1;
    this.kItemDisableBit = 128;
    this.ctrlItem = 4;
    this.btnCtrl = 0;
    this.chkCtrl = 1;
    this.radCtrl = 2;
    this.resCtrl = 3;
    this.statText = 8;
    this.editText = 16;
    this.iconItem = 32;
    this.picItem = 64;
    this.userItem = 0;
    this.itemDisable = 128;
    this.kStdOkItemIndex = 1;
    this.kStdCancelItemIndex = 2;
    this.ok = 1;
    this.cancel = 2;
    this.kStopIcon = 0;
    this.kNoteIcon = 1;
    this.kCautionIcon = 2;
    this.stopIcon = 0;
    this.noteIcon = 1;
    this.cautionIcon = 2;
    this.DITLMethod = this.SInt16;
    this.overlayDITL = 0;
    this.appendDITLRight = 1;
    this.appendDITLBottom = 2;
    this.StageList = this.SInt16;
    this.DialogRef = this.DialogPtr;
    this.DialogTemplate = new ctypes.StructType("DialogTemplate", [{boundsRect: this.Rect}, {procID: this.SInt16}, {visible: this.Boolean}, {filler1: this.Boolean}, {goAwayFlag: this.Boolean}, {filler2: this.Boolean}, {refCon: this.SInt32}, {itemsID: this.SInt16}, {title: this.Str255}]);
    this.DialogTPtr = this.DialogTemplate.ptr;
    this.DialogTHndl = this.DialogTPtr.ptr;
    this.AlertTemplate = new ctypes.StructType("AlertTemplate", [{boundsRect: this.Rect}, {itemsID: this.SInt16}, {stages: this.StageList}]);
    this.AlertTPtr = this.AlertTemplate.ptr;
    this.AlertTHndl = this.AlertTPtr.ptr;
    this.DialogItemIndexZeroBased = this.SInt16;
    this.DialogItemIndex = this.SInt16;
    this.DialogItemType = this.SInt16;
    this.SoundProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.SInt16]).ptr;
    this.ModalFilterProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.DialogRef, this.EventRecord.ptr, this.DialogItemIndex.ptr]).ptr;
    this.ModalFilterYDProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.DialogRef, this.EventRecord.ptr, ctypes.short.ptr, ctypes.void_t.ptr]).ptr;
    this.UserItemProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.DialogRef, this.DialogItemIndex]).ptr;
    this.SoundUPP = this.SoundProcPtr;
    this.ModalFilterUPP = this.ModalFilterProcPtr;
    this.ModalFilterYDUPP = this.ModalFilterYDProcPtr;
    this.UserItemUPP = this.UserItemProcPtr;
    // Dropping inline function 'NewModalFilterUPP'.
    // Dropping inline function 'NewModalFilterYDUPP'.
    // Dropping inline function 'NewUserItemUPP'.
    // Dropping inline function 'DisposeModalFilterUPP'.
    // Dropping inline function 'DisposeModalFilterYDUPP'.
    // Dropping inline function 'DisposeUserItemUPP'.
    // Dropping inline function 'InvokeModalFilterUPP'.
    // Dropping inline function 'InvokeModalFilterYDUPP'.
    // Dropping inline function 'InvokeUserItemUPP'.
    this.kAlertStopAlert = 0;
    this.kAlertNoteAlert = 1;
    this.kAlertCautionAlert = 2;
    this.kAlertPlainAlert = 3;
    this.AlertType = this.SInt16;
    this.kAlertDefaultOKText = -1;
    this.kAlertDefaultCancelText = -1;
    this.kAlertDefaultOtherText = -1;
    this.kAlertStdAlertOKButton = 1;
    this.kAlertStdAlertCancelButton = 2;
    this.kAlertStdAlertOtherButton = 3;
    this.kAlertStdAlertHelpButton = 4;
    this.kDialogFlagsUseThemeBackground = 1;
    this.kDialogFlagsUseControlHierarchy = 2;
    this.kDialogFlagsHandleMovableModal = 4;
    this.kDialogFlagsUseThemeControls = 8;
    this.kDialogFlagsUseCompositing = 256;
    this.kAlertFlagsUseThemeBackground = 1;
    this.kAlertFlagsUseControlHierarchy = 2;
    this.kAlertFlagsAlertIsMovable = 4;
    this.kAlertFlagsUseThemeControls = 8;
    this.kAlertFlagsUseCompositing = 256;
    this.kDialogFontNoFontStyle = 0;
    this.kDialogFontUseFontMask = 1;
    this.kDialogFontUseFaceMask = 2;
    this.kDialogFontUseSizeMask = 4;
    this.kDialogFontUseForeColorMask = 8;
    this.kDialogFontUseBackColorMask = 16;
    this.kDialogFontUseModeMask = 32;
    this.kDialogFontUseJustMask = 64;
    this.kDialogFontUseAllMask = 255;
    this.kDialogFontAddFontSizeMask = 256;
    this.kDialogFontUseFontNameMask = 512;
    this.kDialogFontAddToMetaFontMask = 1024;
    this.kDialogFontUseThemeFontIDMask = 128;
    this.AlertStdAlertParamRec = new ctypes.StructType("AlertStdAlertParamRec", [{movable: this.Boolean}, {helpButton: this.Boolean}, {filterProc: this.ModalFilterUPP}, {defaultText: this.ConstStringPtr}, {cancelText: this.ConstStringPtr}, {otherText: this.ConstStringPtr}, {defaultButton: this.SInt16}, {cancelButton: this.SInt16}, {position: this.UInt16}]);
    this.AlertStdAlertParamPtr = this.AlertStdAlertParamRec.ptr;
    this.kHICommandOther = 1869899890;
    this.kStdCFStringAlertVersionOne = 1;
    this.kStdCFStringAlertVersionTwo = 2;
    this.kStdAlertDoNotDisposeSheet = 1;
    this.kStdAlertDoNotAnimateOnDefault = 2;
    this.kStdAlertDoNotAnimateOnCancel = 4;
    this.kStdAlertDoNotAnimateOnOther = 8;
    this.kStdAlertDoNotCloseOnHelp = 16;
    this.AlertStdCFStringAlertParamRec = new ctypes.StructType("AlertStdCFStringAlertParamRec", [{version: this.UInt32}, {movable: this.Boolean}, {helpButton: this.Boolean}, {defaultText: this.CFStringRef}, {cancelText: this.CFStringRef}, {otherText: this.CFStringRef}, {defaultButton: this.SInt16}, {cancelButton: this.SInt16}, {position: this.UInt16}, {flags: this.OptionBits}, {icon: this.IconRef}]);
    this.AlertStdCFStringAlertParamPtr = this.AlertStdCFStringAlertParamRec.ptr;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/TextEdit.h
function TextEdit_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._TEXTEDIT_H)
        return;
    this._TEXTEDIT_H = true;

    this.TEPtr = this.TERec.ptr;
    this.TEHandle = this.TEPtr.ptr;
    this.HighHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Rect.ptr, this.TEPtr]).ptr;
    this.EOLHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.char, this.TEPtr, this.TEHandle]).ptr;
    this.CaretHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.Rect.ptr, this.TEPtr]).ptr;
    this.WidthHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.unsigned_short, [ctypes.unsigned_short, ctypes.unsigned_short, ctypes.void_t.ptr, this.TEPtr, this.TEHandle]).ptr;
    this.TextWidthHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.unsigned_short, [ctypes.unsigned_short, ctypes.unsigned_short, ctypes.void_t.ptr, this.TEPtr, this.TEHandle]).ptr;
    this.NWidthHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.unsigned_short, [ctypes.unsigned_short, ctypes.unsigned_short, ctypes.short, ctypes.short, ctypes.void_t.ptr, ctypes.short.ptr, this.TEPtr, this.TEHandle]).ptr;
    this.DrawHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.unsigned_short, ctypes.unsigned_short, ctypes.void_t.ptr, this.TEPtr, this.TEHandle]).ptr;
    this.HitTestHookProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.unsigned_short, ctypes.unsigned_short, ctypes.unsigned_short, ctypes.void_t.ptr, this.TEPtr, this.TEHandle, ctypes.unsigned_short.ptr, ctypes.unsigned_short.ptr, this.Boolean.ptr]).ptr;
    this.TEFindWordProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.unsigned_short, ctypes.short, this.TEPtr, this.TEHandle, ctypes.unsigned_short.ptr, ctypes.unsigned_short.ptr]).ptr;
    this.TERecalcProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.TEPtr, ctypes.unsigned_short, ctypes.unsigned_short.ptr, ctypes.unsigned_short.ptr, ctypes.unsigned_short.ptr]).ptr;
    this.TEDoTextProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.TEPtr, ctypes.unsigned_short, ctypes.unsigned_short, ctypes.short, this.GrafPtr.ptr, ctypes.short.ptr]).ptr;
    this.TEClickLoopProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.TEPtr]).ptr;
    this.WordBreakProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.Ptr, ctypes.short]).ptr;
    this.HighHookUPP = this.HighHookProcPtr;
    this.EOLHookUPP = this.EOLHookProcPtr;
    this.CaretHookUPP = this.CaretHookProcPtr;
    this.WidthHookUPP = this.WidthHookProcPtr;
    this.TextWidthHookUPP = this.TextWidthHookProcPtr;
    this.NWidthHookUPP = this.NWidthHookProcPtr;
    this.DrawHookUPP = this.DrawHookProcPtr;
    this.HitTestHookUPP = this.HitTestHookProcPtr;
    this.TEFindWordUPP = this.TEFindWordProcPtr;
    this.TERecalcUPP = this.TERecalcProcPtr;
    this.TEDoTextUPP = this.TEDoTextProcPtr;
    this.TEClickLoopUPP = this.TEClickLoopProcPtr;
    this.WordBreakUPP = this.WordBreakProcPtr;
    this.TERec = new ctypes.StructType("TERec", [{destRect: this.Rect}, {viewRect: this.Rect}, {selRect: this.Rect}, {lineHeight: ctypes.short}, {fontAscent: ctypes.short}, {selPoint: this.Point}, {selStart: ctypes.short}, {selEnd: ctypes.short}, {active: ctypes.short}, {wordBreak: this.WordBreakUPP}, {clickLoop: this.TEClickLoopUPP}, {clickTime: ctypes.long}, {clickLoc: ctypes.short}, {caretTime: ctypes.long}, {caretState: ctypes.short}, {just: ctypes.short}, {teLength: ctypes.short}, {hText: this.Handle}, {hDispatchRec: ctypes.long}, {clikStuff: ctypes.short}, {crOnly: ctypes.short}, {txFont: ctypes.short}, {txFace: this.StyleField}, {txMode: ctypes.short}, {txSize: ctypes.short}, {inPort: this.GrafPtr}, {highHook: this.HighHookUPP}, {caretHook: this.CaretHookUPP}, {nLines: ctypes.short}, {lineStarts: ctypes.short.array(16001)}]);
    this.teJustLeft = 0;
    this.teJustCenter = 1;
    this.teJustRight = -1;
    this.teForceLeft = -2;
    this.teFlushDefault = 0;
    this.teCenter = 1;
    this.teFlushRight = -1;
    this.teFlushLeft = -2;
    this.fontBit = 0;
    this.faceBit = 1;
    this.sizeBit = 2;
    this.clrBit = 3;
    this.addSizeBit = 4;
    this.toggleBit = 5;
    this.doFont = 1;
    this.doFace = 2;
    this.doSize = 4;
    this.doColor = 8;
    this.doAll = 15;
    this.addSize = 16;
    this.doToggle = 32;
    this.EOLHook = 0;
    this.DRAWHook = 4;
    this.WIDTHHook = 8;
    this.HITTESTHook = 12;
    this.nWIDTHHook = 24;
    this.TextWidthHook = 28;
    this.intEOLHook = 0;
    this.intDrawHook = 1;
    this.intWidthHook = 2;
    this.intHitTestHook = 3;
    this.intNWidthHook = 6;
    this.intTextWidthHook = 7;
    this.intInlineInputTSMTEPreUpdateHook = 8;
    this.intInlineInputTSMTEPostUpdateHook = 9;
    this.teFAutoScroll = 0;
    this.teFTextBuffering = 1;
    this.teFOutlineHilite = 2;
    this.teFInlineInput = 3;
    this.teFUseWhiteBackground = 4;
    this.teFUseInlineInput = 5;
    this.teFInlineInputAutoScroll = 6;
    this.teFIdleWithEventLoopTimer = 7;
    this.teBitClear = 0;
    this.teBitSet = 1;
    this.teBitTest = -1;
    this.teWordSelect = 4;
    this.teWordDrag = 8;
    this.teFromFind = 12;
    this.teFromRecal = 16;
    this.teFind = 0;
    this.teHighlight = 1;
    this.teDraw = -1;
    this.teCaret = -2;
    this.Chars = ctypes.char.array(32001);
    this.CharsPtr = ctypes.char.ptr;
    this.CharsHandle = this.CharsPtr.ptr;
    this.StyleRun = new ctypes.StructType("StyleRun", [{startChar: ctypes.short}, {styleIndex: ctypes.short}]);
    this.STElement = new ctypes.StructType("STElement", [{stCount: ctypes.short}, {stHeight: ctypes.short}, {stAscent: ctypes.short}, {stFont: ctypes.short}, {stFace: this.StyleField}, {stSize: ctypes.short}, {stColor: this.RGBColor}]);
    this.TEStyleTable = this.STElement.array(1777);
    this.STPtr = this.STElement.ptr;
    this.STHandle = this.STPtr.ptr;
    this.LHElement = new ctypes.StructType("LHElement", [{lhHeight: ctypes.short}, {lhAscent: ctypes.short}]);
    this.LHTable = this.LHElement.array(8001);
    this.LHPtr = this.LHElement.ptr;
    this.LHHandle = this.LHPtr.ptr;
    this.ScrpSTElement = new ctypes.StructType("ScrpSTElement", [{scrpStartChar: this.SInt32}, {scrpHeight: this.SInt16}, {scrpAscent: this.SInt16}, {scrpFont: this.SInt16}, {scrpFace: this.StyleField}, {scrpSize: this.SInt16}, {scrpColor: this.RGBColor}]);
    this.ScrpSTTable = this.ScrpSTElement.array(1601);
    this.StScrpRec = new ctypes.StructType("StScrpRec", [{scrpNStyles: ctypes.short}, {scrpStyleTab: this.ScrpSTTable}]);
    this.StScrpPtr = this.StScrpRec.ptr;
    this.StScrpHandle = this.StScrpPtr.ptr;
    this.NullStRec = new ctypes.StructType("NullStRec", [{teReserved: ctypes.long}, {nullScrap: this.StScrpHandle}]);
    this.NullStPtr = this.NullStRec.ptr;
    this.NullStHandle = this.NullStPtr.ptr;
    this.TEStyleRec = new ctypes.StructType("TEStyleRec", [{nRuns: ctypes.short}, {nStyles: ctypes.short}, {styleTab: this.STHandle}, {lhTab: this.LHHandle}, {teRefCon: ctypes.long}, {nullStyle: this.NullStHandle}, {runs: this.StyleRun.array(8001)}]);
    this.TEStylePtr = this.TEStyleRec.ptr;
    this.TEStyleHandle = this.TEStylePtr.ptr;
    this.TextStyle = new ctypes.StructType("TextStyle", [{tsFont: ctypes.short}, {tsFace: this.StyleField}, {tsSize: ctypes.short}, {tsColor: this.RGBColor}]);
    this.TextStylePtr = this.TextStyle.ptr;
    this.TextStyleHandle = this.TextStylePtr.ptr;
    this.TEIntHook = ctypes.short;
    // Dropping inline function 'NewHighHookUPP'.
    // Dropping inline function 'NewEOLHookUPP'.
    // Dropping inline function 'NewCaretHookUPP'.
    // Dropping inline function 'NewWidthHookUPP'.
    // Dropping inline function 'NewTextWidthHookUPP'.
    // Dropping inline function 'NewNWidthHookUPP'.
    // Dropping inline function 'NewDrawHookUPP'.
    // Dropping inline function 'NewHitTestHookUPP'.
    // Dropping inline function 'NewTEFindWordUPP'.
    // Dropping inline function 'NewTERecalcUPP'.
    // Dropping inline function 'NewTEDoTextUPP'.
    // Dropping inline function 'NewTEClickLoopUPP'.
    // Dropping inline function 'DisposeHighHookUPP'.
    // Dropping inline function 'DisposeEOLHookUPP'.
    // Dropping inline function 'DisposeCaretHookUPP'.
    // Dropping inline function 'DisposeWidthHookUPP'.
    // Dropping inline function 'DisposeTextWidthHookUPP'.
    // Dropping inline function 'DisposeNWidthHookUPP'.
    // Dropping inline function 'DisposeDrawHookUPP'.
    // Dropping inline function 'DisposeHitTestHookUPP'.
    // Dropping inline function 'DisposeTEFindWordUPP'.
    // Dropping inline function 'DisposeTERecalcUPP'.
    // Dropping inline function 'DisposeTEDoTextUPP'.
    // Dropping inline function 'DisposeTEClickLoopUPP'.
    // Dropping inline function 'InvokeHighHookUPP'.
    // Dropping inline function 'InvokeEOLHookUPP'.
    // Dropping inline function 'InvokeCaretHookUPP'.
    // Dropping inline function 'InvokeWidthHookUPP'.
    // Dropping inline function 'InvokeTextWidthHookUPP'.
    // Dropping inline function 'InvokeNWidthHookUPP'.
    // Dropping inline function 'InvokeDrawHookUPP'.
    // Dropping inline function 'InvokeHitTestHookUPP'.
    // Dropping inline function 'InvokeTEFindWordUPP'.
    // Dropping inline function 'InvokeTERecalcUPP'.
    // Dropping inline function 'InvokeTEDoTextUPP'.
    // Dropping inline function 'InvokeTEClickLoopUPP'.
    this.teFUseTextServices = 4;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/MacHelp.h
function MacHelp_h(lib) {
    Menus_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    HIObject_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._MACHELP_H)
        return;
    this._MACHELP_H = true;

    this.kMacHelpVersion = 3;
    this.kHMHelpMenuID = -16490;
    this.HMContentRequest = this.SInt16;
    this.kHMSupplyContent = 0;
    this.kHMDisposeContent = 1;
    this.HMContentType = this.UInt32;
    this.kHMNoContent = 1852796517;
    this.kHMCFStringContent = 1667658612;
    this.kHMCFStringLocalizedContent = 1667658604;
    this.kHMPascalStrContent = 1886614642;
    this.kHMTextResContent = 1952807028;
    this.kHMTEHandleContent = 1954051176;
    this.kHMStringResContent = 1937011235;
    this.kHMStrResContent = 1937011232;
    this.HMTagDisplaySide = this.SInt16;
    this.kHMDefaultSide = 0;
    this.kHMOutsideTopScriptAligned = 1;
    this.kHMOutsideLeftCenterAligned = 2;
    this.kHMOutsideBottomScriptAligned = 3;
    this.kHMOutsideRightCenterAligned = 4;
    this.kHMOutsideTopLeftAligned = 5;
    this.kHMOutsideTopRightAligned = 6;
    this.kHMOutsideLeftTopAligned = 7;
    this.kHMOutsideLeftBottomAligned = 8;
    this.kHMOutsideBottomLeftAligned = 9;
    this.kHMOutsideBottomRightAligned = 10;
    this.kHMOutsideRightTopAligned = 11;
    this.kHMOutsideRightBottomAligned = 12;
    this.kHMOutsideTopCenterAligned = 13;
    this.kHMOutsideBottomCenterAligned = 14;
    this.kHMInsideRightCenterAligned = 15;
    this.kHMInsideLeftCenterAligned = 16;
    this.kHMInsideBottomCenterAligned = 17;
    this.kHMInsideTopCenterAligned = 18;
    this.kHMInsideTopLeftCorner = 19;
    this.kHMInsideTopRightCorner = 20;
    this.kHMInsideBottomLeftCorner = 21;
    this.kHMInsideBottomRightCorner = 22;
    this.kHMAbsoluteCenterAligned = 23;
    this.kHMTopSide = 1;
    this.kHMLeftSide = 2;
    this.kHMBottomSide = 3;
    this.kHMRightSide = 4;
    this.kHMTopLeftCorner = 5;
    this.kHMTopRightCorner = 6;
    this.kHMLeftTopCorner = 7;
    this.kHMLeftBottomCorner = 8;
    this.kHMBottomLeftCorner = 9;
    this.kHMBottomRightCorner = 10;
    this.kHMRightTopCorner = 11;
    this.kHMRightBottomCorner = 12;
    this.HMContentProvidedType = this.SInt16;
    this.kHMContentProvided = 0;
    this.kHMContentNotProvided = 1;
    this.kHMContentNotProvidedDontPropagate = 2;
    this.kHMMinimumContentIndex = 0;
    this.kHMMaximumContentIndex = 1;
    this.errHMIllegalContentForMinimumState = -10980;
    this.errHMIllegalContentForMaximumState = -10981;
    this.kHMIllegalContentForMinimumState = -10980;
    this.kHelpTagEventHandlerTag = 1751479924;
    this.HMStringResType = new ctypes.StructType("HMStringResType", [{hmmResID: ctypes.short}, {hmmIndex: ctypes.short}]);
    this.HMHelpContent = new ctypes.StructType("HMHelpContent", []);
    this.HMHelpContentRec = new ctypes.StructType("HMHelpContentRec", [{version: this.SInt32}, {absHotRect: this.Rect}, {tagSide: this.HMTagDisplaySide}, {content: this.HMHelpContent.array(2)}]);
    this.HMHelpContentPtr = this.HMHelpContentRec.ptr;
    this.HMControlContentProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.ControlRef, this.Point, this.HMContentRequest, this.HMContentProvidedType.ptr, this.HMHelpContentRec.ptr]).ptr;
    this.HMWindowContentProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.WindowRef, this.Point, this.HMContentRequest, this.HMContentProvidedType.ptr, this.HMHelpContentRec.ptr]).ptr;
    this.HMMenuTitleContentProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.MenuRef, this.HMContentRequest, this.HMContentProvidedType.ptr, this.HMHelpContentRec.ptr]).ptr;
    this.HMMenuItemContentProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.MenuTrackingData.ptr, this.HMContentRequest, this.HMContentProvidedType.ptr, this.HMHelpContentRec.ptr]).ptr;
    this.HMControlContentUPP = this.HMControlContentProcPtr;
    this.HMWindowContentUPP = this.HMWindowContentProcPtr;
    this.HMMenuTitleContentUPP = this.HMMenuTitleContentProcPtr;
    this.HMMenuItemContentUPP = this.HMMenuItemContentProcPtr;
    // Dropping inline function 'NewHMControlContentUPP'.
    // Dropping inline function 'NewHMWindowContentUPP'.
    // Dropping inline function 'NewHMMenuTitleContentUPP'.
    // Dropping inline function 'NewHMMenuItemContentUPP'.
    // Dropping inline function 'DisposeHMControlContentUPP'.
    // Dropping inline function 'DisposeHMWindowContentUPP'.
    // Dropping inline function 'DisposeHMMenuTitleContentUPP'.
    // Dropping inline function 'DisposeHMMenuItemContentUPP'.
    // Dropping inline function 'InvokeHMControlContentUPP'.
    // Dropping inline function 'InvokeHMWindowContentUPP'.
    // Dropping inline function 'InvokeHMMenuTitleContentUPP'.
    // Dropping inline function 'InvokeHMMenuItemContentUPP'.
    this.kHMHideTagFade = 1;
    this.kHMHideTagImmediately = 2;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIToolboxDebugging.h
function HIToolboxDebugging_h(lib) {

    if (this._HITOOLBOXDEBUGGING_H)
        return;
    this._HITOOLBOXDEBUGGING_H = true;

}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIDataBrowser.h
function HIDataBrowser_h(lib) {
    Controls_h.call(this, lib);
    Events_h.call(this, lib);
    MacHelp_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    HIObject_h.call(this, lib);
    AEDataModel_h.call(this, lib);
    Menus_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);
    Drag_h.call(this, lib);

    if (this._HIDATABROWSER_H)
        return;
    this._HIDATABROWSER_H = true;

    this.kControlKindDataBrowser = 1684108386;
    this.errDataBrowserNotConfigured = -4970;
    this.errDataBrowserItemNotFound = -4971;
    this.errDataBrowserItemNotAdded = -4975;
    this.errDataBrowserPropertyNotFound = -4972;
    this.errDataBrowserInvalidPropertyPart = -4973;
    this.errDataBrowserInvalidPropertyData = -4974;
    this.errDataBrowserPropertyNotSupported = -4979;
    this.kControlDataBrowserIncludesFrameAndFocusTag = 1651663986;
    this.kControlDataBrowserKeyFilterTag = 1718383730;
    this.kControlDataBrowserEditTextKeyFilterTag = 1718383730;
    this.kControlDataBrowserEditTextValidationProcTag = 1986096233;
    this.DataBrowserViewStyle = this.OSType;
    this.kDataBrowserNoView = 1061109567;
    this.kDataBrowserListView = 1819505782;
    this.kDataBrowserColumnView = 1668050294;
    this.DataBrowserSelectionFlags = this.UInt32;
    this.kDataBrowserDragSelect = 1;
    this.kDataBrowserSelectOnlyOne = 2;
    this.kDataBrowserResetSelection = 4;
    this.kDataBrowserCmdTogglesSelection = 8;
    this.kDataBrowserNoDisjointSelection = 16;
    this.kDataBrowserAlwaysExtendSelection = 32;
    this.kDataBrowserNeverEmptySelectionSet = 64;
    this.DataBrowserSortOrder = this.UInt16;
    this.kDataBrowserOrderUndefined = 0;
    this.kDataBrowserOrderIncreasing = 1;
    this.kDataBrowserOrderDecreasing = 2;
    this.DataBrowserItemID = ctypes.unsigned_long;
    this.kDataBrowserNoItem = 0;
    this.DataBrowserItemState = this.UInt32;
    this.kDataBrowserItemNoState = 0;
    this.kDataBrowserItemAnyState = -1;
    this.kDataBrowserItemIsSelected = 1;
    this.kDataBrowserContainerIsOpen = 2;
    this.kDataBrowserItemIsDragTarget = 4;
    this.DataBrowserRevealOptions = this.UInt8;
    this.kDataBrowserRevealOnly = 0;
    this.kDataBrowserRevealAndCenterInView = 1;
    this.kDataBrowserRevealWithoutSelecting = 2;
    this.DataBrowserSetOption = this.UInt32;
    this.kDataBrowserItemsAdd = 0;
    this.kDataBrowserItemsAssign = 1;
    this.kDataBrowserItemsToggle = 2;
    this.kDataBrowserItemsRemove = 3;
    this.DataBrowserSelectionAnchorDirection = this.UInt32;
    this.kDataBrowserSelectionAnchorUp = 0;
    this.kDataBrowserSelectionAnchorDown = 1;
    this.kDataBrowserSelectionAnchorLeft = 2;
    this.kDataBrowserSelectionAnchorRight = 3;
    this.DataBrowserEditCommand = this.UInt32;
    this.kDataBrowserEditMsgUndo = 1970168943;
    this.kDataBrowserEditMsgRedo = 1919247471;
    this.kDataBrowserEditMsgCut = 1668641824;
    this.kDataBrowserEditMsgCopy = 1668247673;
    this.kDataBrowserEditMsgPaste = 1885434740;
    this.kDataBrowserEditMsgClear = 1668048225;
    this.kDataBrowserEditMsgSelectAll = 1935764588;
    this.DataBrowserItemNotification = this.UInt32;
    this.kDataBrowserItemAdded = 1;
    this.kDataBrowserItemRemoved = 2;
    this.kDataBrowserEditStarted = 3;
    this.kDataBrowserEditStopped = 4;
    this.kDataBrowserItemSelected = 5;
    this.kDataBrowserItemDeselected = 6;
    this.kDataBrowserItemDoubleClicked = 7;
    this.kDataBrowserContainerOpened = 8;
    this.kDataBrowserContainerClosing = 9;
    this.kDataBrowserContainerClosed = 10;
    this.kDataBrowserContainerSorting = 11;
    this.kDataBrowserContainerSorted = 12;
    this.kDataBrowserUserToggledContainer = 16;
    this.kDataBrowserTargetChanged = 15;
    this.kDataBrowserUserStateChanged = 13;
    this.kDataBrowserSelectionSetChanged = 14;
    this.kDataBrowserItemNoProperty = 0;
    this.kDataBrowserItemIsActiveProperty = 1;
    this.kDataBrowserItemIsSelectableProperty = 2;
    this.kDataBrowserItemIsEditableProperty = 3;
    this.kDataBrowserItemIsContainerProperty = 4;
    this.kDataBrowserContainerIsOpenableProperty = 5;
    this.kDataBrowserContainerIsClosableProperty = 6;
    this.kDataBrowserContainerIsSortableProperty = 7;
    this.kDataBrowserItemSelfIdentityProperty = 8;
    this.kDataBrowserContainerAliasIDProperty = 9;
    this.kDataBrowserColumnViewPreviewProperty = 10;
    this.kDataBrowserItemParentContainerProperty = 11;
    this.DataBrowserPropertyID = ctypes.unsigned_long;
    this.DataBrowserPropertyType = this.OSType;
    this.kDataBrowserCustomType = 1061109567;
    this.kDataBrowserIconType = 1768124018;
    this.kDataBrowserTextType = 1952807028;
    this.kDataBrowserDateTimeType = 1684108389;
    this.kDataBrowserSliderType = 1936483442;
    this.kDataBrowserCheckboxType = 1667785336;
    this.kDataBrowserProgressBarType = 1886547815;
    this.kDataBrowserRelevanceRankType = 1918987883;
    this.kDataBrowserPopupMenuType = 1835363957;
    this.kDataBrowserIconAndTextType = 1953063790;
    this.DataBrowserPropertyPart = this.OSType;
    this.kDataBrowserPropertyEnclosingPart = 0;
    this.kDataBrowserPropertyContentPart = 757935405;
    this.kDataBrowserPropertyDisclosurePart = 1684632419;
    this.kDataBrowserPropertyTextPart = 1952807028;
    this.kDataBrowserPropertyIconPart = 1768124018;
    this.kDataBrowserPropertySliderPart = 1936483442;
    this.kDataBrowserPropertyCheckboxPart = 1667785336;
    this.kDataBrowserPropertyProgressBarPart = 1886547815;
    this.kDataBrowserPropertyRelevanceRankPart = 1918987883;
    this.DataBrowserPropertyFlags = this.UInt32;
    this.kDataBrowserUniversalPropertyFlagsMask = 255;
    this.kDataBrowserPropertyIsMutable = 1;
    this.kDataBrowserDefaultPropertyFlags = 0;
    this.kDataBrowserUniversalPropertyFlags = 255;
    this.kDataBrowserPropertyIsEditable = 1;
    this.kDataBrowserPropertyFlagsOffset = 8;
    this.kDataBrowserPropertyFlagsMask = 65280;
    this.kDataBrowserCheckboxTriState = 256;
    this.kDataBrowserDateTimeRelative = 256;
    this.kDataBrowserDateTimeDateOnly = 512;
    this.kDataBrowserDateTimeTimeOnly = 1024;
    this.kDataBrowserDateTimeSecondsToo = 2048;
    this.kDataBrowserSliderPlainThumb = 0;
    this.kDataBrowserSliderUpwardThumb = 256;
    this.kDataBrowserSliderDownwardThumb = 512;
    this.kDataBrowserDoNotTruncateText = 768;
    this.kDataBrowserTruncateTextAtEnd = 512;
    this.kDataBrowserTruncateTextMiddle = 0;
    this.kDataBrowserTruncateTextAtStart = 256;
    this.kDataBrowserPopupMenuButtonless = 256;
    this.kDataBrowserPropertyModificationFlags = 65280;
    this.kDataBrowserRelativeDateTime = 256;
    this.kDataBrowserViewSpecificFlagsOffset = 16;
    this.kDataBrowserViewSpecificFlagsMask = 16711680;
    this.kDataBrowserViewSpecificPropertyFlags = 16711680;
    this.kDataBrowserClientPropertyFlagsOffset = 24;
    this.kDataBrowserClientPropertyFlagsMask = -16777216;
    this.DataBrowserPropertyDesc = new ctypes.StructType("DataBrowserPropertyDesc", [{propertyID: this.DataBrowserPropertyID}, {propertyType: this.DataBrowserPropertyType}, {propertyFlags: this.DataBrowserPropertyFlags}]);
    this.DataBrowserItemProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.DataBrowserItemID, this.DataBrowserItemState, ctypes.void_t.ptr]).ptr;
    this.DataBrowserItemUPP = this.DataBrowserItemProcPtr;
    // Dropping inline function 'NewDataBrowserItemUPP'.
    // Dropping inline function 'DisposeDataBrowserItemUPP'.
    // Dropping inline function 'InvokeDataBrowserItemUPP'.
    this.kDataBrowserAttributeNone = 0;
    this.kDataBrowserAttributeColumnViewResizeWindow = 1;
    this.kDataBrowserAttributeListViewAlternatingRowColors = 2;
    this.kDataBrowserAttributeListViewDrawColumnDividers = 4;
    this.kDataBrowserAttributeAutoHideScrollBars = 8;
    this.kDataBrowserAttributeReserveGrowBoxSpace = 16;
    this.kDataBrowserMetricCellContentInset = 1;
    this.kDataBrowserMetricIconAndTextGap = 2;
    this.kDataBrowserMetricDisclosureColumnEdgeInset = 3;
    this.kDataBrowserMetricDisclosureTriangleAndContentGap = 4;
    this.kDataBrowserMetricDisclosureColumnPerDepthGap = 5;
    this.kDataBrowserMetricLast = 5;
    this.DataBrowserMetric = this.UInt32;
    this.DataBrowserItemDataRef = ctypes.void_t.ptr;
    this.DataBrowserItemDataProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserPropertyID, this.DataBrowserItemDataRef, this.Boolean]).ptr;
    this.DataBrowserItemDataUPP = this.DataBrowserItemDataProcPtr;
    this.DataBrowserItemCompareProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserItemID, this.DataBrowserPropertyID]).ptr;
    this.DataBrowserItemCompareUPP = this.DataBrowserItemCompareProcPtr;
    this.DataBrowserItemNotificationWithItemProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserItemNotification, this.DataBrowserItemDataRef]).ptr;
    this.DataBrowserItemNotificationProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserItemNotification]).ptr;
    this.DataBrowserItemNotificationWithItemUPP = this.DataBrowserItemNotificationWithItemProcPtr;
    this.DataBrowserItemNotificationUPP = this.DataBrowserItemNotificationProcPtr;
    this.DataBrowserAddDragItemProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.ControlRef, this.DragReference, this.DataBrowserItemID, this.ItemReference.ptr]).ptr;
    this.DataBrowserAcceptDragProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.ControlRef, this.DragReference, this.DataBrowserItemID]).ptr;
    this.DataBrowserReceiveDragProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.ControlRef, this.DragReference, this.DataBrowserItemID]).ptr;
    this.DataBrowserPostProcessDragProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.DragReference, this.OSStatus]).ptr;
    this.DataBrowserAddDragItemUPP = this.DataBrowserAddDragItemProcPtr;
    this.DataBrowserAcceptDragUPP = this.DataBrowserAcceptDragProcPtr;
    this.DataBrowserReceiveDragUPP = this.DataBrowserReceiveDragProcPtr;
    this.DataBrowserPostProcessDragUPP = this.DataBrowserPostProcessDragProcPtr;
    this.DataBrowserGetContextualMenuProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.MenuRef.ptr, this.UInt32.ptr, this.CFStringRef.ptr, this.AEDesc.ptr]).ptr;
    this.DataBrowserSelectContextualMenuProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.MenuRef, this.UInt32, this.SInt16, this.MenuItemIndex]).ptr;
    this.DataBrowserGetContextualMenuUPP = this.DataBrowserGetContextualMenuProcPtr;
    this.DataBrowserSelectContextualMenuUPP = this.DataBrowserSelectContextualMenuProcPtr;
    this.DataBrowserItemHelpContentProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserPropertyID, this.HMContentRequest, this.HMContentProvidedType.ptr, this.HMHelpContentRec.ptr]).ptr;
    this.DataBrowserItemHelpContentUPP = this.DataBrowserItemHelpContentProcPtr;
    // Dropping inline function 'NewDataBrowserItemDataUPP'.
    // Dropping inline function 'NewDataBrowserItemCompareUPP'.
    // Dropping inline function 'NewDataBrowserItemNotificationWithItemUPP'.
    // Dropping inline function 'NewDataBrowserItemNotificationUPP'.
    // Dropping inline function 'NewDataBrowserAddDragItemUPP'.
    // Dropping inline function 'NewDataBrowserAcceptDragUPP'.
    // Dropping inline function 'NewDataBrowserReceiveDragUPP'.
    // Dropping inline function 'NewDataBrowserPostProcessDragUPP'.
    // Dropping inline function 'NewDataBrowserGetContextualMenuUPP'.
    // Dropping inline function 'NewDataBrowserSelectContextualMenuUPP'.
    // Dropping inline function 'NewDataBrowserItemHelpContentUPP'.
    // Dropping inline function 'DisposeDataBrowserItemDataUPP'.
    // Dropping inline function 'DisposeDataBrowserItemCompareUPP'.
    // Dropping inline function 'DisposeDataBrowserItemNotificationWithItemUPP'.
    // Dropping inline function 'DisposeDataBrowserItemNotificationUPP'.
    // Dropping inline function 'DisposeDataBrowserAddDragItemUPP'.
    // Dropping inline function 'DisposeDataBrowserAcceptDragUPP'.
    // Dropping inline function 'DisposeDataBrowserReceiveDragUPP'.
    // Dropping inline function 'DisposeDataBrowserPostProcessDragUPP'.
    // Dropping inline function 'DisposeDataBrowserGetContextualMenuUPP'.
    // Dropping inline function 'DisposeDataBrowserSelectContextualMenuUPP'.
    // Dropping inline function 'DisposeDataBrowserItemHelpContentUPP'.
    // Dropping inline function 'InvokeDataBrowserItemDataUPP'.
    // Dropping inline function 'InvokeDataBrowserItemCompareUPP'.
    // Dropping inline function 'InvokeDataBrowserItemNotificationWithItemUPP'.
    // Dropping inline function 'InvokeDataBrowserItemNotificationUPP'.
    // Dropping inline function 'InvokeDataBrowserAddDragItemUPP'.
    // Dropping inline function 'InvokeDataBrowserAcceptDragUPP'.
    // Dropping inline function 'InvokeDataBrowserReceiveDragUPP'.
    // Dropping inline function 'InvokeDataBrowserPostProcessDragUPP'.
    // Dropping inline function 'InvokeDataBrowserGetContextualMenuUPP'.
    // Dropping inline function 'InvokeDataBrowserSelectContextualMenuUPP'.
    // Dropping inline function 'InvokeDataBrowserItemHelpContentUPP'.
    this.kDataBrowserLatestCallbacks = 0;
    this.DataBrowserCallbacks = new ctypes.StructType("DataBrowserCallbacks", []);
    this.kEventClassDataBrowser = 1751737442;
    this.kEventParamDataBrowserItemID = 1684171108;
    this.kEventParamDataBrowserPropertyID = 1684172900;
    this.kEventParamDataBrowserItemState = 1684171123;
    this.kEventDataBrowserDrawCustomItem = 1;
    this.DataBrowserDragFlags = this.UInt32;
    this.DataBrowserTrackingResult = this.SInt16;
    this.kDataBrowserContentHit = 1;
    this.kDataBrowserNothingHit = 0;
    this.kDataBrowserStopTracking = -1;
    this.DataBrowserDrawItemProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserPropertyID, this.DataBrowserItemState, this.Rect.ptr, this.SInt16, this.Boolean]).ptr;
    this.DataBrowserEditItemProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserPropertyID, this.CFStringRef, this.Rect.ptr, this.Boolean.ptr]).ptr;
    this.DataBrowserHitTestProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserPropertyID, this.Rect.ptr, this.Rect.ptr]).ptr;
    this.DataBrowserTrackingProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.DataBrowserTrackingResult, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserPropertyID, this.Rect.ptr, this.Point, this.EventModifiers]).ptr;
    this.DataBrowserItemDragRgnProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserPropertyID, this.Rect.ptr, this.RgnHandle]).ptr;
    this.DataBrowserItemAcceptDragProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.DataBrowserDragFlags, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserPropertyID, this.Rect.ptr, this.DragReference]).ptr;
    this.DataBrowserItemReceiveDragProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.ControlRef, this.DataBrowserItemID, this.DataBrowserPropertyID, this.DataBrowserDragFlags, this.DragReference]).ptr;
    this.DataBrowserDrawItemUPP = this.DataBrowserDrawItemProcPtr;
    this.DataBrowserEditItemUPP = this.DataBrowserEditItemProcPtr;
    this.DataBrowserHitTestUPP = this.DataBrowserHitTestProcPtr;
    this.DataBrowserTrackingUPP = this.DataBrowserTrackingProcPtr;
    this.DataBrowserItemDragRgnUPP = this.DataBrowserItemDragRgnProcPtr;
    this.DataBrowserItemAcceptDragUPP = this.DataBrowserItemAcceptDragProcPtr;
    this.DataBrowserItemReceiveDragUPP = this.DataBrowserItemReceiveDragProcPtr;
    // Dropping inline function 'NewDataBrowserDrawItemUPP'.
    // Dropping inline function 'NewDataBrowserEditItemUPP'.
    // Dropping inline function 'NewDataBrowserHitTestUPP'.
    // Dropping inline function 'NewDataBrowserTrackingUPP'.
    // Dropping inline function 'NewDataBrowserItemDragRgnUPP'.
    // Dropping inline function 'NewDataBrowserItemAcceptDragUPP'.
    // Dropping inline function 'NewDataBrowserItemReceiveDragUPP'.
    // Dropping inline function 'DisposeDataBrowserDrawItemUPP'.
    // Dropping inline function 'DisposeDataBrowserEditItemUPP'.
    // Dropping inline function 'DisposeDataBrowserHitTestUPP'.
    // Dropping inline function 'DisposeDataBrowserTrackingUPP'.
    // Dropping inline function 'DisposeDataBrowserItemDragRgnUPP'.
    // Dropping inline function 'DisposeDataBrowserItemAcceptDragUPP'.
    // Dropping inline function 'DisposeDataBrowserItemReceiveDragUPP'.
    // Dropping inline function 'InvokeDataBrowserDrawItemUPP'.
    // Dropping inline function 'InvokeDataBrowserEditItemUPP'.
    // Dropping inline function 'InvokeDataBrowserHitTestUPP'.
    // Dropping inline function 'InvokeDataBrowserTrackingUPP'.
    // Dropping inline function 'InvokeDataBrowserItemDragRgnUPP'.
    // Dropping inline function 'InvokeDataBrowserItemAcceptDragUPP'.
    // Dropping inline function 'InvokeDataBrowserItemReceiveDragUPP'.
    this.kDataBrowserLatestCustomCallbacks = 0;
    this.DataBrowserCustomCallbacks = new ctypes.StructType("DataBrowserCustomCallbacks", []);
    this.DataBrowserTableViewHiliteStyle = this.UInt32;
    this.kDataBrowserTableViewMinimalHilite = 0;
    this.kDataBrowserTableViewFillHilite = 1;
    this.DataBrowserTableViewPropertyFlags = this.UInt32;
    this.kDataBrowserTableViewSelectionColumn = 65536;
    this.DataBrowserTableViewRowIndex = ctypes.unsigned_long;
    this.DataBrowserTableViewColumnIndex = ctypes.unsigned_long;
    this.DataBrowserTableViewColumnID = this.DataBrowserPropertyID;
    this.DataBrowserTableViewColumnDesc = this.DataBrowserPropertyDesc;
    this.kDataBrowserTableViewLastColumn = -1;
    this.kDataBrowserListViewSelectionColumn = 65536;
    this.kDataBrowserListViewMovableColumn = 131072;
    this.kDataBrowserListViewSortableColumn = 262144;
    this.kDataBrowserListViewTypeSelectColumn = 524288;
    this.kDataBrowserListViewNoGapForIconInHeaderButton = 1048576;
    this.kDataBrowserListViewDefaultColumnFlags = 393216;
    this.DataBrowserListViewPropertyFlags = this.DataBrowserPropertyFlags;
    this.kDataBrowserListViewLatestHeaderDesc = 0;
    this.DataBrowserListViewHeaderDesc = new ctypes.StructType("DataBrowserListViewHeaderDesc", [{version: this.UInt32}, {minimumWidth: this.UInt16}, {maximumWidth: this.UInt16}, {titleOffset: this.SInt16}, {titleString: this.CFStringRef}, {initialOrder: this.DataBrowserSortOrder}, {btnFontStyle: this.ControlFontStyleRec}, {btnContentInfo: this.ControlButtonContentInfo}]);
    this.DataBrowserListViewColumnDesc = new ctypes.StructType("DataBrowserListViewColumnDesc", [{propertyDesc: this.DataBrowserTableViewColumnDesc}, {headerBtnDesc: this.DataBrowserListViewHeaderDesc}]);
    this.kDataBrowserListViewAppendColumn = -1;
    this.DataBrowserAccessibilityItemInfoV0 = new ctypes.StructType("DataBrowserAccessibilityItemInfoV0", [{container: this.DataBrowserItemID}, {item: this.DataBrowserItemID}, {columnProperty: this.DataBrowserPropertyID}, {propertyPart: this.DataBrowserPropertyPart}]);
    this.DataBrowserAccessibilityItemInfoV1 = new ctypes.StructType("DataBrowserAccessibilityItemInfoV1", [{container: this.DataBrowserItemID}, {item: this.DataBrowserItemID}, {columnProperty: this.DataBrowserPropertyID}, {propertyPart: this.DataBrowserPropertyPart}, {rowIndex: this.DataBrowserTableViewRowIndex}, {columnIndex: this.DataBrowserTableViewColumnIndex}]);
    this.DataBrowserAccessibilityItemInfo = new ctypes.StructType("DataBrowserAccessibilityItemInfo", []);
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/IBCarbonRuntime.h
function IBCarbonRuntime_h(lib) {

    if (this._IBCARBONRUNTIME_H)
        return;
    this._IBCARBONRUNTIME_H = true;

    this.kIBCarbonRuntimeCantFindNibFile = -10960;
    this.kIBCarbonRuntimeObjectNotOfRequestedType = -10961;
    this.kIBCarbonRuntimeCantFindObject = -10962;
    this.OpaqueIBNibRef = new ctypes.StructType("OpaqueIBNibRef");
    this.IBNibRef = this.OpaqueIBNibRef.ptr;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIContainerViews.h
function HIContainerViews_h(lib) {
    Controls_h.call(this, lib);
    HIObject_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._HICONTAINERVIEWS_H)
        return;
    this._HICONTAINERVIEWS_H = true;

    this.kControlGroupBoxTextTitleProc = 160;
    this.kControlGroupBoxCheckBoxProc = 161;
    this.kControlGroupBoxPopupButtonProc = 162;
    this.kControlGroupBoxSecondaryTextTitleProc = 164;
    this.kControlGroupBoxSecondaryCheckBoxProc = 165;
    this.kControlGroupBoxSecondaryPopupButtonProc = 166;
    this.kControlKindGroupBox = 1735553122;
    this.kControlKindCheckGroupBox = 1667723888;
    this.kControlKindPopupGroupBox = 1885827696;
    this.kControlGroupBoxMenuHandleTag = 1835557230;
    this.kControlGroupBoxMenuRefTag = 1835557230;
    this.kControlGroupBoxFontStyleTag = 1718578804;
    this.kControlGroupBoxTitleRectTag = 1953654115;
    this.kControlGroupBoxFrameRectTag = 1718773091;
    this.kControlPlacardProc = 224;
    this.kControlKindPlacard = 1886151011;
    this.kControlWindowHeaderProc = 336;
    this.kControlWindowListViewHeaderProc = 337;
    this.kControlKindWindowHeader = 2003330404;
    this.kControlWindowHeaderIsListHeaderTag = 1769172072;
    this.kControlUserPaneProc = 256;
    this.kControlKindUserPane = 1970299246;
    this.kControlUserItemDrawProcTag = 1969841264;
    this.kControlUserPaneDrawProcTag = 1685217655;
    this.kControlUserPaneHitTestProcTag = 1751741556;
    this.kControlUserPaneTrackingProcTag = 1953653099;
    this.kControlUserPaneIdleProcTag = 1768189029;
    this.kControlUserPaneKeyDownProcTag = 1801812324;
    this.kControlUserPaneActivateProcTag = 1633907817;
    this.kControlUserPaneFocusProcTag = 1718575977;
    this.kControlUserPaneBackgroundProcTag = 1650549611;
    this.ControlUserPaneDrawProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.ControlPartCode]).ptr;
    this.ControlUserPaneHitTestProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ControlPartCode, [this.ControlRef, this.Point]).ptr;
    this.ControlUserPaneTrackingProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ControlPartCode, [this.ControlRef, this.Point, this.ControlActionUPP]).ptr;
    this.ControlUserPaneIdleProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef]).ptr;
    this.ControlUserPaneKeyDownProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ControlPartCode, [this.ControlRef, this.SInt16, this.SInt16, this.SInt16]).ptr;
    this.ControlUserPaneActivateProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.Boolean]).ptr;
    this.ControlUserPaneFocusProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.ControlPartCode, [this.ControlRef, this.ControlFocusPart]).ptr;
    this.ControlUserPaneDrawUPP = this.ControlUserPaneDrawProcPtr;
    this.ControlUserPaneHitTestUPP = this.ControlUserPaneHitTestProcPtr;
    this.ControlUserPaneTrackingUPP = this.ControlUserPaneTrackingProcPtr;
    this.ControlUserPaneIdleUPP = this.ControlUserPaneIdleProcPtr;
    this.ControlUserPaneKeyDownUPP = this.ControlUserPaneKeyDownProcPtr;
    this.ControlUserPaneActivateUPP = this.ControlUserPaneActivateProcPtr;
    this.ControlUserPaneFocusUPP = this.ControlUserPaneFocusProcPtr;
    // Dropping inline function 'NewControlUserPaneDrawUPP'.
    // Dropping inline function 'NewControlUserPaneHitTestUPP'.
    // Dropping inline function 'NewControlUserPaneTrackingUPP'.
    // Dropping inline function 'NewControlUserPaneIdleUPP'.
    // Dropping inline function 'NewControlUserPaneKeyDownUPP'.
    // Dropping inline function 'NewControlUserPaneActivateUPP'.
    // Dropping inline function 'NewControlUserPaneFocusUPP'.
    // Dropping inline function 'DisposeControlUserPaneDrawUPP'.
    // Dropping inline function 'DisposeControlUserPaneHitTestUPP'.
    // Dropping inline function 'DisposeControlUserPaneTrackingUPP'.
    // Dropping inline function 'DisposeControlUserPaneIdleUPP'.
    // Dropping inline function 'DisposeControlUserPaneKeyDownUPP'.
    // Dropping inline function 'DisposeControlUserPaneActivateUPP'.
    // Dropping inline function 'DisposeControlUserPaneFocusUPP'.
    // Dropping inline function 'InvokeControlUserPaneDrawUPP'.
    // Dropping inline function 'InvokeControlUserPaneHitTestUPP'.
    // Dropping inline function 'InvokeControlUserPaneTrackingUPP'.
    // Dropping inline function 'InvokeControlUserPaneIdleUPP'.
    // Dropping inline function 'InvokeControlUserPaneKeyDownUPP'.
    // Dropping inline function 'InvokeControlUserPaneActivateUPP'.
    // Dropping inline function 'InvokeControlUserPaneFocusUPP'.
    this.ControlUserPaneBackgroundProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef, this.ControlBackgroundPtr]).ptr;
    this.ControlUserPaneBackgroundUPP = this.ControlUserPaneBackgroundProcPtr;
    // Dropping inline function 'NewControlUserPaneBackgroundUPP'.
    // Dropping inline function 'DisposeControlUserPaneBackgroundUPP'.
    // Dropping inline function 'InvokeControlUserPaneBackgroundUPP'.
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Lists.h
function Lists_h(lib) {
    HIObject_h.call(this, lib);
    MacTypes_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);

    if (this._LISTS_H)
        return;
    this._LISTS_H = true;

    this.Cell = this.Point;
    this.ListBounds = this.Rect;
    this.DataArray = ctypes.char.array(32001);
    this.DataPtr = ctypes.char.ptr;
    this.DataHandle = this.DataPtr.ptr;
    this.ListSearchProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.short, [this.Ptr, this.Ptr, ctypes.short, ctypes.short]).ptr;
    this.ListClickLoopProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, []).ptr;
    this.ListSearchUPP = this.ListSearchProcPtr;
    this.ListClickLoopUPP = this.ListClickLoopProcPtr;
    this.ListRec = new ctypes.StructType("ListRec", [{rView: this.Rect}, {port: this.GrafPtr}, {indent: this.Point}, {cellSize: this.Point}, {visible: this.ListBounds}, {vScroll: this.ControlRef}, {hScroll: this.ControlRef}, {selFlags: this.SInt8}, {lActive: this.Boolean}, {lReserved: this.SInt8}, {listFlags: this.SInt8}, {clikTime: ctypes.long}, {clikLoc: this.Point}, {mouseLoc: this.Point}, {lClickLoop: this.ListClickLoopUPP}, {lastClick: this.Cell}, {refCon: ctypes.long}, {listDefProc: this.Handle}, {userHandle: this.Handle}, {dataBounds: this.ListBounds}, {cells: this.DataHandle}, {maxIndex: ctypes.short}, {cellArray: ctypes.short.array(1)}]);
    this.ListPtr = this.ListRec.ptr;
    this.ListHandle = this.ListRec.ptr.ptr;
    this.ListRef = this.ListHandle;
    this.lDrawingModeOffBit = 3;
    this.lDoVAutoscrollBit = 1;
    this.lDoHAutoscrollBit = 0;
    this.lDrawingModeOff = 8;
    this.lDoVAutoscroll = 2;
    this.lDoHAutoscroll = 1;
    this.lOnlyOneBit = 7;
    this.lExtendDragBit = 6;
    this.lNoDisjointBit = 5;
    this.lNoExtendBit = 4;
    this.lNoRectBit = 3;
    this.lUseSenseBit = 2;
    this.lNoNilHiliteBit = 1;
    this.lOnlyOne = -128;
    this.lExtendDrag = 64;
    this.lNoDisjoint = 32;
    this.lNoExtend = 16;
    this.lNoRect = 8;
    this.lUseSense = 4;
    this.lNoNilHilite = 2;
    this.lInitMsg = 0;
    this.lDrawMsg = 1;
    this.lHiliteMsg = 2;
    this.lCloseMsg = 3;
    this.StandardIconListCellDataRec = new ctypes.StructType("StandardIconListCellDataRec", [{iconHandle: this.Handle}, {font: ctypes.short}, {face: ctypes.short}, {size: ctypes.short}, {name: this.Str255}]);
    this.StandardIconListCellDataPtr = this.StandardIconListCellDataRec.ptr;
    this.ListDefProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [ctypes.short, this.Boolean, this.Rect.ptr, this.Cell, ctypes.short, ctypes.short, this.ListHandle]).ptr;
    this.ListDefUPP = this.ListDefProcPtr;
    // Dropping inline function 'NewListSearchUPP'.
    // Dropping inline function 'NewListClickLoopUPP'.
    // Dropping inline function 'NewListDefUPP'.
    // Dropping inline function 'DisposeListSearchUPP'.
    // Dropping inline function 'DisposeListClickLoopUPP'.
    // Dropping inline function 'DisposeListDefUPP'.
    // Dropping inline function 'InvokeListSearchUPP'.
    // Dropping inline function 'InvokeListClickLoopUPP'.
    // Dropping inline function 'InvokeListDefUPP'.
    this.kListDefProcPtr = 0;
    this.kListDefUserProcType = 0;
    this.kListDefStandardTextType = 1;
    this.kListDefStandardIconType = 2;
    this.ListDefType = this.UInt32;
    this.ListDefSpec = new ctypes.StructType("ListDefSpec", []);
    this.ListDefSpecPtr = this.ListDefSpec.ptr;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HISegmentedView.h
function HISegmentedView_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._HISEGMENTEDVIEW_H)
        return;
    this._HISEGMENTEDVIEW_H = true;

    this.kHISegmentedViewKind = 1936158068;
    this.kHISegmentBehaviorMomentary = 1;
    this.kHISegmentBehaviorRadio = 2;
    this.kHISegmentBehaviorToggles = 3;
    this.kHISegmentBehaviorSticky = 4;
    this.HISegmentBehavior = this.UInt32;
    this.kHISegmentNoAttributes = 0;
    this.kHISegmentSendCmdToUserFocus = 1;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Keyboards.h
function Keyboards_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._KEYBOARDS_H)
        return;
    this._KEYBOARDS_H = true;

    this.PhysicalKeyboardLayoutType = this.OSType;
    this.kKeyboardJIS = 1246319392;
    this.kKeyboardANSI = 1095652169;
    this.kKeyboardISO = 1230196512;
    this.kKeyboardUnknown = 1061109567;
    this.OpaqueKeyboardLayoutRef = new ctypes.StructType("OpaqueKeyboardLayoutRef");
    this.KeyboardLayoutRef = this.OpaqueKeyboardLayoutRef.ptr;
    this.KeyboardLayoutPropertyTag = this.UInt32;
    this.kKLKCHRData = 0;
    this.kKLuchrData = 1;
    this.kKLIdentifier = 2;
    this.kKLIcon = 3;
    this.kKLLocalizedName = 4;
    this.kKLName = 5;
    this.kKLGroupIdentifier = 6;
    this.kKLKind = 7;
    this.kKLLanguageCode = 9;
    this.KeyboardLayoutKind = this.SInt32;
    this.kKLKCHRuchrKind = 0;
    this.kKLKCHRKind = 1;
    this.kKLuchrKind = 2;
    this.KeyboardLayoutIdentifier = this.SInt32;
    this.kKLUSKeyboard = 0;
    this._KeyboardDispatch = 43642;
    this.gestaltKeyboardsAttr = 1801610355;
    this.gestaltKBPS2Keyboards = 1;
    this.gestaltKBPS2SetIDToAny = 2;
    this.gestaltKBPS2SetTranslationTable = 4;
    this.errKBPS2KeyboardNotAvailable = -30850;
    this.errKBIlligalParameters = -30851;
    this.errKBFailSettingID = -30852;
    this.errKBFailSettingTranslationTable = -30853;
    this.errKBFailWritePreference = -30854;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIAccessibility.h
function HIAccessibility_h(lib) {

    if (this._HIACCESSIBILITY_H)
        return;
    this._HIACCESSIBILITY_H = true;

    this.kEventAccessibleGetChildAtPoint = 1;
    this.kEventAccessibleGetFocusedChild = 2;
    this.kEventAccessibleGetAllAttributeNames = 21;
    this.kEventAccessibleGetAllParameterizedAttributeNames = 25;
    this.kEventAccessibleGetNamedAttribute = 22;
    this.kEventAccessibleSetNamedAttribute = 23;
    this.kEventAccessibleIsNamedAttributeSettable = 24;
    this.kEventAccessibleGetAllActionNames = 41;
    this.kEventAccessiblePerformNamedAction = 42;
    this.kEventAccessibleGetNamedActionDescription = 44;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HITabbedView.h
function HITabbedView_h(lib) {
    Controls_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._HITABBEDVIEW_H)
        return;
    this._HITABBEDVIEW_H = true;

    this.kControlTabLargeProc = 128;
    this.kControlTabSmallProc = 129;
    this.kControlTabLargeNorthProc = 128;
    this.kControlTabSmallNorthProc = 129;
    this.kControlTabLargeSouthProc = 130;
    this.kControlTabSmallSouthProc = 131;
    this.kControlTabLargeEastProc = 132;
    this.kControlTabSmallEastProc = 133;
    this.kControlTabLargeWestProc = 134;
    this.kControlTabSmallWestProc = 135;
    this.ControlTabDirection = this.UInt16;
    this.kControlTabDirectionNorth = 0;
    this.kControlTabDirectionSouth = 1;
    this.kControlTabDirectionEast = 2;
    this.kControlTabDirectionWest = 3;
    this.ControlTabSize = this.UInt16;
    this.kControlTabSizeLarge = 0;
    this.kControlTabSizeSmall = 1;
    this.kControlTabSizeMini = 3;
    this.ControlTabEntry = new ctypes.StructType("ControlTabEntry", [{icon: this.ControlButtonContentInfo.ptr}, {name: this.CFStringRef}, {enabled: this.Boolean}]);
    this.kControlKindTabs = 1952539251;
    this.kControlTabContentRectTag = 1919247220;
    this.kControlTabEnabledFlagTag = 1701732706;
    this.kControlTabFontStyleTag = 1718578804;
    this.kControlTabInfoTag = 1952539241;
    this.kControlTabImageContentTag = 1668247156;
    this.kControlTabInfoVersionZero = 0;
    this.kControlTabInfoVersionOne = 1;
    this.ControlTabInfoRec = new ctypes.StructType("ControlTabInfoRec", [{version: this.SInt16}, {iconSuiteID: this.SInt16}, {name: this.Str255}]);
    this.ControlTabInfoRecV1 = new ctypes.StructType("ControlTabInfoRecV1", [{version: this.SInt16}, {iconSuiteID: this.SInt16}, {name: this.CFStringRef}]);
    this.kControlTabListResType = 1952539171;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIButtonViews.h
function HIButtonViews_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._HIBUTTONVIEWS_H)
        return;
    this._HIBUTTONVIEWS_H = true;

    this.kControlPushButtonProc = 368;
    this.kControlPushButLeftIconProc = 374;
    this.kControlPushButRightIconProc = 375;
    this.ControlPushButtonIconAlignment = this.UInt16;
    this.kControlPushButtonIconOnLeft = 6;
    this.kControlPushButtonIconOnRight = 7;
    this.kControlKindPushButton = 1886745448;
    this.kControlKindPushIconButton = 1885954926;
    this.kControlPushButtonDefaultTag = 1684434036;
    this.kControlPushButtonCancelTag = 1668178796;
    this.kControlPushButtonContentTag = 1668247156;
    this.kControlPushButtonIconAlignmentTag = 1668311393;
    this.kControlPushButtonAnimatingTag = 1634625901;
    this.kControlPushButtonIsTexturedTag = 1835365484;
    this.kControlCheckBoxProc = 369;
    this.kControlCheckBoxAutoToggleProc = 371;
    this.kControlKindCheckBox = 1667395448;
    this.kControlCheckBoxUncheckedValue = 0;
    this.kControlCheckBoxCheckedValue = 1;
    this.kControlCheckBoxMixedValue = 2;
    this.kControlRadioButtonProc = 370;
    this.kControlRadioButtonAutoToggleProc = 372;
    this.kControlRadioButtonUncheckedValue = 0;
    this.kControlRadioButtonCheckedValue = 1;
    this.kControlRadioButtonMixedValue = 2;
    this.kControlKindRadioButton = 1919183215;
    this.kControlRadioGroupProc = 416;
    this.kControlKindRadioGroup = 1919382128;
    this.kControlBevelButtonSmallBevelProc = 32;
    this.kControlBevelButtonNormalBevelProc = 33;
    this.kControlBevelButtonLargeBevelProc = 34;
    this.kControlBevelButtonSmallBevelVariant = 0;
    this.kControlBevelButtonNormalBevelVariant = 1;
    this.kControlBevelButtonLargeBevelVariant = 2;
    this.kControlBevelButtonMenuOnRightVariant = 4;
    this.ControlBevelThickness = this.UInt16;
    this.kControlBevelButtonSmallBevel = 0;
    this.kControlBevelButtonNormalBevel = 1;
    this.kControlBevelButtonLargeBevel = 2;
    this.kControlBehaviorPushbutton = 0;
    this.kControlBehaviorToggles = 256;
    this.kControlBehaviorSticky = 512;
    this.kControlBehaviorOffsetContents = 32768;
    this.kControlBehaviorSingleValueMenu = 0;
    this.kControlBehaviorMultiValueMenu = 16384;
    this.kControlBehaviorCommandMenu = 8192;
    this.ControlBevelButtonBehavior = this.UInt16;
    this.ControlBevelButtonMenuBehavior = this.UInt16;
    this.ControlBevelButtonMenuPlacement = this.UInt16;
    this.kControlBevelButtonMenuOnBottom = 0;
    this.kControlBevelButtonMenuOnRight = 4;
    this.kControlKindBevelButton = 1650816620;
    this.ControlButtonGraphicAlignment = this.SInt16;
    this.kControlBevelButtonAlignSysDirection = -1;
    this.kControlBevelButtonAlignCenter = 0;
    this.kControlBevelButtonAlignLeft = 1;
    this.kControlBevelButtonAlignRight = 2;
    this.kControlBevelButtonAlignTop = 3;
    this.kControlBevelButtonAlignBottom = 4;
    this.kControlBevelButtonAlignTopLeft = 5;
    this.kControlBevelButtonAlignBottomLeft = 6;
    this.kControlBevelButtonAlignTopRight = 7;
    this.kControlBevelButtonAlignBottomRight = 8;
    this.ControlButtonTextAlignment = this.SInt16;
    this.kControlBevelButtonAlignTextSysDirection = 0;
    this.kControlBevelButtonAlignTextCenter = 1;
    this.kControlBevelButtonAlignTextFlushRight = -1;
    this.kControlBevelButtonAlignTextFlushLeft = -2;
    this.ControlButtonTextPlacement = this.SInt16;
    this.kControlBevelButtonPlaceSysDirection = -1;
    this.kControlBevelButtonPlaceNormally = 0;
    this.kControlBevelButtonPlaceToRightOfGraphic = 1;
    this.kControlBevelButtonPlaceToLeftOfGraphic = 2;
    this.kControlBevelButtonPlaceBelowGraphic = 3;
    this.kControlBevelButtonPlaceAboveGraphic = 4;
    this.kControlBevelButtonContentTag = 1668247156;
    this.kControlBevelButtonTransformTag = 1953653102;
    this.kControlBevelButtonTextAlignTag = 1952541801;
    this.kControlBevelButtonTextOffsetTag = 1953457766;
    this.kControlBevelButtonGraphicAlignTag = 1734437993;
    this.kControlBevelButtonGraphicOffsetTag = 1735353958;
    this.kControlBevelButtonTextPlaceTag = 1953524835;
    this.kControlBevelButtonMenuValueTag = 1836474732;
    this.kControlBevelButtonMenuHandleTag = 1835560548;
    this.kControlBevelButtonMenuRefTag = 1835560548;
    this.kControlBevelButtonCenterPopupGlyphTag = 1885826147;
    this.kControlBevelButtonLastMenuTag = 1819111029;
    this.kControlBevelButtonMenuDelayTag = 1835297913;
    this.kControlBevelButtonScaleIconTag = 1935892844;
    this.kControlBevelButtonOwnedMenuRefTag = 1869443686;
    this.kControlBevelButtonKindTag = 1650811499;
    this.kControlBevelButtonIsMultiValueMenuTag = 1836412020;
    this.ControlRoundButtonSize = this.SInt16;
    this.kControlRoundButtonNormalSize = 0;
    this.kControlRoundButtonLargeSize = 2;
    this.kControlRoundButtonContentTag = 1668247156;
    this.kControlRoundButtonSizeTag = 1936292453;
    this.kControlKindRoundButton = 1919837282;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIArchive.h
function HIArchive_h(lib) {

    if (this._HIARCHIVE_H)
        return;
    this._HIARCHIVE_H = true;

    this.OpaqueHIArchiveRef = new ctypes.StructType("OpaqueHIArchiveRef");
    this.HIArchiveRef = this.OpaqueHIArchiveRef.ptr;
    this.hiArchiveTypeMismatchErr = -6780;
    this.hiArchiveKeyNotAvailableErr = -6781;
    this.hiArchiveEncodingCompleteErr = -6782;
    this.hiArchiveHIObjectIgnoresArchivingErr = -6783;
    this.kHIArchiveDecodeSuperclassForUnregisteredObjects = 1;
    this.kHIArchiveDecodingForEditor = 2;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/TextInputSources.h
function TextInputSources_h(lib) {

    if (this._TEXTINPUTSOURCES_H)
        return;
    this._TEXTINPUTSOURCES_H = true;

    this.__TISInputSource = new ctypes.StructType("__TISInputSource");
    this.TISInputSourceRef = this.__TISInputSource.ptr;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIToolbar.h
function HIToolbar_h(lib) {
    HIObject_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._HITOOLBAR_H)
        return;
    this._HITOOLBAR_H = true;

    this.HIToolbarRef = this.HIObjectRef;
    this.HIToolbarItemRef = this.HIObjectRef;
    this.kHIToolbarDisplayModeDefault = 0;
    this.kHIToolbarDisplayModeIconAndLabel = 1;
    this.kHIToolbarDisplayModeIconOnly = 2;
    this.kHIToolbarDisplayModeLabelOnly = 3;
    this.HIToolbarDisplayMode = this.UInt32;
    this.kHIToolbarDisplaySizeDefault = 0;
    this.kHIToolbarDisplaySizeNormal = 1;
    this.kHIToolbarDisplaySizeSmall = 2;
    this.HIToolbarDisplaySize = this.UInt32;
    this.kHIToolbarNoAttributes = 0;
    this.kHIToolbarAutoSavesConfig = 1;
    this.kHIToolbarIsConfigurable = 2;
    this.kHIToolbarValidAttrs = 3;
    this.kHICommandCustomizeToolbar = 1952671335;
    this.kHICommandShowToolbar = 1952609128;
    this.kHICommandHideToolbar = 1952606308;
    this.kHICommandToggleToolbar = 1952609383;
    this.kHICommandToggleAllToolbars = 1952609377;
    this.kHICommandCycleToolbarModeSmaller = 1952607603;
    this.kHICommandCycleToolbarModeLarger = 1952607596;
    this.kHIToolbarCommandPressAction = 1952608370;
    this.kEventParamToolbar = 1952604530;
    this.kEventParamToolbarItem = 1952606580;
    this.kEventParamToolbarItemIdentifier = 1952606569;
    this.kEventParamToolbarItemConfigData = 1952606564;
    this.typeHIToolbarRef = 1952604530;
    this.typeHIToolbarItemRef = 1952606580;
    this.kEventToolbarGetDefaultIdentifiers = 1;
    this.kEventToolbarGetAllowedIdentifiers = 2;
    this.kEventToolbarGetSelectableIdentifiers = 10;
    this.kEventToolbarCreateItemWithIdentifier = 3;
    this.kEventToolbarCreateItemFromDrag = 4;
    this.kEventToolbarItemAdded = 5;
    this.kEventToolbarItemRemoved = 6;
    this.kEventToolbarDisplayModeChanged = 7;
    this.kEventToolbarDisplaySizeChanged = 8;
    this.kEventToolbarLayoutChanged = 9;
    this.kEventToolbarBeginMultiChange = 12;
    this.kEventToolbarEndMultiChange = 13;
    this.kEventToolbarItemImageChanged = 1;
    this.kEventToolbarItemLabelChanged = 2;
    this.kEventToolbarItemHelpTextChanged = 3;
    this.kEventToolbarItemCommandIDChanged = 4;
    this.kEventToolbarItemGetPersistentData = 5;
    this.kEventToolbarItemCreateCustomView = 6;
    this.kEventToolbarItemEnabledStateChanged = 7;
    this.kEventToolbarItemSelectedStateChanged = 12;
    this.kEventToolbarItemPerformAction = 8;
    this.kEventToolbarItemWouldAcceptDrop = 10;
    this.kEventToolbarItemAcceptDrop = 11;
    this.kEventParamToolbarDisplayMode = 1952605293;
    this.kEventParamToolbarDisplaySize = 1952605299;
    this.typeHIToolbarDisplayMode = 1952605293;
    this.typeHIToolbarDisplaySize = 1952605299;
    this.kEventToolbarItemViewConfigForMode = 3;
    this.kEventToolbarItemViewConfigForSize = 4;
    this.kEventToolbarItemViewEnterConfigMode = 5;
    this.kEventToolbarItemViewExitConfigMode = 6;
    this.kHIToolbarItemNoAttributes = 0;
    this.kHIToolbarItemAllowDuplicates = 1;
    this.kHIToolbarItemCantBeRemoved = 2;
    this.kHIToolbarItemAnchoredLeft = 4;
    this.kHIToolbarItemIsSeparator = 8;
    this.kHIToolbarItemSendCmdToUserFocus = 16;
    this.kHIToolbarItemLabelDisabled = 32;
    this.kHIToolbarItemDisabled = 64;
    this.kHIToolbarItemSelected = 128;
    this.kHIToolbarItemValidAttrs = 255;
    this.kHIToolbarItemMutableAttrs = 230;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HITextViews.h
function HITextViews_h(lib) {
    TextCommon_h.call(this, lib);
    MacTypes_h.call(this, lib);
    HIObject_h.call(this, lib);

    if (this._HITEXTVIEWS_H)
        return;
    this._HITEXTVIEWS_H = true;

    this.kControlStaticTextProc = 288;
    this.kControlKindStaticText = 1937012852;
    this.kControlStaticTextStyleTag = 1718578804;
    this.kControlStaticTextTextTag = 1952807028;
    this.kControlStaticTextTextHeightTag = 1952998761;
    this.kControlStaticTextTruncTag = 1953658222;
    this.kControlStaticTextCFStringTag = 1667658612;
    this.kControlStaticTextIsMultilineTag = 1937009005;
    this.kEventClassTextField = 1954047588;
    this.kEventParamTextSelection = 1954050924;
    this.kEventParamCandidateText = 1953723512;
    this.kEventParamReplacementText = 1953657976;
    this.kEventParamUnconfirmedRange = 1953853042;
    this.kEventParamUnconfirmedText = 1954051438;
    this.kEventTextAccepted = 1;
    this.kEventTextShouldChangeInRange = 2;
    this.kEventTextDidChange = 3;
    this.kControlKindHITextView = 1751741560;
    this.kControlEditUnicodeTextProc = 912;
    this.kControlEditUnicodeTextPasswordProc = 914;
    this.kControlKindEditUnicodeText = 1702196344;
    this.kControlEditTextStyleTag = 1718578804;
    this.kControlEditTextTextTag = 1952807028;
    this.kControlEditTextKeyFilterTag = 1718383730;
    this.kControlEditTextSelectionTag = 1936026725;
    this.kControlEditTextPasswordTag = 1885434739;
    this.kControlEditTextCharCount = 1667789411;
    this.kControlEditTextKeyScriptBehaviorTag = 1802724210;
    this.kControlEditTextLockedTag = 1819239275;
    this.kControlEditTextFixedTextTag = 1718909044;
    this.kControlEditTextValidationProcTag = 1986096233;
    this.kControlEditTextCFStringTag = 1667658612;
    this.kControlEditTextPasswordCFStringTag = 1886872422;
    this.kControlEditTextSingleLineTag = 1936157795;
    this.kControlEditTextInsertTextBufferTag = 1768846456;
    this.kControlEditTextInsertCFStringRefTag = 1768842086;
    this.kControlEditUnicodeTextPostUpdateProcTag = 1970304368;
    this.kControlEditTextSpellCheckingTag = 1936745323;
    this.kControlEditTextSpellCheckAsYouTypeTag = 1935892852;
    this.ControlEditTextSelectionRec = new ctypes.StructType("ControlEditTextSelectionRec", [{selStart: this.SInt16}, {selEnd: this.SInt16}]);
    this.ControlEditTextSelectionPtr = this.ControlEditTextSelectionRec.ptr;
    this.ControlEditTextValidationProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.ControlRef]).ptr;
    this.EditUnicodePostUpdateProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.UniCharArrayHandle, this.UniCharCount, this.UniCharArrayOffset, this.UniCharArrayOffset, ctypes.void_t.ptr]).ptr;
    this.ControlEditTextValidationUPP = this.ControlEditTextValidationProcPtr;
    this.EditUnicodePostUpdateUPP = this.EditUnicodePostUpdateProcPtr;
    // Dropping inline function 'NewControlEditTextValidationUPP'.
    // Dropping inline function 'NewEditUnicodePostUpdateUPP'.
    // Dropping inline function 'DisposeControlEditTextValidationUPP'.
    // Dropping inline function 'DisposeEditUnicodePostUpdateUPP'.
    // Dropping inline function 'InvokeControlEditTextValidationUPP'.
    // Dropping inline function 'InvokeEditUnicodePostUpdateUPP'.
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIPopupButton.h
function HIPopupButton_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._HIPOPUPBUTTON_H)
        return;
    this._HIPOPUPBUTTON_H = true;

    this.kControlPopupButtonProc = 400;
    this.kControlPopupFixedWidthVariant = 1;
    this.kControlPopupVariableWidthVariant = 2;
    this.kControlPopupUseAddResMenuVariant = 4;
    this.kControlPopupUseWFontVariant = 8;
    this.kControlKindPopupButton = 1886351458;
    this.kControlPopupButtonMenuHandleTag = 1835557230;
    this.kControlPopupButtonMenuRefTag = 1835557230;
    this.kControlPopupButtonMenuIDTag = 1835952484;
    this.kControlPopupButtonExtraHeightTag = 1702389876;
    this.kControlPopupButtonOwnedMenuRefTag = 1869443686;
    this.kControlPopupButtonCheckCurrentTag = 1667785579;
    this.kControlPopupArrowEastProc = 192;
    this.kControlPopupArrowWestProc = 193;
    this.kControlPopupArrowNorthProc = 194;
    this.kControlPopupArrowSouthProc = 195;
    this.kControlPopupArrowSmallEastProc = 196;
    this.kControlPopupArrowSmallWestProc = 197;
    this.kControlPopupArrowSmallNorthProc = 198;
    this.kControlPopupArrowSmallSouthProc = 199;
    this.kControlPopupArrowOrientationEast = 0;
    this.kControlPopupArrowOrientationWest = 1;
    this.kControlPopupArrowOrientationNorth = 2;
    this.kControlPopupArrowOrientationSouth = 3;
    this.ControlPopupArrowOrientation = this.UInt16;
    this.kControlPopupArrowSizeNormal = 0;
    this.kControlPopupArrowSizeSmall = 1;
    this.ControlPopupArrowSize = this.UInt16;
    this.kControlKindPopupArrow = 1885434482;
    this.popupFixedWidth = 1;
    this.popupVariableWidth = 2;
    this.popupUseAddResMenu = 4;
    this.popupUseWFont = 8;
    this.popupTitleBold = 256;
    this.popupTitleItalic = 512;
    this.popupTitleUnderline = 1024;
    this.popupTitleOutline = 2048;
    this.popupTitleShadow = 4096;
    this.popupTitleCondense = 8192;
    this.popupTitleExtend = 16384;
    this.popupTitleNoStyle = 32768;
    this.popupTitleLeftJust = 0;
    this.popupTitleCenterJust = 1;
    this.popupTitleRightJust = 255;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIObject.h
function HIObject_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._HIOBJECT_H)
        return;
    this._HIOBJECT_H = true;

    this.OpaqueHIObjectClassRef = new ctypes.StructType("OpaqueHIObjectClassRef");
    this.HIObjectClassRef = this.OpaqueHIObjectClassRef.ptr;
    this.OpaqueHIObjectRef = new ctypes.StructType("OpaqueHIObjectRef");
    this.HIObjectRef = this.OpaqueHIObjectRef.ptr;
    this.hiObjectClassExistsErr = -22080;
    this.hiObjectClassHasInstancesErr = -22081;
    this.hiObjectClassHasSubclassesErr = -22082;
    this.hiObjectClassIsAbstractErr = -22083;
    this.hiObjectCannotSubclassSingletonErr = -22084;
    this.hiObjectDelegateAlreadyExistsErr = -22090;
    this.hiObjectDelegateNotFoundErr = -22091;
    this.kHIClassOptionSingleton = 1;
    this.kEventClassHIObject = 1751740258;
    this.kEventParamHIObjectInstance = 1751740265;
    this.kEventParamHIArchive = 1751736675;
    this.kEventParamBeforeDelegates = 1650746732;
    this.kEventParamAfterDelegates = 1633969516;
    this.kEventParamDecodingForEditor = 1684366949;
    this.kEventParamInitParameters = 1885434465;
    this.typeHIObjectRef = 1751740258;
    this.kEventHIObjectConstruct = 1;
    this.kEventHIObjectInitialize = 2;
    this.kEventHIObjectDestruct = 3;
    this.kEventHIObjectIsEqual = 4;
    this.kEventHIObjectPrintDebugInfo = 5;
    this.kEventHIObjectEncode = 6;
    this.kEventHIObjectCreatedFromArchive = 7;
    this.kEventHIObjectGetInitParameters = 8;
    this.kEventClassDelegate = 1684368485;
    this.kEventParamDelegateTarget = 1684368500;
    this.kEventParamDelegateTargetClasses = 1953654627;
    this.kEventParamDelegateGroupClasses = 1735553123;
    this.kEventParamDelegateGroupParameters = 1735553136;
    this.kEventDelegateInstalled = 1;
    this.kEventDelegateRemoved = 2;
    this.kEventDelegateGetTargetClasses = 3;
    this.kEventDelegateIsGroup = 4;
    this.kEventDelegateGetGroupClasses = 5;
    this.HIDelegatePosition = this.UInt32;
    this.kHIDelegateAll = 0;
    this.kHIDelegateBefore = 1;
    this.kHIDelegateAfter = 2;
    this.OpaqueControlRef = new ctypes.StructType("OpaqueControlRef");
    this.ControlRef = this.OpaqueControlRef.ptr;
    this.ControlHandle = this.ControlRef;
    this.HIViewRef = this.ControlRef;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/AEInteraction.h
function AEInteraction_h(lib) {
    AEDataModel_h.call(this, lib);
    QuickdrawTypes_h.call(this, lib);
    Events_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._AEINTERACTION_H)
        return;
    this._AEINTERACTION_H = true;

    this.AEIdleProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.EventRecord.ptr, this.SInt32.ptr, this.RgnHandle.ptr]).ptr;
    this.AEFilterProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.EventRecord.ptr, this.SInt32, this.AETransactionID, this.AEAddressDesc.ptr]).ptr;
    this.AEIdleUPP = this.AEIdleProcPtr;
    this.AEFilterUPP = this.AEFilterProcPtr;
    this.AEInteractAllowed = this.SInt8;
    this.kAEInteractWithSelf = 0;
    this.kAEInteractWithLocal = 1;
    this.kAEInteractWithAll = 2;
    this.kAEDoNotIgnoreHandler = 0;
    this.kAEIgnoreAppPhacHandler = 1;
    this.kAEIgnoreAppEventHandler = 2;
    this.kAEIgnoreSysPhacHandler = 4;
    this.kAEIgnoreSysEventHandler = 8;
    this.kAEIngoreBuiltInEventHandler = 16;
    this.kAEDontDisposeOnResume = -2147483648;
    this.kAENoDispatch = 0;
    this.kAEUseStandardDispatch = -1;
    // Dropping inline function 'NewAEIdleUPP'.
    // Dropping inline function 'NewAEFilterUPP'.
    // Dropping inline function 'DisposeAEIdleUPP'.
    // Dropping inline function 'DisposeAEFilterUPP'.
    // Dropping inline function 'InvokeAEIdleUPP'.
    // Dropping inline function 'InvokeAEFilterUPP'.
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Translation.h
function Translation_h(lib) {
    MacTypes_h.call(this, lib);
    TranslationExtensions_h.call(this, lib);

    if (this._TRANSLATION_H)
        return;
    this._TRANSLATION_H = true;

    this.DocOpenMethod = ctypes.short;
    this.domCannot = 0;
    this.domNative = 1;
    this.domTranslateFirst = 2;
    this.domWildcard = 3;
    this.TypesBlock = this.OSType.array(64);
    this.TypesBlockPtr = this.OSType.ptr;
    this.kTranslationScrapProgressDialogID = -16555;
    this.FileTranslationSpec = new ctypes.StructType("FileTranslationSpec", [{componentSignature: this.OSType}, {translationSystemInfo: ctypes.void_t.ptr}, {src: this.FileTypeSpec}, {dst: this.FileTypeSpec}]);
    this.FileTranslationSpecArrayPtr = this.FileTranslationSpec.ptr;
    this.FileTranslationSpecArrayHandle = this.FileTranslationSpecArrayPtr.ptr;
    this.GetScrapDataProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.ScrapType, this.Handle, ctypes.void_t.ptr]).ptr;
    this.GetScrapDataUPP = this.GetScrapDataProcPtr;
    // Dropping inline function 'NewGetScrapDataUPP'.
    // Dropping inline function 'DisposeGetScrapDataUPP'.
    // Dropping inline function 'InvokeGetScrapDataUPP'.
    this.GetScrapData = this.GetScrapDataUPP;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIComboBox.h
function HIComboBox_h(lib) {

    if (this._HICOMBOBOX_H)
        return;
    this._HICOMBOBOX_H = true;

    this.kEventClassHIComboBox = 1751737186;
    this.kEventParamComboBoxListSelectedItemIndex = 1667394665;
    this.kEventComboBoxListItemSelected = 1;
    this.kHIComboBoxNoAttributes = 0;
    this.kHIComboBoxAutoCompletionAttribute = 1;
    this.kHIComboBoxAutoDisclosureAttribute = 2;
    this.kHIComboBoxAutoSortAttribute = 4;
    this.kHIComboBoxAutoSizeListAttribute = 8;
    this.kHIComboBoxStandardAttributes = 11;
    this.kControlKindHIComboBox = 1667392120;
    this.kHIComboBoxEditTextPart = 5;
    this.kHIComboBoxDisclosurePart = 28;
    this.kHIComboBoxListTag = 1667394675;
    this.kHIComboBoxListPixelWidthTag = 1667394679;
    this.kHIComboBoxListPixelHeightTag = 1667394664;
    this.kHIComboBoxNumVisibleItemsTag = 1667395177;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIGeometry.h
function HIGeometry_h(lib) {
    CGGeometry_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._HIGEOMETRY_H)
        return;
    this._HIGEOMETRY_H = true;

    this.HIPoint = this.CGPoint;
    this.HISize = this.CGSize;
    this.HIRect = this.CGRect;
    this.HICoordinateSpace = this.UInt32;
    this.kHICoordSpace72DPIGlobal = 1;
    this.kHICoordSpaceScreenPixel = 2;
    this.kHICoordSpaceWindow = 3;
    this.kHICoordSpaceView = 4;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/MacApplication.h
function MacApplication_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._MACAPPLICATION_H)
        return;
    this._MACAPPLICATION_H = true;

    this.kUIModeNormal = 0;
    this.kUIModeContentSuppressed = 1;
    this.kUIModeContentHidden = 2;
    this.kUIModeAllSuppressed = 4;
    this.kUIModeAllHidden = 3;
    this.SystemUIMode = this.UInt32;
    this.kUIOptionAutoShowMenuBar = 1;
    this.kUIOptionDisableAppleMenu = 4;
    this.kUIOptionDisableProcessSwitch = 8;
    this.kUIOptionDisableForceQuit = 16;
    this.kUIOptionDisableSessionTerminate = 32;
    this.kUIOptionDisableHide = 64;
    this.kUIOptionDisableMenuBarTransparency = 512;
    this.SystemUIOptions = this.OptionBits;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIDisclosureViews.h
function HIDisclosureViews_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._HIDISCLOSUREVIEWS_H)
        return;
    this._HIDISCLOSUREVIEWS_H = true;

    this.kControlKindDisclosureButton = 1684632418;
    this.kControlDisclosureButtonClosed = 0;
    this.kControlDisclosureButtonDisclosed = 1;
    this.kControlTriangleProc = 64;
    this.kControlTriangleLeftFacingProc = 65;
    this.kControlTriangleAutoToggleProc = 66;
    this.kControlTriangleLeftFacingAutoToggleProc = 67;
    this.ControlDisclosureTriangleOrientation = this.UInt16;
    this.kControlDisclosureTrianglePointDefault = 0;
    this.kControlDisclosureTrianglePointRight = 1;
    this.kControlDisclosureTrianglePointLeft = 2;
    this.kControlKindDisclosureTriangle = 1684632436;
    this.kControlTriangleLastValueTag = 1818325876;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Scrap.h
function Scrap_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._SCRAP_H)
        return;
    this._SCRAP_H = true;

    this.ScrapFlavorType = this.FourCharCode;
    this.kScrapFlavorTypePicture = 1346978644;
    this.kScrapFlavorTypeText = 1413830740;
    this.kScrapFlavorTypeTextStyle = 1937013100;
    this.kScrapFlavorTypeMovie = 1836019574;
    this.kScrapFlavorTypeSound = 1936614432;
    this.kScrapFlavorTypeUnicode = 1970567284;
    this.kScrapFlavorTypeUTF16External = 1970549046;
    this.kScrapFlavorTypeUnicodeStyle = 1970500716;
    this.kScrapFlavorSizeUnknown = -1;
    this.kScrapReservedFlavorType = 1936877172;
    this.kScrapFlavorMaskNone = 0;
    this.kScrapFlavorMaskSenderOnly = 1;
    this.kScrapFlavorMaskTranslated = 2;
    this.ScrapFlavorFlags = this.UInt32;
    this.ScrapFlavorInfo = new ctypes.StructType("ScrapFlavorInfo", [{flavorType: this.ScrapFlavorType}, {flavorFlags: this.ScrapFlavorFlags}]);
    this.OpaqueScrapRef = new ctypes.StructType("OpaqueScrapRef");
    this.ScrapRef = this.OpaqueScrapRef.ptr;
    this.kScrapGetNamedScrap = 0;
    this.kScrapClearNamedScrap = 1;
    this.ScrapPromiseKeeperProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.ScrapRef, this.ScrapFlavorType, ctypes.void_t.ptr]).ptr;
    this.ScrapPromiseKeeperUPP = this.ScrapPromiseKeeperProcPtr;
    // Dropping inline function 'NewScrapPromiseKeeperUPP'.
    // Dropping inline function 'DisposeScrapPromiseKeeperUPP'.
    // Dropping inline function 'InvokeScrapPromiseKeeperUPP'.
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HISearchField.h
function HISearchField_h(lib) {

    if (this._HISEARCHFIELD_H)
        return;
    this._HISEARCHFIELD_H = true;

    this.kControlKindHISearchField = 1936877156;
    this.kControlSearchFieldCancelPart = 30;
    this.kControlSearchFieldMenuPart = 31;
    this.kHISearchFieldNoAttributes = 0;
    this.kHISearchFieldAttributesCancel = 1;
    this.kHISearchFieldAttributesSearchIcon = 2;
    this.kEventClassSearchField = 1936877156;
    this.kEventSearchFieldCancelClicked = 1;
    this.kEventSearchFieldSearchClicked = 2;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIClockView.h
function HIClockView_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._HICLOCKVIEW_H)
        return;
    this._HICLOCKVIEW_H = true;

    this.kEventClassClockView = 1668050787;
    this.kEventClockDateOrTimeChanged = 1;
    this.kControlClockTimeProc = 240;
    this.kControlClockTimeSecondsProc = 241;
    this.kControlClockDateProc = 242;
    this.kControlClockMonthYearProc = 243;
    this.ControlClockType = this.UInt16;
    this.kControlClockTypeHourMinute = 0;
    this.kControlClockTypeHourMinuteSecond = 1;
    this.kControlClockTypeMonthDayYear = 2;
    this.kControlClockTypeMonthYear = 3;
    this.ControlClockFlags = this.UInt32;
    this.kControlClockFlagStandard = 0;
    this.kControlClockNoFlags = 0;
    this.kControlClockFlagDisplayOnly = 1;
    this.kControlClockIsDisplayOnly = 1;
    this.kControlClockFlagLive = 2;
    this.kControlClockIsLive = 2;
    this.kControlKindClock = 1668047723;
    this.kControlClockLongDateTag = 1684108389;
    this.kControlClockAbsoluteTimeTag = 1633842036;
    this.kControlClockFontStyleTag = 1718578804;
    this.kControlClockAnimatingTag = 1634625901;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIMenuView.h
function HIMenuView_h(lib) {

    if (this._HIMENUVIEW_H)
        return;
    this._HIMENUVIEW_H = true;

    this.kControlKindHIMenuView = 1835363957;
    this.kControlKindHIStandardMenuView = 1936551541;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIScrollView.h
function HIScrollView_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._HISCROLLVIEW_H)
        return;
    this._HISCROLLVIEW_H = true;

    this.kControlScrollBarProc = 384;
    this.kControlScrollBarLiveProc = 386;
    this.kControlKindScrollBar = 1935827314;
    this.kControlScrollBarShowsArrowsTag = 1634890351;
    this.kControlKindHIScrollView = 1935897196;
    this.kEventClassScrollable = 1935897196;
    this.kEventParamImageSize = 1768780666;
    this.kEventParamViewSize = 1987539834;
    this.kEventParamLineSize = 1819177850;
    this.kEventParamOrigin = 1869768558;
    this.kEventScrollableGetInfo = 1;
    this.kEventScrollableInfoChanged = 2;
    this.kEventScrollableScrollTo = 10;
    this.kHIScrollViewOptionsVertScroll = 1;
    this.kHIScrollViewOptionsHorizScroll = 2;
    this.kHIScrollViewOptionsAllowGrow = 4;
    this.kHIScrollViewOptionsFillGrowArea = 8;
    this.kHIScrollViewOptionsDisableSmoothScrolling = 16;
    this.kHIScrollViewValidOptions = 31;
    this.HIScrollViewAction = this.UInt32;
    this.kHIScrollViewScrollToTop = 1;
    this.kHIScrollViewScrollToBottom = 2;
    this.kHIScrollViewScrollToLeft = 4;
    this.kHIScrollViewScrollToRight = 8;
    this.kHIScrollViewPageUp = 16;
    this.kHIScrollViewPageDown = 32;
    this.kHIScrollViewPageLeft = 64;
    this.kHIScrollViewPageRight = 128;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HISeparator.h
function HISeparator_h(lib) {

    if (this._HISEPARATOR_H)
        return;
    this._HISEPARATOR_H = true;

    this.kControlSeparatorLineProc = 144;
    this.kControlKindSeparator = 1936027745;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/TypeSelect.h
function TypeSelect_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._TYPESELECT_H)
        return;
    this._TYPESELECT_H = true;

    this.TSCode = this.SInt16;
    this.tsPreviousSelectMode = -1;
    this.tsNormalSelectMode = 0;
    this.tsNextSelectMode = 1;
    this.TypeSelectRecord = new ctypes.StructType("TypeSelectRecord", [{tsrLastKeyTime: this.UInt32}, {tsrScript: this.ScriptCode}, {tsrKeyStrokes: this.Str63}]);
    this.IndexToStringProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [ctypes.short, this.ScriptCode.ptr, this.StringPtr.ptr, ctypes.void_t.ptr]).ptr;
    this.IndexToStringUPP = this.IndexToStringProcPtr;
    // Dropping inline function 'NewIndexToStringUPP'.
    // Dropping inline function 'DisposeIndexToStringUPP'.
    // Dropping inline function 'InvokeIndexToStringUPP'.
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Notification.h
function Notification_h(lib) {
    OSUtils_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._NOTIFICATION_H)
        return;
    this._NOTIFICATION_H = true;

    this.NMRecPtr = this.NMRec.ptr;
    this.NMProcPtr = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.NMRecPtr]).ptr;
    this.NMUPP = this.NMProcPtr;
    this.NMRec = new ctypes.StructType("NMRec", [{qLink: this.QElemPtr}, {qType: ctypes.short}, {nmFlags: ctypes.short}, {nmPrivate: this.SRefCon}, {nmReserved: ctypes.short}, {nmMark: ctypes.short}, {nmIcon: this.Handle}, {nmSound: this.Handle}, {nmStr: this.StringPtr}, {nmResp: this.NMUPP}, {nmRefCon: this.SRefCon}]);
    // Dropping inline function 'NewNMUPP'.
    // Dropping inline function 'DisposeNMUPP'.
    // Dropping inline function 'InvokeNMUPP'.
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HISlider.h
function HISlider_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._HISLIDER_H)
        return;
    this._HISLIDER_H = true;

    this.kControlSliderProc = 48;
    this.kControlSliderLiveFeedback = 1;
    this.kControlSliderHasTickMarks = 2;
    this.kControlSliderReverseDirection = 4;
    this.kControlSliderNonDirectional = 8;
    this.ControlSliderOrientation = this.UInt16;
    this.kControlSliderPointsDownOrRight = 0;
    this.kControlSliderPointsUpOrLeft = 1;
    this.kControlSliderDoesNotPoint = 2;
    this.kControlKindSlider = 1936483442;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIProgressViews.h
function HIProgressViews_h(lib) {

    if (this._HIPROGRESSVIEWS_H)
        return;
    this._HIPROGRESSVIEWS_H = true;

    this.kControlProgressBarProc = 80;
    this.kControlRelevanceBarProc = 81;
    this.kControlKindProgressBar = 1886545762;
    this.kControlKindRelevanceBar = 1919249506;
    this.kControlProgressBarIndeterminateTag = 1768842341;
    this.kControlProgressBarAnimatingTag = 1634625901;
    this.kControlChasingArrowsProc = 112;
    this.kControlKindChasingArrows = 1667330674;
    this.kControlChasingArrowsAnimatingTag = 1634625901;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/ControlDefinitions.h
function ControlDefinitions_h(lib) {

    if (this._CONTROLDEFINITIONS_H)
        return;
    this._CONTROLDEFINITIONS_H = true;

    this.pushButProc = 0;
    this.checkBoxProc = 1;
    this.radioButProc = 2;
    this.scrollBarProc = 16;
    this.popupMenuProc = 1008;
    this.kControlLabelPart = 1;
    this.kControlMenuPart = 2;
    this.kControlTrianglePart = 4;
    this.kControlEditTextPart = 5;
    this.kControlPicturePart = 6;
    this.kControlIconPart = 7;
    this.kControlClockPart = 8;
    this.kControlListBoxPart = 24;
    this.kControlListBoxDoubleClickPart = 25;
    this.kControlImageWellPart = 26;
    this.kControlRadioGroupPart = 27;
    this.kControlButtonPart = 10;
    this.kControlCheckBoxPart = 11;
    this.kControlRadioButtonPart = 11;
    this.kControlUpButtonPart = 20;
    this.kControlDownButtonPart = 21;
    this.kControlPageUpPart = 22;
    this.kControlPageDownPart = 23;
    this.kControlClockHourDayPart = 9;
    this.kControlClockMinuteMonthPart = 10;
    this.kControlClockSecondYearPart = 11;
    this.kControlClockAMPMPart = 12;
    this.kControlDataBrowserPart = 24;
    this.kControlDataBrowserDraggedPart = 25;
    this.kControlEditTextProc = 272;
    this.kControlEditTextPasswordProc = 274;
    this.kControlEditTextInlineInputProc = 276;
    this.kControlKindEditText = 1702131828;
    this.kControlEditTextTEHandleTag = 1952997742;
    this.kControlEditTextInlinePreUpdateProcTag = 1886549360;
    this.kControlEditTextInlinePostUpdateProcTag = 1886352752;
    this.kControlPictureProc = 304;
    this.kControlPictureNoTrackProc = 305;
    this.kControlKindPicture = 1885954932;
    this.kControlPictureHandleTag = 1885954920;
    this.kControlListBoxProc = 352;
    this.kControlListBoxAutoSizeProc = 353;
    this.kControlKindListBox = 1818390392;
    this.kControlListBoxListHandleTag = 1818780014;
    this.kControlListBoxKeyFilterTag = 1718383730;
    this.kControlListBoxFontStyleTag = 1718578804;
    this.kControlListBoxDoubleClickTag = 1684171875;
    this.kControlListBoxLDEFTag = 1818518886;
    this.kControlListDescResType = 1818518899;
    this.kControlScrollTextBoxProc = 432;
    this.kControlScrollTextBoxAutoScrollProc = 433;
    this.kControlKindScrollingTextBox = 1937007224;
    this.kControlScrollTextBoxDelayBeforeAutoScrollTag = 1937007724;
    this.kControlScrollTextBoxDelayBetweenAutoScrollTag = 1935893612;
    this.kControlScrollTextBoxAutoScrollAmountTag = 1935764852;
    this.kControlScrollTextBoxContentsTag = 1953654131;
    this.kControlScrollTextBoxAnimatingTag = 1634625901;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HITextUtils.h
function HITextUtils_h(lib) {

    if (this._HITEXTUTILS_H)
        return;
    this._HITEXTUTILS_H = true;

}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HIRelevanceBar.h
function HIRelevanceBar_h(lib) {

    if (this._HIRELEVANCEBAR_H)
        return;
    this._HIRELEVANCEBAR_H = true;

}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HILittleArrows.h
function HILittleArrows_h(lib) {

    if (this._HILITTLEARROWS_H)
        return;
    this._HILITTLEARROWS_H = true;

    this.kControlLittleArrowsProc = 96;
    this.kControlKindLittleArrows = 1818325618;
    this.kControlLittleArrowsIncrementValueTag = 1768842098;
}

// Based on /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/HITextLengthFilter.h
function HITextLengthFilter_h(lib) {

    if (this._HITEXTLENGTHFILTER_H)
        return;
    this._HITEXTLENGTHFILTER_H = true;

    this.kEventParamTextLength = 1414284622;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/AE.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/CoreText.jsm");
Components.utils.import("resource://osxtypes/CoreGraphics.jsm");
Components.utils.import("resource://osxtypes/QD.jsm");
Components.utils.import("resource://osxtypes/LaunchServices.jsm");
Components.utils.import("resource://osxtypes/ATS.jsm");

const EXPORTED_SYMBOLS = ["HIToolbox", "Menus_h", "MacWindows_h", "MacTextEditor_h", "CarbonEventsCore_h", "HITheme_h", "Drag_h", "Events_h", "TranslationExtensions_h", "Controls_h", "HIView_h", "TSMTE_h", "CarbonEvents_h", "HIWindowViews_h", "TextServices_h", "HIImageViews_h", "Appearance_h", "Dialogs_h", "TextEdit_h", "MacHelp_h", "HIToolboxDebugging_h", "HIDataBrowser_h", "IBCarbonRuntime_h", "HIContainerViews_h", "Lists_h", "HISegmentedView_h", "Keyboards_h", "HIAccessibility_h", "HITabbedView_h", "HIButtonViews_h", "HIArchive_h", "TextInputSources_h", "HIToolbar_h", "HITextViews_h", "HIPopupButton_h", "HIObject_h", "AEInteraction_h", "Translation_h", "HIComboBox_h", "HIGeometry_h", "MacApplication_h", "HIDisclosureViews_h", "Scrap_h", "HISearchField_h", "HIClockView_h", "HIMenuView_h", "HIScrollView_h", "HISeparator_h", "TypeSelect_h", "Notification_h", "HISlider_h", "HIProgressViews_h", "ControlDefinitions_h", "HITextUtils_h", "HIRelevanceBar_h", "HILittleArrows_h", "HITextLengthFilter_h"];

function HIToolbox() {
    let libpath = "/System/Library/Frameworks/HIToolbox.framework/HIToolbox";
    let lib = ctypes.open(libpath);

    Menus_h.call(this, lib);
    MacWindows_h.call(this, lib);
    MacTextEditor_h.call(this, lib);
    CarbonEventsCore_h.call(this, lib);
    HITheme_h.call(this, lib);
    Drag_h.call(this, lib);
    Events_h.call(this, lib);
    TranslationExtensions_h.call(this, lib);
    Controls_h.call(this, lib);
    HIView_h.call(this, lib);
    TSMTE_h.call(this, lib);
    CarbonEvents_h.call(this, lib);
    HIWindowViews_h.call(this, lib);
    TextServices_h.call(this, lib);
    HIImageViews_h.call(this, lib);
    Appearance_h.call(this, lib);
    Dialogs_h.call(this, lib);
    TextEdit_h.call(this, lib);
    MacHelp_h.call(this, lib);
    HIToolboxDebugging_h.call(this, lib);
    HIDataBrowser_h.call(this, lib);
    IBCarbonRuntime_h.call(this, lib);
    HIContainerViews_h.call(this, lib);
    Lists_h.call(this, lib);
    HISegmentedView_h.call(this, lib);
    Keyboards_h.call(this, lib);
    HIAccessibility_h.call(this, lib);
    HITabbedView_h.call(this, lib);
    HIButtonViews_h.call(this, lib);
    HIArchive_h.call(this, lib);
    TextInputSources_h.call(this, lib);
    HIToolbar_h.call(this, lib);
    HITextViews_h.call(this, lib);
    HIPopupButton_h.call(this, lib);
    HIObject_h.call(this, lib);
    AEInteraction_h.call(this, lib);
    Translation_h.call(this, lib);
    HIComboBox_h.call(this, lib);
    HIGeometry_h.call(this, lib);
    MacApplication_h.call(this, lib);
    HIDisclosureViews_h.call(this, lib);
    Scrap_h.call(this, lib);
    HISearchField_h.call(this, lib);
    HIClockView_h.call(this, lib);
    HIMenuView_h.call(this, lib);
    HIScrollView_h.call(this, lib);
    HISeparator_h.call(this, lib);
    TypeSelect_h.call(this, lib);
    Notification_h.call(this, lib);
    HISlider_h.call(this, lib);
    HIProgressViews_h.call(this, lib);
    ControlDefinitions_h.call(this, lib);
    HITextUtils_h.call(this, lib);
    HIRelevanceBar_h.call(this, lib);
    HILittleArrows_h.call(this, lib);
    HITextLengthFilter_h.call(this, lib);
}
