const express = require('express');
const Order = require('../models/order'); // Assuming this is the correct path to your model
const user = require('../models/order')
const router = express.Router();

// Getting all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting one order by ID
router.get('/:id', getOrder, (req, res) => {
    res.json(res.order); // Respond with the found order object
});

// Creating one order
router.post('/', async (req, res) => {
    // Fixed typo: 'craditCard' to 'creditCard'
    // Assuming the 'products' field is sent as a stringified JSON, otherwise consider adjusting the client-side or parsing logic
    const order = new Order({
        order_user_id: req.body.order_user_id,
        products: JSON.parse(req.body.products),
        creditCard: req.body.creditCard
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one order
router.patch('/:id', getOrder, async (req, res) => {
    // Dynamically update fields if they exist in the request body
    ['order_user_id', 'products', 'creditCard'].forEach(field => {
        if (req.body[field] != null) {
            res.order[field] = req.body[field];
        }
    });

    try {
        const updatedOrder = await res.order.save();
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting one order
router.delete('/:id', getOrder, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id); // Using the document method `remove` to possibly trigger middleware
        res.json({ message: 'Deleted Order' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to find an order by ID
async function getOrder(req, res, next) {
    let order;
    try {
        order = await Order.findById(req.params.id);
        if (order == null) {
            return res.status(404).json({ message: 'Cannot find order' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.order = order;
    next();
}

module.exports = router;
