
//includes
const express = require('express')
const guest = require('../models/guest')
//create route
const router = express.Router()
const Guest = require('../models/guest')




//Getting all
router.get('/',async(req, res)=>{
    
    try{
        //looking for users
        const guest = await Guest.find()
        res.json(guest)
    }catch(err){
        //status(500)->problem in our server.
        res.status(500).json({message : err.message })

    }
})
//Getting one
router.get('/:id',getGuest,(req, res)=>{
    res.send(res.guest.id)
})
//Creating one
router.post('/',async(req, res)=>{

    const guest = new Guest({
        //init guest
        userType : req.body.userType
    })

    try{
        const newGuest = await guest.save()
        res.status(201).json(newGuest)
    }catch(err){
        res.status(400).json({ message : err.message })
    }
})
//Update one
router.patch('/:id',getGuest,async(req, res)=>{

    if(req.body.userType != null){
        res.guest.userType = req.body.userType
    }

    try{
        const updateGuest = await res.guest.save()
        res.status(200).json(updateGuest)
    }catch(err){
        res.status(400).json({ message : err.message })
    }
})
//Deleting one
router.delete('/:id',getGuest,async(req, res)=>{
    
    try{
        await Guest.findByIdAndDelete(req.params.id); // Use findByIdAndDelete directly
        res.json({ message: 'Deleted guest' });
    }catch(err){
        res.status(500).json({message : err.message})
    }
})

async function getGuest(req,res,next){
    let guest
    try{
        guest = await Guest.findById(req.params.id)
        if(guest == null){
            return res.status(404).json({ message : 'Cannot find guest' })
        }
    }catch(err){
        return res.status(500).json({ message : err.message })
    }

    res.guest = guest
    next()
}

module.exports = router

