import CardCategory from "./CardCategory";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = ({productosFetch, currentCategoria}) => {
  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto w-11/12">
        {productosFetch.map((p) => (
          <CardCategory
            precioDetalle={p.ListaProductos.filter((lp)=> lp.ListaPrecio.nombre == 'Detalle')[0].monto}
            title={p.titulo}
            codigo={p.codigo}
            url={p.file}
            key={p.codigo}
            currentCategoria={currentCategoria}
          />
        ))}
      </div>
    </>
  );
};

export default ProductosGroup;
