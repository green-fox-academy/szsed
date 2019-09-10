'use strict';

const audio = document.querySelector('audio');
const duration = document.querySelector('.duration');
const remaining = document.querySelector('.remaining');
const progressSlider = document.querySelector('.progress.slider');
const volumeSlider = document.querySelector('.volume.slider');

const buildPlaylistRow = () => {

}

const buildPlaylist = () => {

}

const buildTrackRow = () => {

}

const buildTracklist = () => {

}

const displayArtwork = () => {

}

const displayCurrentlyPlaying = () => {

}

noUiSlider.create(progressSlider, {
  start: 0,
  connect: [true, false],
  range: {
    min: 0,
    max: 100
  },
});

noUiSlider.create(volumeSlider, {
  start: 50,
  connect: [true, false],
  range: {
    min: 0,
    max: 100
  },
});

const displayRemaining = () => remaining.textContent = Math.floor((audio.duration - audio.currentTime) * 10) / 10;

const displayDurationAndRemaining = () => {
  duration.textContent = Math.floor(audio.duration * 10) / 10;
  displayRemaining();
}

displayDurationAndRemaining();

audio.addEventListener('loadedmetadata', displayDurationAndRemaining);

audio.addEventListener('timeupdate', () => {
  progressSlider.noUiSlider.set(audio.currentTime);
  displayRemaining();
});
