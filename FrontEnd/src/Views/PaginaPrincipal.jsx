import React from "react";
import { useSearchParams } from "react-router-dom";

const PaginaPrincipal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("code"));
  return (
    <>
      <div className="flex justify-center items-center p-10">
        <h1 className="text-3xl font-bold">Pagina Principal Demo OAuth 2.0</h1>
      </div>
    </>
  );
};

export default PaginaPrincipal;
