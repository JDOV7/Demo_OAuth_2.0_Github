import { obtenerTodosLosProductosServicio } from "./ProductosServicio.js";

const obtenerTodosLosProductosController = async (req, res) => {
  try {
    const resP = await obtenerTodosLosProductosServicio();
    return res.status(resP.status).json(resP);
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error en el servidor",
      data: {},
    });
  }
};

export { obtenerTodosLosProductosController };
