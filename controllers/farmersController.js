const asyncHandler = require('express-async-handler')

const Farmer = require('../models/farmersModel')

// @desc Get farmers
// @route GET /api/farmers
// @access Private
const getFarmers = asyncHandler(async (req, res) => {
    const farmers = await Farmer.find()
    res.status(200).json(farmers)
})

// @desc Add farmers
// @route POST /api/farmers
// @access Private
const addFarmer = asyncHandler(async (req, res) => {
    if (!req.body.fname || !req.body.age || !req.body.address_1 || !req.body.address_2 || !req.body.address_3) {
        //res.status(400)
        throw new Error('Required data missing!')
    } else {
        const farmer = await Farmer.create({
            fname: req.body.fname,
            age: req.body.age,
            address_1: req.body.address_1,
            address_2: req.body.address_2,
            address_3: req.body.address_3,

        })
        res.status(200).send(farmer)
    }
})

// @desc Update farmer
// @route PUT /api/farmers/:id
// @access Private
const updateFarmer = asyncHandler(async (req, res) => {
    res.status(200).send(
        {
            message: `Update farmer id : ${req.params.id}`
        }
    )
})

// @desc Delete farmer
// @route DELETE /api/farmers/:id
// @access Private
const deleteFarmer = asyncHandler(async (req, res) => {
    res.status(200).send(
        {
            message: `Delete farmer id : ${req.params.id}`
        }
    )
})

module.exports = {
    getFarmers,
    addFarmer,
    updateFarmer,
    deleteFarmer
}