const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();

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

module.exports = app;
