'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// TODO: fix bottom-right area

let color: string = "green";

let lineDensityParameter = 10;

let widthParam: number = canvas.width/2;
let heightParam: number = canvas.height/2;


ctx.translate(canvas.width/2, canvas.height/2);

let drawLineRotate = (startingPoint: number[]) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startingPoint[0], startingPoint[1]);
    ctx.lineTo(0, heightParam+startingPoint[0]);
    ctx.stroke();

}

let drawLinesRotate = () => {
    for (let i=1; i < lineDensityParameter; i++){
        drawLineRotate([-widthParam+i*widthParam/lineDensityParameter, 0]);
    }

}


for (let i=0; i<4; i++){

    drawLinesRotate([0,0]);
    ctx.rotate(Math.PI/2)

}