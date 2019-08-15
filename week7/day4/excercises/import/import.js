const mysql = require('mysql');
const readContent = require('./readcontent');
const createDB = require('./createdb');
// const insertRows = require('./insertrows');
const compareTableWithOriginal = require('./comparison');

const fileName = 'users.csv';
const textDB = readContent(fileName);

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asdasd',
    database: 'bookstore'
});


conn.connect((err) => {
    if (err) {
        console.log('Error connecting to DB');
        console.log(err.message);
        return;
    }
    console.log('DB connection established');
});

const recordArr = textDB.split('\r').join('').split('\n');
recordArr.shift();

conn.query(createDB.sqlCreateString, createDB.createDBCallback);

// failed modularization below
// insertRows(recordArr, conn.query);

const sqlInsertString = `insert into customers values (?, ?, ?, ?, ?, ?, ?, ?);`;

console.log(recordArr.length);

recordArr.forEach((element, index) => {
    fixedElement = element.split(',').map(value => value === '' ? null : value);
    conn.query(sqlInsertString, fixedElement, (err, rows) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Row inserted.' + index);
        }
    });
});

let currentDB = [];

conn.query('select * from customers;', (err, rows) => {
    if (err) {
        console.log(err.message);
    }
    currentDB = rows;
    console.log(compareTableWithOriginal(currentDB, recordArr));
});