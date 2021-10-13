import express from 'express';

const app = express();

app.listen(3000, ()=> console.log("Hello World"));

app.get('/services', (req, res) => res.send('You are on the services route'));