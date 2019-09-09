'use strict';

const audio = document.querySelector('audio');
const duration = document.querySelector('.duration');
const remaining = document.querySelector('.remaining');
const progressSlider = document.querySelector('.progress.slider');
const volumeSlider = document.querySelector('.volume.slider');

noUiSlider.create(progressSlider, {
  start: 0,
  connect: [true, false],
  range: {
    min: 0,
    max: audio.duration
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

window.addEventListener('load', displayDurationAndRemaining);

audio.addEventListener('loadedmetadata', displayDurationAndRemaining);

audio.addEventListener('timeupdate', () => {
  progressSlider.noUiSlider.set(audio.currentTime);
  displayRemaining();
});

progressSlider.noUiSlider.on('slide', () => {
  audio.currentTime = progressSlider.noUiSlider.get();
  displayRemaining();
});

volumeSlider.noUiSlider.on('update', () => {
  audio.volume = volumeSlider.noUiSlider.get() / 100;
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
    const tableBody = document.querySelector('tbody');
    let newTableRow = document.createElement('tr');
    let numberField = document.createElement('td');
    let titleField = document.createElement('td');
    let durationField = document.createElement('td');
    numberField.textContent = Number(tableBody.lastElementChild.firstElementChild.textContent) + 1;
    newTableRow.appendChild(numberField);
    titleField.textContent = newTrackName;
    newTableRow.appendChild(titleField);
    audio.setAttribute('src', newTrackUrl);
    durationField.textContent = duration.textContent;
    newTableRow.appendChild(durationField);
    tableBody.appendChild(newTableRow);
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

const playPauseButton = document.querySelector('.playpause');

playPauseButton.addEventListener('click', () => {
  if (playPauseButton.getAttribute('src') === '../assets/img/play.svg') {
    playPauseButton.setAttribute('src', '../assets/img/pause.svg');
    audio.play();
  } else {
    playPauseButton.setAttribute('src', '../assets/img/play.svg');
    audio.pause();
  }
});