// # The Pirate Ship

// *The place for the Pirates*

//  -  Create a `Ship` class.
//  -  The `Ship` stores `Pirate`-s instances in a list as the crew and has one captain who is also a `Pirate`.
//  -  When a ship is created it doesn't have a crew or a captain.
//  -  The ship can be filled with pirates and a captain via `fillShip()` method.
//      -  Filling the ship with a captain and random number of pirates.
//  -  Ships should be represented in a nice way on command line including information about
//      -  captains consumed rum, state (passed out / died)
//      -  number of alive pirates in the crew
//  -  Ships should have a method to battle other ships: `ship.battle(otherShip)`
//      -  should return `true` if the actual ship (`this`) wins
//      -  the ship should win if its calculated score is higher
//      -  calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
//      -  The loser crew has a random number of losses (deaths).
//      -  The winner captain and crew has a party, including a random number of rum :)

'use strict'

import Pirate from './pirates';

let maxCrew: number = 10;

class Ship {
    captain: Pirate;
    crew: Pirate[];
    captainRum: number;
    captainState: string = 'Captain is alive and well';
    aliveCrew: number;

    fillShip(){
        this.captain = new Pirate();
        this.crew = [];

        let initCrewSize: number = Math.floor(Math.random() * maxCrew + 1);

        for(let i=0; i < initCrewSize; i++){
            this.crew.push(new Pirate);
        }

    }

    getInfo(){
        this.getCaptainState();
        this.getAliveCrewNumber();
        console.log('Captain has had this many rums:', this.captainRum);
        console.log(this.captainState);
        console.log(`This ship has ${this.aliveCrew} alive crew members`);
    }

    battle(){

    }

    getCaptainState() {
        try { if (this.captain == undefined) throw Error ('Error: ship has no captain');
            this.captainRum = this.captain.howManyRums;
            if (this.captain.isDead) this.captainState = 'Captain status: dead';
            else if (this.captain.passedOut) this.captainState = 'Captain status: passed out';          
        } catch (error) {
            console.log(error.message);
        }
    }

    getAliveCrewNumber() {
        let counter: number = 0;
        this.crew.forEach((value) => {if (!value.isDead) counter++;});
        this.aliveCrew = counter;
    }

}

let myPirateShip = new Ship();
myPirateShip.fillShip();

// console.log(myPirateShip);
// myPirateShip.getInfo();
// myPirateShip.captain.drinkSomeRum();
// myPirateShip.captain.drinkSomeRum();
// myPirateShip.captain.drinkSomeRum();
// myPirateShip.captain.drinkSomeRum();
// myPirateShip.captain.drinkSomeRum();
// myPirateShip.getInfo();
// myPirateShip.captain.howsItGoingMate();
// myPirateShip.getInfo();
// myPirateShip.captain.die();
// myPirateShip.getInfo();


// ## BattleApp

//  -  Create a `BattleApp` class, where you can fight with ships
//  -  Create 2 ships, fill them with pirates
//  -  Have a battle!

// # Armada

//  -  Create an `Armada` class
//  -  Contains `Ship`-s as a list
//  -  Have a `armada.war(otherArmada)` method where two armada can engage in war
//      -  it should work like merge sort
//      -  first ship from the first armada battles the first of the other
//      -  the loser gets skipped so the next ship comes in play from that armada
//      -  whichever armada gets to the end of its ships loses the war
//      -  return `true` if `this` is the winner

// ## WarApp

//  -  Create a `WarApp` class, where you can fight with armadas
//  -  Create 2 armadas, fill them with ships
//  -  Have a war!