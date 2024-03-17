const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./products'); 

// Mock the products model
const Product = require('../models/product'); 
jest.mock('../models/product'); 

const app = express();
app.use(express.json());
app.use('/products', productRoutes);

// Connect to a test database
beforeAll(async () => {
  const url = 'mongodb://localhost:27017/Test';
  await mongoose.connect(url);
});

// Disconnect from the test database
afterAll(async () => {
  await mongoose.connection.close();
});

describe('products Routes', () => {
  // Test for GET /products
  it('should fetch all products', async () => {
    const products = [
      { product_name: 'Bamba', product_Category: 'snacks' },
      { product_name: 'Chips', product_Category: 'snacks' },
    ];

    Product.find.mockResolvedValue(products);
    const response = await request(app).get('/products');
    //if body is same
    expect(response.body.product_name).toEqual(products.product_name);
  });
  // Add more tests for GET /:id, POST /, PATCH /:id, and DELETE /:id
});

describe('Product Routes', () => {
  // Test for GET /product
  it('should fetch all product', async () => {
    const products = [
        { product_name: 'Bamba', product_Category: 'snacks' },
        { product_name: 'Chips', product_Category: 'snacks' },
    ];

    Product.find.mockResolvedValue(products);
    const response = await request(app).get('/products');
    //if status code is valid
    expect(response.statusCode).toBe(200);
  });
  // Add more tests for GET /:id, POST /, PATCH /:id, and DELETE /:id
});
describe('Product Routes', () => {
  // Test for GET /products
  it('should fetch all products', async () => {
    const products = [
        { product_name: 'Bamba', product_Category: 'snacks' },
        { product_name: 'Chips', product_Category: 'snacks' },
    ];

    Product.find.mockResolvedValue(products);
    const response = await request(app).get('/products');
    //if id is eq
    expect(response.body.id).toEqual(products.id);
  });
  // Add more tests for GET /:id, POST /, PATCH /:id, and DELETE /:id
});
describe('Products Routes', () => {
  // Test for GET /products
  it('should fetch all products', async () => {
    const products = [
        { product_name: 'Bamba', product_Category: 'snacks' },
        { product_name: 'Chips', product_Category: 'snacks' },
    ];

    Product.find.mockResolvedValue(products);
    const response = await request(app).get('/products');
    //how many time call test
    expect(Product.find).toHaveBeenCalledTimes(4);
  });
  // Add more tests for GET /:id, POST /, PATCH /:id, and DELETE /:id
});

