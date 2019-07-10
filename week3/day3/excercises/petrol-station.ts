// # Petrol Station

//  -  Create a `Station` and a `Car` classes
//  -  `Station`
//      -  gasAmount
//      -  refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
//  -  `Car`
//      -  gasAmount
//      -  capacity
//      -  create constructor for `Car` where:
//           -  initialize gasAmount -> 0
//           -  initialize capacity -> 100

'use strict';

class Station {
    gasAmount: number = 10000;

    refill(car: Car){
        this.gasAmount -= car.capacity;
        car.gasAmount += car.capacity;
    }
}

class Car {
    gasAmount: number;
    capacity: number;

    constructor(gasamount: number, capacity: number){
        this.gasAmount = gasamount;
        this.capacity = capacity;
    }
}

let gasStation = new Station();
let KITT = new Car(0,100);

gasStation.refill(KITT);

console.log(gasStation, KITT);