import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet

class FleetOfThings{

    fleet: Fleet;
    
      main(fleet: Fleet): void {
        this.fleet = fleet;
      }

      print(): void{
          let things: Thing[] = this.fleet.getThings();
            for (let i = 0; i < things.length; i++){
                let thingName: string = things[i].getName();
                let thingComplete: boolean = things[i].getCompleted();
                if (thingComplete){
                    console.log(`${i+1}. [x] ${thingName}`);
                }
                else {
                    console.log(`${i+1}. [ ] ${thingName}`);                 
                }
            }
      }

}
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

let getMilk = new Thing('Get Milk');
let removeObstacles = new Thing('Remove the obstacles');
let standUp = new Thing('Stand up');
standUp.complete();
let eatLunch = new Thing('Eat lunch');eatLunch.complete();

let myFleet = new Fleet();
myFleet.add(getMilk);
myFleet.add(removeObstacles);
myFleet.add(standUp);
myFleet.add(eatLunch);

let myFleetOfThings = new FleetOfThings();

myFleetOfThings.main(myFleet);

myFleetOfThings.print();

// Hint: You have to create a `print()` method as well 