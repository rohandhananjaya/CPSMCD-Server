const asyncHandler = require('express-error-handler')

// @desc Get farmers
// @route GET /api/farmers
// @access Private
const getFarmers = asyncHandler(async (req,res) =>{
    res.status(200).send(
        {
            message : 'All farmers'
        }
    )
})

// @desc Add farmers
// @route POST /api/farmers
// @access Private
const addFarmer = asyncHandler(async (req,res) =>{
    if(!req.body.name || !req.body.age || !req.body.address_1 || !req.body.address_2 || !req.body.address_3){
        res.status(400)
        throw new Error('Required data missing!')
    }else{
        res.status(200).send({message:'Farmer added'})
    }
})

// @desc Update farmer
// @route PUT /api/farmers/:id
// @access Private
const updateFarmer = asyncHandler(async (req,res) =>{
    res.status(200).send(
        {
            message : `Update farmer id : ${req.params.id}`
        }
    )
})

// @desc Delete farmer
// @route DELETE /api/farmers/:id
// @access Private
const deleteFarmer = asyncHandler(async (req,res) =>{
    res.status(200).send(
        {
            message : `Delete farmer id : ${req.params.id}`
        }
    )
})

module.exports = {
    getFarmers,
    addFarmer,
    updateFarmer,
    deleteFarmer
}