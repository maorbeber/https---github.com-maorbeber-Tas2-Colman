const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PRODUCT = require("./server/model/product.js");
const dbConnection = require("./server/db/dbConnection");
const ORDER = require("./server/model/order.js");

const app = express();

//external middlewares
app.use(cors());
dotenv.config();

//server init
dbConnection();

//Internal middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.get("/api/products", async (req, res) => {
  const products = await PRODUCT.find({});
  res.status(200).json(products);
});

app.post("/api/order", async (req, res) => {
  const order = await ORDER.create(req.body);
  res.status(200).json({
    success: true,
    order,
  });
});

//bad request
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
