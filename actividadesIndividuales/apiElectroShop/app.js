//Cosas bases para arrancar
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3030;

const errorHandler = require("./middlewares/errorHandler");
const indexRoutes = require("./routes/index.route.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(errorHandler);
app.use("/upload", express.static("upload"));
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo por el puerto ${port}`);
});

/////////////////////////////////////////////
//Conexion a mysql la base de datos

// //Traemos los routers
// const productsRouter = require("./routes/productsRoute");
// const usersRouter = require("./routes/usersRoute");

// //Todo el app.
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(productsRouter);
// app.use(usersRouter);

// app.listen(port, () => {
//   console.log(`Servidor corriendo por el puerto ${port}`);
// });
