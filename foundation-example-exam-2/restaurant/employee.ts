'use strict';

export abstract class Employee {
    name: string;
    experience: number;

    constructor(name: string, experience: number = 0) {
        this.name = name;
        this.experience = experience;
    }

    abstract work(): void
}

export class Waiter extends Employee {
    tips: number = 0;

    work() {
        this.tips++;
        this.experience++;
    }

}

export class Chef extends Employee {
    meals: Map<string, number>;

    work() {
        this.experience++;
    }

    cook(nameOfFood: string) {
        if (this.meals.has(nameOfFood)) {
            this.meals.set(nameOfFood, this.meals.get(nameOfFood) + 1)
        } else {
            this.meals.set(nameOfFood, 1)
        }
    }
}

export class Manager extends Employee {
    moodLevel: number = 400;

    work() {
        this.experience++;
        this.haveMeeting();
    }

    haveMeeting() {
        this.moodLevel -= this.experience;
    }
}