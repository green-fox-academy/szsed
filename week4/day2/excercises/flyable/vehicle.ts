// Create an abstract Vehicle class
// it should have at least 3 fields

'use strict';

export default abstract class Vehicle {
    make: string;
    numberOfWheels: number;
    private ID: number;

    constructor(make: string, id: number, numofwheels?: number) {
        this.make = make;
        this.ID = id;
        this.numberOfWheels = numofwheels;
    }

    getID(): number {
        return this.ID;
    }
}