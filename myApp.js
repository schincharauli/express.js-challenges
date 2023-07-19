require("dotenv").config();
let express = require("express");
let app = express();

module.exports = app;

// module.exports = echo;

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

// app.use(function (req, res, next) {
//   let string = req.method + " " + req.path + " -  " + req.ip;
//   console.log(string);
//   next();
// });

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

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});
