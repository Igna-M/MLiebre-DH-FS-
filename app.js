const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3130, ()=>{
    console.log('Servidor funcionando en http://localhost:3130/');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});