import { Link } from "react-router-dom"

const CardCategory = ({isBusqueda}) => {
    return(
        <div className="group md:basis-3/5 lg:basis-3/12 md:grow lg:grow-0 shadow-md m-5 my-10 rounded-md lg:hover:scale-110 lg:duration-300">
            <div className="img-container border-b-2 border-transparent group-hover:border-orange-500">
                <Link to={`/productos`}>
                <img src="/90008.png" alt="" className="rounded-t-md" />
                </Link>
            </div>
            <div className="data-container text-center group-hover:bg-neutral-800 group-hover:text-neutral-300">
                <div className="font-bold bg-neutral-800 border-b-2 border-transparent group-hover:border-orange-500">
                    <h3 className="text-neutral-300 font-bold group-hover:text-orange-500">KIT HEADLIGHT H4 T1 6000K</h3>
                </div>
                <div className="prices text-start p-1">
                    <div className="">
                        <p><span className="font-bold">Mayorista</span> $8.900</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Detalle</span> $8.900</p>
                    </div>
                    <div className={`${isBusqueda ? "text-center" : "hidden"}`}>
                        <Link to={`/categorias`} className="border-2 rounded-sm w-auto text-xs p-1 font-bold">AMPOLLETAS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCategory