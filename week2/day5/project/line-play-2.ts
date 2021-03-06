'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// CTX translate version

let color1: string = "green";
let color2: string = "purple";

let lineDensityParameter: number = 20;

let canvasDivisionParameter: number = 8;

let widthParam: number = canvas.width / canvasDivisionParameter;
let heightParam: number = canvas.height / canvasDivisionParameter;

let drawLineAcrossTop = (startingPoint: number[], color: string) => {

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startingPoint[0], startingPoint[1]);
    ctx.lineTo(widthParam, startingPoint[0]);
    ctx.stroke();

}
let drawLineAcrossBottom = (startingPoint: number[], color: string) => {

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startingPoint[0], startingPoint[1]);
    ctx.lineTo(startingPoint[1], heightParam - startingPoint[0]);
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

            ctx.translate(j*widthParam, k* heightParam);

            for (let i = 1; i < lineDensityParameter; i++) {
                drawLineAcrossTop([i * widthParam / lineDensityParameter, 0], color1);

                drawLineAcrossBottom([0, i * heightParam / lineDensityParameter], color2);
            }

            ctx.translate(-j*widthParam,-k* heightParam);
        }
    }
}

drawLines2();
