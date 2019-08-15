'use strict';

const express = require('express');
const mysql = require('mysql');

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
    const queryString = 'select book_name, aut_name, cate_descrip, pub_name, book_price from book_mast join publisher on book_mast.pub_id = publisher.pub_id join author on book_mast.aut_id = author.aut_id join category on book_mast.cate_id = category.cate_id;'
    conn.query(queryString, function (err, rows) {
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