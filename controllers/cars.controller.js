/* In this file, you will create all the code needed to perform CRUD operations using Mongoose. */

// Import car model file
const Car = require("../models/cars.model.js");

// Add new car to collection
exports.create = function (req, res) {
  // Get form info from req.body and add to new Car model
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

// Find all cars in collection and display (do not display id and __v )
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

// Find all cars older than 5 years and list model, make, registration number and current owner
exports.findOlder = function (req, res) {
  Car.find({ year: { $lt: 2016 } }, "-_id -__v", function (err, cars) {
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
  // Name of owner who's car we want to update
  let query = { owner: req.body.ownerName };

  // Update car with new info
  Car.findOneAndUpdate(
    query,
    // Fields to update from form input
    {
      year: req.body.year,
      make: req.body.make,
      model: req.body.model,
      colour: req.body.colour,
      registration: req.body.regNum,
    },
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

// Update more than one car document. Learned to do this here:
// https://stackoverflow.com/questions/1740023/mongodb-how-to-update-multiple-documents-with-a-single-command
exports.updateMany = function (req, res) {
  // Name of owner who's car we want to update
  let query = { owner: req.body.ownerName };

  // Update cars with new info
  Car.updateMany(query, { colour: req.body.colour }, function (err, doc) {
    if (err) {
      console.log("Something wrong when updating data!");
      res.send({ message: "ERROR: Not Updated. " + err });
    }
    res.send({ message: "Updated!" });
  });
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
