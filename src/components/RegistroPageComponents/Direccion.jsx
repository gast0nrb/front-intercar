import { useState } from "react";

const Direccion = () => {
  const ComunaCiudad = [
    {
      id: 1,
      name: "Santiago",
      comunas: ["Stgo centro", "Quilicura", "Macul"],
    },
    {
      id: 2,
      name: "Valdivia",
      comunas: ["Las animas", "Valdivia centro", "Niebla"],
    },
  ];

  const [currentCiudad, setCiudad] = useState(ComunaCiudad[0]);

  function changeValues(id) {
    let obj = ComunaCiudad.filter((v) => v.id == id)[0];
    setCiudad(obj);
  }

  return (
    <div className="inline-flex flex-wrap w-11/12">
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          CIUDAD
        </label>
        <select
          type="text"
          className="rounded-md w-5/6 text-center border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
          onChange={(e) => changeValues(e.target.value)}
        >
          {ComunaCiudad.map((e) => (
            <option value={e.id} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          COMÚNA
        </label>
        <select
          type="text"
          className="rounded-md w-5/6 text-center border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
        >
          {currentCiudad.comunas.map((v) => (
            <option>{v}</option>
          ))}
        </select>
      </div>
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          DIRECCIÓN
        </label>
        <input
          type="text"
          className="rounded-md w-5/6 border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
          required
          placeholder="Ej: Av diez de julio 792"
        />
      </div>
    </div>
  );
};

export default Direccion;
