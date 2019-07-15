// ## Sponsor

// Create a `Sponsor` class that has the same fields and methods as the `Person` class, and has the following additional
//  -  fields:
//      -  `company`: name of the company
//      -  `hiredStudents`: number of students hired
//  -  method:
//      -  `introduce()`: 'Hi, I'm `name`, a `age` year old `gender` who represents `company` and hired `hiredStudents` students so far.'
//      -  `hire()`: increase `hiredStudents` by 1
//      -  `getGoal()`: prints out 'My goal is: Hire brilliant junior software developers.'

// The `Sponsor` class has the following constructors:
//  -  `Sponsor(name, age, gender, company)`: beside the given parameters, it sets `hiredStudents` to 0
//  -  `Sponsor()`: sets `name` to Jane Doe, `age` to 30, `gender` to female, `company` to Google and `hiredStudents` to 0

'use strict';

import Person from './person'

export default class Sponsor extends Person{
    company: string;
    hiredStudents: number;

    introduce() {
        console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} student(s) so far.`);
    }

    getGoal() {
        console.log("Hire brilliant junior software developers.");
    }

    hire() {
        this.hiredStudents++;
    }

    constructor(name: string = 'Jane Doe', age: number = 30, gender: boolean = false, company: string = 'Google') {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = 0;
    }
}
