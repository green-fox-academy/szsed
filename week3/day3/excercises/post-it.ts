// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

'use strict';

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;
    constructor(bc: string, t: string, tc: string){
        this.backgroundColor = bc;
        this.text = t;
        this.textColor = tc;
    }
}

let postOne = new PostIt('orange', 'Idea 1', 'blue');
let postTwo = new PostIt('pink', 'Awesome', 'black');
let postThree = new PostIt('yellow', 'Superb!', 'green');

console.log(postOne, postTwo, postThree);