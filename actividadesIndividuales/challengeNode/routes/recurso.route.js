const express = require("express");
const recurso = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  getRecurso,
  createRecurso,
  findByRecurso,
  UpdateByRecurso,
  deleteByRecurso,
} = require("../controllers/recursoControllers");

/**Get all users */
recurso.get("/", getRecurso);
recurso.get("/:id", findByRecurso);
recurso.post("/login/create", createRecurso);
recurso.put("/login/update/:id", UpdateByRecurso);
recurso.delete("/admin/delete/:id", deleteByRecurso);

recurso.post("/login", function (req, res) {
  let body = req.body;
  User.findOne({ email: body.email }, (error, usuarioDB) => {
    if (error) {
      return res.status(500).json({
        ok: false,
        err: erro,
      });
    }
    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrecta",
        },
      });
    }

    let token = jwt.sign(
      {
        username: usuarioDB,
      },
      process.env.SEED_AUTENTICACION,
      {
        expiresIn: process.env.CADUCIDAD_TOKEN,
      }
    );
    res.json({
      ok: true,
      username: usuarioDB,
      token,
    });
  });
});

module.exports = recurso;
