'use strict';

const express = require('express');
const app = express();
const path = require('path');
const doubling = require('./doubling');
const greeter = require('./greeter');
const appenda = require('./appenda');
const doUntil = require('./dountil');
const doArrayMath = require('./doarraymath');


const PORT = 3000;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', doubling);

app.get('/greeter', greeter);

app.get('/appenda/:appendTo', appenda);

app.post('/dountil/:action', doUntil);

app.post('/arrays', doArrayMath);

app.listen(PORT, () => {
    console.log(`App is listening on port# ${PORT}`);
});