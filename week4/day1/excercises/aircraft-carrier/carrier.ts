// Carrier
// Create a class that represents an aircraft-carrier

// The carrier should be able to store aircrafts
// Each carrier should have a store of ammo represented as number
// The inital ammo should be given by a parameter in its constructor
// The carrier also has a health point given in its constructor as well
// Methods:
// add
// It should take a new aircraft and add it to its storage
// fill
// It should fill all the aircraft with ammo and substract the needed ammo from the ammo storage
// If there is not enough ammo then it should start to fill the aircrafts with priority first
// If there is no ammo when this method is called, it should throw an exception
// fight
// It should take another carrier as a refrence parameter and fire all the ammo from the aircrafts to it, then substract all the damage from its health points
// getStatus
// It should return a string about itself and all of its aircrafts' statuses in the following format:

// HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
// Aircrafts:
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// If the health points are 0 then it should return: It's dead Jim :(

'use strict';

import Aircraft from "./aircraft";

export default class AircraftCarrier {
    aircrafts: Aircraft[];
    ammoStorage: number;
    healthPoints: number;

    constructor(ammostorage: number, healthpoints: number){
        this.aircrafts = [];
        this.ammoStorage = ammostorage;
        this.healthPoints = healthpoints;
    }

    init(numberOfAircraft: number){

        for (let i = 0; i < numberOfAircraft; i++){
            if (Math.random() < 0.5){
                this.add(new Aircraft('F16'));
            }
            else {
                this.add(new Aircraft('F35'));
            }
        }

    }

    add(newAircraft: Aircraft){
        this.aircrafts.push(newAircraft);
    }

    fill() {
        try {
            if (this.ammoStorage == 0)
            console.log('Aircraft carrier out of ammo!')
        } catch (error) {
            return;
        }
        
        this.aircrafts.forEach((element) => {
            if (element.type == 'F35') {
                this.ammoStorage = element.refill(this.ammoStorage);
        }
        })

        this.aircrafts.forEach((element) => {
            if (element.type == 'F16') {
                this.ammoStorage = element.refill(this.ammoStorage);
            }
        })

    }

    fight(enemyCarrier: AircraftCarrier){
        let damageCounter: number = 0;
        this.aircrafts.forEach((element) => {
            damageCounter += element.currentAmmo * element.baseDamage;
            element.currentAmmo = 0;
        })
        enemyCarrier.healthPoints -= damageCounter;
    }

    getStatus(){
        if (this.healthPoints <= 0) return 'It\'s dead Jim :(';
        let returnString: string = '';
        let totalDamage: number = 0;
        this.aircrafts.forEach((element) => {
            totalDamage += element.baseDamage * element.currentAmmo;
        })
        returnString += `HP: ${this.healthPoints}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorage}, Total damage: ${totalDamage}`;
        returnString += `\nAircraft:\n`

        this.aircrafts.forEach((element) => {
            returnString += element.getStatus() + '\n';
        })
        return returnString;
    }
}
