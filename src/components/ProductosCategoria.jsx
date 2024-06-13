import CardCategory from "./CardCategory";
import Page from "./Page";
import SelectCategoria from "./SelectCategoria";
import SelectOrder from "./SelectOrder";

const ProductosCategoria = () => {
  const componentArr = [
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
    <CardCategory />,
  ];

  const displayItems = (q) => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      if (pages > 4 && i >= 4) {
        arr.push(<Page number={pages} />);
      } else if (pages > 4 && i >= 3) {
        arr.push(<Page number={pages - 1} />);
      } else {
        arr.push(<Page number={i + 1} />);
      }
    }
    return arr;
  };

  //Dividir la cantidad de items para tener la cantidad de paginas
  const pages = 15;
  const Categories = ["LED", "AMPOLLETAS", "PLUMILLAS"];


  return (
    <>
      <SelectCategoria Categories={Categories} />
      <SelectOrder/>
      <div className="flex flex-wrap justify-center w-full">
        {componentArr}
      </div>
      <div className="paginationx mb-10 flex justify-center">
        <div className="">
          <button className="w-10 text-neutral-300 bg-neutral-800 rounded-xl m-2 hover:text-orange-500">
            &#60;
          </button>
        </div>
        {displayItems(2)}
        <div>
          <button className="w-10 text-neutral-300 bg-neutral-800 rounded-xl m-2 hover:text-orange-500">
            &#62;
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductosCategoria;
