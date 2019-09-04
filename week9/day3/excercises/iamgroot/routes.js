const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    if (req.query.message) {
        res.json({
            received: req.query.message,
            translated: 'I am Groot!'
        });
    } else {
        res.status(400);
        res.json({
            error: 'I am Groot!'
        });
    }
});

module.exports = app;