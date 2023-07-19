require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
let app = express();

module.exports = app;

absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

app.use(function (req, res, next) {
  let string = req.method + " " + req.path + " -  " + req.ip;
  console.log(string);
  next();
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.get("/name", (req, res) => {
  res.json({ name: req.query.first + " " + req.query.last });
});

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.post("/name", function (req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});
