// Extend Bird from your abstract Animal class (zoo exercise)
// implement yourˇFlyable interface

'use strict';

import Flyable from "./flyable";

class Bird implements Flyable {
    name: string;
    numberOfWings: number;

    constructor(name: string, numofwings: number) {
        this.name = name;
        this.numberOfWings = numofwings;
    }

    land() {
        console.log('Caw caw');
    }
    fly() {
        console.log('Screeee');
    }
    takeOff() {
        console.log('Flappy flap flap');
    }


}