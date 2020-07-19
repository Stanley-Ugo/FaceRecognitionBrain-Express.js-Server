const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const user = {
        name : 'Sally',
        hubby: 'soccer'
    }
    res.send(user);
})
app.listen(3000);