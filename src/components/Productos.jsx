import Card from "./Card";

const Productos = ({title = 'PUT SOME TITLE HERE'}) => {
  return (
    <>
      <h3 className={`border-x-4 lg:w-fit md:w-11/12 text-center md:text-xl lg:text-5xl font-extrabold md:mt-10 lg:mt-24 bg-neutral-800 mx-auto lg:px-4 rounded-sm text-neutral-300 tracking-widest py-1 border-orange-500`}>
        {title}
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
