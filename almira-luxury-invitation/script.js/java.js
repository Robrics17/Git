function togglePlay() {
  var music = document.getElementById("myMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}