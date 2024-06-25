import ProductosGroup from "../components/ProductosGroup";
import SelectCategoria from "../components/SelectCategoria";
import SelectOrder from "../components/SelectOrder";
import Pagination from "../components/Pagination";
import Vacio from "../components/Vacio";
import { useState } from "react";


const CategoriaPage = () => {
  const [existen, setExisten] = useState(true)
  return (
    <>
    {
      existen ?
      <>
      <SelectCategoria Categories />
      <SelectOrder />
      <ProductosGroup />
      <Pagination pages={25}/> 
      </>
      :
      <Vacio msjPequeño={"No hemos encontrado resultados para esta categoría"} msjGrande={"Aún no hay productos para esta categoria"}/>
    }
    </>
  );
};

export default CategoriaPage;
