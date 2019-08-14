'use strict';

export const factorio = (input) => {
    if (input == 0) {
        return 1;
    }
    else {
        let fact = 1;
        for (let i = 1; i <= input; i++) {
            fact *= i;
        }
        return fact;
    }
}