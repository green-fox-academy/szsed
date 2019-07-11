// ## WarApp

//  -  Create a `WarApp` class, where you can fight with armadas
//  -  Create 2 armadas, fill them with ships
//  -  Have a war!

'use strict';

import Armada from './armada';

export default class WarApp {
    armadaOne: Armada;
    armadaTwo: Armada;

    constructor(){
        this.armadaOne = new Armada;
        this.armadaOne.fillArmada();
        this.armadaTwo = new Armada;
        this.armadaTwo.fillArmada();
    }

    war(){
        this.armadaOne.war(this.armadaTwo);
    }
}

let myWarApp = new WarApp();
myWarApp.war();

myWarApp.armadaOne.getArmadaInfo();
myWarApp.armadaTwo.getArmadaInfo();
