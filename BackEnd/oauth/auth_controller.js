import {
  validarCuentaServicio,
  obtenerDatosCuentaServicio,
  obtenerEmailCuentaServicio,
} from "./auth_service.js";
import {
  crearUsuarioServicio,
  verificarExisteUsuarioIdGitHubServicio,
} from "../Usuarios/UsuariosServicio.js";
import { obtenerTodosLosProductosServicio } from "../Produtos/ProductosServicio.js";
import generarJWT from "../Helpers/GenerarJWT.js";

const validarCuenta = async (req, res) => {
  const body = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code: req.body.code,
  };
  const resV = await validarCuentaServicio(body);
  if (resV?.status === 200) {
    const access_token = resV.data.dataGitHub.access_token;
    console.log(resV.data);
    const resDatosCuenta = await obtenerDatosCuentaServicio(access_token);
    if (resDatosCuenta?.status !== 200) {
      return res.status(400).json(resDatosCuenta);
    }
    const obtenerEmail = await obtenerEmailCuentaServicio(access_token);
    if (obtenerEmail?.status !== 200) {
      return res.status(400).json(obtenerEmail);
    }
    const infoCuenta = {
      IdGitHub: resDatosCuenta.data.perfil.id,
      login: resDatosCuenta.data.perfil.login,
      name: resDatosCuenta.data.perfil.name,
      email: obtenerEmail.data.perfil[0].email,
    };
    // Validar si ya existe en la bd
    const verificarSiExisteUserBD =
      await verificarExisteUsuarioIdGitHubServicio(infoCuenta.IdGitHub);
    // console.log(verificarSiExisteUserBD);
    verificarSiExisteUserBD.data.productos = (
      await obtenerTodosLosProductosServicio()
    ).data.productos;
    if (verificarSiExisteUserBD?.status === 404) {
      const crearCuenta = await crearUsuarioServicio(infoCuenta);
      if (crearCuenta?.status !== 201) {
        return res.status(400).json(crearCuenta);
      }
      return res.status(201).json(crearCuenta);
    } else if (verificarSiExisteUserBD?.status == 200) {
      const datos = {
        IdGitHub: verificarSiExisteUserBD.data.usuario.IdGitHub,
      };
      const generarJWTRes = await generarJWT(datos);
      verificarSiExisteUserBD.data.token = generarJWTRes;
      verificarSiExisteUserBD.data.usuario.IdGitHub = undefined;
      return res.status(200).json(verificarSiExisteUserBD);
    } else {
      return res.status(500).json(verificarSiExisteUserBD);
    }
  }
  return res.status(400).json(resV);
};

const obtenerDatosCuenta = async (req, res) => {
  const body = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code: req.body.code,
  };
  const resV = await obtenerDatosCuentaServicio(body);
  if (resV.status === 200) {
    return res.status(200).json(resV);
  }
  return res.status(400).json(resV);
};

export { validarCuenta, obtenerDatosCuenta };
