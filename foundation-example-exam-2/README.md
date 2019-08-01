# Ferrilata Foundation Normal Exam
​
## Getting Started
​
- Fork this repository under your own account
- Clone the forked repository to your computer
- Create a `.gitignore` file so generated files won't be committed
- Commit your progress frequently and with descriptive commit messages
- All your answers and solutions should go in this repository
​
## Keep in mind
​
- You can use any resource online, but **please work individually**
- **Don't just copy-paste** your answers and solutions, use your own words instead
- **Don't push your work** to GitHub until your mentor announces that the time is up
​
## Exercises
​
### Multiply items in a matrix
​
Write a method that takes a matrix as a parameter.
​
The function should:
​
- multiply each even number by 2 in each even indexed row
- multiply each odd number by 2 in each odd indexed row
​
Write at least 2 different test cases.
​
#### Example
​
Input
​
```
[
  [1, 3, 6, 2],
  [7, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 3]
]
```
​
Output
​
```
[
  [1,  3,  12, 4],
  [14, 10, 6,  2],
  [3,  3,  1,  5],
  [18, 0,  10, 6]
]
```
​
### Most rainy days
​
Write a method which can read and parse a file containing information about
weather in various cities. The method must return the name of the city which
had the most rainy days.
​
#### Example
​
[Example file can be found here.](./cities.csv)
​
Output
​
```
Gyor
```
### Restaurant
​
Your task is to create a program to model the every day life in a restaurant.
​
#### Restaurant
​
- Every restaurant has a `name`, the year it was `founded` and a list of `employees` who are working there.
- It should have a method `guests arrived` which should instruct all employees to `work`
- We should be able to `hire` an employee which will add it to the list of `employees`
​
#### Employee
​
- Every employee has a `name`, an `experience` (number) and a method `work`
- The `experience` should start from `0` by default if it is not provided
- Every employee should be able to `work`, however the specific behavior is different for every kind
​
**We cannot hire or create basic employee** because they should always be some kind of specific employee like `Chef`, `Manager` or `Waiter`.
​
##### Waiter 
​
- It should store the amount of `tips` it has - in the beginning this is `0`
- Whenever it is instructed to `work`:
  - It should increase the amount of `tips` by `1`
  - It should increase its `experience` by `1`
​
##### Chef
​
- It should store information about the `meals` it ever cooked (name of the food + amount of times it was cooked)
- Whenever it is instructed to `work`:
  - It should increase its `experience` by `1`
- It should have a `cook` behavior
  - This should get the `name of the food` as an input
  - This should update the `meals` information so we are able to track that it cooked this specific food again
​
##### Manager
​
- It should have a `moodLevel` - in the beginning this is `400`
- Whenever it is instructed to `work`:
  - It should increase the `experience` by `1`
  - It should invoke its `have a meeting` behaviour
- Whenever `have a meeting` is invoked, the `moodLevel` should decrease by the managers `experience`
​
## Questions
​
### What is a unit test? What are different test cases?
​
Unit testing involves breaking your program into pieces, and subjecting each piece to a series of tests.
Usually tests are run as separate programs, but the method of testing varies, depending on the language, and type of software (GUI, command-line, library).
​
A test case is the individual unit of testing. It checks for a specific response to a particular set of inputs.
### What is the difference between runtime and compile time error? Write 1-1 example.
A run time error will only occur when the code is actually running. These are the most difficult - and lead to program crashes and bugs in your code which can be hard to track down.
​
Example:
let x: number = 0;
for (let: number i = 0; i > 0; i++){
  x++;
}
Here, because the forloop is set to never end; it will run endlessly, resulting in a runtime error.
​
Compile time errors are due to inaccuracies in code, where the compiler throws an error to alert you to something which will not compile, and therefore cannot be run.
​
Example:
Syntactic errors, such as:
​
let x: number = 0;
for (let: number i = 0; i < 10; i++){
  x++;
​
Because the  } never got put at the end of the loop, typescript will recognize this as a compile error.