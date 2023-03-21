const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

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
    if (!req.body.name || !req.body.email || !req.body.pass || !req.body.age || !req.body.area) {
        //res.status(400) 
        throw new Error('Required data missing!')
    } else {

        const email = req.body.email
        const userExists = await Farmers.findOne({ email })

        if (userExists) {
            res.status(400)
            throw new Error('Farmer already exsists')
        } else {
            //Password Hashing
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(req.body.pass, salt)

            const farmer = await Farmers.create({
                name: req.body.name,
                email: req.body.email,
                pass: hashedPass,
                age: req.body.age,
                address_1: req.body.address_1,
                address_2: req.body.address_2,
                address_3: req.body.address_3,
                area: req.body.area
            })
            res.status(201).send(farmer)
        }
    }
})

// @desc Update farmer
// @route PUT /api/farmers/:id
// @access Private
const updateFarmer = asyncHandler(async (req, res) => {
    //Password Hashing
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.pass, salt)

    const updateFarmer = await Farmers.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        pass: hashedPass,
        age: req.body.age,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        address_3: req.body.address_3,
        area: req.body.area
    }, {
        new: true
    })
    if (!updateFarmer) {
        res.status(400)
        throw new Error('Farmer not found')
    }
    res.status(200).send(updateFarmer)

})

// @desc Delete farmer
// @route DELETE /api/farmers/:id
// @access Private
const deleteFarmer = asyncHandler(async (req, res) => {

    const deleteFarmer = await Farmers.findByIdAndRemove(req.params.id)
    if (!deleteFarmer) {
        res.status(400)
        throw new Error("Farmer not found")
    }
    res.status(200).send(deleteFarmer)

})

const loginFarmer = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Farmer Login'
    })
})


module.exports = {
    getFarmers,
    addFarmer,
    updateFarmer,
    deleteFarmer,
    loginFarmer
}