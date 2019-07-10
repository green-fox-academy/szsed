'use strict';

export default class Cookie {
    shape: string;
    hasSparkles: boolean;
    flavor: string;
    private status: string = 'raw';
    static isYummy: boolean = true;
    id: number;
    static lastId: number = 1;

    bakeMe(){
        this.status = 'baked to perfection';
    }

    checkMyStatus(){
        return this.status;
    }

    static howAreYouToday(mood: string){
        return `I am doing ${mood}`
    }

    constructor(shape: string, hasSparkles: boolean, flavor?: string){
        this.shape = shape;
        this.hasSparkles = hasSparkles;
        this.flavor = flavor;
        this.id = Cookie.lastId;
        Cookie.lastId++;
    }
}

let myFirstCookie: Cookie = new Cookie('elephant', false, 'vanilla');
let mySecondCookie: Cookie = new Cookie('spider', true);

console.log(myFirstCookie);
myFirstCookie.bakeMe();
console.log(myFirstCookie);
console.log(mySecondCookie);
console.log(myFirstCookie.checkMyStatus());
// myFirstCookie.status = 'baked';
// console.log(myFirstCookie.howAreYouToday('fine'));
console.log(Cookie.howAreYouToday('fine'));

Math.random();
// let myMath = new Math();

class Dog {
    static animalType: string = 'mammal';
}