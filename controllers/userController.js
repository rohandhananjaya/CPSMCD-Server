const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const generateToken = require('./jwtTokenController'); // Assuming you have a function for generating JWT tokens

// @desc Get all users
// @route GET /api/users
// @access Private (assuming authentication middleware is used)

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// @desc Get a user
// @route GET /api/users/:id
// @access Private (assuming authentication middleware is used)
const getUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json(user);
});

// @desc Add a user
// @route POST /api/users
// @access Public

const addUser = asyncHandler(async (req, res) => {
  const { name, email, pass, age, address, area, type } = req.body;
  
  const existingUser = await User.findOne({ email });
    
  if (existingUser) {
    res.status(400);
    throw new Error('User already exists');
  }
  
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(pass, salt);

  const user = await User.create({
    name,
    email,
    pass: hashedPass,
    age,
    address,
    area,
    type,
  });
  
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    type: user.type,
    token: generateToken(user._id),
  });
});

// @desc Update a user
// @route PUT /api/users/:id
// @access Private (assuming authentication middleware is used)

const updateUser = asyncHandler(async (req, res) => {
  const { name, email, pass, age,address, area, type, cultivation,profilepic } = req.body;
  const userId = req.params.id;
  const updateFields = {};

  if (name) updateFields.name = name;
  if (email) updateFields.email = email;
  if (pass) {
    const salt = await bcrypt.genSalt(10);
    updateFields.pass = await bcrypt.hash(pass, salt);
  }
  if (age)updateFields.age = age;
  if (address)updateFields.address = address;
  if (area)updateFields.area = area;
  if (type)updateFields.type = type;
  if (cultivation)updateFields.cultivation = cultivation;
  if (profilepic)updateFields.profilepic = profilepic;

  const updateUser = await User.findByIdAndUpdate(
    userId,
    updateFields,
    { new: true }
  );

  if (!updateUser) {
    res.status(400);
    throw new Error('User not found');
  }else{
    res.status(200).json(updateUser);
  }


});

// @desc Delete a user
// @route DELETE /api/users/:id
// @access Private (assuming authentication middleware is used)

const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const user = await User.findByIdAndRemove(userId);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json({
    message: 'User removed',
  });
});

// @desc Login an officer
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
    const { email, pass } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await bcrypt.compare(pass, user.pass))) {
      res.status(200).json({
        _id: user._id,
        token: generateToken(user._id),
        name: user.name,
        email : user.email,
        area : user.area,
        type : user.type,
        age : user.age,
        address : user.address,
      });
    } else {
      res.status(401); // Use 401 for unauthorized
      throw new Error('Invalid credentials');
    }
  });

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
};