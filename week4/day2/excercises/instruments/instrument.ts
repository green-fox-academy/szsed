// Model stringed instruments.
// We start with a base, abstract class Instrument.

// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.

'use strict';

export default abstract class Instrument {

    private name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract play(): void;

    getName(): string {
        return this.name;
    }
}