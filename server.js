const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `${name}`));
    };
    next();
});

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.show('./views/home.html');
});

app.get('/home', (req, res) => {
    res.show('./views/home.html');
});

app.get('/about', (req, res) => {
    res.show('./views/about.html');
});

app.use('/user', (req, res) => {
    res.show('./views/login.html');
});

app.use((req, res) => {
    res.status(404).show('./views/error.html');
});

app.listen(8000, () => {
    console.log('Server is running port:8000');
});