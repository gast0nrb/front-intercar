import ProductosGroup from "../components/ProductosGroup";
import Pagination from "../components/Pagination";
import BusquedaTitle from "../components/BusquedaTitle";
import { useParams } from "react-router-dom";

const BusquedaPage = ({title}) => {
    const {name} = useParams();
    return (
        <>
            <BusquedaTitle title={name}/>
            <ProductosGroup/>
            <Pagination pages={6}/>
        </>
    )
}

export default BusquedaPage