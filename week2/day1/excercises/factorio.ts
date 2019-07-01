// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict'

function factorio(input: number): number {
    if (input == 0) {
        return 1;
    }
    else {
        let fact: number = 1;
        for (let i = 1; i <= input; i++) {
            fact *= i;
        }
        return fact;
    }
}

console.log(factorio(3));
console.log(factorio(5));