import ProductosGroup from "../components/ProductosGroup";
import Pagination from "../components/Pagination";
import BusquedaTitle from "../components/BusquedaTitle";

const BusquedaPage = () => {
    return (
        <>
            <BusquedaTitle title="AMPOLLETA HEADLIGHT H4"/>
            <ProductosGroup/>
            <Pagination pages={6}/>
        </>
    )
}

export default BusquedaPage