'use strict';

const express = require('express');
const mysql = require('mysql');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.static('views/js'));
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdasd',
  database: 'url'
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    console.log(err.message);
    return;
  }
  console.log('DB connection established');
});

app.listen(PORT, () => {
  console.log(`App is listening on port# ${PORT}`);
});