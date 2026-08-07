import express from 'express';

const app = express(); //appel du bibliothèque de l'express
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(` http://localhost:${port}`);
});