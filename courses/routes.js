import Database from "../Database/index.js";

function CourseRoutes(app) {
  // update a course
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id.$oid === id ? { c, ...course } : c
    );
    res.sendStatus(204);
  });
  // delete a course
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses.filter((c) => c._id.$oid !== id);
    res.sendStatus(204);
  });
  // add a course
  app.post("/api/courses", (req, res) => {
    const course = {
      ...req.body,
      _id: { $oid: new Date().getTime().toString() },
    };
    Database.courses.push(course);
    res.send(course);
  });
  // get all the courses
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
  //get a single course
  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = Database.courses.find((c) => c._id.$oid === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });
}

export default CourseRoutes;
