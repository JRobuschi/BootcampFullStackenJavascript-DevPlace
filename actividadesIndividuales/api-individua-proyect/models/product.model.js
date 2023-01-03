var Sequelize = require("sequelize");
var sequelize = require("../config/mysql.config").sequelize;
const Joi = require("joi");
const validateRequest = require("../middlewares/validateRequest");

var Products = sequelize.define("products", {
  idProduct: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  image: { type: Sequelize.TEXT },
  category: { type: Sequelize.STRING },
});

const ValidateProducts = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa el Nombre  del producto",
      "string.min": "El nombre del producto debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el Nombre  del producto",
    }),
    description: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa el Nombre  del producto",
      "string.min": "El nombre del producto debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el Nombre  del producto",
    }),
    price: Joi.number().integer().required().messages({
      "number.empty": "Ingresa el precio",
      "number.integer": "Ingresa el precio",
      "any.required": "Ingresa el precio",
    }),
  });
  validateRequest(req, res, next, schema);
};

module.exports = { Products, ValidateProducts };
