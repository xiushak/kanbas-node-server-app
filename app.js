import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import CourseRoutes from "./courses/routes.js";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";

mongoose.connect(
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/kanbas"
);
// create new express instance
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);
