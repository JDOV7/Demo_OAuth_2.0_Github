import { Usuarios } from "../Models/index.js";

const crearUsuario = async (datos = {}) => {
  try {
    console.log("crearUsuario");
    const usuario = await Usuarios.create(datos);
    if (!usuario) {
      throw new Error("Error");
    }
    return {
      status: 201,
      message: "Usuario creado correctamnete",
      data: {},
    };
  } catch (error) {
    console.log(error);
    let status = 500,
      message = "Error en el servidor";
    return {
      status,
      message,
      data: {},
    };
  }
};

const verificarExisteUsuarioIdGitHub = async (IdGitHub = "") => {
  try {
    console.log("verificarExisteUsuarioIdGitHub");
    const usuario = await Usuarios.findOne({
      where: {
        IdGitHub,
      },
      attributes: ["IdGitHub","login"],
    });
    if (!usuario) {
      return {
        status: 404,
        message: "No existe el usuario",
        data: { usuario },
      };
    }
    return {
      status: 200,
      message: "Si existe el usuario",
      data: { usuario },
    };
  } catch (error) {
    console.log(error);
    let status = 500,
      message = "Error en el servidor";
    return {
      status,
      message,
      data: {},
    };
  }
};

export { crearUsuario, verificarExisteUsuarioIdGitHub };
