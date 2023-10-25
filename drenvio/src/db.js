require("dotenv").config();
const { URL_DB } = process.env;
const mongoose = require("mongoose");

mongoose
    .connect(URL_DB)
    .then((db) => console.log("connected to MongoDB"))
    .catch((err) => console.error(err));

const User = require("./models/User");
const Product = require("./models/Product");
const Brand = require("./models/Brand");

module.exports = { mongoose, User, Product, Brand };
