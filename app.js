let heads = 0;
let tails = 0;
document.getElementById("score count").innerHTML = `Heads: ${heads} Tails: ${tails}`;

function toss() {
  console.log('button was pressed');
  const video = document.getElementById('background');
  const audio = document.getElementById('coin');
  
  const randomNumber = Math.random();
  console.log(randomNumber);

  if (randomNumber > 0.5) {
    console.log('heads');
    heads += 1;
    document.getElementById("score count").innerHTML = `Heads: ${heads} Tails: ${tails}`;

  } else if (randomNumber < 0.5) {
    console.log('tails');
    tails += 1;
    document.getElementById("score count").innerHTML = `Heads: ${heads} Tails: ${tails}`;
  }

  if (video.paused) {
    video.currentTime = 0;
    video.play();
  }

  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  }
}