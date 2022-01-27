const express = require('express');

const app = express();

app.get('/', (req, res) => { //request and response
    res.send('Hi there dCC class - ASchmidt');
});

app.listen(8081, () => {
    console.log('Listening to port 8081');
});