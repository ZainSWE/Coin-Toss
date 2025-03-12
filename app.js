function button() {
  console.log('button was pressed');
  const video = document.getElementById('background');
  const audio = document.getElementById('coin');

  if (video.paused) {
    video.currentTime = 0;
    video.play();
  }

  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  }
}
