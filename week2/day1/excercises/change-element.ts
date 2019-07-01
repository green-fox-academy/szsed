// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strict'

let numList: number[] = [1, 2, 3, 8, 5, 6]

let changedList: number[] = numList.map((value, index) => {
    if (value === 8){
        return 4;
    }
    else {
        return value;
    }
});

console.log(changedList);