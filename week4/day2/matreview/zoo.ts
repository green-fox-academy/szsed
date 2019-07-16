'use strict';

import { IFlyable, Airplane } from "./flyable";

abstract class Animal {
    abstract makeSound(): string;
}

class Tiger extends Animal {
    makeSound(): string {
        return 'RAWWRRRRRR';
    }
}

class Eagle extends Animal implements IFlyable {
    flySpeed: number = 201;
    makeSound(): string {
        return 'SCREEEEEE';
    }

    fly(): string {
        return 'I am flying at the speed of light!';
    }
}

let zoo: Animal[] = [];

// zoo.push(new Animal());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Eagle());
zoo.push(new Tiger());
zoo.push(new Tiger());
zoo.push(new Tiger());
zoo.push(new Tiger());
zoo.push(new Tiger());

zoo.forEach(animal =>
    console.log(animal.makeSound())
);

let makeItFly = (toFly: IFlyable, ) => {
   console.log(toFly.fly());
}

makeItFly(new Eagle());
makeItFly(new Airplane());