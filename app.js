import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import CourseRoutes from "./courses/routes.js";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";

mongoose.connect(process.env.MONGO_URL);
// create new express instance
const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);
