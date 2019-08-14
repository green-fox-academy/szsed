'use strict';

const factorio = require('./factorio');

const doUntil = (req, res) => {
    let respObj = {};
    if (isNaN(req.body.until)) {
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
}

module.exports = doUntil;