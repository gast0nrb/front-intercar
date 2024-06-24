import { Link } from "react-router-dom"

const ListadoCarro = ({numeroCarro = 150 , total=150000, fecha="11/07/2024", cantidadItems=10, checkProp=1}) => {
    return  (
    <>
        <div className="group">
        <h3 className="text-center font-extrabold text-orange-500 group-hover:text-neutral-800 group-hover:bg-orange-500 duration-200">{(checkProp == 0) ? "CARRO ACTIVO" : ""}</h3>
        <div className="md:flex-wrap lg:flex lg:h-20 group-hover:bg-orange-500 duration-200">
            <div className="flex grow basis-2/6 justify-center md:h-10 lg:h-auto ">
                <h3 className="font-bold my-auto">N°</h3>
                <p className="font-bold text-center my-auto">CARRO {numeroCarro}</p>
            </div>
            <div className="basis-2/6 grow flex justify-center md:h-10 lg:h-auto">
                <p className="my-auto font-bold">{fecha}</p>
            </div> 
            <div className="basis-2/6 grow gap-3 flex justify-center md:h-10 lg:h-auto">
                <p className="my-auto font-bold">{cantidadItems} ARTICULOS</p>
            </div> 
        </div>
        {
        (checkProp > 0) ?
            <div className="flex h-full group-hover:bg-orange-500 duration-200">
                 <Link to={`/carro/${numeroCarro}/${checkProp}`} className=" flex gap-1 duration-200 group-hover:text-neutral-700 text-orange-300 mb-2 font-bold mx-auto"><img src="/eye.png" className="w-7"></img></Link>  
            </div>
        : 
            <></>
        }
        <div className="border-b-2 flex h-full bg-neutral-800 rounded-b-md">
          <p className="ml-auto mr-3 text-neutral-300 font-extrabold">Total <span className="text-orange-500 font-bold">${total}</span></p>  
        </div>
        </div>
    </>
    )
}

export default ListadoCarro