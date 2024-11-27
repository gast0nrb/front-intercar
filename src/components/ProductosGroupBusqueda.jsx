import CardCategory from "./CardCategory";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = ({ productos }) => {
  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto w-11/12">
        {productos.map((producto) => (
          <CardCategory
            isBusqueda={true}
            precioDetalle={
              producto.ListaProductos.filter(
                (lp) => lp.ListaPrecio.nombre == "Detalle"
              )[0].monto
            }
            title={producto.titulo}
            codigo={producto.codigo}
            url={producto.file}
            key={producto.codigo}
            categoria={producto.CATEGORIum}
          />
        ))}
      </div>
    </>
  );
};

export default ProductosGroup;
