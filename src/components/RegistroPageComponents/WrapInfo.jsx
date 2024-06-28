import { useState } from "react";
import { Link } from "react-router-dom";

import BasicInfo from "./BasicInfo";
import Direccion from "./Direccion";
import Contact from "./Contact";

const WrapInfo = () => {
  const obj = {

  }
  const [registroObj, setRegistroObj] = useState()
  return (
    <section className="mx-auto shadow-md w-11/12 rounded-md text-center pb-4 mb-4 font-bold text-neutral-800 lg:text-xl md:text-xs">
      <h2 className="text-left bg-neutral-800 rounded-sm text-orange-500 pl-2">
        REGISTRO
      </h2>
      <BasicInfo />
      <Direccion />
      <Contact />
      <Link
        to={`/registrado`}
        className="block mx-auto md:w-11/12 lg:w-3/12 bg-orange-500 rounded-sm hover:text-white text-neutral-800 mt-3 "
      >
        Crear cuenta
      </Link>
    </section>
  );
};

export default WrapInfo;
