let obj = {}

let mySym = Symbol('hello')

obj['a'] = 'cica';
obj[mySym] = 'kutya';

console.log(obj)
console.log(Object.keys(obj))
console.log(Object.getOwnPropertySymbols(obj))
