import express from "express";
// create new express instance
const app = express();
app.get("/hello", (req, res) => {
  res.send("Life is good!");
});
app.get("/", (req, res) => {
  res.send("Welcome to Full Stack Development!");
});
// listen to http://localhost:4000
app.listen(4000);
