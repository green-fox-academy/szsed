'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/signup', (req, res) => {
    res.send(`<h1>Thanks ${req.body.username}, we will send updates to ${req.body.email}</h1>`);
});

app.listen(PORT, () => {
    console.log(`App is listening on port# ${PORT}`);
});