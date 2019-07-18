'use strict';

import { test } from 'tape';
import Sharpie from './sharpie';

test('testing sharpie constructor', (t: any) => {
    let testSharpie = new Sharpie('brown', 45);
    t.equals(testSharpie.color, 'brown');
    t.equals(testSharpie.width, 45);
    t.end();
});

test('testing sharpie use funct', (t: any) => {
    let testSharpie = new Sharpie('brown', 45);
    testSharpie.use();
    t.equals(testSharpie.inkAmount, 99);
    t.end();
});

test('testing sharpie use funct on depleted sharpie', (t: any) => {
    let testSharpie = new Sharpie('brown', 45);
    testSharpie.inkAmount = 0;
    testSharpie.use();
    t.equals(testSharpie.inkAmount, 0);
    t.end();
});