const express = require('express');

// initializing the express framework
const app = express();

// define a port number
const port = 3000;

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (req, res) => {
    res.send('Hello World! I\'m using express framework');
})

app.get('/api/notes', (req, res) => {
    res.send(notes);
    console.log('successfully shown the default notes');
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));