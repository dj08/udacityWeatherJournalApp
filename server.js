var express = require('express');
var app = express();

// get method needs first param as URL suffix and second method to
// manipulate the response.
app.get('/', (request, response) => {
    response.send('hello world');
})
