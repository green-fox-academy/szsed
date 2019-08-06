'use strict';

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

if (document.querySelectorAll('p')[3].classList.contains('dolphin')) document.querySelector('.apple').textContent = 'pear';

// If the first p has an 'apple' class, replace cat's content with 'dog'

if (document.querySelectorAll('p')[0].classList.contains('apple')) document.querySelector('.cat').textContent = 'dog';

// Make apple red by adding a .red class

document.querySelector('.apple').classList.add('red');

// Make balloon less balloon-like (change its shape)

document.querySelector('.balloon').style.borderRadius = 0;