'use strict';

const audio = document.querySelector('audio');
const duration = document.querySelector('.duration');
const remaining = document.querySelector('.remaining');

audio.addEventListener('loadstart', () => console.log('loadstart happened'));
audio.addEventListener('play', () => console.log('play happened'));
audio.addEventListener('ended', () => console.log('ended happened'));
audio.addEventListener('progress', () => console.log('progress happened'));

const progressSlider = document.querySelector('.progress.slider');
const volumeSlider = document.querySelector('.volume.slider');

noUiSlider.create(progressSlider, {
  start: 0,
  range: {
    min: 0,
    max: audio.duration
  },
});

noUiSlider.create(volumeSlider, {
  start: 0,
  range: {
    min: 0,
    max: 100
  },
});

const displayRemaining = () => remaining.textContent = Math.floor((audio.duration - audio.currentTime) * 10) / 10;

audio.addEventListener('loadedmetadata', () => {
  duration.textContent = Math.floor(audio.duration * 10) / 10;
  displayRemaining();
});

progressSlider.noUiSlider.on('change', () => {
  audio.currentTime = progressSlider.noUiSlider.get();
  displayRemaining();
});

const addPlaylistButton = document.querySelector('addplaylist');
const addTrackButton = document.querySelector('addtrack');