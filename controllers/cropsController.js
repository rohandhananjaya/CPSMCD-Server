const asyncHandler = require('express-async-handler');
const Crop = require('../models/cropsModel');

// @desc Get all crops
// @route GET /api/crops
// @access Private
const getCrops = asyncHandler(async (req, res) => {
  const crops = await Crop.find();
  res.status(200).json(crops);
});

// @desc Add a new crop
// @route POST /api/crops
// @access Private
const addCrop = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.costOfSeed || !req.body.timeToGrow) {
    res.status(400);
    throw new Error('Required data missing!');
  } else {
    const newCrop = await Crop.create({
      name: req.body.name,
      costOfSeed: req.body.costOfSeed,
      timeToGrow: req.body.timeToGrow,
      statistics: req.body.statistics || [], // can provide an array of statistics if available
    });
    res.status(201).json(newCrop);
  }
});

// @desc Update a crop
// @route PUT /api/crops/:id
// @access Private
const updateCrop = asyncHandler(async (req, res) => {
  const { name, costOfSeed, timeToGrow, statistics } = req.body;
  const updateFields = {};

  if (name) updateFields.name = name;
  if (costOfSeed) updateFields.costOfSeed = costOfSeed;
  if (timeToGrow) updateFields.timeToGrow = timeToGrow;
  if (statistics) updateFields.statistics = statistics;

  const updatedCrop = await Crop.findByIdAndUpdate(
    req.params.id,
    updateFields,
    { new: true }
  );

  if (!updatedCrop) {
    res.status(400);
    throw new Error('Crop not found');
  }

  res.status(200).json(updatedCrop);
});

// @desc Delete a crop
// @route DELETE /api/crops/:id
// @access Private
const deleteCrop = asyncHandler(async (req, res) => {
  const deletedCrop = await Crop.findByIdAndRemove(req.params.id);
  if (!deletedCrop) {
    res.status(400);
    throw new Error('Crop not found');
  }
  res.status(200).json(deletedCrop);
});

module.exports = {
  getCrops,
  addCrop,
  updateCrop,
  deleteCrop,
};
