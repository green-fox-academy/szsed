const starButton = document.querySelector('.star');

starButton.addEventListener('click', () => {
  if (starButton.getAttribute('src') === 'stargray.svg') {
    starButton.setAttribute('src', 'starlightblue.svg');
  } else {
    starButton.setAttribute('src', 'stargray.svg');
  }
});

const addPlaylistButton = document.querySelector('.addplaylist');

const postNewPlaylistToDB = newPlaylistName => {
  fetch('/playlists', {
    method: 'POST',
    body: JSON.stringify({ name: newPlaylistName }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(result => result.json().id)
    .catch(err => console.log(err.message));
}

addPlaylistButton.addEventListener('click', () => {
  let newPlaylistName = window.prompt('Enter name of new playlist:');
  if (newPlaylistName) postNewPlaylistToDB(newPlaylistName)
    .then(id => buildPlaylistRow({
      name: newPlaylistName,
      id: id
    }));
});

const addTrackButton = document.querySelector('.addtrack');

addTrackButton.addEventListener('click', () => {
  let newTrackData = {}
  newTrackData.title = window.prompt('Enter title of new track:');
  newTrackData.artist = window.prompt('Enter name of artist:');
  newTrackData.url = window.prompt('Enter URL:');
  if (newTrackData.title && newTrackData.artist && newTrackData.url) {
    newTrackData.id = 123;
    newTrackData.duration = 123.123123;
    let rowIndex = Number(document.querySelector('tbody').lastElementChild.firstElementChild.textContent) + 1;
    buildTrackRow(newTrackData, rowIndex);
  }
});
