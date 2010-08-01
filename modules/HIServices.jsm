// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/AXValue.h
function AXValue_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._AXVALUE_H)
        return;
    this._AXVALUE_H = true;

    this.kAXValueCGPointType = 1;
    this.kAXValueCGSizeType = 2;
    this.kAXValueCGRectType = 3;
    this.kAXValueCFRangeType = 4;
    this.kAXValueAXErrorType = 5;
    this.kAXValueIllegalType = 0;
    this.__AXValue = new ctypes.StructType("__AXValue");
    this.AXValueRef = this.__AXValue.ptr;
    this.AXValueGetTypeID = lib.declare("AXValueGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.AXValueCreate = lib.declare("AXValueCreate", ctypes.default_abi, this.AXValueRef, this.AXValueType, ctypes.void_t.ptr);
    this.AXValueGetType = lib.declare("AXValueGetType", ctypes.default_abi, this.AXValueType, this.AXValueRef);
    this.AXValueGetValue = lib.declare("AXValueGetValue", ctypes.default_abi, this.Boolean, this.AXValueRef, this.AXValueType, ctypes.void_t.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/Icons.h
function Icons_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    IconsCore_h.call(this, lib);
    HIShape_h.call(this, lib);
    IconStorage_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._ICONS_H)
        return;
    this._ICONS_H = true;

    this.kAlignNone = 0;
    this.kAlignVerticalCenter = 1;
    this.kAlignTop = 2;
    this.kAlignBottom = 3;
    this.kAlignHorizontalCenter = 4;
    this.kAlignAbsoluteCenter = 5;
    this.kAlignCenterTop = 6;
    this.kAlignCenterBottom = 7;
    this.kAlignLeft = 8;
    this.kAlignCenterLeft = 9;
    this.kAlignTopLeft = 10;
    this.kAlignBottomLeft = 11;
    this.kAlignRight = 12;
    this.kAlignCenterRight = 13;
    this.kAlignTopRight = 14;
    this.kAlignBottomRight = 15;
    this.atNone = 0;
    this.atVerticalCenter = 1;
    this.atTop = 2;
    this.atBottom = 3;
    this.atHorizontalCenter = 4;
    this.atAbsoluteCenter = 5;
    this.atCenterTop = 6;
    this.atCenterBottom = 7;
    this.atLeft = 8;
    this.atCenterLeft = 9;
    this.atTopLeft = 10;
    this.atBottomLeft = 11;
    this.atRight = 12;
    this.atCenterRight = 13;
    this.atTopRight = 14;
    this.atBottomRight = 15;
    this.IconAlignmentType = this.SInt16;
    this.kTransformNone = 0;
    this.kTransformDisabled = 1;
    this.kTransformOffline = 2;
    this.kTransformOpen = 3;
    this.kTransformLabel1 = 256;
    this.kTransformLabel2 = 512;
    this.kTransformLabel3 = 768;
    this.kTransformLabel4 = 1024;
    this.kTransformLabel5 = 1280;
    this.kTransformLabel6 = 1536;
    this.kTransformLabel7 = 1792;
    this.kTransformSelected = 16384;
    this.kTransformSelectedDisabled = 16385;
    this.kTransformSelectedOffline = 16386;
    this.kTransformSelectedOpen = 16387;
    this.ttNone = 0;
    this.ttDisabled = 1;
    this.ttOffline = 2;
    this.ttOpen = 3;
    this.ttLabel1 = 256;
    this.ttLabel2 = 512;
    this.ttLabel3 = 768;
    this.ttLabel4 = 1024;
    this.ttLabel5 = 1280;
    this.ttLabel6 = 1536;
    this.ttLabel7 = 1792;
    this.ttSelected = 16384;
    this.ttSelectedDisabled = 16385;
    this.ttSelectedOffline = 16386;
    this.ttSelectedOpen = 16387;
    this.IconTransformType = this.SInt16;
    this.kSelectorLarge1Bit = 1;
    this.kSelectorLarge4Bit = 2;
    this.kSelectorLarge8Bit = 4;
    this.kSelectorLarge32Bit = 8;
    this.kSelectorLarge8BitMask = 16;
    this.kSelectorSmall1Bit = 256;
    this.kSelectorSmall4Bit = 512;
    this.kSelectorSmall8Bit = 1024;
    this.kSelectorSmall32Bit = 2048;
    this.kSelectorSmall8BitMask = 4096;
    this.kSelectorMini1Bit = 65536;
    this.kSelectorMini4Bit = 131072;
    this.kSelectorMini8Bit = 262144;
    this.kSelectorHuge1Bit = 16777216;
    this.kSelectorHuge4Bit = 33554432;
    this.kSelectorHuge8Bit = 67108864;
    this.kSelectorHuge32Bit = 134217728;
    this.kSelectorHuge8BitMask = 268435456;
    this.kSelectorAllLargeData = 255;
    this.kSelectorAllSmallData = 65280;
    this.kSelectorAllMiniData = 16711680;
    this.kSelectorAllHugeData = -16777216;
    this.kSelectorAll1BitData = 16843009;
    this.kSelectorAll4BitData = 33686018;
    this.kSelectorAll8BitData = 67372036;
    this.kSelectorAll32BitData = 134219784;
    this.kSelectorAllAvailableData = -1;
    this.IconSelectorValue = this.UInt32;
    this.svLarge1Bit = 1;
    this.svLarge4Bit = 2;
    this.svLarge8Bit = 4;
    this.svSmall1Bit = 256;
    this.svSmall4Bit = 512;
    this.svSmall8Bit = 1024;
    this.svMini1Bit = 65536;
    this.svMini4Bit = 131072;
    this.svMini8Bit = 262144;
    this.svAllLargeData = 255;
    this.svAllSmallData = 65280;
    this.svAllMiniData = 16711680;
    this.svAll1BitData = 16843009;
    this.svAll4BitData = 33686018;
    this.svAll8BitData = 67372036;
    this.svAllAvailableData = -1;
    this.IconActionProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSErr, [this.ResType, this.Handle.ptr, ctypes.void_t.ptr]).ptr;
    this.IconGetterProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Handle, [this.ResType, ctypes.void_t.ptr]).ptr;
    this.IconActionUPP = this.IconActionProcPtr;
    this.IconGetterUPP = this.IconGetterProcPtr;
    // Dropping inline function 'NewIconActionUPP'.
    // Dropping inline function 'NewIconGetterUPP'.
    // Dropping inline function 'DisposeIconActionUPP'.
    // Dropping inline function 'DisposeIconGetterUPP'.
    // Dropping inline function 'InvokeIconActionUPP'.
    // Dropping inline function 'InvokeIconGetterUPP'.
    this.IconGetter = this.IconGetterProcPtr;
    this.IconAction = this.IconActionProcPtr;
    this.CIcon = new ctypes.StructType("CIcon", [{iconPMap: this.PixMap}, {iconMask: this.BitMap}, {iconBMap: this.BitMap}, {iconData: this.Handle}, {iconMaskData: this.SInt16.array(1)}]);
    this.CIconPtr = this.CIcon.ptr;
    this.CIconHandle = this.CIconPtr.ptr;
    this.IconSuiteRef = this.Handle;
    this.IconCacheRef = this.Handle;
    this.GetCIcon = lib.declare("GetCIcon", ctypes.default_abi, this.CIconHandle, this.SInt16);
    this.PlotCIcon = lib.declare("PlotCIcon", ctypes.default_abi, ctypes.void_t, this.Rect.ptr, this.CIconHandle);
    this.DisposeCIcon = lib.declare("DisposeCIcon", ctypes.default_abi, ctypes.void_t, this.CIconHandle);
    this.GetIcon = lib.declare("GetIcon", ctypes.default_abi, this.Handle, this.SInt16);
    this.PlotIcon = lib.declare("PlotIcon", ctypes.default_abi, ctypes.void_t, this.Rect.ptr, this.Handle);
    this.PlotIconID = lib.declare("PlotIconID", ctypes.default_abi, this.OSErr, this.Rect.ptr, this.IconAlignmentType, this.IconTransformType, this.SInt16);
    this.NewIconSuite = lib.declare("NewIconSuite", ctypes.default_abi, this.OSErr, this.IconSuiteRef.ptr);
    this.AddIconToSuite = lib.declare("AddIconToSuite", ctypes.default_abi, this.OSErr, this.Handle, this.IconSuiteRef, this.ResType);
    this.GetIconFromSuite = lib.declare("GetIconFromSuite", ctypes.default_abi, this.OSErr, this.Handle.ptr, this.IconSuiteRef, this.ResType);
    this.ForEachIconDo = lib.declare("ForEachIconDo", ctypes.default_abi, this.OSErr, this.IconSuiteRef, this.IconSelectorValue, this.IconActionUPP, ctypes.void_t.ptr);
    this.GetIconSuite = lib.declare("GetIconSuite", ctypes.default_abi, this.OSErr, this.IconSuiteRef.ptr, this.SInt16, this.IconSelectorValue);
    this.DisposeIconSuite = lib.declare("DisposeIconSuite", ctypes.default_abi, this.OSErr, this.IconSuiteRef, this.Boolean);
    this.PlotIconSuite = lib.declare("PlotIconSuite", ctypes.default_abi, this.OSErr, this.Rect.ptr, this.IconAlignmentType, this.IconTransformType, this.IconSuiteRef);
    this.MakeIconCache = lib.declare("MakeIconCache", ctypes.default_abi, this.OSErr, this.IconCacheRef.ptr, this.IconGetterUPP, ctypes.void_t.ptr);
    this.LoadIconCache = lib.declare("LoadIconCache", ctypes.default_abi, this.OSErr, this.Rect.ptr, this.IconAlignmentType, this.IconTransformType, this.IconCacheRef);
    this.PlotIconMethod = lib.declare("PlotIconMethod", ctypes.default_abi, this.OSErr, this.Rect.ptr, this.IconAlignmentType, this.IconTransformType, this.IconGetterUPP, ctypes.void_t.ptr);
    this.GetLabel = lib.declare("GetLabel", ctypes.default_abi, this.OSErr, this.SInt16, this.RGBColor.ptr, ctypes.unsigned_char.ptr);
    this.PtInIconID = lib.declare("PtInIconID", ctypes.default_abi, this.Boolean, this.Point, this.Rect.ptr, this.IconAlignmentType, this.SInt16);
    this.PtInIconSuite = lib.declare("PtInIconSuite", ctypes.default_abi, this.Boolean, this.Point, this.Rect.ptr, this.IconAlignmentType, this.IconSuiteRef);
    this.PtInIconMethod = lib.declare("PtInIconMethod", ctypes.default_abi, this.Boolean, this.Point, this.Rect.ptr, this.IconAlignmentType, this.IconGetterUPP, ctypes.void_t.ptr);
    this.RectInIconID = lib.declare("RectInIconID", ctypes.default_abi, this.Boolean, this.Rect.ptr, this.Rect.ptr, this.IconAlignmentType, this.SInt16);
    this.RectInIconSuite = lib.declare("RectInIconSuite", ctypes.default_abi, this.Boolean, this.Rect.ptr, this.Rect.ptr, this.IconAlignmentType, this.IconSuiteRef);
    this.RectInIconMethod = lib.declare("RectInIconMethod", ctypes.default_abi, this.Boolean, this.Rect.ptr, this.Rect.ptr, this.IconAlignmentType, this.IconGetterUPP, ctypes.void_t.ptr);
    this.IconIDToRgn = lib.declare("IconIDToRgn", ctypes.default_abi, this.OSErr, this.RgnHandle, this.Rect.ptr, this.IconAlignmentType, this.SInt16);
    this.IconSuiteToRgn = lib.declare("IconSuiteToRgn", ctypes.default_abi, this.OSErr, this.RgnHandle, this.Rect.ptr, this.IconAlignmentType, this.IconSuiteRef);
    this.IconMethodToRgn = lib.declare("IconMethodToRgn", ctypes.default_abi, this.OSErr, this.RgnHandle, this.Rect.ptr, this.IconAlignmentType, this.IconGetterUPP, ctypes.void_t.ptr);
    this.SetSuiteLabel = lib.declare("SetSuiteLabel", ctypes.default_abi, this.OSErr, this.IconSuiteRef, this.SInt16);
    this.GetSuiteLabel = lib.declare("GetSuiteLabel", ctypes.default_abi, this.SInt16, this.IconSuiteRef);
    this.GetIconCacheData = lib.declare("GetIconCacheData", ctypes.default_abi, this.OSErr, this.IconCacheRef, ctypes.void_t.ptr.ptr);
    this.SetIconCacheData = lib.declare("SetIconCacheData", ctypes.default_abi, this.OSErr, this.IconCacheRef, ctypes.void_t.ptr);
    this.GetIconCacheProc = lib.declare("GetIconCacheProc", ctypes.default_abi, this.OSErr, this.IconCacheRef, this.IconGetterUPP.ptr);
    this.SetIconCacheProc = lib.declare("SetIconCacheProc", ctypes.default_abi, this.OSErr, this.IconCacheRef, this.IconGetterUPP);
    this.PlotIconHandle = lib.declare("PlotIconHandle", ctypes.default_abi, this.OSErr, this.Rect.ptr, this.IconAlignmentType, this.IconTransformType, this.Handle);
    this.PlotSICNHandle = lib.declare("PlotSICNHandle", ctypes.default_abi, this.OSErr, this.Rect.ptr, this.IconAlignmentType, this.IconTransformType, this.Handle);
    this.PlotCIconHandle = lib.declare("PlotCIconHandle", ctypes.default_abi, this.OSErr, this.Rect.ptr, this.IconAlignmentType, this.IconTransformType, this.CIconHandle);
    this.PlotIconRefFlags = this.UInt32;
    this.kPlotIconRefNormalFlags = 0;
    this.kPlotIconRefNoImage = 2;
    this.kPlotIconRefNoMask = 4;
    this.IconRefToIconFamily = lib.declare("IconRefToIconFamily", ctypes.default_abi, this.OSErr, this.IconRef, this.IconSelectorValue, this.IconFamilyHandle.ptr);
    this.IconFamilyToIconSuite = lib.declare("IconFamilyToIconSuite", ctypes.default_abi, this.OSErr, this.IconFamilyHandle, this.IconSelectorValue, this.IconSuiteRef.ptr);
    this.IconSuiteToIconFamily = lib.declare("IconSuiteToIconFamily", ctypes.default_abi, this.OSErr, this.IconSuiteRef, this.IconSelectorValue, this.IconFamilyHandle.ptr);
    this.SetIconFamilyData = lib.declare("SetIconFamilyData", ctypes.default_abi, this.OSErr, this.IconFamilyHandle, this.OSType, this.Handle);
    this.GetIconFamilyData = lib.declare("GetIconFamilyData", ctypes.default_abi, this.OSErr, this.IconFamilyHandle, this.OSType, this.Handle);
    this.PlotIconRef = lib.declare("PlotIconRef", ctypes.default_abi, this.OSErr, this.Rect.ptr, this.IconAlignmentType, this.IconTransformType, this.IconServicesUsageFlags, this.IconRef);
    this.PlotIconRefInContext = lib.declare("PlotIconRefInContext", ctypes.default_abi, this.OSStatus, this.CGContextRef, this.CGRect.ptr, this.IconAlignmentType, this.IconTransformType, this.RGBColor.ptr, this.PlotIconRefFlags, this.IconRef);
    this.PtInIconRef = lib.declare("PtInIconRef", ctypes.default_abi, this.Boolean, this.Point.ptr, this.Rect.ptr, this.IconAlignmentType, this.IconServicesUsageFlags, this.IconRef);
    this.RectInIconRef = lib.declare("RectInIconRef", ctypes.default_abi, this.Boolean, this.Rect.ptr, this.Rect.ptr, this.IconAlignmentType, this.IconServicesUsageFlags, this.IconRef);
    this.IconRefToRgn = lib.declare("IconRefToRgn", ctypes.default_abi, this.OSErr, this.RgnHandle, this.Rect.ptr, this.IconAlignmentType, this.IconServicesUsageFlags, this.IconRef);
    this.IconRefContainsCGPoint = lib.declare("IconRefContainsCGPoint", ctypes.default_abi, this.Boolean, this.CGPoint.ptr, this.CGRect.ptr, this.IconAlignmentType, this.IconServicesUsageFlags, this.IconRef);
    this.IconRefIntersectsCGRect = lib.declare("IconRefIntersectsCGRect", ctypes.default_abi, this.Boolean, this.CGRect.ptr, this.CGRect.ptr, this.IconAlignmentType, this.IconServicesUsageFlags, this.IconRef);
    this.IconRefToHIShape = lib.declare("IconRefToHIShape", ctypes.default_abi, this.HIShapeRef, this.CGRect.ptr, this.IconAlignmentType, this.IconServicesUsageFlags, this.IconRef);
    this.GetIconSizesFromIconRef = lib.declare("GetIconSizesFromIconRef", ctypes.default_abi, this.OSErr, this.IconSelectorValue, this.IconSelectorValue.ptr, this.IconServicesUsageFlags, this.IconRef);
    this.IsIconRefMaskEmpty = lib.declare("IsIconRefMaskEmpty", ctypes.default_abi, this.Boolean, this.IconRef);
    this.GetIconRefVariant = lib.declare("GetIconRefVariant", ctypes.default_abi, this.IconRef, this.IconRef, this.OSType, this.IconTransformType.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/HIShape.h
function HIShape_h(lib) {
    QuickdrawTypes_h.call(this, lib);
    CGGeometry_h.call(this, lib);
    CGContext_h.call(this, lib);
    CGBase_h.call(this, lib);
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._HISHAPE_H)
        return;
    this._HISHAPE_H = true;

    this.__HIShape = new ctypes.StructType("__HIShape");
    this.HIShapeRef = this.__HIShape.ptr;
    this.HIMutableShapeRef = this.__HIShape.ptr;
    this.kHIShapeEnumerateInit = 1;
    this.kHIShapeEnumerateRect = 2;
    this.kHIShapeEnumerateTerminate = 3;
    this.kHIShapeParseFromTop = 0;
    this.kHIShapeParseFromBottom = 1;
    this.kHIShapeParseFromLeft = 0;
    this.kHIShapeParseFromRight = 2;
    this.kHIShapeParseFromTopLeft = 0;
    this.kHIShapeParseFromBottomRight = 3;
    this.HIShapeEnumerateProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [ctypes.int, this.HIShapeRef, this.CGRect.ptr, ctypes.void_t.ptr]).ptr;
    this.HIShapeGetTypeID = lib.declare("HIShapeGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.HIShapeCreateEmpty = lib.declare("HIShapeCreateEmpty", ctypes.default_abi, this.HIShapeRef);
    this.HIShapeCreateWithQDRgn = lib.declare("HIShapeCreateWithQDRgn", ctypes.default_abi, this.HIShapeRef, this.RgnHandle);
    this.HIShapeCreateWithRect = lib.declare("HIShapeCreateWithRect", ctypes.default_abi, this.HIShapeRef, this.CGRect.ptr);
    this.HIShapeCreateCopy = lib.declare("HIShapeCreateCopy", ctypes.default_abi, this.HIShapeRef, this.HIShapeRef);
    this.HIShapeCreateIntersection = lib.declare("HIShapeCreateIntersection", ctypes.default_abi, this.HIShapeRef, this.HIShapeRef, this.HIShapeRef);
    this.HIShapeCreateDifference = lib.declare("HIShapeCreateDifference", ctypes.default_abi, this.HIShapeRef, this.HIShapeRef, this.HIShapeRef);
    this.HIShapeCreateUnion = lib.declare("HIShapeCreateUnion", ctypes.default_abi, this.HIShapeRef, this.HIShapeRef, this.HIShapeRef);
    this.HIShapeCreateXor = lib.declare("HIShapeCreateXor", ctypes.default_abi, this.HIShapeRef, this.HIShapeRef, this.HIShapeRef);
    this.HIShapeIsEmpty = lib.declare("HIShapeIsEmpty", ctypes.default_abi, this.Boolean, this.HIShapeRef);
    this.HIShapeIsRectangular = lib.declare("HIShapeIsRectangular", ctypes.default_abi, this.Boolean, this.HIShapeRef);
    this.HIShapeContainsPoint = lib.declare("HIShapeContainsPoint", ctypes.default_abi, this.Boolean, this.HIShapeRef, this.CGPoint.ptr);
    this.HIShapeIntersectsRect = lib.declare("HIShapeIntersectsRect", ctypes.default_abi, this.Boolean, this.HIShapeRef, this.CGRect.ptr);
    this.HIShapeGetBounds = lib.declare("HIShapeGetBounds", ctypes.default_abi, this.CGRect.ptr, this.HIShapeRef, this.CGRect.ptr);
    this.HIShapeGetAsQDRgn = lib.declare("HIShapeGetAsQDRgn", ctypes.default_abi, this.OSStatus, this.HIShapeRef, this.RgnHandle);
    this.HIShapeReplacePathInCGContext = lib.declare("HIShapeReplacePathInCGContext", ctypes.default_abi, this.OSStatus, this.HIShapeRef, this.CGContextRef);
    this.HIShapeSetQDClip = lib.declare("HIShapeSetQDClip", ctypes.default_abi, this.OSStatus, this.HIShapeRef, this.CGrafPtr);
    this.HIShapeEnumerate = lib.declare("HIShapeEnumerate", ctypes.default_abi, this.OSStatus, this.HIShapeRef, this.OptionBits, this.HIShapeEnumerateProcPtr, ctypes.void_t.ptr);
    this.HIShapeCreateMutable = lib.declare("HIShapeCreateMutable", ctypes.default_abi, this.HIMutableShapeRef);
    this.HIShapeCreateMutableCopy = lib.declare("HIShapeCreateMutableCopy", ctypes.default_abi, this.HIMutableShapeRef, this.HIShapeRef);
    this.HIShapeCreateMutableWithRect = lib.declare("HIShapeCreateMutableWithRect", ctypes.default_abi, this.HIMutableShapeRef, this.CGRect.ptr);
    this.HIShapeSetEmpty = lib.declare("HIShapeSetEmpty", ctypes.default_abi, this.OSStatus, this.HIMutableShapeRef);
    this.HIShapeSetWithShape = lib.declare("HIShapeSetWithShape", ctypes.default_abi, this.OSStatus, this.HIMutableShapeRef, this.HIShapeRef);
    this.HIShapeIntersect = lib.declare("HIShapeIntersect", ctypes.default_abi, this.OSStatus, this.HIShapeRef, this.HIShapeRef, this.HIMutableShapeRef);
    this.HIShapeDifference = lib.declare("HIShapeDifference", ctypes.default_abi, this.OSStatus, this.HIShapeRef, this.HIShapeRef, this.HIMutableShapeRef);
    this.HIShapeUnion = lib.declare("HIShapeUnion", ctypes.default_abi, this.OSStatus, this.HIShapeRef, this.HIShapeRef, this.HIMutableShapeRef);
    this.HIShapeXor = lib.declare("HIShapeXor", ctypes.default_abi, this.OSStatus, this.HIShapeRef, this.HIShapeRef, this.HIMutableShapeRef);
    this.HIShapeOffset = lib.declare("HIShapeOffset", ctypes.default_abi, this.OSStatus, this.HIMutableShapeRef, this.CGFloat, this.CGFloat);
    this.HIShapeInset = lib.declare("HIShapeInset", ctypes.default_abi, this.OSStatus, this.HIMutableShapeRef, this.CGFloat, this.CGFloat);
    this.HIShapeUnionWithRect = lib.declare("HIShapeUnionWithRect", ctypes.default_abi, this.OSStatus, this.HIMutableShapeRef, this.CGRect.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/InternetConfig.h
function InternetConfig_h(lib) {
    AEDataModel_h.call(this, lib);
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);
    Aliases_h.call(this, lib);

    if (this._INTERNETCONFIG_H)
        return;
    this._INTERNETCONFIG_H = true;

    this.icPrefNotFoundErr = -666;
    this.icPermErr = -667;
    this.icPrefDataErr = -668;
    this.icInternalErr = -669;
    this.icTruncatedErr = -670;
    this.icNoMoreWritersErr = -671;
    this.icNothingToOverrideErr = -672;
    this.icNoURLErr = -673;
    this.icConfigNotFoundErr = -674;
    this.icConfigInappropriateErr = -675;
    this.icProfileNotFoundErr = -676;
    this.icTooManyProfilesErr = -677;
    this.kICComponentInterfaceVersion0 = 0;
    this.kICComponentInterfaceVersion1 = 65536;
    this.kICComponentInterfaceVersion2 = 131072;
    this.kICComponentInterfaceVersion3 = 196608;
    this.kICComponentInterfaceVersion4 = 262144;
    this.kICComponentInterfaceVersion = 262144;
    this.OpaqueICInstance = new ctypes.StructType("OpaqueICInstance");
    this.ICInstance = this.OpaqueICInstance.ptr;
    this.ICDirSpec = new ctypes.StructType("ICDirSpec", [{vRefNum: ctypes.short}, {dirID: ctypes.long}]);
    this.ICDirSpecArray = this.ICDirSpec.array(4);
    this.ICDirSpecArrayPtr = this.ICDirSpecArray.ptr;
    this.ICAttr = this.UInt32;
    this.kICAttrLockedBit = 0;
    this.kICAttrVolatileBit = 1;
    this.kICAttrNoChange = -1;
    this.kICAttrLockedMask = 1;
    this.kICAttrVolatileMask = 2;
    this.ICPerm = this.UInt8;
    this.icNoPerm = 0;
    this.icReadOnlyPerm = 1;
    this.icReadWritePerm = 2;
    this.ICProfileID = this.SInt32;
    this.ICProfileIDPtr = this.ICProfileID.ptr;
    this.kICNilProfileID = 0;
    this.kICNoUserInteractionBit = 0;
    this.kICNoUserInteractionMask = 1;
    this.kICFileType = 1229144432;
    this.kICCreator = 1229144432;
    this.kInternetEventClass = 1196773964;
    this.kAEGetURL = 1196773964;
    this.kAEFetchURL = 1179996748;
    this.keyAEAttaching = 1098146664;
    this.kICEditPreferenceEventClass = 1229144432;
    this.kICEditPreferenceEvent = 1229144432;
    this.keyICEditPreferenceDestination = 1684370292;
    this.kICComponentVersion = 0;
    this.kICNumVersion = 1;
    this.ICFontRecord = new ctypes.StructType("ICFontRecord", [{size: this.SInt16}, {face: this.Style}, {pad: ctypes.char}, {font: this.Str255}]);
    this.ICFontRecordPtr = this.ICFontRecord.ptr;
    this.ICFontRecordHandle = this.ICFontRecordPtr.ptr;
    this.ICCharTable = new ctypes.StructType("ICCharTable", [{netToMac: ctypes.unsigned_char.array(256)}, {macToNet: ctypes.unsigned_char.array(256)}]);
    this.ICCharTablePtr = this.ICCharTable.ptr;
    this.ICCharTableHandle = this.ICCharTablePtr.ptr;
    this.ICAppSpec = new ctypes.StructType("ICAppSpec", [{fCreator: this.OSType}, {name: this.Str63}]);
    this.ICAppSpecPtr = this.ICAppSpec.ptr;
    this.ICAppSpecHandle = this.ICAppSpecPtr.ptr;
    this.ICAppSpecList = new ctypes.StructType("ICAppSpecList", [{numberOfItems: this.SInt16}, {appSpecs: this.ICAppSpec.array(1)}]);
    this.ICAppSpecListPtr = this.ICAppSpecList.ptr;
    this.ICAppSpecListHandle = this.ICAppSpecListPtr.ptr;
    this.ICFileSpec = new ctypes.StructType("ICFileSpec", [{volName: this.Str31}, {volCreationDate: this.SInt32}, {fss: this.FSSpec}, {alias: this.AliasRecord}]);
    this.ICFileSpecPtr = this.ICFileSpec.ptr;
    this.ICFileSpecHandle = this.ICFileSpecPtr.ptr;
    this.kICFileSpecHeaderSize = 106;
    this.ICMapEntryFlags = this.SInt32;
    this.ICFixedLength = this.SInt16;
    this.ICMapEntry = new ctypes.StructType("ICMapEntry", [{totalLength: this.SInt16}, {fixedLength: this.ICFixedLength}, {version: this.SInt16}, {fileType: this.OSType}, {fileCreator: this.OSType}, {postCreator: this.OSType}, {flags: this.ICMapEntryFlags}, {extension: this.Str255}, {creatorAppName: this.Str255}, {postAppName: this.Str255}, {MIMEType: this.Str255}, {entryName: this.Str255}]);
    this.ICMapEntryPtr = this.ICMapEntry.ptr;
    this.ICMapEntryHandle = this.ICMapEntryPtr.ptr;
    this.kICMapFixedLength = 22;
    this.kICMapBinaryBit = 0;
    this.kICMapResourceForkBit = 1;
    this.kICMapDataForkBit = 2;
    this.kICMapPostBit = 3;
    this.kICMapNotIncomingBit = 4;
    this.kICMapNotOutgoingBit = 5;
    this.kICMapBinaryMask = 1;
    this.kICMapResourceForkMask = 2;
    this.kICMapDataForkMask = 4;
    this.kICMapPostMask = 8;
    this.kICMapNotIncomingMask = 16;
    this.kICMapNotOutgoingMask = 32;
    this.ICServiceEntryFlags = this.SInt16;
    this.ICServiceEntry = new ctypes.StructType("ICServiceEntry", [{name: this.Str255}, {port: this.SInt16}, {flags: this.ICServiceEntryFlags}]);
    this.ICServiceEntryPtr = this.ICServiceEntry.ptr;
    this.ICServiceEntryHandle = this.ICServiceEntryPtr.ptr;
    this.kICServicesTCPBit = 0;
    this.kICServicesUDPBit = 1;
    this.kICServicesTCPMask = 1;
    this.kICServicesUDPMask = 2;
    this.ICServices = new ctypes.StructType("ICServices", [{count: this.SInt16}, {services: this.ICServiceEntry.array(1)}]);
    this.ICServicesPtr = this.ICServices.ptr;
    this.ICServicesHandle = this.ICServicesPtr.ptr;
    this.ICStart = lib.declare("ICStart", ctypes.default_abi, this.OSStatus, this.ICInstance.ptr, this.OSType);
    this.ICStop = lib.declare("ICStop", ctypes.default_abi, this.OSStatus, this.ICInstance);
    this.ICGetVersion = lib.declare("ICGetVersion", ctypes.default_abi, this.OSStatus, this.ICInstance, ctypes.long, this.UInt32.ptr);
    this.ICGetConfigName = lib.declare("ICGetConfigName", ctypes.default_abi, this.OSStatus, this.ICInstance, this.Boolean, ctypes.unsigned_char.ptr);
    this.ICGetSeed = lib.declare("ICGetSeed", ctypes.default_abi, this.OSStatus, this.ICInstance, ctypes.long.ptr);
    this.ICGetPerm = lib.declare("ICGetPerm", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ICPerm.ptr);
    this.ICBegin = lib.declare("ICBegin", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ICPerm);
    this.ICGetPref = lib.declare("ICGetPref", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param, this.ICAttr.ptr, ctypes.void_t.ptr, ctypes.long.ptr);
    this.ICSetPref = lib.declare("ICSetPref", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param, this.ICAttr, ctypes.void_t.ptr, ctypes.long);
    this.ICFindPrefHandle = lib.declare("ICFindPrefHandle", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param, this.ICAttr.ptr, this.Handle);
    this.ICGetPrefHandle = lib.declare("ICGetPrefHandle", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param, this.ICAttr.ptr, this.Handle.ptr);
    this.ICSetPrefHandle = lib.declare("ICSetPrefHandle", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param, this.ICAttr, this.Handle);
    this.ICCountPref = lib.declare("ICCountPref", ctypes.default_abi, this.OSStatus, this.ICInstance, ctypes.long.ptr);
    this.ICGetIndPref = lib.declare("ICGetIndPref", ctypes.default_abi, this.OSStatus, this.ICInstance, ctypes.long, ctypes.unsigned_char.ptr);
    this.ICDeletePref = lib.declare("ICDeletePref", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param);
    this.ICEnd = lib.declare("ICEnd", ctypes.default_abi, this.OSStatus, this.ICInstance);
    this.ICGetDefaultPref = lib.declare("ICGetDefaultPref", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param, this.Handle);
    this.ICEditPreferences = lib.declare("ICEditPreferences", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param);
    this.ICLaunchURL = lib.declare("ICLaunchURL", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param, ctypes.void_t.ptr, ctypes.long, ctypes.long.ptr, ctypes.long.ptr);
    this.ICParseURL = lib.declare("ICParseURL", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param, ctypes.void_t.ptr, ctypes.long, ctypes.long.ptr, ctypes.long.ptr, this.Handle);
    this.ICCreateGURLEvent = lib.declare("ICCreateGURLEvent", ctypes.default_abi, this.OSStatus, this.ICInstance, this.OSType, this.Handle, this.AppleEvent.ptr);
    this.ICSendGURLEvent = lib.declare("ICSendGURLEvent", ctypes.default_abi, this.OSStatus, this.ICInstance, this.AppleEvent.ptr);
    this.ICMapFilename = lib.declare("ICMapFilename", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ConstStr255Param, this.ICMapEntry.ptr);
    this.ICMapTypeCreator = lib.declare("ICMapTypeCreator", ctypes.default_abi, this.OSStatus, this.ICInstance, this.OSType, this.OSType, this.ConstStr255Param, this.ICMapEntry.ptr);
    this.ICMapEntriesFilename = lib.declare("ICMapEntriesFilename", ctypes.default_abi, this.OSStatus, this.ICInstance, this.Handle, this.ConstStr255Param, this.ICMapEntry.ptr);
    this.ICMapEntriesTypeCreator = lib.declare("ICMapEntriesTypeCreator", ctypes.default_abi, this.OSStatus, this.ICInstance, this.Handle, this.OSType, this.OSType, this.ConstStr255Param, this.ICMapEntry.ptr);
    this.ICCountMapEntries = lib.declare("ICCountMapEntries", ctypes.default_abi, this.OSStatus, this.ICInstance, this.Handle, ctypes.long.ptr);
    this.ICGetIndMapEntry = lib.declare("ICGetIndMapEntry", ctypes.default_abi, this.OSStatus, this.ICInstance, this.Handle, ctypes.long, ctypes.long.ptr, this.ICMapEntry.ptr);
    this.ICGetMapEntry = lib.declare("ICGetMapEntry", ctypes.default_abi, this.OSStatus, this.ICInstance, this.Handle, ctypes.long, this.ICMapEntry.ptr);
    this.ICSetMapEntry = lib.declare("ICSetMapEntry", ctypes.default_abi, this.OSStatus, this.ICInstance, this.Handle, ctypes.long, this.ICMapEntry.ptr);
    this.ICDeleteMapEntry = lib.declare("ICDeleteMapEntry", ctypes.default_abi, this.OSStatus, this.ICInstance, this.Handle, ctypes.long);
    this.ICAddMapEntry = lib.declare("ICAddMapEntry", ctypes.default_abi, this.OSStatus, this.ICInstance, this.Handle, this.ICMapEntry.ptr);
    this.ICGetCurrentProfile = lib.declare("ICGetCurrentProfile", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ICProfileID.ptr);
    this.ICSetCurrentProfile = lib.declare("ICSetCurrentProfile", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ICProfileID);
    this.ICCountProfiles = lib.declare("ICCountProfiles", ctypes.default_abi, this.OSStatus, this.ICInstance, ctypes.long.ptr);
    this.ICGetIndProfile = lib.declare("ICGetIndProfile", ctypes.default_abi, this.OSStatus, this.ICInstance, ctypes.long, this.ICProfileID.ptr);
    this.ICGetProfileName = lib.declare("ICGetProfileName", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ICProfileID, ctypes.unsigned_char.ptr);
    this.ICSetProfileName = lib.declare("ICSetProfileName", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ICProfileID, this.ConstStr255Param);
    this.ICAddProfile = lib.declare("ICAddProfile", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ICProfileID, this.ICProfileID.ptr);
    this.ICDeleteProfile = lib.declare("ICDeleteProfile", ctypes.default_abi, this.OSStatus, this.ICInstance, this.ICProfileID);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/AXUIElement.h
function AXUIElement_h(lib) {
    CGRemoteOperation_h.call(this, lib);
    CFRunLoop_h.call(this, lib);
    AXError_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._AXUIELEMENT_H)
        return;
    this._AXUIELEMENT_H = true;

    this.AXAPIEnabled = lib.declare("AXAPIEnabled", ctypes.default_abi, this.Boolean);
    this.AXIsProcessTrusted = lib.declare("AXIsProcessTrusted", ctypes.default_abi, this.Boolean);
    this.AXMakeProcessTrusted = lib.declare("AXMakeProcessTrusted", ctypes.default_abi, this.AXError, this.CFStringRef);
    this.__AXUIElement = new ctypes.StructType("__AXUIElement");
    this.AXUIElementRef = this.__AXUIElement.ptr;
    this.kAXCopyMultipleAttributeOptionStopOnError = 1;
    this.AXCopyMultipleAttributeOptions = this.UInt32;
    this.AXUIElementGetTypeID = lib.declare("AXUIElementGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.AXUIElementCopyAttributeNames = lib.declare("AXUIElementCopyAttributeNames", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFArrayRef.ptr);
    this.AXUIElementCopyAttributeValue = lib.declare("AXUIElementCopyAttributeValue", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFStringRef, this.CFTypeRef.ptr);
    this.AXUIElementGetAttributeValueCount = lib.declare("AXUIElementGetAttributeValueCount", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFStringRef, this.CFIndex.ptr);
    this.AXUIElementCopyAttributeValues = lib.declare("AXUIElementCopyAttributeValues", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFStringRef, this.CFIndex, this.CFIndex, this.CFArrayRef.ptr);
    this.AXUIElementIsAttributeSettable = lib.declare("AXUIElementIsAttributeSettable", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFStringRef, this.Boolean.ptr);
    this.AXUIElementSetAttributeValue = lib.declare("AXUIElementSetAttributeValue", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFStringRef, this.CFTypeRef);
    this.AXUIElementCopyMultipleAttributeValues = lib.declare("AXUIElementCopyMultipleAttributeValues", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFArrayRef, this.AXCopyMultipleAttributeOptions, this.CFArrayRef.ptr);
    this.AXUIElementCopyParameterizedAttributeNames = lib.declare("AXUIElementCopyParameterizedAttributeNames", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFArrayRef.ptr);
    this.AXUIElementCopyParameterizedAttributeValue = lib.declare("AXUIElementCopyParameterizedAttributeValue", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFStringRef, this.CFTypeRef, this.CFTypeRef.ptr);
    this.AXUIElementCopyActionNames = lib.declare("AXUIElementCopyActionNames", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFArrayRef.ptr);
    this.AXUIElementCopyActionDescription = lib.declare("AXUIElementCopyActionDescription", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFStringRef, this.CFStringRef.ptr);
    this.AXUIElementPerformAction = lib.declare("AXUIElementPerformAction", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CFStringRef);
    this.AXUIElementCopyElementAtPosition = lib.declare("AXUIElementCopyElementAtPosition", ctypes.default_abi, this.AXError, this.AXUIElementRef, ctypes.float, ctypes.float, this.AXUIElementRef.ptr);
    // Dropping declaration of 'AXUIElementCreateApplication': 'pid_t' defined out of scope
    this.AXUIElementCreateSystemWide = lib.declare("AXUIElementCreateSystemWide", ctypes.default_abi, this.AXUIElementRef);
    // Dropping declaration of 'AXUIElementGetPid': 'pid_t' defined out of scope
    this.AXUIElementSetMessagingTimeout = lib.declare("AXUIElementSetMessagingTimeout", ctypes.default_abi, this.AXError, this.AXUIElementRef, ctypes.float);
    this.AXUIElementPostKeyboardEvent = lib.declare("AXUIElementPostKeyboardEvent", ctypes.default_abi, this.AXError, this.AXUIElementRef, this.CGCharCode, this.CGKeyCode, this.Boolean);
    this.__AXObserver = new ctypes.StructType("__AXObserver");
    this.AXObserverRef = this.__AXObserver.ptr;
    this.AXObserverCallback = new ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, [this.AXObserverRef, this.AXUIElementRef, this.CFStringRef, ctypes.void_t.ptr]).ptr;
    this.AXObserverGetTypeID = lib.declare("AXObserverGetTypeID", ctypes.default_abi, this.CFTypeID);
    // Dropping declaration of 'AXObserverCreate': 'pid_t' defined out of scope
    this.AXObserverAddNotification = lib.declare("AXObserverAddNotification", ctypes.default_abi, this.AXError, this.AXObserverRef, this.AXUIElementRef, this.CFStringRef, ctypes.void_t.ptr);
    this.AXObserverRemoveNotification = lib.declare("AXObserverRemoveNotification", ctypes.default_abi, this.AXError, this.AXObserverRef, this.AXUIElementRef, this.CFStringRef);
    this.AXObserverGetRunLoopSource = lib.declare("AXObserverGetRunLoopSource", ctypes.default_abi, this.CFRunLoopSourceRef, this.AXObserverRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/Processes.h
function Processes_h(lib) {
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._PROCESSES_H)
        return;
    this._PROCESSES_H = true;

    this.kNoProcess = 0;
    this.kSystemProcess = 1;
    this.kCurrentProcess = 2;
    this.LaunchFlags = this.UInt16;
    this.launchContinue = 16384;
    this.launchNoFileFlags = 2048;
    this.launchUseMinimum = 1024;
    this.launchDontSwitch = 512;
    this.launchAllow24Bit = 256;
    this.launchInhibitDaemon = 128;
    this.AppParameters = new ctypes.StructType("AppParameters", []);
    this.AppParametersPtr = this.AppParameters.ptr;
    this.LaunchParamBlockRec = new ctypes.StructType("LaunchParamBlockRec", [{reserved1: this.UInt32}, {reserved2: this.UInt16}, {launchBlockID: this.UInt16}, {launchEPBLength: this.UInt32}, {launchFileFlags: this.UInt16}, {launchControlFlags: this.LaunchFlags}, {launchAppSpec: this.FSSpecPtr}, {launchProcessSN: this.ProcessSerialNumber}, {launchPreferredSize: this.UInt32}, {launchMinimumSize: this.UInt32}, {launchAvailableSize: this.UInt32}, {launchAppParameters: this.AppParametersPtr}]);
    this.LaunchPBPtr = this.LaunchParamBlockRec.ptr;
    this.extendedBlock = 19523;
    this.extendedBlockLen = 32;
    this.modeReserved = 16777216;
    this.modeControlPanel = 524288;
    this.modeLaunchDontSwitch = 262144;
    this.modeDeskAccessory = 131072;
    this.modeMultiLaunch = 65536;
    this.modeNeedSuspendResume = 16384;
    this.modeCanBackground = 4096;
    this.modeDoesActivateOnFGSwitch = 2048;
    this.modeOnlyBackground = 1024;
    this.modeGetFrontClicks = 512;
    this.modeGetAppDiedMsg = 256;
    this.mode32BitCompatible = 128;
    this.modeHighLevelEventAware = 64;
    this.modeLocalAndRemoteHLEvents = 32;
    this.modeStationeryAware = 16;
    this.modeUseTextEditServices = 8;
    this.modeDisplayManagerAware = 4;
    this.ProcessApplicationTransformState = this.UInt32;
    this.kProcessTransformToForegroundApplication = 1;
    this.ProcessInfoRec = new ctypes.StructType("ProcessInfoRec", [{processInfoLength: this.UInt32}, {processName: this.StringPtr}, {processNumber: this.ProcessSerialNumber}, {processType: this.UInt32}, {processSignature: this.OSType}, {processMode: this.UInt32}, {processLocation: this.Ptr}, {processSize: this.UInt32}, {processFreeMem: this.UInt32}, {processLauncher: this.ProcessSerialNumber}, {processLaunchDate: this.UInt32}, {processActiveTime: this.UInt32}, {processAppSpec: this.FSSpecPtr}]);
    this.ProcessInfoRecPtr = this.ProcessInfoRec.ptr;
    this.ProcessInfoExtendedRec = new ctypes.StructType("ProcessInfoExtendedRec", [{processInfoLength: this.UInt32}, {processName: this.StringPtr}, {processNumber: this.ProcessSerialNumber}, {processType: this.UInt32}, {processSignature: this.OSType}, {processMode: this.UInt32}, {processLocation: this.Ptr}, {processSize: this.UInt32}, {processFreeMem: this.UInt32}, {processLauncher: this.ProcessSerialNumber}, {processLaunchDate: this.UInt32}, {processActiveTime: this.UInt32}, {processAppSpec: this.FSSpecPtr}, {processTempMemTotal: this.UInt32}, {processPurgeableTempMemTotal: this.UInt32}]);
    this.ProcessInfoExtendedRecPtr = this.ProcessInfoExtendedRec.ptr;
    this.SizeResourceRec = new ctypes.StructType("SizeResourceRec", [{flags: this.UInt16}, {preferredHeapSize: this.UInt32}, {minimumHeapSize: this.UInt32}]);
    this.SizeResourceRecPtr = this.SizeResourceRec.ptr;
    this.SizeResourceRecHandle = this.SizeResourceRecPtr.ptr;
    this.kProcessDictionaryIncludeAllInformationMask = -1;
    this.kQuitBeforeNormalTimeMask = 1;
    this.kQuitAtNormalTimeMask = 2;
    this.kQuitBeforeFBAsQuitMask = 4;
    this.kQuitBeforeShellQuitsMask = 8;
    this.kQuitBeforeTerminatorAppQuitsMask = 16;
    this.kQuitNeverMask = 32;
    this.kQuitOptionsMask = 127;
    this.kQuitNotQuitDuringInstallMask = 256;
    this.kQuitNotQuitDuringLogoutMask = 512;
    this.LaunchApplication = lib.declare("LaunchApplication", ctypes.default_abi, this.OSErr, this.LaunchPBPtr);
    this.GetCurrentProcess = lib.declare("GetCurrentProcess", ctypes.default_abi, this.OSErr, this.ProcessSerialNumber.ptr);
    this.GetFrontProcess = lib.declare("GetFrontProcess", ctypes.default_abi, this.OSErr, this.ProcessSerialNumber.ptr);
    this.GetNextProcess = lib.declare("GetNextProcess", ctypes.default_abi, this.OSErr, this.ProcessSerialNumber.ptr);
    this.GetProcessInformation = lib.declare("GetProcessInformation", ctypes.default_abi, this.OSErr, this.ProcessSerialNumber.ptr, this.ProcessInfoRec.ptr);
    this.ProcessInformationCopyDictionary = lib.declare("ProcessInformationCopyDictionary", ctypes.default_abi, this.CFDictionaryRef, this.ProcessSerialNumber.ptr, this.UInt32);
    this.SetFrontProcess = lib.declare("SetFrontProcess", ctypes.default_abi, this.OSErr, this.ProcessSerialNumber.ptr);
    this.kSetFrontProcessFrontWindowOnly = 1;
    this.kSetFrontProcessCausedByUser = 2;
    this.SetFrontProcessWithOptions = lib.declare("SetFrontProcessWithOptions", ctypes.default_abi, this.OSStatus, this.ProcessSerialNumber.ptr, this.OptionBits);
    this.WakeUpProcess = lib.declare("WakeUpProcess", ctypes.default_abi, this.OSErr, this.ProcessSerialNumber.ptr);
    this.SameProcess = lib.declare("SameProcess", ctypes.default_abi, this.OSErr, this.ProcessSerialNumber.ptr, this.ProcessSerialNumber.ptr, this.Boolean.ptr);
    this.ExitToShell = lib.declare("ExitToShell", ctypes.default_abi, ctypes.void_t);
    this.KillProcess = lib.declare("KillProcess", ctypes.default_abi, this.OSErr, this.ProcessSerialNumber.ptr);
    this.GetProcessBundleLocation = lib.declare("GetProcessBundleLocation", ctypes.default_abi, this.OSStatus, this.ProcessSerialNumber.ptr, this.FSRef.ptr);
    this.CopyProcessName = lib.declare("CopyProcessName", ctypes.default_abi, this.OSStatus, this.ProcessSerialNumber.ptr, this.CFStringRef.ptr);
    // Dropping declaration of 'GetProcessPID': 'pid_t' defined out of scope
    // Dropping declaration of 'GetProcessForPID': 'pid_t' defined out of scope
    this.IsProcessVisible = lib.declare("IsProcessVisible", ctypes.default_abi, this.Boolean, this.ProcessSerialNumber.ptr);
    this.ShowHideProcess = lib.declare("ShowHideProcess", ctypes.default_abi, this.OSErr, this.ProcessSerialNumber.ptr, this.Boolean);
    this.TransformProcessType = lib.declare("TransformProcessType", ctypes.default_abi, this.OSStatus, this.ProcessSerialNumber.ptr, this.ProcessApplicationTransformState);
    this.initDev = 0;
    this.hitDev = 1;
    this.closeDev = 2;
    this.nulDev = 3;
    this.updateDev = 4;
    this.activDev = 5;
    this.deactivDev = 6;
    this.keyEvtDev = 7;
    this.macDev = 8;
    this.undoDev = 9;
    this.cutDev = 10;
    this.copyDev = 11;
    this.pasteDev = 12;
    this.clearDev = 13;
    this.cursorDev = 14;
    this.cdevGenErr = -1;
    this.cdevMemErr = 0;
    this.cdevResErr = 1;
    this.cdevUnset = 3;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/Pasteboard.h
function Pasteboard_h(lib) {
    CFData_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._PASTEBOARD_H)
        return;
    this._PASTEBOARD_H = true;

    this.OpaquePasteboardRef = new ctypes.StructType("OpaquePasteboardRef");
    this.PasteboardRef = this.OpaquePasteboardRef.ptr;
    this.PasteboardItemID = ctypes.void_t.ptr;
    this.badPasteboardSyncErr = -25130;
    this.badPasteboardIndexErr = -25131;
    this.badPasteboardItemErr = -25132;
    this.badPasteboardFlavorErr = -25133;
    this.duplicatePasteboardFlavorErr = -25134;
    this.notPasteboardOwnerErr = -25135;
    this.noPasteboardPromiseKeeperErr = -25136;
    this.PasteboardSyncFlags = this.OptionBits;
    this.kPasteboardModified = 1;
    this.kPasteboardClientIsOwner = 2;
    this.PasteboardFlavorFlags = this.OptionBits;
    this.kPasteboardFlavorNoFlags = 0;
    this.kPasteboardFlavorSenderOnly = 1;
    this.kPasteboardFlavorSenderTranslated = 2;
    this.kPasteboardFlavorNotSaved = 4;
    this.kPasteboardFlavorRequestOnly = 8;
    this.kPasteboardFlavorSystemTranslated = 256;
    this.kPasteboardFlavorPromised = 512;
    this.PasteboardStandardLocation = this.OSType;
    this.kPasteboardStandardLocationTrash = 1953657704;
    this.kPasteboardStandardLocationUnknown = 1970170734;
    this.PasteboardGetTypeID = lib.declare("PasteboardGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.PasteboardCreate = lib.declare("PasteboardCreate", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.PasteboardRef.ptr);
    this.PasteboardSynchronize = lib.declare("PasteboardSynchronize", ctypes.default_abi, this.PasteboardSyncFlags, this.PasteboardRef);
    this.PasteboardClear = lib.declare("PasteboardClear", ctypes.default_abi, this.OSStatus, this.PasteboardRef);
    this.PasteboardCopyName = lib.declare("PasteboardCopyName", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.CFStringRef.ptr);
    this.PasteboardGetItemCount = lib.declare("PasteboardGetItemCount", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.ItemCount.ptr);
    this.PasteboardGetItemIdentifier = lib.declare("PasteboardGetItemIdentifier", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.CFIndex, this.PasteboardItemID.ptr);
    this.PasteboardCopyItemFlavors = lib.declare("PasteboardCopyItemFlavors", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.PasteboardItemID, this.CFArrayRef.ptr);
    this.PasteboardGetItemFlavorFlags = lib.declare("PasteboardGetItemFlavorFlags", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.PasteboardItemID, this.CFStringRef, this.PasteboardFlavorFlags.ptr);
    this.PasteboardCopyItemFlavorData = lib.declare("PasteboardCopyItemFlavorData", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.PasteboardItemID, this.CFStringRef, this.CFDataRef.ptr);
    this.PasteboardPutItemFlavor = lib.declare("PasteboardPutItemFlavor", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.PasteboardItemID, this.CFStringRef, this.CFDataRef, this.PasteboardFlavorFlags);
    this.PasteboardCopyPasteLocation = lib.declare("PasteboardCopyPasteLocation", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.CFURLRef.ptr);
    this.PasteboardSetPasteLocation = lib.declare("PasteboardSetPasteLocation", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.CFURLRef);
    this.PasteboardPromiseKeeperProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.OSStatus, [this.PasteboardRef, this.PasteboardItemID, this.CFStringRef, ctypes.void_t.ptr]).ptr;
    this.PasteboardSetPromiseKeeper = lib.declare("PasteboardSetPromiseKeeper", ctypes.default_abi, this.OSStatus, this.PasteboardRef, this.PasteboardPromiseKeeperProcPtr, ctypes.void_t.ptr);
    this.PasteboardResolvePromises = lib.declare("PasteboardResolvePromises", ctypes.default_abi, this.OSStatus, this.PasteboardRef);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/AXTextAttributedString.h
function AXTextAttributedString_h(lib) {
    CFBase_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._AXTEXTATTRIBUTEDSTRING_H)
        return;
    this._AXTEXTATTRIBUTEDSTRING_H = true;

    // Dropping declaration of 'kAXFontTextAttribute': No value
    // Dropping declaration of 'kAXForegroundColorTextAttribute': No value
    // Dropping declaration of 'kAXBackgroundColorTextAttribute': No value
    // Dropping declaration of 'kAXUnderlineColorTextAttribute': No value
    // Dropping declaration of 'kAXStrikethroughColorTextAttribute': No value
    // Dropping declaration of 'kAXUnderlineTextAttribute': No value
    // Dropping declaration of 'kAXSuperscriptTextAttribute': No value
    // Dropping declaration of 'kAXStrikethroughTextAttribute': No value
    // Dropping declaration of 'kAXShadowTextAttribute': No value
    // Dropping declaration of 'kAXAttachmentTextAttribute': No value
    // Dropping declaration of 'kAXLinkTextAttribute': No value
    // Dropping declaration of 'kAXNaturalLanguageTextAttribute': No value
    // Dropping declaration of 'kAXReplacementStringTextAttribute': No value
    // Dropping declaration of 'kAXMisspelledTextAttribute': No value
    // Dropping declaration of 'kAXFontNameKey': No value
    // Dropping declaration of 'kAXFontFamilyKey': No value
    // Dropping declaration of 'kAXVisibleNameKey': No value
    // Dropping declaration of 'kAXFontSizeKey': No value
    this.kAXUnderlineStyleNone = 0;
    this.kAXUnderlineStyleSingle = 1;
    this.kAXUnderlineStyleThick = 2;
    this.kAXUnderlineStyleDouble = 9;
    this.AXUnderlineStyle = this.UInt32;
    // Dropping declaration of 'kAXForegoundColorTextAttribute': No value
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/UniversalAccess.h
function UniversalAccess_h(lib) {
    CGGeometry_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._UNIVERSALACCESS_H)
        return;
    this._UNIVERSALACCESS_H = true;

    this.UAZoomChangeFocusType = this.UInt32;
    this.kUAZoomFocusTypeOther = 0;
    this.kUAZoomFocusTypeInsertionPoint = 1;
    this.UAZoomEnabled = lib.declare("UAZoomEnabled", ctypes.default_abi, this.Boolean);
    this.UAZoomChangeFocus = lib.declare("UAZoomChangeFocus", ctypes.default_abi, this.OSStatus, this.CGRect.ptr, this.CGRect.ptr, this.UAZoomChangeFocusType);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/TranslationServices.h
function TranslationServices_h(lib) {
    CFData_h.call(this, lib);
    Files_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._TRANSLATIONSERVICES_H)
        return;
    this._TRANSLATIONSERVICES_H = true;

    this.OpaqueTranslationRef = new ctypes.StructType("OpaqueTranslationRef");
    this.TranslationRef = this.OpaqueTranslationRef.ptr;
    this.badTranslationRefErr = -3031;
    this.TranslationFlags = this.OptionBits;
    this.kTranslationDataTranslation = 1;
    this.kTranslationFileTranslation = 2;
    this.TranslationGetTypeID = lib.declare("TranslationGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.TranslationCreate = lib.declare("TranslationCreate", ctypes.default_abi, this.OSStatus, this.CFStringRef, this.CFStringRef, this.TranslationFlags, this.TranslationRef.ptr);
    this.TranslationCreateWithSourceArray = lib.declare("TranslationCreateWithSourceArray", ctypes.default_abi, this.OSStatus, this.CFArrayRef, this.TranslationFlags, this.CFArrayRef.ptr, this.CFDictionaryRef.ptr);
    this.TranslationPerformForData = lib.declare("TranslationPerformForData", ctypes.default_abi, this.OSStatus, this.TranslationRef, this.CFDataRef, this.CFDataRef.ptr);
    this.TranslationPerformForFile = lib.declare("TranslationPerformForFile", ctypes.default_abi, this.OSStatus, this.TranslationRef, this.FSRef.ptr, this.FSRef.ptr, this.CFStringRef, this.FSRef.ptr);
    this.TranslationPerformForURL = lib.declare("TranslationPerformForURL", ctypes.default_abi, this.OSStatus, this.TranslationRef, this.CFURLRef, this.CFURLRef, this.CFURLRef.ptr);
    this.TranslationCopySourceType = lib.declare("TranslationCopySourceType", ctypes.default_abi, this.OSStatus, this.TranslationRef, this.CFStringRef.ptr);
    this.TranslationCopyDestinationType = lib.declare("TranslationCopyDestinationType", ctypes.default_abi, this.OSStatus, this.TranslationRef, this.CFStringRef.ptr);
    this.TranslationGetTranslationFlags = lib.declare("TranslationGetTranslationFlags", ctypes.default_abi, this.OSStatus, this.TranslationRef, this.TranslationFlags.ptr);
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/Headers/AXError.h
function AXError_h(lib) {
    MacTypes_h.call(this, lib);

    if (this._AXERROR_H)
        return;
    this._AXERROR_H = true;

    this.kAXErrorSuccess = 0;
    this.kAXErrorFailure = -25200;
    this.kAXErrorIllegalArgument = -25201;
    this.kAXErrorInvalidUIElement = -25202;
    this.kAXErrorInvalidUIElementObserver = -25203;
    this.kAXErrorCannotComplete = -25204;
    this.kAXErrorAttributeUnsupported = -25205;
    this.kAXErrorActionUnsupported = -25206;
    this.kAXErrorNotificationUnsupported = -25207;
    this.kAXErrorNotImplemented = -25208;
    this.kAXErrorNotificationAlreadyRegistered = -25209;
    this.kAXErrorNotificationNotRegistered = -25210;
    this.kAXErrorAPIDisabled = -25211;
    this.kAXErrorNoValue = -25212;
    this.kAXErrorParameterizedAttributeUnsupported = -25213;
    this.kAXErrorNotEnoughPrecision = -25214;
    this.AXError = this.SInt32;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/AE.jsm");
Components.utils.import("resource://osxtypes/OSServices.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/CoreGraphics.jsm");
Components.utils.import("resource://osxtypes/QD.jsm");
Components.utils.import("resource://osxtypes/LaunchServices.jsm");

const EXPORTED_SYMBOLS = ["HIServices", "AXValue_h", "Icons_h", "HIShape_h", "InternetConfig_h", "AXUIElement_h", "Processes_h", "Pasteboard_h", "AXTextAttributedString_h", "UniversalAccess_h", "TranslationServices_h", "AXError_h"];

function HIServices() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/HIServices.framework/HIServices";
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

    AXValue_h.call(this, lib);
    Icons_h.call(this, lib);
    HIShape_h.call(this, lib);
    InternetConfig_h.call(this, lib);
    AXUIElement_h.call(this, lib);
    Processes_h.call(this, lib);
    Pasteboard_h.call(this, lib);
    AXTextAttributedString_h.call(this, lib);
    UniversalAccess_h.call(this, lib);
    TranslationServices_h.call(this, lib);
    AXError_h.call(this, lib);
}
