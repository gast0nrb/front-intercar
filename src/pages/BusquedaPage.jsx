import ProductosGroupBusqueda from "../components/ProductosGroupBusqueda";
import Pagination from "../components/Pagination";
import Vacio from "../components/Vacio";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BusquedaTitle from "../components/BusquedaPageComponents/BusquedaTitle";

const BusquedaPage = ({ title }) => {
  const { name } = useParams();

  const Categorias = [
    {
      id: 1,
      nombre: "HEADLIGHT",
    },
    {
      id: 2,
      nombre: "AMPOLLETAS",
    },
    {
      id: 3,
      nombre: "Seguridad",
    },
  ];
  const [currentCategoria, setCurrentCategoria] = useState(Categorias[0].id);
  const [existen, setExisten] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function getProductos() {
      const fetchProductos = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/productos?text=${name}`
      );
      const json = await fetchProductos.json();

      //Válida si existen productos en la información proveniente de la base de datos.
      //Sino existen datos se despliega que no se encontraron resultados.
      if (json.data.length == 0) {
        setExisten(false);
        return;
      }

      setProductos([...json.data]);
      setExisten(true);
    }
    console.log(productos);
    getProductos();
  }, [existen]);
  return (
    <>
      {existen ? (
        <>
          <BusquedaTitle title={name} />
          <ProductosGroupBusqueda productos={productos} />
          <Pagination pages={6} />
        </>
      ) : (
        <>
          <Vacio
            msjPequeño={"No hemos encontrado resultado para tu busqueda."}
            msjGrande={`Aún no existen resultados para: ${name}`}
          />
        </>
      )}
    </>
  );
};

export default BusquedaPage;
