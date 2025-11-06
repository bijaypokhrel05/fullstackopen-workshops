const express = require('express');
const { PORT } = require('./utils/config');
const notesRouter = require('./controller/notes');
const { connectToDatabase } = require('./utils/db');

const app = express();

app.use(express.json());


app.use('/api/note', notesRouter);
// app.get('/', (req, res) => {
//     res.send('Finally we get the default route');
// })

const start = async () => {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    })
}

start();