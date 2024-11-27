import { useEffect, useState } from "react";
import CardCategory from "./CardCategory";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = ({ setExisten, isBusqueda, currentCategoria, productosFetch }) => {
  const [productos, setProductos]  = useState([])
  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto w-11/12">
        {productos.map((producto) => (
          <CardCategory
            isBusqueda={false}
            precioDetalle={producto.precio}
            precioMayorista={producto.mayor}
            title={producto.title}
            codigo={producto.codigo}
            url={producto.url}
            key={producto.codigo}
          />
        ))}
      </div>
    </>
  );
};

export default ProductosGroup;
