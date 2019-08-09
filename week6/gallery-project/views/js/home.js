'use strict';

const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
const picturebox = document.querySelector('.picturebox');
const arrow = document.querySelector('.arrow');
const arrowReverse = document.querySelector('.reverse');

picturebox.onclick = () => location = 'pictures/' + picturebox.getAttribute('title');

const arrowClick = () => {
    let indexOfPrevious = thumbnails.indexOf(document.querySelector('.selected')) - 1;
    thumbnails[indexOfPrevious].onclick();
}

const arrowClickReverse = () => {
    let indexOfNext = thumbnails.indexOf(document.querySelector('.selected')) + 1;
    thumbnails[indexOfNext].onclick();
}

if (thumbnails.length > 1) {
    arrowReverse.onclick = arrowClickReverse;
    arrowReverse.classList.remove('inactive');
}


thumbnails.forEach((element, index) => {
    element.onclick = () => {
        let currentFeatured = document.querySelector('.featured');
        let currentSelected = document.querySelector('.selected');
        if (!element.classList.contains('selected')) {
            element.classList.add('selected');
            currentSelected.classList.remove('selected');
            currentFeatured.remove();
            let newFeatured = document.createElement('img');
            let imgLink = element.getAttribute('src');
            let imgTitle = element.getAttribute('title');
            newFeatured.setAttribute('src', imgLink);
            newFeatured.setAttribute('alt', '#');
            newFeatured.classList.add('featured');
            picturebox.setAttribute('title', imgTitle);
            document.querySelector('.picturebox').appendChild(newFeatured);
            document.querySelector('h4').textContent = element.getAttribute('title');
            document.querySelector('p').textContent = element.getAttribute('data');
            if (index === 0 && thumbnails.length > 1) {
                arrow.classList.add('inactive');
                arrow.onclick = '';
            } else {
                arrow.classList.remove('inactive');
                arrow.onclick = arrowClick;
            }

            if (index === thumbnails.length - 1 && thumbnails.length > 1) {
                arrowReverse.classList.add('inactive');
                arrowReverse.onclick = '';
            } else {
                arrowReverse.classList.remove('inactive');
                arrowReverse.onclick = arrowClickReverse;
            }
        }
    }
});

const onKeyPress = (event) => {
    // Handle arrow keys
    switch (event.keyCode) {
        case 37:
            try {
                arrow.onclick();
            } catch (error) {
            }
            break;
        case 39:
            try {
                arrowReverse.onclick();
            } catch (error) {
            }
            break;
    }
}

document.body.addEventListener('keydown', onKeyPress);