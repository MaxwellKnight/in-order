
//includes
const express = require('express')
const user = require('../models/user')
//create route
const router = express.Router()
const User = require('../models/user')




//Getting all
router.get('/',async(req, res)=>{
    
    try{
        //looking for users
        const users = await User.find()
        res.json(users)
    }catch(err){
        //status(500)->problem in our server.
        res.status(500).json({message : err.message })

    }
})
//Getting one
router.get('/:id',getUser,(req, res)=>{
    res.send(res.user.user_name)
})
//Creating one
router.post('/',async(req, res)=>{

    const user = new User({
        //init user
        user_name : req.body.user_name,
        password : req.body.password,
        userType : req.body.userType,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email_address : req.body.email_address,
        favorites : req.body.favorites
    
    })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({ message : err.message })
    }
})
//Update one
router.patch('/:id',getUser,async(req, res)=>{

    if(req.body.user_name != null){
        res.user.user_name = req.body.user_name
    }

    if(req.body.password != null){
        res.user.password = req.body.password
    }

    if(req.body.userType != null){
        res.user.userType = req.body.userType
    }

    if(req.body.first_name != null){
        res.user.first_name = req.body.first_name
    }

    if(req.body.last_name != null){
        res.user.last_name = req.body.last_name
    }

    if(req.body.email_address != null){
        res.user.email_address = req.body.email_address
    }

    if(req.body.favorites != null){
        res.user.favorites = req.body.favorites
    }

    try{
        const updateUser = await res.user.save()
        res.status(200).json(updateUser)
    }catch(err){
        res.status(400).json({ message : err.message })
    }
})
//Deleting one
router.delete('/:id',getUser,async(req, res)=>{
    
    try{
        await User.findByIdAndDelete(req.params.id); // Use findByIdAndDelete directly
        res.json({ message: 'Deleted user' });
    }catch(err){
        res.status(500).json({message : err.message})
    }
})

async function getUser(req,res,next){
    let user
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({ message : 'Cannot find user' })
        }
    }catch(err){
        return res.status(500).json({ message : err.message })
    }

    res.user = user
    next()
}

module.exports = router

