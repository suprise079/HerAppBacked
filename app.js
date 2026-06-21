const express = require("express");
const { ConnectDB } = require("./databases/mangoDB");
const userRouter = require("./src/user/UserRoutes");
const blogRouter = require("./src/blog/BlogRoutes");
const recipesRouter = require("./src/recipe/RecipesRoutes");
const excerciseRouter = require("./src/exercise/ExcerciseRoutes");
const bmiRoutes = require("./src/bmi/BmiRoutes");
const waterRoutes = require("./src/water/WaterRoutes");
const eventsRoutes = require("./src/event/EventRoutes");
const cartRouter = require("./src/shoppingList/CartRoutes");
const activityRoutes = require("./src/activity/ActivityRoutes");
const bodyParser = require("body-parser");
const { authenticateUser } = require("./middleware/authMiddleware");
const { createUserController, getUserController } = require("./src/user/UserController");

const app = express();
const port = 3000;

app.use(bodyParser.json());

if (process.env.MOCK_MODE === "true") {
  console.log("Starting in mock mode — all routes served with dummy data.");
  app.use("/", require("./src/mock/mockRouter"));

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
} else {
  // ----- public routes -----
  app.post("/user/create", (req, res) => createUserController(req, res));

  // ----- private routes -----
  app.use("/user", authenticateUser, userRouter);
  app.use("/blog", blogRouter);
  app.use("/recipes", recipesRouter);
  app.use("/cart", authenticateUser, cartRouter);
  app.use("/excercises", authenticateUser, excerciseRouter);
  app.use("/BMI", bmiRoutes);
  app.use("/water", waterRoutes);
  app.use("/events", eventsRoutes);
  app.use("/activity", activityRoutes);

  app.use("/", (req, res) => {
    console.log("Received request at root endpoint..");
    console.log("Request headers:", req.headers);
    res.json({ status: "UP" });
  });

  ConnectDB().then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  });
}

module.exports = app;
