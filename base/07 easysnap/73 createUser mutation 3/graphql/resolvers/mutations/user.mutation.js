const mongoose = require('mongoose');

module.exports = {
    CreateUser: async (parent, {data:{username, password}}, {User}) => {

        const user = await User.findOne({username});

        if(user){
            throw new Error('user already exists');
        }

        const response = await User.create({username, password});

        console.log(response);
        
        return response;
    }
}