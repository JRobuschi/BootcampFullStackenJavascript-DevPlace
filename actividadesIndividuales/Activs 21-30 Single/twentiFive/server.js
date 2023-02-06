// server.get("/json", (req, res) => {
//   const json = {
//     nombre: "Jhon",
//     apellido: "Doe",
//   };
//   res.json(json);
// });

// server.get("/error", (req, res) => {
//   res.statusCode = 500;
//   res.json({ error: "Algo salio mal :(" });
// });

// // Cargamos un modulo http

// var http = requiere("http");

// //Creamos el server http y se define la escucha.

// http
//   .createServer(function (request, response) {
//     //Definir el header http, el status http, el content
//     response.writeHead(200, {
//       "Content-Type": "contenType/json", //'Ponemos con que vamos a responder text/plain', sino 'contentType/xml'
//     });
//     //Luego respondemos, en el body
//     response.end("Hola Mundo!");
//   })
//   .listen(8000);

// //Se escribe la url con acceso al server
// console.log("url: http://127.0.0.1:8000/");

const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
const users = require("./public/users.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App de ejemplo en el puerto ${port}`);
});
app.use(router);

app.get("/", (req, res) => {
  res.send("Home");
});

router.get("/users", (req, res) => {
  res.json(users);
});

// router.get("/users/byName/:name", (req, res) => {

router.get("/users/:id", (req, res) => {
  var id = req.params.id;
  var user = users.find((e) => e.id == id);
  res.json(user);
});

/////////////////////////////////////////////////////////////////////

//npm init
//npm i express mongoose nodemon dotenv
//npm i mysql2
//npm i sequelize

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server...");
});

const database_url =
  "mongodb+srv://Prueba1:asd123@cluster0.rehahsu.mongodb.net/test";
//abrir compass -> new conection -> database_url

// archivo ".env" -> adentro va a ver  DATABASE_URL mongodb+srv://Prueba1:asd123@cluster0.rehahsu.mongodb.net/test
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("conected", () => {
  console.log("db conectada");
});

//finaliza conexion a mongo

//hacer la carpeta routes
const routes = require("./routes/routes"); //Si ya esta modularizado en routes.js
app.use("/api", routes);

const router = express.Router();
module.exportd = router;

//End points
router.post("post", (req, res) => {
  res.send("post API");
});

router.get("/getAll", (req, res) => {
  res.send("Traer todo de la API");
});

router.get("/getOne/:username", (req, res) => {
  res.send(req.params.username);
});

router.port("/post", async (req, res) => {
  const user = new Model({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const data = await user.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({
      mensaje: error.message,
    });
  }
});

router.get("/getOne/:email", async (req, res) => {
  try {
    const data = await Model.findById(req.params.email);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//Model

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Users", userSchema);
