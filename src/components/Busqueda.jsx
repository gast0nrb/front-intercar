const Busqueda = () => {
    return (
        <div className="flex pl-2 w-full justify-center py-2 border-b-2">
            <div className="bsq duration-500 focus-within:w-3/4 w-2/4 text-center">
                    <input className="h-6 bg-transparent border-2 shadow-sm text-sm focus:outline-none  focus:border-orange-200 rounded-sm w-full" type="text" name="" placeholder="¡Busca acá!" id="" />
            </div>
            <div className="btn md:w-2/6 lg:w-1/6 text-center leading-3">
                <button className="h-6 w-5/6 shadow-md border-2 hover:border-2 font-bold hover:text-orange-500 hover:bg-neutral-800 rounded-md text-neutral-500 lg:text-base md:text-xs">Buscar</button>
            </div>
        </div>
    )
}

export default Busqueda;
