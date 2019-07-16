// StingedInstrument has 3 descendants, namely:-

// Electric Guitar (6 strings, 'Twang')

// Bass Guitar (4 strings, 'Duum-duum-duum')

// Violin (4 strings, 'Screech')

'use strict';

import StringedInstrument from "./stringed-instrument";

export default class BassGuitar extends StringedInstrument {

    constructor(numofstr: number = 4){
        super('Bass Guitar', numofstr);
    }

    sound(): string {
        return 'Duum-duum-duum';
    }

}