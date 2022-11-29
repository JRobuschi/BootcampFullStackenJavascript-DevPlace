const express = require("express");
const users = express.Router();
const {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
} = require("../../controllers/usersControllers");
const { ValidateUser } = require("../../models/user.model");

/**Get all users */
users.get("/", getUsers);
users.post("/", ValidateUser, createUser);
users.get("/:id", findByUser);
users.put("/:id", UpdateByUser);
users.delete("/:id", deleteByUser);

module.exports = users;
