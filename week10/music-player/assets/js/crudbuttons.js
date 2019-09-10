const starButton = document.querySelector('.star');

starButton.addEventListener('click', () => {
  if (starButton.getAttribute('src') === 'stargray.svg') {
    starButton.setAttribute('src', 'starlightblue.svg');
  } else {
    starButton.setAttribute('src', 'stargray.svg');
  }
});

const addPlaylistButton = document.querySelector('.addplaylist');
const addTrackButton = document.querySelector('.addtrack');

addPlaylistButton.addEventListener('click', () => {
  let newPlaylistName = window.prompt('Enter name of new playlist:');
  if (newPlaylistName) {
    let newList = document.createElement('li');
    let deleteButton = document.createElement('img');
    deleteButton.setAttribute('src', 'cross.svg');
    deleteButton.setAttribute('alt', '#');
    deleteButton.addEventListener('click', event => event.target.parentElement.remove());
    newList.textContent = newPlaylistName;
    newList.appendChild(deleteButton);
    document.querySelector('ul').appendChild(newList);
  }
});

addTrackButton.addEventListener('click', () => {
  let newTrackName = window.prompt('Enter name of new track:');
  let newArtistName = window.prompt('Enter name of artist:');
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
