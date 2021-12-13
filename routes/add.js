module.exports = function (app) {
  const car = require("../controllers/cars.controller.js");

  app.post("/add", (req, res) => {
    console.log("Req.body says:" + req.body);
    car.create;
  });
};
