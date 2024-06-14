import { useState } from "react";

const Nav = () => {
    const values = ["hidden", "block"];
    const [showUp, setShowUp] = useState(values[0])
    function changeShowUp() {
        if (showUp == 'hidden') {
            setShowUp(values[1])
        } else {
            setShowUp(values[0])
        }
    }
  return (
    <nav className="min-w-min bg-neutral-800 text-gray-400 text-center">
      <div className="md:block lg:hidden w-full md:text-sm lg:text-xl">
        <button className="w-full hover:bg-black hover:text-orange-500 rounded-sm" onClick={changeShowUp}>MENU</button>
      </div>
      <ul className={`lg:${values[1]} md:${showUp} md:text-xs lg:text-md`}>
        <li className="xl:mx-6 lg:mx-4 lg:inline-block xl:px-6 lg:px-4 hover:text-orange-500 hover:bg-black rounded-sm">
          <a href="">CATEGORIAS</a>
        </li>
        <li className="xl:mx-6 lg:mx-4 xl:px-6 lg:px-4 lg:inline-block hover:text-orange-500 hover:bg-black rounded-sm">
          <a href="">OFERTAS/LIQUIDACIÓN</a>
        </li>
        <li className="xl:mx-6 xl:px-6 lg:mx-4 lg:px-4 lg:inline-block hover:text-orange-500 hover:bg-black rounded-sm">
          <a href="">SOY CLIENTE</a>
        </li>
        <li className="xl:mx-6 xl:px-6 lg:mx-4 lg:px-4 lg:inline-block hover:text-orange-500 hover:bg-black rounded-sm">
          <a href="">QUIENES SOMOS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
