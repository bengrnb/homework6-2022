var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 +"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = video.playbackRate *.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video");
	video.playbackRate = video.playbackRate / .95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	video.currentTime += 15
	console.log(video.ended)
	if (video.ended) {
		video.currentTime = 0
		video.play()
	}
	console.log(video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

var slider = document.querySelector("#slider");
slider.oninput = function() {
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 +"%";
}

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool"
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
});
