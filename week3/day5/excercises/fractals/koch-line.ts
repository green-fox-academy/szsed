'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const numberOfLayersKoch: number = 3;
const startCoordsKoch: [number, number] = [0, canvas.height / 2];
const EndCoordsKoch: [number, number] = [canvas.width, canvas.height / 2];
const startAngle: number = 0;
const startSize: number = canvas.width;
const startParamsKoch: [[number, number], number, number] = [startCoordsKoch, startAngle, startSize];
const sixtyDegs: number = Math.PI / 3;

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

let calcAllParams = (layers: number, params: [[number, number], number, number]){
    if (layers > 0) {
        calcNextLayerParams(params).forEach(element => {
            paramsArr.push(element);
            calcAllParams(layers - 1, element)
        });
    }
}

calcAllParams(numberOfLayersKoch, startParamsKoch);
let coords: [number, number][] = [];
paramsArr.forEach(element => coords.push(element[0]));
console.log(coords.length);


let drawKochLine = (coords: [number, number][]): void => {

    ctx.beginPath();
    ctx.moveTo(coords[0][0], coords[0][1]);

    for (let i: number = 1; i < coords.length; i++) {
        ctx.lineTo(coords[i][0], coords[i][1]);
    }

    ctx.lineTo(EndCoordsKoch[0], EndCoordsKoch[1]);

    ctx.stroke();
}


drawKochLine(coords);
