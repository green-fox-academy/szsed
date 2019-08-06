'use strict';

// Turn the party on and off by clicking the button. (the whole page)

const button = document.querySelector('button');

button.onclick = () => document.body.classList.contains('party') ? document.body.classList.remove('party') : document.body.classList.add('party');
