'use strict';

import test from 'tape';
import CowsAndBulls from './cows-and-bulls';

test('testing CowsAndBulls object constructor', (t: any) => {
    let testCAB = new CowsAndBulls();
    t.equals(testCAB.getTarget().toString().length, 4);
    t.equals(testCAB.getGameState(), 'playing');
    t.equals(testCAB.getCounter(), 0);
    t.equals(testCAB.constructor.name, 'CowsAndBulls');
    t.end();
});

test('testing guess method', (t: any) => {
    let testCAB = new CowsAndBulls();
    testCAB.setTarget(4567);
    t.equals(testCAB.getTarget(), 4567);
    t.notEquals(testCAB.guess(1234), '4 cow(s)');
    t.equals(testCAB.getCounter(), 1);
    t.equals(testCAB.guess(1234), '1 bull(s)');
    t.equals(testCAB.getCounter(), 2);
    t.equals(testCAB.guess(4791), '1 cow(s) 1 bull(s)');
    t.equals(testCAB.getCounter(), 3);
    t.equals(testCAB.getGameState(), 'playing');
    t.end();
});

test('testing game end', (t: any) => {
    let testCAB = new CowsAndBulls();
    testCAB.setTarget(4567);
    t.equals(testCAB.guess(4567), '4 cow(s)');
    t.equals(testCAB.getCounter(), 1);
    t.equals(testCAB.getGameState(), 'finished');
    t.equals(testCAB.guess(1234), 'game over');
    t.equals(testCAB.getCounter(), 1);
    t.end();
});
