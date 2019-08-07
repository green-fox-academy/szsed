const express = require('express');

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', { name: req.query.name || 'Guest' });
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});