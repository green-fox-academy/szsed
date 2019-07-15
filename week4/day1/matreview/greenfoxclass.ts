'use strict';

import GreenFoxStudent from './greenfoxstudent';

class GreenFoxClass {
    classMembers: GreenFoxStudent[];

    constructor(){
        this.classMembers = [];
    }

    registerStudents(student: GreenFoxStudent){
        this.classMembers.push(student);
    }
}

const create: GreenFoxClass = new GreenFoxClass();
const szabolcs: GreenFoxStudent = new GreenFoxStudent('Szabolcs', 36, 186, 'szsed');
const agi: GreenFoxStudent = new GreenFoxStudent('Agi', 80, 170, 'volunteer');

create.registerStudents(szabolcs);
create.registerStudents(agi);
create.registerStudents(new GreenFoxStudent('Zsolt', 28, 184, 'kbzsbpry'));

console.log(create);
