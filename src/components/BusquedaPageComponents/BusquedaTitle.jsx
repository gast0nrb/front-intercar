const BusquedaTitle = ({ title = "DEFAULT BUSQUEDA" }) => {
  return (
    <>
      <h2 className="bg-neutral-800 rounded-md p-1 text-neutral-300 md:text-xs lg:text-xl font-bold md:w-auto lg:w-1/2 text-center mt-6 mx-2">
        RESULTADOS PARA
      </h2>
      <p className="md:text-xs lg:text-xl text-orange-500 font-bold mx-4">{title.toUpperCase()}</p>
    </>
  );
};

export default BusquedaTitle;
