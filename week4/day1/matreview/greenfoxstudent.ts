import Person from './Person'

class GreenFoxStudent extends Person {
    gitHubUsername: string;
    frustrationLevel: number = 100;

    constructor(name: string, age: number, height: number, gitHubUsername: string) {
        super(name, age, height);
        this.gitHubUsername = gitHubUsername;
    }

    socialize() {
        console.log('I don\'t even know the names of my friends anymore. All I do is go to Helvecia every Friday.');
    }

}

const sandor: GreenFoxStudent = new GreenFoxStudent('Sandor', 25, 185, 'eksandor');

sandor.socialize();
console.log(sandor instanceof Person);

export default GreenFoxStudent;