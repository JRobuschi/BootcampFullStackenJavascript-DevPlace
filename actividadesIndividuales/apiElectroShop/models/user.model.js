var Sequelize = require("sequelize");
var sequelize = require("../config/mysql.config").sequelize;
const Joi = require("joi");
const validateRequest = require("../middlewares/validateRequest");
const DataTypes = require("mysql2");

var User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.DataTypes.STRING,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
    status: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    indexes: [
      {
        fields: ["email"],
        unique: true,
      },
    ],
    defaultScope: {
      attributes: {
        exclude: ["password"],
      },
    },
  }
);

const ValidateUser = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa el Nombre",
      "string.min": "El nombre debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el Nombre",
    }),
    email: Joi.string().email().required().messages({
      "email.empty": "Ingresa el email",
      "any.required": "Ingresa el email",
    }),
    password: Joi.string().min(5).max(100).required().messages({
      "password.empty": "Ingresa el password",
      "password.min": "El password debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el password",
    }),
  });
  validateRequest(req, res, next, schema);
};

module.exports = { User, ValidateUser };
