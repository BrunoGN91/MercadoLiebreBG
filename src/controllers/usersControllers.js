const fs = require("fs");
const path = require("path");
const User = require("../models/User.js");
const bcryptjs = require("bcryptjs")

const jsonDeUsuarios = fs.readFileSync(path.resolve(__dirname, "../dataJson/users.json"))
const usuarios = JSON.parse(jsonDeUsuarios);


const jsonDeProductos = fs.readFileSync(path.resolve(__dirname, "../dataJson/MOCK_DATA.json"))
const productos = JSON.parse(jsonDeProductos)


const newUser = function () {
    
    usuarios.forEach(usuario => {
        let ultimo = 0;
        if(usuario.id > ultimo){
            ultimo = usuario.id
        }
        return ultimo + 1
    })
}

module.exports = {
    login: function (req, res) {
        res.render('login')
    },
    loginProcess: function (req, res) {
        let usuarioToLogin = User.findByField('email', req.body.email);
        // return res.send(usuarioToLogin)
        console.log(req.body.email);
         if(usuarioToLogin){
            console.log(usuarioToLogin);
           
            
             let usuarioIsOk = bcryptjs.compareSync(req.body.password, usuarioToLogin.password)
             if(usuarioIsOk){
 
                 delete usuarioToLogin.password;
                 req.session.userLogged = usuarioToLogin;
 
                 if(req.body.remember_user){
                 res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
                 }
                 return res.render('profile', {user: req.session.userLogged});
 
             } 
         }     
    },
    register: function (req, res) {
        res.render('register')
    },
    store: function (req, res) {

        let usuario = {
            ...req.body,
            avatar: req.file.filename,
            password: bcryptjs.hashSync(req.body.password, 10)
        }
        
        let newUser = User.create(usuario)
       
        usuarios.push(newUser);
        console.log(newUser)
        let nuevosUsuarios = JSON.stringify(usuarios, null, 4)
        fs.writeFileSync(path.resolve(__dirname, "../dataJson/users.json"), nuevosUsuarios)
       
        
        return res.redirect("/")

    },
    profile: function (req, res) {
        return res.render("profile", {user: req.session.userLogged})
    }
}