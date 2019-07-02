'use strict';

export{};

// # Shopping list

// We are going to represent a shopping list in a list containing strings.

// - Create a list with the following items.
//   - Eggs, milk, fish, apples, bread and chicken

let list: string[] = ["eggs", "milk", "fish", "apples", "bread", "chicken"];

// - Create an application which solves the following problems.
//   - Do we have milk on the list?

let haveMilk = function (arr: string[]): boolean {
    return arr.includes("milk");
}
//   - Do we have bananas on the list?

let haveBananas = function (arr: string[]): boolean {
    return arr.includes("bananas");
}

console.log(haveMilk(list));
console.log(haveBananas(list));
