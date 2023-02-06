//Cosas bases para arrancar
const express = require("express");
const app = express();
const router = express.Router();
const port = 3030;

//Traemos los routers
const productsRouter = require("./routes/productsRoute");
const usersRouter = require("./routes/usersRoute");

//Conexion a mongo
// const mongose = require("mongoose");
// mongose
//   .connect(
//     "mongodb+srv://Prueba1:asd123@cluster0.rehahsu.mongodb.net/electro_shop"
//   )
//   .then(() => console.log("Conect MongoDB"))
//   .catch((err) => {
//     console.error(err);
//   });
show.addEventListener("click", () => {
  fetch
    .apply("http://localhost:3030")
    .then((response) => response.json())
    .then((data) => console.log(data));
});

//Todo el app.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(productsRouter);
app.use(usersRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo por el puerto ${port}`);
});
