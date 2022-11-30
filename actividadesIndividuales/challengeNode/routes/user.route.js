const express = require("express");
const users = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
} = require("../controllers/userControllers");
const { User } = require("../models/user.model");

/**Get all users */
users.get("/", getUsers);
users.post("/", createUser);
users.get("/:id", findByUser);
users.put("/:id", UpdateByUser);
users.delete("/:id", deleteByUser);

users.post("/login", function (req, res) {
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

module.exports = users;
