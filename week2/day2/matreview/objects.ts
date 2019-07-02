'use strict';

export{};

let person: any = {

    name: 'John',
    age: 21,
    friends: [],
    greeting: function() {
        console.log('Hi my name is John ;)');
    }

};

person.greeting();

console.log(Object.keys(person));

// .values is in ECMAScript 2017

//returns boolean, does the property exist?

console.log(person.hasOwnProperty('name'));

// shallow copy: creates a reference to the original

let copyWithRef = person;

// changes carry over, in both directions

person.name= "new Name";

console.log(copyWithRef.name);

copyWithRef.age = 24;

console.log(person.age);

// for copy without reference, need to destructure the object with spread operator

let copyAsNew = {...person};

copyAsNew.age = 45;

console.log(person.age);
