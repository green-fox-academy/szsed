// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict'

let animals: string[] = ["koal", "pand", "zebr"];

console.log(animals.map((value) => {
    return value += "a"; 
})
);

animals.forEach((value, index )=> animals[index] += "a");

console.log(animals);

animals.forEach(function(value, index){

    animals[index] += "a";
})

console.log(animals);