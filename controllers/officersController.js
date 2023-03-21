const asyncHandler = require('express-async-handler')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

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
    if (!req.body.name || !req.body.email || !req.body.pass || !req.body.area) {
        throw new Error('Required data missing')
    } else {
        const email = req.body.email
        const officerExsists = await Officers.findOne({ email })
        if (officerExsists) {
            res.status(400)
            throw new Error('Officer already exsists')
        } else {
            //Password Hashing
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(req.body.pass, salt)

            const officer = await Officers.create({
                name: req.body.name,
                email: req.body.email,
                pass: hashedPass,
                area: req.body.area
            })
            res.status(201).send(officer)
        }
    }
})

// @desc Update Officers
// @route PUT /api/officers
// @access Private
const updateOfficer = asyncHandler(async (req, res) => {
    //Password Hashing
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.pass, salt)

    const updateOfficer = await Officers.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            pass: hashedPass,
            area: req.body.area
        },
        {
            new: true
        })
    if (!updateOfficer) {
        res.status(400)
        throw new Error("Officer not found")
    }
    res.status(200).send(updateOfficer)

})

// @desc Delete Officers
// @route DELETE /api/officers
// @access Private
const deleteOfficer = asyncHandler(async (req, res) => {

    const deleteOfficer = await Officers.findByIdAndRemove(req.params.id)
    if (!deleteOfficer) {
        res.status(400)
        throw new Error("Officer not found")
    }
    res.status(200).send(deleteOfficer)

})

// @desc Login Officers
// @route DELETE /api/officers/login
// @access Public
const loginOfficer = asyncHandler(async (req, res) => {
    const {email,pass} = req.body

    const user = await Officers.findOne({email})

    if(user && (await bcrypt.compare(pass,user.pass))){
        res.status(200)
        res.send(user)
    }else{
        res.status(400)
        throw new Error("Invalid credentials")
    }
})

module.exports = {
    getOfficers,
    addOfficer,
    updateOfficer,
    deleteOfficer,
    loginOfficer
}