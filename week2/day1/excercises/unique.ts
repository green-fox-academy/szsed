//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr: number[]) {
    return arr.filter(function (element, index) {
        let uniq: boolean = true;
        for (let i = index; i < arr.length; i++) {

            if (element === arr[i] && index != i) {
                uniq = false
            }
        }
        return uniq;
    });
}
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));
//  should print: `[1, 11, 34, 52, 61]`
