import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Direccion from "./Direccion";

const WrapInfo = () => {
  const [currentPage, setPage] = useState(0);
  const components = [<BasicInfo />, <Direccion />];

  return (
    <>
      <section className="mx-auto shadow-md w-11/12 rounded-md text-center pb-4 mb-4 font-bold text-neutral-800 lg:text-xl md:text-xs">
        <h2 className="text-left bg-neutral-800 rounded-sm text-orange-500 pl-2">
          REGISTRO {currentPage}/3
        </h2>
        {components[currentPage]}
        <button
          className="block mx-auto md:w-11/12 lg:w-3/12 bg-neutral-800 rounded-sm text-neutral-300 my-3 hover:text-orange-500"
          onClick={()=> {
            if (currentPage >= components.length - 1) {
              setPage(currentPage-1)
            }
          }}
        >
          Anterior
        </button>
        <button
          className="block mx-auto md:w-11/12 lg:w-3/12 bg-neutral-800 rounded-sm text-neutral-300 my-3 hover:text-orange-500"
          onClick={()=> {
            if(currentPage >= 0) {
              setPage(currentPage+1)
            }
          }}
        >
          Siguiente
        </button>
      </section>
    </>
  );
};

export default WrapInfo;
