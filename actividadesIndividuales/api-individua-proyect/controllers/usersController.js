const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getUsers = async (req, res) => {
  const response = await User.findAll()
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
const createUser = async (req, res) => {
  try {
    const modelData = {
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    };
    const response = await User.create(modelData)
      .then((data) => {
        const res = { error: false, data: data, message: "User Create" };
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
const findByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.findAll({
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
const UpdateByUser = async (req, res) => {
  try {
    const { id } = req.params;
    let modelData = {
      username: req.body.username,
      email: req.body.email,
    };
    if (req.body.password) {
      modelData = {
        ...modelData,
        ...{ password: bcrypt.hashSync(req.body.password, 10) },
      };
    }
    const response = await User.update(modelData, {
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data, message: "User Update" };
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

const deleteByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await User.destroy({
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

function loginUser(req, res) {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (!user) {
      return res
        .status(401)
        .send({ message: "User error or incorrect password" });
    }
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res
        .status(401)
        .send({ message: "User error or incorrect password" });
    }

    var tokenAccess = jwt.sign({ id: user.id }, `${process.env.TOKEN_JSW}`, {
      expiresIn: "7d",
    });
    user.token = tokenAccess;
    res.status(200).send({
      message: "Successful authentication!!!",
      token: tokenAccess,
    });
  });
}

module.exports = {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
  loginUser,
};

// if (req.body.email == "admin" && req.body.password == "12345") {
//   const payload = {
//     check: true,
//   };
//   const token = jwt.sign(payload, `${process.env.TOKEN_JSW}`, {
//     expiresIn: "7d",
//   });
//   res.json({
//     message: "AUTENTICACIÓN EXITOSA!!!",
//     token: token,
//   });
// } else {
//   res.json({
//     message: "Usuario y/o Password Incorrectas",
//   });
// }

// const password = req.body.password;
//   const email = req.body.email;
//   const tryingUser = await User.findOne({ email: email });
//   if (!tryingUser) {
//     res.status(401).json({ message: "Wrong user" });
//   } else {
//     const validPass = bcrypt.compareSync(password, tryingUser.password);
//     if (!validPass) {
//       res.status(401).json({ message: "Incorrect Password" });
//     } else {
//       const jsonToken = jwt.sign({ tryingUser }, `${process.env.TOKEN_JSW}`);
//       res.json({
//         message: "AUTENTICACIÓN EXITOSA!!!",
//         token: jsonToken,
//       });
//     }
//   }
