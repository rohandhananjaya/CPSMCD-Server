const express = require('express');
const router = express.Router();

const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Routes
router.route('/login').post(loginUser);
router.route('/').get(protect, getUsers).post(addUser);
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser).get(protect, getUser);

module.exports = router;
