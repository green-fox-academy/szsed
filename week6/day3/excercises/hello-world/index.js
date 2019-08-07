const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    // render `home.ejs`
    res.render('home', {
        title: 'Hello World',
        textMessage: 'Hello World application is up and running.',
        textMessage2: 'We are done. Nice work!',
        image1: "https://github.githubassets.com/images/icons/emoji/unicode/1f30d.png",
        image2: "https://github.githubassets.com/images/icons/emoji/unicode/1f389.png"
    });
});

// start express app on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});