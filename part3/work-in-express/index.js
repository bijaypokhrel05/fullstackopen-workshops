const express = require('express');

// initializing the express framework
const app = express();

app.use(express.json());

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
    res.send('<h1>Hello World! I\'m using express framework</h1>');
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
    console.log('successfully shown the default notes');
});

const generateId = function () {
  const maxId = notes.length > 0
  ? Math.max(...notes.map(note => parseInt(note.id))) : 0;
  return String(maxId + 1);
}

app.get('/api/notes/:noteid', (req, res) => {
    const id = req.params.noteid;
    const note = notes.find(note => note.id === id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).end();
    }
});

app.post('/api/notes', (req, res) => {
  const body = req.body;

  if(!body.content) {
    return res.status(400).json({
      error: "content missing"
    })
  }
  
  const note = {
    id: generateId(),
    content: body.content,
    important: body.important || false
  }

  notes = notes.concat(note);
  res.json(notes);
});

app.delete('/api/notes/:noteid', (req, res) => {
    const id = req.params.noteid;
    notes = notes.filter(note => note.id === id);
    res.status(204).end();
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));