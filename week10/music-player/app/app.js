const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('assets'));
app.use(express.static('assets/js'));
app.use(express.static('assets/css'));
app.use(express.static('assets/img'));
app.use(express.static('assets/music'));
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdasd',
  database: 'playlist'
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
  conn.query('select * from tracks;', function (err, tracks) {
    if (err) {
      console.log(err.message);
      res.status(404);
      res.send(err);
    }
    console.log('Data received from DB.');
    res.send(tracks);
  });
});

module.exports = app;
