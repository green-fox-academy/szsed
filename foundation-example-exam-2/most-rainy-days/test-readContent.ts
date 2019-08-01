'use strict';

import test = require('tape');
import readContent from './readContent';

test('testing file reader function', (t: any) => {
    t.equals(readContent('testfile.txt'), 'testtesttest');
    t.equals(readContent('wrongfilename'), undefined);
    t.end();
});
