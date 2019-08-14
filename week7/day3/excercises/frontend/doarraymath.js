'use strict';

const sumArray = (inputArray) => {
    return inputArray.reduce((acc, curr) => acc + curr);
}

const multArray = (inputArray) => {
    return inputArray.reduce((acc, curr) => acc * curr);
}

const doubleArray = (inputArray) => {
    return inputArray.map(element => element * 2);
}

const doArrayMath = (req, res) => {
    let respObj = {
        "what": req.body.what
    }
    if (req.body.numbers === undefined) {
        respObj = {
            "error": "No numbers provided!"
        }
    } else {
        switch (req.body.what) {
            case 'sum':
                respObj["result"] = sumArray(req.body.numbers);
                break;
            case 'multiply':
                respObj["result"] = multArray(req.body.numbers);
                break;
            case 'double':
                respObj["result"] = doubleArray(req.body.numbers);
                break;
            default:
                respObj = {
                    "error": "Please provide what to do with the numbers!"
                }
        }
    }
    res.send(respObj);
}

module.exports = doArrayMath;