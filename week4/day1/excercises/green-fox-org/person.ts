// # Green Fox inheritance exercise

// ## Person

// Create a `Person` class with the following fields:
//  -  `name`: the name of the person
//  -  `age`: the age of the person (integer number)
//  -  `gender`: the gender of the person (male / female)

// And the following methods:
//  -  `introduce()`: prints out 'Hi, I'm `name`, a `age` year old `gender`.'
//  -  `getGoal()`: prints out 'My goal is: Live for the moment!'

// And the following constructors:
//  -  `Person(name, age, gender)`
//  -  `Person()`: sets `name` to Jane Doe, `age` to 30, `gender` to female

'use strict';

export default class Person {
    name: string;
    age: number;
    gender: string;

    introduce() {
        console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender}`);
    }

    getGoal() {
        console.log("My goal is: Live for the moment!");
    }

    constructor(name: string = 'Jane Doe', age: number = 30, gender: boolean = false) {
        this.name = name;
        this.age = age;
        gender ? this.gender = 'male' : this.gender = 'female';
    }
}

