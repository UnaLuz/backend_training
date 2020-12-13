const { json } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('GET petition recieved');
});

app.get('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Diaz'
    });
});

app.post('/about', (req, res) =>{
    res.send('POST petition recieved');
});

app.post('/user/:id', (req, res) =>{
    console.log(req.body);
    console.log(req.params);

    res.send('POST petition recieved');
});

app.put('/contact', (req, res) => {
    res.send('PUT request recieved')
});

app.delete('/test', (req, res) =>{
    res.send('<h1>DELETE request recieved</h1>');
});

app.listen(5000, () => {
    console.log('Server on port 5000');
});
