var Sequelize = require("sequelize");
var sequelize = new Sequelize(
  "challenge",
  "root", //nombre
  "root", //password
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

sequelize.sync();

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

//module.exports = databaseMysql;
