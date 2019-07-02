'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

function reverse(input: string): string{
    let output:string ="";
    // console.log(output);
    for (let i=0; i<input.length; i++){
        output += input[input.length-i-1];
        // console.log(output);
    }
    return output;

}

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reverse(reversed));

export = reverse;