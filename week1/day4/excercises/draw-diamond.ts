'use strict';

let lineCount: number = 15;

let lineWidth: number = lineCount;

for (let i=1; i<= lineCount; i++){
    let starString: string = "";

    for (let j=1; j <= lineWidth; j++){
        if ((i+j < lineCount / 2 +1) || (i-j > lineCount / 2)){
            starString += " ";
        }
        else if ((j-i > lineCount / 2) || i+j > lineCount *3/2 +1){
            break;
        }
        else {
            starString += "*";
        }
    }
    console.log(starString);
}