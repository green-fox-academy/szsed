'use strict';

export{};

// # Product database 2

// We are going to represent our products in a map where the keys are strings
// representing the product's name and the values are numbers representing the
// product's price.

// - Create a map with the following key-value pairs.

//   | Product name (key) | Price (value) |
//   | :----------------- | :------------ |
//   | Eggs               | 200           |
//   | Milk               | 200           |
//   | Fish               | 400           |
//   | Apples             | 150           |
//   | Bread              | 50            |
//   | Chicken            | 550           |

let products2 = new Map<string, number>();

products2.set("Eggs", 200);
products2.set("Milk", 200);
products2.set("Fish", 400);
products2.set("Apples", 150);
products2.set("Bread", 50);
products2.set("Chicken", 550);


// - Create an application which solves the following problems.
//   - Which products cost less than 201? (just the name)

let cheaperThan: string[] = [];

products2.forEach((value, key) => {
    if (value < 201) {
        cheaperThan.push(key);
    }
});
console.log(cheaperThan);

//   - Which products cost more than 150? (name + price)

let moreThan: any = {};

// console.log(typeof moreThan);

products2.forEach((value, key) => {
    if (value > 150) {
        // why don't you work??
        Object.defineProperty(moreThan, key, {value: value});
        console.log([key, value]);
    }
});
console.log(moreThan);
