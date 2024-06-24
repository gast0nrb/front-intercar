import { Link } from "react-router-dom"
import { useState } from "react"

const BurbujaCarro = ({cantidadProductos=6}) => {
   
   const [displayCantidad, setDisplay]  = useState(false)
   function trueDisplay () {
        setDisplay(true)
   }

   function falseDisplay () {
        setDisplay(false)
   }
    return (
        <div onMouseLeave={falseDisplay} onMouseOver={trueDisplay} className="group">
        <Link  className="md:w-5 lg:w-7 mr-2 right-1 block mt-4 md:block fixed z-50 group-hover:scale-150 duration-300" to={`/carro/10/0`}>
        <img  className="md:w-5 lg:w-7 p-1 rounded-full group-hover:bg-neutral-800 bg-neutral-300" src="/carro.png" alt="" />
        { displayCantidad ?
            <p className="text-xs text-center font-bold text-orange-500">{cantidadProductos}</p>
         : 
         <></>
        }
        </Link>
        </div>
    )
}

export default BurbujaCarro