import ProductosGroup from "../ProductosGroup";
import SelectCategoria from "./SelectCategoria";
import SelectOrder from "./SelectOrder";
import Pagination from "../Pagination";
import Vacio from "../Vacio";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoriaFull = ({
  setCurrentCategoria,
  currentCategoria,
  Categorias,
}) => {
  
  //Estados y parametros
  const { idParams } = useParams();
  const [existen, setExisten] = useState(false); //Determina si hay elementos en el array de la categoría, sino despliega que no hay productos
  const [productos, setProductos] = useState([]);


  useEffect(()=> {
    async function getProductos () {
      const fetchProductos = await fetch(`http://localhost:8000/api/v0.5/webintercar/productos?categoria=${idParams}`)
      const jsonProductos = await fetchProductos.json()
      
      if(jsonProductos.data.length == 0) {
        setExisten(false)
        return
      }

      setProductos([...jsonProductos.data])
      setExisten(true)
      /**
       * Terminar de consumir los productos y entregarlos a ProductosGroup.
       * Una vez entregados mapear cada uno de ellos.
       * 
       */
    }
    getProductos()
  }, [existen])

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
