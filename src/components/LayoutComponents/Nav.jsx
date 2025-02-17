import { useState } from "react";
import CategoriasNav from "./CategoriasNav";
import NavItem from "./NavItem";
import { NavContext } from "../../context/NavContext";

const Nav = () => {
  const values = ["hidden", "block"];
  const [showUp, setShowUp] = useState(values[0]);
  const [focus, setFocus] = useState(false);

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
    <NavContext.Provider value={{ setShowUp, showUp, changeShowUp }}>
      <nav className="min-w-min  bg-black text-gray-400 text-center">
        <div className="flex justify-center lg:hidden w-full md:text-sm lg:text-xl pt-1">
          <div className="">
            <img
              src={showUp == "block" ? `/coneActive.svg` : `/cone.svg`}
              className="w-4 mx-auto"
            ></img>
          </div>
          <div className="">
            <button
              className="font-bold text-xs  w-full hover:text-orange-500 rounded-sm"
              onClick={changeShowUp}
              onMouseOver={() => setFocus(true)}
              onMouseLeave={() => setFocus(false)}
            >
              MENU
            </button>
          </div>
        </div>
        <ul className={`lg:${values[1]} md:${showUp} md:text-xs lg:text-xs`}>
          <NavItem
            changeShowUp={changeShowUp}
            ListName="INICIO"
            route="/"
            srcActive="/casaActive.svg"
            srcInactive="/casa.svg"
          />
          <NavItem changeShowUp={changeShowUp} />
          <CategoriasNav />
        </ul>
      </nav>
    </NavContext.Provider>
  );
};

export default Nav;
