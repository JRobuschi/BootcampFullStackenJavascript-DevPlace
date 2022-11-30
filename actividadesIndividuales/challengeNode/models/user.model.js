var Sequelize = require("sequelize");
var sequelize = require("../config/mysql.config").sequelize;
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
    rol: {
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

module.exports = { User };
