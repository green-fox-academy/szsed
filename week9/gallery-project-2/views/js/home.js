'use strict';

const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
const featured = document.querySelector('.featured');
const featured2 = document.querySelector('.featured2');
const picturebox = document.querySelector('.picturebox');
const arrow = document.querySelector('.arrow');
const arrowReverse = document.querySelector('.reverse');
const addButton = document.querySelector('.add');
const updateButton = document.querySelector('.update');
const form = document.querySelector('form');
const titleField = document.querySelector('[name=title]');
const urlField = document.querySelector('[name=url]');
const descrField = document.querySelector('[name=descr]');
const submitButton = document.querySelector('.submit');
const deleteButton = document.querySelector('.delete');
let counter = 0;
let submitMode = '';
let selectedID = thumbnails[0].getAttribute('data-id');

const displayForm = () => {
    form.classList.toggle('hidden');
    if (!form.classList.contains('hidden')) {
        form.firstElementChild.focus();
        form.firstElementChild.scrollIntoView();
    }
}

addButton.addEventListener('click', () => {
    submitMode = 'add';
    displayForm();
});

updateButton.addEventListener('click', () => {
    submitMode = 'update';
    displayForm();
});

submitButton.addEventListener('click', event => {
    event.preventDefault();

    const formIsValid = (titleField.checkValidity() && urlField.checkValidity() && descrField.checkValidity());

    const data = {
        title: titleField.value,
        url: urlField.value,
        descr: descrField.value
    }

    let fetchUrl = '';
    let fetchMethod = '';

    if (submitMode === 'add') {
        fetchUrl = '/';
        fetchMethod = 'POST';

    } else if (submitMode === 'update') {
        fetchUrl = `/${selectedID}`;
        fetchMethod = 'PATCH';
    }

    if (formIsValid) {
        fetch(fetchUrl, {
            method: fetchMethod,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(result => result.json())
            .then(json => json.errno ? console.log(json.sqlMessage) : console.log(json))
            .then(displayForm)
            .catch(err => console.log(err.message));
    } else {
        alert('Invalid form input');
    }
});

deleteButton.addEventListener('click', () => {
    fetch(`/${selectedID}`, {
        method: 'DELETE',
    })
        .then(result => result.json())
        .then(json => json.errno ? console.log(json.sqlMessage) : console.log(json))
        .catch(err => console.log(err.message));
})

picturebox.onclick = () => location = 'pictures/' + picturebox.getAttribute('title');

thumbnails.forEach((element, index) => {
    element.onclick = () => {
        let selected = document.querySelector('.selected');
        if (!element.classList.contains('selected')) {
            element.classList.add('selected');
            selected.classList.remove('selected');
            let imgLink = element.getAttribute('src');
            let imgTitle = element.getAttribute('title');
            selectedID = element.getAttribute('data-id');

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
            document.querySelector('p').textContent = element.getAttribute('data-desc');
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