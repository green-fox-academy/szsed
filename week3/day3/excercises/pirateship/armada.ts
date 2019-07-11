// # Armada

//  -  Create an `Armada` class
//  -  Contains `Ship`-s as a list
//  -  Have a `armada.war(otherArmada)` method where two armada can engage in war
//      -  it should work like merge sort
//      -  first ship from the first armada battles the first of the other
//      -  the loser gets skipped so the next ship comes in play from that armada
//      -  whichever armada gets to the end of its ships loses the war
//      -  return `true` if `this` is the winner

'use strict';

import Ship from './ship';

let maxArmada: number = 10;


export default class Armada {
    ships: Ship[];

    fillArmada() {
        this.ships = [];

        let initArmadaSize: number = Math.floor(Math.random() * maxArmada + 1);

        for (let i = 0; i < initArmadaSize; i++) {
            this.ships.push(new Ship);
            this.ships[i].fillShip();
            this.ships[i].party();
        }
    }

    getArmadaInfo(){
        this.ships.forEach((value) => value.getInfo());
        console.log(`\n\ntotal ${this.ships.length} ships in this armada`)
        console.log('---end of armada info--\n');
    }

    war(otherArmada: Armada){

        let currentShip: number = 0;
        let currentEnemyShip: number = 0;

        while(currentShip <= this.ships.length - 1 && currentEnemyShip <= otherArmada.ships.length - 1){

            let victoryVar: boolean = this.ships[currentShip].battle(otherArmada.ships[currentEnemyShip]);

            if (victoryVar){
                currentEnemyShip++;
            }
            else if (victoryVar === false) {
                currentShip++;
            }
            else {
                currentShip++;
                currentEnemyShip++;
            }

        }

        if (currentShip <= this.ships.length - 1 && currentEnemyShip > otherArmada.ships.length - 1){
            console.log('First armada won!\n');
            return true;
        }
        else if (currentShip > this.ships.length - 1 && currentEnemyShip <= otherArmada.ships.length - 1){
            console.log('Second armada won!\n');
            return false;
        }
        console.log('War draw!\n');
        return undefined;
    }

}

// let myArmada = new Armada();
// myArmada.fillArmada();
// myArmada.getArmadaInfo();
// let otherArmada = new Armada();
// otherArmada.fillArmada();
// otherArmada.getArmadaInfo();
// myArmada.war(otherArmada);
// myArmada.getArmadaInfo();
// otherArmada.getArmadaInfo();