const express = require("express");
const uploadMulter = require("../config/multer.config");
const users = express.Router();
const {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
  loginUser,
} = require("../controllers/usersControllers");
const { ValidateUser } = require("../models/user.model");
const ValidateToken = require("../middlewares/validateToken");

/**Get all users */
users.get("login/", getUsers);
users.post(
  "/register",
  [uploadMulter.single("image"), ValidateUser],
  createUser
);
users.get("login/:id", findByUser);
users.put("/login:id", UpdateByUser);
users.delete("/login/:id", deleteByUser);
users.post("/login", loginUser);
module.exports = users;
