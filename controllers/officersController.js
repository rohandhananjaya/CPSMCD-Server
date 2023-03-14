const asyncHandler = require('express-error-handler')

// @desc Get Officers
// @route GET /api/officers
// @access Private
const getOfficers = asyncHandler(async (req, res) =>{
    res.status(200).send(
        {
            message : "All Officers"
        }
    )
})

// @desc Add Officers
// @route POST /api/officers
// @access Private
const addOfficer = asyncHandler(async (req, res) =>{
    res.status(200).send(
        {
            message : "Add Officer"
        }
    )
})

// @desc Update Officers
// @route PUT /api/officers
// @access Private
const updateOfficer = asyncHandler(async (req, res) =>{
    res.status(200).send(
        {
            message : `Update Officer : ${req.params.id}`
        }
    )
})

// @desc Delete Officers
// @route DELETE /api/officers
// @access Private
const deleteOfficer = asyncHandler(async (req, res) =>{
    res.status(200).send(
        {
            message : `Delete Officer : ${req.params.id}`
        }
    )
})

module.exports = {
    getOfficers,
    addOfficer,
    updateOfficer,
    deleteOfficer
}