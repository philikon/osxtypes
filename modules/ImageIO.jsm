// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/Headers/CGImageProperties.h
function CGImageProperties_h(lib) {

    if (this._CGIMAGEPROPERTIES_H)
        return;
    this._CGIMAGEPROPERTIES_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/Headers/CGImageDestination.h
function CGImageDestination_h(lib) {
    CFData_h.call(this, lib);
    CGImageSource_h.call(this, lib);
    CGImage_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFURL_h.call(this, lib);
    CGDataConsumer_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CGIMAGEDESTINATION_H)
        return;
    this._CGIMAGEDESTINATION_H = true;

    this.CGImageDestination = new ctypes.StructType("CGImageDestination");
    this.CGImageDestinationRef = this.CGImageDestination.ptr;
    this.CGImageDestinationGetTypeID = lib.declare("CGImageDestinationGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGImageDestinationCopyTypeIdentifiers = lib.declare("CGImageDestinationCopyTypeIdentifiers", ctypes.default_abi, this.CFArrayRef);
    // Dropping declaration of 'CGImageDestinationCreateWithDataConsumer': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageDestinationCreateWithData': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageDestinationCreateWithURL': 'size_t' defined out of scope
    this.CGImageDestinationSetProperties = lib.declare("CGImageDestinationSetProperties", ctypes.default_abi, ctypes.void_t, this.CGImageDestinationRef, this.CFDictionaryRef);
    this.CGImageDestinationAddImage = lib.declare("CGImageDestinationAddImage", ctypes.default_abi, ctypes.void_t, this.CGImageDestinationRef, this.CGImageRef, this.CFDictionaryRef);
    // Dropping declaration of 'CGImageDestinationAddImageFromSource': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageDestinationFinalize': Unknown type bool_t
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/Headers/CGImageSource.h
function CGImageSource_h(lib) {
    CGDataProvider_h.call(this, lib);
    CFData_h.call(this, lib);
    CFURL_h.call(this, lib);
    CGImage_h.call(this, lib);
    CFDictionary_h.call(this, lib);
    CFBase_h.call(this, lib);
    CFArray_h.call(this, lib);

    if (this._CGIMAGESOURCE_H)
        return;
    this._CGIMAGESOURCE_H = true;

    this.CGImageSource = new ctypes.StructType("CGImageSource");
    this.CGImageSourceRef = this.CGImageSource.ptr;
    this.kCGImageStatusUnexpectedEOF = -5;
    this.kCGImageStatusInvalidData = -4;
    this.kCGImageStatusUnknownType = -3;
    this.kCGImageStatusReadingHeader = -2;
    this.kCGImageStatusIncomplete = -1;
    this.kCGImageStatusComplete = 0;
    this.CGImageSourceGetTypeID = lib.declare("CGImageSourceGetTypeID", ctypes.default_abi, this.CFTypeID);
    this.CGImageSourceCopyTypeIdentifiers = lib.declare("CGImageSourceCopyTypeIdentifiers", ctypes.default_abi, this.CFArrayRef);
    this.CGImageSourceCreateWithDataProvider = lib.declare("CGImageSourceCreateWithDataProvider", ctypes.default_abi, this.CGImageSourceRef, this.CGDataProviderRef, this.CFDictionaryRef);
    this.CGImageSourceCreateWithData = lib.declare("CGImageSourceCreateWithData", ctypes.default_abi, this.CGImageSourceRef, this.CFDataRef, this.CFDictionaryRef);
    this.CGImageSourceCreateWithURL = lib.declare("CGImageSourceCreateWithURL", ctypes.default_abi, this.CGImageSourceRef, this.CFURLRef, this.CFDictionaryRef);
    this.CGImageSourceGetType = lib.declare("CGImageSourceGetType", ctypes.default_abi, this.CFStringRef, this.CGImageSourceRef);
    // Dropping declaration of 'CGImageSourceGetCount': 'size_t' defined out of scope
    this.CGImageSourceCopyProperties = lib.declare("CGImageSourceCopyProperties", ctypes.default_abi, this.CFDictionaryRef, this.CGImageSourceRef, this.CFDictionaryRef);
    // Dropping declaration of 'CGImageSourceCopyPropertiesAtIndex': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageSourceCreateImageAtIndex': 'size_t' defined out of scope
    // Dropping declaration of 'CGImageSourceCreateThumbnailAtIndex': 'size_t' defined out of scope
    this.CGImageSourceCreateIncremental = lib.declare("CGImageSourceCreateIncremental", ctypes.default_abi, this.CGImageSourceRef, this.CFDictionaryRef);
    // Dropping declaration of 'CGImageSourceUpdateData': Unknown type bool_t
    // Dropping declaration of 'CGImageSourceUpdateDataProvider': Unknown type bool_t
    this.CGImageSourceGetStatus = lib.declare("CGImageSourceGetStatus", ctypes.default_abi, this.CGImageSourceStatus, this.CGImageSourceRef);
    // Dropping declaration of 'CGImageSourceGetStatusAtIndex': 'size_t' defined out of scope
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CoreFoundation.jsm");
Components.utils.import("resource://osxtypes/CoreGraphics.jsm");

const EXPORTED_SYMBOLS = ["ImageIO", "CGImageProperties_h", "CGImageDestination_h", "CGImageSource_h"];

function ImageIO() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/ImageIO";
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

    CGImageProperties_h.call(this, lib);
    CGImageDestination_h.call(this, lib);
    CGImageSource_h.call(this, lib);
}
