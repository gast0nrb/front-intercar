import Quienes from './Quienes'
import QuienesItem from './QuienesItem';
import Sucursal from './Sucursales'

const QuienesSucursal = () => {
return (
    <div className="Container-qs flex border-t-2 pt-5 mt-20 md:mb-20  lg:mb-32 border-b-2 md:flex-wrap justify-center">
        <h2 className='text-center font-extrabold tracking-widest lg:text-4xl md:text-xl bg-neutral-800 text-neutral-300 border-x-4 border-orange-500 px-2 py-1 rounded-sm'>SOBRE NOSOTROS</h2>
        <Quienes/>
        <QuienesItem title='CONFIABLES' busqueda={"sucursales"} text='Estamos establecidos con sucursales fisícas en diferentes puntos del país, no nos iremos a ningún lado!' textButton='Ver sucursales' isLink={false}/>
        <QuienesItem title='PRECIOS BAJOS' busqueda={"ofertas"} text='Productos realmente a bajo precio. Somos uno de los proveedores con precios más bajo en el mercado.' textButton='Ver ofertas'/>
        <QuienesItem title='NOVEDADES' busqueda={"nuevo"} text='Constantemente estamos buscando nuevos productos para nuestros clientes.' textButton='Ver productos nuevos'/>
    </div>
)
}


export default QuienesSucursal;