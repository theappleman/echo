function hasGetUserMedia() {
	navigator.getUserMedia =
		(navigator.getUserMedia    || navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia || navigator.msGetUserMedia);
	return !!navigator.getUserMedia;
}

function prepend(message) {
	var body = document.querySelector('div#greeting');
	var t = document.createElement("p");
	t.innerText = message;
	body.appendChild(t);
}

function useAudio(mediaStream) {
	var audio = document.querySelector('audio');
	audio.src = window.URL.createObjectURL(mediaStream);
	// var context = new AudioContext();
	// prepend('Audio context set up.');
	// var microphone = context.createMediaStreamSource(mediaStream);
	// var gain = context.createGain();
	// microphone.connect(gain);
	// gain.gain.value = 0.5;
	// gain.connect(context.destination);
	prepend("off you go...!");
}

if (hasGetUserMedia()) {
	// Good to go!
	
	try {
		prepend('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
		
		navigator.getUserMedia({audio: true}, useAudio, prepend);
	} catch (e) {
		prepend('No web audio support in this browser!');
	}
} else {
	prepend('getUserMedia() is not supported in your browser');
}
