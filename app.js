const express = require("express");
const { ConnectDB } = require("./src/databases/mangoDB");
const userRouter = require("./src/routes/UserRoutes");
const blogRouter = require("./src/routes/BlogRoutes");
const recipesRouter = require("./src/routes/RecipesRoutes");
const excerciseRouter = require("./src/routes/ExcerciseRoutes");
const bmiRoutes = require("./src/routes/BmiRoutes");
const waterRoutes = require("./src/routes/WaterRoutes");
const eventsRoutes = require("./src/routes/EventRoutes");

const bodyParser = require("body-parser");
const app = express();
const port = 3000;

ConnectDB();

app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/recipes", recipesRouter);
app.use("/excercises", excerciseRouter);
app.use("/BMI", bmiRoutes);
app.use("/water", waterRoutes);
app.use("/events", eventsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
