const http = require('http');

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

// const app = http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.end('Hello World!');
// });

const app = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(notes));
})

const port = 3001;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));