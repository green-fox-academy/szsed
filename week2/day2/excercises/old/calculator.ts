'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

let calculator = () => {

    const args = process.argv.splice(2); // Just a helper for you to get started

    console.log('Input params are', args);

    let oper: any = args[0].substr(-1);
    // added an extra character to arguments because special characters caused bugs
    let num1: any = Number(args[1]);
    let num2: any = Number(args[2]);

    console.log(oper);
    console.log(num1);
    console.log(num2);


    if (args[0].substr(0,1) != "+" || (oper != "+" && oper != "-" && oper != "*" && oper != "/" && oper != "%") ||
        (!Boolean(num1) && (num1 != 0)) ||
        (!Boolean(num2) && (num2 != 0)) || args.length != 3
        ) {
        console.log("invalid calculator parameters");
    }
    else {
        console.log(`${num1}${oper}${num2}`);
        switch (oper){
        case "+":
        console.log(num1+num2);
        break;
        case "-":
        console.log(num1-num2);
        break;
        case "*":
        console.log(num1*num2);
        break;
        case "/":
        console.log(num1/num2);
        break;
        case "%":
        console.log(num1%num2);
        break;
        default:
        console.log("Oops, somethig went wrong!")      
    }

    }

}

calculator();

export = calculator;