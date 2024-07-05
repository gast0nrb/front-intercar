import { useState } from "react";

const ProductoGrande = ({Producto}) => {
  const [currentVal, setCurrent] = useState(0);

  function changeCurrent(number) {
    if (currentVal >= 0 && number > 0) {
      setCurrent(currentVal + parseInt(number));
    }
    if (currentVal > 0) {
      setCurrent(currentVal + parseInt(number));
    }
  }

  return (
    <div className="md:w-11/12 mx-auto lg:w-full lg:flex md:flex-row mb-20 pt-12 py-3">
      <div className="cointaer-foto xl:w-5/12 lg:w-6/12 md:w-11/12 lg:mb-0 shadow-lg rounded-md md:mx-auto lg:mx-6">
        <p className=" rounded-t-sm text-orange-500 text-xs font-bold bg-neutral-800 lg:rounded-sm p-1">
          SKU: {Producto.codigo}
        </p>
        <img
          src="90008.png"
          alt=""
          className=" w-full h-full lg:rounded-b-sm"
        />
      </div>
      <div className="md:w-11/12 lg:w-2/5 md:flex-row lg:flex shadow-lg rounded-md md:mx-auto lg:mx-0 group">
        <div className="descripcion text-center group-hover:bg-neutral-800 duration-300">
          <h2 className=" text-center group-hover:text-orange-500 duration-300 border-b-2 group-hover:border-orange-500 bg-neutral-800 rounded-sm text-neutral-300 font-bold md:text-xl lg:text-xl xl:text-3xl">
            {Producto.title.toUpperCase()}
          </h2>
          <p className="md:text-sm lg:text-xl px-2 group-hover:text-neutral-300 duration-300 overflow-y-scroll">
            {Producto.descripcion.toLowerCase()}
          </p>
        </div>
        <div className="prices group-hover:bg-neutral-800 duration-300 border-2 border-neutral-200 text-center rounded-br-md rounded-tr-md">
          <p className="text-xl font-extrabold bg-neutral-800 text-neutral-300 w-full rounded-sm px-2 group-hover:text-orange-500 duration-300">
            PRECIOS
          </p>
          <p className="font-bold group-hover:text-neutral-300 duration-300">
            DETALLE <span className="font-normal">${Producto.precio}</span>
          </p>
          <p className="font-bold group-hover:text-neutral-300 duration-300">
            MAYORISTA <span className="font-normal">{Producto.mayor}</span>
          </p>
          <div className="container-cantidades flex-row justify-center min-w-max mx-auto">
            <p className="bg-neutral-800 text-neutral-300 font-extrabold group-hover:text-orange-500 duration-300">
              CANTIDAD
            </p>
            <div className="div-cantidad flex justify-center gap-4 pt-2 group-hover:text-neutral-300 duration-300">
              <div className="menos">
                <button
                  onClick={() => {
                    changeCurrent(-1);
                  }}
                  className="shadow-md w-4 rounded-sm border-2 border-transparent group-hover:border-neutral-400 duration-300"
                >
                  -
                </button>
              </div>
              <div className="current-val">{currentVal}</div>
              <div className="sum">
                <button
                  onClick={() => {
                    changeCurrent(1);
                  }}
                  className="shadow-md w-4 rounded-sm border-2 border-transparent group-hover:border-neutral-400 duration-300"
                >
                  +
                </button>
              </div>
            </div>
            <div className="agregar-div my-3 pt-3 border-t-2 group-hover:border-orange-500">
              <button className="border-2 rounded-md p-1 text-sm font-bold group-hover:text-neutral-300 duration-300">
                AGREGAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoGrande;
