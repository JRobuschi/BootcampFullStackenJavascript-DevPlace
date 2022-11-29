var Sequelize = require("sequelize");
var sequelize = require("../config/mysql.config").sequelize;
const Joi = require("joi");
const validateRequest = require("../middlewares/validateRequest");
const DataTypes = require("mysql2");

var Category = sequelize.define("category", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.DataTypes.STRING,
  status: {
    type: Sequelize.DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

const ValidateCategory = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa el Nombre  de la categoria",
      "string.min": "El nombre de la categoria debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el Nombre  de la categoria",
    }),
  });
  validateRequest(req, res, next, schema);
};

module.exports = {
  Category,
  ValidateCategory,
};
