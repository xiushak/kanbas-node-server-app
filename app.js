// equivalent to import
const express = require("express");
// create new express instance
const app = express();
// create a route that responds 'hello'
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
// listen to http://localhost:4000
app.listen(4000);
