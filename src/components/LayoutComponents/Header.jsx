import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="bg-orange-500 text-center py-2">
        <h1 className="font-bold lg:text-3xl md:text-lg tracking-wider">INTERCAR CHILE SPA</h1>
        <h2 className="md:hidden lg:block lg:text-lg text-white">VENTA DE ACCESORIOS Y REPUESTOS AUTOMOTRICES</h2>
      </header>
      <Nav />
    </>
  );
};

export default Header;
