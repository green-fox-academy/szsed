// Flyable
// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)

'use strict';

export default interface Flyable {
    land(): void;
    fly(): void;
    takeOff(): void;
}