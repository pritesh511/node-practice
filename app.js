const express = require("express");
const app = new express();

//ROUTES

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/post", (req, res) => {
  res.send("This is post page");
});

app.listen(3000, () => {
  console.log("Run Port is 3000");
});
