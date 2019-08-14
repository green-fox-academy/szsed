'use strict';

const appenda = (req, res) => {
    let respObj = {
        "appended": `${req.params.appendTo}a`
    }
    res.send(respObj);
}

module.exports = appenda;