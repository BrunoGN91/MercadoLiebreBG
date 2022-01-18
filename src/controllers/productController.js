const path = require("path");
const fs = require("fs");
const Product = require("../models/Product")

const jsonDeProductos = fs.readFileSync(path.resolve(__dirname, "../dataJson/MOCK_DATA.json"))
const productos = JSON.parse(jsonDeProductos);

const newProductId = function (){
    let ultimo = 0;
    productos.forEach(product => {
    if (product.id > ultimo) {
        ultimo = product.id
    }
})
return ultimo + 1;
}

module.exports = {
    create: function(req, res) {
        res.render("create")
    },
    add: function (req, res) {
        
        if (req.file !== undefined) {

            let newProduct = {
               id: newProductId(),
               ...req.body,
              
            }
            console.log(newProduct);
            req.body.productimg = req.file.filename

            productos.push(newProduct);
         
            let JsonDeProductos = JSON.stringify(productos, null, 4);
            fs.writeFileSync(path.resolve(__dirname, "../dataJson/MOCK_DATA.json"), JsonDeProductos)
        
        } else {
            return res.send("error")
        }
        res.redirect('/')
    }
}
