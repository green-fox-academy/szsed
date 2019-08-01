'use strict';

let getMostRainyDays = (rainyDaysByCity: Map<string, number>): string => {
    if (rainyDaysByCity == undefined) {
        return undefined;
    }

    let mostRainyDays: number = rainyDaysByCity.values().next().value;

    rainyDaysByCity.forEach((daycount: number, city: string) => {
        if (daycount < mostRainyDays) {
            rainyDaysByCity.delete(city);
        } else if (daycount >= mostRainyDays && (city != rainyDaysByCity.keys().next().value)) {
            mostRainyDays = daycount;
            rainyDaysByCity.delete(rainyDaysByCity.keys().next().value);
        }
    });
    return rainyDaysByCity.keys().next().value;
}

export default getMostRainyDays;