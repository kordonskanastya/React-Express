const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const axios = require('axios');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getAJoke', (req, res) => {
    axios
        .get('https://official-joke-api.appspot.com/random_joke')
        .then((response) => {
            res.status(200).send(response.data);
        })
        .catch((error) => {
            res.status(400).send({ error: 'Something went wrong' });
        });
});

app.get('/whatToDo', (req, res) => {
    axios
        .get('https://www.boredapi.com/api/activity')
        .then((response) => {
            res.status(200).send(response.data);
        })
        .catch((error) => {
            res.status(400).send({ error: 'Something went wrong' });
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
