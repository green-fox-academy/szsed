'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(110, 110, 100, 100);

ctx.strokeStyle = 'rgb(0,255,255)';
ctx.strokeRect(200, 200, 200, 100);

ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(300, 200);
ctx.lineTo(350, 300);
// ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(50, 50, 50, 0, Math.PI*2);
ctx.stroke();

for (let i = 0; i < 10; i++) {
    ctx.fillRect(i*10, i*10, 50, 50);
}

function drawSquare(x:number, y:number, size:number, color: string){
    ctx.fillStyle = "brown";
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}
drawSquare(250, 350, 50, "");
drawSquare(200, 300, 50, "purple");