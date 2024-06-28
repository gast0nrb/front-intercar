import { useState } from "react";
import Icon from "../Icon";

const Quienes = () => {
  const [active, setActive] = useState(true);
  return (
    <div 
    onMouseOver={()=>{setActive(true)}} 
    onMouseLeave={()=> {setActive(false)}} 
    className="group container-quienes ml-3 my-10 md:mx-auto lg:mx-10 p-2 lg:pt-5 w-3/4 border-2 duration-300 bg-neutral-800 shadow-md text-center rounded-md leading-7 hover:scale-110">
      <div className="flex flex-wrap justify-center title-qn border-b-2 border-orange-500">
        <h3 className="text-white lg:text-xl xl:text-2xl font-bold text-center tracking-widest">QUIENES SOMOS</h3>
        <Icon active={active} activeImage="/quienesActive.svg" inactiveImage="/quienesInActive.svg" />
      </div>
      <div className=" group-hover:text-white text-neutral-300 text-wrap md:text-sm xl:text-xl lg:text-sm">
        Somos una empresa dedicada a la venta de accesorios automotrices y
        repuestos. Con más de 20 años en el mercado y variedad de productos,
        buscando día a día nuevos productos innovadores para nuestra clientela.
      </div>
    </div>
  );
};

export default Quienes;
