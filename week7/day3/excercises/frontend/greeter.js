'use strict';

const greeter = (req, res) => {
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
}

module.exports = greeter;