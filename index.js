var express = require("express");

var app = express();

app.get("contact", (req, res) => {
  res.send("Hello node");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
