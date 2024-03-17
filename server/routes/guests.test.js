const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const guestRoutes = require('./guests'); 

// Mock the guest model
const Guest = require('../models/guest'); 
const guest = require('../models/guest');
jest.mock('../models/guest'); 

const app = express();
app.use(express.json());
app.use('/guests', guestRoutes);

// Connect to a test database
beforeAll(async () => {
  const url = 'mongodb://localhost:27017/Test';
  await mongoose.connect(url);
});

// Disconnect from the test database
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Guest Routes', () => {
  // Test for GET /guests
  it('should fetch all guests', async () => {
    const guests = [
      { userType: 'guest'}
    ];

    Guest.find.mockResolvedValue(guests);
    const response = await request(app).get('/guests');
    //if body is same
    expect(response.body.userType).toEqual(guests.userType);
    expect(Guest.find).toHaveBeenCalledTimes(1);
    expect(response.body.id).toEqual(guests.id);
    expect(response.body.userType).not.toBe(null)
  });
  // Add more tests for GET /:id, POST /, PATCH /:id, and DELETE /:id
});


