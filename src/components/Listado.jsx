import CardListado from "./CardListado";
import { useState } from "react";
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
    },
    {
      title: "Kit headlight t1 multivoltaje h4",
      description:
        "Kit headlight h4 12/24 volt, luz fria 6000 kelvin, 3 meses de garantia con sistema canbus integrado.",
      precio: 15900,
      codigo: "90010",
    },
    {
      title: "Kit headlight t1 multivoltaje h4",
      description:
        "Kit headlight h4 12/24 volt, luz fria 6000 kelvin, 3 meses de garantia con sistema canbus integrado.",
      precio: 15900,
      codigo: "90009",
    },
    {
      title: "Kit headlight t1 multivoltaje h4",
      description:
        "Kit headlight h4 12/24 volt, luz fria 6000 kelvin, 3 meses de garantia con sistema canbus integrado.",
      precio: 15900,
      codigo: "90008",
    },
    {
      title: "Kit headlight t1 multivoltaje h4",
      description:
        "Kit headlight h4 12/24 volt, luz fria 6000 kelvin, 3 meses de garantia con sistema canbus integrado.",
      precio: 15900,
      codigo: "90007",
    },
  ]);

  function eliminarProducto(i) {
    //Elimina un producto tomando como parametro el código del producto, el button entrega el valor mediante el .map()
    let arr = [...Productos];
    arr = arr.filter((v) => v.codigo !== i);
    setProductos(arr);
  }

  return (
    <div className="w-10/12 shadow-md mx-auto flex flex-wrap my-7">
      {Productos.length == 0 ? (
        <div className="text-center w-full">
            <h3 className="text-2xl font-bold text-orange-500 bg-neutral-800">
              ¡ESTA VACIÓ!
            </h3>
          <Link className=" text-orange-300 underline md:text-sm md:block lg:inline-block lg:text-2xl font-bold mx-6 hover:text-orange-500 duration-200 " to={`/busqueda`}>VER OFERTAS</Link>
          <Link className="text-orange-300 underline md:text-sm lg:text-2xl font-bold mx-6 hover:text-orange-500 duration-200 " to={`/`}>IR AL INICIO</Link>
        </div>
      ) : (
        <></>
      )}
      {Productos.map((v) => (
        <div key={v.codigo}>
          <CardListado
            checkProp={checkProp}
            codigo={v.codigo}
            description={v.description}
            precio={v.precio}
            title={v.title}
          />
          {!checkProp ? (
            <button
              value={v.codigo}
              onClick={(e) => {
                eliminarProducto(v.codigo);
              }}
              className=" flex justify-center bg-neutral-800 p-1 text-bold text-red-500 hover:font-extrabold w-full duration-200"
            >
              <img className="mx-2" src="/delete.svg" alt="" />
              ELIMINAR PRODUCTO
            </button>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default Listado;
