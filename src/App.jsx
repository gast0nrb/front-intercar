import Busqueda from "./components/Busqueda"
import Header from "./components/Header"
import Productos from "./components/Productos"
import QuienesSucursal from "./components/Quienes-Sucursal"


function App() {

  return (
    <>
    <Header/> 
    <Busqueda/>
    <QuienesSucursal/>
    <Productos title="LIQUIDACIÓN"/>
    <Productos title="MÁS VENDIDOS"/>
    </>
  )
}

export default App
