// The Garden Application
// The task is to create a garden application, so in your main method you should create a garden with flowers and trees.
// The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange).
// In the example after creating them you should show the user, how the garden looks like.
// After that the program should water the garden twice, first with the amount of 40 then with 70.
// And after every watering the user should see the state of the garden as you can see in the output.

// The Garden
// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

'use strict'

import Plant from './plant'
import Flower from './flower';
import Tree from './tree';

export default class Garden {
    plantsInHere: Plant[];

    initGarden() {
        this.plantsInHere.push(new Flower('yellow', 0));
        this.plantsInHere.push(new Flower('blue', 0));
        this.plantsInHere.push(new Tree('purple', 0));
        this.plantsInHere.push(new Tree('orange', 0));
    }

    constructor() {
        this.plantsInHere = [];
        this.initGarden;
    }

    waterPlants(amount: number) {
        console.log(`Watering with ${amount}.`);
        let howManyNeedWater: number = 0;
        this.plantsInHere.forEach((element: Plant) => {
            if (element.needsWater()) {
                howManyNeedWater++;
            }
        });

        if (howManyNeedWater != 0) {
            this.plantsInHere.forEach((element: Plant) => {
                if (element.needsWater()) {
                    element.getWatered(amount / howManyNeedWater);
                }
            });
        }

        this.getWaterInfo();
        // console.log(this.plantsInHere);
    }

    getWaterInfo() {
        this.plantsInHere.forEach((element: Plant) => {
            if (element.needsWater()) {
                console.log(`The ${element.color} ${element.constructor.name} needs water.`);
            }
            else {
                console.log(`The ${element.color} ${element.constructor.name} doesn't need water.`);
            }
        })

    }
}