const Footer = ({
  telefono = 942151261,
  urlInstagram = "#",
  mercadoLibre = "#",
}) => {
  return (
    <footer className="bg-neutral-800 w-full md:h-auto lg:h-max lg:flex md:flex-row text-center lg:pb-0 md:pb-4">
      <div className=" flex-row md:w-full ctc h-full lg:w-2/6 lg:border-r-2 my-auto lg:border-neutral-600 pt-10 md:mx-auto lg:mx-0">
        <h3 className="text-neutral-300 md:text-xs lg:text-2xl">CONTACTANOS</h3>
        <div className="ig">
          <a className="text-neutral-500 hover:text-orange-500" href="https://www.instagram.com/intercarchilespa">
            <p>Instagram</p>
          </a>
        </div>
        <div className="ig">
          <a className="text-neutral-500 hover:text-orange-500" href="https://wa.me/+56942856029">
            <p>+56 9 4285 6029</p>
          </a>
        </div>
        <div className="ig">
          <a className="text-neutral-500 hover:text-orange-500" href="mailto:contacto@intercarchile.cl">
            <p>contacto@intercarchile.cl</p>
          </a>
        </div>
      </div>
      <div className="lg md:mx-auto lg:mx-0 w-2/6 lg:border-r-2 pt-3 lg:border-neutral-600 max-h-min">
        <img className="lg:w-2/6 md:w-3/6 mx-auto" src="/logo.png" alt="" />
      </div>
      <div className="dsg w-2/6 my-auto text-sm md:hidden lg:block">
        <h3 className="text-neutral-500">PAGINA REALIZADA POR</h3>
        <div className="">
          <p className="text-purple-900">GRB19</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
