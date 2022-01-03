const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:sLNq6URF2KDxvDlh@cluster0.5cdft.mongodb.net/upload"
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes);

app.listen(process.env.port || 3000);
