function button(){
  console.log('button was pressed');
  const video = document.getElementById('background');
  const audio = document.getElementById('coin');
  video.currentTime = 0;
  video.play();
  audio.currentTime = 0;
  audio.play();
}