import { Link, redirect, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Vacio from "../components/Vacio";
import CategoriaFull from "../components/CategoriaPageComponents/CategoriaFull";

const CategoriaPage = () => {
  const { idParams } = useParams();
  const Categorias = [
    {
      id: 1,
      nombre: "HEADLIGHT",
    },
    {
      id: 2,
      nombre: "AMPOLLETAS",
    },
    {
      id: 3,
      nombre: "Seguridad",
    },
  ];

  function validarParamsConCategorias() {
    const Cat = Categorias.filter((v) => v.id == idParams);
    if (Cat.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  const [existeCategoria, setExiste] = useState(validarParamsConCategorias);

  const [currentCategoria, setCurrentCategoria] = useState(idParams);

  useEffect(()=> {
    redirect("/")
},[currentCategoria])

  return (
    <>
      {existeCategoria ? (
        <CategoriaFull currentCategoria={currentCategoria} setCurrentCategoria={setCurrentCategoria} Categorias={Categorias} idParams={idParams} />
      ) : (
        <>
          <Vacio
            msjGrande={"No existen categorías para el id que indicaste :("}
          />
        </>
      )}
    </>
  );
};

export default CategoriaPage;
