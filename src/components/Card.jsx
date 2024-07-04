import { Link } from "react-router-dom";

const Card = ({
  codigo = 100002,
  title = "AMPOLLETA HEADLIGHT H4 T1 12/24 VOLT",
  descripcion = "Descripción por default uso para pruebas de desarrollo y ux",
  precioDetalle = "5.900",
  precioMayorista = "2.590",
  categoria = "AMPOLLETAS",
  url = "/90008.png",
}) => {
  return (
    <div className="text-center my-14 w-11/12 mx-auto group hover:scale-105 rounded-md pb-4 shadow-md duration-300 hover:bg-neutral-800">
      <div className="rounded-sm">
        <Link to={`/productos`}>
          <img className="rounded-sm w-full" src={url} alt={title} />
        </Link>
      </div>
      <p className="p-0.5 group-hover:text-orange-500 text-neutral-300 text-xs bg-neutral-800">
        SKU: {codigo.toUpperCase()}
      </p>
      <h3 className="text-nowrap overflow-hidden text-ellipsis px-1 group-hover:border-orange-500 font-bold border-b-2 border-transparent md:text-lg lg:text-xl text-neutral-300 bg-neutral-800">
        {title.toUpperCase()}
      </h3>
      <div className="justify-center flex p-1 lg:text-lg md:text-sm">
        <div className="grow mx-auto text-neutral-800 group-hover:text-neutral-300">
          <p className="font-bold">Mayorista</p>
          <p>${precioMayorista}</p>
        </div>
        <div className="grow text-neutral-800 group-hover:text-neutral-300">
          <p className="font-bold">Detalle</p>
          <p>${precioDetalle}</p>
        </div>
      </div>
      <div className="min-w-max mt-2 text-sm my-auto rounded-sm p-1 font-bold">
        <Link
          to={`/categorias`}
          className="hover:border-0 border-y-2 hover:border-y-2 group-hover:text-neutral-300 text-xs duration-300 hover:border-y-orange-500 p-1"
          href=""
        >
          Ver más {categoria.toLowerCase()}
        </Link>
      </div>
    </div>
  );
};

export default Card;
