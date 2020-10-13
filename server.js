const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) return console.log('ERROR');
    else {
        return console.log(`Server running on port ${PORT}...`)
    }
})