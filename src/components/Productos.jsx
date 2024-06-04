import Card from "./Card";

const Productos = () => {
  return (
    <>
      <h3 className="text-center md:text-3xl lg:text-5xl font-bold mt-24">
        PRODUCTOS EN OFERTA
      </h3>
      <div className="container justify-center min-w-full flex mt-2 px-3">
        <div className=" my-auto w-10">
          <button className=" rounded-full h-8 hover:bg-neutral-800 hover:text-orange-500 bg-white w-8">
            &#60;
          </button>
        </div>
        <div className="">
          <Card />
    </div>
    <div className="md:hidden lg:block">
          <Card />
          </div>
          <div className="md:hidden lg:block">
          <Card />
          </div>
        <div className=" right my-auto mx-2">
          <button className="rounded-full h-8 hover:bg-neutral-800 hover:text-orange-500 bg-white w-8">
            &#62;
          </button>
        </div>
      </div>
    </>
  );
};

export default Productos;
