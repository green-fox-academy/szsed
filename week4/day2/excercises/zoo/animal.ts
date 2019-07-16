// Zoo
// We are going to represent a Zoo. The animals are cuter than humans, so let's focus on them right now.

// So we need an abstract Animal class

// it has name, age field
// it has getName() and breed() methods
// Have we got all fields and methods we should? What about gender? Any other? 
// Write down at least 3 fields and/or methods that should be included in Animal.

'use strict';

export default abstract class Animal {
    private name: string;
    age: number;
    sex: string;
    district: string;

    constructor(name: string = 'default animal name', age: number = 0, sex: string = 'unknown', district: string = 'unknown') {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.district = district
    }

    getName(): string {
        return this.name;
    }

    abstract breed(): string;
    abstract makeSound(): string;

}