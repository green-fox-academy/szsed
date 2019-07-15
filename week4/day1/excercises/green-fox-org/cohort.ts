// ## Cohort

// Create a `Cohort` class that has the following
//  -  fields:
//      -  `name`: the name of the cohort
//      -  `students`: a list of `Student`s
//      -  `mentors`: a list of `Mentor`s
//  -  methods:
//      -  `addStudent(Student)`: adds the given `Student` to `students` list
//      -  `addMentor(Mentor)`: adds the given `Mentor` to `mentors` list
//      -  `info()`: prints out 'The `name` cohort has `students.size` students and `mentors.size` mentors.'

// The `Cohort` class has the following constructors:
//  -  `Cohort(name)`: beside the given parameter, it sets `students` and `mentors` as empty lists

'use strict';

import Student from './student';
import Mentor from './mentor';

export default class Cohort{
    name: string;
    students: Student[];
    mentors: Mentor[];

    addStudent(student: Student){
        this.students.push(student);
    }
    
    addMentor(mentor: Mentor){
        this.mentors.push(mentor);

    }

    info(){
        console.log(`Cohort name: ${this.name}.`);
        console.log(`number of students: ${this.students.length}.`);
        console.log(`number of mentors: ${this.mentors.length}.`);
    }

    constructor(name: string){
        this.name = name;
        this.students = [];
        this.mentors = [];
    }
}