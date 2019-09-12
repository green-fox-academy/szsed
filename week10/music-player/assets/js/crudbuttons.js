starButton.addEventListener('click', () => {
  const currentTrackId = currentSongDisplay.getAttribute('data-id');
  const currentTrackRowElement = document.querySelector(`tr[data-id="${currentTrackId}"]`);
  if (currentTrackId) {
    if (starButton.getAttribute('src') === 'stargray.svg') {
      updateTrackWithPlaylistInDB(currentTrackId, 1)
        .then(() => {
          starButton.setAttribute('src', 'starlightblue.svg');
          if (currentPlaylistDisplay.getAttribute('data-id') == 1) {
            document.querySelector('li[data-id="1"]').click();
          }
        });
    }
    else {
      updateTrackWithPlaylistInDB(currentTrackId, 0)
        .then(() => {
          starButton.setAttribute('src', 'stargray.svg');
          if (currentPlaylistDisplay.getAttribute('data-id') == 1) {
            currentTrackRowElement.remove();
            reindexTracklist();
          }
        });
    }
  }
});

const addPlaylistButton = document.querySelector('.addplaylist');

addPlaylistButton.addEventListener('click', () => {
  const newPlaylistName = window.prompt('Enter name of new playlist:');
  if (newPlaylistName) postNewPlaylistToDB(newPlaylistName)
    .then(parsed => buildPlaylistRow({
      name: newPlaylistName,
      id: parsed.id
    }))
    .catch(err => alert(err.message));
});

const addTrackButton = document.querySelector('.addtrack');

const getAudioDuration = url => {
  return new Promise((resolve) => {
    const tempAudio = new Audio();
    tempAudio.addEventListener('loadedmetadata', () => resolve(tempAudio.duration));
    tempAudio.setAttribute('src', url);
  });
}

addTrackButton.addEventListener('click', () => {
  const currentPlaylistId = currentPlaylistDisplay.getAttribute('data-id');
  const newTrackData = {};
  newTrackData.title = window.prompt('Enter title of new track:');
  newTrackData.artist = window.prompt('Enter name of artist:');
  newTrackData.url = window.prompt('Enter URL:');
  if (newTrackData.title && newTrackData.artist && newTrackData.url) {
    const rowIndex = currentPlaylistDisplay.firstElementChild ?
      Number(currentPlaylistDisplay.lastElementChild.firstElementChild.textContent) + 1 : 1;
    getAudioDuration(newTrackData.url)
      .then(duration => newTrackData.duration = duration)
      .then(() => postNewTrackToDB(newTrackData))
      .then(parsed => {
        newTrackData.id = parsed.id;
      })
      .then(() => buildTrackRow(newTrackData, rowIndex))
      .then(() => {
        if (currentPlaylistId !== 0) updateTrackWithPlaylistInDB(newTrackData.id, currentPlaylistId);
      })
      .catch(err => alert(err.message));
  }
});

const addTrackToPlaylistButton = document.querySelector('.addtoplaylist');

addTrackToPlaylistButton.addEventListener('click', () => {
  const currentTrackId = currentSongDisplay.getAttribute('data-id');
  const playlistId = window.prompt('Enter playlist id:');

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
  const clickedListId = playlistElement.getAttribute('data-id');
  ((clickedListId == 0) ? getAllTracksFromDB() : getTracksByPlaylistFromDB(clickedListId))
    .then(result => {
      buildTracklist(result);
      currentPlaylistDisplay.setAttribute('data-id', clickedListId);
      if (result[0]) {
        displayCurrentlyPlaying(result[0]);
        if (!audio.paused) {
          audio.setAttribute('src', result[0].url);
          audio.play();
        } else {
          audio.setAttribute('src', result[0].url);
        }
      }
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

const reindexTracklist = () => {
  Array.from(currentPlaylistDisplay.children).forEach((child, index) => child.firstElementChild.textContent = index + 1);
}

const handleCurrentTrackRemoval = trackElement => {
  if (currentSongDisplay.getAttribute('data-id') === trackElement.getAttribute('data-id')) {
    if (!audio.paused) togglePlayPause();
    audio.setAttribute('src', '#');
    playNext();
  }
}

const deleteTrack = trackElement => {
  if (currentPlaylistDisplay.getAttribute('data-id') == 0) {
    if (window.confirm('Are you sure you want to remove this track from the database?')) {
      deleteTrackFromDB(trackElement.getAttribute('data-id'))
        .then(() => {
          handleCurrentTrackRemoval(trackElement);
          trackElement.remove();
          reindexTracklist();
        })
        .catch(err => alert(err.message));
    }
  } else if (currentPlaylistDisplay.getAttribute('data-id') == 1) {
    starButton.click();
  }
  else {
    updateTrackWithPlaylistInDB(trackElement.getAttribute('data-id'), 0)
      .then(() => {
        trackElement.remove();
        reindexTracklist();
      })
      .catch(err => alert(err.message));
  }
}

const changeTrack = trackElement => {
  const clickedTrackId = (trackElement.tagName === 'TR') ?
    trackElement.getAttribute('data-id') : trackElement.parentElement.getAttribute('data-id');
  getTrackFromDB(clickedTrackId)
    .then(result => {
      const isPlaying = !audio.paused;
      audio.setAttribute('src', result[0].url);
      if (isPlaying) audio.play();
      displayCurrentlyPlaying(result[0]);
    })
    .catch(err => alert(err.message));
}

const handleTrackListAreaClick = event => {
  if (event.target.classList.contains('delete')) {
    deleteTrack(event.target.parentElement);
  } else {
    changeTrack(event.target);
  }
}

currentPlaylistDisplay.addEventListener('click', handleTrackListAreaClick);
