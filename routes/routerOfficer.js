const express = require("express")
const router = express.Router()

const {
    getOfficers,
    addOfficer,
    updateOfficer,
    deleteOfficer,
    loginOfficer
} = require("../controllers/officersController")

router.route('/login').post(loginOfficer)
router.route('/').get(getOfficers).post(addOfficer)
router.route('/:id').put(updateOfficer).delete(deleteOfficer)


module.exports = router