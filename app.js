import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
// create new express instance
const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
// listen to http://localhost:4000
app.listen(4000);
