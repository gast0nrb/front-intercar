import { useState } from "react";
import { Link } from "react-router-dom";

const CardListado = ({
  checkProp,
  title = "KIT HEADLIGHT T1 MULTIVOLTAJE H4",
  description = "KIT HEADLIGHT H4 12/24 VOLT, LUZ FRIA 6000 KELVIN, 3 MESES DE GARANTIA, SISTEMA CANBUS.",
  precio = 15900,
  codigo = "90008",
}) => {
  const [currentCantidad, setCurrent] = useState(1);
  const [cantidad, setCantidad] = useState(currentCantidad);
  const [change, setChange] = useState(false);

  //Cambia la cantidad, solamente si la cantidad variable (var cantidad) + el valor entregado por parametro es mayor o igual a 1
  function changeCantidad(val) {
    if (cantidad + val >= 1) {
      setCantidad(cantidad + val);
      setChange(true);//Estado de cambio, para confirmar los cambios
    }
  }

  function acceptChange() {//Confirmar cambios
    setCurrent(cantidad);
    setChange(false);
  }
  function cancelarCange() {//Cancelar los cambios y volver al valor de currentCantidad y dejar el estado de cambio en falso
    setCurrent(currentCantidad);
    setCantidad(currentCantidad);
    setChange(false);
  }

  return (
    <>
      <div className="flex md:flex-wrap lg:flex-nowrap h-auto rounded-t-md border-t-2">
        <div>
          <img src="/90008.png" alt="" className="rounded-t-md" />
        </div>
        <div className="w-full">
          <h3 className="text-2xl w-full font-bold text-orange-500">
            {title.toUpperCase()}
          </h3>
          <p className="text-xl font-bold text-neutral-800">
            {description.toUpperCase()}
          </p>
        </div>
      </div>
      <div className="w-full border-b-2">
        <h3 className="text-neutral-500 font-bold bg-neutral-800">SKU:{codigo}</h3>
      </div>
      <div className="lg:flex w-full leading-7">
        <div className="bg-neutral-800 grow basis-3/12 border-b-2">
          <h3 className="text-neutral-300 font-bold lg:border-b-2">
            VALOR UNITARIO
          </h3>
          <p className="text-neutral-300 p-1">${precio}</p>
        </div>
        {checkProp ? (
          <div className="grow justify-center basis-3/12 bg-neutral-800 border-b-2">
            <h3 className="text-neutral-300 font-bold lg:border-b-2">
              CANTIDAD
            </h3>
            <p className="text-neutral-300">{currentCantidad}</p>
          </div>
        ) : (
          <div className="grow justify-center basis-3/12 bg-neutral-800 border-b-2">
            <h3 className="text-neutral-300 font-bold lg:border-b-2">
              CANTIDAD
            </h3>
            <div className="flex justify-center">
              <button
                onClick={() => changeCantidad(-1)}
                className="p-1 text-orange-500 text-2xl font-extrabold"
              >
                -
              </button>
              {
                <p className="text-neutral-300 p-1 mx-5">
                  {change ? cantidad : currentCantidad}
                </p>
              }
              <button
                onClick={() => changeCantidad(1)}
                className="p-1 text-orange-500 text-2xl font-bold"
              >
                +
              </button>
            </div>
          </div>
        )}
        <div className="grow basis-3/12 bg-neutral-800 border-b-2">
          <h3 className="text-neutral-300 font-bold lg:border-b-2">TOTAL</h3>
          <p className=" text-neutral-300 p-1">${precio * cantidad}</p>
        </div>
      </div>
      {
        !checkProp ?
      <div className="flex grow bg-neutral-800">
        <div className="basis-1/3 grow border-b-2">
          <button
            className="text-neutral-300 enabled:text-red-500 enabled:font-bold"
            onClick={cancelarCange}
            disabled={!change}
          >
            CANCELAR
          </button>
        </div>
        <div className="basis-1/3 grow border-b-2">
          <button
            className="text-neutral-300 enabled:text-orange-500 enabled:font-bold"
            onClick={acceptChange}
            disabled={!change}
          >
            MODIFICAR
          </button>
        </div>
      </div>
      : 
      <></>
      }
    </>
  );
};

export default CardListado;
