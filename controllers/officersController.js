const asyncHandler = require('express-async-handler')
const Officers = require('../models/officersModel')

// @desc Get Officers
// @route GET /api/officers
// @access Private
const getOfficers = asyncHandler(async (req, res) => {
    const officers = await Officers.find()
    res.status(200).json(officers)
})

// @desc Add Officers
// @route POST /api/officers
// @access Private
const addOfficer = asyncHandler(async (req, res) => {
    if (!req.body.fname) {
        throw new Error('Required data missing')
    } else {
        const officer = await Officers.create({
            fname: req.body.fname,
            lname: req.body.lname
        })
        res.status(200).send(officer)
    }
})

// @desc Update Officers
// @route PUT /api/officers
// @access Private
const updateOfficer = asyncHandler(async (req, res) => {
    res.status(200).send(
        {
            message: `Update Officer : ${req.params.id}`
        }
    )
})

// @desc Delete Officers
// @route DELETE /api/officers
// @access Private
const deleteOfficer = asyncHandler(async (req, res) => {
    res.status(200).send(
        {
            message: `Delete Officer : ${req.params.id}`
        }
    )
})

module.exports = {
    getOfficers,
    addOfficer,
    updateOfficer,
    deleteOfficer
}