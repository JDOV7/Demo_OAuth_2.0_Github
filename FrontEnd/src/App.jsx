import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import { LandingPage } from "./Views/LandingPage";
import PaginaPrincipal from "./Views/PaginaPrincipal";
import CrearCuenta from "./Views/CrearCuenta";
import NuevoProducto from "./Views/NuevoProducto";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout></AuthLayout>}>
            <Route index element={<LandingPage></LandingPage>}></Route>
            <Route
              path="crear-cuenta"
              element={<CrearCuenta></CrearCuenta>}
            ></Route>
            <Route
              path="home"
              element={<PaginaPrincipal></PaginaPrincipal>}
            ></Route>
            <Route
              path="producto"
              element={<NuevoProducto></NuevoProducto>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
