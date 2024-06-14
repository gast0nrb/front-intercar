import CardCategory from "./CardCategory";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = () => {
  const componentArr = [
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
  ];


  return (
    <>
        <div className="flex flex-wrap justify-center w-full">{componentArr}</div>
    </>
  );
};

export default ProductosGroup;
