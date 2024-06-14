import ProductosGroup from "../components/ProductosGroup";
import SelectCategoria from "../components/SelectCategoria";
import SelectOrder from "../components/SelectOrder";
import Pagination from "../components/Pagination";


const CategoriaPage = () => {
  return (
    <>
      <SelectCategoria Categories />
      <SelectOrder />
      <ProductosGroup />
      <Pagination pages={25}/> 
    </>
  );
};

export default CategoriaPage;
