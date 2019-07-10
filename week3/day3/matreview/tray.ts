'use strict';

import Cookie from './cookie';

class Tray {
    cookies: Cookie[] = [];

    bakeThemAll(){
        this.cookies.forEach(cookie => cookie.bakeMe);       
    }

    constructor(){

    }
}

let myFirstTray: Tray = new Tray();
let myFirstCookie: Cookie = new Cookie('elephant', false, 'vanilla');
let mySecondCookie: Cookie = new Cookie('spider', true);

myFirstTray.cookies.push(myFirstCookie, mySecondCookie);

myFirstTray.bakeThemAll();
console.log(myFirstTray);
console.log(myFirstCookie.constructor);
console.log(myFirstCookie instanceof Cookie);