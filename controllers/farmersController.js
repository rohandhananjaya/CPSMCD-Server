// @desc Get farmers
// @route GET /api/farmers
// @access Private
const getFarmers = (req,res) =>{
    res.status(200).send(
        {
            message : 'Get farmers'
        }
    )
}

// @desc Add farmers
// @route POST /api/farmers
// @access Private
const addFarmer = (req,res) =>{
    res.status(200).send(
        {
            message : 'Add farmer'
        }
    )
}

// @desc Update farmer
// @route PUT /api/farmers/:id
// @access Private
const updateFarmer = (req,res) =>{
    res.status(200).send(
        {
            message : `Update farmer id : ${req.params.id}`
        }
    )
}

// @desc Delete farmer
// @route DELETE /api/farmers/:id
// @access Private
const deleteFarmer = (req,res) =>{
    res.status(200).send(
        {
            message : `Delete farmer id : ${req.params.id}`
        }
    )
}

module.exports = {
    getFarmers,
    addFarmer,
    updateFarmer,
    deleteFarmer
}