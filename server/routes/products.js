
//includes
const express = require('express')
const product = require('../models/product')
//create route
const router = express.Router()
const Product = require('../models/product')




//Getting all
router.get('/',async(req, res)=>{
    
    try{
        //looking for product
        const product = await Product.find()
        res.json(product)
    }catch(err){
        //status(500)->problem in our server.
        res.status(500).json({message : err.message })

    }
})
//Getting one
router.get('/:id',getProduct,(req, res)=>{
    res.send(res.product.product_name)
})
//Creating one
router.post('/',async(req, res)=>{

    const product = new Product({
        //init product
        product_name : req.body.product_name,
        product_Category : req.body.product_Category,
        product_amount : req.body.product_amount,
    })

    try{
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    }catch(err){
        res.status(400).json({ message : err.message })
    }
})
//Update one
router.patch('/:id',getProduct,async(req, res)=>{

    if(req.body.product_name != null){
        res.product.product_name = req.body.product_name
    }

    if(req.body.product_Category != null){
        res.product.product_Category = req.body.product_Category
    }

    if(req.body.product_name != null){
        res.product.product_name = req.body.product_name
    }

    

    try{
        const updateProduct = await res.product.save()
        res.status(200).json(updateProduct)
    }catch(err){
        res.status(400).json({ message : err.message })
    }
})
//Deleting one
router.delete('/:id',getProduct,async(req, res)=>{
    
    try{
        await Product.findByIdAndDelete(req.params.id); // Use findByIdAndDelete directly
        res.json({ message: 'Deleted product' });
    }catch(err){
        res.status(500).json({message : err.message})
    }
})

async function getProduct(req,res,next){
    let product
    try{
        product = await Product.findById(req.params.id)
        if(product == null){
            return res.status(404).json({ message : 'Cannot find user' })
        }
    }catch(err){
        return res.status(500).json({ message : err.message })
    }

    res.product = product
    next()
}

module.exports = router