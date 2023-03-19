const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({
  fname: {
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
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Farmer', farmerSchema);