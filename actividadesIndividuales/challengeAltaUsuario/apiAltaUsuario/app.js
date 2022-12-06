//Cosas bases para arrancar
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3040;

const errorHandler = require("./middlewares/errorHandler");
const indexRoutes = require("./routes/usersRoute");
//require("./config/utils.db");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(errorHandler);
//app.use("/upload", express.static("upload"));
app.use(express.static(__dirname));
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo por el puerto ${port}`);
});
