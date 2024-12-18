import CardOferta from "./CardOferta";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = ({ productos }) => {
  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto w-11/12">
        {productos.map((producto) => (
          <CardOferta
            isBusqueda={true}
            title={producto.titulo}
            codigo={producto.fk_producto}
            url={producto.file}
            key={producto.codigo}
            categoria={producto.categoria}
            precioDetalle={producto.monto}
          />
        ))}
      </div>
    </>
  );
};

export default ProductosGroup;
