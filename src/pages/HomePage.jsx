import Productos from "../components/Productos";
import QuienesSucursal from "../components/HomePageComponents/Quienes-Sucursal"

const HomePage = () => {
  return (
    <>
      <Productos title={"PRODUCTOS EN OFERTA"} />
      <QuienesSucursal />
    </>
  );
};

export default HomePage;
