import { Link } from "react-router-dom";

const CardCategory = ({
  title,
  codigo,
  precioDetalle,
  url,
  categoria,
}) => {
  return (
    <div className="group shadow-md m-5 my-10 rounded-md lg:hover:scale-110 duration-300">
      <div className="">
        <Link to={`/productos`}>
          <img src={`${url}`} alt="" className="rounded-t-md" />
        </Link>
      </div>
      <div className="data-container text-center group-hover:bg-neutral-800 group-hover:text-neutral-300 duration-300 pb-2">
        <div>
          <p className="text-xs bg-neutral-800 text-neutral-300 group-hover:text-orange-500">
            SKU:{codigo.toUpperCase()}
          </p>
        </div>
        <div className="font-bold bg-neutral-800 border-b-2 border-transparent group-hover:border-orange-500 duration-300">
          <h3 className="text-neutral-300 font-bold md:text-lg lg:text-xl px-1 text-nowrap overflow-hidden text-ellipsis">
            {title.toUpperCase()}
          </h3>
        </div>
        <div className="prices px-1 flex">
          <div className="grow">
            <p className="font-bold">Detalle</p>
            <p>${precioDetalle}</p>
          </div>
        </div>
        <div className={"text-center"}>
          <Link
            to={`/categorias/${categoria.id}`}
            className="border-y-2 hover:border-orange-500 duration-300 rounded-sm w-auto text-xs p-1 font-bold"
          >
            Ver más {categoria.nombre.toLowerCase()}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
