'use strict';

let crazyUnexpectedReturnType = (): string | number | Error => {
    let random: number = Math.random();
    if (random > .5) {
        return 'upsey';
    }
    else {
        return Error('please add your name');
    }

}

let ppl: string[] = ['asd', 'asd', 'asd', 'asd', 'asd'];

for (let name of ppl) {
    console.log(name);
}

// iterating through arrays and other iterables
// we do not have the index number here