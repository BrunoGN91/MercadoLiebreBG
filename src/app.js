const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const method = require("method-override");
const session = require("express-session");
const userLogged = require("./Mw/userLogged.js")


/* Session */
app.use(session({
	secret: "secret",
	resave: false,
	saveUninitialized: false,
}));
/* Configuracion Extra para Ruta de Imagenes Public */
app.use(cookieParser());
app.use(userLogged)

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.listen (3000, () => console.log('Procesando LocalHost 3000'));

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el Puerto 3000')
})

app.use(method('_method'))
// Views

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* Cookies */
app.use(cookieParser())
/* Routes */

const usersRouter = require('./routes/users.js');
const mainRoute = require('./routes/main.js');
const productRoute = require('./routes/product.js');
const rememberMw = require('./Mw/rememberMw.js');

app.use('/', mainRoute);
app.use('/', usersRouter);
app.use('/products', productRoute)




