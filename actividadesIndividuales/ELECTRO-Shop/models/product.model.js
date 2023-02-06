const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  title: { required: true, type: String },
  description: { required: true, type: String },
  price: { required: true, type: String },
  type: { required: true, type: String },
  img: { required: true, type: String },
  quantity: { required: true, type: Number },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("products_db", ProductsSchema);
