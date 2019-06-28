'use strict';

let lineCount: number = 15;

for (let i=1; i<= lineCount; i++){
    let starString: string = "";

    for (let j=1; j <= lineCount; j++){
        let x: number = i-(lineCount+1)/2
        let y: number = j-(lineCount+1)/2
        let xAbs: number;
        let yAbs: number;
/*         console.log(x);
        console.log(y);
        console.log(" ");
 */        
        if (x<0){
            xAbs = -x;
        }
        else{
            xAbs = x;
        }
        if (y<0){
            yAbs = -y;
        }
        else{
            yAbs = y;
        }

        if ((xAbs + yAbs) > (lineCount)/2 ){
            starString += " ";
        }
        else {
            starString += "*";
        }
    }
    console.log(starString);
}