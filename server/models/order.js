//includes
const mongoose = require('mongoose') 

//creating schema for user, defining all the elements.
const orderSchema = new mongoose.Schema({

    order_user_id:{
        type: String ,
        required: true
    },

    products:{
        type: Array ,
        required: true
    },

    craditCard:{
        type: String ,
        required: false
    },
    order_creation_date:{
        type: Date ,
        required: true ,
        default: Date.now
    }

})

module.exports = mongoose.model('Order',orderSchema)