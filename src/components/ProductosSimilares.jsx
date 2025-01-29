import { useEffect, useState } from "react";
import ProductosReload from "./ProductosReload";
import WrapSimilares from "./WrapSimilares";

const Productos = ({
  title = "PUT SOME TITLE HERE",
  reloadName,
  idCategoria,
  setCurrentCodigo,
  codigo
}) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState({});
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const fetchProds = async () => {
      const response = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/categorias/${idCategoria}/productos`
      );
      const productosFetch = await response.json();
      const productosFilter = productosFetch.data.Productos.filter((p)=> 
         p.codigo != codigo 
      )
      productosFetch.data.Productos = productosFilter
      setProductos({
        success: productosFetch.success,
        data: productosFetch.data,
      });
      setLoading(false);
    };
    fetchProds();
  }, [codigo]);

  return (
    <>
      {!loading ? (
        <>
          <h3
            className={`border-x-4 lg:w-fit md:w-11/12 text-center md:text-md lg:text-4xl xl:text-5xl font-extrabold md:mt-10 lg:mt-24 bg-neutral-800 mx-auto lg:px-4 rounded-sm text-neutral-300 lg:tracking-widest py-1 border-orange-500`}
          >
            {title}
          </h3>
          <WrapSimilares
            setCurrentCodigo={setCurrentCodigo}
            Productos={productos}
            contador={contador}
            val1={0}
            val2={1}
          />
          <ProductosReload title={reloadName} />
        </>
      ) : (
        <h3>Cargando información</h3>
      )}
    </>
  );
};

export default Productos;
