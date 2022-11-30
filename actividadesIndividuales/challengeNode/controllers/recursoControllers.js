const { Recurso } = require("../models/recurso.model");

const getRecurso = async (req, res) => {
  const response = await Recurso.findAll()
    .then((data) => {
      const res = { error: false, data: data };
      return res;
    })
    .catch((error) => {
      const res = { error: true, message: error };
      return res;
    });
  res.json(response);
};
const createRecurso = async (req, res) => {
  try {
    const modelData = {
      idRecurso: req.body.idRecurso,
      texto: req.body.message,
    };
    const response = await Recurso.create(modelData)
      .then((data) => {
        const res = { error: false, data: data, message: "Recurso Create" };
        return res;
      })
      .catch((e) => {
        if (
          e.name == "SequelizeUniqueConstraintError" ||
          e.name == "SequelizeValidationError"
        ) {
          return { error: true, message: e.errors.map((err) => err.message) };
        } else {
          return { error: true, message: e };
        }
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};
const findByRecurso = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Recurso.findAll({
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};
const UpdateByRecurso = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Recurso.update(req.body, {
      where: { idRecurso: id },
    })
      .then((data) => {
        const res = { error: false, data: data, message: "Recurso Update" };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteByRecurso = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Recurso.destroy({
      where: { id: id },
    })
      .then((data) => {
        const res = {
          error: false,
          data: data,
          message: "Deleted Successful",
        };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getRecurso,
  createRecurso,
  findByRecurso,
  UpdateByRecurso,
  deleteByRecurso,
};
