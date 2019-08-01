'use strict';

let getMostRainyDays = (rainyDaysByCity: Map<string, number>): string => {
    if (rainyDaysByCity == undefined) {
        return undefined;
    }

    let mostRainyDays: number = Array.from(rainyDaysByCity.values())[0];

    rainyDaysByCity.forEach((daycount: number, city: string) => {
        if (daycount < mostRainyDays) {
            rainyDaysByCity.delete(city);
        } else if (daycount >= mostRainyDays && (city != Array.from(rainyDaysByCity.keys())[0])) {
            mostRainyDays = daycount;
            rainyDaysByCity.delete(Array.from(rainyDaysByCity.keys())[0]);
        }
    });
    return Array.from(rainyDaysByCity.keys())[0];
}

export default getMostRainyDays;