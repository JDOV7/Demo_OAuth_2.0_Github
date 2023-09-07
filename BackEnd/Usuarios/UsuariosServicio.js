import { crearUsuario, verificarExisteUsuarioIdGitHub } from "./UsuariosDAO.js";

const crearUsuarioServicio = async (datos = "") => {
  try {
    console.log("crearUsuarioServicio");
    const respuesta = await crearUsuario(datos);
    if (respuesta.status !== 201) {
      throw new Error("Error");
    }
    return respuesta;
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

const verificarExisteUsuarioIdGitHubServicio = async (datos = "") => {
  try {
    console.log("verificarExisteUsuarioIdGitHubServicio");
    const respuesta = await verificarExisteUsuarioIdGitHub(datos);
    if (respuesta.status !== 200 && respuesta.status !== 404) {
      throw new Error("Error");
    }
    return respuesta;
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

export { crearUsuarioServicio, verificarExisteUsuarioIdGitHubServicio };
