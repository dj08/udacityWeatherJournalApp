const port = 8080;
const express = require('express');
const app = express();

// get method needs first param as URL suffix and second method to
// manipulate the response.
app.get('/', (request, response) => {
    response.send('hello world');
});

const server = app.listen(port, () => {
    console.log(`Running on localhost: ${port}`);
});

