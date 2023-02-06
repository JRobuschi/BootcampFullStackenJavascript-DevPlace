var Sequelize = require("sequelize");
const databaseMysql = new Sequelize(
  "nombre de la base de datos",
  "root",
  "password",
  "",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

databaseMysql.sync();
module.exports = databaseMysql;
