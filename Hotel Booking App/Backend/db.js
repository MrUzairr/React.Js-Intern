const mongoose = require('mongoose');

var mongoUrl = 'mongodb+srv://publicmail760:au6Jyyb8KebSZ6l0@hotelsystem.an9wjvg.mongodb.net/hotelData';

mongoose.connect(mongoUrl,{useUnifiedTopology : true, useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected',()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose;