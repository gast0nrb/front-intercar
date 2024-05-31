const Header = () => {
  return (
    <div className="min-w-min text-center mx-auto bg-orange-500">
      <header className="rounded-sm xl:h-24  lg:ih-20">
        <div className="title xl:h-1/2 lg:h-1/3 ">
          <h1 className=" text-black-500 font-bold tracking-widest xl:text-6xl lg:text-5xl">
            INTERCARCHILE SPA
          </h1>
          <h2 className="text-gray-200">VENTA DE ACCESORIOS Y REPUESTOS AUTOMOTRICES</h2>
        </div>
      </header>
      <nav className="min-w-min bg-neutral-800 text-gray-400">
        <ul className="inline-block">
          <li className="mx-6 inline-block px-6 hover:text-orange-500">
            <a href="">CATEGORIAS</a>
          </li>
          <li className="mx-6 px-6 inline-block hover:text-orange-500">
            <a href="">OFERTAS/LIQUIDACIÓN</a>
          </li>
          <li className="mx-6 px-6 inline-block hover:text-orange-500">
            <a href="">SOY CLIENTE</a>
          </li>
          <li className="mx-6 px-6 inline-block hover:text-orange-500">
            <a href="">QUIENES SOMOS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
