import { useEffect, useState } from "react";
import CardCategory from "./CardCategory";
import Vacio from "./Vacio";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = ({ categoriaActual }) => {
  const [productos, setProductos] = useState({});
  const [cargandoProductos, setCargandoProductos] = useState(true);
  const [categoriaInexistente, setCategoriaInexistente] = useState(true);

  useEffect(() => {
    async function getProductos() {
      const fetchProductos = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/categorias/${categoriaActual}/productos`
      );

      //Si la categoria no existe setea la categoria como inexistente y de manera condicional
      //renderiza un mensaje como si no existiera, además retorna para no seguir adelante con
      //El proceso para rellenar datos de productos
      if (fetchProductos.status == 404) {
        setCategoriaInexistente(true);
        return;
      }
      const jsonProductos = await fetchProductos.json();
      setProductos({
        Categoria: {
          id: jsonProductos.data.id,
          nombre: jsonProductos.data.nombre,
          Productos: jsonProductos.data.Productos,
        },
      });
      setCargandoProductos(false);
      setCategoriaInexistente(false);
    }
    getProductos();
  }, [categoriaActual]);
  return (
    <>
      {categoriaInexistente ? (
        <Vacio
          msjGrande={"Prueba con otra categoria, esta no existe!"}
          msjPequeño={"Lo sentimos pero la categoria indicada no existe."}
        />
      ) : (
        <>
          {cargandoProductos ? (
            <p>Cargando productos</p>
          ) : (
            <>
              {productos.Categoria.Productos.length == 0 ? (
                <Vacio
                  msjPequeño={
                    "No hemos encontrado resultados para tu busqueda."
                  }
                  msjGrande={"Aún no hay productos para esta categoria"}
                />
              ) : (
                <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto w-11/12">
                  {productos.Categoria.Productos.map((p) => (
                    <CardCategory
                      precioDetalle={
                        p.ListaProductos.filter(
                          (lp) => lp.ListaPrecio.nombre == "Detalle"
                        )[0].monto
                      }
                      title={p.titulo}
                      codigo={p.codigo}
                      url={p.file}
                      key={p.codigo}
                      categoria={productos.Categoria}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductosGroup;
