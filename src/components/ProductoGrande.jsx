const ProductoGrande = ({ producto }) => {
  return (
    <div className="md:w-11/12 mx-auto lg:w-full lg:flex md:flex-row mb-20 pt-12 py-3">
      <div className="cointaer-foto xl:w-5/12 lg:w-6/12 md:w-11/12 lg:mb-0 shadow-lg rounded-md md:mx-auto lg:mx-6">
        <p className=" rounded-t-sm text-orange-500 text-xs font-bold bg-neutral-800 lg:rounded-sm p-1">
          SKU: {producto.codigo}
        </p>
          <img
          className=" w-full h-full lg:rounded-b-sm"
            src={`http://localhost:8000/api/v0.5/webintercar/imagenes/${producto.codigo}`}
            alt={producto.title}
          />
      </div>
      <div className="md:w-11/12 lg:w-2/5 lg:flex-wrap shadow-lg rounded-md md:mx-auto lg:mx-0 group">
        <div className="descripcion text-center duration-300">
          <h2 className=" text-center group-hover:text-orange-500 duration-300 border-b-2 group-hover:border-orange-500 bg-neutral-800 rounded-sm text-neutral-300 font-bold md:text-xl lg:text-xl xl:text-3xl">
            {producto.titulo.toUpperCase()}
          </h2>
          <p className="md:text-sm lg:text-xl px-2 duration-300 overflow-y-scroll">
            {producto.descripcion.toLowerCase()}
          </p>
        </div>
        <div className=" duration-300 border-neutral-200 text-center rounded-br-md rounded-tr-md">
          <p className="text-xl font-extrabold bg-neutral-800 text-neutral-300 w-full rounded-sm px-2 group-hover:text-orange-500 duration-300">
            PRECIO
          </p>
          <p className="font-bold duration-300">
            DETALLE{" "}
            <span className="font-normal">
              $
              {producto.ListaProductos.filter((v) => v.fk_lista == 2)[0]?.monto
                ? producto.ListaProductos.filter((v) => v.fk_lista == 2)[0]
                    .monto
                : 0}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductoGrande;
