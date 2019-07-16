'use strict';

interface IFlyable {
    flySpeed: number;
    fly(): string;
}

interface IHasPassangers {
    passengers: number;
    board(): void;
}

class Airplane implements IFlyable, IHasPassangers {
    flySpeed: number = 10;
    passengers: number = 100;

    // we can still add extra properties that don't exist on the interfaces
    extraThing: number = 15;

    fly(): string {
        return 'I am flying';
    }
    board() {
        console.log('Add passengers....');
    }

}

let myAirplane = new Airplane();

// we can create the object without the class with only the interface
// can't add extra properties this way

let bird: IFlyable = {
    flySpeed: 10 as number,
    fly: (): string => { return 'a'; }
};


let bird2: IFlyable & IHasPassangers = {
    flySpeed: 10 as number,
    passengers: 100 as number,
    fly: (): string => { return 'a'; },
    board() {
        console.log('Add passengers....');
    }

};

interface newOne extends IFlyable, IHasPassangers {

}

myAirplane.fly();
myAirplane.board();

export { IFlyable, IHasPassangers, Airplane };