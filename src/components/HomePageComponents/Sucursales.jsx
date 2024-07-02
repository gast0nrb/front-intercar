import Sucursal from "./Sucursal";

const Sucursales = ({ title, sucursales, EsStgo = true }) => {
  return (
    <div className="">
      <h3 className="mb-4 ml-2 font-bold bg-neutral-800 border-b-2 border-orange-500 w-fit px-2 rounded-sm text-neutral-300">{title}</h3>
      <div className="mb-5 w-11/12 mx-auto gap-2 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
        {sucursales
          .filter((s) => {
            if (EsStgo) {
              return s.ciudad.toLowerCase() == "santiago";
            } else {
              return s.ciudad.toLowerCase() != "santiago";
            }
          })
          .map((s) => (
            <Sucursal nombre={s.name} direccion={s.direccion}/>
          ))}
      </div>
    </div>
  );
};

export default Sucursales;
