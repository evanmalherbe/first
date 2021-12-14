/* In this file, you will create all the code needed to perform CRUD operations using Mongoose. */
const Car = require("../models/cars.model.js");
//const mongoose = require("mongoose");

// Add new car to collection
exports.create = function (req, res) {
  // Create new car - substitute values here with variables later
  let carModel = new Car({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    colour: req.body.colour,
    registration: req.body.regNum,
    owner: req.body.ownerName,
  });

  // Save new car to collection
  carModel.save(function (err, data) {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Some error occurred while adding the car." });
    } else {
      console.log(data);
      res.send({ message: "The car has been added" });
    }
  });
};

// Find all cars in collection and display
exports.findAll = function (req, res) {
  Car.find({}, "-_id -__v", function (err, cars) {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Some error occurred while retrieving cars." });
    } else {
      res.json({ message: `${cars}` });
    }
  });
};

// Update an existing car document chosen by owner name
exports.updateByOwner = function (req, res) {
  let query = { owner: req.body.ownerName }; // Name of owner who's car we want to update

  // Update car with new info
  Car.findOneAndUpdate(
    query,
    {
      year: req.body.year,
      make: req.body.make,
      model: req.body.model,
      colour: req.body.colour,
      registration: req.body.regNum,
    }, // Updated owner name or add other fields to be updated
    { new: true },
    function (err, doc) {
      if (err) {
        console.log("Something wrong when updating data!");
        res.send({ message: "ERROR: Not Updated. " + err });
      }
      res.send({ message: "Updated!" });
    }
  );
};

// Delete car identified by owner name
exports.deleteCarsByOwner = function (req, res) {
  // Substitute owner name below with variable later
  Car.findOneAndRemove({ owner: req.body.ownerToDelete }, function (err) {
    if (err) {
      console.log("ERROR: Car NOT removed. " + err);
      res.send({ message: "ERROR: Car NOT removed. " + err });
    }
    res.send({ message: "Car removed." });
  });
};
