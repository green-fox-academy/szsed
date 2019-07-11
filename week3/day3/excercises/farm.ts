// Farm
// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

'use strict';

import Animal from './animal'

class Farm {
    animalList: Animal[] = [];
    slots: number;

    constructor(animalList: Animal[], slots: number) {

        if (slots < animalList.length) throw Error('cannot create farm: not enough slots for animals');

        this.animalList = animalList;
        this.slots = slots;
    }

    breed() {

        if (this.slots == this.animalList.length) throw Error ('cannot breed animal: no more available slots');
        this.animalList.push(new Animal());
    }

    slaughter() {

        let minIndex: number;
        let minHungerVal: number = Infinity;

        this.animalList.forEach((value, index) => {
            if (value.hungerVal < minHungerVal) {
                minHungerVal = value.hungerVal;
                minIndex = index;
            }
        })

        this.animalList.splice(minIndex, 1);
    }

}

function initializeAnimals(): Animal[] {
    return [
        new Animal(),
        new Animal(),
        new Animal(),
        new Animal(),
        new Animal()
    ];
}

let myFarm = new Farm (initializeAnimals(), 10);

console.log(myFarm);

myFarm.animalList[0].eat();
myFarm.animalList[1].play();
myFarm.animalList[2].drink();
myFarm.animalList[3].eat();
myFarm.animalList[3].eat();

console.log(myFarm);

myFarm.breed();
myFarm.breed();
myFarm.breed();
myFarm.breed();
myFarm.breed();

myFarm.slaughter();

console.log(myFarm);
