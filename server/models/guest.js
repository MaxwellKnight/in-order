//includes
const mongoose = require('mongoose') 

//creating schema for user, defining all the elements.
const guestSchema = new mongoose.Schema({
    userType:{
        type: String ,
        required: true
    },
    user_creation_date:{
        type: Date ,
        required: true ,
        default: Date.now
    }

})

module.exports = mongoose.model('Guest',guestSchema)