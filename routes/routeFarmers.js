const express = require('express')
const router = express.Router()

const {getFarmer} = require('../controllers/farmersController')

router.get('/', getFarmer)

router.post('/',(req,res)=>{
    res.status(200).send(
        {
            message : 'Add farmer'
        }
    )
})

router.put('/:id',(req,res)=>{
    res.status(200).send(
        {
            message : `Update farmer id : ${req.params.id}`
        }
    )
})

router.delete('/:id',(req,res)=>{
    res.status(200).send(
        {
            message : `Delete farmer id : ${req.params.id}`
        }
    )
})

module.exports = router