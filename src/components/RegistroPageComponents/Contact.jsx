const Contact = () => {
  return (
    <div className="inline-flex flex-wrap w-11/12">
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          CORREO ELECTRONICO
        </label>
        <input
          type="email"
          className="rounded-md w-5/6 border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
          required
          placeholder="Ej: schopenhauer@gmail.com"
        />
      </div>
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          TELEFONO
        </label>
        <input
          type="number"
          className="rounded-md w-5/6 border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
          required
          placeholder="Ej: 942151231"
        />
      </div>
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          TELEFONO 2
        </label>
        <input
          type="number"
          className="rounded-md w-5/6 border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
          required
          placeholder="Ej: 930876542"
        />
      </div>
    </div>
  );
};

export default Contact;
