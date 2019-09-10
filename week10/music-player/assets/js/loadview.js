'use strict';

const audio = document.querySelector('audio');
const duration = document.querySelector('.duration');
const remaining = document.querySelector('.remaining');
const progressSlider = document.querySelector('.progress.slider');
const volumeSlider = document.querySelector('.volume.slider');

const buildDeleteButton = newListElement => {
  let deleteButton = document.createElement('img');
  deleteButton.setAttribute('src', 'cross.svg');
  deleteButton.setAttribute('alt', '#');
  deleteButton.addEventListener('click', event => event.target.parentElement.remove());
  newListElement.appendChild(deleteButton);
}

const buildPlaylistRow = (newPlaylistName) => {
  let newList = document.createElement('li');
  newList.textContent = newPlaylistName;
  buildDeleteButton(newList);
  document.querySelector('ul').appendChild(newList);
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


window.addEventListener('load', () => {
  progressSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: audio.duration
    }
  });
});