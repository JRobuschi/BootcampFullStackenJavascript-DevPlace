const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  findByProduct,
  UpdateByProduct,
  deleteByProduct,
} = require("../controllers/productsController");

/**Get all Products */
router.get("/products", getProducts);
router.post("/products", createProduct);
router.get("/products/:id", findByProduct);
router.put("/products/:id", UpdateByProduct);
router.delete("/products/:id", deleteByProduct);

module.exports = router;
