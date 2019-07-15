// Aircraft Carrier
// Aircrafts
// Create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition
// F16
// Max ammo: 8
// Base damage: 30
// F35
// Max ammo: 12
// Base damage: 50
// All aircrafts should be created with an empty ammo storage

// Methods:
// fight
// It should use all the ammo (set it to 0) and it should return the damage it deals
// The damage dealt is calculated by multiplying the base damage by the ammunition
// refill
// It should take a number as parameter and substract as much ammo as possible
// It can't have more ammo than the number or the max ammo (can't get more ammo than what's coming from the parameter or the max ammo of the aircraft)
// It should return the remaining ammo
// Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288
// getType
// It should return the type of the aircraft as a string
// getStatus
// It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
// isPriority
// It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16

'use strict';

export default class Aircraft {
    type: string;
    currentAmmo: number = 0;
    maxAmmo: number;
    baseDamage: number;

    constructor(type: string) {
        if (type == 'F16') {
            this.type = type;
            this.maxAmmo = 8;
            this.baseDamage = 30;
        }
        else if (type == 'F35') {
            this.type = type;
            this.maxAmmo = 12;
            this.baseDamage = 50;
        }
    }

    fight(): number {
        let damage = this.currentAmmo * this.baseDamage;
        this.currentAmmo = 0;
        return damage;
    }

    refill(amount: number) {
        if (amount < this.maxAmmo - this.currentAmmo) {
            this.currentAmmo += amount;
            return 0;
        }
        else {
            this.currentAmmo = this.maxAmmo;
            return amount - this.maxAmmo + this.currentAmmo;
        }
    }

    getType(): string {
        return this.type;
    }

    getStatus(): string {
        let returnString = `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.currentAmmo}`;
        return returnString;
    }

    isPriority(): boolean {
        return (this.type == 'F35' ? true : false);
    }

}