import Productos from "../components/Productos";
import QuienesSucursal from "../components/HomePageComponents/Quienes-Sucursal"

const HomePage = () => {
  return (
    <>
      <Productos title={"PRODUCTOS EN OFERTA"} reloadName={"Cargar más"} />
      <QuienesSucursal />
    </>
  );
};

export default HomePage;
