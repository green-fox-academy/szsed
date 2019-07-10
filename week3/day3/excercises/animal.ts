// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

'use strict';

class Animal {
    hungerVal: number = 50;
    thirstVal: number = 50;

    eat(){
        this.hungerVal--;
    } 
    drink(){
        this.thirstVal--;
    }
    play(){
        this.hungerVal++;
        this.thirstVal++;
    }


}

let winnieThePooh = new Animal();

winnieThePooh.eat();
winnieThePooh.eat();
winnieThePooh.eat();
winnieThePooh.drink();
winnieThePooh.drink();
winnieThePooh.play();

console.log(winnieThePooh);