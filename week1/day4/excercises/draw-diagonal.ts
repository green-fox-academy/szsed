'use strict';

let lineCount: number = 6;

for (let i=1; i<= lineCount; i++){
    let percentString: string = "";

    for (let j=1; j <= lineCount; j++){
        if (i == 1 || i == lineCount){
            percentString += "%";
        }
        else {
            if (j == 1 || j == lineCount || i == j){
                percentString += "%";
            }
            else {
                percentString += " ";
            }
        }
    }
    console.log(percentString);
}