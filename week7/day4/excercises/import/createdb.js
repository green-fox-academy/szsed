'use strict';

const sqlCreateString = `create table if not exists customers (
id integer primary key auto_increment,
prefix varchar(31),
first_name varchar(63) not null,
last_name varchar(63) not null,
address varchar(255),
height float,
bitcoin_address varchar(255) not null,
color_preference varchar(7)
);`;

const createDBCallback = (err, rows) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Table created.');
    }
}

module.exports = { sqlCreateString, createDBCallback };