'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i=1; i<= lineCount; i++){
    let percentString: string = "";

    for (let j=1; j <= lineCount; j++){
        if (i == 1 || i == lineCount){
            percentString += "%";
        }
        else {
            if (j == 1 || j == lineCount){
            percentString += "%";
            }
            else {
                percentString += " ";
            }
        }
    }
    console.log(percentString);
}