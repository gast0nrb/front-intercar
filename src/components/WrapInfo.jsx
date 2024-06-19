import { useState } from "react";
import { Link } from "react-router-dom";

import BasicInfo from "./BasicInfo";
import Direccion from "./Direccion";
import Contact from "./Contact";

const WrapInfo = () => {
  const [currentPage, setPage] = useState(0);
  const components = [<BasicInfo />, <Direccion />, <Contact />];

  return (
      <form action="">
      <section className="mx-auto shadow-md w-11/12 rounded-md text-center pb-4 mb-4 font-bold text-neutral-800 lg:text-xl md:text-xs">
        <h2 className="text-left bg-neutral-800 rounded-sm text-orange-500 pl-2">
          REGISTRO {currentPage + 1}/3
        </h2>
        {components[currentPage]}
        <button
          className="block mx-auto md:w-11/12 lg:w-3/12 bg-neutral-800 rounded-sm text-neutral-300 my-3 hover:text-orange-500"
          onClick={() => {
            if (currentPage >= 1 && currentPage <= components.length - 1) {
              setPage(currentPage - 1);
            }
          }}
        >
          Anterior
        </button>
        {currentPage !== components.length - 1 ? 
        (
          <button
            className="mx-auto md:w-11/12 lg:w-3/12 bg-neutral-800 rounded-sm text-neutral-300 my-3 hover:text-orange-500"
            onClick={() => {
              if (currentPage >= 0 && currentPage < components.length - 1) {
                setPage(currentPage + 1);
              }
            }}
          >
            Siguiente
          </button>
        )
         : (
          <Link to={`/registrado`} className="block mx-auto md:w-11/12 lg:w-3/12 bg-orange-500 rounded-sm hover:text-white my-3 text-neutral-800" type="submit">
            Crear cuenta
          </Link>
        )}
      </section>
  </form>
  );
};

export default WrapInfo;
