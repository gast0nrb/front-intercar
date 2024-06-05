import Card from "./Card";

const Productos = () => {
  return (
    <>
      <h3 className="text-center md:text-2xl lg:text-5xl font-bold mt-24">
        PRODUCTOS EN OFERTA
      </h3>
      <div className="container justify-center min-w-full flex px-auto">
        <div className=" my-auto mx-auto px-2">
          <button className=" rounded-full h-8 hover:bg-neutral-800 hover:text-orange-500 bg-white lg:w-8">
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
        <div className=" right my-auto mx-auto px-2">
          <button className="rounded-full h-8 hover:bg-neutral-800 hover:text-orange-500 bg-white lg:w-8">
            &#62;
          </button>
        </div>
      </div>
    </>
  );
};

export default Productos;
