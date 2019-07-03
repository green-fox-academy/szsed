// needed to set "strictNullChecks": false, in tsconfig.json for this solution

'use strict';

export{};

// # Shopping list 2

// - Represent the following products with their prices

//   | Product         | Amount |
//   | :-------------- | :----- |
//   | Milk            | 1.07   |
//   | Rice            | 1.59   |
//   | Eggs            | 3.14   |
//   | Cheese          | 12.60  |
//   | Chicken Breasts | 9.40   |
//   | Apples          | 2.31   |
//   | Tomato          | 2.58   |
//   | Potato          | 1.75   |
//   | Onion           | 1.10   |

let priceList = new Map<string, number>();

priceList.set("Milk", 1.07);
priceList.set("Rice", 1.59);
priceList.set("Eggs", 3.14);
priceList.set("Cheese", 12.6);
priceList.set("Chicken Breasts", 9.40);
priceList.set("Apples", 2.31);
priceList.set("Tomato", 2.58);
priceList.set("Potato", 1.75);
priceList.set("Onion", 1.10);


// - Represent Bob's shopping list

//   | Product         | Amount |
//   | --------------- | ------ |
//   | Milk            | 3      |
//   | Rice            | 2      |
//   | Eggs            | 2      |
//   | Cheese          | 1      |
//   | Chicken Breasts | 4      |
//   | Apples          | 1      |
//   | Tomato          | 2      |
//   | Potato          | 1      |

let bobList = new Map<string, number>();


bobList.set("Milk", 3);
bobList.set("Rice", 2);
bobList.set("Eggs", 2);
bobList.set("Cheese", 1);
bobList.set("Chicken Breasts", 4);
bobList.set("Apples", 1);
bobList.set("Tomato", 2);
bobList.set("Potato", 1);


// - Represent Alice's shopping list

//   | Product         | Amount |
//   | --------------- | ------ |
//   | Rice            | 1      |
//   | Eggs            | 5      |
//   | Chicken Breasts | 2      |
//   | Apples          | 1      |
//   | Tomato          | 10     |

let aliceList = new Map<string, number>();


aliceList.set("Rice", 1);
aliceList.set("Eggs", 5);
aliceList.set("Chicken Breasts", 2);
aliceList.set("Apples", 1);
aliceList.set("Tomato", 10);


// - Create an application which solves the following problems.
//   - How much does Bob pay?

let bobBill: number = 0;

bobList.forEach((value, key) => bobBill += priceList.get(key) * value);

console.log(bobBill);

//   - How much does Alice pay?

let aliceBill: number = 0;

aliceList.forEach((value, key) => aliceBill += priceList.get(key) * value);

console.log(aliceBill);


//   - Who buys more Rice?

if (aliceList.get("Rice") > bobList.get("Rice")){
    console.log("Alice");
}
else if (aliceList.get("Rice") == bobList.get("Rice")){
    console.log("equal");
}
else {
    console.log("Bob");
}

//   - Who buys more Potato?

if (aliceList.get("Potato") > bobList.get("Potato")){
    console.log("Alice");
}
else if (aliceList.get("Potato") == bobList.get("Potato")){
    console.log("equal");
}
else {
    console.log("Bob");
}


//   - Who buys more different products?

if (aliceList.size > bobList.size){
    console.log("Alice");
}
else if (aliceList.size == bobList.size){
    console.log("equal");
}
else {
    console.log("Bob");
}

//   - Who buys more products? (piece)]

let bobListValues: number[] = Array.from(bobList.values);
let bobSum: number = 0;

bobListValues.forEach(value => bobSum += value);

let aliceListValues: number[] = Array.from(aliceList.values);
let aliceSum: number = 0;

aliceListValues.forEach(value => aliceSum += value);

if (aliceSum > bobSum){
    console.log("Alice");
}
else if (aliceSum == bobSum){
    console.log("equal");
}
else {
    console.log("Bob");
}

