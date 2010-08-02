Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/AudioUnit.jsm");
Components.utils.import("resource://osxtypes/CoreAudio.jsm");

const EXPORTED_SYMBOLS = ["configureAudioUnit"];

function configureAudioUnit() {
    let carbon = new CarbonCore();
    let au = new AudioUnit();
    let ca = new CoreAudio();

    let description = carbon.ComponentDescription();
	description.componentType = au.kAudioUnitType_Output;
	description.componentSubType = au.kAudioUnitSubType_HALOutput;
	description.componentManufacturer = au.kAudioUnitManufacturer_Apple;
	description.componentFlags = 0;
	description.componentFlagsMask = 0;

    // Open an AudioOutputUnit.
    let cAudioUnit = au.AudioUnit();
    let component = carbon.FindNextComponent(null, description.address());
    let err = carbon.OpenAComponent(
        component,
        ctypes.cast(cAudioUnit, carbon.ComponentInstance).address());
    if (err != 0) {
        throw err;
    }

    // Configure the AudioOutputUnit.  We must enable the Audio Unit
    // (AUHAL) for input and output for the same device.
    // When using AudioUnitSetProperty, the 4th parameter in the method
    // refer to an AudioUnitElement.  When using an AudioOutputUnit
    // for input the element will be '1' and the output element will be '0'.

    // Enable input on the AUHAL.
    let param = au.UInt32(1);
    err = au.AudioUnitSetProperty(
        cAudioUnit,
        au.kAudioOutputUnitProperty_EnableIO,
        au.kAudioUnitScope_Input,
        1,
        param.address(),
        au.UInt32.size);
    if (err != 0) {
        throw err;
    }

    // Disable Output on the AUHAL.
    param = au.UInt32(0);
    err = au.AudioUnitSetProperty(
        cAudioUnit,
        au.kAudioOutputUnitProperty_EnableIO,
        au.kAudioUnitScope_Output,
        0,
        param.address(),
        au.UInt32.size);

    // Select the default input device.
    let cInputDeviceID = ca.AudioDeviceID();
    param = ca.UInt32(ca.AudioDeviceID.size);
    err = ca.AudioHardwareGetProperty(
        ca.kAudioHardwarePropertyDefaultInputDevice,
        param.address(),
        cInputDeviceID.address());
    if (err != 0) {
        throw err;
    }

    // Set the current device to the default input unit.
    err = au.AudioUnitSetProperty(
        cAudioUnit,
        au.kAudioOutputUnitProperty_CurrentDevice,
        au.kAudioUnitScope_Global,
        0,
        cInputDeviceID.address(),
        ca.AudioDeviceID.size);
    if (err != 0) {
        throw err;
    }

    // Setup render callback
    // This will be called when the AUHAL has input data
    function renderCallback(refCon, actionFlags, timestamp, busNumber,
                            NumberFrames, data) {
        dump("render callback\n");
    }
    let renderCallbackFunc = au.AURenderCallback(renderCallback);
    let callback = au.AURenderCallbackStruct(renderCallbackFunc, null);
    err = au.AudioUnitSetProperty(
        cAudioUnit,
        au.kAudioOutputUnitProperty_SetInputCallback,
        au.kAudioUnitScope_Global,
        0,
        callback.address(),
        au.AURenderCallbackStruct.size);

	// Get hardware device format
	let cDeviceFormat = au.AudioStreamBasicDescription();
	param = au.UInt32(au.AudioStreamBasicDescription.size);
	err = au.AudioUnitGetProperty(
        cAudioUnit,
        au.kAudioUnitProperty_StreamFormat,
        au.kAudioUnitScope_Input,
        1,
        cDeviceFormat.address(),
        param.address());
	if (err != 0) {
        throw err;
	}

	// Twiddle the format to our liking
	let numChannels = Math.max(cDeviceFormat.mChannelsPerFrame, 2);
    let cOutputFormat = au.AudioStreamBasicDescription();
	cOutputFormat.mChannelsPerFrame = numChannels;
	cOutputFormat.mSampleRate = cDeviceFormat.mSampleRate;
	cOutputFormat.mFormatID = au.kAudioFormatLinearPCM;
	cOutputFormat.mFormatFlags = au.kAudioFormatFlagIsFloat
        | au.kAudioFormatFlagIsPacked | au.kAudioFormatFlagIsNonInterleaved;
	if (cOutputFormat.mFormatID == au.kAudioFormatLinearPCM
        && numChannels == 1) {
		cOutputFormat.mFormatFlags &= ~au.kLinearPCMFormatFlagIsNonInterleaved;
    }
	//cOutputFormat.mFormatFlags |= kAudioFormatFlagIsBigEndian;
	cOutputFormat.mBitsPerChannel = au.Float32.size * 8;
	cOutputFormat.mBytesPerFrame = cOutputFormat.mBitsPerChannel / 8;
	cOutputFormat.mFramesPerPacket = 1;
	cOutputFormat.mBytesPerPacket = cOutputFormat.mBytesPerFrame;

	// Set the AudioOutputUnit output data format
	err = au.AudioUnitSetProperty(
        cAudioUnit,
        au.kAudioUnitProperty_StreamFormat,
        au.kAudioUnitScope_Output,
        1,
        cOutputFormat.address(),
        au.AudioStreamBasicDescription.size);
	if (err != 0) {
		throw err;
	}

	// Get the number of frames in the IO buffer(s)
    let cAudioSamples = au.UInt32();
	param = au.UInt32(au.UInt32.size);
	err = au.AudioUnitGetProperty(
        cAudioUnit,
        ca.kAudioDevicePropertyBufferFrameSize,
        au.kAudioUnitScope_Global,
        0,
        cAudioSamples.address(),
        param.address());
	if (err != 0) {
        throw err;
	}

	// Initialize the AU
	err = au.AudioUnitInitialize(cAudioUnit);
	if (err != 0) {
        throw err;
    }

	// Allocate our audio buffers
	let cAudioBuffer = au.AudioBufferList();
    let size = cAudioSamples.value * cOutputFormat.mBytesPerFrame;
    cAudioBuffer.mNumberBuffers = numChannels;
    let buffers = au.AudioBuffer.array(numChannels)();
	for (let i = 0; i < numChannels; i++) {
		buffers[i].mNumberChannels = 1;
		buffers[i].mDataByteSize = size;
		buffers[i].mData = ctypes.uint8_t.array(size)();
	}
    cAudioBuffer.mBuffers = ctypes.cast(buffers, au.AudioBuffer.array(1));

    carbon.close();
    au.close();
    ca.close();
}
