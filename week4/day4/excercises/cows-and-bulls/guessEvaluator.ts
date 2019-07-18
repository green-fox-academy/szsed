'use strict';

let guessEvaluator = (input: number, target: number): string => {
    let output: string = ''
    let cows: number = 0;
    let bulls: number = 0;

    let inputArr: string[] = input.toString().split('');
    let targetArr: string[] = target.toString().split('');

    for (let i: number = 0; i < inputArr.length; i++) {
        if (inputArr[i] == targetArr[i]) {
            cows++;
        }
        else if (targetArr.indexOf(inputArr[i]) != -1) {
            bulls++;
        }
    }

    if (cows == 0 && bulls == 0) {
        return 'no luck';
    }
    else if (cows == 0) {
        return bulls + ' bull(s)';
    }
    else if (bulls == 0) {
        return cows + ' cow(s)';
    }
    else {
        return cows + ' cow(s) ' + bulls + ' bull(s)';
    }
}

export default guessEvaluator;