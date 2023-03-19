const mongoose = require('mongoose')

const officerSchema = mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Name is missing']
    },
    lname: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('Officer', officerSchema)