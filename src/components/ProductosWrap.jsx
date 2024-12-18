import { useState } from "react";
import Card from "./Card";

const ProductosWrap = ({ val1, val2, Productos, setCurrentCodigo }) => {
  const [precios, setPrecios] = useState();
  return (
    <div className="w-11/12 mx-auto grid gap-3 md:grid-cols-1 lg:grid-cols-3">
      <div>
        <Card
          id_categoria={Productos.data[0].id_categoria}
          nombre_categoria={Productos.data[0].Nombre_categoria}
          codigo={Productos.data[0].fk_producto}
          descripcion={Productos.data[0]}
          precioDetalle={Productos.data[0].monto}
          precioMayorista={0}
          title={Productos.data[0].titulo}
          url={Productos.data[0].file}
        />
      </div>
      <div className="md:hidden lg:block">
        <Card
          id_categoria={Productos.data[1].id_categoria}
          nombre_categoria={Productos.data[1].Nombre_categoria}
          codigo={Productos.data[1].fk_producto}
          descripcion={Productos.data[1]}
          precioDetalle={Productos.data[1].monto}
          title={Productos.data[1].titulo}
          url={Productos.data[1].file}
        />
      </div>
      <div className="md:hidden lg:block">
        <Card
          id_categoria={Productos.data[2].id_categoria}
          nombre_categoria={Productos.data[2].Nombre_categoria}
          codigo={Productos.data[2].fk_producto}
          descripcion={Productos.data[2]}
          precioDetalle={Productos.data[2].monto}
          title={Productos.data[2].titulo}
          url={Productos.data[2].file}
        />
      </div>
    </div>
  );
};

export default ProductosWrap;
