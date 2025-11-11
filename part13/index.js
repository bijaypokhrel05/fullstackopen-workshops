const express = require('express');
const { PORT } = require('./utils/config');
const notesRouter = require('./controller/notes');
const usersRouter = require('./controller/users');
const loginRouter = require('./controller/login');
const { connectToDatabase } = require('./utils/db');

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/notes', notesRouter);

const start = async () => {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    })
}

start();