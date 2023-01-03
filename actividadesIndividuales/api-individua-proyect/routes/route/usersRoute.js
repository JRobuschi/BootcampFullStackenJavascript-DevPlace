const express = require("express");

const users = express.Router();
const {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
  loginUser,
} = require("../../controllers/usersController");
const { ValidateUser } = require("../../models/user.model");
const ValidateToken = require("../../middlewares/validateToken");

/**Get all users */
users.get("/", ValidateToken, getUsers);
users.post("/", ValidateUser, createUser);
users.get("/:id", ValidateToken, findByUser);
users.put("/:id", ValidateToken, UpdateByUser);
users.delete("/:id", ValidateToken, deleteByUser);
users.post("/login", loginUser);
module.exports = users;
