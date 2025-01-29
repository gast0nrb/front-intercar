import Sucursal from "./Sucursal";

const Sucursales = ({ title, sucursales, showUp, hide }) => {
    console.log(sucursales)
  return (
    <>
      <h3
        id="sucursales"
        className="mb-4 ml-2 font-bold bg-neutral-800 border-b-2 border-orange-500 w-fit px-2 rounded-sm text-neutral-300"
      >
        {title}
      </h3>
      <div className="mb-5 w-11/12 mx-auto gap-2 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
        {sucursales.map((s) => (
          <Sucursal
            showUp={showUp}
            hide={hide}
            ciudad={s.COMUNA.CIUDAD.nombre}
            comuna={s.COMUNA.nombre}
            direccion={s.direccion}
            nombre={s.nombre}
            url={s.urlMaps}
            urlWaze={s.urlWaze}
            id={s.id}
            key={s.id}
            showBig={s.showBig}
            image={s.foto_url}
          />
        ))}
      </div>
    </>
  );
};

export default Sucursales;
