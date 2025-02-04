import Card from "./Card";

const ProductosWrap = ({ Productos, base }) => {
  return (
      <div className="grid lg:grid-cols-3 md:grid-cols-1 w-11/12 mx-auto my-5">
        {Productos.data.Productos.filter((p, ix)=> ix >= base).map((product, i) => {
          if(i >= 3){
            return 
          }
            return (
                <Card
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
                hideCSS={i > 0 ? 'md:hidden lg:block' :'' }
                />
            );
        })}
      </div>
  );
};

export default ProductosWrap;
