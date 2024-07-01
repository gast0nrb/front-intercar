import CardListado from "./CardListado";
import CarroVacio from "./CarroVacio";
import { useState } from "react";
import { CarroContext } from "../context/CarroContext";
import { Link } from "react-router-dom";

/***
 *  TOMA UN PROP QUE ES UTILIZADO POR EL CHILD CARDLISTADO, ESTE LE ESPECIFICA SI DESPLEGAR EL BOTÓN PARA CAMBIAR LA CANTIDAD.
 * SI EL ESTADO DEL LISTADO ES FALSE DEBE DESPLEGAR LOS BOTONES PARA CAMBIAR LA CANTIDAD, YA QUE ESTA EN PROCESO DE MODIFICACIÓN
 * CHECK HACE REFERENCIA A QUE EL CARRITO YA LO REVISO LA EMPRESA, EL STOCK Y YA NO ESPERA MODIFICACIONES
 *
 *  **/

const Listado = ({ checkProp }) => {
  const [Productos, setProductos] = useState([
    {
      title: "Kit headlight t1 multivoltaje h4",
      description:
        "Kit headlight h4 12/24 volt, luz fria 6000 kelvin, 3 meses de garantia con sistema canbus integrado.",
      precio: 15900,
      codigo: "90011",
      state: false,
      cantidad: 1,
    },
    {
      title: "Kit headlight t1 multivoltaje h4",
      description:
        "Kit headlight h4 12/24 volt, luz fria 6000 kelvin, 3 meses de garantia con sistema canbus integrado.",
      precio: 15900,
      codigo: "90010",
      state: true,
      cantidad: 1,
    },
    {
      title: "Kit headlight t1 multivoltaje h4",
      description:
        "Kit headlight h4 12/24 volt, luz fria 6000 kelvin, 3 meses de garantia con sistema canbus integrado.",
      precio: 15900,
      codigo: "90009",
      state: false,
      cantidad: 1,
    },
    {
      title: "Kit headlight t1 multivoltaje h4",
      description:
        "Kit headlight h4 12/24 volt, luz fria 6000 kelvin, 3 meses de garantia con sistema canbus integrado.",
      precio: 15900,
      codigo: "90008",
      state: true,
      cantidad: 1,
    },
    {
      title: "Kit headlight t1 multivoltaje h4",
      description:
        "Kit headlight h4 12/24 volt, luz fria 6000 kelvin, 3 meses de garantia con sistema canbus integrado.",
      precio: 15900,
      codigo: "90007",
      state: true,
      cantidad: 1,
    },
  ]);

  function eliminarProducto(i) {
    //Elimina un producto tomando como parametro el código del producto, el button entrega el valor mediante el .map()
    let arr = [...Productos];
    arr = arr.filter((v) => v.codigo !== i);
    setProductos(arr);
  }

  function totalCarro() {
    let a = 0;
    if (checkProp) {
      //Si fue revisado filtra los agotados y no los suma
      Productos.filter((v) => v.state == false).map((v) => {
        a += v.precio * v.cantidad;
      });
    }
    if (!checkProp) {
      //Si no fue revisado despliega el monto total de todos los productos
      Productos.map((v) => {
        a += v.precio * v.cantidad;
      });
    }
    return a;
  }

  return (
    <>
      <div className="w-10/12 shadow-md mx-auto flex flex-wrap my-7">
        {Productos.length == 0 ? ( //si hay productos suficientes en el arr de productos desplegamos el monto, sino no es necesario
          <></>
        ) : (
          <h3 className="bg-neutral-800 w-full text-neutral-200 font-bold">
            {" "}
            MONTO TOTAL CARRITO{" "}
            <span className="text-orange-500">${totalCarro()}</span>
          </h3>
        )}
        <CarroContext.Provider value={{ Productos, setProductos }}>
          <CarroVacio />
          {Productos.map((v, i) => (
            <div key={v.codigo}>
              <CardListado
                checkProp={checkProp}
                codigo={v.codigo}
                description={v.description}
                precio={v.precio}
                title={v.title}
                state={v.state}
                index={i}
              />
              {!checkProp ? ( //Despliega el botón para eliminar si no se ha chequeado aun
                <div className="bg-neutral-800 w-full">
                  <button
                    onClick={(e) => {
                      eliminarProducto(v.codigo);
                    }}
                    className=" flex justify-center bg-neutral-800  mx-auto p-1 text-bold md:text-red-500 lg:text-neutral-400 duration-200 hover:text-red-500"
                  >
                    <img className="lg:mx-2" src="/delete.svg" alt="" />
                    ELIMINAR PRODUCTO
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </CarroContext.Provider>
      </div>
      <div>
        {!checkProp && Productos.length > 0 ? (
          <Link
            to={`/infomsj`}
            className=" font-bold hover:shadow-xl duration-300  hover:text-orange-500 p-1 shadow-md rounded-md text-neutral-500 text-sm w-auto mb-10"
          >
            ENVIAR COTIZACIÓN
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Listado;
