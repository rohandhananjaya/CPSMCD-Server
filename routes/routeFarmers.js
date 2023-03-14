const express = require('express')
const router = express.Router()

const {
    getFarmers, 
    addFarmer, 
    updateFarmer, 
    deleteFarmer
} = require('../controllers/farmersController')

router.route('/').get(getFarmers).post(addFarmer)
router.route('/:id').put(updateFarmer).delete(deleteFarmer)

module.exports = router