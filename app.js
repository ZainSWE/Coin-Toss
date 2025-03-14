let heads = 0;
let tails = 0;
let currentStreak = 0;
let lastResult = '';
document.getElementById('score').innerHTML = `Heads: ${heads} Tails: ${tails}`;

function toss() {
  console.log('button was pressed');
  const video = document.getElementById('background');
  const streakVideo = document.getElementById('fiveXstreak');
  const audio = document.getElementById('coin');
  const button = document.getElementById('tossButton');

  button.disabled = true;

  const randomNumber = Math.random();
  const headStreak = 0;
  const tailStreak = 0;
  console.log(randomNumber);

  if (randomNumber > 0.5) {
    console.log('heads');
    heads += 1;

    if (lastResult === 'heads') {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    lastResult = 'heads';

    document.getElementById('score').innerHTML = `Heads: ${heads} Tails: ${tails}`;

  } else if (randomNumber < 0.5) {
    console.log('tails');
    tails += 1;

    if (lastResult === 'tails') {
      currentStreak++
    } else {
      currentStreak = 1;
    }

    lastResult = 'tails';

    document.getElementById('score').innerHTML = `Heads: ${heads} Tails: ${tails}`;
  }

  console.log(`current streak: ${currentStreak}`);

  if (video.paused) {
    video.currentTime = 0;
    video.play();
  }

  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  }

  video.onended = () => {
    button.disabled = false;
  };

  streakCount();

  if (button === 'resetScore') {
    resetScore();
  }
}

function customToss() {
  const customToss = prompt('Enter toss:');

  for (let i = 0; i < customToss; i++) {
    toss();
  }
}

function streakCount() {
  const streakVideo = document.getElementById('fiveXstreak');

  if (currentStreak === 5) {
    console.log('Streak Level 1 (5x)');
    
    streakVideo.style.display = 'block';
    streakVideo.currentTime = 0;
    streakVideo.play();

    streakVideo.onended = () => {
      streakVideo.style.display = 'none';
    };
  }
}

function resetScore() {
  heads = 0;
  tails = 0;
  currentStreak = 0;
  console.log('SCORE RESET');
  document.getElementById('score').innerHTML = `Heads: ${heads} Tails: ${tails}`;
}