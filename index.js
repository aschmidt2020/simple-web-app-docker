const express = require('express');

const app = express();

app.get('/', (req, res) => { //request and response
    res.send('Hi there dCC class - Audrey Schmidt');
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
});