require("dotenv").config();
let express = require("express");
let app = express();

module.exports = app;

absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

// app.get("/json", (req, res) => {
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     res.json({ message: "HELLO JSON" });
//   } else {
//     res.json({ message: "Hello json" });
//   }
// });

// console.log(style);

app.use(function (req, res, next) {
  let string = req.method + " " + req.path + " -  " + req.ip;
  console.log(string);
  next();
});
