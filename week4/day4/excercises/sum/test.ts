// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empyt list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

'use strict';

import test from 'tape';
import NumberAdder from './sum';

test((t: any) => {
    let testNumberAdder = new NumberAdder();
    t.equals(testNumberAdder.getSum(), undefined);
    testNumberAdder.numberList = [3, 4, 5];
    t.equals(testNumberAdder.getSum(), 12);
    testNumberAdder.numberList = [5];
    t.equals(testNumberAdder.getSum(), 5);
    testNumberAdder.numberList = [];
    t.equals(testNumberAdder.getSum(), undefined);
    t.end();
});


