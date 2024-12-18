import { useState } from "react";
import Card from "./Card";

const ProductosWrap = ({ val1, val2, Productos, setCurrentCodigo }) => {
  const [precios, setPrecios] = useState();
  return (
    <div className="w-11/12 mx-auto grid gap-3 md:grid-cols-1 lg:grid-cols-3">
      <div>
        <Card
          setCurrentCodigo={setCurrentCodigo}
          id_categoria={Productos.data.id}
          nombre_categoria={Productos.data.nombre}
          codigo={Productos.data.Productos[0].codigo}
          descripcion={Productos.data.Productos[0].descripcion}
          precioDetalle={Productos.data.Productos[0].ListaProductos.filter((v)=> v.fk_lista == 2)[0].monto}
          title={Productos.data.Productos[0].titulo}
          url={Productos.data.Productos[0].file}
        />
      </div>
      <div className="md:hidden lg:block">
      <Card
        setCurrentCodigo={setCurrentCodigo}
          id_categoria={Productos.data.id}
          nombre_categoria={Productos.data.nombre}
          codigo={Productos.data.Productos[1].codigo}
          descripcion={Productos.data.Productos[1].descripcion}
          precioDetalle={Productos.data.Productos[1].ListaProductos.filter((v)=> v.fk_lista == 2)[0].monto}
          title={Productos.data.Productos[1].titulo}
          url={Productos.data.Productos[1].file}
        />
      </div>
      <div className="md:hidden lg:block">
      <Card
        setCurrentCodigo={setCurrentCodigo}
          id_categoria={Productos.data.id}
          nombre_categoria={Productos.data.nombre}
          codigo={Productos.data.Productos[2].codigo}
          descripcion={Productos.data.Productos[2].descripcion}
          precioDetalle={Productos.data.Productos[2].ListaProductos.filter((v)=> v.fk_lista == 2)[0].monto}
          title={Productos.data.Productos[2].titulo}
          url={Productos.data.Productos[2].file}
        />
      </div>
    </div>
  );
};

export default ProductosWrap;
