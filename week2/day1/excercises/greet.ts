// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

'use strict'

let nameToGreet:  string = "Green Fox";

function greet(input){
    console.log("Greetings, dear", input);
}

greet(nameToGreet);