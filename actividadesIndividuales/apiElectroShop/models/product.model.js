var Sequelize = require("sequelize");
var sequelize = require("../config/mysql.config").sequelize;
const Joi = require("joi");
const validateRequest = require("../middlewares/validateRequest");
const DataTypes = require("mysql2");

var Products = sequelize.define(
  "products",
  {
    idProduct: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.DataTypes.STRING,
    },
    description: {
      type: Sequelize.DataTypes.STRING,
    },
    stock: {
      type: Sequelize.DataTypes.INTEGER,
    },
    price: {
      type: Sequelize.DataTypes.INTEGER,
    },
    image: { type: Sequelize.DataTypes.TEXT },
  }
  // {
  //   classMethods: {
  //     associate: (models) => {
  //       Products.belongsTo(models.category, {
  //         foreignKey: {
  //           fieldName: "category",
  //           allowNull: true,
  //           require: true,
  //         },
  //         targetKey: "id",
  //       });
  //     },
  //   },
  // }
);

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
    stock: Joi.number().integer().required().messages({
      "number.empty": "Ingresa la cantidad de stock",
      "number.integer": "Ingresa la cantidad de stock",
      "any.required": "Ingresa la cantidad de stock",
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
