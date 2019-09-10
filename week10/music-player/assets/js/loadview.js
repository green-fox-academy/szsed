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

const buildPlaylistRow = newPlaylistName => {
  let newList = document.createElement('li');
  newList.textContent = newPlaylistName;
  if (newPlaylistName !== 'Favorites' && newPlaylistName !== 'All tracks') buildDeleteButton(newList);
  document.querySelector('ul').appendChild(newList);
}

const buildPlaylistList = playlists => {
  buildPlaylistRow('All tracks');
  playlists.forEach(playlist => buildPlaylistRow(playlist.name));
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

const updateProgressSliderOnNewTrack = () => {
  progressSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: audio.duration
    }
  });
  progressSlider.noUiSlider.set(audio.currentTime);
}

noUiSlider.create(volumeSlider, {
  start: 50,
  connect: [true, false],
  range: {
    min: 0,
    max: 100
  },
});

const formatToMinutes = (seconds) => {
  let minutes = (seconds - seconds % 60) / 60
  let secondsRounded = Math.floor((seconds - minutes * 60) * 10) / 10;
  return `${minutes}:${secondsRounded < 10 ? 0 : ''}${secondsRounded}`;
}

const displayRemaining = () => remaining.textContent = formatToMinutes(audio.duration - audio.currentTime);

const displayDurationAndRemaining = () => {
  duration.textContent = formatToMinutes(audio.duration);
  displayRemaining();
}

displayDurationAndRemaining();

audio.addEventListener('loadedmetadata', displayDurationAndRemaining);

audio.addEventListener('timeupdate', () => {
  progressSlider.noUiSlider.set(audio.currentTime);
  displayRemaining();
});

fetch('/playlists')
  .then(result => result.json())
  .then(buildPlaylistList)
  .catch(err => alert(err.message));

window.addEventListener('load', updateProgressSliderOnNewTrack);