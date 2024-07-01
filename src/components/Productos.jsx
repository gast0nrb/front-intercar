import ProductosReload from "./ProductosReload";
import ProductosWrap from "./ProductosWrap";

const Productos = ({ title = "PUT SOME TITLE HERE" , reloadName}) => {
  return (
    <>
      <h3
        className={`border-x-4 lg:w-fit md:w-11/12 text-center md:text-md lg:text-4xl xl:text-5xl font-extrabold md:mt-10 lg:mt-24 bg-neutral-800 mx-auto lg:px-4 rounded-sm text-neutral-300 lg:tracking-widest py-1 border-orange-500`}
      >
        {title}
      </h3>
      <div className="container justify-center min-w-full flex px-auto">
        <ProductosWrap />
      </div>
      <ProductosReload title={reloadName}/>
    </>
  );
};

export default Productos;
