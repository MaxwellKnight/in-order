//includes
const mongoose = require('mongoose') 

//creating schema for user, defining all the elements.
const userSchema = new mongoose.Schema({

    user_name:{
        type: String ,
        required: true
    },

    password:{
        type: String ,
        required: true
    },

    userType:{
        type: String ,
        required: true
    },

    first_name:{
        type: String ,
        required: false,
        default : ""
    },

    last_name:{
        type: String ,
        required: false,
        default : ""
    },

    email_address:{
        type: String ,
        required: true

    },

    favorites:{
        type: String ,
        required: false,
        default : ""
    },
    
    creditCard:{
        type: String ,
        required: false
    },

    user_creation_date:{
        type: Date ,
        required: true ,
        default: Date.now
    }

})

module.exports = mongoose.model('User',userSchema)