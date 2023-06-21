const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { connectionMethod } = require("./config/db");
const cors = require("cors");

const app = express();

// middle wares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Home Route");
});

app.use("/api/v1/student", require("./routes/studentRoutes"));
app.use("/api/v1/course", require("./routes/courseRoutes"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectionMethod();
});
