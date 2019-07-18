'use strict';

import test from 'tape';
import anagramChecker from './anagram';

test('anagram checker test', (t: any) => {
    t.equals(anagramChecker('majom', 'mojam'), true);
    t.equals(anagramChecker('majom', 'cica'), false);
    t.equals(anagramChecker('majom', ''), false);
    t.equals(anagramChecker('majom', undefined), false);
    t.end();
});
