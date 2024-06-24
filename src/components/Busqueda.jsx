import { Link } from "react-router-dom";
import { useState } from "react";

const Busqueda = () => {
  const [busqueda, setBusqueda] = useState("");

  function preventBusqueda(e) {
    if (busqueda.trimEnd().trimStart().length > 0) {
        setBusqueda(e.target.value.trimEnd())
        setBusqueda(e.target.value.trimStart())
    } else {
      e.preventDefault();
    }
  }

  function enterFind(e) { //Da clic al link cuando se presiona enter <> la función preventBusqueda valida que no se envién blancos y además hace trim en el final y comienzo
    if (e.key === "Enter") {
      document.getElementById("busqueda").click();
    }
  }

  return (
    <div className="flex justify-center py-2 border-b-2">
      <div className="bsq duration-500 focus-within:w-3/4 w-2/4 text-center">
        <input
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
          onKeyDown={enterFind}
          className="h-6 bg-transparent border-2 shadow-sm text-sm focus:outline-none  focus:border-orange-200 rounded-sm w-2/3 placeholder:text-xs"
          type="text"
          name=""
          placeholder="¡Busca acá!"
          id=""
        />
      </div>
      <div className="btn md:w-2/6 lg:w-1/6 text-center">
        <Link
          id="busqueda"
          onClick={preventBusqueda}
          to={`/busqueda/${busqueda}`}
          className={`h-6 w-full shadow-md border-2 hover:border-2 font-bold  p-1 rounded-md text-neutral-500 lg:text-sm  md:text-xs ${
            busqueda.trimEnd().trimStart().length
              ? `hover:text-orange-500 hover:bg-neutral-800`
              : ``
          }`}
        >
          Buscar
        </Link>
      </div>
    </div>
  );
};

export default Busqueda;
