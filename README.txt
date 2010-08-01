OSXTypes -- Javascript bindings for OS X frameworks via js-ctypes
=================================================================

This Mozilla extension exports OS X APIs to JavaScript via js-ctypes
(https://developer.mozilla.org/en/js-ctypes) as available on the
Mozilla Gecko 2.0 platform (e.g. Firefox 4).


Usage
-----

  // Import 'CoreFoundation' constructor.
  Components.utils.import("resource://osxtypes/CoreFoundation.jsm");

  // Load library.
  let cf = new CoreFoundation();

  // Create a CFStringRef from a JavaScript string.
  let hello = "Hello World!";
  let cfstr = cf.CFStringCreateWithCharacters(null, hello, hello.length);

  // Turn a CFStringRef back into a JavaScript string.
  let length = cf.CFStringGetLength(cfstr);
  let chars = ctypes.jschar.array(length)()
  cf.CFStringGetCharacters(cfstr, cf.CFRange(0, length), chars);
  let back = chars.readString();
  // back will now be "Hello World!"

  // Release reference and close library.
  cf.CFRelease(cfstr)
  cf.close();


Examples
--------

An example for accessing iPhoto from Firefox can be found in the
'examples' directory. It is based on Eric Shepherd's js-ctypes demo
(https://addons.mozilla.org/en-US/firefox/addon/146328/).


Hacking
-------

The JavaScript modules are auto-generated from the OS X header files
and then manually adjusted in a few selected places. The generating
Python script ('generate.py') uses gccxml to parse the header files
and pygccxml to process gccxml's output.

I'm sure many improvements can be made to both the script and its
results as well as the examples.  Patches/forks are welcome!
