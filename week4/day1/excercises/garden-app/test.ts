// The Garden Application
// The task is to create a garden application, so in your main method you should create a garden with flowers and trees.
// The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange).
// In the example after creating them you should show the user, how the garden looks like.
// After that the program should water the garden twice, first with the amount of 40 then with 70.
// And after every watering the user should see the state of the garden as you can see in the output.

'use strict';

import Garden from './garden';

let myGarden = new Garden();
myGarden.initGarden();

myGarden.getWaterInfo();
myGarden.waterPlants(40);
myGarden.waterPlants(70);
