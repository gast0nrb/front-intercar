import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectCategoria = ({
  Categorias,
  currentCategoria,
  setCurrentCategoria,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ml-2 w-11/12 lg:ml-8 gap-2 my-4 font-bold">
        <p className="font-bold text-xl text-neutral-800">CATEGORIAS</p>
        <select
          onChange={(e) => {
            setCurrentCategoria(e.target.value);
            navigate("/categorias/" + e.target.value);
          }}
          id=""
          value={currentCategoria}
          className="shadow-md border-2 focus:text-orange-500 duration-300 text-neutral-800 text-center md:text-xs lg:text-md rounded-sm lg:w-1/5 md:w-1/2 p-1"
          key={1}
        >
          {Categorias.map((a) => (
            <option value={a.id} key={a.id}>
              {a.nombre.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectCategoria;
