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
    database: 'gallery'
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
    conn.query('select * from images;', function (err, rows) {
        if (err) {
            console.log(err.message);
            res.send(err);
        }
        console.log('Data received from DB.');
        res.render('home', { images: rows });
    });
});

app.post('/', (req, res) => {
    conn.query('insert into images (title, url, descr) values (?, ?, ?);', [req.body.title, req.body.url, req.body.descr], function (err, rows) {
        if (err) {
            console.log(err.message);
            res.send(err);
        }
        console.log('Data received from DB.');
        res.send(rows);
    });
});

app.get('/pictures/:imgTitle', (req, res) => {
    conn.query('select * from images where title = ?;', req.params.imgTitle, function (err, rows) {
        if (err) {
            console.log(err.message);
            res.send(err);
        }
        console.log('Data received from DB.');
        res.render('picture', { imgData: rows[0] });
    });
});


app.listen(PORT, () => {
    console.log(`App is listening on port# ${PORT}`);
});