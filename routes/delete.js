module.exports = function (app) {
  const car = require("../controllers/cars.controller.js");
  app.get("/delete", car.deleteCarsByOwner);
};
