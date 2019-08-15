'use strict';

const compareRecordWithOriginal = (recordObj, rowString) => {
    let rowArr = rowString.split(',');
    return Object.values(recordObj).reduce((acc, curr, index) => {
        return acc && (curr == rowArr[index] || (curr === null && rowArr[index] === ''));
    }, true);
}

const compareTableWithOriginal = (recordObjArr, rowStringArr) => {
    return recordObjArr.reduce((acc, curr, index) => {
        return acc && compareRecordWithOriginal(curr, rowStringArr[index]);
    }, true)
};

module.exports = compareTableWithOriginal;