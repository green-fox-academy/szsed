// Extend Helicopter class from Vehicle
// implement your Flyable interface

'use strict';

import Vehicle from "./vehicle";
import Flyable from "./flyable";

class Helicopter extends Vehicle implements Flyable {
    flightSpeed: number;

    constructor(make: string, id: number, speed: number) {
        super(make, id);
        this.flightSpeed = speed;
    }

    land() {
        console.log('Request landing pad, command');
    }
    fly() {
        console.log('I\'m flyyyyyiiiing!!!');
    }
    takeOff() {
        console.log('Initiate take-off.');
    }
}