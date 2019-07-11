// # Doable homework
// - Create 5 trees
//   - Store the data of them in variables in your program
//   - for every tree the program should store its'
//     - type
//     - leaf color
//     - age
//     - sex
//   - you can use just variables, or lists and/or maps

'use strict'

class Tree {
    name: string;
    type: string;
    leafColor: string;
    age: number;
    sex: string;

    constructor (name: string, type: string, leafColor: string, age: number, sex? :string){
        this.name = name;
        this.type = type;
        this.leafColor = leafColor
        this.age = age;

        if (sex == undefined){
            this.sex = 'unknown';
        }
        else {
            this.sex = sex;
        }

    }
}

class Trees {
    private trees: Tree[] = [];

    addTree(tree: Tree){
        this.trees.push(tree);
    }

    getTrees(){
        console.log(this.trees);
    }
}

let treebeard = new Tree('Treebeard', 'ent', 'green', 14674, 'male');
let grandmotherWillow = new Tree('Grandmother Willow', 'willow', 'blue', 145, 'female');
let toadTree = new Tree('Toad Tree', 'oak', 'none', 3843, 'none');
let theWhompingWillow = new Tree('The Whomping Willow', 'willow', 'green', 48)
let groot = new Tree('Groot', 'superhero', 'green', 55, 'male');

let myTrees = new Trees;

myTrees.addTree(treebeard);
myTrees.addTree(grandmotherWillow);
myTrees.addTree(toadTree);
myTrees.addTree(theWhompingWillow);
myTrees.addTree(groot);

myTrees.getTrees();