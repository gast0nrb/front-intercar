import { useState } from "react";
import {Link} from "react-router-dom";

const OlvidePage = () => {

    const [checkCorreo, setCorreo] = useState("");

    //Check correo with a regex and display button

  return (
    <div className="text-center shadow-md w-5/6 mx-auto rounded-md my-10 py-2">
      <h1 className="md:text-lg lg:text-xl w-full font-bold my-2 text-neutral-800 ">
        ¿OLVIDASTE LA CONTRASEÑA?
      </h1>
      <div>
        <input
          placeholder=" Ingresa tu correo aquí!"
          type="email"
          required
          className="bg-neutral-300 rounded-sm placeholder:text-neutral-500 placeholder:text-sm w-5/6 border-2 border-transparent focus:outline-none focus:border-orange-500 mb-4" 
        />
        </div>
      <Link to={`/olvidado`} className="w-6/12 bg-neutral-800 rounded-sm p-1 text-xs text-neutral-300 hover:text-orange-500">
        Restablecer
      </Link>
    </div>
  );
};

export default OlvidePage;
