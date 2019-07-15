// The Garden Application
// The task is to create a garden application, so in your main method you should create a garden with flowers and trees.
// The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange).
// In the example after creating them you should show the user, how the garden looks like.
// After that the program should water the garden twice, first with the amount of 40 then with 70.
// And after every watering the user should see the state of the garden as you can see in the output.

// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

'use strict';

import Plant from './plant'

export default class Flower extends Plant {

    constructor(color: string, waterAmount: number) {
        super(color, waterAmount);
        this.needsWaterParam = 5;
        this.absorbtionParam = 0.75;
    }

}
