const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'First name is missing']
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
    type: Number,
    required:[true,'Age is missing']
  },
  address_1:{
    type:String,
    required:false
  },
  address_2:{
    type:String,
    required:false
  },
  address_3:{
    type:String,
    required:false
  },
  area:{
    type:Number,
    required:[true,'Area is missing']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Farmer', farmerSchema);