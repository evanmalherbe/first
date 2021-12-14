const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();
const car = require("./controllers/cars.controller.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Import routes
require("./routes/display.js")(app);
require("./routes/add.js")(app);
require("./routes/update.js")(app);
require("./routes/delete.js")(app);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//HYPERION note: remember that you can get this uri for connecting
//to your database from Atlas>Connect from your app.
const uri =
  "mongodb+srv://evanmalherbe:jinnscir@cluster0.xrjxb.mongodb.net/test?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

/* Really struggled to connect to the database initially, until I read this website:
 https://mongoosejs.com/docs/connections.html
 and figured out that the "useMongoClient: true" option was causing it not to connect, as it is "not supported". Removed the option and now it works. */
mongoose.connect(uri);

mongoose.connection.on("error", function () {
  console.log("Connection to Mongo established.");
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});

mongoose.connection.once("open", function () {
  console.log("Successfully connected to the database");
});

// Set port number for server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Settings for deploying to Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Export module to be imported by other files
module.exports = app;
