// StingedInstrument has 3 descendants, namely:-

// Electric Guitar (6 strings, 'Twang')

// Bass Guitar (4 strings, 'Duum-duum-duum')

// Violin (4 strings, 'Screech')

'use strict';

import StringedInstrument from "./stringed-instrument";

export default class ElectricGuitar extends StringedInstrument {

    constructor(numofstr: number = 6){
        super('Electric Guitar', numofstr);
    }

    sound(): string {
        return 'Twang';
    }

}