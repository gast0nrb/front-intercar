const BasicInfo = () => {
    const razonSocial = [
        "--Seleccionar--",
        "Informática",
        "Venta de auto partes",
        "Mineria",
        "Otro",
      ];

  return (
    <div className="inline-flex flex-wrap w-11/12">
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          NOMBRE Y APELLIDO
        </label>
        <input
          type="text"
          className="rounded-md w-5/6 border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
          required
          placeholder="Ej: Santino Schopenhauer"
        />
      </div>
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          RAZÓN SOCIAL
        </label>
        <input
          type="text"
          className="rounded-md w-5/6 border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
          required
          placeholder="Ej: Venta de auto partes"
        />
      </div>
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          RUT
        </label>
        <input
          type="text"
          className="rounded-md w-5/6 border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
          required
          placeholder="Ej: 19.683.588-0"
        />
      </div>
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          GIRO
        </label>
        <select
          type="text"
          className="rounded-md w-5/6 text-center border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
        >
          {razonSocial.map((e) => (
            <option>{e}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BasicInfo;
