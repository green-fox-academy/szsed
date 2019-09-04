const app = require('express')();
const PORT = 3000;

app.get('/yondu', (req, res) => {
    const result = { ...req.query };
    if (Object.values(result).length === 2) {
        result.speed = result.distance / result.time;
        res.json(result);
    } else {
        res.status(400);
        res.send({
            error: 'Invalid parameters'
        })
    }
})

const server = app.listen(PORT, () => console.log(`App is listening on port# ${PORT}`));

module.exports = { app, server };