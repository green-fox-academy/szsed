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
    let rowIndex = currentPlaylistDisplay.firstElementChild ?
      Number(currentPlaylistDisplay.lastElementChild.firstElementChild.textContent) + 1 : 1;
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

const deletePlaylist = playlistElement => {
  deletePlaylistFromDB(playlistElement.getAttribute('data-id'))
    .then(() => playlistElement.remove())
    .catch(err => alert(err.message));
}

const changePlaylist = playlistElement => {
  let clickedListId = playlistElement.getAttribute('data-id');
  ((clickedListId == 0) ? getAllTracksFromDB() : getTracksByPlaylistFromDB(clickedListId))
    .then(result => {
      buildTracklist(result);
      currentPlaylistDisplay.setAttribute('data-id', clickedListId);
      if (result[0]) displayCurrentlyPlaying(result[0]);
    })
    .catch(err => alert(err.message));
}


const handlePlaylistListAreaClick = event => {
  if (event.target.classList.contains('delete')) {
    deletePlaylist(event.target.parentElement);
  } else {
    changePlaylist(event.target);
  }
}

document.querySelector('ul').addEventListener('click', handlePlaylistListAreaClick);

const deleteTrack = trackElement => {
  if (currentPlaylistDisplay.getAttribute('data-id') == 0) {
    if (window.confirm('Are you sure you want to remove this track from the database?')) {
      deleteTrackFromDB(trackElement.getAttribute('data-id'))
        .then(() => {
          if (currentSongDisplay.getAttribute('data-id') === trackElement.getAttribute('data-id')) {
            audio.setAttribute('src', '#');
            audio.pause();
            playNext();
          }
        })
        .then(() => trackElement.remove())
        .catch(err => alert(err.message));
    }
  } else if (currentPlaylistDisplay.getAttribute('data-id') == 1) {
    starButton.click();
    trackElement.remove();
  }
  else {
    updateTrackWithPlaylistInDB(trackElement.getAttribute('data-id'), 0)
      .then(() => trackElement.remove())
      .catch(err => alert(err.message));
  }
}

const changeTrack = trackElement => {

}

const handleTrackListAreaClick = event => {
  if (event.target.classList.contains('delete')) {
    deleteTrack(event.target.parentElement);
  } else {
    changeTrack(event.target);
  }
}

currentPlaylistDisplay.addEventListener('click', handleTrackListAreaClick);
