'use strict'

let numbers: number[] = [];

let avg = (nums: number[]): number => {

    if (nums.length === 0) {

        throw Error('empty array');

    }

    let sum: number = 0;

    // avg function bla bla bla

    return sum;


}

try {
    avg(numbers);

}
catch (e) {

    console.log(e);
}