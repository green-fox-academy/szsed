'use strict';

const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
const featured = document.querySelector('.featured');
const featured2 = document.querySelector('.featured2');
const picturebox = document.querySelector('.picturebox');
const arrow = document.querySelector('.arrow');
const arrowReverse = document.querySelector('.reverse');
let counter = 0;

picturebox.onclick = () => location = 'pictures/' + picturebox.getAttribute('title');



thumbnails.forEach((element, index) => {
    element.onclick = () => {
        let selected = document.querySelector('.selected');
        if (!element.classList.contains('selected')) {
            element.classList.add('selected');
            selected.classList.remove('selected');
            let imgLink = element.getAttribute('src');
            let imgTitle = element.getAttribute('title');

            if (counter % 2 === 0) {
                featured2.setAttribute('src', imgLink);
                featured.style.opacity = 0;
                featured2.style.opacity = 1;
            } else {
                featured.setAttribute('src', imgLink);
                featured.style.opacity = 1;
                featured2.style.opacity = 0;
            }
            counter++;
            picturebox.setAttribute('title', imgTitle);
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