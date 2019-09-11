const audio = document.querySelector('audio');
const duration = document.querySelector('.duration');
const remaining = document.querySelector('.remaining');
const progressSlider = document.querySelector('.progress.slider');
const volumeSlider = document.querySelector('.volume.slider');

let activePlaylistId = 0;
let activeTrackId = 0;

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
  newTitleField.textContent = trackData.title;
  newTableRow.appendChild(newTitleField);
  let newDurationField = document.createElement('td');
  newDurationField.textContent = formatToMinutes(trackData.duration);
  newTableRow.appendChild(newDurationField);
  buildDeleteButton(newTableRow);
  document.querySelector('tbody').appendChild(newTableRow);
}

const buildTracklist = tracks => {
  tracks.forEach((track, index) => buildTrackRow(track, index));
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
  .catch(err => alert(err.message));

getAllTracksFromDB()
  .then(buildTracklist)
  .catch(err => alert(err.message));

const playlistListArea = document.querySelector('ul');

const handlePlaylistListAreaClick = event => {
  if (event.target.classList.contains('delete')) event.target.parentElement.remove();
}

playlistListArea.addEventListener('click', handlePlaylistListAreaClick);

const trackListArea = document.querySelector('tbody');

const handleTrackListAreaClick = event => {
  if (event.target.classList.contains('delete')) event.target.parentElement.remove();
}

trackListArea.addEventListener('click', handleTrackListAreaClick);

window.addEventListener('load', updateProgressSliderOnNewTrack);