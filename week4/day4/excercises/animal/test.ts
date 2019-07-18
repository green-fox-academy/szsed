'use strict';

import test from 'tape';
import Animal from './animal';

test('testing Animal object constructor', (t: any) => {
    let testAnimal = new Animal();
    t.equals(testAnimal.hungerVal, 50);
    t.equals(testAnimal.thirstVal, 50);
    t.equals(testAnimal.constructor.name, 'Animal');
    t.end();
});

test('testing Animal object eat function', (t: any) => {
    let testAnimal = new Animal();
    testAnimal.eat();
    t.equals(testAnimal.hungerVal, 49);
    t.end();
});

test('testing Animal object drink function', (t: any) => {
    let testAnimal = new Animal();
    testAnimal.drink();
    t.equals(testAnimal.thirstVal, 49);
    t.end();
});

test('testing Animal object play function', (t: any) => {
    let testAnimal = new Animal();
    testAnimal.play();
    t.equals(testAnimal.hungerVal, 51);
    t.equals(testAnimal.thirstVal, 51);
    t.end();
});

