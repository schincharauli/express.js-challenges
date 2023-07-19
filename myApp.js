let express = require("express");
let app = express();

// console.log("Hello World");

module.exports = app;

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// console.log(app);

absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});
