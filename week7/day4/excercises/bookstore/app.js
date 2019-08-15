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
    let queryString = 'select book_name, aut_name, cate_descrip, pub_name, book_price from book_mast join publisher on book_mast.pub_id = publisher.pub_id join author on book_mast.aut_id = author.aut_id join category on book_mast.cate_id = category.cate_id'
    let queryKeys = Object.keys(req.query);
    let queryValues = Object.values(req.query);

    if (req.query) {
        for (let i = 0; i < queryValues.length; i++) {
            if (i === 0) {
                queryString += ' where ';
            } else {
                queryString += ' and ';
            }
            switch (queryKeys[i]) {
                case 'category':
                    queryString += `cate_descrip = "${queryValues[i]}"`;
                    break;
                case 'publisher':
                    queryString += `pub_name = "${queryValues[i]}"`;
                    break;
                case 'plt':
                    queryString += `book_price < ${queryValues[i]}`;
                    break;
                case 'pgt':
                    queryString += `book_price > ${queryValues[i]}`;
                    break;

            }
        }
    }

    queryString += ';';

    conn.query(queryString, queryValues, function (err, rows) {
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