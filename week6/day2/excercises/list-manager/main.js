'use strict';

// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console

let foodlist = ['bread', 'milk', 'orange', 'tomato']
let buttonLabels = ['Up', '>', 'X', 'Down']

let container = document.createElement('div');
container.style.display = 'flex';
container.style.justifyContent = 'center';
document.body.appendChild(container);

for (let i = 0; i < 3; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.border = '1px solid black';
    newDiv.style.margin = '5px';

    for (let j = 0; j < 4; j++) {

        switch (i) {
            case 0:
                let newParag = document.createElement('p');
                newParag.textContent = foodlist[j];
                newParag.style.margin = '0';
                newParag.style.textAlign = 'center';
                newParag.style.height = '25%';
                newParag.style.width = '100%';
                newParag.style.display = 'block';
                if (j === 0) newParag.style.backgroundColor = '#d3d3d3';
                newDiv.appendChild(newParag);
                break;
            case 1:
                let newButton = document.createElement('button');
                newButton.textContent = buttonLabels[j];
                newButton.style.height = '25%';
                newButton.style.width = '100%';
                newButton.style.display = 'block';
                newDiv.appendChild(newButton);
                break;
        }
    }

    container.appendChild(newDiv);
}

let foodOnLeft = container.children[0]
let buttons = container.children[1].children;
let foodOnRight = container.children[2]

console.log(Array.from(foodOnLeft.children));

buttons[0].onclick = () => {
    Array.from(foodOnLeft.children).forEach((element, index, arr) => {
        if (element.style.backgroundColor === 'rgb(211, 211, 211)' && index > 0) {
            element.style.backgroundColor = '#fff';
            arr[index - 1].style.backgroundColor = '#d3d3d3';
        }
    })
}

buttons[1].onclick = () => {
    for (let i = 0; i < Array.from(foodOnLeft.children).length; i++) {
        if (Array.from(foodOnLeft.children)[i].style.backgroundColor === 'rgb(211, 211, 211)' && i > 0) {
            Array.from(foodOnLeft.children)[i - 1].style.backgroundColor = '#d3d3d3';
            Array.from(foodOnLeft.children)[i].style.backgroundColor = '#fff';
            foodOnRight.appendChild(Array.from(foodOnLeft.children)[i]);
            break;
        } else if (Array.from(foodOnLeft.children)[i].style.backgroundColor === 'rgb(211, 211, 211)' && i < Array.from(foodOnLeft.children).length - 1) {
            Array.from(foodOnLeft.children)[i + 1].style.backgroundColor = '#d3d3d3';
            Array.from(foodOnLeft.children)[i].style.backgroundColor = '#fff';
            foodOnRight.appendChild(Array.from(foodOnLeft.children)[i]);
            break;
        } else if (Array.from(foodOnLeft.children)[i].style.backgroundColor === 'rgb(211, 211, 211)') {
            Array.from(foodOnLeft.children)[i].style.backgroundColor = '#fff';
            foodOnRight.appendChild(Array.from(foodOnLeft.children)[i]);
            break;
        }
    }
}

buttons[2].onclick = () => {
    for (let i = 0; i < Array.from(foodOnLeft.children).length; i++) {
        if (Array.from(foodOnLeft.children)[i].style.backgroundColor === 'rgb(211, 211, 211)' && i > 0) {
            Array.from(foodOnLeft.children)[i - 1].style.backgroundColor = '#d3d3d3';
            Array.from(foodOnLeft.children)[i].remove();
            break;
        } else if (Array.from(foodOnLeft.children)[i].style.backgroundColor === 'rgb(211, 211, 211)' && i < Array.from(foodOnLeft.children).length - 1) {
            Array.from(foodOnLeft.children)[i + 1].style.backgroundColor = '#d3d3d3';
            Array.from(foodOnLeft.children)[i].remove();
            break;
        } else if (Array.from(foodOnLeft.children)[i].style.backgroundColor === 'rgb(211, 211, 211)') {
            Array.from(foodOnLeft.children)[i].remove();
            break;
        }
    }
}

buttons[3].onclick = () => {
    for (let i = 0; i < Array.from(foodOnLeft.children).length; i++) {
        if (Array.from(foodOnLeft.children)[i].style.backgroundColor === 'rgb(211, 211, 211)' && i < Array.from(foodOnLeft.children).length - 1) {
            Array.from(foodOnLeft.children)[i].style.backgroundColor = '#fff';
            Array.from(foodOnLeft.children)[i + 1].style.backgroundColor = '#d3d3d3';
            break;
        }
    }
}