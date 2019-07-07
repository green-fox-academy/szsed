'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// CTX translate version

let color1: string = "green";
let color2: string = "purple";

let lineDensityParameter: number = 20;

let canvasDivisionParameter: number = 3;

let widthParam: number = canvas.width / canvasDivisionParameter;
let heightParam: number = canvas.height / canvasDivisionParameter;

let drawLineAcrossTop = (startingPoint: number[], color: string) => {

    //Where are we on the grid?

    let tileX = startingPoint[0] - startingPoint[0] % widthParam;
    let tileY = startingPoint[1] - startingPoint[1] % widthParam;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startingPoint[0], startingPoint[1]);
    ctx.lineTo(widthParam + tileX, startingPoint[0] - tileX + tileY);
    ctx.stroke();

}
let drawLineAcrossBottom = (startingPoint: number[], color: string) => {

    //Where are we on the grid?

    let tileX = startingPoint[0] - startingPoint[0] % widthParam;
    let tileY = startingPoint[1] - startingPoint[1] % widthParam;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startingPoint[0], startingPoint[1]);
    ctx.lineTo(startingPoint[1] + (tileX - tileY), heightParam - startingPoint[0] + (tileY - tileX));
    ctx.stroke();

}

let drawLines = () => {
    for (let i = 1; i < lineDensityParameter; i++) {
        drawLineAcrossTop([i * canvas.width / lineDensityParameter, 0], color1);

        drawLineAcrossBottom([0, i * canvas.height / lineDensityParameter], color2);
    }
}

// 1 XP Divide the canvas into 4/16/64 equal parts and repeat the line play pattern in each quarter

let drawLines2 = () => {

    for (let j = 0; j < canvasDivisionParameter; j++) {
        for (let k = 0; k < canvasDivisionParameter; k++) {

            // looping through canvas parts j: horizontal; k: vertical

            for (let i = 1; i < lineDensityParameter; i++) {
                drawLineAcrossTop([i * widthParam / lineDensityParameter + j * widthParam, k * heightParam], color1);

                drawLineAcrossBottom([j * widthParam, i * heightParam / lineDensityParameter + k * heightParam], color2);
            }
        }
    }
}

drawLines2();
