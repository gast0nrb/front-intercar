import { Link } from "react-router-dom";

const Busqueda = () => {
    return (
        <div className="flex justify-center py-2 border-b-2">
            <div className="bsq duration-500 focus-within:w-3/4 w-2/4 text-center">
                    <input className="h-6 bg-transparent border-2 shadow-sm text-sm focus:outline-none  focus:border-orange-200 rounded-sm w-2/3 placeholder:text-xs" type="text" name="" placeholder="¡Busca acá!" id="" />
            </div>
            <div className="btn md:w-2/6 lg:w-1/6 text-center">
                <Link to={`/busqueda`} className="h-6 w-full shadow-md border-2 hover:border-2 font-bold hover:text-orange-500 hover:bg-neutral-800  p-1 rounded-md text-neutral-500 lg:text-sm  md:text-xs">Buscar</Link>
            </div>
        </div>
    )
}


export default Busqueda;
