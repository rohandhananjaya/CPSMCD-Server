const getFarmer = (req,res) =>{
    res.status(200).send(
        {
            message : 'Get farmers 3.0'
        }
    )
}

module.exports = {
    getFarmer,
}