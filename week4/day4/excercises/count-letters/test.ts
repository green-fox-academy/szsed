'use strict';

import test from 'tape';
import dictionaryMaker from './count-letters';

test('dictionary maker test', (t: any) => {
    t.equals(dictionaryMaker('majom').get('m'), 2);
    t.equals(dictionaryMaker('xxxxx').get('x'), 5);
    t.equals(dictionaryMaker('').get(''), undefined);
    t.equals(dictionaryMaker('1').get('1'), 1);
    t.equals(dictionaryMaker('tret1zzz').get('1'), 1);
    t.end();
});

