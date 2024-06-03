import Nav from "./Nav";

const Header = () => {
  return (
    <div className="min-w-min text-center mx-auto bg-orange-500">
      <header className="rounded-sm xl:h-24  lg:ih-20">
        <div className="title xl:h-1/2 lg:h-1/3 ">
          <h1 className="md:py-3 xl:py-0 text-black-500 font-bold tracking-widest xl:text-6xl lg:text-5xl md:text-xl">
            INTERCARCHILE <span className="md:hidden lg:inline">SPA</span>
          </h1>
          <h2 className="md:hidden lg:block lg:text-xl text-gray-200">
            VENTA DE ACCESORIOS Y REPUESTOS AUTOMOTRICES
          </h2>
        </div>
      </header>
      <Nav/>      
    </div>
  );
};

export default Header;
