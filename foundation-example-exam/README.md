# Foundation example exam

## Getting Started

 -  Fork this repository under your own account
 -  Clone the forked repository to your computer
 -  Create a `.gitignore` file so generated files won't be committed
 -  Commit your progress frequently and with descriptive commit messages
 -  All your answers and solutions should go in this repository

## What can I use?

 -  You can use any resource online, but **please work individually**
 -  **Don't just copy-paste** your answers and solutions, use your own words instead
 -  **Don't push your work** to GitHub until your mentor announces that the time is up

## Exercises 

### Matrix rotate

Create a function named `rotateMatrix` that takes an n×n integer matrix (array of arrays) as parameter
and returns a matrix which elements are rotated 90 degrees clockwise.

#### Example

Input 
```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Output
```
[ [ 7, 4, 1 ],
  [ 8, 5, 2 ],
  [ 9, 6, 3 ] 
]
```

### Swear words

Write a method which can read and parse a file 
containing not so family friendly text. 
The method must remove all the given words from the file 
and return the amount of the removed words.

#### Example

[Example file can be found here.](./content.txt)

Input

```
['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
```

Output

```
17
```

### Animal protection

You are going to create an animal shelter where we can save and take care of Animals.

#### Animal

- It must have `ownerName` and stores it's health's state `isHealthy` (true or false) and a `healCost`.
- It must have a method named `heal()`, that sets the `isHealthy` field's status to true
- It must have a method named `isAdoptable` that returns a boolean value whether it can be adopted or not     - an animal can be adopted if it is healthy
- It must have a method named `toString()` that represents the Animal in the following format:

```
<name> is not healthy (<heal cost>€), and not adoptable
<name> is healthy, and adoptable
```

*The animal's name is the same as the class name by default, but it can be set trough constructor as well*

##### Cat

**`Cat` is an `Animal`**

-  The healing cost should be a random number between 0 and 6

##### Dog

**`Dog` is an `Animal`**

-  The healing cost should be a random number between 1 and 8

##### Parrot

**`Parrot` is an `Animal`**

-  The healing cost should be a random number between 4 and 10

#### Animal shelter

- It must have a `budget`, an `animals` list, an `adopters name` list
- The shelter starts with 50€ without any Animal and adopter
- It must have a method named `rescue` this method takes an `Animal` as parameter 
  - and add the animal to the shelter's list and return the size of the list
- It must have a method named `heal` this method heals the first not healthy Animal
  - if it is possible by budget, returns the amount of healed animals(0 or 1)
- It must have a method named `addAdopter` this method takes a `name` as a parameter
  - and saves it as a potential new owner
- It must have a method named `findNewOwner` 
  - this method pairs a random name with a random adoptable Animal if it is possible
  - and removes both of them from the lists
- It must have a method named `earnDonation` this method takes an `amount` as parameter 
  - and increases the shelter's budget by the parameter's value and returns the current budget
- It must have a method named `toString` that represents the shelter
  - and print all the informations about the shelter and the animals in the following format:

```
Budget: <budget>€, 
There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
<name> is not healthy (<heal cost>€), and not adoptable
<name> is healthy, and adoptable
```

## Questions

###  Which access modifiers do know and what are they used for?

private, public and protected

They are used to designate whether the field or method can be accessed from outside the class.
Private fields are freely accessible, while public fields can only be referenced inside the class.
Protected fields can be access from inside the class or its descendants.

### What is a runtime error? Write an example.

A runtime error occurs when the program code is syntactically correct, there are no compilation errors, the program starts running but an error still occurs.

For example the input parameters can cause errors (unreadable files, division by zero), infinite loops, stack overflow, etc.