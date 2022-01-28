const express = require('express');

const app = express();

app.get('/', (req, res) => { //request and response
    res.send('Hi there dCC class - ASchmidt');
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
});