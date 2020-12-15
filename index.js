const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.set('appName', 'Fazt Express tutorial');
app.set('port', 3000);
app.set('view engine', 'ejs');

// Middlewares, deben estar antes de las rutas para que funcionen
app.use(express.json());
app.use(morgan('dev'));

// Routs
/*
app.get('/', (req, res) => {
    res.send('GET petition recieved');
});
*/

app.get('/', (req, res) => {
    const data = [{name: 'Pablo'}, {name: 'Pedro'}, {name: 'Pipo'}, {name: 'Pocho'}];
    res.render('index.ejs', {people:data});
});

app.all('/gr8', (req, res, next) => {
    console.log("You're doing great");
    next();
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

app.delete('/user/:userId', (req, res) =>{
    res.send(`User ${req.params.userId} deleted`);
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
  console.log(app.get('appName'));
  console.log('Server on port', app.get('port'));
});
