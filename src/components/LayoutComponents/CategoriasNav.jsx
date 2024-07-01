import React from "react";
import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const CategoriasNav = () => {
  const { changeShowUp } = useContext(NavContext);
  const [showCategorias, setShowCategorias] = useState(false);

  function displayCategorias() {
    setShowCategorias(true);
  }

  function hideCategorias() {
    setShowCategorias(false);
  }
  return (
    <li
      onMouseLeave={hideCategorias}
      onMouseOver={displayCategorias}
      className=" xl:mx-6 lg:mx-4 lg:inline-block xl:px-6 lg:px-2 hover:text-orange-500  rounded-sm"
    >
      <div className="flex justify-center gap-1">
        <div>
          <img
            src={showCategorias ? "/categoryActive.svg" : "/category.svg"}
            className="w-4"
            alt=""
          />
        </div>
        <div>
          <Link
            className="mr-3"
            to={`/categorias`}
            onClick={changeShowUp}
            href=""
          >
            CATEGORIAS
          </Link>
        </div>
      </div>
      {showCategorias ? (
        <ul
          className={`bg-neutral-900 lg:z-50 lg:absolute p-1 w-30 text-neutral-400`}
        >
          <li className="hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent">
            <Link onClick={changeShowUp} to={`/categorias`}>
              AMPOLLETAS
            </Link>
          </li>
          <li className="hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent">
            <Link onClick={changeShowUp} to={`/categorias`}>
              LED
            </Link>
          </li>
          <li className="hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent">
            <Link onClick={changeShowUp} to={`/categorias`}>
              PLUMILLAS
            </Link>
          </li>
          <li className="hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent">
            <Link onClick={changeShowUp} to={`/categorias`}>
              VER TODAS
            </Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </li>
  );
};

export default CategoriasNav;
