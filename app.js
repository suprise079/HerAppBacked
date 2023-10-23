const express = require("express");
const { ConnectDB } = require("./databases/mangoDB");
const userRouter = require("./src/user/UserRoutes");
const blogRouter = require("./src/blog/BlogRoutes");
const recipesRouter = require("./src/recipe/RecipesRoutes");
const excerciseRouter = require("./src/exercise/ExcerciseRoutes");
const bmiRoutes = require("./src/bmi/BmiRoutes");
const waterRoutes = require("./src/water/WaterRoutes");
const eventsRoutes = require("./src/event/EventRoutes");
const excerciseTrackingRoutes = require("./src/exercise/ExcerciseTrackingRoutes");
const cartRouter = require("./src/shoppingList/CartRoutes");

const bodyParser = require("body-parser");
const app = express();
const port = 3000;

ConnectDB();

app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/recipes", recipesRouter);
app.use("/cart", cartRouter);
app.use("/excercises", excerciseRouter);
app.use("/BMI", bmiRoutes);
app.use("/water", waterRoutes);
app.use("/events", eventsRoutes);
app.use("/excerciseTracking", excerciseTrackingRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
