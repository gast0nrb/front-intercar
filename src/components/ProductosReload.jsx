import { useState } from "react";

const ProductosReload = ({title, setBase, long, base}) => {
  const [active, setActive] = useState(false);
  function changeBase (){
    //Chequea si el valor base es mayor o igual que
    // el largo del array para no salir de los valores
    //3 son los que se despliegan por esa razón sse suma por 3.
    if((base + 3) >= long){
      setBase(0)
      return
    }
    setBase(base + 1)
  }
  return (
    <div className="text-center">
      <button
        className="flex mx-auto gap-1 text-xs border-2 p-1 rounded-sm m-2 font-bold border-x-orange-500"
        onClick={() => {
          setActive(true);
          setTimeout(() => {
            setActive(false);
            changeBase()
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
