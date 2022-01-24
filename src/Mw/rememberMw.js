
const fs = require('fs');
const path = require('path')

let archivoUsuarios = fs.readFileSync(path.resolve(__dirname, '../dataJson/users.json'), 'utf-8');
let usuarios = JSON.parse(archivoUsuarios);

function rememberMw (req, res, next){

if(!req.cookies.recordame && !req.session.usuarioLogueado) {
    ;
}

let usuarioALoguearse;

for(let i = 0; i < usuarios.length; i++) {

    if(usuarios[i].email == req.cookies.recordame) { 
        usuarioALoguearse = usuarios[i];
        break;
    }
    req.session.usuarioLogueado = usuarioALoguearse;
} 
}

module.exports = rememberMw;

