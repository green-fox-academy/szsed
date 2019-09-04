const app = require('express')();
const ammoHandler = require('./ammoHandler');
const PORT = 3000;

const ship = {
    "caliber25": 0,
    "caliber30": 0,
    "caliber50": 0,
    "shipstatus": "empty",
    "ready": false
}

app.get('/rocket', (req, res) => {
    res.send(ship);
})

app.get('/rocket/fill', (req, res) => {
    if (req.query.caliber && req.query.amount) {
        res.send(ammoHandler(req.query, ship));
    } else {
        res.status(400);
        res.send({ error: 'Hello I am an errormessage' });
    }
})

const server = app.listen(PORT, () => console.log(`App is listening on port# ${PORT}`));

module.exports = { app, server, ship };