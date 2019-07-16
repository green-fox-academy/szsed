// Let's think about the kinds of animals Mammals, Reptiles, Birdss etc. 
// We need to define specific fields and methods for each. 
// For example every Bird breed() from an egg, doesn't matter if it is a penguin or parrot or ostrich. 
// Write down at least 2 of field and/or method what is common in each kind.

'use strict';

import Animal from './animal';

export default class Reptile extends Animal {
    isScary: boolean;
    numberOfLegs: number;

    constructor(name: string = 'default reptile name', age: number = 0, sex: string = 'unknown',
        district: string = 'Reptile district', scary?: boolean, numoflegs?: number) {
        super(name, age, sex, district);
        this.isScary = scary;
        this.numberOfLegs = numoflegs;
    }

    breed(): string {
        return 'laying eggs';
    }

    makeSound(): string {
        return 'Hisssss';
    }
}