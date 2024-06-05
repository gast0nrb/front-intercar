import { Outlet } from "react-router-dom";

import Busqueda from "../components/Busqueda";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Busqueda />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
