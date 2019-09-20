(() => {
  console.log("working");

  const video = document.querySelector("video"),
    playButton = document.querySelector("#playPause"),
    muteButton = document.querySelector("#mute"),
    fullScreenButton = document.querySelector("#fullScreen"),
    timeBar = document.querySelector("#timeBar"),
    volumeBar = document.querySelector("#volumeBar");

  function loadVideo() {
    video.load();
    video.pause();
  }

  function playPause() {
    if (video.paused == true) {
      video.play(); // Play the video
      playButton.innerHTML = "Pause"; // Update the button text to 'Pause'
    } else {
      video.pause(); // Pause the video
      playButton.innerHTML = `images/${playButton}`; // Update the button text to 'Play'
    }
  }

  function muteUnmute() {
    if (video.muted == false) {
      video.muted = true; // Mute the video
      volumeBar.value = 0; // Change the volume bar
      muteButton.innerHTML = "Unmute"; // Change the mute button
    } else {
      video.muted = false; // Unmute the video
      volumeBar.value = video.volume; // Change the volume bar
      muteButton.innerHTML = "Mute"; // Change the mute button
    }
  }

  function timeTracker() {
    var totalTime = video.duration * (timeBar.value / 100); // Calculate the new time
    video.currentTime = totalTime; // Update the video time
  }

  // Updates the timeBar slider as the video plays
  function timeUpdater() {
    var totalValue = (100 / video.duration) * video.currentTime; // Calculate the slider value
    timeBar.value = totalValue; // Update the slider value
  }

  // Used to pause timeBar when user is dragging handle, DOES NOT control play/pause button
  function videoPause() {
    video.pause();
  }

  function volumeChange() {
    video.muted = false; //unmute video
    video.volume = volumeBar.value; //change volume
    muteButton.innerHTML = "Mute"; //change mute button

    if (volumeBar.value == 0) {
      muteButton.innerHTML = "Unmute"; //change mute button if value = 0
    }
    // Update video volume
  }

  function fullScreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Fallback for Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Fallback for Chrome and Safari
    }
  }

  // video event listeners
  window.addEventListener("load", loadVideo);

  // playing and pausing the video
  playButton.addEventListener("click", playPause);
  video.addEventListener("click", playPause);

  //other video controls
  muteButton.addEventListener("click", muteUnmute);
  fullScreenButton.addEventListener("click", fullScreen);
  timeBar.addEventListener("change", timeTracker);
  video.addEventListener("timeupdate", timeUpdater);

  // pauses timebar when user is dragging handle
  timeBar.addEventListener("mousedown", videoPause);
  timeBar.addEventListener("mouseup", playPause);
  volumeBar.addEventListener("change", volumeChange);
})();

// DEV NOTES!

// ** There is a bug: the timeBar displays at half when the page loads.

// ** Use this to trigger a replay after video is finished - rewind the video + play it:
// video.currentTime = 0;

// ** Use this to exit fullscreen once video ended - replace hideLightbox:
// video.addEventListener('ended', hideLightbox);
