import ProductosOferta from "../components/ProductosOferta";
import Pagination from "../components/Pagination";
import Vacio from "../components/Vacio";
import { useState, useEffect } from "react";
import BusquedaTitle from "../components/BusquedaPageComponents/BusquedaTitle";

const BusquedaPage = ({ title }) => {
  const [existen, setExisten] = useState(false);
  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getProductos() {
      const fetchProductos = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/ofertas`
      );
      const json = await fetchProductos.json();

      //Válida si existen productos en la información proveniente de la base de datos.
      //Sino existen datos se despliega que no se encontraron resultados.
      const productosOrder = [...json.data];
      productosOrder.map((v) => {
        v.categoria = {
          id: v.id_categoria,
          nombre: v.Nombre_categoria,
        };
      });
      setProductos([...productosOrder]);
      if (productosOrder.length == 0) {
        setExisten(false);
        return;
      }

      setExisten(true);
    }
    getProductos();
  }, []);
  return (
    <>
      {existen ? (
        <>
          <BusquedaTitle title="Productos en oferta" />
          <ProductosOferta productos={productos} setExisten={setExisten} />
          <Pagination pages={productos.length / 10} page={page} setPage={setPage}/>
        </>
      ) : (
        <>
          <Vacio
            msjPequeño={"No hemos encontrado resultados para tu busqueda."}
            msjGrande={`Por ahora no tenemos ofertas disponibles.`}
          />
        </>
      )}
    </>
  );
};

export default BusquedaPage;
