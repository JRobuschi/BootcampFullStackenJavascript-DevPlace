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
const ValidateToken = require("../../middlewares/validateToken");

/**Get all Products */
product.get("/", ValidateToken, getProduct);
product.post(
  "/",
  [uploadMulter.single("image"), ValidateProducts, ValidateToken],
  createProduct
);
product.get("/:idProduct", ValidateToken, getByIdProduct);
product.put("/:idProduct", ValidateToken, updateProduct);
product.delete("/:idProduct", ValidateToken, deleteProduct);

module.exports = product;
