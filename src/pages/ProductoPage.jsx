const ProductoPage = () => {
  return (
    <div className="md:w-9/12 lg:w-full flex">
      <div className="cointaer-foto lg:w-6/12 md:w-max">
        <img src="90008.png" alt="" className="lg:w-3/4 md:w-full" />
      </div>
      <div className="w-2/5 flex mx-auto">
        <div className="descripcion">
          <h2>KIT HEADLIGHT T1 H4 12/24 VOLT</h2>
          <p>
            KIT HEADLIGHT T1 MODELO H4, MULTIVOLTAJE DESDE 12 HASTA 32 VOLT, LUZ
            BLANCA 6000 KELVIN Y SISTEMA CANBUS INCLUIDO.
          </p>
        </div>
        <div className="prices">
            <p>Detalle <span>$13.900</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProductoPage;
