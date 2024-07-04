const Footer = ({
  telefono = 942151261,
  urlInstagram = "#",
  mercadoLibre = "#",
}) => {
  return (
    <footer className="bg-neutral-800 text-center w-full py-5">
        <img className=" md:w-2/12 lg:w-1/12 mx-auto" src="/logo.png" alt="" />
        <h3 className="text-neutral-300 md:text-xs lg:text-2xl">CONTACTANOS</h3>
        <a
          className="text-neutral-500 hover:text-orange-500"
          href="https://www.instagram.com/intercarchilespa"
          target="_blank"
        >
          <p>Instagram</p>
        </a>
        <a
          className="text-neutral-500 hover:text-orange-500"
          href="https://wa.me/+56942856029"
          target="_blank"
        >
          <p>+56 9 4285 6029</p>
        </a>
        <a
          className="text-neutral-500 hover:text-orange-500"
          href="mailto:contacto@intercarchile.cl"
          target="_blank"
        >
          <p>contacto@intercarchile.cl</p>
        </a>
        <hr  className="border-neutral-700"/>
      <p className="text-xs text-neutral-700 font-bold pt-3">Develop by 
        <a className="hover:text-indigo-700" target="_blank" href="http://www.cotizcar.cl"> www.cotizcar.cl</a>
        </p>
    </footer>
  );
};

export default Footer;
