'use strict'

// # List introduction 2

// - Create a list ('`List A`') which contains the following values
//   ```text
//   Apple, Avocado, Blueberries, Durian, Lychee
//   ```

let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

// - Create a new list ('`List B`') with the values of `List A`

let listB: string[] = [...listA];

// - Print out whether `List A` contains Durian or not

console.log(listA.indexOf("Durian") >= 0);

// - Remove Durian from `List B`

listB.splice(listB.indexOf("Durian"), 1);

console.log(listB);

// - Add Kiwifruit to `List A` after the 4th element

listA.splice(4, 0, "Kiwifruit");

console.log(listA);


// - Compare the size of `List A` and `List B`

if (listA.length > listB.length){

    console.log("A is longer");
}
else if (listA.length = listB.length){

    console.log("equal length");

}
else {

    console.log("B is longer");
}
// - Get the index of Avocado from `List A`

console.log(listA.indexOf("Avocado"));

// - Get the index of Durian from `List B`

console.log(listB.indexOf("Durian"));

// - Add Passion Fruit and Pomelo to `List B` in a single statement
listB.push("Passion Fruit", "Pomelo");

console.log(listB);

// - Print out the 3rd element from `List A`

console.log(listA[2]);