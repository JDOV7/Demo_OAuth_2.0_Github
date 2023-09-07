import axios from "axios";

const validarCuentaServicio = async (datos = {}) => {
  const resA = await axios({
    method: "post",
    url: `https://github.com/login/oauth/access_token?client_id=${datos.client_id}&client_secret=${datos.client_secret}&code=${datos.code}`,
    headers: {
      accept: "application/json",
    },
  });

  // console.log(resA);

  if (resA.data?.error) {
    return {
      status: 400,
      message: "Error al verificar su cuenta",
      data: {},
    };
  }

  return {
    status: 200,
    message: "Cuenta verificada correctamente",
    data: { dataGitHub: resA.data },
  };
};

const obtenerDatosCuentaServicio = async (access_token = "") => {
  try {
    const datosUser = await axios({
      method: "get",
      url: `https://api.github.com/user`,
      headers: {
        Authorization: "token " + access_token,
      },
    });
    // console.log(datosUser);
    return {
      status: 200,
      message: "Info user",
      data: {
        perfil: datosUser.data,
      },
    };
  } catch (error) {
    return {
      status: 500,
      message: "Error en el servidor",
      data: {},
    };
  }
};

const obtenerEmailCuentaServicio = async (access_token = "") => {
  try {
    const datosUser = await axios({
      method: "get",
      url: `https://api.github.com/user/emails`,
      headers: {
        Authorization: "token " + access_token,
      },
    });
    // console.log(datosUser);
    return {
      status: 200,
      message: "Email user",
      data: {
        perfil: datosUser.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Error en el servidor",
      data: {},
    };
  }
};

export { validarCuentaServicio, obtenerDatosCuentaServicio,obtenerEmailCuentaServicio };
