'use strict';

import { Animal, Cat, Dog, Parrot } from './animal';

export class Shelter {
    budget: number = 50;
    animals: Animal[] = [];
    adoptersName: string[] = [];

    rescue(animal: Animal): number {
        this.animals.push(animal);
        return this.animals.length;
    }

    heal(): number {
        for (let animal of this.animals) {
            if (!animal.isHealthy && animal.healCost <= this.budget) {
                animal.heal();
                return 1;
            }
        }
        return 0;
    }
}