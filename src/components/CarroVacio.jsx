import { CarroContext } from "../context/CarroContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CarroVacio = () => {
  const {Productos} = useContext(CarroContext)

    return (
        <>
        {Productos.length == 0 ? (//Si el largo del arr de productos entregas via context es igual a 0 desplegar el componente, sino un fragmento vacio
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
      </>
    )
}

export default CarroVacio