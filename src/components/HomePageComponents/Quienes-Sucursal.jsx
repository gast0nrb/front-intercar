import Quienes from './Quienes'
import QuienesItem from './QuienesItem';
import Sucursal from './Sucursal'

const QuienesSucursal = () => {
return (
    <div className="Container-qs flex border-t-4 pt-20 pb-32 md:flex-wrap justify-center">
        <Quienes/>
        <QuienesItem title='CONFIABLE' busqueda={"sucursales"} textButton='Ver sucursales' isLink={false}/>
        <QuienesItem title='PRECIOS BAJOS' busqueda={"ofertas"} textButton='Ver ofertas'/>
        <QuienesItem title='NOVEDAD' busqueda={"nuevo"} textButton='Ver productos nuevos'/>
    </div>
)
}


export default QuienesSucursal;