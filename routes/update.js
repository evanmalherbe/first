module.exports = function (app) {
  const car = require("../controllers/cars.controller.js");
  app.post("/update", car.updateByOwner);
};
