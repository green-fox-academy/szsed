'use strict';

let originalNames: string[] = ["Captain Marvel", "Winter Soldier", "Black Panther", "Mark"];

function filterNamesLongerThanFive(names: string[]): string[] {
    let filteredNames: string[] = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 5) {
            filteredNames.push(names[i]);
        }
    }

    return filteredNames;
}

console.log(filterNamesLongerThanFive(originalNames));