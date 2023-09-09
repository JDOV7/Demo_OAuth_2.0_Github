import { Usuarios } from "../Models/index.js";
import jwt from "jsonwebtoken";

const validarJWT = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodificando = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodificando) {
      throw new Error("");
    }
    if (!decodificando?.IdGitHub) {
      throw new Error("");
    }

    const { IdGitHub } = decodificando;

    const buscarUsuario = await Usuarios.findOne({
      where: {
        IdGitHub,
      },
    });

    if (!buscarUsuario) {
      throw new Error("");
    }
    req.body.IdUsuarios = buscarUsuario.IdUsuarios;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: 400,
      message: "Error con el token",
      data: {},
    });
  }
  return next();
};
export default validarJWT;
