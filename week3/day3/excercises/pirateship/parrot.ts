// And... if you get that far...

// Add a parrot.

'use strict'

export default class Parrot {
    breed: string;
    color: string;
    owner: string;

    constructor(breed?: string, color?: string){
        this.breed = breed;
        this.color = color;
    }
}