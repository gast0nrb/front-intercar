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
        <div className="text-ig">
          <a href="">Instagram Intercar</a>
        </div>
        <div className="img-ig">
          <img src="/ig.png" alt="ig-logo" />
        </div>
      </div>
      <div className="contacto">
        <div className="wsp">
          <div className="text-wsp">
            <a href="">Whattsap Intercar</a>
          </div>
          <div className="img-ws">
            <img src="/wsp.png" alt="wsp-image" />
          </div>
        </div>
        <div className="mail">
          <div className="text-mail">
            <a href="">Mail Intercar</a>
          </div>
          <div className="img-mail">
            <img src="/gmail.png" alt="" />
          </div>
        </div>
      </div>
      <div className="desing-by">
        <div className="text-by">
          <div className="h3">Desgined by rgb19</div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;