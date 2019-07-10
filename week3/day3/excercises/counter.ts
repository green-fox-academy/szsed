// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

'use strict';

class Counter {
    count: number = 0;

    add(number: number = 1) {
        this.count += number;
    }
    get(): string {
        return String(this.count);
    }
    reset() {
        this.count = 0;
    }
}

let myCounter = new Counter();

myCounter.add(78);
myCounter.add(22);

console.log(myCounter.get());
myCounter.reset();
console.log(myCounter.get());