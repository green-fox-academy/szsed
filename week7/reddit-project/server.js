'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asdasd',
    database: 'reddit'
});

conn.connect((err) => {
    if (err) {
        console.log('Error connecting to DB');
        console.log(err.message);
        return;
    }
    console.log('DB connection established');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/posts/:username', (req, res) => {
    conn.query(`select * from posts where owner = "${req.params.username}";`, function (err, rows) {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Data received from DB.');
            res.set('Content-Type: application/json');
            res.send(rows);
        }
    });
});

app.post('/posts/:username', (req, res) => {
    conn.query(`insert into posts (owner, title, url) 
            values("${req.params.username}", "${req.body.title}", "${req.body.url}");`, function (err, rows) {
            if (err) {
                console.log(err.message);
            } else {
                console.log('Data written to DB.');
                conn.query(`select * from posts where p_id = ${rows.insertId};`, function (err2, rows2) {
                    if (err2) {
                        console.log(err.message);
                    } else {
                        console.log('Data received from DB.');
                        res.set('Content-Type: application/json');
                        res.send(rows2[0]);
                    }
                });
            }
        });
});

app.listen(PORT, () => {
    console.log(`App is listening on port# ${PORT}`);
});