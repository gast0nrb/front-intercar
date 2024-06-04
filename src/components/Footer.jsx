const Footer = ({
  telefono = 942151261,
  urlInstagram = "#",
  mercadoLibre = "#",
}) => {
  return (
    <footer className="h-40 bg-neutral-800 w-full flex text-center">
      <div className="ctc h-full w-2/6 border-r-2 my-auto border-neutral-600 pt-10">
        <h3 className="text-neutral-300 md:text-xs lg:text-2xl">CONTACTANOS</h3>
        <div className="ig">
          <a className="hover:text-orange-500" href="https://www.instagram.com/intercarchile.cl">
            <p>Instagram</p>
          </a>
        </div>
        <div className="ig">
          <a className="hover:text-orange-500" href="https://www.instagram.com/intercarchile.cl">
            <p>+569 42151261</p>
          </a>
        </div>
        <div className="ig">
          <a className="hover:text-orange-500" href="https://www.instagram.com/intercarchile.cl">
            <p>contacto@intercarchile.cl</p>
          </a>
        </div>
      </div>
      <div className="lg w-2/6 border-r-2 pt-3 border-neutral-600 h-full ">
        <img className="lg:w-2/6 md:w-3/6 mx-auto" src="/logo.png" alt="" />
      </div>
      <div className="dsg w-2/6 my-auto text-sm">
        <h3 className="text-neutral-500">PAGINA REALIZADA POR</h3>
        <div className="">
          <p className="text-purple-900">GRB19</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
