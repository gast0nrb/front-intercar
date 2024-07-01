const Contact = () => {
  return (
    <div className="inline-flex flex-wrap w-full border-t-2  mt-2 pb-2">
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
        <span className="text-neutral-600 p-1">*</span>
      </div>
      <div className="md:basis-full lg:basis-2/5 grow">
        <label htmlFor="" className="block">
          TELEFONO 2
        </label>
        <input
          type="number"
          className="rounded-md w-5/6 mr-3 border-2 border-transparent focus:outline-none focus:border-orange-500 shadow-sm bg-neutral-200"
          required
          placeholder="Ej: 930876542"
        />
      </div>
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
        <span className="text-neutral-600 p-1">*</span>
      </div>
    </div>
  );
};

export default Contact;
