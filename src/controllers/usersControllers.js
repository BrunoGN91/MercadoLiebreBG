const fs = require("fs");
const path = require("path");
const User = require("../models/User.js")

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
    register: function (req, res) {
        res.render('register')
    },
    store: function (req, res) {
        let usuario = {
            ...req.body
        }

        let newUser = User.create(usuario)
       
        usuarios.push(newUser);
        console.log(newUser)
        let nuevosUsuarios = JSON.stringify(usuarios, null, 4)
        fs.writeFileSync(path.resolve(__dirname, "../dataJson/users.json"), nuevosUsuarios)
       
        
        return res.redirect("/")

    },
    profile: function (req, res) {
        return res.render("profile")
    }
}