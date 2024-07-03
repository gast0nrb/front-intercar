import Card from "./Card";

const ProductosWrap = ({ contador, val1, val2, Productos }) => {
  return (
    <div className="w-11/12 mx-auto grid gap-3 md:grid-cols-1 lg:grid-cols-3">
        <div>
        <Card
          categoria={Productos[contador].categoria}
          codigo={Productos[contador].codigo}
          descripcion={Productos[contador]}
          precioDetalle={Productos[contador].precioDetalle}
          precioMayorista={Productos[contador].precioMayorista}
          title={Productos[contador].title}
          url={Productos[contador].url}
        />
        </div>
        <div className="md:hidden lg:block">
        <Card
          categoria={Productos[val1].categoria}
          codigo={Productos[val1].codigo}
          descripcion={Productos[val1]}
          precioDetalle={Productos[val1].precioDetalle}
          precioMayorista={Productos[val1].precioMayorista}
          title={Productos[val1].title}
          url={Productos[val1].url}
        />
        </div>
        <div className="md:hidden lg:block">
        <Card
          categoria={Productos[val2].categoria}
          codigo={Productos[val2].codigo}
          descripcion={Productos[val2]}
          precioDetalle={Productos[val2].precioDetalle}
          precioMayorista={Productos[val2].precioMayorista}
          title={Productos[val2].title}
          url={Productos[val2].url}
        />
        </div>
    </div>
  );
};

export default ProductosWrap;
