import ProductosGroup from "../ProductosGroup";
import SelectCategoria from "./SelectCategoria";
import SelectOrder from "./SelectOrder";
import Pagination from "../Pagination";
import Vacio from "../Vacio";
import { useState } from "react";

const CategoriaFull = ({
  idParams,
  setCurrentCategoria,
  currentCategoria,
  Categorias,
}) => {
  const [existen, setExisten] = useState(true); //Determina si hay elementos en el array de la categoría, sino despliega que no hay productos

  return (
    <>
      {existen ? (
        <>
          <SelectCategoria
            currentCategoria={currentCategoria}
            Categorias={Categorias}
            setCurrentCategoria={setCurrentCategoria}
          />
          <SelectOrder />
          <ProductosGroup
            setExisten={setExisten}
            currentCategoria={currentCategoria}
            isBusqueda={false}
          />
          <Pagination pages={25} />
        </>
      ) : (
        <>
          <SelectCategoria
            currentCategoria={currentCategoria}
            setCurrentCategoria={setCurrentCategoria}
            Categorias={Categorias}
          />
          <ProductosGroup
            setExisten={setExisten}
            isBusqueda={false}
            currentCategoria={currentCategoria}
          />
          <Vacio
            msjPequeño={"No hemos encontrado resultados para esta categoría."}
            msjGrande={
              "Aún no hay productos por aquí :( selecciona una categoría diferente o explora volviendo al inicio."
            }
          />
        </>
      )}
    </>
  );
};

export default CategoriaFull;
