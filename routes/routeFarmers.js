const express = require('express')
const router = express.Router()

const {
    getFarmers, 
    addFarmer, 
    updateFarmer, 
    deleteFarmer,
    loginFarmer
} = require('../controllers/farmersController')

router.route('/login').post(loginFarmer)
router.route('/').get(getFarmers).post(addFarmer)
router.route('/:id').put(updateFarmer).delete(deleteFarmer)

module.exports = router