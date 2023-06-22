const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/insta_backend', (req, res) => {
    res.json({url: 'http://192.168.1.38'});
});

app.get('/cam-cat', (req, res) => {
    res.json({url: 'https://cam-cat.anuragravi.tech'});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
