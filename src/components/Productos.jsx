import { useEffect, useState } from "react";
import ProductosReload from "./ProductosReload";
import ProductosWrap from "./ProductosWrap";

const Productos = ({ title = "PUT SOME TITLE HERE", reloadName }) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState({ success: false, data: [] });
  const [base, setBase] = useState(0)

const fetchProds = async () => {
  try{
      const response = await fetch(
        "http://localhost:8000/api/v0.5/webintercar/ofertas"
      );
      const productosFetch = await response.json();
      setProductos((prev) => {
        //Filtrar solamente productos con ofertas detalle
        setLoading(false);
        return {
          ...prev,
          success: productosFetch.success,
          data: productosFetch.data,
        };
      });
    }catch(err){
      console.error('Error al cargar los productos')
    }
    };

useEffect(() => {
    fetchProds();
  }, [loading]);

  return (
    <>
      {!loading ? (
        <>
          <h3
            className={`border-x-4 lg:w-fit md:w-11/12 text-center md:text-md lg:text-4xl xl:text-5xl font-extrabold md:mt-10 lg:mt-24 bg-neutral-800 mx-auto lg:px-4 rounded-sm text-neutral-300 lg:tracking-widest py-1 border-orange-500 md:my-2 lg:my-0`}
          >
            {title}
          </h3>
          <ProductosWrap
            Productos={productos}
            base={base}
          />
          <ProductosReload title={reloadName} setBase={setBase} long={productos.data.length} base={base}/>
        </>
      ) : (
        <h3>Cargando información</h3>
      )}
    </>
  );
};

export default Productos;
