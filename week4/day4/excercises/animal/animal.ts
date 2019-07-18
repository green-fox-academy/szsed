// Animal
// Search back in your own project directory the Animal class you made on the OO workshop
// Create tests for multiple test cases.

export default class Animal {
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
