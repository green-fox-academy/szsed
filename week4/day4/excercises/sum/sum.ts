// Sum
// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list

'use strict';

export default class NumberAdder {
    numberList: number[];

    getSum(): number {
        console.log(this.numberList);
        console.log(this.numberList == []);
        if (this.numberList == [] || this.numberList == undefined){
            return undefined;
        }
        let sum: number = 0;
        for (let i = 0; i < this.numberList.length; i++) {
            sum += this.numberList[i];
        }
        return sum;
    }
}