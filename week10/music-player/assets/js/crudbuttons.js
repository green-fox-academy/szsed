const starButton = document.querySelector('.star');

starButton.addEventListener('click', () => {
  if (starButton.getAttribute('src') === 'stargray.svg') {
    starButton.setAttribute('src', 'starlightblue.svg');
  } else {
    starButton.setAttribute('src', 'stargray.svg');
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

const handlePlaylistListAreaClick = event => {
  if (event.target.classList.contains('delete')) {
    deletePlaylistFromDB(event.target.parentElement.getAttribute('data-id'))
      .then(() => event.target.parentElement.remove())
      .catch(err => alert(err.message));
  }
}

document.querySelector('ul').addEventListener('click', handlePlaylistListAreaClick);

const handleTrackListAreaClick = event => {
  if (event.target.classList.contains('delete')) event.target.parentElement.remove();
}

document.querySelector('tbody').addEventListener('click', handleTrackListAreaClick);
