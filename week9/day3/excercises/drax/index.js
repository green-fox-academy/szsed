const express = require('express');
const app = express();
const PORT = 3000;

const calTable = [
    { name: 'Lorizzle', amount: 1, calorie: 123 },
    { name: 'ipsum', amount: 2, calorie: 234 },
    { name: 'dolizzle', amount: 3, calorie: 345 },
    { name: 'sizzle', amount: 4, calorie: 456 },
    { name: 'crazy', amount: 5, calorie: 567 },
    { name: 'gangster', amount: 6, calorie: 678 }
];

app.use(express.json());

app.get('/drax', (req, res) => {
    res.send(calTable);
});

app.post('/drax', (req, res) => {
    console.log(req.body);
    if (req.body.name && req.body.amount && req.body.calorie) {
        const newRecord = {
            name: req.body.name,
            amount: req.body.amount,
            calorie: req.body.calorie
        }
        calTable.push(newRecord);
        res.send(newRecord);
    } else {
        res.status(400);
        res.send({ error: 'Invalid food record input' });
    }

});

app.delete('/drax/:foodname', (req, res) => {
    for (let i = 0; i < calTable.length; i++) {
        if (req.params.foodname === calTable[i].name) {
            res.send(calTable.splice(i, 1)[0]);
            return;
        }
    }
    res.status(400);
    res.send({ error: 'Food name not found' });

});

const server = app.listen(PORT, () => console.log(`App is listening on port# ${PORT}`));

module.exports = { app, server, calTable };