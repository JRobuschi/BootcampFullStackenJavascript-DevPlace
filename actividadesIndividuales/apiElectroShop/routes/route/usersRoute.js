const express = require("express");

const users = express.Router();
const {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
  loginUser,
} = require("../../controllers/usersControllers");
const { ValidateUser } = require("../../models/user.model");
const ValidateToken = require("../../middlewares/validateToken");

/**Get all users */
users.get("/", getUsers);
users.post("/", ValidateUser, createUser);
users.get("/:id", findByUser);
users.put("/:id", UpdateByUser);
users.delete("/:id", deleteByUser);
users.post("/login", loginUser);
module.exports = users;
