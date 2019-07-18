// Sharpie
// Search back in your own project the Sharpie class you made on the OO workshop
// Create tests that covers all types of input (like in the previous workshop exercise)

'use strict'

export default class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;

    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
    }

    use() {
        if (this.inkAmount >= 1) {
            this.inkAmount--;
        }
    }
}