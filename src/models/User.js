const fs = require('fs');
const path = require('path');

const User = {
    fileName: path.resolve(__dirname, '../dataJson/users.json'),

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findAll: function () {
        return this.getData()
    },

    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
    }
    },

    create: function (userData){
        let allUsers = this.findAll();

        let newUser = {
            id: this.generateId(),
            ...userData
        }

        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, 4));
        return newUser;
    },

    findByPk: function(id) {  //Primary KEy
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user.id === id);
            return userFound;
    },

    findByField: function(field, text) {  //Primary KEy
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => 
            user[field] === text)
        return userFound;
    },
    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(user => user.id !== id);

        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, 4));
        return true
    }
        
    
}
module.exports = User;