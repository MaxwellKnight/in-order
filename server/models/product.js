//includes
const mongoose = require('mongoose') 

//creating schema for user, defining all the elements.
const productSchema = new mongoose.Schema({

    product_name:{
        type: String ,
        required: true
    },

    product_Category:{
        type: String ,
        required: true
    },

    product_amount:{
        type: String ,
        required: false
    },

    product__creation_date:{
        type: Date ,
        required: true ,
        default: Date.now
    }

})

module.exports = mongoose.model('Product',productSchema)