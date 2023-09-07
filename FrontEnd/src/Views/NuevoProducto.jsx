import React from "react";
import { useEffect } from "react";

const NuevoProducto = () => {
  useEffect(async () => {
    const comprobarCuenta = async () => {};
    // Verificar si se tiene acceso a la vista
    await comprobarCuenta();
  }, []);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center ">Creando Producto</h1>
      </div>
    </div>
  );
};
export default NuevoProducto;
