import { obtenerTodosLosProductos } from "./ProductosDAO.js";

const obtenerTodosLosProductosServicio = async () => {
  try {
    const respuesta = await obtenerTodosLosProductos();
    return respuesta;
  } catch (error) {
    let status = 500,
      message = "Error en el servidor";

    return {
      status,
      message,
      data: {},
    };
  }
};

export { obtenerTodosLosProductosServicio };
