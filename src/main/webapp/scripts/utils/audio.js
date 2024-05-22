musicIsPlaying = false;
let soundtrack = new Audio('./audio/music.mp3');
soundtrack.loop = true;

function playAudio(audioFile) {
  audio = new Audio('./audio/' + audioFile);
  audio.play();
}

function toggleSoundtrack() {
  if (!musicIsPlaying) {
    musicIsPlaying = true;
    $('#soundtrack-button').html('Stop Soundtrack');
    soundtrack.play();
  } else {
    musicIsPlaying = false;
    $('#soundtrack-button').html('Play Soundtrack');
    soundtrack.pause();
  }
}
