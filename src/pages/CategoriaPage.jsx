import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Vacio from "../components/Vacio";
import CategoriaFull from "../components/CategoriaPageComponents/CategoriaFull";
import SelectCategoria from "../components/CategoriaPageComponents/SelectCategoria";

const CategoriaPage = () => {
  const { idParams } = useParams(); //Se utiliza para consumir la api por id de categoria
  const [currentCategoria, setCurrentCategoria] = useState({
    id: idParams,
    nombre: "",
  }); // Setea la categoria actual, lo que ayuda a re-renderizar cuando cambiamos de categoria.
  const [hayProductos, setHayProductos] = useState(false); //Chequea que si existan productos para dicha categoria en caso que exista.
  const [productos, setProductos] = useState([]); //Los productos que vienen por la categoria
  const [categorias, setCategorias] = useState([]); //Las categorias disponibles
  const [categoriaInexistente, setCategoriaInexistente] = useState(false); //Chequea si la categoria existe o no, contrastando con el estado enviado desde la api.

  useEffect(() => {
    console.log(currentCategoria)
    //GET PRODUCTOS
    async function getProductos() {
      const fetchProductos = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/categorias/${idParams}/productos`
      );
      const jsonProductos = await fetchProductos.json();

      if (jsonProductos.success == false) {
        setCategoriaInexistente(true);
        return;
      }

      if (jsonProductos.data.Productos.length == 0) {
        setHayProductos(false);
        return;
      }

      setCurrentCategoria({
        currentCategoria,
        nombre: jsonProductos.data.nombre,
      });
      setProductos([...jsonProductos.data.Productos]);
      setHayProductos(true);
    }

    //GET CATEGORIAS
    async function getCategorias() {
      const fetchCategorias = await fetch(
        `http://localhost:8000/api/v0.5/webintercar/categorias`
      );
      const jsonCategorias = await fetchCategorias.json();
      setCategorias([...jsonCategorias.data]);
    }
    getCategorias();
    getProductos();
  }, [hayProductos]);

  return (
    <>
      {hayProductos ? (
          <>
          <SelectCategoria
            Categorias={categorias}
            currentCategoria={currentCategoria}
            setCurrentCategoria={setCurrentCategoria}
            setHayProductos={setHayProductos}
          />
        <CategoriaFull
          currentCategoria={currentCategoria}
          setCurrentCategoria={setCurrentCategoria}
          Categorias={categorias}
          idParams={idParams}
          hayProductos={hayProductos}
          productos={productos}
          setHayProductos={setHayProductos}
        />
        </>
      ) : (
        <>
          <SelectCategoria
            Categorias={categorias}
            currentCategoria={currentCategoria}
            setCurrentCategoria={setCurrentCategoria}
            setHayProductos={setHayProductos}
          />
          <Vacio
            msjGrande={
              categoriaInexistente
                ? `Esta categoría no existe, busca otra!`
                : `Aún no existen productos en esta categoría, navega en una diferente.`
            }
          />
        </>
      )}
    </>
  );
};

export default CategoriaPage;
