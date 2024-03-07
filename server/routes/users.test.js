const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./users'); 

// Mock the User model
const User = require('../models/user'); 
jest.mock('../models/user'); 

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

// Connect to a test database
beforeAll(async () => {
  const url = 'mongodb://localhost:27017/Test';
  await mongoose.connect(url);
});

// Disconnect from the test database
afterAll(async () => {
  await mongoose.connection.close();
});

describe('User Routes', () => {
  // Test for GET /users
  it('should fetch all users', async () => {
    const users = [
      { user_name: 'JohnDoe', email_address: 'johndoe@example.com' },
      { user_name: 'JaneDoe', email_address: 'janedoe@example.com' },
    ];

    User.find.mockResolvedValue(users);
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(users);
    expect(User.find).toHaveBeenCalledTimes(1);
  });
  

  // Add more tests for GET /:id, POST /, PATCH /:id, and DELETE /:id
});


