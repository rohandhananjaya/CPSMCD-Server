const asyncHandler = require('express-async-handler')

const Farmers = require('../models/farmersModel')

// @desc Get farmers
// @route GET /api/farmers
// @access Private
const getFarmers = asyncHandler(async (req, res) => {
    const farmers = await Farmers.find()
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
        const farmer = await Farmers.create({
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
    const farmer = Farmers.findById(req.params.id)

    if (!farmer) {
        res.status(400)
        throw new Error('Farmer not found')
    } else {
        const updateFarmer = await Farmers.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send(updateFarmer)
    }


})

// @desc Delete farmer
// @route DELETE /api/farmers/:id
// @access Private
const deleteFarmer = asyncHandler(async (req, res) => {
    const farmer = Farmers.findById(req.params.id)

    if (!farmer) {
        res.status(400)
        throw new Error('Farmer not found')
    } else {
        const deleteFarmer = await Farmers.findByIdAndDelete(req.params.id)
        res.status(200).send(deleteFarmer)
    }
})

module.exports = {
    getFarmers,
    addFarmer,
    updateFarmer,
    deleteFarmer
}