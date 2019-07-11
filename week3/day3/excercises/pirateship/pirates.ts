// # Pirates

// Create a `Pirate` class.  While you can add other fields and methods, you must have these methods:-
//  -  `drinkSomeRum()` - intoxicates the Pirate some
//  -  `howsItGoingMate()` - when called, the Pirate replies, if `drinkSomeRun` was called:-
//      -  0 to 4 times, "Pour me anudder!"
//      -  else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.

// If you manage to get this far, then you can try to do the following.
//      -  `die()` - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in `he's dead`.
//      -  `brawl(x)` - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.
// And... if you get that far...

// Add a parrot.
'use strict'

import Parrot from './parrot';

export default class Pirate {
    name: string;
    howManyRums: number = 0;
    passedOut: boolean = false;
    isDead: boolean = false;
    parrot: Parrot;

    constructor(name?: string, parrotBreed?: string, parrotColor?: string){
        this.name = name;
        this.parrot = new Parrot(parrotBreed, parrotColor);
        this.parrot.owner = this.name;
    }

    drinkSomeRum() {
        if (this.isDead) {
            console.log('He\'s dead');
        }
        else {
        this.howManyRums++;
        }
    }

    howsItGoingMate() {
        if (this.isDead) {
            console.log('He\'s dead');
        }
        else if (this.howManyRums <= 4) {
            console.log('Pour me anudder!');
        }
        else {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
            this.passedOut = true;
        }
    }

    die(){
        this.isDead = true;
    }

    brawl(opponent: Pirate){
        if (!this.isDead && !opponent.isDead){
            let outcome: number = Math.floor(Math.random() * 3);

            switch (outcome){
                case 0: 
                this.die();
                break;
                case 1: 
                opponent.die();
                break;
                case 2: 
                this.passedOut = true;
                opponent.passedOut = true;
            }
        }
    }


}
