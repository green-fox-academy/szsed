// ## Mentor

// Create a `Mentor` class that has the same fields and methods as the `Person` class, and has the following additional
//  -  fields:
//      -  `level`: the level of the mentor (junior / intermediate / senior)
//  -  methods:
//      -  `getGoal()`: prints out 'My goal is: Educate brilliant junior software developers.'
//      -  `introduce()`: 'Hi, I'm `name`, a `age` year old `gender` `level` mentor.'

// The `Mentor` class has the following constructors:
//  -  `Mentor(name, age, gender, level)`
//  -  `Mentor()`: sets `name` to Jane Doe, `age` to 30, `gender` to female, `level` to intermediate

'use strict';

import Person from './person'

export default class Mentor extends Person {
    level: string;

    introduce() {
        console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} ${this.level} mentor.`);
    }

    getGoal() {
        console.log("Educate brilliant junior software developers.");
    }

    constructor(name: string = 'Jane Doe', age: number = 30, gender: boolean = false, level: number = 2) {
        super(name, age, gender);
        switch (level) {
            case 1:
                this.level = 'junior';
                break;
            case 2:
                this.level = 'intermediate';
                break;
            case 3:
                this.level = 'senior';
                break;
        }
    }
}
