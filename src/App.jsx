import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductoPage from "./pages/ProductoPage";
import CategoriaPage from "./pages/CategoriaPage";
import BusquedaPage from "./pages/BusquedaPage";
import LoginPage from "./pages/LoginPage";
import RegistroPage from "./pages/RegistroPage";
import MessageInfo from "./pages/MessageInfo";
import OlvidePage from "./pages/OlvidePage";
import CarritoPage from "./pages/CarritoPage"
import ListadoCarroPage from "./pages/ListadoCarroPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/productos" element={<ProductoPage />} />
      <Route path="/categorias" element={<CategoriaPage />} />
      <Route path="/busqueda/:name" element={<BusquedaPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />
      <Route
        path="/registrado"
        element={
          <MessageInfo
            infoUser={"gastón rojas"}
            title={
              "Te has registrado correctamente."
            }
          />
        }
      />
      <Route path="/olvide" element={<OlvidePage />} />
      <Route
        path="/olvidado"
        element={
          <MessageInfo
            infoUser={"grojas@intercarchile.cl"}
            title={
              "Te enviaremos un correo para recuperar tu cuenta."
            }
          />
        }
      />
      
      <Route path="/carro/:id/:check" element={<CarritoPage title={"Tu carrito número 150"} btn1={"Agotados"} btn2={"Con stock"}/>} />
      <Route path="/listadocarro" element={<ListadoCarroPage/>} />
    </Route>
  )
  //Check prop le dice al carro si es que este fue revisado o ya no. 
  //Eso conlleva a un sinfin de despliegues hacia los demaś componentes
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
