import ProductosGroup from "../ProductosGroup";
import SelectOrder from "./SelectOrder";
import Pagination from "../Pagination";
import Vacio from "../Vacio";

const CategoriaFull = ({
  setCurrentCategoria,
  currentCategoria,
  Categorias,
  hayProductos,
  productos,
}) => {
  return (
    <>
      {hayProductos ? (
        <>
          <SelectOrder />
          <ProductosGroup
            currentCategoria={currentCategoria}
            productosFetch={productos}
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
