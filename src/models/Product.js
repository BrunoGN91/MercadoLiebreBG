const fs = require('fs');
const path = require('path');

const Product = {
    fileName: path.resolve(__dirname, '../dataJson/MOCK_DATA.json'),

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findAll: function () {
        return this.getData()
    },

    generateId: function(){
        let allProducts = this.findAll();
        let lastProduct = allProducts.pop();
        if(lastProduct) {
            return lastProduct.id + 1;
        } else {
            return 1;
    }
    },

    create: function (productData){
        let allProducts = this.findAll();

        let newProduct = {
            id: this.generateId(),
            ...productData
        }

        allProducts.push(newProduct);
        fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, 4));
        return newProduct;
    },

    findByPk: function(id) {  //Primary KEy
        let allProducts = this.findAll();
        let productFound = allProducts.find(product => product.id === id);
            return productFound;
    },

    findByField: function(field, text) {  //Primary KEy
        let allProducts = this.findAll();
        let productFound = allProducts.find(product => 
            product[field] === text)
        return productFound;
    },
    delete: function(id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(product => product.id !== id);

        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, 4));
        return true
    }
        
    
}
module.exports = Product;