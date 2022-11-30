const express = require("express");
const recurso = express.Router();
const {
  getRecurso,
  createRecurso,
  findByRecurso,
  UpdateByRecurso,
  deleteByRecurso,
} = require("../controllers/recursoControllers");

/**Get all users */
recurso.get("/", getRecurso);
recurso.post("/", createRecurso);
recurso.get("/:id", findByRecurso);
recurso.put("/:id", UpdateByRecurso);
recurso.delete("/:id", deleteByRecurso);

module.exports = recurso;
