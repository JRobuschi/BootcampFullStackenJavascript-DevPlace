//validar o verificar token, lo hacemos desde un middleware(rutas protegidas)
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header(auth); //auth, auth-token, token, x-acces-token
  if (!token) return res.status(401).json({ error: "no token" });
  try {
    const verified = jwt.verify(token, process.env.TOKEN_JSW); // o el secreto que tenemos en otra variable
    req.user = verified;
    //aca puedo hacer validaciones de la data que me resulto de desencriptar el token
    next();
  } catch (error) {
    res.status(400).json({ error: "token invalido" });
  }
};

module.exports = verifyToken;
