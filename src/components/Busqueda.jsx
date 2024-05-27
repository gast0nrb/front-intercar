const Busqueda = () => {
  return (
    <header>
        <div className="categorias-menu">
            <div className="button-categorias">
                <button>Menu</button>
            </div>
            <div className="div">
                <a href="">Plumillas</a>
                <a href="">Accesorios</a>
                <a href="">Repuestos</a>
            </div>
        </div>
        <div className="buscador">
            <div className="buscador-inpt">
                <input type="text" />   
            </div>
            <div className="buscador-button">
                <button>Buscar</button>
            </div>
        </div>
    </header>
)   
}

export default Busqueda;