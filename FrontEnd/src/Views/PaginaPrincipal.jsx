import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import clienteAxios from "../../config/axios";

const PaginaPrincipal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [code, setCode] = useState(0);
  const [infoCuenta, setInfoCuenta] = useState({});
  const [productos, setProductos] = useState([]);

  const statusAceptados = [200, 201];

  const navigate = useNavigate();

  const urlNuevoProducto = "/producto";

  useEffect(() => {
    console.log(searchParams.get("code"));
    const obtenerLibros = async () => {
      try {
        const token = window.localStorage.getItem("tokenJWT-Demo-OAuth2.0");
        console.log(token);
        if (!token) {
          throw new Error("Token no existe ");
        }
        const config = {
          headers: { Authorization: token },
        };
        const url = `oauth/permiso`;
        console.log(url);
        const { data } = await clienteAxios.post(url, {}, config);
        console.log(data);

        const obtenerProductosURL = "productos/productos";
        const { data: produtosR } = await clienteAxios.get(
          obtenerProductosURL,
          config
        );
        setProductos(produtosR?.data?.productos);
      } catch (error) {
        console.log(error);

        try {
          const url = `oauth/verificar-cuenta`;
          console.log(url);
          const { data } = await clienteAxios.post(url, {
            code: searchParams.get("code"),
          });
          console.log(data);
          console.log(data.status);

          if (!data || !statusAceptados.includes(data?.status)) {
            // navigate("/crear-cuenta");
            setCode(500);
            setInfoCuenta({});
            setProductos([]);
          } else if (data?.status == 200) {
            setCode(200);
            setInfoCuenta({ login: data?.data?.usuario?.login });
            setProductos(data?.data?.productos);
            console.log(data?.data?.token);
            console.log(data?.data?.usuario?.login);

            window.localStorage.setItem(
              "tokenJWT-Demo-OAuth2.0",
              data?.data?.token
            );
          }
        } catch (error) {
          console.log(error);
          navigate("/crear-cuenta");
        }
      }
    };
    obtenerLibros();
  }, []);

  // if (!statusAceptados.includes(code)) {
  //   return navigate("/crear-cuenta");
  // }

  return (
    <>
      <div className="flex justify-center items-center p-10">
        {infoCuenta.login ? (
          <>
            <h1 className="text-3xl font-bold">
              Pagina Principal Demo OAuth 2.0, hola {infoCuenta.login}
            </h1>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">
              Pagina Principal Demo OAuth 2.0
            </h1>
          </>
        )}
      </div>

      <div>
        <div className=" flex justify-center items-center text-center">
          <Link
            to={urlNuevoProducto}
            className="bg-gray-300 hover:bg-gray-400 py-2  font-semibold  px-4 mb-4 rounded-2xl flex items-center text-black"
          >
            <span>Nuevo Producto</span>
          </Link>
        </div>
      </div>

      <div className="p-10">
        <div className=" grid  mx-auto lg:grid-cols-12">
          {productos.map((producto) => {
            return (
              <div
                key={producto.IdProductos}
                className=" col-span-4 pb-7 m-4  text-center shadow-2xl rounded-2xl bg-slate-300 p-3"
              >
                <p>Nombre: {producto.Nombre} </p>
                <p>Precio: ${producto.Precio} </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PaginaPrincipal;
