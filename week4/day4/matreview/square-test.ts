'use strict';

import { square } from './square';
import test from 'tape';


test((t: any) => {
    t.equals(square(3), 9);
    t.equals(square(2), 4);
    t.equals(square(5), 25);
    t.end();
});