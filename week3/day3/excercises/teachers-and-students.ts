// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

'use strict';

class Student {
    learn(){
        console.log('the student is learning something new');
    }
    question(teacher: Teacher){
        teacher.answer();
    }
}

class Teacher {
    answer(){
        console.log('the teacher is answering a question');
    }
    teach(student: Student){
        student.learn();
    }
}

let Pascal = new Student();
let Mark = new Teacher();

Pascal.question(Mark);
Mark.teach(Pascal);