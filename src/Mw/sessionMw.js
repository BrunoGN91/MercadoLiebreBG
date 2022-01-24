function authMw (req, res, next) {
    if(req.session.userLogged){
        next();
    } else {
        res.send('Debes estar logueado');
    }
}
module.exports = authMw