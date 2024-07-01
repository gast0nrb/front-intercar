import Productos from "../components/Productos";
import QuienesSucursal from "../components/HomePageComponents/Quienes-Sucursal"
import Sucursal from "../components/HomePageComponents/Sucursales";

const HomePage = () => {
  return (
    <>
      <Productos title={"PRODUCTOS EN OFERTA"} reloadName={"Cargar más"} />
      <QuienesSucursal />
      <Sucursal/>
    </>
  );
};

export default HomePage;
