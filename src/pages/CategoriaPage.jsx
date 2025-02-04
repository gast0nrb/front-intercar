import { useParams } from "react-router-dom";
import { useState } from "react";
import ProductosGroup from "../components/ProductosGroup";
import SelectCategoria from "../components/CategoriaPageComponents/SelectCategoria";
  
const CategoriaPage = ()=> {
  const {idParams} = useParams()
  const [categoriaActual, setCategoriaActual] = useState(idParams)

  return (
    <>
     <ProductosGroup
      categoriaActual={categoriaActual} 
      setCategoriaActual={setCategoriaActual}
     />
    </>
  )
}


export default CategoriaPage;
