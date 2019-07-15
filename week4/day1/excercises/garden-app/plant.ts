// The Garden Application
// The task is to create a garden application, so in your main method you should create a garden with flowers and trees.
// The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange).
// In the example after creating them you should show the user, how the garden looks like.
// After that the program should water the garden twice, first with the amount of 40 then with 70.
// And after every watering the user should see the state of the garden as you can see in the output.

'use strict'

export default class Plant {
    color: string;
    waterAmount: number = 0;
    needsWaterParam: number;
    absorbtionParam: number;

    constructor(color: string, waterAmount: number) {
        this.color = color;
        this.waterAmount = waterAmount;
    }

    needsWater(): boolean {
        return (this.waterAmount > this.needsWaterParam ? false : true);
    }


    getWatered(amount: number) {
        this.waterAmount += amount * this.absorbtionParam;
    }


}