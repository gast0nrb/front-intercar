import ProductosGroup from "../components/ProductosGroup";
import Pagination from "../components/Pagination";
import BusquedaTitle from "../components/BusquedaTitle";

const BusquedaPage = ({title}) => {
    return (
        <>
            <BusquedaTitle title={title}/>
            <ProductosGroup/>
            <Pagination pages={6}/>
        </>
    )
}

export default BusquedaPage