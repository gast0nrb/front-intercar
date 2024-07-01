import { useState } from "react";
import { Link } from "react-router-dom";
import CategoriasNav from "./CategoriasNav";
import { NavContext } from "../../context/NavContext";


const Nav = () => {
  const values = ["hidden", "block"];
  const [showUp, setShowUp] = useState(values[0]);
  const [focus, setFocus] = useState(false)


/** ChangeShow up
 *  Objetivo principal: Permitir mostrar el menú.
 *  Validaciones : {
 *    - Revisar que el ancho actual de la ventana sea mayor a 980, ya que si es menor los elementos cambian de despliegue y no es necesario desplegarlos con estados.
 *  }
 */
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
    <nav className="min-w-min  bg-black text-gray-400 text-center">
      <div className="flex justify-center lg:hidden w-full md:text-sm lg:text-xl pt-1">
        <div className="">
           <img
            src={showUp == "block" ? `/coneActive.svg`: `/cone.svg`} className="w-4 mx-auto"></img>
            </div>
        <div className="mr-3">
        <button
          className="font-extrabold w-full hover:bg-black hover:text-orange-500 rounded-sm"
          onClick={changeShowUp}
          onMouseOver={()=> setFocus(true)}
          onMouseLeave={()=> setFocus(false)}
        >MENU
        </button>
        </div>
      </div>
      <ul className={`lg:${values[1]} md:${showUp} md:text-xs lg:text-md`}>
        <li
          className="xl:mx-6 xl:px-6 lg:mx-4 lg:px-2 lg:inline-block hover:text-orange-500  rounded-sm hover:border-orange-500 border-b-2 border-transparent"
        >
          <Link
          onClick={changeShowUp}
          to={`/`} href="">
            INICIO
          </Link>
        </li>
        <li className="xl:mx-6 lg:mx-4 xl:px-6 lg:px-2 lg:inline-block  hover:text-orange-500 rounded-sm hover:border-orange-500 border-b-2 border-transparent">
          <div className="flex justify-center">
          <div>
            <img src="/money1.svg" className="w-4" alt="" />
          </div>
            <div className="mr-3">
          <Link
          onClick={changeShowUp}
          to={`/busqueda/oferta`}>
            OFERTAS/LIQUIDACIÓN
          </Link>
          </div>
          </div>
        </li>
        <li className="xl:mx-6 xl:px-6 lg:mx-4 lg:px-2 lg:inline-block  hover:text-orange-500 rounded-sm hover:border-orange-500 border-b-2 border-transparent">
          <Link onClick={changeShowUp} to={`/login`} href="">
            SOY CLIENTE
          </Link>
        </li>
        <li className="xl:mx-6 xl:px-6 lg:mx-4 lg:px-2 lg:inline-block hover:text-orange-500 rounded-sm hover:border-orange-500 border-b-2 border-transparent">
          <Link onClick={changeShowUp} to={`/listadocarro`} href="">
            MIS CARROS
          </Link>
        </li>
        <CategoriasNav/>
      </ul>
    </nav>
    </NavContext.Provider>
  );
};

export default Nav;
