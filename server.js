const port = 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Array to hold user data
const appData = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// get method needs first param as URL suffix and second method to
// manipulate the response.
// app.get('/', (request, response) => {
//     response.send('hello world');
// });

app.get('/all', (request, response) => {
    response.send(appData);
});

const addMovie = (req, res) => {
    console.log(req.body);
    appData.push(req.body);
};

// Basic POST request
app.post('/addMovie', addMovie);

app.use(express.static('website'));

const server = app.listen(port, () => {
    console.log(`Running on localhost: ${port}`);
});

