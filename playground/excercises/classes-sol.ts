'use strict';

class Racer {
    name: string;
    gender: string;

    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
    }
}

class Guest {
    name: string;
    budget: number;

    constructor(name: string = 'Anonymous', budget: number) {
        this.name = name;
        this.budget = budget;
    }
}

class Race {
    racers: Racer[] = [];
    guests: Guest[] = [];

    constructor() {
        this.racers.push(new Racer('Bob', 'male'));
        this.racers.push(new Racer('Maria', 'female'));
        this.racers.push(new Racer('Stephanie', 'female'));
        this.racers.push(new Racer('Peter', 'male'));

        this.guests.push(new Guest('Johnny', 100));
        this.guests.push(new Guest('Barni', 80));
        this.guests.push(new Guest('Mark', 10));
        this.guests.push(new Guest('Viktor', 120));
    }

    raceResults(): string[] {
        return this.racers
            .map(racer => racer.name)
            .sort(() => Math.random() - 0.5);
    }

    girlPower(): Racer[] {
        return this.racers
            .filter(racer => racer.gender === 'female');
    }

    allTheMoney(): number {
        return this.guests
            .reduce((sum, guest) => sum + guest.budget, 0);
    }
}

const myRace = new Race();

console.log(myRace.guests);