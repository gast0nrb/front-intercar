import Card from "./Card";
///HOME PAGE/SECTION PRODUCTOS EN OFERTA

const ProductosWrap = ({ Productos, base }) => {
  return (
    <div className="w-11/12 mx-auto grid gap-3 md:grid-cols-1 lg:grid-cols-3">
      {
      /**Filtra los productos que  el iterados es mayoe
       * o igual a la base.
       * Después recorre los filtrados y solo devuelve los primeros 3
       */
      Productos.data.filter((p, ix)=> ix >= base ).map((producto, i)=> {
        if (i >= 3) {
          return 
        }
        return (
          <Card 
            codigo={producto.fk_producto}
            title={producto.titulo}
            descripcion={producto.descripcion}
            nombre_categoria={producto.Nombre_categoria}
            id_categoria={producto.id_categoria}
            url={producto.file}
            precioDetalle={producto.monto}
            hideCSS={i > 0 ? 'md:hidden lg:block' :'' }
            />
      )
      })}
    </div>
  );
};

export default ProductosWrap;
