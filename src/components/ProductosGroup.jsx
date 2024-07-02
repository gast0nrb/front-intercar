import CardCategory from "./CardCategory";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = ({isBusqueda}) => {
  const componentArr = [
    <CardCategory title={"KIT HEADLIGHT H4 1aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2/24 VOLT"} isBusqueda={isBusqueda}/>,
    <CardCategory title={"KIT HEADLIGHT H4 12/24 VOLT"} isBusqueda={isBusqueda}/>,
    <CardCategory title={"KIT HEADLIGHT H4 12/24 VOLT"} isBusqueda={isBusqueda}/>,
    <CardCategory title={"KIT HEADLIGHT H4 12/24 VOLT"} isBusqueda={isBusqueda}/>,
    <CardCategory title={"KIT HEADLIGHT H4 12/24 VOLT"} isBusqueda={isBusqueda}/>,
    <CardCategory title={"KIT HEADLIGHT H4 12/24 VOLT"} isBusqueda={isBusqueda}/>,
    <CardCategory title={"KIT HEADLIGHT H4 12/24 VOLT"} isBusqueda={isBusqueda}/>,
  ];


  return (
    <>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto w-11/12">{componentArr}</div>
    </>
  );
};

export default ProductosGroup;
