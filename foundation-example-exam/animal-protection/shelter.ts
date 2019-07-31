'use strict';

import { Animal } from './animal';

export class Shelter {
    budget: number = 50;
    animals: Animal[] = [];
    adopters: string[] = [];

    rescue(animal: Animal): number {
        this.animals.push(animal);
        return this.animals.length;
    }

    heal(): number {
        for (let animal of this.animals) {
            if (!animal.isHealthy && animal.healCost <= this.budget) {
                animal.heal();
                this.budget -= animal.healCost;
                return 1;
            }
        }
        return 0;
    }

    addAdopter(name: string) {
        this.adopters.push(name);
    }

    findNewOwner() {
        let adoptables: Animal[] = this.animals.filter((animal: Animal) => animal.isAdoptable());
        if (adoptables.length > 0 && this.adopters.length > 0) {
            let animalIndex: number = Math.floor(Math.random() * adoptables.length);
            let adopterIndex: number = Math.floor(Math.random() * this.adopters.length);
            adoptables[animalIndex].ownerName = this.adopters[adopterIndex];
            this.animals.splice(animalIndex, 1);
            this.adopters.splice(adopterIndex, 1);
        }
    }

    earnDonation(amount: number): number {
        return this.budget += amount;
    }

    toString() {
        console.log(`Budget: ${this.budget}€,\nThere are ${this.animals.length} animal(s) and ${this.adopters.length} potential adopter(s)`);
        this.animals.forEach((animal) => animal.toString());
    }
}