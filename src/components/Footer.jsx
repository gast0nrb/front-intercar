const Footer = ({
  telefono = 942151261,
  urlInstagram = "#",
  mercadoLibre = "#",
}) => {
  return (
    <footer>
      <div className="redes">
        <div className="title-red">
          <h3>PLATAFORMAS</h3>
        </div>
        <div className="img-ig"></div>
        <div className="text-ig"></div>
      </div>
      <div className="contacto">
        <div className="wsp">
          <div className="text-wsp"></div>
          <div className="img-ws"></div>
        </div>
        <div className="mail">
          <div className="text-mail"></div>
          <div className="img-mail"></div>
        </div>
      </div>
      <div className="desing-by">
        <div className="text-by">
            <div className="title"></div> 
        </div>
      </div>
    </footer>
  );
};
