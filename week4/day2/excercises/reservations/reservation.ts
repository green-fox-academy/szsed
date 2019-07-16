// Reservations
// Create a Reservation class by implementing all the features as required by the interface.
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)

'use strict';

import Reservationy from "./reservationy";

const characters: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charactersLength = characters.length;
const codeLength = 8;
const DOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export default class Reservation implements Reservationy {
    code: string;
    dow: string;

    constructor() {
        let code: string = ''
        for (let i = 0; i < codeLength; i++) {
            code += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.code = code;
        let dowIndex: number = Math.floor(Math.random() * 7);
        this.dow = DOW[dowIndex];

    }

    getCodeBooking(): string {
        return this.code;
    }

    getDowBooking(): string {
        return this.dow;
    }

}