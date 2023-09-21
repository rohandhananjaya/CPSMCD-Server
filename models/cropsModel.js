const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Crop name is missing'],
  },
  costOfSeed: {
    type: Number,
    required: [true, 'Cost of seed is missing'],
  },
  timeToGrow: {
    type: Number,
    required: false, 
  },
  statistics: [{
    year: Number,
    month: Number,
    quantity: Number,
    min_price: Number,
    max_price: Number,
  }],

});

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;