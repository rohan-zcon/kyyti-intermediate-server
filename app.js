var createError = require("http-errors");
var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var usersRouter = require("./routes/users");
var allRouter = require("./routes/all");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  bodyParser.json({
    enabled: true,
    limit: "50kb",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/*", allRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("err: " + err);
  // res.render("error");
});

module.exports = app;
