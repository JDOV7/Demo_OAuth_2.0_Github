import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import clienteAxios from "../../config/axios";

const NuevoProducto = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(nombre);
    console.log(precio);
    try {
      const token = window.localStorage.getItem("tokenJWT-Demo-OAuth2.0");
      console.log(token);
      if (!token) {
        throw new Error("Token no existe ");
      }
      const config = {
        headers: { Authorization: token },
      };
      const url = `oauth/producto`;
      console.log(url);
      const { data } = await clienteAxios.post(
        url,
        { Nombre: nombre, Precio: precio },
        config
      );
      console.log(data);
    } catch (error) {
      navigate("/crear-cuenta");
      console.log(error);
    }
  };

  useEffect(() => {
    const comprobarCuenta = async () => {
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
      } catch (error) {
        navigate("/crear-cuenta");
        console.log(error);
      }
    };
    // Verificar si se tiene acceso a la vista
    comprobarCuenta();
  }, []);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center ">Creando Producto</h1>
      </div>
      <div className="text-center flex justify-center items-center">
        <Link
          to={"/home"}
          className="bg-gray-300 hover:bg-gray-400 py-2  font-semibold  px-4 mb-4 rounded-2xl flex items-center text-black text-center"
        >
          <span>Ver Productos</span>
        </Link>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div className="bg-slate-400 p-5 rounded-3xl shadow-xl m-5">
            <div className="p-3">
              <h1 className="text-center text-2xl font-medium">
                Datos del Producto
              </h1>
            </div>
            <form>
              <div className="p-5">
                <label>Nombre</label>
                <input
                  type="text"
                  className="border w-full text-base font-light rounded-xl p-2"
                  name="Nombre"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="p-5">
                <label>Precio</label>
                <input
                  type="number"
                  className="border w-full text-base font-light rounded-xl p-2"
                  name="Precio"
                  placeholder="Precio"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </div>
              <div className="text-center ">
                <button
                  className="text-center text-lg bg-slate-100 hover:bg-slate-200 p-2 rounded-xl"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Crear Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NuevoProducto;
