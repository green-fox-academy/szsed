'use strict';

import { Employee } from "./employee";

export default class Restaurant {
    name: string;
    yearFounded: number;
    employees: Employee[] = [];

    constructor(name: string, year: number) {
        this.name = name;
        this.yearFounded = year;
    }

    guestsArrived() {
        for (let employee of this.employees) {
            employee.work();
        }
    }

    hire(newHire: Employee) {
        this.employees.push(newHire);
    }
}