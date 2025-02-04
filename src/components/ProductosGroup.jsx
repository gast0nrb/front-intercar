import { useEffect, useState } from "react";
import CardCategory from "./CardCategory";
import Vacio from "./Vacio";
import Pagination from "./Pagination";
import SelectOrder from "./CategoriaPageComponents/SelectOrder";
import SelectCategoria from "./CategoriaPageComponents/SelectCategoria";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = ({ categoriaActual, setCategoriaActual }) => {
  const [productos, setProductos] = useState({});
  const [cargandoProductos, setCargandoProductos] = useState(true);
  const [categoriaInexistente, setCategoriaInexistente] = useState(true);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    async function getProductos() {
      try {
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
      } catch (err) {
        return (
          <Vacio
            msjGrande={"Lo sentimos, errores internos..."}
            msjPequeño={"Prueba otra vez porfavor..."}
          />
        );
      }
    }
    getProductos();
  }, [categoriaActual]);
  return (
    <>
      {categoriaInexistente ? (
        <>
          <SelectCategoria
            categoriaActual={categoriaActual}
            setCategoriaActual={setCategoriaActual}
            setPage={setPage}
          />
          <Vacio
            msjGrande={"Prueba con otra categoria, esta no existe!"}
            msjPequeño={"Lo sentimos pero la categoria indicada no existe."}
          />
        </>
      ) : (
        <>
          {cargandoProductos ? (
            <p>Cargando productos</p>
          ) : (
            <>
              {productos.Categoria.Productos.length == 0 ? (
                <>
                  <SelectCategoria
                    categoriaActual={categoriaActual}
                    setCategoriaActual={setCategoriaActual}
                    setPage={setPage}
                  />
                  <Vacio
                    msjPequeño={
                      "No hemos encontrado resultados para tu busqueda."
                    }
                    msjGrande={"Aún no hay productos para esta categoria"}
                  />
                </>
              ) : (
                <>
                  <SelectCategoria
                    categoriaActual={categoriaActual}
                    setCategoriaActual={setCategoriaActual}
                    setPage={setPage}
                  />
                  <SelectOrder />
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto w-11/12">
                    {productos.Categoria.Productos.filter((prod, i) => {
                      if (
                        i >= parseInt(page) * 10 - 10 &&
                        i < parseInt(page) * 10
                      ) {
                        return prod;
                      }
                    }).map((p, i) => (
                      <CardCategory
                        precioDetalle={
                          p.ListaProductos.length > 0
                            ? p.ListaProductos.filter(
                                (lp) => lp.ListaPrecio.nombre == "Detalle"
                              )[0].monto
                            : 0
                        }
                        title={p.titulo}
                        codigo={p.codigo}
                        url={p.file}
                        key={p.codigo}
                        categoria={productos.Categoria}
                      />
                    ))}
                  </div>
                  <Pagination
                    pages={productos.Categoria.Productos.length / 10}
                    setPage={setPage}
                    page={page}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductosGroup;
