import ProductoGrande from "../components/ProductoGrande";
import ProductosSimilares from "../components/ProductosSimilares";
import Categoria from "../components/Categoria";
import Vacio from "../components/Vacio";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductoPage = () => {
  const { codigo } = useParams();

  const [producto, setProducto] = useState({});
  const [currentCodigo, setCurrentCodigo] = useState(codigo)
  const [noExiste, setNoExiste] = useState(true);

  const getProducto = async () => {
    const productoFetch = await fetch(
      `http://localhost:8000/api/v0.5/webintercar/productos/${codigo}`
    );
    const jsonProducto = await productoFetch.json();

    if (jsonProducto.success == false) {
      setNoExiste(true);
      return;
    }

    setProducto(jsonProducto.data.producto);
    setNoExiste(false);
  };

  useEffect(() => {
    getProducto();
  }, [currentCodigo]);
  return (
    <>
      {noExiste ? (
        <Vacio
          msjGrande={`No existe un producto con el código: ${codigo} `}
          msjPequeño={"Prueba con otro código :D!"}
        />
      ) : (
        <>
          <Categoria categoria={producto.CATEGORIum} />
          <ProductoGrande producto={producto} />
          <ProductosSimilares codigo={codigo} title="PRODUCTOS SIMILARES" setCurrentCodigo={setCurrentCodigo} idCategoria={producto.CATEGORIum.id} reloadName={"Cargar más"} />
        </>
      )}
    </>
  );
};

export default ProductoPage;
