import { useParams } from "react-router-dom";
import { useState } from "react";
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
     <SelectOrder/>
     <ProductosGroup
      categoriaActual={categoriaActual} 
     />
    <Pagination/>
    </>
  )
}


export default CategoriaPage;
