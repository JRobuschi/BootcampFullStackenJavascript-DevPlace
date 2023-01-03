//validar o verificar token, lo hacemos desde un middleware(rutas protegidas)
const jwt = require("jsonwebtoken");
const { decode } = require("punycode");

const validateToken = (req, res, next) => {
  // const token = req.headers["x-acces"]; //auth, auth-token, token, x-acces-token
  // console.log(token);
  // if (!token) {
  //   res.status(400).json({ error: "no token" });
  // } else {
  //   jwt.verify(token, `${process.env.TOKEN_JSW}`, (err) => {
  //     if (err) {
  //       res.status(403).json({ message: "Invalid token" });
  //     } else {
  //       next();
  //     }
  //   });
  // }
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) {
    res.status(401).send({
      error: "You need an authorization token",
    });
    return;
  }
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, `${process.env.TOKEN_JSW}`, (error, decoded) => {
      if (error) {
        return res.json({
          message: "Invalid Token",
        });
      } else {
        res.decoded = decoded;
        next();
      }
    });
  }
};

module.exports = validateToken;
