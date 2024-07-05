import ProductoGrande from "../components/ProductoGrande";
import Productos from "../components/Productos";
import Categoria from "../components/Categoria";

const ProductoPage = () => {
  const Producto = {
    codigo: 90008,
    title: "KIT HEADLIGHT H4 T1 12/24 VOlt",
    categoria: {
      id: 1,
      nombre: "LED",
    },
    precio: 15900,
    mayor: 9900,
    descripcion:
      "fría 6000 kelvin, incluye 3 meses de garantía. mdmdAmpolleta tipo led 5050, multivoltaje 12/24 volt, luz fría 6000 kelvin, incluye 3 meses de garantía. mdmdAmpolleta tipo led 5050, multivoltaje 12/24 volt, luz fría 6000 kelvin, incluye 3 meses de garantía aaaaa.",
  };
  return (
    <>
      <Categoria categoria={Producto.categoria} />
      <ProductoGrande Producto={Producto} />
      <Productos title="PRODUCTOS SIMILARES" reloadName={"Cargar más"} />
    </>
  );
};

export default ProductoPage;
