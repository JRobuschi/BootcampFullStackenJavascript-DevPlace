const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  const product = await Product.find();
  res.json(product);
};
const findByProduct = async (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ message: "Id no encontrado" });
    });
};
const UpdateByProduct = async (req, res) => {
  const { id } = req.params;
  await Product.updateOne({ _id: id }, req.body);
  res.json({ message: "Datos Modificados" });
};
const deleteByProduct = async (req, res) => {
  const { id } = req.params;
  await Product.remove({ _id: id });
  res.json({ message: "Datos Eliminados" });
};
const createProduct = async (req, res) => {
  const product = new Product(req.body);
  product.save();
  res.json(product);
};
module.exports = {
  getProducts,
  createProduct,
  findByProduct,
  UpdateByProduct,
  deleteByProduct,
};
