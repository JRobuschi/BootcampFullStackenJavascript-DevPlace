// npm i express body-parser bcrypt dotenv jsonwebtoken mysql @hapi/joi -g nodemon cors

const express = require("express");
const mysql = require("mysql2");
const bodyparser = require("body-parser");
const Enum = require("enum");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");

require("dotenv").config();

const app = express();

//obtencion y manejo de body
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "hola",
  });
});

//inicio del server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("iniciando server..");
});

/*
.env
PORT = 3000
USER = 
PASSWORD =
DBNAME =
TOKEN =
*/

const userSchema = mysql.Shema({
  username: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  role: {
    //type:   Enum,
    type: Int8Array,
    require: true,
  },
});
// module.export = mysql.model('User', userSchema);

//const opciones = new Enum(['A', 'B', 'C'])
// const opciones = new Enum({'comun':1, 'premium':2 'root':3})

const schemaLogin = Joi.object({
  email: Joi.string().min(4).max(255).required().email(),
  password: Joi.string().min(4).max(255).required().password(),
});

app.post("/login", async (req, res) => {
  //validaciones
  const { error } = schemaLogin.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  //busco en la db
  const mysql = await User.findOne({
    email: req.body.email,
  });

  if (!user) return res.status(400).json({ error: "el usuario no existe" });

  //comparamos passwords ingresada con la de la db ,comparesync
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).jsom({ error: "Contraseña invalida" });

  const token = jwt.sign(
    {
      email: user.email,
      role: user.role,
    },
    process.env.TOKEN
  );

  res.status(200).json({ error: null, data: token });
});

//validar o verificar token, lo hacemos desde un middleware(rutas protegidas)

const verifyToken = (req, res, next) => {
  const token = req.header(auth); //auth, auth-token, token, x-acces-token
  if (!token) return res.status(401).json({ error: "no token" });
  try {
    const verified = jwt.verify(token, process.env.SECRET); // o el secreto que tenemos en otra variable
    req.user = verified;
    //aca puedo hacer validaciones de la data que me resulto de desencriptar el token
    next();
  } catch (error) {
    res.status(400).json({ error: "token invalido" });
  }
};

module.exports = verifyToken;

////////////////////////////////////
//File System

var fs = require("fs");

//primero va el nombre del archivo que queremos tocar
//readFile es una lectura asincronica
fs.readFile("archivo.txt", function (error, data) {
  if (error) {
    return console.log(error);
  }
  console.log(data.toString());
});

//Lectura sincronica
var data = fs.readFileSync("archivo.txt");
console.log(data.toString());

//apertura de archivos  //path ruta del archivo // flags comportamiento del archivo
fs.open(path, flags, mode, cllback);
/*
 * path: ruta del archivo
 * flags: r, rs, rw, rex. Comportamiento del archivo, (lectura, lectura y escrittura, lectura y ejecucion)
 * mode: r-, w-, r+- Modos en que vamos a manipular el archivo
 *callback: manejo de la respuesta, data , etc.
 */

//Ejemplo:
fs.open("archivo.txt", "r+-", function (error, fileOpened) {
  if (error) {
    console.log(error);
  }
  console.log("archivo abierto");
});

//Lectura del archivo. Pone todo el archivo en cuestion en el buffer.
fs.read(fileOpened, buffer, offset, length, position, callback);
/*
 * fileOpened: El archivo abierto que arroja la funcion de open(). el archivo en si.
 * buffer: Lugar de memoria donde se escribe todo el archivo completo a ser manipulado.
 * offset: El puntero en el buffer desde donde vamos a manipular.
 * length: Es un numero entero indica cuantos bytes leer.
 * position: Desde donde comenzar a leer o escribir.
 * callback: Function que arroja el error o la data que esta siendo pedida del archivo.
 */

//escritura de archivos
fs.writeFile(path, data, options, callback);

/*
 * path: ruta del archivo
 * data: lo que queremos escribir en el archivo
 * opptions: parametros opsiconales del archivo, como encoding, mode, flags.
 * callback: me devuelve si hay un error
 */

//ejemplo:
fs.writeFile("archivo1.txt", "nueva cadena de texto", function (error) {
  if (error) {
    console.log(error);
  }
});

// cierre de un archivo
fs.close(fileOpened, callback);
/*
 * fileOpened: El archivo abierto en cuestion, el que hay que cerrar
 * callback: me arroja si hay un error
 */

//Ejemplo
fs.close(fileOpened, function (error) {
  if (error) {
    console.log(error);
  }
});
