'use strict';

let countRainyDays = (weatherText: string): Map<string, number> => {
    if (weatherText == undefined) {
        return undefined;
    }

    let rainyDaysByCity = new Map<string, number>();
    let weatherTextInArray: string[] = weatherText.split('\n');

    for (let i: number = 0; i < weatherTextInArray.length; i++) {
        let weatherEntryInArray: string[] = weatherTextInArray[i].split(',');
        if (rainyDaysByCity.has(weatherEntryInArray[1])) {
            rainyDaysByCity.set(weatherEntryInArray[1], rainyDaysByCity.get(weatherEntryInArray[1]) + 1);
        }
        else {
            rainyDaysByCity.set(weatherEntryInArray[1], 1);
        }
    }
    return rainyDaysByCity;
}

export default countRainyDays;