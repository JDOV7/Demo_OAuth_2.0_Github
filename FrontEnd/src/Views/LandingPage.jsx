import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <section className="bg-slate-100  w-full  lg:fixed h-full">
        <div className="justify-center items-center text-left p-8">
          <h1 className="text-4xl text-purple-700 font-mono font-semibold">
            OAuth 2.0
            <span className="text-3xl text-gray-900 font-sans text-center">
              {" "}
              y{" "}
            </span>
            <span className="text-5xl text-gray-900 font-sans font-extrabold">
              GitHub
            </span>{" "}
          </h1>
        </div>

        <div>
          <div className=" grid  mx-auto lg:grid-cols-12 pt-2">
            <div className=" col-span-6 pt-16  ">
              <div className="p-8">
                <h2 className="text-3xl text-gray-900 font-sans text-center">
                  ¡Bienvenido a la Demo de Autenticación con{" "}
                  <span className="text-4xl text-purple-700 font-mono font-semibold">
                    GitHub
                  </span>
                  !
                </h2>
              </div>
              <div className="p-6">
                <p className="font-sans text-center">
                  Bienvenido a nuestra demo interactiva que muestra cómo
                  funciona la autenticación con GitHub utilizando el protocolo
                  OAuth 2.0. Esta demo te permitirá experimentar de primera mano
                  cómo los usuarios pueden iniciar sesión de forma segura en
                  aplicaciones utilizando sus cuentas de GitHub.
                </p>
              </div>
              <div className="flex justify-end items-end ">
                <Link
                  to={`/crear-cuenta`}
                  className="text-lg font-medium bg-purple-300 px-4  text-black text-center rounded-xl hover:bg-purple-400 "
                >
                  Crear Cuenta
                </Link>
              </div>
            </div>
            <div className=" col-span-6 pb-7 ">
              <div className="flex justify-end items-end pr-32">
                <svg
                  className="h-56 w-56 items-end"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Auth0</title>
                  <path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z" />
                </svg>
              </div>
              <div className="flex justify-start items-start pl-32 pb-64">
                <svg
                  className="h-56 w-56"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { LandingPage };
