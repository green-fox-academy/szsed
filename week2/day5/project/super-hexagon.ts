'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let numberOfLayers: number = 5;
let hexagonSideSize: number = 20;
let triangleHeight: number = (3**0.5)/2* hexagonSideSize;
let centerCoord: number[] = [0,0];
ctx.translate(canvas.width/2, canvas.height/2);

let CalculateHexagonCoordinates = (centerCoordInner: number[]): number[][] =>{
    let hexCoords:number[][] = [];

    // from top clockwise

    hexCoords[0] = [];
    hexCoords[0][0] = centerCoordInner[0];
    hexCoords[0][1] = centerCoordInner[1]-hexagonSideSize;

    hexCoords[1] = [];
    hexCoords[1][0] = centerCoordInner[0]+triangleHeight;
    hexCoords[1][1] = centerCoordInner[1]-hexagonSideSize/2;

    hexCoords[2] = [];
    hexCoords[2][0] = centerCoordInner[0]+triangleHeight;
    hexCoords[2][1] = centerCoordInner[1]+hexagonSideSize/2;

    hexCoords[3] = [];
    hexCoords[3][0] = centerCoordInner[0];
    hexCoords[3][1] = centerCoordInner[1]+hexagonSideSize;

    hexCoords[4] = []
    hexCoords[4][0] = centerCoordInner[0]-triangleHeight;
    hexCoords[4][1] = centerCoordInner[1]+hexagonSideSize/2;

    hexCoords[5] = [];
    hexCoords[5][0] = centerCoordInner[0]-triangleHeight;
    hexCoords[5][1] = centerCoordInner[1]-hexagonSideSize/2;

    return hexCoords;
}

let drawHexagon = (hexCoords: number [][]) => {

    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(hexCoords[0][0], hexCoords[0][1]);

    for (let i=1; i<6; i++){
        ctx.lineTo(hexCoords[i][0], hexCoords[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
}

// drawHexagon(CalculateHexagonCoordinates(centerCoord));

// console.log(CalculateHexagonCoordinates(centerCoord));

let drawHexagonLayers = () => {

    let allCenterCoordinates: number[][] = [];
    allCenterCoordinates[0] = centerCoord;

    console.log(allCenterCoordinates.length);

    // looping through layers

    for (let i=0; i< numberOfLayers; i++) {

        // looping through actual center coordinates array

        for (let j=allCenterCoordinates.length; j > 0; j--){

            // calculate new coordinates

            let loopHexCoords: number[][] =CalculateHexagonCoordinates(allCenterCoordinates[j-1]);

            // update array with new center coordinate values

            for (let k = 0; k < 6; k++){

                allCenterCoordinates.push(loopHexCoords[k]);

            }

        }


    }

    for (let i=0; i< allCenterCoordinates.length; i++)
    {
        drawHexagon(CalculateHexagonCoordinates(allCenterCoordinates[i]))
    }
}

drawHexagonLayers();