'use strict';

const audio = document.querySelector('audio');
const duration = document.querySelector('.duration');
const remaining = document.querySelector('.remaining');
const progressSlider = document.querySelector('.progress.slider');
const volumeSlider = document.querySelector('.volume.slider');
const currentSongDisplay = document.querySelector('thead');
const currentPlaylistDisplay = document.querySelector('tbody');
const starButton = document.querySelector('.star');

const buildDeleteButton = newElement => {
  let deleteButton = document.createElement('img');
  deleteButton.setAttribute('src', 'cross.svg');
  deleteButton.setAttribute('alt', '#');
  deleteButton.classList.add('delete');
  newElement.appendChild(deleteButton);
}

const buildPlaylistRow = playlistData => {
  let newListItem = document.createElement('li');
  newListItem.textContent = playlistData.name;
  newListItem.setAttribute('data-id', playlistData.id);
  if (playlistData.name !== 'Favorites' && playlistData.name !== 'All tracks') buildDeleteButton(newListItem);
  document.querySelector('ul').appendChild(newListItem);
}

const buildPlaylistList = playlists => {
  buildPlaylistRow({
    name: 'All tracks',
    id: 0
  });
  playlists.forEach(playlist => buildPlaylistRow(playlist));
}

const buildTrackRow = (trackData, rowIndex) => {
  let newTableRow = document.createElement('tr');
  newTableRow.setAttribute('data-id', trackData.id)
  let newIndexField = document.createElement('td');
  newIndexField.textContent = rowIndex;
  newTableRow.appendChild(newIndexField);
  let newTitleField = document.createElement('td');
  newTitleField.textContent = `${trackData.artist} - ${trackData.title}`;
  newTableRow.appendChild(newTitleField);
  let newDurationField = document.createElement('td');
  newDurationField.textContent = formatToMinutes(trackData.duration);
  newTableRow.appendChild(newDurationField);
  buildDeleteButton(newTableRow);
  currentPlaylistDisplay.appendChild(newTableRow);
}

const buildTracklist = tracks => {
  Array.from(currentPlaylistDisplay.children).forEach(child => child.remove());
  tracks.forEach((track, index) => buildTrackRow(track, index + 1));
}


const displayArtistImage = artist => {
  const lastfmAPIKey = 'ee125f318852fc7d1c2f4e21458a0035';
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${lastfmAPIKey}&format=json`
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(parsed => {
      document.querySelector('.playing').setAttribute('src', parsed.artist.image[1]['#text'] || 'music-placeholder.png');
    });
}

const displayCurrentlyPlaying = trackData => {
  document.querySelector('.title').textContent = trackData.title;
  if (document.querySelector('.artist').textContent !== trackData.artist) {
    displayArtistImage(trackData.artist);
  }
  document.querySelector('.artist').textContent = trackData.artist;
  currentSongDisplay.setAttribute('data-id', trackData.id);
  starButton.setAttribute('src', trackData.playlist_id == 1 ? 'starlightblue.svg' : 'stargray.svg');
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
      max: 100
    }
  });
  progressSlider.noUiSlider.set(0);
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

getAllPlaylistsFromDB()
  .then(buildPlaylistList)
  .then(() => {
    currentPlaylistDisplay.setAttribute('data-id', 0);
  })
  .catch(err => alert(err.message));

getAllTracksFromDB()
  .then(result => {
    buildTracklist(result);
    displayCurrentlyPlaying(result[0]);
    audio.setAttribute('src', result[0].url)
  })
  .catch(err => alert(err.message));

window.addEventListener('load', updateProgressSliderOnNewTrack);