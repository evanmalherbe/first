// Import mongoose
const mongoose = require("mongoose");

// Create schema for database entries (each document in db represents a car)
let CarsSchema = mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  registration: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

// module.exports makes the model available outside of your module
module.exports = mongoose.model("cars", CarsSchema);
