const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const product = require("./api/product");
const displayproduct = require("./api/displayproduct");
const Addproduct = require("./api/Addproduct");

const DB = require("./DBconnection/Connection,");
const Url =
  "mongodb+srv://WahabNoo12:Cukur3913@cluster0.ks5w0kj.mongodb.net/?retryWrites=true&w=majority";

DB(Url);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/assests", express.static("./assests"));
app.use("/uploads", express.static("./uploads"));
app.use(bodyParser.json());
app.use("/addproduct", Addproduct);
app.use("/products", product);
app.use("/displayproduct", displayproduct);

module.exports = app;
