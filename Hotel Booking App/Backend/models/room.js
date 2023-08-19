const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    maxCount:{
        type: Number,
        required:true
    },
    phoneNo:{
        type: Number,
        required:true
    },
    rentPerDay:{
        type: Number,
        required:true
    },
    imageUrl:[],
    currentBooking:[],
    category: {
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true
    }
},
{
    timestamps:true
})

const roomModel = mongoose.model('rooms',roomSchema);

module.exports = roomModel;