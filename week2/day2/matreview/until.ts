'use strict'

let list: number[] = [1, 3, 5, 1, 5];

let listWithCubes: number[] = list.map((value) => value ** 3);

console.log(listWithCubes);

function cubeNumbers(numbers: number[]): number[] {
    let listOfCube: number[] = numbers.map((value) => value ** 3);
    return listOfCube;
}
console.log(cubeNumbers(list));