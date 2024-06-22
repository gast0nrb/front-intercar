import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarroContext } from "../context/CarroContext";

const CardListado = ({
  checkProp,
  codigo,
  description,
  precio,
  title, 
  state,
  cantidad,
  index
}) => {

const [change, setChange] = useState(false);
const {setProductos, Productos} = useContext(CarroContext)
const [acumulador, setAcumulador] = useState(Productos[index].cantidad);


//Cambia la cantidad del acumulador del componente momentaneo
  function changeCantidad(val) {
    if (acumulador + val >= 1) {
      setAcumulador(acumulador + val);
      setChange(true);//Estado de cambio, para confirmar los cambios
    }
  }

  function acceptChange() {//Confirmar cambios y los setea al objeto pasado por context 
    let arr = [...Productos]
    arr[index].cantidad = acumulador
    setProductos(arr)
    setChange(false);
  }

  function cancelarCange() {//Cancelar los cambios y vuelve al valor del objeto pasado por context
    setAcumulador(Productos[index].cantidad);
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
      {
        checkProp ? //Si el chequeo es true, desplegara el div con la info de agotado o no
      <div className="w-full border-b-2">
        <h3 className={`font-bold ${!state ? "text-orange-500 bg-neutral-800 " : "text-neutral-300 bg-red-500"}`}>PRODUCTO {state ? "AGOTADO" : "DISPONIBLE"}</h3>
      </div>
       : <></>
      }
      <div className="w-full border-b-2">
        <h3 className="text-neutral-500 font-bold bg-neutral-800">SKU:{codigo}</h3>
      </div>
      <div className="lg:flex w-full ">
        <div className="bg-neutral-800 grow basis-3/12 border-b-2">
          <h3 className="text-neutral-300 font-bold lg:border-b-2">
            VALOR UNITARIO
          </h3>
          <p className="text-neutral-300 p-1">${precio}</p>
        </div>
        {//Si el chequeo esta realizado desplegara el div sin los botones para manipular las cantidades
        checkProp ? (
          <div className="grow justify-center basis-3/12 bg-neutral-800 border-b-2">
            <h3 className="text-neutral-300 font-bold lg:border-b-2">
              CANTIDAD
            </h3>
            <p className="text-neutral-300">{Productos[index].cantidad}</p>
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
                  {change ? acumulador : Productos[index].cantidad}
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
          <p className=" text-neutral-300 p-1">${precio * acumulador}</p>
        </div>
      </div>
      {
        !checkProp ? //Si no se ha revisado la cotización se despliegan los botones de manipulación
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
