'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// TODO: duplicate filter doesn't work

let numberOfLayers: number = 6;
let hexagonSideSize: number = 20;
let triangleHeight: number = (3 ** 0.5) / 2 * hexagonSideSize;
let centerCoord: number[] = [0, 0];
ctx.translate(canvas.width / 2, canvas.height / 2);

let CalculateHexagonCoordinates = (centerCoordInner: number[], distanceParam: number, rotationParam: number): number[][] => {
    let hexCoords: number[][] = [];

    // from top clockwise

    if (rotationParam == 0) {
        hexCoords[0] = [];
        hexCoords[0][0] = centerCoordInner[0] - hexagonSideSize / 2 * distanceParam;
        hexCoords[0][1] = centerCoordInner[1] - triangleHeight * distanceParam;

        hexCoords[1] = [];
        hexCoords[1][0] = centerCoordInner[0] + hexagonSideSize / 2 * distanceParam;
        hexCoords[1][1] = centerCoordInner[1] - triangleHeight * distanceParam;

        hexCoords[2] = [];
        hexCoords[2][0] = centerCoordInner[0] + hexagonSideSize * distanceParam;
        hexCoords[2][1] = centerCoordInner[1];

        hexCoords[3] = [];
        hexCoords[3][0] = centerCoordInner[0] + hexagonSideSize / 2 * distanceParam;
        hexCoords[3][1] = centerCoordInner[1] + triangleHeight * distanceParam;

        hexCoords[4] = []
        hexCoords[4][0] = centerCoordInner[0] - hexagonSideSize / 2 * distanceParam;
        hexCoords[4][1] = centerCoordInner[1] + triangleHeight * distanceParam;

        hexCoords[5] = [];
        hexCoords[5][0] = centerCoordInner[0] - hexagonSideSize * distanceParam;
        hexCoords[5][1] = centerCoordInner[1];



    }
    else if (rotationParam == 1) {
        hexCoords[0] = [];
        hexCoords[0][0] = centerCoordInner[0];
        hexCoords[0][1] = centerCoordInner[1] - hexagonSideSize * distanceParam;

        hexCoords[1] = [];
        hexCoords[1][0] = centerCoordInner[0] + triangleHeight * distanceParam;
        hexCoords[1][1] = centerCoordInner[1] - hexagonSideSize / 2 * distanceParam;

        hexCoords[2] = [];
        hexCoords[2][0] = centerCoordInner[0] + triangleHeight * distanceParam;
        hexCoords[2][1] = centerCoordInner[1] + hexagonSideSize / 2 * distanceParam;

        hexCoords[3] = [];
        hexCoords[3][0] = centerCoordInner[0];
        hexCoords[3][1] = centerCoordInner[1] + hexagonSideSize * distanceParam;

        hexCoords[4] = []
        hexCoords[4][0] = centerCoordInner[0] - triangleHeight * distanceParam;
        hexCoords[4][1] = centerCoordInner[1] + hexagonSideSize / 2 * distanceParam;

        hexCoords[5] = [];
        hexCoords[5][0] = centerCoordInner[0] - triangleHeight * distanceParam;
        hexCoords[5][1] = centerCoordInner[1] - hexagonSideSize / 2 * distanceParam;
    }
    else {
        console.log("invalid rotation parameter");
    }
    return hexCoords;
}

let drawHexagon = (hexCoords: number[][]) => {

    ctx.beginPath();
    ctx.moveTo(hexCoords[0][0], hexCoords[0][1]);
    for (let i = 1; i < 6; i++) {
        ctx.lineTo(hexCoords[i][0], hexCoords[i][1]);
    }
    ctx.closePath();
    ctx.stroke();

}

let drawHexagonLayers = () => {

    let allCenterCoordinates: number[][] = [];
    allCenterCoordinates[0] = centerCoord;

    // looping through layers

    for (let i = 0; i < numberOfLayers - 1; i++) {

        // looping through actual center coordinates array

        for (let j = allCenterCoordinates.length; j > 0; j--) {

            // calculate new coordinates

            let loopHexCoords: number[][] = CalculateHexagonCoordinates(allCenterCoordinates[j - 1], 3 ** 0.5, 1);

            // update array with new center coordinate values

            for (let k = 0; k < 6; k++) {

                allCenterCoordinates.push(loopHexCoords[k]);

            }

            //filter duplicates
            allCenterCoordinates = allCenterCoordinates.map((arr:number[]) => JSON.stringify(arr)).filter((value: string, index: number, arr: string[]) => arr.indexOf(value) == index).map((arr) => JSON.parse(arr));

        }


    }
    console.log(allCenterCoordinates);

    for (let i = 0; i < allCenterCoordinates.length; i++) {
        drawHexagon(CalculateHexagonCoordinates(allCenterCoordinates[i], 1, 0));
    }
}

drawHexagonLayers();

// ctx.strokeStyle = 'red';

// drawHexagon(CalculateHexagonCoordinates(centerCoord, 1, 0));

// let redcenters = CalculateHexagonCoordinates(centerCoord, 3 ** 0.5, 1);

// for (let i = 0; i < redcenters.length; i++) {
//     drawHexagon(CalculateHexagonCoordinates(redcenters[i], 3 ** 0.5, 1));
// }
