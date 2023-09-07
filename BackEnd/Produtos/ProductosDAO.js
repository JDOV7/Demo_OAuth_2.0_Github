import { Productos } from "../Models/index.js";

const obtenerTodosLosProductos = async () => {
  try {
    const productos = await Productos.findAll();
    return {
      status: 200,
      message: "Todos los productos",
      data: { productos },
    };
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

export { obtenerTodosLosProductos };
