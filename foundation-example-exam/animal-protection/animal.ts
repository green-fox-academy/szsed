'use strict';

export abstract class Animal {
    ownerName: string;
    isHealthy: boolean = true;
    healCost: number;

    heal() {
        this.isHealthy = true;
    }

    isAdoptable(): boolean {
        return this.isHealthy;
    }

    toString() {
        console.log(`${this.constructor.name} is ${this.isHealthy ? 'healthy, and adoptable' : 'not healthy (' + this.healCost + '€), and not adoptable'}`)
    }
}

export class Cat extends Animal {
    constructor() {
        super();
        this.healCost = Math.floor(Math.random() * 7);
    }
}

export class Dog extends Animal {
    constructor() {
        super();
        this.healCost = Math.floor(Math.random() * 7) + 1;
    }
}

export class Parrot extends Animal {
    constructor() {
        super();
        this.healCost = Math.floor(Math.random() * 7) + 4;
    }
}