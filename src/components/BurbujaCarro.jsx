import { Link } from "react-router-dom"

const BurbujaCarro = () => {
    return (
        <Link className="md:w-5 lg:w-7 mr-2 right-1 block mt-4 md:block fixed z-50 hover:scale-150 duration-300" to={`/carro/10/0`}>
        <img className="md:w-5 lg:w-7 p-1 rounded-full hover:bg-neutral-800 bg-neutral-300" src="/carro.png" alt="" />
        </Link>
    )
}

export default BurbujaCarro