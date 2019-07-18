'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayersKoch: number = 3;
const startCoords: [[number, number],[number, number]] = [[0, canvas.width / 2], [canvas.width, canvas.width / 2]];

let calcNextLayerCoords = (inputCoords: [number, number][], inputSize: number): [number, number][] => {
    let output: [number, number][] = [];
    output.push([inputCoord[0], inputCoord[1]]);
    output.push([inputCoord[0] + inputSize / 2, inputCoord[1]]);
    output.push([inputCoord[0] + inputSize / 4, inputCoord[1] + inputSize * 3 ** 0.5 / 4]);
    return output;
}

let drawKochLine = (startCoord: [[number, number],[number, number]], layers: number): void => {

    // console.log('Center coordinate:', startCoord, 'Layers:', layers, 'Size:', size);

    if (layers > 0) {
        ctx.beginPath();
        ctx.moveTo(startCoord[0], startCoord[1]);
        ctx.lineTo(startCoord[0] + size, startCoord[1]);
        ctx.lineTo(startCoord[0] + size / 2, startCoord[1] + size * 3 ** 0.5 / 2);
        ctx.closePath();
        ctx.stroke();
        calcNextToplefts(startCoord, size).forEach((element) => drawTriangleFractal(element, layers - 1, size / 2));
    }
}

drawTriangleFractal(startCoordTriangles, numberOfLayersTriangles, triangleSize);