'use strict';

const parseResultAndHandleError = response => {
  return response.json()
    .then(parsed => {
      if (parsed.error) {
        throw new Error(parsed.error);
      } else {
        return parsed;
      }
    })
    .catch(err => alert(err.message));
}

const getAllPlaylistsFromDB = () => {
  return fetch('/playlists')
    .then(parseResultAndHandleError);
}

const postNewPlaylistToDB = newPlaylistName => {
  return fetch('/playlists', {
    method: 'POST',
    body: JSON.stringify({ name: newPlaylistName }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(parseResultAndHandleError);
}

const getPlaylistFromDB = playlistId => {
  return fetch(`/playlists/${playlistId}`)
    .then(parseResultAndHandleError);
}

const deletePlaylistFromDB = playlistId => {
  return fetch(`/playlists/${playlistId}`, {
    method: 'DELETE'
  })
    .then(parseResultAndHandleError);
}

const getAllTracksFromDB = () => {
  return fetch('/playlist-tracks')
    .then(parseResultAndHandleError);
}

const getTracksByPlaylistFromDB = playlistId => {
  return fetch(`/playlist-tracks/${playlistId}`)
    .then(parseResultAndHandleError);
}

const updateTrackWithPlaylistInDB = (trackId, playlistId) => {
  return fetch(`/playlist-tracks/${playlistId}/${trackId}`, {
    method: 'POST'
  })
    .then(parseResultAndHandleError);
}

const removePlaylistFromTrackInDB = (trackId, playlistId) => {
  return fetch(`/playlist-tracks/${playlistId}/${trackId}`, {
    method: 'DELETE'
  })
    .then(parseResultAndHandleError);
}

const postNewTrackToDB = trackData => {
  return fetch('/playlist-tracks', {
    method: 'POST',
    body: JSON.stringify(trackData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(parseResultAndHandleError);
}

const deleteTrackFromDB = trackId => {
  return fetch(`/playlist-tracks/${trackId}`, {
    method: 'DELETE'
  })
    .then(parseResultAndHandleError);
}

const getTrackFromDB = trackId => {
  return fetch(`/tracks/${trackId}`)
    .then(parseResultAndHandleError);
}
