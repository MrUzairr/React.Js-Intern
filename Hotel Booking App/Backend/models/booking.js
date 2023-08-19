const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    room:{
        type:String,required:true
    },
    roomId:{
        type:String,required:true
    },
    userId:{
        type:String,required:true
    },
    fromDate:{
        type:String,required:true
    },
    toDate:{
        type:String,required:true
    },
    totalDays:{
        type:String,required:true
    },
    totalAmount:{
        type:String,required:true
    },
    transectionId:{
        type:String,required:true
    },
    status:{
        type:String,required:true,default:'booked'
    },
},
{
    timestamp:true
})

const bookingModel = mongoose.model('bookings',bookingSchema);

module.exports = bookingModel;