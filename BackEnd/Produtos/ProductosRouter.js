import express from "express";
import { obtenerTodosLosProductosController } from "./ProductosController.js";
import validarJWT from "../Middleware/ValidarJWT.js";
const router = express.Router();

router.get("/productos", validarJWT, obtenerTodosLosProductosController);

export default router;
