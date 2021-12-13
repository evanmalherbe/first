module.exports = function (app) {
  const car = require("../controllers/cars.controller.js");
  let newInfo = "Bob Nothope";
  app.get("/update", car.updateByOwner);
};
