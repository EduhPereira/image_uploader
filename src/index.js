require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

mongoose.connect(process.env.MONGO_URL);

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(routes);

app.listen(process.env.PORT || 3000);
