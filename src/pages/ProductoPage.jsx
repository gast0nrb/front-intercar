import ProductoGrande from "../components/ProductoGrande"
import Productos from "../components/Productos"
import Categoria from "../components/Categoria"


const ProductoPage = () => {
    return(
        <>
        <Categoria categoria="LED"/>
       <ProductoGrande />
       <Productos title="PRODUCTOS SIMILARES" reloadName={"Cargar más"}/>
       </>
    )
}

export default ProductoPage