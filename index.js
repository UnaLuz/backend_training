const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/about', (req, res) =>{
  res.send('About me..');
});

app.get('/contact', (req, res) => {
    res.send('*Form contact*')
});

app.get('/test', (req, res) =>{
    res.send('<h1>TEST</h1>');
});

app.listen(5000, () => {
    console.log('Server on port 5000');
});
