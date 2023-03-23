const express = require('express')
const router = express.Router()

const {
    getFarmers,
    addFarmer,
    updateFarmer,
    deleteFarmer,
    loginFarmer
} = require('../controllers/farmersController')
const { protect } = require('../middleware/authMiddleware')

router.route('/login').post(loginFarmer)
router.route('/').get(protect, getFarmers).post(protect, addFarmer)
router.route('/:id').put(protect, updateFarmer).delete(protect, deleteFarmer)

module.exports = router