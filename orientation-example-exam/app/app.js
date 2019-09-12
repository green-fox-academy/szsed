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
      console.log('Data added to DB.');
      res.send({
        id: rows.insertId,
        url: req.body.url,
        alias: req.body.alias,
        hitCount: 0,
        'secretCode': secretCode
      });
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
      if (links.length === 0) {
        res.sendStatus(404);
      } else if (links.length === 0) {
        conn.query('update table links set hitCount = ? where id = ?;', [links[0].hitCount, links[0].id], function (err, rows) {
          if (err) {
            console.log(err.message);
            res.sendStatus(500);
          } else {
            console.log('DB updated.');
            res.redirect(links[0].url)
          }
        });
      }
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

app.delete('/api/links/:id', (req, res) => {
  // to do: check secret code here
  conn.query('delete from links where id = ?;', req.params.id, function (err, rows) {
    if (err) {
      console.log(err.message);
      res.sendStatus(500);
    } else {
      console.log('Data deleted from DB.');
      res.sendStatus(204);
    }
  });
});


module.exports = app;
