//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
'use strict'


function bubble(params: number[]): number[] {
    let sortedArr: number[] = [];
    while (params.length > 0) {
        let minIndex: number = 0;
        let minValue: number = params[0];
        params.forEach(function (value, index) {
            if (value < minValue) {
                minValue = value;
                minIndex = index;
            }

        })
        sortedArr.push(minValue);
        params.splice(minIndex, 1);

    }
    return sortedArr;
}
function advancedBubble(params: number[], desc: boolean): number[] {
    let sortedArr: number[] = [];
    if (desc) {
        while (params.length > 0) {
        let maxIndex: number = 0;
        let maxValue: number = params[0];
        params.forEach(function (value, index) {
            if (value > maxValue) {
                maxValue = value;
                maxIndex = index;
            }

        })
        sortedArr.push(maxValue);
        params.splice(maxIndex, 1);

    }


}
    else {
    while (params.length > 0) {
        let minIndex: number = 0;
        let minValue: number = params[0];
        params.forEach(function (value, index) {
            if (value < minValue) {
                minValue = value;
                minIndex = index;
            }

        })
        sortedArr.push(minValue);
        params.splice(minIndex, 1);

    }
}

return sortedArr;
}
//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]