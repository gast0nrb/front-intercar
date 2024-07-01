import { useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({
  srcActive = "/moneyActive.svg",
  srcInactive = "/money.svg",
  ListName = "OFERTA/LIQUIDACIÓN",
  route = "/busqueda/oferta",
  changeShowUp,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <li
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className="xl:mx-6 lg:mx-4 lg:inline-block hover:text-orange-500 rounded-sm hover:border-orange-500 border-b-2 border-transparent"
    >
      <div className="flex justify-center gap-1">
        <div className="">
          <img
            src={`${focus ? srcActive : srcInactive}`}
            className="w-4"
            alt=""
          />
        </div>
        <div className="text-xs">
          <Link onClick={changeShowUp} to={`${route}`}>
            {ListName}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default NavItem;
