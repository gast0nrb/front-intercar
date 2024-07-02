const Sucursal = ({ url, direccion, comuna, ciudad, nombre, contacto }) => {
  return (
    <div className="border-2 shadow-md text-center group border-transparent duration-300 hover:border-b-orange-500">
      <div className="">
        <img src="local.jpg" alt="" className="w-12/12" />
      </div>
      <div className="">
        <h3 className="font-bold text-neutral-800 lg:text-sm text-nowrap md:text-xs overflow-hidden text-ellipsis">
          {nombre}
        </h3>
        <button className="mx-auto">
          <img src="/expandArrow.svg" alt="" className="md:w-3 lg:w-4" />
        </button>
      </div>
    </div>
  );
};

export default Sucursal;
