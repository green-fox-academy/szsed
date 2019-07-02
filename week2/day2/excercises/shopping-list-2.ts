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

bobList.forEach((value, key) => {
    if (priceList.get(key)){
    bobBill += priceList.get(key) * value;
    }
});

//   - How much does Alice pay?
//   - Who buys more Rice?
//   - Who buys more Potato?
//   - Who buys more different products?
//   - Who buys more products? (piece)]