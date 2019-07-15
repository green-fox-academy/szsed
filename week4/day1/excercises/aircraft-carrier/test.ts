'use strict';

import AircraftCarrier from "./carrier";

let myCarrier = new AircraftCarrier(3000, 5000);
myCarrier.init(5);
myCarrier.fill();
let enemyCarrier = new AircraftCarrier(3000, 5000);
enemyCarrier.init(5);
enemyCarrier.fill();

console.log(myCarrier.getStatus());
console.log(enemyCarrier.getStatus());

myCarrier.fight(enemyCarrier);
console.log(myCarrier.getStatus());
console.log(enemyCarrier.getStatus());

myCarrier.fill();
myCarrier.fight(enemyCarrier);
console.log(myCarrier.getStatus());
console.log(enemyCarrier.getStatus());

myCarrier.fill();
myCarrier.fight(enemyCarrier);
console.log(myCarrier.getStatus());
console.log(enemyCarrier.getStatus());

let emptyCarrier = new AircraftCarrier(0, 5000);
emptyCarrier.init(5);
emptyCarrier.fill();