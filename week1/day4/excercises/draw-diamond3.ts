'use strict';

let lineCount: number = 7;

let lineWidth: number = lineCount * 2 - 1;

for (let i=1; i<= lineCount; i++){
    let starString: string = "";

    for (let j=1; j <= lineWidth; j++){
        if (i+j < lineCount +1){
            starString += " ";
        }
        else if (j-i > lineCount -1){
            break;
        }
        else {
            starString += "*";
        }
    }
    console.log(starString);
}

for (let i=2; i<= lineCount; i++){
    let starString: string = "";

    for (let j=1; j <= lineWidth; j++){
        if (i-j > 0){
            starString += " ";
        }
        else if (i+j > lineWidth +1){
            break;
        }
        else {
            starString += "*";
        }

    }
    console.log(starString);
}