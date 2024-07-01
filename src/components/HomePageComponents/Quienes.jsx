const Quienes = () => {
  return (
    <>
      <div className="container-quienes ml-3 my-10 md:mx-auto lg:mx-10  w-3/4 border-2 duration-300 shadow-md text-center rounded-md leading-7">
        <div className="flex flex-wrap justify-center border-b-2 bg-neutral-800 rounded-sm border-orange-500">
          <h3 className="text-neutral-300 lg:text-xl xl:text-2xl font-extrabold text-center tracking-widest">
            QUIENES SOMOS
          </h3>
        </div>
        <div className="p-1 text-neutral-700 text-wrap md:text-sm xl:text-xl lg:text-sm">
          Somos una empresa dedicada a la venta de accesorios automotrices y
          repuestos. Con más de 20 años en el mercado y variedad de productos,
          buscando día a día nuevos productos innovadores para nuestra
          clientela.
        </div>
      </div>
    </>
  );
};

export default Quienes;
