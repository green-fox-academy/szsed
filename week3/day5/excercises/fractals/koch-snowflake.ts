'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// import { calcAllParams, drawKochLine } from './koch-line';

const numberOfLayersKDiamond: number = 5;
const startSize: number = canvas.width * 4 / 6;
const startCoordsKDiamond1: [number, number] = [canvas.width / 6, canvas.height * 2 / 6];
const startCoordsKDiamond2: [number, number] = [canvas.width * 5 / 6, canvas.height * 2 / 6];
const startCoordsKDiamond3: [number, number] = [canvas.width / 2, canvas.height * 2 / 6 + startSize * 3 ** 0.5 / 2];
const endCoordsKDiamond: [number, number] = startCoordsKDiamond1;
const sixtyDegs: number = Math.PI / 3;
const startAngle1: number = 0;
const startAngle2: number = sixtyDegs * 2;
const startAngle3: number = -sixtyDegs * 2;
const startParamsKDiamond1: [[number, number], number, number] = [startCoordsKDiamond1, startAngle1, startSize];
const startParamsKDiamond2: [[number, number], number, number] = [startCoordsKDiamond2, startAngle2, startSize];
const startParamsKDiamond3: [[number, number], number, number] = [startCoordsKDiamond3, startAngle3, startSize];

let paramsArr: [[number, number], number, number][] = [];

let calcNextLayerParams = (inputParams: [[number, number], number, number]): [[number, number], number, number][] => {
    let inputCoords: [number, number] = inputParams[0];
    let inputAngle: number = inputParams[1];
    let inputSize: number = inputParams[2];
    let output: [[number, number], number, number][] = []
    output.push([inputCoords, inputAngle, inputSize / 3]);
    output.push([[inputCoords[0] + inputSize / 3 * Math.cos(inputAngle), inputCoords[1] + inputSize / 3 * Math.sin(inputAngle)], inputAngle - sixtyDegs, inputSize / 3]);
    output.push([[inputCoords[0] + inputSize / 3 * Math.cos(inputAngle) + inputSize / 3 * Math.cos(inputAngle - sixtyDegs), inputCoords[1] + inputSize / 3 * Math.sin(inputAngle) + inputSize / 3 * Math.sin(inputAngle - sixtyDegs)], inputAngle + sixtyDegs, inputSize / 3]);
    output.push([[inputCoords[0] + inputSize / 3 * Math.cos(inputAngle) * 2, inputCoords[1] + inputSize / 3 * Math.sin(inputAngle) * 2], inputAngle, inputSize / 3]);
    return output;
}

let calcAllParams = (layers: number, params: [[number, number], number, number]) => {
    if (layers > 0) {
        calcNextLayerParams(params).forEach(element => {
            paramsArr.push(element);
            calcAllParams(layers - 1, element)
        });
    }
}


let drawKochLine = (coords: [number, number][], endcoords: [number, number]): void => {

    ctx.beginPath();
    ctx.moveTo(coords[0][0], coords[0][1]);

    for (let i: number = 1; i < coords.length; i++) {
        ctx.lineTo(coords[i][0], coords[i][1]);
    }

    ctx.lineTo(endcoords[0], endcoords[1]);

    ctx.stroke();
}


calcAllParams(numberOfLayersKDiamond, startParamsKDiamond1);
calcAllParams(numberOfLayersKDiamond, startParamsKDiamond2);
calcAllParams(numberOfLayersKDiamond, startParamsKDiamond3);

let coords: [number, number][] = [];
paramsArr.forEach(element => coords.push(element[0]));

drawKochLine(coords, endCoordsKDiamond);
