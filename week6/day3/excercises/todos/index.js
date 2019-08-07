const express = require('express');

const PORT = 3000;

const app = express();

const todos = [
    'get up',
    'survive',
    'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home', { todos: todos }));

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});