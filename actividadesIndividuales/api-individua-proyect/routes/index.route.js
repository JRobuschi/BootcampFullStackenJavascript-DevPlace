const productRouter = require("./route/productsRoute");
const usersRouter = require("./route/usersRoute");

const express = require("express");
const indexRoutes = express.Router();

indexRoutes.get("/", (req, res) => {
  res.json({ mensaje: "Home" });
});
indexRoutes.use("/product", productRouter);
indexRoutes.use("/users", usersRouter);

module.exports = indexRoutes;
