'use strict';

const doubling = (req, res) => {
    let respObj = {};
    if (!isNaN(req.query.input)) {
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
}

module.exports = doubling;