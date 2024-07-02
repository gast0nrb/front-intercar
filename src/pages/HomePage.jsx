import Productos from "../components/Productos";
import QuienesSucursal from "../components/HomePageComponents/Quienes-Sucursal"
import WrapSucursales from "../components/HomePageComponents/WrapSucursales";

const HomePage = () => {
  return (
    <>
      <Productos title={"PRODUCTOS EN OFERTA"} reloadName={"Cargar más"} />
      <QuienesSucursal />
      <WrapSucursales/>
    </>
  );
};

export default HomePage;
