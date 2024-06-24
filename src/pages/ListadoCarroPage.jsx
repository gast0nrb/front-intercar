import ListadoCarro from "../components/ListadoCarro";
import Pagination from "../components/Pagination";

const ListadoCarroPage = () => {
    return (
        <>
        <h1 className="text-center mt-10 font-extrabold lg:text-2xl md:text-xl">TUS CARROS</h1>
        <div className="w-4/5 shadow-lg mx-auto my-10 border-t-2 rounded-md">
            <ListadoCarro checkProp={0} numeroCarro={9} cantidadItems={90}/>
            <ListadoCarro checkProp={1} cantidadItems={10} fecha="22/03/2024" numeroCarro={10} total={109500}/>
            <ListadoCarro checkProp={1} cantidadItems={20} fecha="22/06/2024" numeroCarro={11} total={90500}/>
            <ListadoCarro checkProp={1} cantidadItems={20} fecha="22/06/2024" numeroCarro={11} total={90500}/>
            <ListadoCarro checkProp={1} cantidadItems={20} fecha="22/06/2024" numeroCarro={11} total={90500}/>
        </div>
        <Pagination/>
        </>
    )
}

export default ListadoCarroPage;