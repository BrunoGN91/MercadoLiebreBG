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
               productimg: req.file.filename
              
            }
          
            req.body.productimg = req.file.filename
            console.log(newProduct);
            productos.push(newProduct);
         
            let JsonDeProductos = JSON.stringify(productos, null, 4);
            fs.writeFileSync(path.resolve(__dirname, "../dataJson/MOCK_DATA.json"), JsonDeProductos)
        
        } else {
            return res.send("error")
        }
        res.redirect('/')
    },
    detail: function (req, res) {
        let productDetail = productos.find(product => {
           if(product.id == req.params.id){
               return product
           }
        })
      

        res.render("detail", {product: productDetail})
    },
    inventory: function (req, res) {
        res.render('inventory', { productos: productos})
    },
    delete: function(req, res) {
        let newProducts = productos.filter(product => {
            return product.id != req.params.id
        })
       
         
            let JsonDeProductos = JSON.stringify(newProducts, null, 4);
            fs.writeFileSync(path.resolve(__dirname, "../dataJson/MOCK_DATA.json"), JsonDeProductos)
            res.redirect('/')
    },
    edit: function (req, res) {
        let productEdit = productos.find(product => {
            return product.id == req.params.id
        })
        res.render("edit", {product: productEdit})
    },
    update: function (req, res) {
        let updatedProduct = productos.forEach(product => {
            if(product.id == req.paramsid) {
                product.category = req.body.category
                product.name = req.body.name
                product.description = req.body.description
                product.price = req.body.price
                product.brand = req.body.brand
                product.productimg = req.file.filename 
            }

        })
        productos.push(updatedProduct);
        let JsonDeProductos = JSON.stringify(productos, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "../dataJson/MOCK_DATA.json"), JsonDeProductos)
        res.render("detail", {product: updatedProduct} )
    }
}
