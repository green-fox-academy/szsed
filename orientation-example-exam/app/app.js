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

app.post('/api/links', (req, res) => {
  const generateDigit = () => Math.floor(Math.random() * 10);
  let secretCode = '';
  for (let i = 0; i < 4; i++) {
    secretCode = secretCode.concat(generateDigit());
  }
  conn.query('insert into links (url, alias, secretcode) values (?, ?, ?);', [req.body.url, req.body.alias, secretCode], function (err, rows) {
    if (err) {
      console.log(err.message);
      if (err.sqlState === '23000') {
        res.sendStatus(400);
      } else {
        res.sendStatus(500);
      }
    } else {
      console.log('Data received from DB.');
      console.log(rows);
      res.send('ok');
    }
  });
});

app.get('/a/:alias', (req, res) => {
  conn.query('select * from links where alias = ?;', req.params.alias, function (err, links) {
    if (err) {
      console.log(err.message);
      res.sendStatus(500);
    } else {
      console.log('Data received from DB.');
      console.log(links);
      res.send('ok');
    }
  });
});

app.get('/api/links', (req, res) => {
  conn.query('select id, url, alias, hitcount from links;', function (err, links) {
    if (err) {
      console.log(err.message);
      res.sendStatus(500);
    } else {
      console.log('Data received from DB.');
      res.send(links);
    }
  });
});

module.exports = app;
