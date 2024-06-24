import { useState } from "react";
import { Link } from "react-router-dom";
import CategoriasNav from "./CategoriasNav";
import { NavContext } from "../context/NavContext";


const Nav = () => {
  const values = ["hidden", "block"];
  const [showUp, setShowUp] = useState(values[0]);

  function changeShowUp() {
    if (parseInt(window.innerWidth) < 980) {
      if (showUp == "hidden") {
        setShowUp(values[1]);
      } else {
        setShowUp(values[0]);
      }
    }
  }


  return (
  <NavContext.Provider value={{setShowUp, showUp, changeShowUp}}>
    <nav className="min-w-min bg-neutral-800 text-gray-400 text-center">
      <div className="md:block lg:hidden w-full md:text-sm lg:text-xl">
        <button
          className="font-extrabold w-full hover:bg-black hover:text-orange-500 rounded-sm"
          onClick={changeShowUp}
        >
          MENU
        </button>
      </div>
      <ul className={`lg:${values[1]} md:${showUp} md:text-xs lg:text-md`}>
        <li
          className="xl:mx-6 xl:px-6 lg:mx-4 lg:px-2 lg:inline-block hover:font-bold hover:text-orange-500 hover:bg-black rounded-sm"
        >
          <Link
          onClick={changeShowUp}
          to={`/`} href="">
            INICIO
          </Link>
        </li>
        <CategoriasNav/>
        <li className="xl:mx-6 lg:mx-4 xl:px-6 lg:px-2 lg:inline-block  hover:font-bold hover:text-orange-500 hover:bg-black rounded-sm">
          <Link
          onClick={changeShowUp}
          to={`/busqueda/oferta`}>
            OFERTAS/LIQUIDACIÓN
          </Link>
        </li>
        <li className="xl:mx-6 xl:px-6 lg:mx-4 lg:px-2 lg:inline-block  hover:font-bold hover:text-orange-500 hover:bg-black rounded-sm">
          <Link onClick={changeShowUp} to={`/login`} href="">
            SOY CLIENTE
          </Link>
        </li>
        <li className="xl:mx-6 xl:px-6 lg:mx-4 lg:px-2 lg:inline-block  hover:font-bold hover:text-orange-500 hover:bg-black rounded-sm">
          <Link onClick={changeShowUp} to={`/listadocarro`} href="">
            MIS CARROS
          </Link>
        </li>
      </ul>
    </nav>
    </NavContext.Provider>
  );
};

export default Nav;
