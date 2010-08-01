// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/Headers/CGImageProperties.h
function CGImageProperties_h(lib) {

    if (this._CGIMAGEPROPERTIES_H)
        return;
    this._CGIMAGEPROPERTIES_H = true;

}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/Headers/CGImageDestination.h
function CGImageDestination_h(lib) {

    if (this._CGIMAGEDESTINATION_H)
        return;
    this._CGIMAGEDESTINATION_H = true;

    this.CGImageDestination = new ctypes.StructType("CGImageDestination");
    this.CGImageDestinationRef = this.CGImageDestination.ptr;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/Headers/CGImageSource.h
function CGImageSource_h(lib) {

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
}

Components.utils.import("resource://gre/modules/ctypes.jsm");

const EXPORTED_SYMBOLS = ["ImageIO", "CGImageProperties_h", "CGImageDestination_h", "CGImageSource_h"];

function ImageIO() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/ImageIO.framework/ImageIO";
    let lib = ctypes.open(libpath);
    this.close = function() {
        lib.close();
    };

    CGImageProperties_h.call(this, lib);
    CGImageDestination_h.call(this, lib);
    CGImageSource_h.call(this, lib);
}
