import express from "express";
import axios from "axios";
const router = express.Router();
import {
  validarCuenta,
  obtenerPermisoController,
  crearProductoController,
} from "./auth_controller.js";
import ValidarJWT from "../Middleware/ValidarJWT.js";
// const oauthCtrl = require("./auth_controller.js");

router.post("/verificar-cuenta", validarCuenta);

router.post("/permiso", obtenerPermisoController);

router.post("/producto", ValidarJWT, crearProductoController);

router.get("/login", (req, res) => {
  const scope = "user:email";
  // const scope = "";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}&scope=${scope}`
    // https://github.com/login/oauth/authorize?client_id=
  );
});

// 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;
router.post("/obtener-perfil", async (req, res) => {
  try {
    const access_token = req.headers.authorization;
    console.log(access_token);
    const datosUser = await axios({
      method: "get",
      url: `https://api.github.com/user`,
      headers: {
        Authorization: "token " + access_token,
      },
    });
    console.log(datosUser);
    return res.status(200).json({
      status: 200,
      message: "Info user",
      data: {
        perfil: datosUser.data,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Error en el servidor",
      data: {},
    });
  }
});

router.post("/obtener-perfil/email", async (req, res) => {
  try {
    const access_token = req.headers.authorization;
    const datosUser = await axios({
      method: "get",
      url: `https://api.github.com/user/emails`,
      headers: {
        Authorization: "token " + access_token,
      },
    });
    console.log(datosUser);
    return res.status(200).json({
      status: 200,
      message: "Info user",
      data: {
        perfil: datosUser.data,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Error en el servidor",
      data: {},
    });
  }
});

router.get("/callback2", async (req, res) => {
  const body = {
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    code: req.query.code,
  };
  const opts = {
    headers: {
      accept: "application/json",
    },
  };
  const resA = await axios({
    method: "post",
    url: `https://github.com/login/oauth/access_token?client_id=${body.client_id}&client_secret=${body.client_secret}&code=${body.code}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
      accept: "application/json",
    },
  });
  if (resA.status == 200) {
    const datosUser = await axios({
      method: "get",
      url: `https://api.github.com/user`,
      headers: {
        Authorization: "token " + resA.data.access_token,
      },
    });
    const resP = {
      body,
      perfil: datosUser.data,
    };
    console.log(resP);
    return res.send(resP);
  }
  return res.send({
    message: "No se pudo autorizar de forma correcta",
  });
});

router.get("/callback", async (req, res) => {
  try {
    console.log("holaaaaaaaaaaa callback");
    console.log(req.query);

    const body = {
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET,
      code: req.query.code,
    };
    console.log(body);
    const opts = {
      headers: {
        accept: "application/json",
      },
    };

    const resA = await axios({
      method: "post",
      url: `https://github.com/login/oauth/access_token?client_id=${body.client_id}&client_secret=${body.client_secret}&code=${body.code}`,
      // Set the content type header, so that we get the response in JSON
      headers: {
        accept: "application/json",
      },
    });
    console.log(resA);
    // const data = resA.json();
    // console.log(resA.status);
    if (resA.status == 200) {
      //   const datosUser = await axios({
      //     method: "get",
      //     url: `https://api.github.com/user`,
      //     headers: {
      //       Authorization: "token " + resA.data.access_token,
      //     },
      //   });
      //   console.log(datosUser);
      //   console.log(datosUser.data);
      res.redirect(`/welcome.html?token=${resA.data.access_token}`);
    } else {
      throw new Error("");
    }

    // oauthCtrl.oauthProcessor(req.query.code, (err, data) => {
    //   if (err) {
    //     res.status(401).send({ err: "bad request" });
    //   } else {
    //     res.redirect(`/welcome.html?token=${data}`);
    //   }
    // });
  } catch (error) {
    res.status(401).send({ err: "bad request" });
  }
});

export default router;
