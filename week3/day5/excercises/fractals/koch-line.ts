'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayersKoch: number = 3;
const startCoordsKoch: [[number, number], [number, number]] = [[0, canvas.height / 2], [canvas.width, canvas.height / 2]];

let coords: [[number, number], [number, number]] = [];


let calcNextLayerCoords = (inputCoords: [number, number][]): [number, number][] => {
    let inputSize: number = Math.sqrt(Math.pow((inputCoords[0][0] - inputCoords[1][0]), 2));
    let output: [number, number][] = [];
    output.push([inputCoords[0][0] + inputSize / 3, inputCoords[0][1]]);
    output.push([inputCoords[0][0] + inputSize / 2, inputCoords[0][1] - inputSize * 3 ** 0.5 / 6]);
    output.push([inputCoords[0][0] + inputSize * 2 / 3, inputCoords[0][1]]);
    return output;
}

let drawKochLine = (coords: [[number, number], [number, number]]): void => {

    ctx.beginPath();
    ctx.moveTo(coords[0][0], coords[0][1]);

    for (let i: number = 1; i < coords.length; i++) {
        ctx.lineTo(coords[i][0], coords[i][1]);
    }

    ctx.stroke();
}


// drawKochLine(startCoordsKoch, numberOfLayersKoch);

coords.push(startCoordsKoch[0]);
console.log(calcNextLayerCoords(startCoordsKoch));
calcNextLayerCoords(startCoordsKoch).forEach(element => coords.push(element));
coords.push(startCoordsKoch[1]);

drawKochLine(coords);