import { Link } from "react-router-dom"

const Vacio = ({msjPequeño, msjGrande}) => {
    return (
        <>
        <p className="text-neutral-500 md:text-xs  lg:text-sm">{msjPequeño}</p>
        <div className="w-10/12 shadow-md text-center mx-auto my-20 rounded-md border-2 p-2 md:mb-96  xl:mb-80">
            <h2 className="text-neutral-800 font-bold">{msjGrande.toUpperCase()}</h2>
            <Link className="font-bold underline text-orange-300 hover:text-orange-500" to={`/`}>Ir al inicio</Link>
        </div>
        </>
    )
}

export default Vacio