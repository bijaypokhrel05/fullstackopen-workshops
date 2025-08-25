const express = require('express');

// initializing the express framework
const app = express();

// define a port number
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World! I\'m using express framework');
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));