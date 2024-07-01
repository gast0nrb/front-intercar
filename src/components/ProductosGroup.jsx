import CardCategory from "./CardCategory";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = ({isBusqueda}) => {
  const componentArr = [
    <CardCategory isBusqueda={isBusqueda}/>,
    <CardCategory isBusqueda={isBusqueda}/>,
    <CardCategory isBusqueda={isBusqueda}/>,
    <CardCategory isBusqueda={isBusqueda}/>,
    <CardCategory isBusqueda={isBusqueda}/>,
    <CardCategory isBusqueda={isBusqueda}/>,
    <CardCategory isBusqueda={isBusqueda}/>,
  ];


  return (
    <>
        <div className="flex flex-wrap justify-center w-full">{componentArr}</div>
    </>
  );
};

export default ProductosGroup;
