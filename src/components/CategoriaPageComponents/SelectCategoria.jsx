import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SelectCategoria = ({ categoriaActual, setCategoriaActual }) => {
  const [cargandoCategorias, setCargandoCategorias] = useState(true);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getCategorias() {
      const fetchCategorias = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/categorias`
      );
      const jsonCategorias = await fetchCategorias.json();

      setCategorias([...jsonCategorias.data]);
      setCargandoCategorias(false);
    }
    getCategorias();
  }, [cargandoCategorias]);

  const navigate = useNavigate();

  return (
    <>
    {
      cargandoCategorias ? 
      <p>Cargando categorias...</p>
      :

      <div className="ml-2 w-11/12 lg:ml-8 gap-2 my-4 font-bold">
        <p className="font-bold text-xl text-neutral-800">CATEGORIAS</p>
        <select
          onChange={(e) => {
            setCategoriaActual({ id: e.target.value });
            navigate("/categorias/" + e.target.value);
          }}
          id=""
          value={categoriaActual}
          className="shadow-md border-2 focus:text-orange-500 duration-300 text-neutral-800 text-center md:text-xs lg:text-md rounded-sm lg:w-1/5 md:w-1/2 p-1"
          key={1}
        >
          {categorias.map((a) => (
            <option value={a.id} key={a.id}>
              {a.nombre.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
}
    </>
  );
};

export default SelectCategoria;
