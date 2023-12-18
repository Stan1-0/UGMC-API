const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("start");
});

app.listen(3000, () => {
  console.log("Hello World");
});
