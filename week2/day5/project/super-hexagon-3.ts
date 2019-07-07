'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayers: number = 5;
const hexagonSideSize: number = 20;
const triangleHeight: number = (3 ** 0.5) / 2 * hexagonSideSize;
const centerCoord: number[] = [0, 0];
const startCoord: number[] = [centerCoord[0] - hexagonSideSize/2, centerCoord[1] - (2*numberOfLayers-1)*triangleHeight]
ctx.translate(canvas.width / 2, canvas.height / 2);

let drawHexagon = (topLeftCoords: number[]) => {

    let topRightCoords: number[] = [topLeftCoords[0] + hexagonSideSize, topLeftCoords[1]];
    let RightCoords: number[] = [topLeftCoords[0] + hexagonSideSize * 3/2, topLeftCoords[1] + triangleHeight];
    let bottomRightCoords: number[] = [topLeftCoords[0] + hexagonSideSize, topLeftCoords[1] + triangleHeight * 2];
    let bottomLeftCoords: number[] = [topLeftCoords[0], topLeftCoords[1] + triangleHeight * 2];
    let LeftCoords: number[] = [topLeftCoords[0] - hexagonSideSize / 2, topLeftCoords[1] + triangleHeight];

    ctx.beginPath();
    ctx.moveTo(topLeftCoords[0], topLeftCoords[1]);
    ctx.lineTo(topRightCoords[0], topRightCoords[1]);
    ctx.lineTo(RightCoords[0], RightCoords[1]);
    ctx.lineTo(bottomRightCoords[0], bottomRightCoords[1]);
    ctx.lineTo(bottomLeftCoords[0], bottomLeftCoords[1]);
    ctx.lineTo(LeftCoords[0], LeftCoords[1]);
    ctx.closePath();
    ctx.stroke();

}

drawHexagon(startCoord);

let drawHexagonLayers = () => {

for (let i = 0; i < numberOfLayers * 2 - 1 ; i++){

    
}

}

// drawHexagonLayers();