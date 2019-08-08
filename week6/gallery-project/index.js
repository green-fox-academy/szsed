const express = require('express');
const fs = require('fs');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));

fileName = 'db/items.txt';
let fileContent = '';


try {
    if (!fs.existsSync(fileName)) {
        console.log(`Cannot find image data.`);
    }
    else {
        fileContent = fs.readFileSync(fileName, 'utf-8');
    }
}
catch (error) {
    console.log('Error: unable to access file.');
}

app.get('/', (req, res) => res.render('home', { imagesList: fileContent }));

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});