import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="bg-orange-500 text-center py-2">
        <h1 className=" flex justify-center font-bold md:text-lg lg:text-5xl tracking-widest text-black ">
          INTERCARCHILE SPA</h1>
        <h2 className="lg:block md:text-xs lg:text-lg font-medium text-neutral-200">VENTA DE ACCESORIOS Y REPUESTOS AUTOMOTRICES</h2>
      </header>
      <Nav />
    </>
  );
};

export default Header;
