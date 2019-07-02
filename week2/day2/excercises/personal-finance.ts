'use strict';

// # Personal finance

// We are going to represent our expenses in a list containing integers.

// - Create a list with the following items.
//   - 500, 1000, 1250, 175, 800 and 120

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

// - Create an application which solves the following problems.

let app = {

    //   - How much did we spend?
    spent: (arr: number[]): number => {
        let sum: number = 0;
        arr.forEach((value) => sum += value);
        return sum;
    },
    //   - Which was our greatest expense?
    max: (arr: number[]): number => {
        let maxVal: number = arr[0];
        arr.forEach((value) => { if (value > maxVal) { maxVal = value; } });
        return maxVal;
    },

    //   - Which was our cheapest spending?
    min: (arr: number[]): number => {
        let minVal: number = arr[0];
        arr.forEach((value) => { if (value < minVal) { minVal = value; } });
        return minVal;
    },

    //   - What was the average amount of our spendings?

    avg: (arr: number[]): number => {
        return app.spent(arr) / arr.length
    }


}

console.log(app.spent(expenses));
console.log(app.max(expenses));
console.log(app.min(expenses));
console.log(app.avg(expenses));