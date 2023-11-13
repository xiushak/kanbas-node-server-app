import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
// create new express instance
const app = express();
Lab5(app);
Hello(app);
// listen to http://localhost:4000
app.listen(4000);
