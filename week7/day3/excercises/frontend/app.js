'use strict';

const express = require('express');
const app = express();
const path = require('path');

const factorio = (input) => {
    if (input == 0) {
        return 1;
    }
    else {
        let fact = 1;
        for (let i = 1; i <= input; i++) {
            fact *= i;
        }
        return fact;
    }
}

const PORT = 3000;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    let respObj = {};
    if (req.query.input !== undefined && !isNaN(Number(req.query.input))) {
        respObj = {
            "received": req.query.input,
            "result": req.query.input * 2
        };
    } else {
        respObj = {
            "error": "Please provide an input!"
        };
    }
    res.send(respObj);
});

app.get('/greeter', (req, res) => {
    let respObj = {};
    if (req.query.name !== undefined && req.query.title !== undefined) {
        respObj = {
            "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        };
    } else if (req.query.name === undefined && req.query.title === undefined) {
        respObj = {
            "error": "Please provide a name and a title!"
        };
    } else if (req.query.name === undefined) {
        respObj = {
            "error": "Please provide a name!"
        };
    } else if (req.query.title === undefined) {
        respObj = {
            "error": "Please provide a title!"
        };
    }

    res.send(respObj);
});

app.get('/appenda/:appendTo', (req, res) => {
    let respObj = {
        "appended": `${req.params.appendTo}a`
    }
    res.send(respObj);
});

app.post('/dountil/:action', (req, res) => {
    let respObj = {};
    if (req.body.until === undefined || isNaN(req.body.until)) {
        respObj = {
            "error": "Please provide a number!"
        };
    } else if (req.params.action === "sum") {
        respObj = {
            "result": (req.body.until + 1) * req.body.until / 2
        };
    } else if (req.params.action === "factor") {
        respObj = {
            "result": factorio(req.body.until)
        };
    } else {
        respObj = {
            "error": "Incorrect action."
        };
    }
    res.send(respObj);
});

app.listen(PORT, () => {
    console.log(`App is listening on port# ${PORT}`);
});