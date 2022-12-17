const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PRODUCT = require("../model/PRODUCT.js");
const { products } = require("../data/product.js");

dotenv.config();

mongoose.connect(process.env.DB_URL, () => {
  console.log("Connect to database");
});

const seedProducts = async () => {
  try {
    await PRODUCT.deleteMany();
    console.log("Product deleted");
    await PRODUCT.insertMany(products);
    console.log("Product added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
