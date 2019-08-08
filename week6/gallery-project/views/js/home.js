'use strict';

let thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
let arrow = document.querySelector('.arrow');
let arrowReverse = document.querySelector('.reverse');

let arrowClick = () => {
    let currentFeatured = document.querySelector('.featured');
    let currentSelected = document.querySelector('.selected');
    console.log('left');
}

let arrowClickReverse = () => {
    let currentFeatured = document.querySelector('.featured');
    let currentSelected = document.querySelector('.selected');
    console.log('right');
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
            newFeatured.setAttribute('src', imgLink);
            newFeatured.setAttribute('alt', '#');
            newFeatured.classList.add('featured');
            document.querySelector('.picturebox').appendChild(newFeatured);
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