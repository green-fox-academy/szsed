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
  duration.textContent = Math.floor(audio.duration * 10) / 10;
  audio.currentTime = progressSlider.noUiSlider.get();
  displayRemaining();
});

const addPlaylistButton = document.querySelector('.addplaylist');
const addTrackButton = document.querySelector('.addtrack');

addPlaylistButton.addEventListener('click', () => {
  let newPlaylistName = window.prompt('Enter name of new playlist:');
  if (newPlaylistName) {
    let newList = document.createElement('li');
    let deleteButton = document.createElement('img');
    deleteButton.setAttribute('src', '../assets/img/cross.svg');
    deleteButton.setAttribute('alt', '#');
    deleteButton.addEventListener('click', event => event.target.parentElement.remove());
    newList.textContent = newPlaylistName;
    newList.appendChild(deleteButton);
    document.querySelector('ul').appendChild(newList);
  }
});

addTrackButton.addEventListener('click', () => {
  let newTrackName = window.prompt('Enter name of new track:');
  let newTrackUrl = window.prompt('Enter URL:');
  if (newTrackName && newTrackUrl) {
  }
});

const starButton = document.querySelector('.star');

starButton.addEventListener('click', () => {
  if (starButton.getAttribute('src') === '../assets/img/stargray.svg') {
    starButton.setAttribute('src', '../assets/img/staryellow.svg');
  } else {
    starButton.setAttribute('src', '../assets/img/stargray.svg');
  }
})