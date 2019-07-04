'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

let candySum = (arr: any): string[] => {
    let namesArr: string[] = [];
    arr.forEach((element: { candies: number; name: string; }) => {
        if (element.candies > 4){
            namesArr.push(element.name);
        }
        
    });
    return namesArr;
}

console.log(candySum(students));


// create a function that takes a list of students and logs: 
//  - how many candies they have on average

let candyAvg = (arr: any): number => {
    let candySum: number = 0;
    arr.forEach((element: { candies: number;}) => candySum += element.candies    );
    return candySum/arr.length;
}

console.log(candyAvg(students));