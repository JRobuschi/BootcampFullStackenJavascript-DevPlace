var Products = require("../models/product.model");

const getProduct = async (req, res) => {
  const response = await Products.findAll()
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

const createProduct = async (req, res) => {
  try {
    const modelData = {
      price: req.body.price,

      title: req.body.title,
      stock: req.body.stock,
      // image: req.body.image,
      description: req.body.description,
    };
    const response = await Products.create(modelData)
      .then((data) => {
        const res = { error: false, data: data, message: "Product Create" };
        return res;
      })
      .catch((e) => {
        if (
          e.name == "SequelizeUniqueConstraintError" ||
          e.name == "SequelizeValidationError"
        ) {
          return { error: true, message: e.errors.map((err) => err.message) };
        } else if (e.name == "SequelizeForeignKeyConstraintError") {
          return { error: true, message: ["The category does not exist"] };
        }
        return { error: true, message: e };
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

const getByIdProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Products.findAll({
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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Products.update(req.body, {
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data, message: "Product Update" };
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

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Products.destroy({
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data, message: "Deleted Successful" };
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
  getProduct,
  createProduct,
  getByIdProduct,
  updateProduct,
  deleteProduct,
};
