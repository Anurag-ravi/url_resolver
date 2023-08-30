const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/insta_backend', (req, res) => {
    res.json({url: 'https://ibackend.cseiitg.tech'});
});

app.get('/cam-cat', (req, res) => {
    res.json({url: 'https://cam-cat.anuragravi.tech'});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
