// # Sharpie Set

//  -  Reuse your `Sharpie` class
//  -  Create `SharpieSet` class
//      -  it contains a list of Sharpie
//      -  `countUsable()` -> sharpie is usable if it has ink in it
//      -  `removeTrash()` -> removes all unusable sharpies

'use strict';

import Sharpie from './sharpie'

class SharpieSet {
    sharpies: Sharpie[] = [];

    add(sharpie: Sharpie) {
        this.sharpies.push(sharpie);
    }

    countUsable() {
        let counter: number = 0;
        this.sharpies.forEach((value) => { if (value.inkAmount > 0) counter++; });
        return counter;
    }

    removeTrash() {
        for (let i = this.sharpies.length - 1; i > 0; i--) {
            if (this.sharpies[i].inkAmount <= 0) this.sharpies.splice(i, 1);
        }
    }

}

let firstSharpie = new Sharpie('red', 12);
let secondSharpie = new Sharpie('blue', 12);
let thirdSharpie = new Sharpie('pink', 12);
thirdSharpie.inkAmount = 0;
let fourthSharpie = new Sharpie('blue', 12);
let fifthSharpie = new Sharpie('red', 12);
fifthSharpie.inkAmount = 0;
let sixthSharpie = new Sharpie('blue', 12);
let seventhSharpie = new Sharpie('red', 12);
seventhSharpie.inkAmount = 0;

let mySharpieSet = new SharpieSet();

mySharpieSet.add(firstSharpie);
mySharpieSet.add(secondSharpie);
mySharpieSet.add(thirdSharpie);
mySharpieSet.add(fourthSharpie);
mySharpieSet.add(fifthSharpie);
mySharpieSet.add(sixthSharpie);
mySharpieSet.add(seventhSharpie);
console.log(mySharpieSet.sharpies);

console.log(mySharpieSet.countUsable());
mySharpieSet.removeTrash();

console.log(mySharpieSet.sharpies);

