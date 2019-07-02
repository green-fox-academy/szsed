'use strict';

// # Product database

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

let products = new Map<string, number>();

products.set("Eggs", 200);
products.set("Milk", 200);
products.set("Fish", 400);
products.set("Apples", 150);
products.set("Bread", 50);
products.set("Chicken", 550);

console.log(products);

// - Create an application which solves the following problems.
//   - [How much is the fish?](https://www.youtube.com/watch?v=cbB3iGRHtqA)

console.log(products.get("Fish"));

//   - What is the most expensive product?

let maxKey: string = "";
let maxVal: number = 0;

products.forEach((value, key) => {
    if (value > maxVal) {
        maxVal = value;
        maxKey = key;
    }

}
);

console.log(maxKey);

//   - What is the average price?

let avg: number = 0;

products.forEach(value => avg += value);
avg /= products.size;

console.log(avg);

//   - How many products' price is below 300?

let count: number = 0

products.forEach(value => {
    if (value < 300) {
        count++;
    }
});

console.log(count);
//   - Is there anything we can buy for exactly 125?

let exactPrice: string[] = [];

products.forEach((value, key) => {
    if (value == 125) {
        exactPrice.push(key);
    }
});
console.log(exactPrice);

//   - What is the cheapest product?

let minKey: string = "";
let minVal: number = Infinity;

products.forEach((value, key) => {
    if (value < minVal) {
        minVal = value;
        minKey = key;
    }

}
);

console.log(minKey);
