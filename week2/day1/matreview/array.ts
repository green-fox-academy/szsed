'use strict';

let cutePuppy: string[] = ["Morzsi", "Liza", "Furkesz"];

console.log(cutePuppy[0]);
console.log(cutePuppy);

cutePuppy.forEach(function (item) {
    console.log(item);
})
cutePuppy.forEach((item) =>
    console.log(item))

for (let i = 0; i < cutePuppy.length; i++) {
    console.log(cutePuppy[i]);
}

let diffArray: any[] = [true, false, 1, "Mazli"];

console.log(diffArray);

let diffArray2: Array<string | number> = ["Hello", 2, 3];

console.log(diffArray2);

console.log(diffArray.splice(0, 1, "Rambo"));

console.log(diffArray);

let doubled: number[] = [1, 2, 3, 4, 5].map(function (i) {
    return i * 2;
})

console.log(doubled);

let odds: number[] = [1, 2, 3, 4, 5].filter(function (item) {
    return item % 2 !== 0;
})

console.log(odds);

let magic: number[] = [];

console.log(magic[-100]);

let doubled2: number[] = [1, 2, 3, 4, 5].map(function (i) {
    if (i % 2 === 0) {
        return i * 2;
    }
})
    .filter(function (item) {
        return item !== undefined;
    });

console.log(doubled2);

let arry1: number[] = [1, 2];
let arry2: number[] = [3, 4];

let arry3: any[] = [arry1, arry2];
let arry4: number[] = [...arry1, ...arry2];

console.log(arry3);
console.log(arry4);
