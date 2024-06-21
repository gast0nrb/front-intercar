import CardListado from "./CardListado"
/***
 *  TOMA UN PROP QUE ES UTILIZADO POR EL CHILD CARDLISTADO, ESTE LE ESPECIFICA SI DESPLEGAR EL BOTÓN PARA CAMBIAR LA CANTIDAD.
 * SI EL ESTADO DEL LISTADO ES FALSE DEBE DESPLEGAR LOS BOTONES PARA CAMBIAR LA CANTIDAD, YA QUE ESTA EN PROCESO DE MODIFICACIÓN
 * CHECK HACE REFERENCIA A QUE EL CARRITO YA LO REVISO LA EMPRESA, EL STOCK Y YA NO ESPERA MODIFICACIONES
 * 
 *  **/
const Listado = ({checkProp}) => {
    return (
        <div className="w-10/12 shadow-md mx-auto flex flex-wrap my-7">
            <CardListado checkProp={checkProp}/>
            <CardListado checkProp={checkProp}/>
            <CardListado checkProp={checkProp}/>
        </div>
    )
}

export default Listado