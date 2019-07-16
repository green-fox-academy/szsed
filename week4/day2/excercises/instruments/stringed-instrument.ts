// Next, we add another abstract class, StringedInstrument which extends Instrument. It

// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable

'use strict';

import Instrument from "./instrument";

export default abstract class StringedInstrument extends Instrument {

    private numberOfStrings: number;

    constructor(name: string, numofstr: number) {
        super(name);
        this.numberOfStrings = numofstr;
    }

    abstract sound(): void;

    play(): void {
        console.log(`${this.getName()}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}\n`);
    };
}