
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
    <div className="group container text-center py-14 h-max flex justify-center hover:scale-110 duration-500">
      <div className="container-img md:w-max lg:w-4/6 text-center group-hover:bg-neutral-800 pb-3 rounded-sm shadow-md">
        <a href="#">
          <img className="rounded-sm w-full" src={url} alt={title} />
        </a>
        <h3 className="bg-neutral-800 group-hover:border-orange-500 border-b-2 font-bold text-xl group-hover:text-orange-500 text-neutral-300 ">{title}</h3>
        <div className="flex-col  justify-center mx-2 group-hover:text-white">
          <div className="flex gap-7">
            <div className="div">
              <p className="font-bold">Detalle</p>
            </div>
            <div className="div">
              <p>${precioDetalle}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">Mayorista </p>
            <p>${precioMayorista}</p>
          </div>
          <div className="min-w-max mt-2 text-sm my-auto rounded-sm p-1 font-bold">
            <a className="rounded border-2 group-hover:border-neutral-500 p-2" href="">{categoria}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
