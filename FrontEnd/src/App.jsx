import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import { PaginaPrincipal } from "./Views/PaginaPrincipal";
import Home from "./Views/Home";
import Login from "./Views/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout></AuthLayout>}>
            <Route index element={<PaginaPrincipal></PaginaPrincipal>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
