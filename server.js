const express = require("express");
const mongoose =  require('mongoose')
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("start");
});

app.listen(3000, () => {
  console.log("Hello World");
});

mongoose.connect("mongodb+srv://stankofb:StAvenue@cluster0.cef6sjr.mongodb.net/UGMC-API?retryWrites=true&w=majority").then(
  console.log('connected to mongoose') =>
console.log('connected to db')).catch(() =>
{
  console.log(error)
})