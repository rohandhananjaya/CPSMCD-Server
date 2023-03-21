const mongoose = require('mongoose')

const officerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is missing']
    },
    email: {
        type: String,
        required: [true, 'Email is missing'],
        unique:true
    },
    pass: {
        type: String,
        required: [true, 'First name is missing']
    },
    area:{
        type:Number,
        required:[true,'Area is missin']
    }
})

module.exports = mongoose.model('Officer', officerSchema)