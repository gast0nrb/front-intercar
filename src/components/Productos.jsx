import { useState } from "react";
import ProductosReload from "./ProductosReload";
import ProductosWrap from "./ProductosWrap";

const Productos = ({ title = "PUT SOME TITLE HERE", reloadName }) => {
  const Productos = [
    {
      codigo: "10049",
      title: "Ampolleta 2 contactos 12v 21/5w.",
      precioDetalle: 700,
      precioMayorista: 155,
      categoria: "AMPOLLETAS",
      url: "/90008.png",
    },
    {
      codigo: "10050",
      title: "Ampolleta 2 contactos 24v 21/5w.",
      precioDetalle: 1100,
      precioMayorista: 600,
      categoria: "AMPOLLETAS",
      url: "/90008.png",
    },
    {
      codigo: "90008",
      title: "kid headlight h4 12/24 volt, 6000k.",
      precioDetalle: 23500,
      precioMayorista: 18500,
      categoria: "LED",
      url: "/90008.png",
    },
    {
      codigo: "30052",
      title: "Inmovilizador 12v",
      precioDetalle: 1100,
      precioMayorista: 600,
      categoria: "SEGURIDAD",
      url: "/90008.png",
    },
    {
      codigo: "30051",
      title: "GPS 3g auto 12v.",
      precioDetalle: 1100,
      precioMayorista: 600,
      categoria: "SEGURIDAD",
      url: "/90008.png",
    },
    {
      codigo: "40018",
      title: "TRABAVOLANTE REFORZADO.",
      precioDetalle: 1100,
      precioMayorista: 600,
      categoria: "TRABAVOLANTES",
      url: "/90008.png",
    },
    {
      codigo: "70401",
      title: "Farol 6 led 12/24 volt.",
      precioDetalle: 1100,
      precioMayorista: 600,
      categoria: "LED",
      url: "/90008.png",
    },
    {
      codigo: "70395",
      title: "Farol redondo 6 led.",
      precioDetalle: 1100,
      precioMayorista: 600,
      categoria: "led",
      url: "/90008.png",
    },
    {
      codigo: "70438",
      title: "Barra led 12/24 volt 123 led.",
      precioDetalle: 1100,
      precioMayorista: 600,
      categoria: "led",
      url: "/90008.png",
    },
  ];

  const [contador, setContador] = useState(0);
  const [val1, setVal1] = useState(contador + 1);
  const [val2, setVal2] = useState(contador + 2);

  function changeContador() {
    if (Productos.length-1 >= val2) {
      setVal2(0);
    }
    if (Productos.length-1 >= val1) {
      setVal1(0);
    }
    if (Productos.length-1 >= contador) {
      setContador(0);
    } else {
      setContador(contador + 1);
      setVal1(val1 + 1);
      setVal2(val2 + 1);
      console.log("paso todos los if", contador, val1, val2)
      console.log(Productos.length)
    }
  }
  return (
    <>
      <h3
        className={`border-x-4 lg:w-fit md:w-11/12 text-center md:text-md lg:text-4xl xl:text-5xl font-extrabold md:mt-10 lg:mt-24 bg-neutral-800 mx-auto lg:px-4 rounded-sm text-neutral-300 lg:tracking-widest py-1 border-orange-500`}
      >
        {title}
      </h3>
      <ProductosWrap
        Productos={Productos}
        contador={contador}
        val1={val1}
        val2={val2}
      />
      <ProductosReload changeContador={changeContador} title={reloadName} />
    </>
  );
};

export default Productos;
