'use strict';

let lineCount: number = 44;

for (let i=1; i<= lineCount; i++){
    let starString: string = "";

    for (let j=1; j <= lineCount; j++){
        let x: number = i-(lineCount+1)/2
        let y: number = j-(lineCount+1)/2

        if (lineCount % 2 == 1){

            if ((x**2 + y**2) > ((lineCount-1)/2)**2 ){
                starString += " ";
            }
            else {
                starString += "*";
            }
        }
        else{
            if ((x**2 + y**2) > ((lineCount)/2)**2 ){
                starString += " ";
            }
            else {
                starString += "*";
            }


        }
    }
    console.log(starString);
}