// ## BattleApp

//  -  Create a `BattleApp` class, where you can fight with ships
//  -  Create 2 ships, fill them with pirates
//  -  Have a battle!

'use strict'

import Ship from './ship';

export default class BattleApp {
    shipOne: Ship;
    shipTwo: Ship;

    constructor(){
        this.shipOne = new Ship;
        this.shipOne.fillShip();
        this.shipOne.party();
        this.shipTwo = new Ship;
        this.shipTwo.fillShip();
        this.shipTwo.party();
    }

    battle(){
        this.shipOne.battle(this.shipTwo);
    }
}

let myBattleApp = new BattleApp;

myBattleApp.shipOne.getInfo();
myBattleApp.shipTwo.getInfo();
myBattleApp.battle();
myBattleApp.shipOne.getInfo();
myBattleApp.shipTwo.getInfo();