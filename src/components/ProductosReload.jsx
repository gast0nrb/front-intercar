import { useState } from "react";

const ProductosReload = ({title, changeContador}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="text-center">
      <button
        className="flex mx-auto gap-1 text-xs border-2 p-1 rounded-sm m-2 font-bold border-x-orange-500"
        onClick={() => {
          setActive(true);
          setTimeout(() => {
            setActive(false);
          changeContador()
          }, 700);
        }}
      >
        {title}
        <img
          className={`w-5 ${active ? "animate-spin" : ""}`}
          src="/gearActive.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default ProductosReload;
