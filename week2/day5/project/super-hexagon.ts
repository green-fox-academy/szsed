'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let numberOfLayers: number = 1;
let hexagonSideSize: number = 20;
let triangleHeight: number = (3**0.5)/2* hexagonSideSize;
let centerCoord: number[] = [canvas.width/2, canvas.height/2];

let CalculateHexagonCoordinates = (centerCoordInner: number[]): number[][] =>{
    let hexCoords:number[][] = [];

    // from top clockwise

    hexCoords[0] = [];
    hexCoords[0][0] = centerCoordInner[0];
    hexCoords[0][1] = centerCoordInner[1]-hexagonSideSize;

    hexCoords[1] = [];
    hexCoords[1][0] = centerCoordInner[0]+triangleHeight;
    hexCoords[1][1] = centerCoordInner[1]-hexagonSideSize/2;

    hexCoords[2] = [];
    hexCoords[2][0] = centerCoordInner[0]+triangleHeight;
    hexCoords[2][1] = centerCoordInner[1]+hexagonSideSize/2;

    hexCoords[3] = [];
    hexCoords[3][0] = centerCoordInner[0];
    hexCoords[3][1] = centerCoordInner[1]+hexagonSideSize;

    hexCoords[4] = []
    hexCoords[4][0] = centerCoordInner[0]-triangleHeight;
    hexCoords[4][1] = centerCoordInner[1]+hexagonSideSize/2;

    hexCoords[5] = [];
    hexCoords[5][0] = centerCoordInner[0]-triangleHeight;
    hexCoords[5][1] = centerCoordInner[1]-hexagonSideSize/2;




    return hexCoords;
}