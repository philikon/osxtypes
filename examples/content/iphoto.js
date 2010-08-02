Components.utils.import("resource://gre/modules/ctypes.jsm");    

let osxtypes = {};
Components.utils.import("resource://osxtypes/CoreFoundation.jsm", osxtypes);
Components.utils.import("resource://osxtypes/LaunchServices.jsm", osxtypes);

let iPhoto = {

  startup: function() {
    let popup = document.getElementById("contentAreaContextMenu");
	if (popup) {
	  popup.addEventListener("popupshowing", iPhoto.onPopupShowing, false);
	}
  },

  onPopupShowing: function() {
	let node = iPhoto.getCurrentNode();	  
	let item = document.getElementById("iphoto_menuitem");	  
	if (item) {
	  item.hidden = !node; // Hide it if we're not on an image
	}
  },
  
  add: function() {
    let node = iPhoto.getCurrentNode();
    if (!node) {
      return;
    }
    let src = node.getAttribute("src"); // Get the URL of the image
    if (src) {
      iPhoto.addImageByURL(src);
    }
  },
  
  getCurrentNode: function() {
    let node = document.popupNode;
    if (!node) {
      return null;
    }
    // Is it an image node?    
    if (node.localName.toUpperCase() == "IMG") {
      return node;
    }
    return null;
  },
  
  downloadImage: function(src) {
    // Get the file name to download from the URL
    let fileName = src.slice(src.lastIndexOf("/") + 1);
  
    // Build the path to download to
    let dest = Cc["@mozilla.org/file/directory_service;1"]
               .getService(Ci.nsIProperties)
               .get("TmpD", Ci.nsIFile);
    dest.append(fileName);
    
    dest.createUnique(dest.NORMAL_FILE_TYPE, 0600);
    let wbp = Cc['@mozilla.org/embedding/browser/nsWebBrowserPersist;1']
              .createInstance(Ci.nsIWebBrowserPersist);
    
    var uri = Services.io.newURI(src, document.characterSet,
                  gBrowser.selectedBrowser.contentDocument.documentURIObject);
    // don't save gzipped
    wbp.persistFlags &= ~Ci.nsIWebBrowserPersist.PERSIST_FLAGS_NO_CONVERSION;
    wbp.saveURI(uri, null, null, null, null, dest);    
    return dest.path;
  },
    
  addImageByURL: function(src) {
    let CoreFoundation = new osxtypes.CoreFoundation();
    let LaunchServices = new osxtypes.LaunchServices();

    let filePath = this.downloadImage(src);
    let mutableArray = CoreFoundation.CFArrayCreateMutable(null, 1, CoreFoundation.kCFTypeArrayCallBacks.address());
    if (!mutableArray) {
      return;
    }

    let url = CoreFoundation.CFURLCreateFromFileSystemRepresentation(null, filePath, filePath.length, false);
    CoreFoundation.CFArrayAppendValue(mutableArray, url);
    CoreFoundation.CFRelease(url);
      
    // Call Launch Services to open iPhoto and deliver the image      
    let ref = new LaunchServices.FSRef();
    let appParams = LaunchServices.LSApplicationParameters(0, 1, ref.address(), null, null, null, null);
    let appstr = "file:///Applications/iPhoto.app";
    let appstrCF = CoreFoundation.CFStringCreateWithCharacters(null, appstr, appstr.length);
    let appurl = CoreFoundation.CFURLCreateWithString(null, appstrCF, null);
    CoreFoundation.CFRelease(appstrCF);
    let b = CoreFoundation.CFURLGetFSRef(appurl, ctypes.cast(ref, CoreFoundation.FSRef).address());

    if (!b) {
      let stringsBundle = document.getElementById("iphoto-string-bundle");
      alert(stringsBundle.getString('alert_download_error_string'));
    } else {
      let array = ctypes.cast(mutableArray, LaunchServices.CFArrayRef);
      LaunchServices.LSOpenURLsWithRole(array, 0, null, appParams.address(), null, 0);
      CoreFoundation.CFRelease(array);
    }
    CoreFoundation.CFRelease(appurl);
    
    LaunchServices.close();
    CoreFoundation.close();
  }
  
};

window.addEventListener("load", function() {
  window.removeEventListener("load", arguments.callee, false);
  iPhoto.startup();
}, false);
