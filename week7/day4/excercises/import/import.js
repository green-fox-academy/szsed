const mysql = require('mysql');
const readContent = require('./readcontent');

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

const recordArr = textDB.split('\n');


const sqlCreateString = `create table if not exists customers (
    id integer primary key auto_increment,
    prefix varchar(31),
    first_name varchar(63) not null,
    last_name varchar(63) not null,
    address varchar(255),
    height float,
    bitcoin_address varchar(255) not null,
    color_preference varchar(7) not null
    );`;

const sqlInsertString = `insert into customers values (?, ?, ?, ?, ?, ?, ?, ?);`;

conn.query(sqlCreateString, function (err, rows) {
    if (err) {
        console.log(err.message);
    }

    console.log('Table created.');
});

recordArr.shift();
console.log(recordArr.length);

recordArr.forEach((element, index) => {
    fixedElement = element.split(',').map(value => value === '' ? null : value);
    conn.query(sqlInsertString, fixedElement, function (err, rows) {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Row inserted.' + index);
        }
    });
});