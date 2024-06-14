import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductoPage from "./pages/ProductoPage"
import CategoriaPage from "./pages/CategoriaPage";
import BusquedaPage from "./pages/BusquedaPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/productos" element={<ProductoPage/>}/>
      <Route path="/categorias" element={<CategoriaPage/>}/>
      <Route path="/busqueda" element={<BusquedaPage/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
