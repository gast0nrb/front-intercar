import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="bg-neutral-800 text-center py-2">
        <h1 className="font-extrabold md:text-lg lg:text-5xl tracking-widest text-orange-500 ">INTERCARCHILE SPA</h1>
        <h2 className="lg:block md:text-xs lg:text-lg font-medium text-neutral-300">VENTA DE ACCESORIOS Y REPUESTOS AUTOMOTRICES</h2>
      </header>
      <Nav />
    </>
  );
};

export default Header;
