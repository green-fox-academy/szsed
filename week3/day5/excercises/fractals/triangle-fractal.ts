// Project Exercises
// Draw fractals with recursive functions.

// Acceptance criteria
// Create and use classes (eg. Triangle, Circle, Line) with methods (eg. draw function with coordinates as parameters)
// Experience points
// Each fractal has a certain amount of experience points (XP) that can be earned by completing it
// To level up and journey safely to the next week's challenges make sure you earn at least 2 XP
// Tip: Copy the corresponding boilerplate from the drawing workshop.
// Tip: Go with 4 XP if you're on insane difficulty setting.
// Bonus XPs
// make it multi-color for 1 XP
// make the sizes slightly change randomly for 1 XP
// make it animate for 4 XPs
// What is a fractal?
// A fractal is a mathematical set that exhibits a repeating pattern displayed at every scale. 
// It is also known as expanding symmetry or evolving symmetry. [for more detail check Fractal on Wikipedia]

'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const bigTriangleSide: number = canvas.width;
const bigTriangleTopLeft: [number, number] = [0, 0];

class Triangle {
    side: number;
    topLeft: [number, number];

    constructor(side: number, topLeft: [number, number]){
        this.side = side;
        this.topLeft = topLeft;

    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.topLeft[0], this.topLeft[1]);
        ctx.lineTo(this.topLeft[0] + this.side, this.topLeft[1]);
        ctx.lineTo(this.topLeft[0] + this.side/2, this.topLeft[1] + this.side * 3 ** 0.5 / 2);
        ctx.closePath();
        ctx.stroke();
    
    }

}

let myBigTriangle = new Triangle(bigTriangleSide, bigTriangleTopLeft);
myBigTriangle.draw();