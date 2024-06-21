import { Outlet } from "react-router-dom";

import Busqueda from "../components/Busqueda";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BurbujaCarro from "../components/BurbujaCarro";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Busqueda />
      <BurbujaCarro/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;
