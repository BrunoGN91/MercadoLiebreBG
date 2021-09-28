const express = require('express');
const app = express();
const path = require('path');
/* Configuracion Extra para Ruta de Imagenes Public */


app.use(express.static(path.resolve(__dirname, 'public')));


// app.listen (3000, () => console.log('Procesando LocalHost 3000'));

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el Puerto 3000')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'))
});


app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'))
});

app.post('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
});

app.post('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
});

