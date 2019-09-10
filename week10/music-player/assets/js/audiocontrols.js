const backButton = document.querySelector('.back');
const playPauseButton = document.querySelector('.playpause');
const forwardButton = document.querySelector('.forward');
const shuffleButton = document.querySelector('.shuffle');

let isShuffling = false;

const togglePlayPause = () => {
  if (playPauseButton.getAttribute('src') === 'play.svg') {
    playPauseButton.setAttribute('src', 'pause.svg');
    audio.play();
  } else {
    playPauseButton.setAttribute('src', 'play.svg');
    audio.pause();
  }
}


const playNext = () => {

}

const playPrevious = () => {

}

const toggleShuffle = () => {
  isShuffling = !isShuffling;
  shuffleButton.setAttribute('src', isShuffling ? 'shuffletrue.svg' : 'shuffle.svg');
}

const muteVolume = () => {
  audio.volume = 0;
  volumeSlider.noUiSlider.set(0);
}

backButton.addEventListener('click', playPrevious);
playPauseButton.addEventListener('click', togglePlayPause);
forwardButton.addEventListener('click', playNext);
shuffleButton.addEventListener('click', toggleShuffle);

document.body.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 32:
      togglePlayPause();
      break;
    case 78:
      playNext();
      break;
    case 80:
      playPrevious();
      break;
    case 27:
      muteVolume();
      break;
  }
});

progressSlider.noUiSlider.on('slide', () => {
  audio.currentTime = progressSlider.noUiSlider.get();
  displayRemaining();
});

volumeSlider.noUiSlider.on('update', () => {
  audio.volume = volumeSlider.noUiSlider.get() / 100;
});
