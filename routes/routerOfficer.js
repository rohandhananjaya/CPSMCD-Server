const express = require("express")
const router = express.Router()

const {
    getOfficers,
    addOfficer,
    updateOfficer,
    deleteOfficer,
    loginOfficer
} = require("../controllers/officersController")
const { protect } = require('../middleware/authMiddleware')

router.route('/login').post(loginOfficer)
router.route('/').get(protect, getOfficers).post(protect, addOfficer)
router.route('/:id').put(protect, updateOfficer).delete(protect, deleteOfficer)

module.exports = router