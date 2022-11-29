const express = require("express");
const uploadMulter = require("../../config/multer.config");
const product = express.Router();
const {
  getProduct,
  createProduct,
  getByIdProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/productsController");
const { ValidateProducts } = require("../../models/product.model");

/**Get all Products */
product.get("/", getProduct);
product.post(
  "/",

  createProduct
);
product.get("/:id", getByIdProduct);
product.put("/:id", updateProduct);
product.delete("/:id", deleteProduct);

module.exports = product;
