const express = require('express');
const mysql = require('mysql');
const app = express();

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

app.get('/', (req, res) => {
  res.sendFile('/views/index.html', { root: __dirname + '/..' });
});

module.exports = app;
