require("dotenv").config();
var Sequelize = require("sequelize");
var sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER, //nombre
  process.env.DATABASE_PASSWORD, //password
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT,
  }
);

sequelize.sync();

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
