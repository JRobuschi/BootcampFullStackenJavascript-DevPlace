var Sequelize = require("sequelize");
var sequelize = require("../config/mysql.config").sequelize;
const DataTypes = require("mysql2");

var Recurso = sequelize.define("recursos", {
  idRecurso: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: Sequelize.DataTypes.TEXT,
  },

  status: {
    type: Sequelize.DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = { Recurso };
