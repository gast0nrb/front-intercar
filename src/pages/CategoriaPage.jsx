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
  const [cambiarCategoria, setCambiarCategoria] =useState(false)

  return (
    <>
     <SelectCategoria
      categoriaActual={categoriaActual}
      setCategoriaActual={setCategoriaActual}
      cambiarCategoria={cambiarCategoria}
      setCambiarCategoria={setCambiarCategoria}
     /> 
     <SelectOrder/>
     <ProductosGroup
      categoriaActual={categoriaActual} 
      cambiarCategoria={cambiarCategoria}
     />
    <Pagination/>
    </>
  )
}


export default CategoriaPage;
