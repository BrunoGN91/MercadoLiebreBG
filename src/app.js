const express = require('express');
const app = express();
const path = require('path');
/* Configuracion Extra para Ruta de Imagenes Public */


app.use(express.static(path.resolve(__dirname, '../public')));

// app.listen (3000, () => console.log('Procesando LocalHost 3000'));

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el Puerto 3000')
})
// Views

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
/* Routes */

const usersRouter = require('./routes/users.js');
const mainRoute = require('./routes/main.js');

app.use('/', mainRoute);
app.use('/', usersRouter);




