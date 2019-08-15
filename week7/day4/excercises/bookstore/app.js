'use strict';

const express = require('express');
const mysql = require('mysql');
const queryBuilder = require('./querybuilder');

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

const app = express();

const PORT = 3000;

app.use(express.static('views'));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/titles', (req, res) => {
    conn.query('select book_name from book_mast;', function (err, rows) {
        if (err) {
            console.log(err.message);
        }

        console.log('Data received from DB.');
        res.render('titles', { titles: rows });
    });
});

app.get('/bookinfo', (req, res) => {
    conn.query(queryBuilder(req.query), function (err, rows) {
        if (err) {
            console.log(err.message);
        }

        console.log('Data received from DB.');
        res.render('bookinfo', { books: rows });
    });
});


app.listen(PORT, () => {
    console.log(`App is listening on port# ${PORT}`);
});