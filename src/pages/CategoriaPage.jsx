import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Vacio from "../components/Vacio";
import SelectOrder from "../components/CategoriaPageComponents/SelectOrder";
import Pagination from "../components/Pagination";
import ProductosGroup from "../components/ProductosGroup";
import SelectCategoria from "../components/CategoriaPageComponents/SelectCategoria";
  
const CategoriaPage = ()=> {
  const {idParams} = useParams()
  const [categoriaActual, setCategoriaActual] = useState(idParams)

  return (
    <>
     <SelectCategoria
      categoriaActual={categoriaActual}
      setCategoriaActual={setCategoriaActual}
     /> 
     <ProductosGroup
      categoriaActual={categoriaActual} 
     />
    </>
  )
}


export default CategoriaPage;
