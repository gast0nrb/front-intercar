import { Outlet } from "react-router-dom";

import Busqueda from "../components/LayoutComponents/Busqueda";
import Footer from "../components/LayoutComponents/Footer";
import Header from "../components/LayoutComponents/Header";
import BurbujaCarro from "../components/LayoutComponents/BurbujaCarro";

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
