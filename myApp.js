require("dotenv").config();
let express = require("express");
let app = express();

module.exports = app;

absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

const style = process.env.MESSAGE_STYLE;

app.get("/json", (req, res) => {
  if (style === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello" });
  }
});

console.log(style);
