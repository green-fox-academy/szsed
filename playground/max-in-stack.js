// I am using an Array here but only ever accessing the last element

class Stack {
  constructor() {
    this.max = null;
    this.numbersInStack = [];
  }

  getMax() { return this.max; }

  push(num) {
    if (this.numbersInStack.length === 0) { // for the first element we set the maximum to its value and store a zero
      this.max = num;
      this.numbersInStack.push(0);
    } else {
      let currentMax = this.max;
      if (num > currentMax) this.max = num;
      this.numbersInStack.push(num - currentMax);
      // we store the difference of the received input from the current max
      // which is going to be a positive number if the maximum has changed
    }
  }

  pop() {
    if (this.numbersInStack.length === 0) return null;
    let currentMax = this.max;
    let topElement = this.numbersInStack.pop();
    if (this.numbersInStack.length === 0) { // if we only had 1 element we can return with the stored max and reset
      this.max = null;
      return currentMax;
    } else if (topElement > 0) { // this condition determines whether we changed the stored max at this element
      this.max = currentMax - topElement;
      return currentMax; // if so, we can return with its value and set the stored max to the previous value
    } else {
      return topElement + this.max; // otherwise reverse encoding of received input and return
    }
  }
}

const myStack = new Stack();
console.log('should print null', myStack.getMax());

console.log('TEST PUSHES:');

myStack.push(5);
console.log('should print 5:', myStack.getMax());
myStack.push(2);
console.log('should print 5:', myStack.getMax());
myStack.push(7);
console.log('should print 7:', myStack.getMax());
myStack.push(6);
console.log('should print 7:', myStack.getMax());
myStack.push(1);
console.log('should print 7:', myStack.getMax());

console.log('TEST POPS:');

console.log('should print 1:', myStack.pop());
console.log('should print 7:', myStack.getMax());
console.log('should print 6:', myStack.pop());
console.log('should print 7:', myStack.getMax());
console.log('should print 7:', myStack.pop());
console.log('should print 5:', myStack.getMax());
console.log('should print 2:', myStack.pop());
console.log('should print 5:', myStack.getMax());
console.log('should print 5:', myStack.pop());
console.log('should print null:', myStack.getMax());

console.log('NEGATIVE NUMBERS:');

console.log('TEST PUSHES:');

myStack.push(-3);
console.log('should print -3:', myStack.getMax());
myStack.push(-1);
console.log('should print -1:', myStack.getMax());
myStack.push(-5);
console.log('should print -1:', myStack.getMax());

console.log('TEST POPS:');

console.log('should print -5:', myStack.pop());
console.log('should print -1:', myStack.getMax());
console.log('should print -1:', myStack.pop());
console.log('should print -3:', myStack.getMax());
console.log('should print -3:', myStack.pop());
console.log('should print null:', myStack.getMax());