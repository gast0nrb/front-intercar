import Card from "./Card";

const ProductosWrap = ({ Productos, setCurrentCodigo }) => {
  return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {Productos.data.Productos.map((product, i) => {
          if (i <= 3) {
            return (
                <Card
                  setCurrentCodigo={setCurrentCodigo}
                  id_categoria={Productos.data.id}
                  nombre_categoria={Productos.data.nombre}
                  codigo={product.codigo}
                  descripcion={product.descripcion}
                  title={product.titulo}
                  precioDetalle={
                    product.ListaProductos.length > 0
                      ? product.ListaProductos.filter(
                          (lp) => lp.fk_lista == 2
                        )[0].monto
                      : 0
                  }

                />
            );
          }
        })}
      </div>
  );
};

export default ProductosWrap;
