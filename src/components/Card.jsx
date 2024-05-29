const Card = ({
  codigo = 100002,
  title = "TITULO POR DEFECTO ",
  descripcion = "Descripción por default uso para pruebas de desarrollo y ux",
  precioDetalle = 5900,
  precioMayorista = 2590,
  categoria = "DEFAULT CATEGORY",
  url = "/90008.png",
}) => {
  return (
    <div className="container">
      <div className="container-img">
        <img src={url} alt={title} />
      </div>
      <div className="title">
        <div className="title-text">
          <h3>{title}</h3>
        </div>
        <div className="codigo">
          <p>{codigo}</p>
        </div>
        <div className="categoria">
          <a href="#">
            <p>{categoria}</p>
          </a>
        </div>
      </div>
      <div className="precios">
        <div className="detalle">
          <p>
            Valor detalle <span>${precioDetalle}</span>
          </p>
        </div>
        <div className="mayorista">
          <p>
            Valor mayorista <span>${precioMayorista}</span>
          </p>
        </div>
      </div>
      <div className="descripcion">
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default Card;
