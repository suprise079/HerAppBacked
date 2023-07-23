const express = require("express");
const { ConnectDB } = require("./src/databases/mangoDB");
const userRouter = require("./src/routes/UserRoutes");
const blogRouter = require("./src/routes/BlogRoutes");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

ConnectDB();

app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
