const fs = require("fs");
const path = require("path")

const jsonDeProductos = fs.readFileSync(path.resolve(__dirname, "../dataJson/MOCK_DATA.json"))
const productos = JSON.parse(jsonDeProductos)



module.exports = {
    index: function (req, res) {
        let stocked = []
        let offers = [];
        productos.forEach(producto => {
            if (producto.stock > 200) {
                stocked.push(producto)
            }
            return stocked;
            
        })
        productos.forEach(product => {
            if (product.discounts > 50) {
                offers.push(product)
            }
            return offers;
            
        })
        res.render('home', {stocked: stocked, offers: offers, productos: productos})
    },
    cart: function (req, res) {
        
        return res.render("carrito", {productos: productos})
    },
     productos: function (req, res) {
        
        return res.send(productos)
    }

}