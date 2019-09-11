const starButton = document.querySelector('.star');

starButton.addEventListener('click', () => {
  let currentTrackId = currentSongDisplay.getAttribute('data-id');
  if (currentTrackId) {
    if (starButton.getAttribute('src') === 'stargray.svg') {
      updateTrackWithPlaylistInDB(currentTrackId, 1)
        .then(() => starButton.setAttribute('src', 'starlightblue.svg'));
    }
    else {
      updateTrackWithPlaylistInDB(currentTrackId, 0)
        .then(() => starButton.setAttribute('src', 'stargray.svg'));
    }
  }
});

const addPlaylistButton = document.querySelector('.addplaylist');

addPlaylistButton.addEventListener('click', () => {
  let newPlaylistName = window.prompt('Enter name of new playlist:');
  if (newPlaylistName) postNewPlaylistToDB(newPlaylistName)
    .then(parsed => buildPlaylistRow({
      name: newPlaylistName,
      id: parsed.id
    }))
    .catch(err => alert(err.message));
});

const addTrackButton = document.querySelector('.addtrack');

addTrackButton.addEventListener('click', () => {
  let newTrackData = {}
  newTrackData.title = window.prompt('Enter title of new track:');
  newTrackData.artist = window.prompt('Enter name of artist:');
  newTrackData.url = window.prompt('Enter URL:');
  if (newTrackData.title && newTrackData.artist && newTrackData.url) {
    let rowIndex = Number(document.querySelector('tbody').lastElementChild.firstElementChild.textContent) + 1;
    newTrackData.duration = 123.123123;
    postNewTrackToDB(newTrackData)
      .then(parsed => {
        newTrackData.id = parsed.id;
      })
      .then(() => buildTrackRow(newTrackData, rowIndex))
      .catch(err => alert(err.message));
  }
});

const addTrackToPlaylistButton = document.querySelector('.addtoplaylist');

addTrackToPlaylistButton.addEventListener('click', () => {
  let currentTrackId = currentSongDisplay.getAttribute('data-id');
  let playlistId = window.prompt('Enter playlist id:');

  if (currentTrackId && playlistId) {
    updateTrackWithPlaylistInDB(currentTrackId, playlistId);
  }
});

const handlePlaylistListAreaClick = event => {
  if (event.target.classList.contains('delete')) {
    deletePlaylistFromDB(event.target.parentElement.getAttribute('data-id'))
      .then(() => event.target.parentElement.remove())
      .catch(err => alert(err.message));
  } else {
    let clickedListId = event.target.getAttribute('data-id');
    (clickedListId ? getTracksByPlaylistFromDB(clickedListId) : getAllTracksFromDB())
      .then(result => {
        buildTracklist(result);
        if (result[0]) displayCurrentlyPlaying(result[0]);
      })
      .catch(err => alert(err.message));

  }
}

document.querySelector('ul').addEventListener('click', handlePlaylistListAreaClick);

const handleTrackListAreaClick = event => {
  if (event.target.classList.contains('delete')) {
    if (currentPlaylistDisplay.getAttribute('data-id') === 0) {
      if (window.confirm('Are you sure you want to remove this track from the database?')) {
        deleteTrackFromDB(event.target.parentElement.getAttribute('data-id'))
          .then(() => {
            if (currentSongDisplay.getAttribute('data-id') === event.target.parentElement.getAttribute('data-id')) {
              audio.setAttribute('src', '#');
              audio.pause();
            }
          })
          .then(() => event.target.parentElement.remove())
          .catch(err => alert(err.message));
      }
    } else {

    }
  }

  currentPlaylistDisplay.addEventListener('click', handleTrackListAreaClick);
