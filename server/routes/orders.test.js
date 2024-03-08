const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./orders'); 

// Mock the orders model
const Order = require('../models/order'); 
jest.mock('../models/order'); 

const app = express();
app.use(express.json());
app.use('/orders', orderRoutes);

// Connect to a test database
beforeAll(async () => {
  const url = 'mongodb://localhost:27017/Test';
  await mongoose.connect(url);
});

// Disconnect from the test database
afterAll(async () => {
  await mongoose.connection.close();
});

describe('orders Routes', () => {
  // Test for GET /orders
  it('should fetch all orders', async () => {
    const orders = [
      { order_user_id: '12345678', products: 'snacks',craditCard:"1234-5678-9123-4568" },
    ];

    Order.find.mockResolvedValue(orders);
    const response = await request(app).get('/orders');
    //if body is same
    expect(Order.find).toHaveBeenCalledTimes(1);
    expect(response.body.order_user_id).toEqual(orders.order_user_id);
    expect(response.body.id).toEqual(orders.id);
    expect(response.statusCode).toBe(200);
    expect(response.body.products).not.toBe(null)
  });
  // Add more tests for GET /:id, POST /, PATCH /:id, and DELETE /:id
});

