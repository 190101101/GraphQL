const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser:true});

    mongoose.connection.on('open', () => {
        console.log('Mongodb connected');
    })

    mongoose.connection.on('error', (err) => {
        console.log('Mongodb error');
        console.log(err);
    })
}