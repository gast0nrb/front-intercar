import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const CategoriasNav = () => {
  const { changeShowUp } = useContext(NavContext);
  const [showCategorias, setShowCategorias] = useState(false);
  const [cargandoCategorias, setCargandoCategorias] = useState(true)
  const [categorias, setCategorias] = useState([])

  async function getCategorias() {
    const fetchCategorias = await fetch(
      `http://localhost:8000/api/v0.5/webintercar/categorias`
    );
    const jsonCategorias = await fetchCategorias.json();
    jsonCategorias.data = jsonCategorias.data.sort()
    setCategorias([...jsonCategorias.data]);
    setCargandoCategorias(false);
  }

  useEffect(()=> {
  getCategorias()   
  },[cargandoCategorias])

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
      className=" xl:mx-6 lg:mx-4 lg:inline-block hover:text-orange-500  rounded-sm"
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
            reloadDocument
            className="mr-3"
            to={`/categorias/1`}
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
          { 
          categorias.filter((v, i)=> i<=3).map((c, i) => (
            <li
              key={c.id}
              className="hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent"
            >
              <Link
                reloadDocument
                onClick={changeShowUp}
                to={`/categorias/${c.id}`}
              >
                {c.nombre.toUpperCase()}
              </Link>
            </li>
          ))}
          <li className="hover:text-orange-500 hover:border-orange-500 border-b-2 border-transparent">
            <Link reloadDocument onClick={changeShowUp} to={`/categorias/1`}>
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
