import { Link } from "react-router-dom"

const BurbujaCarro = () => {
    return (
        <Link className="md:w-5 lg:w-7 right-1 block mt-1 md:block fixed z-50" to={`/carro/10/0`}>
        <img className="md:w-5 lg:w-7 p-1 rounded-full bg-neutral-300" src="/carro.png" alt="" />
        </Link>
    )
}

export default BurbujaCarro