'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

let candySum = (arr: any): number => {
    let sum: number = 0;
    arr.forEach((element: { candies: number; }) => sum += element.candies);
    return sum;
}

console.log(candySum(students));

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

let ageSum = (arr: any): number => {
    let sum: number = 0;
    arr.forEach((element: { age: number, candies: number; }) => {
        if (element.candies < 5) {
            sum += element.age
        }
    }
    );
    return sum;
}

console.log(ageSum(students));
