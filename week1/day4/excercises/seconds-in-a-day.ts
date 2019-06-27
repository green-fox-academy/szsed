'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;


let totalSeconds: number = 24 * 60 * 60;
let secondsPassed: number = currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds;

console.log("Remaining seconds: " + (totalSeconds-secondsPassed));