const path = require('path');
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log(`http://localhost:3000`);
})

app.use(express.static('public'));