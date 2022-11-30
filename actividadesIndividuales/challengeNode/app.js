//Cosas bases para arrancar
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3031;

const userRoutes = require("./routes/user.route");
const recursoRoutes = require("./routes/recurso.route.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use("/upload", express.static("upload"));
app.use(express.static(__dirname));
app.use("/user", userRoutes);
app.use("/recurso", recursoRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo por el puerto ${port}`);
});

///////////////////////
