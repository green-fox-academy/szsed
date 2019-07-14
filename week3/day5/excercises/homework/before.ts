// # Green Fox exercise before inheritance

// ## Person

// Create a `Person` class with the following fields:
//  -  `name`: the name of the person
//  -  `age`: the age of the person (whole number)
//  -  `gender`: the gender of the person (male / female)

// And the following methods:
//  -  `introduce()`: prints out "Hi, I'm `name`, a `age` year old `gender`."
//  -  `getGoal()`: prints out "My goal is: Live for the moment!"

// And the following constructors:
//  -  `Person(name, age, gender)`
//  -  `Person()`: sets `name` to Jane Doe, `age` to 30, `gender` to female

'use strict';

class Person {
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

let myPerson = new Person();
myPerson.introduce();
myPerson.getGoal();

// ## Student

// Create a `Student` class that has the same fields and methods as the `Person` class, and has the following additional
//  -  fields:
//      -  `previousOrganization`: the name of the student’s previous company / school
//      -  `skippedDays`: the number of days skipped from the course
//  -  methods:
//      -  `getGoal()`: prints out "Be a junior software developer."
//      -  `introduce()`: "Hi, I'm `name`, a `age` year old `gender` from `previousOrganization` who skipped `skippedDays` days from the course already."
//      -  `skipDays(numberOfDays)`: increases `skippedDays` by `numberOfDays`

// The `Student` class has the following constructors:
//  -  `Student(name, age, gender, previousOrganization)`: beside the given parameters, it sets `skippedDays` to 0
//  -  `Student()`: sets `name` to Jane Doe, `age` to 30, `gender` to female, `previousOrganization` to The School of Life, `skippedDays` to 0

class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays: number;

    introduce() {
        console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    getGoal() {
        console.log("Be a junior software developer.");
    }
    skipDays(numberOfDays: number) {
        this.skippedDays += numberOfDays;
    }

    constructor(name: string = 'Jane Doe', age: number = 30, gender: boolean = false, prevOrg: string = 'The School of Life') {
        this.name = name;
        this.age = age;
        gender ? this.gender = 'male' : this.gender = 'female';
        this.previousOrganization = prevOrg;
        this.skippedDays = 0;
    }
}

let myStudent = new Student();
myStudent.introduce();
myStudent.getGoal();

// ## Mentor

// Create a `Mentor` class that has the same fields and methods as the `Person` class, and has the following additional
//  -  fields:
//      -  `level`: the level of the mentor (junior / intermediate / senior)
//  -  methods:
//      -  `getGoal()`: prints out "Educate brilliant junior software developers."
//      -  `introduce()`: "Hi, I'm `name`, a `age` year old `gender` `level` mentor."

// The `Mentor` class has the following constructors:
//  -  `Mentor(name, age, gender, level)`
//  -  `Mentor()`: sets `name` to Jane Doe, `age` to 30, `gender` to female, `level` to intermediate

class Mentor {
    name: string;
    age: number;
    gender: string;
    level: string;

    introduce() {
        console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} ${this.level} mentor.`);
    }

    getGoal() {
        console.log("Educate brilliant junior software developers.");
    }

    constructor(name: string = 'Jane Doe', age: number = 30, gender: boolean = false, level: number = 2) {
        this.name = name;
        this.age = age;
        gender ? this.gender = 'male' : this.gender = 'female';
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

let myMentor = new Mentor();
myMentor.introduce();
myMentor.getGoal();


// ## Sponsor

// Create a `Sponsor` class that has the same fields and methods as the `Person` class, and has the following additional
//  -  fields:
//      -  `company`: name of the company
//      -  `hiredStudents`: number of students hired
//  -  method:
//      -  `introduce()`: "Hi, I'm `name`, a `age` year old `gender` who represents `company` and hired `hiredStudents` students so far."
//      -  `hire()`: increase `hiredStudents` by 1
//      -  `getGoal()`: prints out "Hire brilliant junior software developers."


// The `Sponsor` class has the following constructors:
//  -  `Sponsor(name, age, gender, company)`: beside the given parameters, it sets `hiredStudents` to 0
//  -  `Sponsor()`: sets `name` to Jane Doe, `age` to 30, `gender` to female, `company` to Google and `hiredStudents` to 0

class Sponsor {
    name: string;
    age: number;
    gender: string;
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
        this.name = name;
        this.age = age;
        gender ? this.gender = 'male' : this.gender = 'female';
        this.company = company;
        this.hiredStudents = 0;
    }
}

let mySponsor = new Sponsor();
mySponsor.hire();
mySponsor.introduce();
mySponsor.getGoal();


    // ## Test input

    // ```typescript
    let people = [];
    let mark = new Person('Mark', 46, true);
    people.push(mark);
    let jane = new Person();
    people.push(jane);
    let john = new Student('John Doe', 20, true, 'BME');
    people.push(john);
    let student = new Student();
    people.push(student);
    let gandhi = new Mentor('Gandhi', 148, true, 3);
    people.push(gandhi);
    let mentor = new Mentor();
    people.push(mentor);
    let sponsor = new Sponsor();
    let elon = new Sponsor('Elon Musk', 46, true, 'SpaceX');
    people.push(elon);

    student.skipDays(3);

    for (let i = 0; i < 6; i++) {
      elon.hire();
    }

    for (let i = 0; i < 4; i++) {
      sponsor.hire();
    }

    for (let person of people) {
      person.introduce();
      person.getGoal();
    }
    // ```

    // ## Test input

    // ```
    // Hi, I'm Mark, a 46 year old male.
    // My goal is: Live for the moment.
    // Hi, I'm Jane Doe, a 30 year old female.
    // My goal is: Live for the moment.
    // Hi, I'm John Doe, a 20 year old male from BME who skipped 0 days from the course already.
    // My goal is: Be a junior software developer.
    // Hi, I'm Jane Doe, a 30 year old female from The School of Life who skipped 3 days from the course already.
    // My goal is: Be a junior software developer.
    // Hi, I'm Gandhi, a 148 year old male senior mentor.
    // My goal is: Educate brilliant junior software developers.
    // Hi, I'm Jane Doe, a 30 year old female intermediate mentor.
    // My goal is: Educate brilliant junior software developers.
    // Hi, I'm Jane Doe, a 30 year old female who represents Google and hired 4 students so far.
    // My goal is: Hire brilliant junior software developers.
    // Hi, I'm Elon Musk, a 46 year old male who represents SpaceX and hired 6 students so far.
    // My goal is: Hire brilliant junior software developers.
    // ```
