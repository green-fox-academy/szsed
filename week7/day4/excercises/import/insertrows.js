'use strict';


const insertRows = (recordArr, queryFunc) => {
    const sqlInsertString = `insert into customers values (?, ?, ?, ?, ?, ?, ?, ?);`;
    recordArr.shift();

    recordArr.forEach((element, index) => {
        let fixedElement = element.split(',').map(value => value === '' ? null : value);
        queryFunc(sqlInsertString, fixedElement, (err, rows) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log('Row inserted.' + index);
            }
        });
    });
}

module.exports = insertRows;