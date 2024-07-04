import ProductosGroup from "../components/ProductosGroup";
import Pagination from "../components/Pagination";
import Vacio from "../components/Vacio";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BusquedaTitle from "../components/BusquedaPageComponents/BusquedaTitle";

const BusquedaPage = ({ title }) => {
  const { name } = useParams();

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
  const [currentCategoria, setCurrentCategoria] = useState(Categorias[0].id);
  const [existen, setExisten] = useState(true);
  return (
    <>
      {existen ? (
        <>
          <BusquedaTitle title={name} />
          <ProductosGroup
            currentCategoria={currentCategoria}
            setExisten={setExisten}
            isBusqueda={true}
          />
          <Pagination pages={6} />
        </>
      ) : (
        <>
          <Vacio
            msjPequeño={"No hemos encontrado resultado para tu busqueda."}
            msjGrande={"Esta vacío por aquí"}
          />
        </>
      )}
    </>
  );
};

export default BusquedaPage;
