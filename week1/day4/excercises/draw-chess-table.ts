// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

'use strict';

let lineCount: number = 8;

for (let i=1; i<= lineCount; i++){
    let percentString: string = "";

    for (let j=1; j <= lineCount; j++){
        if ((i+j) % 2 == 0){
            percentString += "%";
        }

        else {
            percentString += " ";
        }
        
    }
    console.log(percentString);
}