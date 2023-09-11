const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
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
    age:{
        type:Number,
        required:[true,'Age is missing']
    },
    address:{
        type:String,
        required:false
    },
    area:{
        type:String,
        required:[true,'Area is missing']
    },
    type:{
        type:String,
        required:[true,'Type is missing']
    },
    }, {
        timestamps: true
      });
    
    module.exports = mongoose.model('User', userSchema)