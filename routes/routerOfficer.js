const express = require("express")
const router = express.Router()

const {
    getOfficers,
    addOfficer,
    updateOfficer,
    deleteOfficer
} = require("../controllers/officersController")

router.route('/').get(getOfficers).post(addOfficer)
router.route('/:id').put(updateOfficer).delete(deleteOfficer)

module.exports = router