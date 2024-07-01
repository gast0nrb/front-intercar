import { Link } from "react-router-dom";

const Card = ({
  codigo = 100002,
  title = "AMPOLLETA HEADLIGHT H4 T1 12/24 VOLT",
  descripcion = "Descripción por default uso para pruebas de desarrollo y ux",
  precioDetalle = "5.900",
  precioMayorista = "2.590",
  categoria = "AMPOLLETAS",
  url = "/90008.png",
  hidde = false,
}) => {
  return (
    <div
      className={`text-center my-14 h-max flex justify-center ${
        hidde ? "hidden" : ""
      }`}
    >
      <div className="group container-img md:w-10/12 lg:w-4/6 text-center hover:bg-neutral-800 pb-3 rounded-sm shadow-md hover:scale-110 duration-500">
        <Link to={`/productos`}>
          <img className="rounded-sm w-full" src={url} alt={title} />
        </Link>
        <h3 className="bg-neutral-800 group-hover:border-orange-500 border-b-2 font-bold text-xl group-hover:text-orange-500 text-neutral-300 ">
          {title}
        </h3>
        <div className="justify-center mx-2 group-hover:text-white">
          <div className="flex gap-1">
            <div className="div">
              <p className="font-bold xl:text-lg text-xs">Detalle</p>
            </div>
            <div className="div">
              <p className="text-xs xl:text-lg">${precioDetalle}</p>
            </div>
          </div>
          <div className="flex gap-1">
            <p className="font-bold xl:text-lg text-xs">Mayorista </p>
            <p className="text-xs xl:text-lg">${precioMayorista}</p>
          </div>
          <div className="min-w-max mt-2 text-sm my-auto rounded-sm p-1 font-bold">
            <Link
              to={`/categorias`}
              className="rounded border-2 text-xs hover:text-orange-500 duration-300 hover:border-orange-500 border-neutral-300 p-1"
              href=""
            >
              {categoria}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
