const express = require('express');
const router = express.Router();

const {
  getCrops,
  addCrop,
  updateCrop,
  deleteCrop,
} = require('../controllers/cropsController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getCrops).post(protect, addCrop);
router.route('/:id').put(protect, updateCrop).delete(protect, deleteCrop);

module.exports = router;